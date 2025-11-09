'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}

const defaultTheme: ThemeContextType = {
  theme: 'light',
  toggleTheme: () => {},
  isDark: false,
};

const ThemeContext = createContext<ThemeContextType>(defaultTheme);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const root = document.documentElement;
    
    // Get saved theme or default to light
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    let initialTheme: Theme;
    
    if (savedTheme === 'light' || savedTheme === 'dark') {
      initialTheme = savedTheme;
    } else {
      // Default to light theme
      initialTheme = 'light';
    }
    
    setTheme(initialTheme);
    
    // Apply theme immediately to DOM
    if (initialTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    setMounted(true);
  }, []);

  // Apply theme whenever it changes
  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return;
    
    const root = document.documentElement;
    
    // Apply theme to DOM - this is what Tailwind CSS v4 uses
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === 'light' ? 'dark' : 'light';
    });
  };

  // Prevent flash of wrong theme
  if (!mounted) {
    return (
      <div style={{ visibility: 'hidden' }}>
        {children}
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === 'dark' }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
