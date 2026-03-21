import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const theme = dark ? "dark" : "light";
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [dark]);

  return (
    <button onClick={() => setDark((prev) => !prev)}>
      {dark ? "☀️ Світла" : "🌙 Темна"}
    </button>
  );
}