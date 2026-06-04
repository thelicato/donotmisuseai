(function() {
  const STORAGE_KEY = 'dnma-theme';
  const DARK_CLASS = 'dark';
  const sunIcon = document.getElementById('sunIcon');
  const moonIcon = document.getElementById('moonIcon');

  function getPreferredTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
    return 'light';
  }

  function setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add(DARK_CLASS);
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    } else {
      document.documentElement.classList.remove(DARK_CLASS);
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    }
    localStorage.setItem(STORAGE_KEY, theme);
  }

  setTheme(getPreferredTheme());

  document.getElementById('themeToggle').addEventListener('click', function() {
    const isDark = document.documentElement.classList.contains(DARK_CLASS);
    setTheme(isDark ? 'light' : 'dark');
  });
})();
