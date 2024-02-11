import { FooterProps } from "./footer.props";
import { format } from "date-fns";
import styles from "./footer.module.css";
import cn from "classnames";
const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div>FreeFlex © 2023 - {format(new Date(), "yyyy")}. All right reserver</div>
      <a href="#">Terms of use</a>
      <a href="#">Privacy Policy</a>
    </footer>
  );
};

export default Footer;
