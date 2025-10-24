import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      <button onClick={() => setTheme("light")}>🌞 Light</button>
      <button onClick={() => setTheme("dark")}>🌙 Dark</button>
      <button onClick={() => setTheme("ocean")}>🌊 Ocean</button>
    </div>
  );
}
