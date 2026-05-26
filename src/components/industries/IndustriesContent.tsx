'use client'

import { motion } from 'framer-motion'
import { industries } from '@/data/industries'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' as const },
  }),
}

export default function IndustriesContent() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-mesh py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl sm:text-4xl font-bold text-heading">
            行业解决方案
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-3 text-body/70 max-w-2xl mx-auto">
            深入了解各行业的业务痛点，看 ChatScope 如何针对性解决
          </motion.p>

          {/* Quick Nav */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-8 flex flex-wrap justify-center gap-3">
            {industries.map(ind => (
              <a key={ind.id} href={`#${ind.id}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-border hover:border-primary-200 hover:bg-primary-50/50 text-sm font-medium text-heading transition-all">
                <span>{ind.icon}</span>
                {ind.name}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industry Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.id}
              id={ind.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="scroll-mt-24"
            >
              {/* Industry Header */}
              <motion.div variants={fadeUp} custom={0} className="flex items-start gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-primary-50 border border-primary-100 flex items-center justify-center text-3xl shrink-0">
                  {ind.icon}
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-primary bg-primary-50 px-3 py-1 rounded-full">PART {String(idx + 1).padStart(2, '0')}</span>
                  </div>
                  <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-heading">{ind.name}</h2>
                  <p className="mt-2 text-body/70 leading-relaxed max-w-3xl">{ind.painPoint}</p>
                </div>
              </motion.div>

              {/* Case Cards */}
              <div className="grid sm:grid-cols-2 gap-5">
                {ind.cases.map((c, i) => (
                  <motion.div key={c.title} variants={fadeUp} custom={i + 1} className="card-base p-6">
                    <h3 className="text-base font-bold text-heading mb-2">{c.title}</h3>
                    <p className="text-sm text-body/60 leading-relaxed">{c.description}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {c.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-50 text-primary border border-primary-100">{tag}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 bg-white border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-heading text-center mb-10">跨行业通用技巧</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🎭', title: '告诉 AI 你的身份', desc: 'AI 会根据你的身份调整输出，让结果更贴合实际需求' },
              { icon: '📋', title: '提供充分上下文', desc: '背景信息越完整，AI 输出越精准，效果越好' },
              { icon: '⏰', title: '善用自动化', desc: '把重复性工作交给自动化——日报、提醒、通知，一次设置永久生效' },
              { icon: '🔗', title: '组合使用能力', desc: '解密→分析→发送，将多个能力串联实现复杂工作流自动化' },
            ].map((tip, i) => (
              <div key={tip.title} className="text-center p-6 rounded-xl border border-border">
                <span className="text-3xl">{tip.icon}</span>
                <h3 className="mt-3 font-bold text-heading text-sm">{tip.title}</h3>
                <p className="mt-2 text-xs text-body/60 leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
