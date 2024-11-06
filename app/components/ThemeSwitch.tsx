'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

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
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{(theme === 'dark' ? 'Light' : 'Dark')}</button>

    </div>
  )
}
export default ThemeSwitch
