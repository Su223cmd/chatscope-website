export type EngineType = 'decrypt' | 'automation' | 'ai'

export type CaseCategory =
  | 'sales'
  | 'service'
  | 'marketing'
  | 'collaboration'
  | 'insight'
  | 'efficiency'
  | 'compliance'

export interface CaseItem {
  id: number
  title: string
  description: string
  tags: string[]
  category: CaseCategory
  engines: EngineType[]
}

export interface IndustryCase {
  title: string
  description: string
  tags: string[]
}

export interface Industry {
  id: string
  name: string
  icon: string
  painPoint: string
  cases: IndustryCase[]
}

export interface Capability {
  id: string
  name: string
  icon: string
  description: string
  features: { name: string; desc: string }[]
}

export const CATEGORY_MAP: Record<CaseCategory, string> = {
  sales: '销售运营',
  service: '客服售后',
  marketing: '营销内容',
  collaboration: '团队协作',
  insight: '数据洞察',
  efficiency: '效率工具',
  compliance: '合规风控',
}

export const ENGINE_MAP: Record<EngineType, string> = {
  decrypt: '数据解密',
  automation: '页面自动化',
  ai: 'AI 智能处理',
}
