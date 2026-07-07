'use client';
import { useEffect, useState } from 'react';

export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    setTimeout(() => setIsDark(darkMode), 0);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));

    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-6 right-6 z-50 rounded-full bg-white p-3 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800"
    >
      {isDark ? (
        <div className="text-yellow-500" />
      ) : (
        <div className="text-gray-700" />
      )}
    </button>
  );
}
