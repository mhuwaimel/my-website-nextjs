// Bidirectional label dictionary.
// Per the design brief: RTL stays Arabic, LTR switches UI CHROME (nav, buttons,
// labels) to English while BODY CONTENT (bios, project descriptions, experience)
// remains Arabic. So the dictionary only covers chrome strings.

export type Dir = "rtl" | "ltr";
export type Theme = "light" | "dark";

export const isRTL = (d: Dir) => d === "rtl";

export const dict = {
  rtl: {
    nav: {
      about: "عنّي",
      experience: "الخبرات",
      work: "أعمالي",
      github: "GitHub",
      contact: "تواصل",
    },
    getInTouch: "تواصل معي",
    resume: "تحميل السيرة الذاتية",
    viewWork: "استعرض أعمالي",
    viewProject: "عرض المشروع",
    viewOnGithub: "استعراض على GitHub",
    sections: {
      aboutKicker: "ABOUT · نبذة عني",
      expKicker: "EXPERIENCE",
      expTitle: "الخبرات المهنية",
      expSub: "مسيرة تمتد من البرمجة في القطاع الصناعي إلى القيادة والإشراف التربوي.",
      workKicker: "SELECTED WORK",
      workTitle: "المشاريع",
      workSub: "أنظمة ويب متكاملة وأدوات ذكية بنيتُها لخدمة الميدان التعليمي.",
      ghKicker: "OPEN SOURCE",
      ghTitle: "مشاريع GitHub",
      ghSub: "مستودعات مفتوحة المصدر ونماذج من شيفرتي البرمجية.",
      contactKicker: "CONTACT",
      contactTitle: "التواصل",
    },
    role: "أب لـ (ليان - عبدالعزيز - زياد - سعود - ديم)",
    stats: { years: "سنة خبرة", roles: "منصباً مهنياً", projects: "مشاريع رقمية" },
    form: {
      name: "الاسم",
      email: "البريد الإلكتروني",
      subject: "الموضوع",
      message: "الرسالة",
      send: "إرسال الرسالة",
      sent: "تم الإرسال ✓",
      phName: "اسمك الكريم",
      phEmail: "بريدك الإلكتروني",
      phSubject: "موضوع الرسالة",
      phMessage: "اكتب رسالتك هنا…",
      required: "هذا الحقل مطلوب",
    },
    contactInfo: {
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      location: "الموقع",
      locationValue: "الرياض، المملكة العربية السعودية",
    },
    repos: { loading: "جارٍ تحميل المستودعات…", error: "تعذّر تحميل المستودعات، حاول لاحقاً." },
    portraitAlt: "صورة شخصية · portrait",
    rights: "© 2026 محمد الهويمل · جميع الحقوق محفوظة",
  },
  ltr: {
    nav: {
      about: "About",
      experience: "Experience",
      work: "Work",
      github: "GitHub",
      contact: "Contact",
    },
    getInTouch: "Get in touch",
    resume: "Download CV",
    viewWork: "View my work",
    viewProject: "View project",
    viewOnGithub: "View on GitHub",
    sections: {
      aboutKicker: "ABOUT · نبذة عني",
      expKicker: "EXPERIENCE",
      expTitle: "الخبرات المهنية",
      expSub: "مسيرة تمتد من البرمجة في القطاع الصناعي إلى القيادة والإشراف التربوي.",
      workKicker: "SELECTED WORK",
      workTitle: "Projects",
      workSub: "أنظمة ويب متكاملة وأدوات ذكية بنيتُها لخدمة الميدان التعليمي.",
      ghKicker: "OPEN SOURCE",
      ghTitle: "Projects on GitHub",
      ghSub: "مستودعات مفتوحة المصدر ونماذج من شيفرتي البرمجية.",
      contactKicker: "CONTACT",
      contactTitle: "Contact",
    },
    role: "Father of (Layan - Abdulaziz - Ziyad - Saud - Deem)",
    stats: { years: "Years exp.", roles: "Positions", projects: "Projects" },
    form: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send message",
      sent: "Sent ✓",
      phName: "Your name",
      phEmail: "Your email",
      phSubject: "Subject",
      phMessage: "Write your message…",
      required: "This field is required",
    },
    contactInfo: {
      email: "Email",
      phone: "Phone",
      location: "Location",
      locationValue: "الرياض، المملكة العربية السعودية",
    },
    repos: { loading: "Loading repositories…", error: "Failed to load repositories, try again later." },
    portraitAlt: "صورة شخصية · portrait",
    rights: "© 2026 محمد الهويمل · All rights reserved",
  },
} as const;

export type Labels = (typeof dict)[Dir];
