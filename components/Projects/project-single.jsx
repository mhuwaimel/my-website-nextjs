import Image from "next/image";
import Link from "next/link";

const ProjectSingle = (props) => {
  return (
    <div key={props.id}>
      <Link
        href="/projects/[id]"
        as={"/projects/" + props.id}
        aria-label="Single Project"
        passHref
      >
        <div className="mb-10 shadow-lg cursor-pointer rounded-xl hover:shadow-xl sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
          <div>
            <Image
              src={props.Image}
              className="border-none rounded-t-xl"
              alt="Single Project"
            />
          </div>
          <div className="px-4 py-6 text-center">
            <p className="mb-2 text-base font-[cairo] font-bold text-ternary-dark dark:text-ternary-light">
              {props.Title}
            </p>
            {/* <span className="text-lg text-ternary-dark dark:text-ternary-light">
              {props.techStack}
            </span> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectSingle;
