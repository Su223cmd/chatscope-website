'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Fuse from 'fuse.js'
import { CaseItem, CATEGORY_MAP, ENGINE_MAP } from '@/types'

const categories: { key: string | null; label: string }[] = [
  { key: null, label: '全部' },
  { key: 'sales', label: '销售运营' },
  { key: 'service', label: '客服售后' },
  { key: 'marketing', label: '营销内容' },
  { key: 'collaboration', label: '团队协作' },
  { key: 'insight', label: '数据洞察' },
  { key: 'efficiency', label: '效率工具' },
  { key: 'compliance', label: '合规风控' },
]

export default function CasesContent({ cases }: { cases: CaseItem[] }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<string | null>(null)
  const [selected, setSelected] = useState<CaseItem | null>(null)

  const fuse = useMemo(() => new Fuse(cases, {
    keys: [{ name: 'title', weight: 0.4 }, { name: 'description', weight: 0.3 }, { name: 'tags', weight: 0.3 }],
    threshold: 0.35,
  }), [cases])

  const filtered = useMemo(() => {
    let results = query.trim() ? fuse.search(query).map(r => r.item) : cases
    if (category) results = results.filter(c => c.category === category)
    return results
  }, [query, category, fuse, cases])

  return (
    <div className="min-h-screen">
      {/* Hero + Search */}
      <section className="bg-mesh py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl sm:text-4xl font-bold text-heading text-center">
            玩法案例合集
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-3 text-body/70 text-center max-w-2xl mx-auto">
            34 个场景玩法，覆盖微信数据获取、智能分析、自动化执行全链路
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-8 max-w-xl mx-auto">
            <div className="relative">
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="搜索玩法、场景、标签..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white border border-border focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none text-sm transition-all shadow-sm"
              />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-6 flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat.key ?? 'all'}
                onClick={() => setCategory(cat.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  category === cat.key
                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                    : 'bg-white text-body border border-border hover:border-primary-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Card Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <svg className="mx-auto w-16 h-16 text-muted/40 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <p className="text-lg text-muted">没有找到匹配的玩法，试试其他关键词？</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <AnimatePresence mode="popLayout">
                {filtered.map((c, i) => (
                  <motion.div
                    key={c.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: Math.min(i * 0.03, 0.3) }}
                    onClick={() => setSelected(c)}
                    className="card-base p-6 flex flex-col cursor-pointer"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary-50 text-primary text-sm font-bold">{String(c.id).padStart(2, '0')}</span>
                      <span className="text-xs font-medium text-muted">{CATEGORY_MAP[c.category]}</span>
                    </div>
                    <h3 className="text-base font-bold text-heading mb-2">{c.title}</h3>
                    <p className="text-sm text-body/60 leading-relaxed line-clamp-2 flex-1">{c.description}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {c.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-50 text-primary border border-primary-100">{tag}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>

      {/* Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelected(null)} className="fixed inset-0 z-50 bg-heading/40 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} onClick={e => e.stopPropagation()} className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 max-h-[80vh] overflow-y-auto">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary-50 text-primary font-bold">{String(selected.id).padStart(2, '0')}</span>
                  <span className="text-sm font-medium text-primary bg-primary-50 px-3 py-1 rounded-full">{CATEGORY_MAP[selected.category]}</span>
                </div>
                <button onClick={() => setSelected(null)} className="p-1.5 rounded-lg hover:bg-surface-alt text-muted transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
              <h2 className="text-xl font-bold text-heading mb-4">{selected.title}</h2>
              <p className="text-body/80 leading-relaxed mb-6">{selected.description}</p>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">标签</h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full text-sm bg-primary-50 text-primary border border-primary-100">{tag}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">依赖引擎</h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.engines.map(eng => (
                      <span key={eng} className="px-3 py-1 rounded-full text-sm bg-surface-alt text-body border border-border">{ENGINE_MAP[eng]}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
