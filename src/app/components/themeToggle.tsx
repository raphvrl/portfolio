'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

const styles = {
  button: 'w-8 h-8 rounded-lg flex items-center justify-center hover:scale-110 transition',
  icon: 'w-5 h-5 text-gray-800 dark:text-gray-200'
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className={styles.button}
      aria-label="Changer le thème"
    >
      {resolvedTheme === 'dark' ? (
        <Sun className={styles.icon} />
      ) : (
        <Moon className={styles.icon} />
      )}
    </button>
  )
}