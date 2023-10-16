import HomePage from "./pages/home";
import Header from "./components/header";
import { useEffect, useState } from "react";
import { ThemeContext } from "./context/theme_context";

export default function App() {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
     setTheme(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light' )
  });


  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
    <div className={`${theme} ${theme == 'dark' ? 'bg-[#121212]': null} h-min-[100vh]`}>
      <Header/>
      <HomePage/>
    </div>
    </ThemeContext.Provider>
  )
}