import "./button.css";

type ButtonT = {
  text: string;
  onClick?: () => void;
  active?: boolean;
}
const Button = ({
  text,
  onClick,
  active,
}: ButtonT) => {
  return (
    <button className={active ? "ButtonActive" : "Button"} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button;
