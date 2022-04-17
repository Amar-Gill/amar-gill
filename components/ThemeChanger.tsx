import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

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
      <button onClick={changeTheme}>CHANGE THEME</button>
    </div>
  );
}
