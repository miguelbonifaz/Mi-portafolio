import Link from 'next/link'
import { getProfile } from '@/data'

export default function Footer() {
  const profile = getProfile()

  return (
    <footer className="w-full thin-border-top py-4 bg-white z-10 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-xs md:text-sm text-gray-600">
          <Link href="/" className="smooth-color hover:text-black link-underline">
            © Miguel Bonifaz
          </Link>
          <a
            href={`mailto:${profile.email}`}
            className="smooth-color hover:text-black link-underline"
          >
            {profile.email}
          </a>
          <Link href="/#contact" className="smooth-color hover:text-black link-underline">
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  )
}
