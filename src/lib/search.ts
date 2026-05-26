import Fuse from 'fuse.js'
import { CaseItem } from '@/types'

export function createCaseSearchEngine(items: CaseItem[]) {
  return new Fuse(items, {
    keys: [
      { name: 'title', weight: 0.4 },
      { name: 'description', weight: 0.3 },
      { name: 'tags', weight: 0.3 },
    ],
    threshold: 0.35,
    includeScore: true,
  })
}

export function searchCases(
  engine: Fuse<CaseItem>,
  query: string,
  category: string | null,
  allCases: CaseItem[]
): CaseItem[] {
  let results = query.trim()
    ? engine.search(query).map(r => r.item)
    : allCases

  if (category) {
    results = results.filter(c => c.category === category)
  }

  return results
}
