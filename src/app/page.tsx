import { Metadata } from 'next'
import HomeContent from '@/components/home/HomeContent'

export const metadata: Metadata = {
  title: 'ChatScope · 聊天透镜 — 微信数据智能助手',
  description: '基于个人微信数据的智能助手工具——解密对话、自动化操作、AI 智能处理，让微信聊天数据变成可分析、可行动的业务资产。',
}

export default function HomePage() {
  return <HomeContent />
}
