'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { cases } from '@/data/cases'
import { capabilities } from '@/data/capabilities'
import { industries } from '@/data/industries'
import { CATEGORY_MAP } from '@/types'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' as const },
  }),
}

export default function HomeContent() {
  const featured = cases.slice(0, 6)

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-mesh min-h-[85vh] flex items-center">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary-200/30 blur-3xl animate-float pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary-100/40 blur-3xl animate-float-delay pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-200 text-primary text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                微信数据智能工具
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                <span className="text-gradient">ChatScope</span>
                <br />
                <span className="text-heading">聊天透镜</span>
              </h1>
              <p className="mt-6 text-xl text-body/80 leading-relaxed max-w-2xl">
                以个人微信为数据入口，以「解密提取 + 页面自动化 + AI 智能处理」为三核引擎，
                让沉睡的聊天记录变成可分析、可行动的业务资产。
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/cases" className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-primary text-white font-medium text-sm shadow-lg shadow-primary/25 hover:bg-primary-dark transition-all">
                  查看玩法案例
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <Link href="/architecture" className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-white text-heading font-medium text-sm border border-border hover:border-primary-200 shadow-sm hover:shadow-md transition-all">
                  了解产品架构
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three Engines */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="text-center mb-16">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl sm:text-4xl font-bold text-heading">三核引擎驱动</motion.h2>
            <motion.p variants={fadeUp} custom={1} className="mt-4 text-body/70 max-w-2xl mx-auto">
              数据解密、页面自动化、AI 智能处理三大引擎协同工作，覆盖从数据获取到业务落地的全链路。
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div key={cap.id} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }} variants={fadeUp} custom={i} className="card-base p-8 group">
                <div className="w-14 h-14 rounded-2xl bg-primary-50 border border-primary-100 flex items-center justify-center text-2xl mb-6 group-hover:bg-primary-100 transition-colors">{cap.icon}</div>
                <h3 className="text-lg font-bold text-heading mb-3">{cap.name}</h3>
                <p className="text-sm text-body/70 leading-relaxed mb-6">{cap.description}</p>
                <ul className="space-y-2">
                  {cap.features.slice(0, 4).map(f => (
                    <li key={f.name} className="flex items-start gap-2 text-sm text-body/60">
                      <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {f.name}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cases */}
      <section className="py-24 dot-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="flex items-end justify-between mb-12">
            <div>
              <motion.h2 variants={fadeUp} custom={0} className="text-3xl sm:text-4xl font-bold text-heading">热门玩法</motion.h2>
              <motion.p variants={fadeUp} custom={1} className="mt-3 text-body/70">覆盖销售、客服、营销、协作等多个场景</motion.p>
            </div>
            <motion.div variants={fadeUp} custom={2}>
              <Link href="/cases" className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-dark transition-colors">
                查看全部 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </motion.div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((c, i) => (
              <motion.div key={c.id} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-30px' }} variants={fadeUp} custom={i} className="card-base p-6 flex flex-col">
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
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/cases" className="inline-flex items-center gap-1 text-sm font-medium text-primary">
              查看全部玩法 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="text-center mb-12">
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl sm:text-4xl font-bold text-heading">覆盖多个行业</motion.h2>
            <motion.p variants={fadeUp} custom={1} className="mt-3 text-body/70">从保险到法律，从教育到电商，各行业都在用 ChatScope 提升效率</motion.p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {industries.map((ind, i) => (
              <motion.div key={ind.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <Link href={`/industries#${ind.id}`} className="flex flex-col items-center gap-3 p-5 rounded-xl border border-border hover:border-primary-200 hover:bg-primary-50/50 transition-all group">
                  <span className="text-3xl group-hover:scale-110 transition-transform">{ind.icon}</span>
                  <span className="text-sm font-medium text-heading">{ind.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-mesh">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl sm:text-4xl font-bold text-heading">
              你的微信，比你想象中<span className="text-gradient">更有价值</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="mt-5 text-lg text-body/70 max-w-2xl mx-auto">
              34 个场景玩法、7 大行业解决方案，覆盖从销售到客服、从营销到合规的全业务链路。
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/cases" className="inline-flex items-center px-8 py-3.5 rounded-xl bg-primary text-white font-medium shadow-lg shadow-primary/25 hover:bg-primary-dark transition-all">探索全部玩法</Link>
              <Link href="/demo" className="inline-flex items-center px-8 py-3.5 rounded-xl bg-white text-heading font-medium border border-border hover:border-primary-200 shadow-sm transition-all">查看产品演示</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
