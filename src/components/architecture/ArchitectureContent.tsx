'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { capabilities } from '@/data/capabilities'
import { CATEGORY_MAP } from '@/types'
import { cases } from '@/data/cases'

const layers = [
  { id: 'entry', label: '数据入口层', color: 'from-emerald-400 to-emerald-600', desc: '个人微信 — 员工每天最高频使用的沟通工具，最大量的业务数据沉睡地', items: ['私聊对话', '群聊对话', '联系人列表', '朋友圈动态', '文件媒体', '微信支付'] },
  { id: 'engine', label: '三核引擎层', color: 'from-blue-400 to-blue-600', desc: '解密提取 + 页面自动化 + AI 智能处理，三核协同驱动', items: ['数据解密引擎', '页面自动化引擎', 'AI 智能处理引擎'] },
  { id: 'asset', label: '数据资产层', color: 'from-violet-400 to-violet-600', desc: '引擎产出沉淀为可持续利用的企业数据资产', items: ['对话数据库', '客户画像库', '知识库', '标签体系库'] },
  { id: 'scene', label: '业务场景层', color: 'from-amber-400 to-amber-600', desc: '将引擎能力转化为可落地的业务场景', items: ['销售运营', '客服售后', '营销内容', '团队协作', '数据洞察', '效率工具', '合规风控'] },
  { id: 'output', label: '输出交付层', color: 'from-rose-400 to-rose-600', desc: '所有引擎能力和场景落地的最终交付形态', items: ['自动化动作', '分析报告', '预警通知', '知识沉淀'] },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' as const } }),
}

export default function ArchitectureContent() {
  const [expandedLayer, setExpandedLayer] = useState<string | null>(null)
  const [expandedEngine, setExpandedEngine] = useState<string | null>(null)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-mesh py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl sm:text-4xl font-bold text-heading">
            产品架构全景图
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-3 text-body/70 max-w-3xl mx-auto">
            以个人微信为数据入口，以「解密提取 + 页面自动化 + AI 智能处理」为三核引擎，
            覆盖「数据获取 → 智能分析 → 自动执行 → 业务落地」全链路。
          </motion.p>
        </div>
      </section>

      {/* Architecture Layers - Interactive */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-2xl font-bold text-heading text-center mb-12">
            五层架构 · 从数据到价值
          </motion.h2>

          <div className="space-y-3">
            {layers.map((layer, i) => (
              <motion.div
                key={layer.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
              >
                <button
                  onClick={() => setExpandedLayer(expandedLayer === layer.id ? null : layer.id)}
                  className={`w-full text-left rounded-xl border transition-all ${
                    expandedLayer === layer.id
                      ? 'border-primary-200 bg-white shadow-lg shadow-primary/5'
                      : 'border-border bg-white hover:border-primary-200/50 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-4 p-5">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${layer.color} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                      {i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-heading">{layer.label}</h3>
                      <p className="text-sm text-body/60 mt-0.5 line-clamp-1">{layer.desc}</p>
                    </div>
                    <svg className={`w-5 h-5 text-muted shrink-0 transition-transform ${expandedLayer === layer.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                <AnimatePresence>
                  {expandedLayer === layer.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-2 ml-14">
                        <div className="flex flex-wrap gap-2">
                          {layer.items.map(item => (
                            <span key={item} className={`inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-gradient-to-r ${layer.color} text-white`}>
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {i < layers.length - 1 && (
                  <div className="flex justify-center py-1">
                    <svg className="w-4 h-4 text-muted/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Engines Detail */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-2xl font-bold text-heading text-center mb-4">
            三核引擎详解
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center text-body/60 mb-12">
            点击展开查看每个引擎的完整能力列表
          </motion.p>

          <div className="space-y-4">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="border border-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedEngine(expandedEngine === cap.id ? null : cap.id)}
                  className="w-full flex items-center gap-4 p-6 text-left hover:bg-surface-alt/50 transition-colors"
                >
                  <span className="text-3xl">{cap.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-heading">{cap.name}</h3>
                    <p className="text-sm text-body/60 mt-1">{cap.description}</p>
                  </div>
                  <svg className={`w-5 h-5 text-muted shrink-0 transition-transform ${expandedEngine === cap.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {expandedEngine === cap.id && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                      <div className="px-6 pb-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {cap.features.map(f => (
                          <div key={f.name} className="p-4 rounded-lg bg-surface-alt border border-border/50">
                            <h4 className="text-sm font-bold text-heading">{f.name}</h4>
                            <p className="text-xs text-body/60 mt-1">{f.desc}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engine Collaboration Flow */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-2xl font-bold text-heading text-center mb-12">
            三核引擎协同模式
          </motion.h2>

          <div className="bg-white rounded-2xl border border-border p-8 sm:p-12">
            <div className="flex flex-col items-center gap-4">
              {/* Flow Diagram */}
              <div className="w-full max-w-lg">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-full p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
                    <p className="text-sm font-bold text-emerald-700">A · 数据解密引擎</p>
                    <p className="text-xs text-emerald-600 mt-1">获取原料</p>
                  </div>
                  <svg className="w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>

                  <div className="w-full p-4 rounded-xl bg-blue-50 border border-blue-200 text-center">
                    <p className="text-sm font-bold text-blue-700">C · AI 智能处理引擎</p>
                    <p className="text-xs text-blue-600 mt-1">加工提炼 → 洞察 / 话术 / 标签</p>
                  </div>
                  <svg className="w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>

                  <div className="w-full p-4 rounded-xl bg-amber-50 border border-amber-200 text-center">
                    <p className="text-sm font-bold text-amber-700">B · 页面自动化引擎</p>
                    <p className="text-xs text-amber-600 mt-1">落地执行 → 自动发送 / 批量操作</p>
                  </div>
                  <svg className="w-5 h-5 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>

                  <div className="w-full p-4 rounded-xl bg-rose-50 border border-rose-200 text-center">
                    <p className="text-sm font-bold text-rose-700">闭环迭代</p>
                    <p className="text-xs text-rose-600 mt-1">执行结果反馈 → AI 持续优化 → 再次执行</p>
                  </div>
                </div>
              </div>

              {/* Collaboration Modes Table */}
              <div className="mt-8 w-full overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold text-heading">模式</th>
                      <th className="text-left py-3 px-4 font-semibold text-heading">路径</th>
                      <th className="text-left py-3 px-4 font-semibold text-heading">典型场景</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['A → C', '解密获取 → AI 分析', '客户画像、趋势分析'],
                      ['C → B', 'AI 决策 → 自动化执行', '个性化群发、自动回复'],
                      ['A → C → B', '完整闭环', '解密对话→分析意向→自动发送'],
                      ['A → B', '直接执行', '定时推送、批量转发'],
                    ].map(([mode, path, scene]) => (
                      <tr key={mode} className="border-b border-border/50 hover:bg-surface-alt/50">
                        <td className="py-3 px-4 font-bold text-primary">{mode}</td>
                        <td className="py-3 px-4 text-body/70">{path}</td>
                        <td className="py-3 px-4 text-body/60">{scene}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scene × Engine Matrix */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0} className="text-2xl font-bold text-heading text-center mb-12">
            场景 × 引擎依赖矩阵
          </motion.h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-3 px-4 font-semibold text-heading">场景域</th>
                  <th className="text-center py-3 px-4 font-semibold text-heading">数据解密</th>
                  <th className="text-center py-3 px-4 font-semibold text-heading">页面自动化</th>
                  <th className="text-center py-3 px-4 font-semibold text-heading">AI 处理</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(CATEGORY_MAP).map(([key, label]) => {
                  const sceneCases = cases.filter(c => c.category === key)
                  const hasDecrypt = sceneCases.some(c => c.engines.includes('decrypt'))
                  const hasAutomation = sceneCases.some(c => c.engines.includes('automation'))
                  const hasAi = sceneCases.some(c => c.engines.includes('ai'))
                  return (
                    <tr key={key} className="border-b border-border/50 hover:bg-surface-alt/50">
                      <td className="py-3 px-4 font-medium text-heading">{label}</td>
                      <td className="py-3 px-4 text-center">{hasDecrypt ? <span className="text-lg">🔓</span> : <span className="text-muted/30">—</span>}</td>
                      <td className="py-3 px-4 text-center">{hasAutomation ? <span className="text-lg">⚡</span> : <span className="text-muted/30">—</span>}</td>
                      <td className="py-3 px-4 text-center">{hasAi ? <span className="text-lg">🧠</span> : <span className="text-muted/30">—</span>}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}
