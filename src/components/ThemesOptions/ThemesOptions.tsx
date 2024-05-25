import classes from "./ThemesOptions.module.scss";

interface IThemesOptionsProps {
  activeOption: string;
  setActiveOption: (value: string) => void;
}

const ThemesOptions = ({
  activeOption,
  setActiveOption,
}: IThemesOptionsProps) => {
  const themeOptions = [
    "Все темы",
    "Логика и мышление",
    "Загадки",
    "Головоломки",
    "Путешествия",
  ];

  const onClickOption = (option: string) => {
    setActiveOption(option);
  };

  return (
    <div className={classes.wrapper}>
      <ul className={classes.items}>
        {themeOptions.map((option, index) => {
          return (
            <li
              className={activeOption === option ? classes.active : ""}
              key={index}
              onClick={() => onClickOption(option)}
            >
              {option}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ThemesOptions;
