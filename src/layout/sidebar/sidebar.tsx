import Menu from "../menu/menu";
import { SidebarProps } from "./sidebar.props";
import cn from "classnames";
import styles from "./sidebar.module.css";
import Logo from "../logo.svg";
import Link from "next/link";
import { Divider } from "../../components";
const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Link href={"/"}>
        <Logo />
        <Divider />
      </Link>
      <div>Search...</div>
      <Menu />
    </div>
  );
};

export default Sidebar;
