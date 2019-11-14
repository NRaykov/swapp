const ThemeChanger = (theme, setTheme) => {
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark'); localStorage.setItem('Theme', theme);
    } else {
      setTheme('light'); localStorage.setItem('Theme', theme);
    }
  };

  return toggleTheme;
};

export default ThemeChanger;
