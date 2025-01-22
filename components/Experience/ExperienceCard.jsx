import { BriefcaseBusiness } from "lucide-react";

export default function ExperienceCard({ resumeData }) {
  return (
    <>
      <div className="flex items-center justify-center p-3 m-4 ltr:justify-end w-fit justify-items-center">
        <ol className="relative border-r-2 border-gray-300 dark:border-gray-700">
          {resumeData.map((value) => (
            <li key={value.Id} className="mb-10 mr-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -right-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <BriefcaseBusiness color="#6936f5" height={24} width={24} />
              </span>
              <h3
                className="flex items-center mb-1 font-[Almarai]
                text-lg font-semibold text-gray-900 dark:text-white "
              >
                {value.position}
                <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                  {value.Start} - {value.EndJob}
                </span>
              </h3>
              <p
                className="mb-4 mt-2 text-base md:text-xl whitespace-pre-wrap font-[Cairo] 
              font-normal text-gray-500 dark:text-gray-400"
              >
                {value.Place && value.Place + " - "} {value.Description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
