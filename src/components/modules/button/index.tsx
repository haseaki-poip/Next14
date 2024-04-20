type Props = {
  disabled: boolean;
  value: string;
};

import style from "./styles.module.css";

const Button = (props: Props) => {
  return (
    <button className={style.button} type="submit" disabled={props.disabled}>
      {props.value}
    </button>
  );
};

export default Button;
