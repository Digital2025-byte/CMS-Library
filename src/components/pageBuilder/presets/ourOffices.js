/**
 * Our Offices page (/help/contact-us/our-offices).
 *   page-hero        → offices hero
 *   location-directory → city tabs + office cards
 *   live-chat-banner → live chat
 *   help-categories  → "Get Help" (2 cards)
 *   faq-explorer     → offices FAQs + browse button
 */
const HERO_IMAGE = "/help/our-offices/ph1.png";
const HERO_MASK = "/help/contact-us/mask.png";

export const ourOfficesBlocks = [
  {
    sectionId: "page-hero",
    content: {
      en: {
        title: "Our offices",
        subtitle:
          "Planning to visit us? Find Fly Cham office locations, information, and working hours",
        imageUrl: HERO_IMAGE,
        imageMask: HERO_MASK,
        imageAlt: "Fly Cham office",
      },
      ar: {
        title: "مكاتبنا",
        subtitle:
          "هل تخطط لزيارتنا؟ اعثر على مواقع مكاتب فلاي شام ومعلوماتها وساعات العمل",
        imageUrl: HERO_IMAGE,
        imageMask: HERO_MASK,
        imageAlt: "مكتب فلاي شام",
      },
    },
  },
  {
    sectionId: "location-directory",
    content: {
      en: {
        title: "",
        subtitle: "",
        tabs: [
          {
            label: "Damascus",
            locations: [
              { name: "Free Zone", city: "Damascus", address: "Free Zone - Damascus", phone: "+963 -11-2122222", email: "cs@flycham.com", hours: "Sat-Thu: 09:00 AM - 05:00 PM" },
              { name: "Fardous", city: "Damascus", address: "Fardous - Damascus", phone: "+963 -11-2274444", email: "cs@flycham.com", hours: "Sat-Thu: 09:00 AM - 05:00 PM" },
              { name: "Masa Plaza Mall - Midan", city: "Damascus", address: "Midan - Damascus", phone: "+963 -11-8842222", email: "cs@flycham.com", hours: "Mon-Thu: 11:00 AM - 09:00 PM" },
              { name: "Damascus International Airport", city: "Damascus", address: "Damascus International Airport", phone: "+963 -11-5400714", email: "cs@flycham.com", hours: "Mon-Sun: 24 Hours" },
            ],
          },
          {
            label: "Aleppo",
            locations: [
              { name: "Azizieh", city: "Aleppo", address: "Azizieh - Aleppo", phone: "+963-21-2211111", email: "cs@flycham.com", hours: "Sat-Thu: 09:00 AM - 05:00 PM" },
              { name: "Al-Jamiliyah", city: "Aleppo", address: "Al-Jamiliyah - Aleppo", phone: "+963-21-3322222", email: "cs@flycham.com", hours: "Sat-Thu: 09:00 AM - 05:00 PM" },
              { name: "Aleppo International Airport", city: "Aleppo", address: "Aleppo International Airport", phone: "+963-21-5400888", email: "cs@flycham.com", hours: "Mon-Sun: 24 Hours" },
            ],
          },
        ],
      },
      ar: {
        title: "",
        subtitle: "",
        tabs: [
          {
            label: "دمشق",
            locations: [
              { name: "المنطقة الحرة", city: "دمشق", address: "المنطقة الحرة - دمشق", phone: "+963 -11-2122222", email: "cs@flycham.com", hours: "السبت-الخميس: 09:00 ص - 05:00 م" },
              { name: "الفردوس", city: "دمشق", address: "الفردوس - دمشق", phone: "+963 -11-2274444", email: "cs@flycham.com", hours: "السبت-الخميس: 09:00 ص - 05:00 م" },
              { name: "ماسا بلازا مول - الميدان", city: "دمشق", address: "الميدان - دمشق", phone: "+963 -11-8842222", email: "cs@flycham.com", hours: "الإثنين-الخميس: 11:00 ص - 09:00 م" },
              { name: "مطار دمشق الدولي", city: "دمشق", address: "مطار دمشق الدولي", phone: "+963 -11-5400714", email: "cs@flycham.com", hours: "الإثنين-الأحد: 24 ساعة" },
            ],
          },
          {
            label: "حلب",
            locations: [
              { name: "العزيزية", city: "حلب", address: "العزيزية - حلب", phone: "+963-21-2211111", email: "cs@flycham.com", hours: "السبت-الخميس: 09:00 ص - 05:00 م" },
              { name: "الجميلية", city: "حلب", address: "الجميلية - حلب", phone: "+963-21-3322222", email: "cs@flycham.com", hours: "السبت-الخميس: 09:00 ص - 05:00 م" },
              { name: "مطار حلب الدولي", city: "حلب", address: "مطار حلب الدولي", phone: "+963-21-5400888", email: "cs@flycham.com", hours: "الإثنين-الأحد: 24 ساعة" },
            ],
          },
        ],
      },
    },
  },
  {
    sectionId: "live-chat-banner",
    content: {
      en: {
        title: "Start Live Chat",
        description:
          "Chat with our Customer Service team and get immediate support for your questions and inquiries.",
        buttonLabel: "Chat now",
        buttonHref: "",
        buttonLinkType: "external",
      },
      ar: {
        title: "ابدأ الدردشة",
        description:
          "تحدّث مباشرةً مع فريق خدمة زبائن فلاي شام واحصل على الدعم الفوري لأسئلتك واستفساراتك.",
        buttonLabel: "تحدث الآن",
        buttonHref: "",
        buttonLinkType: "external",
      },
    },
  },
  {
    sectionId: "contact-cards",
    style: { variant: "getHelp", columns: "2" },
    content: {
      en: {
        title: "Get Help",
        subtitle: "You can get support and assistance wherever you are.",
        cards: [
          { icon: "headset", title: "Customer Care", description: "Contact our Customer Care team for urgent assistance with bookings, flight status, and cancellations.", href: "/help/contact-us" },
          { icon: "clipboard", title: "Forms and Requests", description: "Submit a request, service request, complaint, or feedback.", href: "/help/contact-us/forms" },
        ],
      },
      ar: {
        title: "احصل على المساعدة",
        subtitle: "يمكنك الحصول على الدعم والمساعدة في أي وقت.",
        cards: [
          { icon: "headset", title: "خدمة الزبائن", description: "تواصل مع فريق خدمة الزبائن للحصول على مساعدة فورية بخصوص الحجوزات، وحالة الرحلات، والإلغاءات.", href: "/help/contact-us" },
          { icon: "clipboard", title: "النماذج والطلبات", description: "يمكنك تقديم طلب استرداد، أو طلب خدمة، أو ملاحظة أو مشاركة رأيك في خدماتنا.", href: "/help/contact-us/forms" },
        ],
      },
    },
  },
  {
    sectionId: "faq-explorer",
    content: {
      en: {
        title: "Frequently Asked Questions",
        browseLabel: "Browse FAQs",
        browseHref: "/help/faqs",
        browseLinkType: "internal",
        categories: [
          {
            label: "Baggage",
            questions: [
              { question: "What is the baggage allowance for an adult and a child on direct flights?", answer: "Baggage allowance depends on your fare type and route. Check your booking or contact Customer Care for adult and child limits on direct flights." },
              { question: "What is the permitted weight for an infant on direct flights?", answer: "Infant baggage limits depend on your fare and route. Check your booking or contact Customer Care for the permitted weight on direct flights." },
              { question: "How can I purchase an additional bag with a pre-determined weight?", answer: "You can add extra baggage during booking, later through Manage Booking, or by contacting Customer Care." },
            ],
          },
        ],
      },
      ar: {
        title: "الأسئلة الشائعة",
        browseLabel: "تصفّح الأسئلة الشائعة",
        browseHref: "/help/faqs",
        browseLinkType: "internal",
        categories: [
          {
            label: "الأمتعة",
            questions: [
              { question: "ما هو حد الأمتعة المسموح به للبالغ والطفل على الرحلات المباشرة؟", answer: "يختلف حد الأمتعة حسب نوع التذكرة والمسار. راجع حجزك أو تواصل مع خدمة الزبائن لمعرفة الحد المسموح للبالغ والطفل على الرحلات المباشرة." },
              { question: "ما هو الوزن المسموح به للرضيع على الرحلات المباشرة؟", answer: "يختلف حد أمتعة الرضيع حسب نوع التذكرة والمسار. راجع حجزك أو تواصل مع خدمة الزبائن لمعرفة الوزن المسموح على الرحلات المباشرة." },
              { question: "كيف يمكنني شراء حقيبة إضافية بوزن محدد مسبقاً؟", answer: "يمكنك إضافة أمتعة إضافية أثناء الحجز، أو لاحقاً عبر إدارة الحجز، أو بالتواصل مع خدمة الزبائن." },
            ],
          },
        ],
      },
    },
  },
];
