import Link from 'next/link'
import ThemeSwitch from './ThemeSwitch'

function NavBar() {
  return (
    <div className="mx-auto max-w-5xl px-6 ">
      <div className="flex justify-between items-center h-16 w-full">
        <Link href="/">
          <div>Dev Blog</div>
        </Link>
        <ThemeSwitch/>
      </div>
    </div>
  )
}
export default NavBar
