import Image1 from "@/public/Images/projects/adaaDashBoard2.png";
import Image2 from "@/public/Images/projects/SeoresDashBoard.png";
import Image3 from "@/public/Images/projects/dashboardacachievement1.png";
import portofolio from "@/public/Images/projects/reactportofolio.png";
import Trainingsystem from "@/public/Images/projects/SystemDashBoard.jpg";
import SlSystem from "@/public/Images/projects/Ls.jpg";
import myWebSite from "@/public/Images/projects/image.png";
import omrMain from "@/public/Images/projects/omr1.jpg";
import { v4 as uuidv4 } from "uuid";
const projectsData = [
  {
    id: "17b4bb3c-faff-4387-bf32-b1fa0a410527",
    num: "01",
    Title: "نظام التدريب الالكتروني(Full Stack Developer) ",
    Description:
      " برنامج  إلكتروني يعمل على شبكة الانترنت بتنقيات الويب يقوم بحوسبة وأتمته العمليات المرتبطة  بالتدريب في قسم التدريب والابتعاث – إدارة التعليم بمحافظة القويعية. ( الترشيح في البرامج التدريبية - التسجيل - تقييم البرنامج - طباعة الشهادات - طباعة التقارير المختلفة.....)  \r\n",
    WDate:
      "https://drive.google.com/file/d/1ZQYK2VaLOc5tJKzmZjn3d2CLqgxcmkVw/view?usp=sharing",
    Image: Trainingsystem,
    Description_All:
      "برنامج إلكتروني يعمل على شبكة الإنترنت باستخدام تقنيات الويب الحديثة. يهدف البرنامج إلى حوسبة وأتمتة العمليات المرتبطة بالتدريب في قسم التدريب والابتعاث بإدارة التعليم بمحافظة القويعية. يوفر البرنامج مجموعة من الوظائف الأساسية التي تسهل عملية الترشيح والتسجيل في البرامج التدريبية، تقييم البرامج، وطباعة الشهادات والتقارير المختلفة",
    techStack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Javascript" },
      { name: "ASP.NET Forms" },
      { name: "SQL-SERVER" },
    ],
    preview: "",
    link: "https://drive.google.com/file/d/1ZQYK2VaLOc5tJKzmZjn3d2CLqgxcmkVw/view?usp=sharing-",
    imgs: [
      {
        id: uuidv4(),
        img: "/Images/projects/SystemDashBoard.jpg",
      },
      { id: uuidv4(), img: "/Images/projects/systemLogin.jpg" },
    ],
    delayAnimation: "0",
    keyWords:[
  "التدريب",
    "قسم التدريب",
    "ابتعاث",
    "إدارة التعليم",
    "محافظة القويعية",
    "الوظائف الأساسية",
    "الترشيح",
    "التسجيل",
    "البرامج التدريبية",
    "تقييم البرامج",
    "طباعة الشهادات",
    "طباعة التقارير",
    "Process Computerization",
    "Process Automation",
    "Training",
    "Training Department",
    "Scholarship",
    "Education Administration",
    "Al-Quwaiyah Province",
    "Basic Functions",
    "Nomination",
    "Registration",
    "Training Programs",
    "Program Evaluation",
    "Certificate Printing",
    "Report Printing",
    "Reports"
    ]
  },

  {
    id: "ff88e45e-0b4b-48e5-a2b0-21c0a7c81f9c",
    num: "02",
    Title: "نظام القيادة المدرسية (Full Stack Developer)",
    Description:
      "برنامج إلكتروني يعمل على شبكة الانترنت بتقنيات الويب لأرشفة وأتمته ملفات وعمليات شعبة القيادة المدرسية بإدارة التعليم بمحافظة القويعية",
    WDate:
      "https://drive.google.com/file/d/1lMjRtqh4VC0w7pZw4Kf8qE4QgwYSry94/view?usp=sharing",
    Image: SlSystem,
    Description_All:
      "نظام إدارة وأرشفة ملفات الإدارة المدرسية هو برنامج إلكتروني متكامل يعمل على شبكة الإنترنت باستخدام أحدث تقنيات الويب. يهدف البرنامج إلى حوسبة وأتمتة جميع العمليات المرتبطة بإدارة وأرشفة الملفات في شعبة الإدارة المدرسية بإدارة التعليم بمحافظة القويعية.  ",

    techStack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Javascript" },
      { name: "ASP.NET Forms" },
      { name: "SQL-SERVER" },
    ],
    preview: "",
    link: "",
    imgs: [
      {
        id: uuidv4(),
        img: "/Images/projects/Ls.jpg",
      },
    ],
    delayAnimation: "100",
    keyWords:[
      "الإدارة المدرسية",
    "برنامج إلكتروني",
    "شبكة الإنترنت",
    "تقنيات الويب",
    "حوسبة العمليات",
    "أتمتة العمليات",
    "إدارة الملفات",
    "أرشفة الملفات",
    "شعبة الإدارة",
    "إدارة التعليم",
    "محافظة القويعية",
    "Management System",
    "File Archiving",
    "School Administration",
    "Electronic Program",
    "Internet Network",
    "Web Technologies",
    "Process Computerization",
    "Process Automation",
    "File Management",
    "File Archiving",  
    "Administration Division",
    "Education Administration",
    "Al-Quwaiyah Province"
    ]
  },
  {
    num: "03",
    id: "89afb0cd-ee33-46dd-83ce-642ff933590c",
    Title: "برنامج زيارات المشرفين التربويين (Full Stack Developer) ",
    Description:
      "برنامج إلكتروني يعمل على شبكة الانترنت بتقنيات الويب ، حيث يقوم البرنامج بحوسبة الخطة الإشرافية للمشرفين التربويين , واتمته التقارير الفنية للمشرفين و تقديم بيانات إحصائية تخص تطورات العملية التعليمية بصورة دورية بمكتب التعليم بمحافظة الرين",
    WDate: "https://h.mohammadh.me/",
    Image: Image2,
    Description_All:
      "نظام إدارة الخطة الإشرافية والتقارير الفنية هو برنامج إلكتروني متكامل يعمل على شبكة الإنترنت باستخدام أحدث تقنيات الويب. يهدف البرنامج إلى حوسبة وأتمتة جميع العمليات المرتبطة بإعداد وتنفيذ الخطة الإشرافية للمشرفين التربويين، بالإضافة إلى أتمتة إعداد التقارير الفنية بمكتب التعليم بمحافظة الرين.",

    techStack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Javascript" },
      { name: "ASP.NET CORE" },
      { name: "Bootstrap" },
      { name: "SQL-SERVER" },
    ],
    preview: " Link",
    link: "",
    delayAnimation: "300",
    imgs: [
      {
        id: uuidv4(),
        img: "/Images/projects/SeoresDashBoard.png",
      },
      {
        id: uuidv4(),
        img: "/Images/projects/visitBySchool.png",
      },
      {
        id: uuidv4(),
        img: "/Images/projects/Evisit1.png",
      },
      {
        id: uuidv4(),
        img: "/Images/projects/schoolprofile1.png",
      },
    ],
    keyWords: [
      "نظام إدارة",
    "الخطة الإشرافية",
    "التقارير الفنية",
    "برنامج إلكتروني",
    "شبكة الإنترنت",
    "تقنيات الويب",
    "حوسبة العمليات",
    "أتمتة العمليات",
    "إعداد الخطة",
    "تنفيذ الخطة",
    "المشرفين التربويين",
    "أتمتة التقارير",
    "مكتب التعليم",
    "محافظة الرين",
    "Management System",
    "Supervisory Plan",
    "Technical Reports",
    "Electronic Program",
    "Internet Network",
    "Web Technologies",
    "Process Computerization",
    "Process Automation",
    "Plan Preparation",
    "Plan Implementation",
    "Educational Supervisors",
    "Report Automation",
    "Education Office",
    "Al-Rayn Province"
    ]
  },
  {
    num: "04",
    id: "58c27c03-ef89-4779-8781-01c5a574f112",
    Title: "برنامج احصائيات منصة مدرستي (Full Stack Developer) ",
    Description:
      'برنامج إلكتروني يعمل على شبكة الانترنت بتقنيات الويب، حيث يقوم النظام بمتابعة الأداء التعليمي والمدرسي في فترة التعليم عن بعد "فيروس كورونا، حيث يقوم بمعالجة ملفات البيانات الوزارية الخاصة بمنصة مدرستي والتي يفوق عدد سجلاتها 22000 ألف سجل عند كل تحديث ويعمل على قياس الاداء والتفاعل، والاطلاع على نسب التغيير في التفاعل عبر منصة مدرستي بإدارة التعليم بمحافظة القويعية Adaa.app',
    WDate:
      "https://drive.google.com/file/d/1pYM3ruz2E1IyQmd_4-Tod6ijuKJN9r6p/view?usp=sharing",
    Image: Image1,
    imgs: [
      {
        id: uuidv4(),
        img: "/Images/projects/AdaaLogin.png",
      },
      {
        id: uuidv4(),
        img: "/Images/projects/AdaaExplorer.png",
      },
      {
        id: uuidv4(),
        img: "/Images/projects/AdaaExplorer2.png",
      },
      {
        id: uuidv4(),
        img: "/Images/projects/adaaDashBoard1.png",
      },
      {
        id: uuidv4(),
        img: "/Images/projects/adaaDashBoard2.png",
      },
    ],
    techStack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "Javascript" },
      { name: "ASP.NET MVC" },
      { name: "Bootstrap" },
      { name: "SQL-SERVER" },
    ],
    preview: "Link",
    link: "https://drive.google.com/file/d/1pYM3ruz2E1IyQmd_4-Tod6ijuKJN9r6p/view?usp=sharing",
    Description_All:
      'برنامج إلكتروني يعمل على شبكة الانترنت بتقنيات الويب، حيث يقوم النظام بمتابعة الأداء التعليمي والمدرسي في فترة التعليم عن بعد "فيروس كورونا، حيث يقوم بمعالجة ملفات البيانات الوزارية الخاصة بمنصة مدرستي والتي يفوق عدد سجلاتها 22000 ألف سجل عند كل تحديث ويعمل على قياس الاداء والتفاعل، والاطلاع على نسب التغيير في التفاعل عبر منصة مدرستي بإدارة التعليم بمحافظة القويعية Adaa.app',
    delayAnimation: "400",
    keyWords:[
      "برنامج إلكتروني",
      "شبكة الإنترنت",
      "تقنيات الويب",
      "متابعة الأداء",
      "التعليم عن بعد",
      "فيروس كورونا",
      "معالجة ملفات",
      "البيانات الوزارية",
      "منصة مدرستي",
      "سجلات",
      "تحديث",
      "قياس الأداء",
      "التفاعل",
      "نسب التغيير",
      "إدارة التعليم",
      "محافظة القويعية",
      "برنامج إلكتروني",
      "شبكة الإنترنت",
      "تقنيات الويب",
      "متابعة الأداء",
      "التعليم عن بعد",
      "فيروس كورونا",
      "معالجة ملفات",
      "البيانات الوزارية",
      "منصة مدرستي",
      "سجلات",
      "تحديث",
      "قياس الأداء",
      "التفاعل",
      "نسب التغيير",
      "إدارة التعليم",
      "محافظة القويعية",
    ]
  },
  {
    num: "05",
    id: "db287f56-a7a2-4b40-ad16-3afea7559793",
    Title: "نظام متابعة الملاحظات والتحصيل الدراسي",
    Description:
      " نظام متابعة ملاحظات الزيارات الإشرافية ومتابعة التحصيل الدراسي",
    WDate: "2222",
    imgs: [
      {
        id: uuidv4(),
        img: "/Images/projects/dashboardacachievement1.png",
      },
      {
        id: uuidv4(),
        img: "/Images/projects/dashboardacachievement2.png",
      },
      {
        id: uuidv4(),
        img: "/Images/projects/dashboardacachievement3.png",
      },
      {
        id: uuidv4(),
        img: "/Images/projects/dashboardmobile.png",
      },
      {
        id: uuidv4(),
        img: "/Images/projects/taks1.png",
      },
    ],
    Image: Image3,
    delayAnimation: "500",
    techStack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "ASP.NET CORE API" },
      { name: "REACT" },
      { name: "SQL-SERVER" },
    ],
    preview: "Link",
    link: "",
    Description_All:
      "نظام متابعة ملاحظات الزيارات الإشرافية هو برنامج إلكتروني متكامل يعمل على شبكة الإنترنت باستخدام أحدث تقنيات الويب. يهدف البرنامج إلى حوسبة وأتمتة جميع العمليات المرتبطة بمتابعة ملاحظات الزيارات الإشرافية للمشرفين التربويين، بالإضافة إلى متابعة الإجراءات الخاصة المتخذة بناءً على تلك الملاحظات. ",
      keyWords: [
        "نظام متابعة",
        "ملاحظات الزيارات",
        "الإشرافية",
        "برنامج إلكتروني",
        "شبكة الإنترنت",
        "تقنيات الويب",
        "حوسبة العمليات",
        "أتمتة العمليات",
        "مشرفين تربويين",
        "متابعة الإجراءات",
        "الإجراءات الخاصة",
        "الملاحظات",
        "Tracking System",
    "Visit Notes",
    "Supervisory",
    "Electronic Program",
    "Internet Network",
    "Web Technologies",
    "Process Computerization",
    "Process Automation",
    "Educational Supervisors",
    "Action Follow-up",
    "Special Actions",
    "Notes"
      ]
  },
  {
    num: "06",
    id: "c075c1a4-722e-4efb-aab9-fbf2ee715a2e",
    Title: "موقعي الشخصي ومعرض الأعمال",
    Description: " موقع شخصي ومعرض الاعمال والمشاريع التي عملت عليها",
    WDate: "https://github.com/mhuwaimel/Django-Nextjs-Portfolio-Arabic",
    imgs: [
      {
        id: uuidv4(),
        img: "/Images/projects/reactportofolio.png",
      },
      {
        id: uuidv4(),
        img: "/Images/projects/reactportofolio1.png",
      },
    ],
    Image: portofolio,
    delayAnimation: "500",
    techStack: [
      { name: "PostgreSQL" },
      { name: "Django Python" },
      { name: "React " },
      { name: "Nextjs" },
      { name: "framer-motion" },
    ],
    preview: "Link",
    link: "https://github.com/mhuwaimel/Django-Nextjs-Portfolio-Arabic",
    Description_All: " موقع شخصي ومعرض الاعمال والمشاريع التي عملت عليها",
    keyWords: [
      "موقع شخصي",
      "portfolio",
      "معرض الاعمال",
    ],
  },
  {
    num: "07",
    id: "b8927016-8f85-480f-a487-1fe185651960",
    Title: "برنامج التصحيح الآلي “كاشف” OMR",
    Description:
      " حل يستخدم تقنية الرؤية الحاسوبية Computer Vision لتصحيح الآلاف من أوراق الإجابات بدقة وكفاءة عالية. لا يقتصر دور البرنامج على التصحيح فحسب، بل يمتد ليشمل تحليل نتائج الطلاب، مما يوفر رؤى قيمة حول نسب التغيير والتحسين بين الاختبارات المختلفة. كما يعمل البرنامج على ربط كل سؤال بمهارة محددة من المهارات المستهدفة لدى الطلاب، مما يسهم في تعزيز العملية التعليمية وتطويرها",
    Image: omrMain,
    imgs: [
      {
        id: uuidv4(),
        img: "/Images/projects/omr1.jpg",
      },
      {
        id: uuidv4(),
        img: "/Images/projects/omr2.jpg",
      },
      {
        id: uuidv4(),
        img: "/Images/projects/omr3.png",
      },
    ],

    delayAnimation: "500",
    techStack: [
      { name: "Python" },
      { name: "Computer Vision" },
      { name: "OpenCV" },
      { name: "numpy" },
      { name: "pandas" },
    ],
    preview: "Link",
    Description_All:
      " حل يستخدم تقنية الرؤية الحاسوبية Computer Vision لتصحيح الآلاف من أوراق الإجابات بدقة وكفاءة عالية. لا يقتصر دور البرنامج على التصحيح فحسب، بل يمتد ليشمل تحليل نتائج الطلاب، مما يوفر رؤى قيمة حول نسب التغيير والتحسين بين الاختبارات المختلفة. كما يعمل البرنامج على ربط كل سؤال بمهارة محددة من المهارات المستهدفة لدى الطلاب، مما يسهم في تعزيز العملية التعليمية وتطويرها",
    link: "https://drive.google.com/file/d/12z3_THqDt2lBf-3hdGcJk9FV4wRQvG3T/view?usp=sharing",
    keyWords: [
   
    "تصحيح أوراق الإجابات",
    "تحليل نتائج الطلاب",
    "الرؤية الحاسوبية",
    "أوراق الإجابات",
    "دقة",
    "كفاءة عالية",
    "تحليل النتائج",
    "الطلاب",
    "نسب التغيير",
    "التحسين",
    "اختبارات مختلفة",
    "ربط الأسئلة",
    "المهارات المستهدفة",
    "العملية التعليمية",
    "تعزيز",
    "Computer Vision",
    "Answer Sheets",
    "Accuracy",
    "High Efficiency",
    "Results Analysis",
    "Students",
    "Change Rates",
    "Improvement",
    "Different Tests",
    "Linking Questions",
    "Targeted Skills",
    "Educational Process",
    "Enhancement"
    ],
  },
  {
    num: "08",
    id: "16d754d2-62b6-43b0-bc0a-bbe931250e85",
    Title: "موقعي الشخصي ",
    Description: " موقع شخصي ومعرض الاعمال والمشاريع التي عملت عليها",

    imgs: [
      {
        id: uuidv4(),
        img: "/Images/projects/image.png",
      },
      {
        id: uuidv4(),
        img: "/Images/projects/myWebsite2.png",
      },
      {
        id: uuidv4(),
        img: "/Images/projects/pagespeed.png",
      },
    ],
    Image: myWebSite,
    delayAnimation: "500",
    techStack: [
      { name: "React " },
      { name: "Nextjs 14" },
      { name: "Shadcn ui" },
      { name: "framer-motion" },
    ],
    preview: "Link",
    link: "https://github.com/mhuwaimel/my-website-nextjs",
    Description_All: " موقع شخصي ومعرض الاعمال والمشاريع التي عملت عليها",
    keyWords:[
      "موقع شخصي",
      "معرض الأعمال",
      "المشاريع",
      "سيرتي الذاتية",
      "Personal Website",
    "Portfolio",
    "Projects",
    "Resumes"
    ]
  },
];
export default projectsData;
