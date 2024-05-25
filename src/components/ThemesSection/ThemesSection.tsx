import { useEffect, useState } from "react";
import ThemesOptions from "../ThemesOptions/ThemesOptions";
import ThemesCards from "../ThemesCards/ThemesCards";
import classes from "./ThemesSection.module.scss";
import { IThemeCardProps } from "src/constants/interfaces";

const ThemesSection = () => {
  const [activeOption, setActiveOption] = useState("Все темы");
  const [themesItems, setThemesItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://logiclike.com/docs/courses.json");
      const data = await response.json();

      if (activeOption === "Все темы") {
        setThemesItems(data);
      } else if (activeOption === "Путешествия") {
        const filteredThemesItems = data.filter((item: IThemeCardProps) =>
          item.tags.includes("Страны и столицы")
        );

        setThemesItems(filteredThemesItems);
      } else {
        const filteredThemesItems = data.filter((item: IThemeCardProps) =>
          item.tags.includes(activeOption)
        );

        setThemesItems(filteredThemesItems);
      }
    };

    fetchData();
  }, [activeOption]);

  return (
    <section className={classes.section}>
      <div className={classes.wrapper}>
        <ThemesOptions
          activeOption={activeOption}
          setActiveOption={setActiveOption}
        />
        <ThemesCards themesItems={themesItems} />
      </div>
    </section>
  );
};

export default ThemesSection;
