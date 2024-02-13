import React, { ForwardedRef, forwardRef } from "react";
import { TextArea } from "./text-area.props";
import styles from "./text-area.module.css";
import cn from "classnames";

const TextArea = forwardRef(({ className, error, ...props }: TextArea, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
  return (
    <div className={cn(styles.textAreaWrapper, className)}>
      <textarea
        className={cn(styles.textArea, {
          [styles.error]: error,
        })}
        ref={ref}
        {...props}
      />
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
});

export default TextArea;
