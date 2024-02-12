import { IFirstLevelMenu } from "../interfaces/menu.interface";
import CoursesIcon from "./icons/courses.svg";
import BooksIcon from "./icons/books.svg";
import { PageCategory } from "../interfaces/page.interface";

export const firstLevelMenu: IFirstLevelMenu[] = [
  { route: "courses", name: "Courses", icon: <CoursesIcon />, id: PageCategory.Courses },
  { route: "books", name: "Books", icon: <BooksIcon />, id: PageCategory.Books },
];
