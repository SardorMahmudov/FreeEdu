import React from "react";
import { TextArea } from "./text-area.props";
import styles from "./text-area.module.css";
import cn from "classnames";

const TextArea = ({ className, ...props }: TextArea): JSX.Element => {
  return <textarea className={cn(styles.textArea, className)} {...props} />;
};

export default TextArea;
