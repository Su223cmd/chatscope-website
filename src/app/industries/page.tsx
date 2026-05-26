import { Metadata } from 'next'
import IndustriesContent from '@/components/industries/IndustriesContent'

export const metadata: Metadata = {
  title: '行业方案',
  description: '覆盖金融保险、教育培训、房产中介、电商私域、法律服务、医疗健康、招聘猎头等行业的微信数据智能解决方案。',
}

export default function IndustriesPage() {
  return <IndustriesContent />
}
