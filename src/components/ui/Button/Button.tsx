import styles from "./Button.module.css";

interface ValueProps {
  value: string;
  type?: "button" | "submit" | "reset";
}

const Button = ({ value, type = "button" }: ValueProps) => {
  return (
    <button className={styles.buttonWrapper} type={type}>
      {value}
    </button>
  );
};

export default Button;
