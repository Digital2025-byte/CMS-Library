/**
 * FAQs page (/help/faqs).
 *   page-hero        → faq hero (no image)
 *   search-console   → faq search
 *   faq-explorer     → multi-category FAQ (no browse button)
 *   help-categories  → "Get Help" (2 cards)
 *   live-chat-banner → live chat
 */
export const faqsBlocks = [
  {
    sectionId: "page-hero",
    style: { showImage: false },
    content: {
      en: {
        title: "Frequently Asked Questions",
        subtitle: "Find quick answers to the most common questions",
        imageUrl: "",
        imageAlt: "",
      },
      ar: {
        title: "الأسئلة الشائعة",
        subtitle: "اعثر على إجابات سريعة لأكثر الأسئلة شيوعاً",
        imageUrl: "",
        imageAlt: "",
      },
    },
  },
  {
    sectionId: "search-console",
    style: { showSubmit: false },
    content: {
      en: {
        label: "Ask Your Question",
        placeholder: "Search for a topic or question...",
        submitLabel: "",
        popularLabel: "Popular search",
        popularItems: [
          { label: "Baggage" },
          { label: "Booking online" },
          { label: "Check-in" },
          { label: "Flight Status" },
        ],
      },
      ar: {
        label: "اطرح سؤالك",
        placeholder: "ابحث عن موضوع أو سؤال...",
        submitLabel: "",
        popularLabel: "عمليات البحث الشائعة",
        popularItems: [
          { label: "الأمتعة" },
          { label: "الحجز عبر الإنترنت" },
          { label: "تسجيل الوصول" },
          { label: "حالة الرحلة" },
        ],
      },
    },
  },
  {
    sectionId: "faq-explorer",
    style: { showBrowse: false, showTitle: false },
    content: {
      en: {
        title: "",
        browseLabel: "",
        browseHref: "",
        browseLinkType: "internal",
        categories: [
          {
            label: "Baggage",
            questions: [
              { question: "What is the baggage allowance?", answer: "Baggage allowance depends on your fare type and route. Check your booking or contact Customer Care for adult and child limits." },
              { question: "How can I purchase an additional bag?", answer: "You can add extra baggage during booking, later through Manage Booking, or by contacting Customer Care." },
            ],
          },
          {
            label: "Booking",
            questions: [
              { question: "How do I book a flight online?", answer: "Choose your route and dates on the booking page, select a fare, add passenger details, and pay securely to receive your confirmation." },
              { question: "How do I change my booking?", answer: "Use Manage Booking to change your date, route, or flight, or submit a Booking Change request form." },
            ],
          },
          {
            label: "Check-in",
            questions: [
              { question: "When does check-in open?", answer: "Airport check-in opens a few hours before departure and closes at the published cut-off time. Arrive early for international flights." },
            ],
          },
          {
            label: "Flight Status",
            questions: [
              { question: "How do I check my flight status?", answer: "Track departures, arrivals, and gate updates in real time from the flight status page using your flight number or route." },
            ],
          },
        ],
      },
      ar: {
        title: "",
        browseLabel: "",
        browseHref: "",
        browseLinkType: "internal",
        categories: [
          {
            label: "الأمتعة",
            questions: [
              { question: "ما هو حد الأمتعة المسموح به؟", answer: "يختلف حد الأمتعة حسب نوع التذكرة والمسار. راجع حجزك أو تواصل مع خدمة الزبائن لمعرفة حدود البالغ والطفل." },
              { question: "كيف يمكنني شراء حقيبة إضافية؟", answer: "يمكنك إضافة أمتعة إضافية أثناء الحجز، أو لاحقاً عبر إدارة الحجز، أو بالتواصل مع خدمة الزبائن." },
            ],
          },
          {
            label: "الحجز",
            questions: [
              { question: "كيف أحجز رحلة عبر الإنترنت؟", answer: "اختر المسار والتواريخ في صفحة الحجز، ثم اختر التذكرة، وأضف بيانات المسافرين، وادفع بأمان لتصلك رسالة التأكيد." },
              { question: "كيف أعدّل حجزي؟", answer: "استخدم إدارة الحجز لتعديل التاريخ أو المسار أو الرحلة، أو قدّم نموذج طلب تعديل الحجز." },
            ],
          },
          {
            label: "تسجيل الوصول",
            questions: [
              { question: "متى يبدأ تسجيل الوصول؟", answer: "يبدأ تسجيل الوصول في المطار قبل المغادرة بعدة ساعات ويُغلق في وقت الانتهاء المحدد. احضر مبكراً للرحلات الدولية." },
            ],
          },
          {
            label: "حالة الرحلة",
            questions: [
              { question: "كيف أتحقق من حالة رحلتي؟", answer: "تابع المغادرات والوصولات وتحديثات البوابات في الوقت الفعلي من صفحة حالة الرحلة باستخدام رقم رحلتك أو مسارك." },
            ],
          },
        ],
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
];
