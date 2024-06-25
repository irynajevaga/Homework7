import React from "react";
import { LanguageProvider } from "./components/LanguageContext";
import LanguageSwitcher from "./components/LanguageSwitcher";
import TextComponent from "./components/TextComponent";
import styles from "./styles.css";

const App = () => {
  return (
    <LanguageProvider>
      <div className="App">
        <LanguageSwitcher />
        <TextComponent />
      </div>
    </LanguageProvider>
  );
};

export default App;
