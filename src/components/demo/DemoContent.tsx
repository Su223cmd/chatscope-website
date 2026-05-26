'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { capabilities } from '@/data/capabilities'

const tabs = capabilities.map(cap => ({
  id: cap.id,
  label: cap.name,
  icon: cap.icon,
  description: cap.description,
  features: cap.features,
  flow: getFlowDiagram(cap.id),
}))

function getFlowDiagram(id: string) {
  switch (id) {
    case 'decrypt':
      return {
        steps: [
          { label: '微信 PC 端', desc: '本地数据库' },
          { label: '解密引擎', desc: '密钥提取 + 解密' },
          { label: '数据提取', desc: '对话/联系人/文件' },
          { label: '结构化输出', desc: 'JSON/CSV/数据库' },
        ],
        demo: (
          <div className="bg-surface-alt rounded-xl p-6 border border-border">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-2 text-xs text-muted">对话数据导出</span>
            </div>
            <div className="font-mono text-xs space-y-1 text-body/70">
              <p className="text-primary">{'>'} 导出联系人: 1,286 位好友</p>
              <p className="text-primary">{'>'} 导出对话: 45,230 条消息</p>
              <p className="text-primary">{'>'} 导出群聊: 32 个群组</p>
              <p className="text-primary">{'>'} 导出文件: 892 个附件</p>
              <p className="text-emerald-600 mt-2">✓ 全量数据解密完成，耗时 2.3s</p>
            </div>
          </div>
        ),
      }
    case 'automation':
      return {
        steps: [
          { label: '任务配置', desc: '目标 + 内容 + 时间' },
          { label: '多号连接', desc: '微信多开 + 聚合' },
          { label: '自动执行', desc: '发送/回复/转发' },
          { label: '结果反馈', desc: '执行状态 + 日志' },
        ],
        demo: (
          <div className="bg-surface-alt rounded-xl p-6 border border-border">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-2 text-xs text-muted">聚合聊天面板</span>
            </div>
            <div className="flex gap-4 text-xs">
              <div className="w-1/3 space-y-2">
                <div className="p-2 rounded bg-white border border-primary-200">
                  <p className="font-bold text-primary">账号 1</p>
                  <p className="text-muted">3 条未读</p>
                </div>
                <div className="p-2 rounded bg-white border border-border">
                  <p className="font-bold text-heading">账号 2</p>
                  <p className="text-muted">1 条未读</p>
                </div>
                <div className="p-2 rounded bg-white border border-border">
                  <p className="font-bold text-heading">账号 3</p>
                  <p className="text-muted">无未读</p>
                </div>
              </div>
              <div className="flex-1 p-3 rounded bg-white border border-border space-y-2">
                <p className="font-bold text-heading text-sm">张经理</p>
                <div className="p-2 rounded-lg bg-primary-50 text-primary">好的，方案明天发你</div>
                <div className="p-2 rounded-lg bg-surface-alt text-body/70">收到，期待！</div>
                <div className="flex gap-2 mt-2">
                  <input className="flex-1 px-3 py-1.5 rounded-lg border border-border text-xs" placeholder="输入消息..." readOnly />
                  <button className="px-3 py-1.5 rounded-lg bg-primary text-white text-xs">发送</button>
                </div>
              </div>
            </div>
          </div>
        ),
      }
    default: // ai
      return {
        steps: [
          { label: '数据输入', desc: '聊天记录/客户信息' },
          { label: 'AI 分析', desc: '理解/提炼/生成' },
          { label: '结构化输出', desc: '画像/话术/报告' },
          { label: '行动建议', desc: '下一步操作建议' },
        ],
        demo: (
          <div className="bg-surface-alt rounded-xl p-6 border border-border">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-2 text-xs text-muted">AI 客户画像分析</span>
            </div>
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-lg bg-white border border-border">
                <p className="font-bold text-heading mb-1">客户画像：张经理</p>
                <div className="grid grid-cols-2 gap-2 text-body/70">
                  <p>购买意向: <span className="text-emerald-600 font-bold">高 (85%)</span></p>
                  <p>决策角色: <span className="text-heading font-bold">决策者</span></p>
                  <p>关注点: 价格、售后</p>
                  <p>沟通阶段: 报价阶段</p>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-primary-50 border border-primary-100">
                <p className="font-bold text-primary mb-1">AI 建议</p>
                <p className="text-body/70">客户处于报价阶段，高意向。建议今日内发送差异化方案，强调售后服务优势。</p>
              </div>
            </div>
          </div>
        ),
      }
  }
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' as const } }),
}

export default function DemoContent() {
  const [activeTab, setActiveTab] = useState('decrypt')
  const current = tabs.find(t => t.id === activeTab)!

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-mesh py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl sm:text-4xl font-bold text-heading">
            产品能力演示
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-3 text-body/70 max-w-2xl mx-auto">
            了解每个引擎的工作流程和实际效果
          </motion.p>
        </div>
      </section>

      {/* Tabs + Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                    : 'bg-white text-body border border-border hover:border-primary-200'
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            {/* Description */}
            <div className="text-center mb-10">
              <p className="text-body/70 max-w-2xl mx-auto">{current.description}</p>
            </div>

            {/* Flow Steps */}
            <div className="mb-10">
              <div className="flex items-center justify-center gap-0">
                {current.flow.steps.map((step, i) => (
                  <div key={step.label} className="flex items-center">
                    <div className="flex flex-col items-center text-center w-28 sm:w-36">
                      <div className="w-12 h-12 rounded-full bg-primary-50 border-2 border-primary flex items-center justify-center text-primary font-bold text-lg">
                        {i + 1}
                      </div>
                      <p className="mt-2 text-sm font-bold text-heading">{step.label}</p>
                      <p className="text-xs text-body/50 mt-0.5">{step.desc}</p>
                    </div>
                    {i < current.flow.steps.length - 1 && (
                      <svg className="w-8 h-8 text-primary/30 shrink-0 -mt-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Demo Screenshot */}
            <div className="mb-10">
              <h3 className="text-lg font-bold text-heading text-center mb-4">效果示意</h3>
              {current.flow.demo}
            </div>

            {/* Feature Grid */}
            <div>
              <h3 className="text-lg font-bold text-heading text-center mb-4">能力清单</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {current.features.map((f, i) => (
                  <div key={f.name} className="p-4 rounded-xl border border-border bg-white hover:border-primary-200 hover:shadow-md transition-all">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-lg bg-primary-50 flex items-center justify-center text-primary text-xs font-bold">{i + 1}</div>
                      <h4 className="text-sm font-bold text-heading">{f.name}</h4>
                    </div>
                    <p className="text-xs text-body/60 leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
