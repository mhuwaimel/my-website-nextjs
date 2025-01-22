"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function MobileActiveLink({ href, children, exact = false }) {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  const isActive = exact
    ? pathname === href
    : pathname.startsWith(href) && (href === "/" ? pathname === "/" : true);
  return (
    <Link
      href={href}
      className={`relative px-4 py-2 text-lg font-[changa] font-medium transition-colors duration-200 ${
        isActive
          ? "text-[#6936f5] font-bold border-b-2 border-[#6936f5]"
          : "text-gray-700 hover:text-[#6936f5]"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <motion.div
        className="absolute inset-0 rounded-lg "
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: isActive ? 0.1 : isHovered ? 0.05 : 0,
          scale: isActive ? 1 : isHovered ? 0.98 : 0.95,
        }}
        transition={{ duration: 0.2 }}
      />
      {isActive && (
        <motion.div
          className="absolute inset-0 rounded-lg  border-[#6936f5]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </Link>
  );
}
