export interface ExperienceItem {
  Id: number;
  position: string;
  Place: string;
  Description: string;
  Start: string;
  EndJob: string;
  location: null;
  image: null;
}

const resumeData: ExperienceItem[] = [
  {
    Id: 1,
    position: "مشرف إدارة مدرسية   ",
    Place: "",
    Description: "الإدارة العامة للتعليم بمنطقة الرياض",

    Start: "2026",
    EndJob: "حالياً",
    location: null,
    image: null,
  },
  {
    Id: 2,
    position: "رئيس الفريق التنفيذي للعمليات الإشرافية",
    Place: "",
    Description:
      "مكتب التعليم بمحافظة الرين –  إدارة التعليم بمحافظة القويعية.",
    Start: "2025",
    EndJob: "2026",
    location: null,
    image: null,
  },
  {
    Id: 3,
    position: "مدير قسم أداء التعليم",
    Place: "",
    Description:
      "مكتب التعليم بمحافظة الرين –  إدارة التعليم بمحافظة القويعية.",
    Start: "2024",
    EndJob: "2025",
    location: null,
    image: null,
  },
  {
    Id: 4,
    position: "مساعد مدير المكتب للشؤون التعليمية",
    Place: "",
    Description:
      "مكتب التعليم بمحافظة الرين –  إدارة التعليم بمحافظة القويعية.",
    Start: "2019",
    EndJob: "2024",
    location: null,
    image: null,
  },

  {
    Id: 5,
    position: "عضو لجنة التنمية المحلية ",
    Place: "",
    Description:
      "عضو لجنة التنمية المحلية بمحافظة الرين – وزارة الموارد البشرية والتنمية الاجتماعية ",
    Start: "2018",
    EndJob: "2020",
    location: null,
    image: null,
  },
  {
    Id: 6,
    position: "مشرف تربوي ",
    Place: "",
    Description:
      "مشرف تربوي لمادة الحاسب الآلي بمكتب التعليم بمحافظة الرين - إدارة التعليم بمحافظة القويعية",
    Start: "2016",
    EndJob: "2019",
    location: null,
    image: null,
  },
  {
    Id: 7,
    position: "معلم حاسب آلي",
    Place: "",
    Description: "وزارة التعليم – إدارة التعليم بمحافظة القويعية ",
    Start: "2011",
    EndJob: "2016",
    location: null,
    image: null,
  },
  {
    Id: 8,
    position: "مبرمج حاسب آلي ",
    Place: "شركة السلام للطائرات",
    Description:
      "شركة متعاقدة مع القوات الجوية الملكية السعودية – مشروع برنامج المساندة الفنية لطائرات F-15.",
    Start: "2010",
    EndJob: "2011",
    location: null,
    image: null,
  },
  {
    Id: 9,
    position: " مهندس حاسب آلي ",
    Place: "شركة الإلكترونيات المتقدمة SAMI ",
    Description:
      "شركة متعاقدة مع القوات الجوية الملكية السعودية – مشروع برنامج المساندة الفنية لطائرات F-15.",
    Start: "2008",
    EndJob: "2010",
    location: null,
    image: null,
  },
  {
    Id: 10,
    position: "اخصائي نظم معلومات ",
    Place: "القوات الجوية الملكية السعودية ",
    Description: "القوات الجوية الملكية السعودية –هيئة إدارة القوات الجوية ",
    Start: "2007",
    EndJob: "2008",
    location: null,
    image: null,
  },
  {
    Id: 11,
    position: "اخصائي تقنية معلومات",
    Place: "الشركة الوطنية لصناعة البطاريات NBC ",
    Description:
      "الشركة الوطنية لصناعة البطاريات NBC  احدى شركات شركة التصنيع الوطنية ",
    Start: "2006",
    EndJob: "2007",
    location: null,
    image: null,
  },
];
export default resumeData;
