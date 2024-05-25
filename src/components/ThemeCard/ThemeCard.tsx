import classes from "./ThemeCard.module.scss";

interface IThemeCardProps {
  name: string;
  id: string;
  image: string;
  bgColor: string;
  tags: string[];
}

const ThemeCard = ({ themeData }: IThemeCardProps) => {
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
