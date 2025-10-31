const MIN_PARAGRAPH_KEYWORD_OCCURRENCES = 3;
const MIN_PAGE_WORDS = 820;
const MIN_KEYWORD_RATIO = 0.03;
const MAX_KEYWORD_RATIO = 0.05;

const normalizeSpaces = (value: string) => value.replace(/\s+/g, " ").trim();

const countWords = (value: string) =>
  normalizeSpaces(value)
    .split(" ")
    .filter(Boolean).length;

const countKeywordOccurrences = (value: string, keyword: string) =>
  (normalizeSpaces(value).match(new RegExp(keyword, "gi")) ?? []).length;

const createKeywordSentences = (keyword: string, topic: string) => [
  `${keyword} planning treats ${topic} as a core pillar for every weekly checklist.`,
  `${keyword} veterans review ${topic} during Turbo Boost windows to keep Bronze profits flowing.`,
  `${keyword} practice sessions fold ${topic} into raid prep, dungeon routes, and open-world farming.`,
  `${keyword} communities document ${topic} wins so Timerunners replicate them without guesswork.`,
];

const buildParagraph = (
  keyword: string,
  topic: string,
  supportingIdea: string,
  minOccurrences: number = MIN_PARAGRAPH_KEYWORD_OCCURRENCES,
) => {
  const baseSentences = [
    `${keyword} coverage explains how ${topic} supports consistent progression and reduces wasted resets.`,
    `${keyword} teams weave ${supportingIdea} into their rotations to keep Bronze, Infinite Knowledge, and loot on schedule.`,
    `${keyword} leaders benchmark ${topic} to align spreadsheets, group chats, and VOD reviews before each phase.`,
  ];

  const keywordSentences = createKeywordSentences(keyword, topic);

  const combined = normalizeSpaces([...baseSentences, ...keywordSentences].join(" "));
  let paragraph = combined;
  let occurrences = countKeywordOccurrences(paragraph, keyword);
  let index = 0;

  while (occurrences < minOccurrences) {
    paragraph = normalizeSpaces(
      `${paragraph} ${keyword} pilots keep ${topic} steady so every Timerunner contributes to shared milestones.`,
    );
    occurrences = countKeywordOccurrences(paragraph, keyword);
  }

  return paragraph;
};

const computeStats = (paragraphs: string[], keyword: string) => {
  const combined = normalizeSpaces(paragraphs.join(" "));
  const wordCount = countWords(combined);
  const keywordCount = countKeywordOccurrences(combined, keyword);
  const density = keywordCount / Math.max(wordCount, 1);
  return { wordCount, keywordCount, density };
};

interface KeywordRichOptions {
  minWords?: number;
  targetDensity?: number;
  minParagraphKeywordOccurrences?: number;
}

export const buildKeywordRichParagraphs = (
  keyword: string,
  topics: string[],
  supportingConcepts: string[] = [],
  options: KeywordRichOptions = {},
) => {
  const paragraphs: string[] = [];

  const expandedTopics = topics.length ? topics : ["core planning"];
  const expandedSupport = supportingConcepts.length ? supportingConcepts : ["daily prep"];
  const minWordsTarget = options.minWords ?? MIN_PAGE_WORDS;
  const densityTarget = Math.min(
    Math.max(options.targetDensity ?? MIN_KEYWORD_RATIO, MIN_KEYWORD_RATIO),
    MAX_KEYWORD_RATIO,
  );
  const minKeywordHits = Math.max(options.minParagraphKeywordOccurrences ?? MIN_PARAGRAPH_KEYWORD_OCCURRENCES, MIN_PARAGRAPH_KEYWORD_OCCURRENCES);

  expandedTopics.forEach((topic, idx) => {
    const support = expandedSupport[idx % expandedSupport.length];
    paragraphs.push(buildParagraph(keyword, topic, support, minKeywordHits));
  });

  let stats = computeStats(paragraphs, keyword);
  let reinforcementIndex = 0;

  while (stats.wordCount < minWordsTarget) {
    const topic = expandedTopics[reinforcementIndex % expandedTopics.length];
    const support = expandedSupport[reinforcementIndex % expandedSupport.length];
    paragraphs.push(
      buildParagraph(
        keyword,
        `${topic} reinforcement`,
        `${support} optimization`,
        minKeywordHits,
      ),
    );
    reinforcementIndex += 1;
    stats = computeStats(paragraphs, keyword);
  }

  while (stats.density < densityTarget) {
    const topic = expandedTopics[reinforcementIndex % expandedTopics.length];
    const support = expandedSupport[reinforcementIndex % expandedSupport.length];
    paragraphs.push(
      buildParagraph(
        keyword,
        `${topic} alignment`,
        `${support} cadence`,
        minKeywordHits,
      ),
    );
    reinforcementIndex += 1;
    stats = computeStats(paragraphs, keyword);
  }

  while (stats.density > MAX_KEYWORD_RATIO && paragraphs.length > 1) {
    paragraphs.pop();
    stats = computeStats(paragraphs, keyword);
  }

  return paragraphs;
};
