'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from './Icons'

function ThemeSwitch() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div>
      <button className='border border-purple-500 mt-3 rounded-2xl p-1 hover:bg-purple-500 hover:bg-opacity-10 dark:hover:bg-opacity-10 dark:hover:bg-amber-50' onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{(theme === 'dark' ? <SunIcon/> : <MoonIcon/>)}</button>

    </div>
  )
}
export default ThemeSwitch
