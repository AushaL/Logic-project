import classes from "./ThemeCard.module.scss";
import { IThemeCardProps } from "src/constants/interfaces";

const ThemeCard = ({ themeData }: { themeData: IThemeCardProps }) => {
  return (
    <li className={classes.card}>
      <div
        className={classes.image}
        style={{ backgroundColor: themeData.bgColor }}
      >
        <img src={themeData.image} alt="" />
      </div>
      <p className={classes.description}>{themeData.name}</p>
    </li>
  );
};

export default ThemeCard;
