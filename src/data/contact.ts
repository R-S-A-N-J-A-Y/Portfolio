import { Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaReddit } from "react-icons/fa";

export const contactItems = [
  {
    label: "Email",
    value: "sanjay.rajendran.dev@gmail.com",
    note: "I'll get back to you within 24 hours",
    href: "mailto:sanjay.rajendran.dev@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "(+91) 9787045901",
    note: "Available for calls during business hours",
    href: "tel:+919787045901",
    icon: Phone,
  },
  {
    label: "Location",
    value: "India",
    note: "Available for remote work worldwide",
    icon: MapPin,
  },
];

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/R-S-A-N-J-A-Y",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sanjay-r-offcial/",
    icon: FaLinkedin,
  },
  {
    label: "Reddit",
    href: "#",
    icon: FaReddit,
  },
];
