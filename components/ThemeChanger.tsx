import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';

export default function ThemeChanger() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  function changeTheme() {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }

  if (!mounted) return null;

  return (
    <div>
      <button
        className='dark:bg-amber-200 p-1 bg-indigo-600 rounded'
        onClick={changeTheme}>
        {theme === 'dark' ? (
          // slate-800
          <HiSun color='rgb(30 41 59 / var(--tw-bg-opacity)' size={30} />
        ) : (
          // amber-100
          <HiMoon color='rgb(254 243 199 / var(--tw-text-opacity)' size={30} />
        )}
      </button>
    </div>
  );
}
