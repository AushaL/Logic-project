import ThemeCard from "../ThemeCard/ThemeCard";
import classes from "./ThemesCards.module.scss";
import { IThemeCardProps } from "src/constants/interfaces";

interface IThemesCardsProps {
  themesItems: IThemeCardProps[];
}

const ThemesCards = ({ themesItems }: IThemesCardsProps) => {
  const CARDS_AMOUNT = 6;

  return (
    <div className={classes.wrapper}>
      <ul className={classes.grid}>
        {themesItems.slice(0, CARDS_AMOUNT).map((themeItem) => {
          return <ThemeCard key={themeItem.id} themeData={themeItem} />;
        })}
      </ul>
    </div>
  );
};

export default ThemesCards;
