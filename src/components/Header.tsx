import React, { useState } from "react";
import { Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import BookADemo from "./BookADemo";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface navItemType {
  label: string;
  icon: string | undefined;
  slug: string | undefined;
  link: string | undefined;
}

const navItems: navItemType[] = [
  { label: "Home", icon: undefined, slug: "#", link: undefined },
  { label: "About", icon: undefined, slug: undefined, link: undefined },
  { label: "Services", icon: undefined, slug: "#services", link: undefined },
  { label: "Vision", icon: undefined, slug: "#vision", link: undefined },
  { label: "Teams", icon: undefined, slug: "#teams", link: undefined },
];

const Header: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const animation = useAnimation();

  React.useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1, y: 0 });
    } else {
      animation.start({ opacity: 0, y: -50 });
    }
  }, [inView, animation]);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <motion.header
      ref={ref}
      animate={animation}
      initial={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white shadow-lg"
    >
      {/* Logo */}
      <div className="text-2xl font-extrabold italic tracking-wide">
        Medynex
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8 items-center">
        {navItems.map((item: navItemType) => (
          <a
            href={item.slug}
            className="text-lg hover:text-blue-200 transition-colors duration-300"
            key={item.label}
          >
            {item.label}
          </a>
        ))}

        <BookADemo />
      </nav>

      {/* Mobile Hamburger Button */}
      <button className="md:hidden text-white" onClick={handleDrawerToggle}>
        <MenuOutlined className="text-2xl" />
      </button>

      {/* Sidebar for Mobile View */}
      <Drawer
        title={
          <div className="text-2xl font-extrabold text-blue-900 italic">
            Medynex
          </div>
        }
        placement="right"
        onClose={handleDrawerToggle}
        open={isDrawerOpen}
        className="md:hidden"
      >
        {/* Sidebar Content */}
        <div className="flex flex-col h-full space-y-8 p-4">
          {/* Navigation Items */}
          {navItems.map((item: navItemType) => (
            <a
              href={item.slug}
              className="text-lg hover:text-blue-500 transition-colors duration-300"
              key={item.label}
            >
              {item.label}
            </a>
          ))}

          {/* Book a Demo Button */}
          <div className="p-4 bg-gray-100">
            <BookADemo />
          </div>
        </div>
      </Drawer>
    </motion.header>
  );
};

export default Header;
