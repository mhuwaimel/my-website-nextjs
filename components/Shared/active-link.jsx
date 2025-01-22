"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function ActiveLink({ href, children, exact = false }) {
  const pathname = usePathname();
  const isActive = exact
    ? pathname === href
    : pathname.startsWith(href) && (href === "/" ? pathname === "/" : true);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      className={`relative px-4 py-2  text-lg font-bold transition-colors duration-200 font-[cairo] ${
        isActive ? "text-[#6936f5]" : "text-gray-700 hover:text-[#6936f5]"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-[#6936f5]"
          initial={{ width: "0%", x: "50%" }}
          animate={{ width: "100%", x: "0%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
      <motion.div
        className="absolute -inset-1 rounded-lg bg-[#6936f5]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: isHovered ? 0.1 : 0, scale: isHovered ? 1 : 0.95 }}
        transition={{ duration: 0.2 }}
      />
    </Link>
  );
}
