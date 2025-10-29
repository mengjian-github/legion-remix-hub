'use client';

import React, { useEffect, useMemo, useState } from "react";
import { bronzeEntries } from "@/data/rewards";

type Props = {
  selectedRewards: Set<string>;
  toggleReward: (id: string) => void;
  filter: string;
  searchTerm: string;
};

// Client-side only rewards list with internal filtering + pagination.
// Keeps server HTML lean so SSR doesn't inflate non-primary keyword counts.
export default function RewardsList({ selectedRewards, toggleReward, filter, searchTerm }: Props) {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(24);

  const filteredRewards = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return bronzeEntries.filter((reward) => {
      const matchesType = filter === 'all' || reward.type === filter;
      if (!matchesType) return false;
      if (!term) return true;
      const haystack = [
        reward.name,
        reward.sectionTitle,
        reward.source,
        reward.requirement,
        reward.achievement,
        ...Object.values(reward.metadata),
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(term);
    });
  }, [filter, searchTerm]);

  // Reset to first page when criteria changes
  useEffect(() => {
    setPage(1);
  }, [filter, searchTerm]);

  const totalPages = Math.max(1, Math.ceil(filteredRewards.length / perPage));
  const paginatedRewards = useMemo(() => {
    const start = (page - 1) * perPage;
    return filteredRewards.slice(start, start + perPage);
  }, [filteredRewards, page, perPage]);

  return (
    <>
      {/* Rewards List */}
      <div className="space-y-3">
        {paginatedRewards.map((reward) => {
          // Keep details concise to avoid repeating generic terms like "ensemble" too often
          const detailParts = [reward.source, reward.requirement, reward.achievement].filter(Boolean) as string[];

          return (
            <div
              key={reward.id}
              className={`bg-gray-800 border rounded-lg p-4 cursor-pointer transition-all ${
                selectedRewards.has(reward.id)
                  ? 'border-green-500 bg-green-900/20'
                  : 'border-gray-700 hover:border-gray-600'
              }`}
              onClick={() => toggleReward(reward.id)}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-start space-x-4">
                  <input
                    type="checkbox"
                    checked={selectedRewards.has(reward.id)}
                    onChange={() => toggleReward(reward.id)}
                    className="mt-1 w-5 h-5 rounded text-green-600 focus:ring-green-500"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{reward.name}</h3>
                    {detailParts.length > 0 && (
                      <p className="text-sm text-gray-400 mt-1">{detailParts.slice(0, 2).join(' • ')}</p>
                    )}
                    <div className="flex gap-2 flex-wrap mt-2">
                      <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">{reward.type}</span>
                      <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">{reward.sectionTitle}</span>
                      {reward.phase && (
                        <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">Phase {reward.phase}</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="text-right min-w-[120px]">
                  <div className="text-2xl font-bold text-yellow-500">
                    {reward.cost?.amount ? reward.cost.amount.toLocaleString() : '—'}
                  </div>
                  <div className="text-xs text-gray-400">Bronze</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty state */}
      {filteredRewards.length === 0 && (
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-12 text-center">
          <p className="text-gray-400">No rewards found matching your filters.</p>
        </div>
      )}

      {/* Pagination Controls */}
      {filteredRewards.length > 0 && (
        <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-3 bg-gray-800 border border-gray-700 rounded-lg p-4">
          <div className="text-sm text-gray-300">
            Showing <span className="font-semibold text-white">{(page - 1) * perPage + 1}</span>
            –<span className="font-semibold text-white">{Math.min(page * perPage, filteredRewards.length)}</span>
            of <span className="font-semibold text-white">{filteredRewards.length}</span>
          </div>
          <div className="flex items-center gap-3">
            <label className="text-sm text-gray-300">Per page</label>
            <select
              value={perPage}
              onChange={(e) => {
                setPerPage(parseInt(e.target.value, 10));
                setPage(1);
              }}
              className="bg-gray-700 border border-gray-600 text-white text-sm rounded px-2 py-1"
            >
              <option value={12}>12</option>
              <option value={24}>24</option>
              <option value={48}>48</option>
              <option value={96}>96</option>
            </select>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className={`px-3 py-1 rounded-md text-sm ${page === 1 ? 'bg-gray-700 text-gray-500' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
                aria-label="Previous page"
              >
                Prev
              </button>
              <span className="text-sm text-gray-300">
                Page <span className="text-white font-semibold">{page}</span> / {totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className={`px-3 py-1 rounded-md text-sm ${page === totalPages ? 'bg-gray-700 text-gray-500' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
                aria-label="Next page"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
