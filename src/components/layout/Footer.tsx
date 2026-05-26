import Link from 'next/link'

const footerLinks = [
  { href: '/cases', label: '玩法案例' },
  { href: '/industries', label: '行业方案' },
  { href: '/architecture', label: '产品架构' },
  { href: '/demo', label: '产品演示' },
]

export default function Footer() {
  return (
    <footer className="bg-heading text-white/70 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-light to-primary flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">ChatScope</span>
            </Link>
            <p className="text-sm leading-relaxed text-white/50">
              基于个人微信数据的智能助手工具——解密对话、自动化操作、AI 智能处理，三核驱动。
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">快速导航</h4>
            <nav className="space-y-2.5">
              {footerLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/50 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">联系我们</h4>
            <p className="text-sm text-white/50 leading-relaxed">
              如需了解更多或预约演示<br />
              请通过微信与我们联系
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} ChatScope. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            聊天透镜 · 让微信数据产生价值
          </p>
        </div>
      </div>
    </footer>
  )
}
