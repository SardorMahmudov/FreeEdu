import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";

export interface TagPros extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: "s" | "m";
  color?: "red" | "green" | "primary";
  children: ReactNode;
}
