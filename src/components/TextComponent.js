// src/components/TextComponent.js
import React, { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext";

const TextComponent = () => {
  const { language } = useContext(LanguageContext);
  const texts = {
    en: `New York City is one of the largest and most famous cities in the world, attracting millions of tourists every year. The city, often referred to as the "Big Apple," is known for its diversity, cultural landmarks, and unique atmosphere. Among the numerous iconic places, the Statue of Liberty, the Empire State Building, and Central Park stand out as must-see attractions.`,
    ru: `Нью-Йорк — один из крупнейших и самых известных городов мира, который привлекает миллионы туристов ежегодно. Город, часто называемый "Большим Яблоком", известен своим разнообразием, культурными достопримечательностями и неповторимой атмосферой. Среди множества знаковых мест стоит выделить Статую Свободы, Эмпайр-стейт-билдинг и Центральный парк.`,
  };

  const addLineBreaks = (text) => {
    const words = text.split(" ");
    const lines = [];
    for (let i = 0; i < words.length; i += 20) {
      lines.push(words.slice(i, i + 20).join(" "));
    }
    return lines;
  };

  const lines = addLineBreaks(texts[language]);

  return (
    <div className="type-writter">
      {lines.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

export default TextComponent;
