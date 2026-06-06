import Link from 'next/link';

type TrustLink = {
  label: string;
  href: string;
  external?: boolean;
};

type AnswerFirstBlockProps = {
  title?: string;
  answer: string;
  checkedAt: string;
  sourceBasis: string;
  officialLinks?: TrustLink[];
  internalLinks?: TrustLink[];
};

export default function AnswerFirstBlock({
  title = 'Fast answer',
  answer,
  checkedAt,
  sourceBasis,
  officialLinks = [],
  internalLinks = [],
}: AnswerFirstBlockProps) {
  return (
    <section className="not-prose my-6 rounded-2xl border border-emerald-500/30 bg-emerald-950/25 p-5 text-sm text-gray-200 shadow-lg shadow-emerald-950/20">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div className="max-w-3xl">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-300">{title}</p>
          <p className="mt-2 leading-7 text-gray-100">{answer}</p>
        </div>
        <div className="rounded-xl border border-gray-700 bg-gray-950/60 px-4 py-3 text-xs text-gray-300 md:min-w-52">
          <p><span className="font-semibold text-white">Last updated:</span> {checkedAt}</p>
          <p className="mt-1"><span className="font-semibold text-white">Source basis:</span> {sourceBasis}</p>
        </div>
      </div>

      {(officialLinks.length > 0 || internalLinks.length > 0) ? (
        <div className="mt-4 grid gap-3 border-t border-emerald-500/20 pt-4 md:grid-cols-2">
          {officialLinks.length > 0 ? (
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-emerald-200">Official reference</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {officialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer nofollow' : undefined}
                    className="rounded-full border border-emerald-500/30 bg-gray-900 px-3 py-1 text-xs text-emerald-100 hover:border-emerald-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ) : null}
          {internalLinks.length > 0 ? (
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-amber-200">Next task</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {internalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-full border border-amber-500/30 bg-gray-900 px-3 py-1 text-xs text-amber-100 hover:border-amber-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      ) : null}

      <p className="mt-4 border-t border-gray-700/70 pt-3 text-xs text-gray-400">
        Legion Remix Hub is an independent player resource and is not affiliated with or endorsed by Blizzard Entertainment.
      </p>
    </section>
  );
}
