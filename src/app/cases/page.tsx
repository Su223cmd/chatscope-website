import { Metadata } from 'next'
import CasesContent from '@/components/cases/CasesContent'
import { cases } from '@/data/cases'

export const metadata: Metadata = {
  title: '玩法案例',
  description: '34 个场景玩法，覆盖微信数据获取、智能分析、自动化执行全链路。',
}

export default function CasesPage() {
  return <CasesContent cases={cases} />
}
