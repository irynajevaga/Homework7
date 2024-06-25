// src/components/LanguageSwitcher.js
import React, { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";

const LanguageSwitcher = () => {
  const { switchLanguage } = useContext(LanguageContext);

  return (
    <div>
      <button onClick={() => switchLanguage("en")}>English</button>
      <button onClick={() => switchLanguage("ru")}>Русский</button>
    </div>
  );
};

export default LanguageSwitcher;
