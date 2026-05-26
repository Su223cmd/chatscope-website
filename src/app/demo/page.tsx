import { Metadata } from 'next'
import DemoContent from '@/components/demo/DemoContent'

export const metadata: Metadata = {
  title: '产品演示',
  description: '了解数据解密引擎、页面自动化引擎、AI 智能处理引擎的工作流程和实际效果。',
}

export default function DemoPage() {
  return <DemoContent />
}
