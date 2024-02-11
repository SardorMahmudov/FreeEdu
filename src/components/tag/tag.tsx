import React from "react";
import styles from "./tag.module.css";
import cn from "classnames";
import { TagPros } from "./tag.props";

const Tag = ({ size = "m", color = "primary", children, ...props }: TagPros): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, {
        [styles.s]: size === "s",
        [styles.m]: size === "m",
        [styles.red]: color === "red",
        [styles.primary]: color === "primary",
        [styles.green]: color === "green",
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export default Tag;
