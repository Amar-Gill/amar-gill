import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { HiBan, HiMoon, HiOutlineSun } from 'react-icons/hi';

export default function ThemeChanger() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <button className='p-1'>
        <HiBan size={30} />
      </button>
    );

  return resolvedTheme === 'dark' ? (
    <button
      className='bg-amber-200 p-1 rounded'
      onClick={() => setTheme('light')}>
      {/* slate-800 */}
      <HiOutlineSun color='rgb(30 41 59 / var(--tw-bg-opacity)' size={30} />
    </button>
  ) : (
    <button
      className='p-1 bg-indigo-600 rounded'
      onClick={() => setTheme('dark')}>
      {/* amber-100 */}
      <HiMoon color='rgb(254 243 199 / var(--tw-text-opacity)' size={30} />
    </button>
  );
}
