/**
 * Our GSA page (/help/contact-us/our-gsa).
 *   page-hero          → gsa hero
 *   location-directory → country tabs + agent cards
 *   cta-banner         → become-a-partner promo
 *   faq-explorer       → gsa FAQs + browse button
 *
 * Agent names/addresses are real proper nouns, kept identical across languages;
 * only the country tab labels are localized.
 */
const HERO_IMAGE = "/help/our-gsa/ph1.png";
const HERO_MASK = "/help/contact-us/mask.png";
const PARTNER_IMAGE = "/help/our-gsa/ph2.png";

const AGENT_TABS_EN = [
  {
    label: "Iraq",
    locations: [
      { name: "FLY CHAM", city: "Baghdad", address: "Saadoon Street", phone: "+964 7707962651", email: "sales@flycham-iq.com", hours: "Sat-Thu: 09:30 AM - 03:30 PM", lat: 33.324, lng: 44.4156 },
      { name: "Al-Rafidin Company", city: "Basrah", address: "14 Tammoz St., Near Basra's International Hotel", phone: "+964 7730500070", email: "fly.alrafidainco@yahoo.com", hours: "Sun-Thu: 09:00 AM - 09:00 PM", lat: 30.5152, lng: 47.7835 },
      { name: "Zozik Aviation", city: "Erbil", address: "Gullan Street, English Village Road", phone: "+964 7501000405", email: "flycham@zozik-air.net", hours: "Sat-Thu: 09:30 AM - 02:00 PM", lat: 36.1911, lng: 44.0094 },
    ],
  },
  {
    label: "Armenia",
    locations: [
      { name: "Wings Tour", city: "Yerevan", address: "3 Yeznik Koghbatsi Street", phone: "+374 11202015", email: "wingstourarm@gmail.com", hours: "Mon-Fri: 10:00 AM - 06:00 PM", lat: 40.1772, lng: 44.5035 },
    ],
  },
  {
    label: "Kuwait",
    locations: [
      { name: "Malek Travel & Tourism", city: "Kuwait", address: "Al Qibla, Ali Salem Street, Al Thuwaini Building", phone: "+965 22444434", email: "operations@malektravel.com", hours: "Sun-Thu: 08:30 AM - 09:00 PM", lat: 29.3721, lng: 47.9748 },
    ],
  },
];

const gsaTabs = (labels) =>
  AGENT_TABS_EN.map((tab, i) => ({ ...tab, label: labels[i] }));

export const ourGsaBlocks = [
  {
    sectionId: "page-hero",
    content: {
      en: {
        title: "Our GSA",
        subtitle: "Find and connect with our authorized General Sales Agents",
        imageUrl: HERO_IMAGE,
        imageMask: HERO_MASK,
        imageAlt: "Airport lounge overlooking the airfield",
      },
      ar: {
        title: "وكلاؤنا",
        subtitle: "اعثر على وكلاء المبيعات العامة المعتمدين وتواصل معهم",
        imageUrl: HERO_IMAGE,
        imageMask: HERO_MASK,
        imageAlt: "صالة المطار المطلة على ساحة المطار",
      },
    },
  },
  {
    sectionId: "location-directory",
    style: { showMap: true, mapSide: "right" },
    content: {
      en: {
        title: "Our GSA (General Sales Agents)",
        subtitle: "",
        tabs: gsaTabs(["Iraq", "Armenia", "Kuwait"]),
      },
      ar: {
        title: "وكلاؤنا (وكلاء المبيعات العامة)",
        subtitle: "",
        tabs: gsaTabs(["العراق", "أرمينيا", "الكويت"]),
      },
    },
  },
  {
    sectionId: "promo-banner",
    content: {
      en: {
        title: "Become a partner",
        description:
          "Join our partners' network and become our official regional representative. Complete the application form to initiate our commercial vetting process.",
        buttonLabel: "Start application",
        buttonHref: "",
        buttonLinkType: "external",
        imageUrl: PARTNER_IMAGE,
        imageAlt: "Fly Cham aircraft in flight",
      },
      ar: {
        title: "كن شريكاً",
        description:
          "انضم إلى شبكة شركائنا وكن ممثلنا الإقليمي الرسمي. أكمل نموذج التقديم لبدء عملية التقييم التجاري.",
        buttonLabel: "ابدأ التقديم",
        buttonHref: "",
        buttonLinkType: "external",
        imageUrl: PARTNER_IMAGE,
        imageAlt: "طائرة فلاي شام في الجو",
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
            label: "Partners",
            questions: [
              { question: "How can I contact Fly Cham for Travel Agency or OTA support?", answer: "Contact our partner support team through the application form or Customer Care. They will route Travel Agency and OTA inquiries to the right commercial team." },
              { question: "Are there any setup fees to join Fly Cham partner networks?", answer: "Setup fees depend on the partnership type and market. Details are shared during the commercial vetting process after you submit your application." },
              { question: "What compliance documents are needed for approval?", answer: "Typical requirements include a valid trade license, tax registration, and authorized signatory documents. The partner team will confirm the full list for your country." },
              { question: "How do I access API integration as a new OTA partner?", answer: "After your partner account is approved, the integrations team will share API credentials, documentation, and a sandbox environment for testing." },
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
            label: "الشركاء",
            questions: [
              { question: "كيف يمكنني التواصل مع فلاي شام لدعم وكالات السفر أو وكالات السفر الإلكترونية؟", answer: "تواصل مع فريق دعم الشركاء عبر نموذج التقديم أو خدمة الزبائن، وسيتم توجيه الاستفسارات إلى الفريق التجاري المختص." },
              { question: "هل هناك رسوم إعداد للانضمام إلى شبكات شركاء فلاي شام؟", answer: "تختلف رسوم الإعداد حسب نوع الشراكة والسوق. يتم توضيح التفاصيل خلال عملية التقييم التجاري بعد تقديم طلبك." },
              { question: "ما هي وثائق الامتثال المطلوبة للموافقة؟", answer: "عادةً ما يُطلب ترخيص تجاري ساري، وتسجيل ضريبي، ووثائق المفوض بالتوقيع. يؤكد فريق الشركاء القائمة الكاملة حسب بلدك." },
              { question: "كيف أصل إلى تكامل واجهة البرمجة كشريك وكالة إلكترونية جديد؟", answer: "بعد الموافقة على حساب الشريك، يزوّدك فريق التكامل ببيانات الواجهة والوثائق وبيئة تجريبية للاختبار." },
            ],
          },
        ],
      },
    },
  },
];
