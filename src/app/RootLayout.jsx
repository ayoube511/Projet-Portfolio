// src/app/RootLayout.jsx
import { Outlet, NavLink } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function RootLayout() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' ||
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  )

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Header */}
     <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-xl shadow-glow supports-[backdrop-filter]:bg-background/70">
        <div className="container flex h-14 items-center">
          {/* Logo / Nom */}
          <NavLink to="/" className="mr-6 flex items-center space-x-2 font-bold text-xl">
            <span className="text-primary">Moubssite Ayoube</span>
          </NavLink>

          {/* Navigation */}
          <nav className="flex items-center gap-8 text-sm font-medium hover-glow">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? 'text-primary font-medium' : 'text-muted-foreground hover:text-primary'
              }
            >
              Projets
            </NavLink>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                isActive ? 'text-primary font-medium' : 'text-muted-foreground hover:text-primary'
              }
            >
              Parcours
            </NavLink>
            <NavLink
              to="/education"
              className={({ isActive }) =>
                isActive ? 'text-primary font-medium' : 'text-muted-foreground hover:text-primary'
              }
            >
              Formations
            </NavLink>
            <NavLink
              to="/certifications"
              className={({ isActive }) =>
                isActive ? 'text-primary font-medium' : 'text-muted-foreground hover:text-primary'
              }
            >
              Certifications
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-primary font-medium' : 'text-muted-foreground hover:text-primary'
              }
            >
              Contact
            </NavLink>

            {/* Dark mode toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </nav>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="container mx-auto py-8 px-4">
        <Outlet />
      </main>

      {/* Footer simple */}
      <footer className="border-t py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Moubssite • Built with React + Tailwind + shadcn/ui
      </footer>
    </div>
  )
}