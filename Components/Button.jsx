import Link from 'next/link'

export function Button({ className = '', children, ...props }) {
  return (
    <Link href="/" className={`inline-flex items-center w-auto px-6 py-4 mt-6 text-lg font-bold text-white rounded-lg bg-brand-500 hover:bg-blue-700 ${className}`} {...props}>
      {/* <a > */}
        {children}
      {/* </a> */}
    </Link>
  )
}