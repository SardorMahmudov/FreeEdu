import { ForwardedRef, forwardRef } from "react";
import { InputProps } from "./input.props";
import styles from "./input.module.css";
import cn from "classnames";

const Input = forwardRef(({ className, error, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  return (
    <div className={styles.inputWrapper}>
      <input
        className={cn(styles.input, className, {
          [styles.error]: error,
        })}
        ref={ref}
        {...props}
      />
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
});

export default Input;
