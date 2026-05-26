import { Metadata } from 'next'
import ArchitectureContent from '@/components/architecture/ArchitectureContent'

export const metadata: Metadata = {
  title: '产品架构',
  description: '五层架构全景图：数据入口层、三核引擎层、数据资产层、业务场景层、输出交付层。',
}

export default function ArchitecturePage() {
  return <ArchitectureContent />
}
