import { IconType } from "react-icons";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSquareFacebook,
} from "react-icons/fa6";

export const navlinks: {
  name: string;
  href: string;
}[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Porfolio",
    href: "/portfolio",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export const SocialLinks: { name: string; link: string }[] = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/yaser.arafat.israk",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/y_israk",
  },
];

export const experiences: {
  name: string;
  post: string;
  location: string;
  time: string;
  link: string;
}[] = [
  {
    name: "Volunteer For Bangladesh",
    post: "Cartoonist",
    location: "Chittagong - Bangladesh",
    time: "2023 - now",
    link: "https://vbd.com.bd",
  },
  {
    name: "Opputunity for Kids",
    post: "Assosiate of Graphic Designer",
    location: "Chittagong - Bangladesh",
    time: "2020 - 2023",
    link: "https://www.ofkbd.com",
  },
  {
    name: "Originative 360",
    post: "Assosiate of Graphic Designer",
    location: "Chittagong - Bangladesh",
    time: "2020 - 2022",
    link: "http://originative360.com",
  },
];

export const contactList: { name: string; link: string; icon: IconType }[] = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/yaser.arafat.israk",
    icon: FaSquareFacebook,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/y_israk",
    icon: FaInstagram,
  },
  {
    name: "GitHub",
    link: "https://github.com/YaIsrak",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/israk",
    icon: FaLinkedin,
  },
];
