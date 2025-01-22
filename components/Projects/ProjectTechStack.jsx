import Link from "next/link";
import React from "react";
import { Link2 } from "lucide-react";
function ProjectTechStack({ project }) {
  return (
    <ul className="flex gap-[6px]">
      {project.techStack.map((item, index) => {
        return (
          <li key={index} className="flex mb-2  dark:text-ternary-light ">
            <span className="text-[11.5px] font-bold md:font-light md:text-lg  text-[#6936f5]">
              {item.name}
            </span>
            {index !== project.techStack.length - 1 && ","}
          </li>
        );
      })}
      {project.link && project.link !== "" ? (
        <Link
          target="_blank"
          className="mr-4 text-left"
          href={project.link}
          title="Project Link"
        >
          <Link2 color="#000" className="text-3xl font-extrabold "></Link2>
        </Link>
      ) : (
        <p></p>
      )}
    </ul>
  );
}

export default ProjectTechStack;
