import type { Project } from "@/data/projects";
import type { ExperienceItem } from "@/data/experience";
import type { Dir } from "@/lib/i18n";

type ProjectTranslation = Pick<Project, "Title" | "Description" | "Description_All" | "keyWords">;

const projectsEn: Record<string, ProjectTranslation> = {
  "17b4bb3c-faff-4387-bf32-b1fa0a410527": {
    Title: "E-Training System (Full Stack Developer)",
    Description: "An integrated web-based training system that manages training courses, registrations, attendance, certificates, and reports.",
    Description_All: "An integrated web-based training system designed to manage training courses, trainee registrations, attendance, certificates, and reporting through a single streamlined platform.",
    keyWords: ["E-training", "Training management", "Web application", "Reports", "Certificates"],
  },
  "ff88e45e-0b4b-48e5-a2b0-21c0a7c81f9c": {
    Title: "School Leadership System (Full Stack Developer)",
    Description: "A web application that supports school leaders in following up on educational and administrative work and preparing reports.",
    Description_All: "A comprehensive school-leadership system that supports the management and follow-up of educational and administrative work, performance indicators, and reports through a web interface.",
    keyWords: ["School leadership", "Education", "Performance indicators", "Web application", "Reports"],
  },
  "89afb0cd-ee33-46dd-83ce-642ff933590c": {
    Title: "Educational Supervisors Visits System (Full Stack Developer)",
    Description: "A system for managing supervisors' visits, supervisory plans, technical reports, and follow-up procedures.",
    Description_All: "A web-based system for automating educational supervisors' visits, preparing supervisory plans, documenting technical reports, and tracking their implementation.",
    keyWords: ["Supervisory visits", "Educational supervision", "Technical reports", "Process automation", "Web technologies"],
  },
  "58c27c03-ef89-4779-8781-01c5a574f112": {
    Title: "Madrasati Platform Statistics System (Full Stack Developer)",
    Description: "A web system for processing Madrasati data and monitoring educational performance and engagement during remote learning.",
    Description_All: "A web application that processes Ministry data files from the Madrasati platform—containing more than 22,000 records per update—to monitor performance and engagement and analyze changes across the Education Department of Al-Quwaiiyah.",
    keyWords: ["Madrasati", "Educational performance", "Remote learning", "Data processing", "Analytics"],
  },
  "db287f56-a7a2-4b40-ad16-3afea7559793": {
    Title: "Supervisory Notes and Academic Achievement Tracking System",
    Description: "A system for following up on supervisory visit notes and academic achievement.",
    Description_All: "An integrated web application for automating the follow-up of educational supervisors' visit notes and the resulting actions, alongside academic achievement tracking.",
    keyWords: ["Tracking system", "Supervisory notes", "Academic achievement", "Educational supervisors", "Automation"],
  },
  "c075c1a4-722e-4efb-aab9-fbf2ee715a2e": {
    Title: "Personal Website and Portfolio",
    Description: "A personal website and portfolio showcasing the projects I have worked on.",
    Description_All: "A personal website and portfolio showcasing my projects, experience, and technical work.",
    keyWords: ["Personal website", "Portfolio", "Projects"],
  },
  "b8927016-8f85-480f-a487-1fe185651960": {
    Title: "Kashif Automated OMR Grading System",
    Description: "A computer-vision solution that grades thousands of answer sheets accurately and efficiently and analyzes student results.",
    Description_All: "A computer-vision solution for grading thousands of answer sheets with high accuracy and efficiency. It also analyzes student results, tracks changes between tests, and links every question to the targeted skills.",
    keyWords: ["OMR", "Computer vision", "Answer sheets", "Results analysis", "Education"],
  },
  "16d754d2-62b6-43b0-bc0a-bbe931250e85": {
    Title: "Personal Website",
    Description: "A personal website and portfolio showcasing the projects I have worked on.",
    Description_All: "A personal website and portfolio showcasing my projects and professional work.",
    keyWords: ["Personal website", "Portfolio", "Projects", "Resume"],
  },
  "abf488ec-26b6-4f19-84dd-f3466d4566f2": {
    Title: "Sanad Educational Platform",
    Description: "A production-ready learning platform for standardized-test preparation, video lessons, interactive assessments, and learner progress tracking.",
    Description_All: "Sanad is a production-ready learning platform for standardized-test preparation. It supports General Aptitude, Graduate Aptitude, Achievement, and STEP English tests, with organized video lessons, official-style interactive assessments, and comprehensive learner progress tracking.",
    keyWords: ["Sanad", "Education platform", "Aptitude tests", "Achievement tests", "STEP", "Test preparation"],
  },
};

export function getLocalizedProject(project: Project, dir: Dir): Project {
  return dir === "ltr" && projectsEn[project.id]
    ? { ...project, ...projectsEn[project.id] }
    : project;
}

const experienceEn: Record<number, Pick<ExperienceItem, "position" | "Place" | "Description" | "EndJob">> = {
  1: { position: "School Administration Supervisor", Place: "", Description: "General Directorate of Education in Riyadh Region", EndJob: "Present" },
  2: { position: "Head of the Executive Team for Supervisory Operations", Place: "", Description: "Al-Rayn Education Office — Al-Quwaiiyah Education Department.", EndJob: "2026" },
  3: { position: "Director of Education Performance Department", Place: "", Description: "Al-Rayn Education Office — Al-Quwaiiyah Education Department.", EndJob: "2025" },
  4: { position: "Assistant Director of the Education Office for Educational Affairs", Place: "", Description: "Al-Rayn Education Office — Al-Quwaiiyah Education Department.", EndJob: "2024" },
  5: { position: "Member of the Local Development Committee", Place: "", Description: "Local Development Committee in Al-Rayn — Ministry of Human Resources and Social Development.", EndJob: "2020" },
  6: { position: "Educational Supervisor", Place: "", Description: "Computer Studies Educational Supervisor at Al-Rayn Education Office — Al-Quwaiiyah Education Department.", EndJob: "2019" },
  7: { position: "Computer Teacher", Place: "", Description: "Ministry of Education — Al-Quwaiiyah Education Department.", EndJob: "2016" },
  8: { position: "Computer Programmer", Place: "Al Salam Aircraft Company", Description: "Contractor to the Royal Saudi Air Force — F-15 Technical Support Program project.", EndJob: "2011" },
  9: { position: "Computer Engineer", Place: "Advanced Electronics Company (SAMI)", Description: "Contractor to the Royal Saudi Air Force — F-15 Technical Support Program project.", EndJob: "2010" },
  10: { position: "Information Systems Specialist", Place: "Royal Saudi Air Force", Description: "Royal Saudi Air Force — Air Force Management Authority.", EndJob: "2008" },
  11: { position: "Information Technology Specialist", Place: "National Battery Manufacturing Company (NBC)", Description: "National Battery Manufacturing Company, a subsidiary of National Industrialization Company.", EndJob: "2007" },
};

export function getLocalizedExperience(item: ExperienceItem, dir: Dir): ExperienceItem {
  return dir === "ltr" && experienceEn[item.Id]
    ? { ...item, ...experienceEn[item.Id] }
    : item;
}
