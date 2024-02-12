import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";

export interface TextProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  size?: "s" | "m" | "l";
  children: ReactNode;
}
