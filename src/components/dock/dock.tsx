"use client";

import React from "react";
import { FloatingDock } from "../dock";
import Image from "next/image";
import {
  IconSmartHome,
  IconTools,
  IconSourceCode,
  IconNotebook,
  IconBrandAdobeAfterEffect,
  IconMessageCircle,
} from "@tabler/icons-react";

const dock = () => {
  const links = [
    {
      title: "Home",
      icon: <IconSmartHome className="h-full w-full" />,
      href: "/",
    },
    {
      title: "Skills",
      icon: <IconTools className="h-full w-full" />,
      href: "/skills",
    },
    {
      title: "Projects",
      icon: <IconSourceCode className="h-full w-full" />,
      href: "/projects",
    },
    {
      title: "Myself",
      icon: (
        <div className="relative w-full h-full">
          <Image
            src="/Images/myself.png"
            alt="Sanjay"
            fill
            sizes="(max-width: 768px) 40px, 48px"
            className="object-cover rounded-full"
          />
        </div>
      ),
      href: "/myself",
    },
    {
      title: "Blog",
      icon: <IconNotebook className="h-full w-full" />,
      href: "/blog",
    },
    {
      title: "AfterEffects",
      icon: <IconBrandAdobeAfterEffect className="h-full w-full" />,
      href: "/after-effects",
    },
    {
      title: "Contact",
      icon: <IconMessageCircle className="h-full w-full" />,
      href: "/contact",
    },
  ];

  return (
    <div>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <FloatingDock items={links} />
      </div>
    </div>
  );
};

export default dock;
