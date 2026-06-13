import type { Service } from "@/data/types";

/**
 * Seed content for the most-requested Kenyan government services.
 *
 * Fees and timelines are indicative (as published on eCitizen / agency portals)
 * and can change; the UI always shows a disclaimer pointing users to the official
 * portal to confirm before paying. County-specific variation (e.g. business
 * permits) is summarised, not enumerated per county.
 */
export const services: Service[] = [
  {
    slug: "birth-certificate",
    category: "civil",
    icon: "📜",
    title: { en: "Birth Certificate", sw: "Cheti cha Kuzaliwa" },
    summary: {
      en: "Official proof of birth, needed for school, ID, passport and more.",
      sw: "Uthibitisho rasmi wa kuzaliwa, unaohitajika shuleni, kitambulisho, pasipoti na zaidi.",
    },
    eligibility: [
      {
        en: "Any person born in Kenya whose birth was registered (notification of birth issued).",
        sw: "Mtu yeyote aliyezaliwa Kenya ambaye kuzaliwa kwake kulisajiliwa (taarifa ya kuzaliwa ilitolewa).",
      },
      {
        en: "A parent or guardian can apply on behalf of a child.",
        sw: "Mzazi au mlezi anaweza kuomba kwa niaba ya mtoto.",
      },
    ],
    documents: [
      {
        en: "Notification of Birth (the slip from the hospital where the birth occurred).",
        sw: "Taarifa ya Kuzaliwa (karatasi kutoka hospitali ambapo kuzaliwa kulitokea).",
      },
      {
        en: "Both parents' National ID numbers.",
        sw: "Nambari za Vitambulisho vya Kitaifa vya wazazi wote wawili.",
      },
      {
        en: "For late registration: a sworn affidavit and supporting documents.",
        sw: "Kwa usajili wa kuchelewa: kiapo na nyaraka za uthibitisho.",
      },
    ],
    fees: [
      {
        label: { en: "Certificate processing fee", sw: "Ada ya kuandaa cheti" },
        amountKes: 200,
      },
    ],
    timeline: {
      en: "About 5–15 working days after a complete application.",
      sw: "Takriban siku 5–15 za kazi baada ya maombi kamili.",
    },
    steps: [
      {
        title: { en: "Create / log in to eCitizen", sw: "Fungua / ingia eCitizen" },
        detail: {
          en: "Go to ecitizen.go.ke and sign in with your phone number and ID. Select the Civil Registration Services agency.",
          sw: "Nenda ecitizen.go.ke na uingie kwa nambari yako ya simu na kitambulisho. Chagua wakala wa Usajili wa Raia.",
        },
      },
      {
        title: { en: "Choose 'Apply for Birth Certificate'", sw: "Chagua 'Omba Cheti cha Kuzaliwa'" },
        detail: {
          en: "Pick the application that matches your case (timely or late registration).",
          sw: "Chagua maombi yanayolingana na hali yako (usajili wa wakati au wa kuchelewa).",
        },
      },
      {
        title: { en: "Fill in the birth details", sw: "Jaza taarifa za kuzaliwa" },
        detail: {
          en: "Enter the notification number, child's details and both parents' details exactly as on their IDs.",
          sw: "Weka nambari ya taarifa, taarifa za mtoto na za wazazi wote wawili kama zilivyo kwenye vitambulisho.",
        },
      },
      {
        title: { en: "Pay the fee", sw: "Lipa ada" },
        detail: {
          en: "Pay via M-Pesa or card through the eCitizen prompt and keep the receipt.",
          sw: "Lipa kupitia M-Pesa au kadi kupitia eCitizen na uhifadhi risiti.",
        },
      },
      {
        title: { en: "Collect the certificate", sw: "Chukua cheti" },
        detail: {
          en: "Track status on eCitizen; collect at the registrar's office or Huduma Centre stated on your application.",
          sw: "Fuatilia hali kwenye eCitizen; chukua katika ofisi ya msajili au Huduma Centre iliyoonyeshwa.",
        },
      },
    ],
    officialUrl: "https://ecitizen.go.ke",
  },

  {
    slug: "national-id",
    category: "identity",
    icon: "🪪",
    title: { en: "National ID Card", sw: "Kitambulisho cha Taifa" },
    summary: {
      en: "Your primary proof of identity and citizenship, issued from age 18.",
      sw: "Uthibitisho wako mkuu wa utambulisho na uraia, hutolewa kuanzia umri wa miaka 18.",
    },
    eligibility: [
      {
        en: "Kenyan citizens aged 18 and above (first-time issuance is free).",
        sw: "Raia wa Kenya wenye umri wa miaka 18 na zaidi (utoaji wa kwanza ni bila malipo).",
      },
      {
        en: "Replacement available if lost, damaged or details changed.",
        sw: "Uingizwaji upya unapatikana ikiwa kimepotea, kimeharibika au taarifa zimebadilika.",
      },
    ],
    documents: [
      {
        en: "Original birth certificate.",
        sw: "Cheti halisi cha kuzaliwa.",
      },
      {
        en: "Parents' or guardian's National IDs.",
        sw: "Vitambulisho vya kitaifa vya wazazi au mlezi.",
      },
      {
        en: "For replacement: a police abstract (if lost) and the old ID (if damaged).",
        sw: "Kwa uingizwaji upya: ripoti ya polisi (ikiwa kimepotea) na kitambulisho cha zamani (ikiwa kimeharibika).",
      },
    ],
    fees: [
      {
        label: { en: "First application", sw: "Maombi ya kwanza" },
        amountKes: 0,
      },
      {
        label: { en: "Replacement", sw: "Uingizwaji upya" },
        amountKes: 100,
      },
    ],
    timeline: {
      en: "About 3–6 weeks; an SMS notifies you when it is ready.",
      sw: "Takriban wiki 3–6; SMS itakujulisha kikiwa tayari.",
    },
    steps: [
      {
        title: { en: "Visit a registration point", sw: "Tembelea kituo cha usajili" },
        detail: {
          en: "Go to a Huduma Centre or the National Registration Bureau office in your area.",
          sw: "Nenda Huduma Centre au ofisi ya Usajili wa Taifa katika eneo lako.",
        },
      },
      {
        title: { en: "Fill the application form", sw: "Jaza fomu ya maombi" },
        detail: {
          en: "Complete the ID application form and present your supporting documents.",
          sw: "Jaza fomu ya maombi ya kitambulisho na uwasilishe nyaraka zako za uthibitisho.",
        },
      },
      {
        title: { en: "Give fingerprints and photo", sw: "Toa alama za vidole na picha" },
        detail: {
          en: "Your biometrics are captured at the office. You receive a waiting card / acknowledgement slip.",
          sw: "Alama zako za kibayolojia hupigwa ofisini. Utapokea kadi ya kusubiri / risiti.",
        },
      },
      {
        title: { en: "Wait for the SMS", sw: "Subiri SMS" },
        detail: {
          en: "Check status by SMS (send your waiting-card number to the published shortcode) or on eCitizen.",
          sw: "Angalia hali kwa SMS (tuma nambari ya kadi ya kusubiri kwa shortcode iliyotangazwa) au eCitizen.",
        },
      },
      {
        title: { en: "Collect your ID", sw: "Chukua kitambulisho chako" },
        detail: {
          en: "Collect from the same registration point with your waiting card.",
          sw: "Chukua kutoka kituo kilekile cha usajili ukiwa na kadi yako ya kusubiri.",
        },
      },
    ],
    officialUrl: "https://www.ecitizen.go.ke",
  },

  {
    slug: "kenyan-passport",
    category: "identity",
    icon: "🛂",
    title: { en: "Kenyan Passport", sw: "Pasipoti ya Kenya" },
    summary: {
      en: "Travel document for Kenyan citizens, applied for online via eCitizen.",
      sw: "Hati ya kusafiria kwa raia wa Kenya, huombwa mtandaoni kupitia eCitizen.",
    },
    eligibility: [
      {
        en: "Kenyan citizens with a valid National ID (or guardian for minors).",
        sw: "Raia wa Kenya wenye Kitambulisho halali (au mlezi kwa watoto).",
      },
    ],
    documents: [
      { en: "Original National ID and a copy.", sw: "Kitambulisho halisi cha Taifa na nakala." },
      { en: "Original birth certificate.", sw: "Cheti halisi cha kuzaliwa." },
      {
        en: "Recent passport-size photos as specified during application.",
        sw: "Picha za hivi karibuni za ukubwa wa pasipoti kama zilivyobainishwa wakati wa maombi.",
      },
      {
        en: "For minors: both parents' IDs and the child's birth certificate.",
        sw: "Kwa watoto: vitambulisho vya wazazi wote na cheti cha kuzaliwa cha mtoto.",
      },
    ],
    fees: [
      { label: { en: "34-page (ordinary)", sw: "Kurasa 34 (kawaida)" }, amountKes: 4550 },
      { label: { en: "50-page", sw: "Kurasa 50" }, amountKes: 6050 },
      { label: { en: "66-page", sw: "Kurasa 66" }, amountKes: 7550 },
    ],
    timeline: {
      en: "About 10 working days after biometric capture (longer at peak times).",
      sw: "Takriban siku 10 za kazi baada ya kupiga alama za kibayolojia (zaidi nyakati za msongamano).",
    },
    steps: [
      {
        title: { en: "Apply on eCitizen", sw: "Omba kwenye eCitizen" },
        detail: {
          en: "Log in to eCitizen, select the Directorate of Immigration Services, and start a passport application.",
          sw: "Ingia eCitizen, chagua Kurugenzi ya Huduma za Uhamiaji, na uanze maombi ya pasipoti.",
        },
      },
      {
        title: { en: "Fill the form and upload documents", sw: "Jaza fomu na pakia nyaraka" },
        detail: {
          en: "Enter your details, choose the booklet size, and upload scanned copies where requested.",
          sw: "Weka taarifa zako, chagua ukubwa wa kijitabu, na pakia nakala zilizopigwa picha pale zinapohitajika.",
        },
      },
      {
        title: { en: "Pay and book an appointment", sw: "Lipa na uweke miadi" },
        detail: {
          en: "Pay the fee, then book a biometric appointment at Nyayo House, Mombasa, Kisumu or Eldoret.",
          sw: "Lipa ada, kisha weka miadi ya kibayolojia Nyayo House, Mombasa, Kisumu au Eldoret.",
        },
      },
      {
        title: { en: "Attend biometric capture", sw: "Hudhuria upigaji wa kibayolojia" },
        detail: {
          en: "Bring the original documents and your printed application to the appointment.",
          sw: "Leta nyaraka halisi na maombi yako yaliyochapishwa kwenye miadi.",
        },
      },
      {
        title: { en: "Collect the passport", sw: "Chukua pasipoti" },
        detail: {
          en: "Track status on eCitizen and collect from the office where you applied.",
          sw: "Fuatilia hali kwenye eCitizen na uchukue kutoka ofisi uliyoomba.",
        },
      },
    ],
    officialUrl: "https://accounts.ecitizen.go.ke",
  },

  {
    slug: "kra-pin",
    category: "tax",
    icon: "🧾",
    title: { en: "KRA PIN Certificate", sw: "Cheti cha PIN ya KRA" },
    summary: {
      en: "Tax identification number needed for jobs, business, land and licences. Free and instant.",
      sw: "Nambari ya utambulisho wa kodi inayohitajika kazini, biashara, ardhi na leseni. Bila malipo na ya papo hapo.",
    },
    eligibility: [
      {
        en: "Any Kenyan with a National ID, or a registered company/foreigner with the right documents.",
        sw: "Mkenya yeyote mwenye Kitambulisho, au kampuni/mgeni aliyesajiliwa mwenye nyaraka sahihi.",
      },
    ],
    documents: [
      { en: "National ID number.", sw: "Nambari ya Kitambulisho cha Taifa." },
      { en: "A working email address.", sw: "Anwani ya barua pepe inayofanya kazi." },
      {
        en: "For employed applicants: employer details. For business: business registration details.",
        sw: "Kwa walioajiriwa: taarifa za mwajiri. Kwa biashara: taarifa za usajili wa biashara.",
      },
    ],
    fees: [{ label: { en: "Registration", sw: "Usajili" }, amountKes: 0 }],
    timeline: {
      en: "Instant — the PIN certificate is generated immediately on completion.",
      sw: "Papo hapo — cheti cha PIN huzalishwa mara moja baada ya kukamilisha.",
    },
    steps: [
      {
        title: { en: "Open iTax", sw: "Fungua iTax" },
        detail: {
          en: "Go to itax.kra.go.ke and choose 'New PIN Registration'.",
          sw: "Nenda itax.kra.go.ke na uchague 'New PIN Registration'.",
        },
      },
      {
        title: { en: "Select taxpayer type", sw: "Chagua aina ya mlipakodi" },
        detail: {
          en: "Choose Individual (resident) and ID as your mode of registration.",
          sw: "Chagua Mtu Binafsi (mkazi) na Kitambulisho kama njia yako ya usajili.",
        },
      },
      {
        title: { en: "Fill your details", sw: "Jaza taarifa zako" },
        detail: {
          en: "Enter your ID, personal details, obligations (e.g. income tax) and source of income.",
          sw: "Weka kitambulisho chako, taarifa binafsi, majukumu (mf. kodi ya mapato) na chanzo cha mapato.",
        },
      },
      {
        title: { en: "Submit and download", sw: "Wasilisha na pakua" },
        detail: {
          en: "Solve the arithmetic captcha, submit, and download your PIN certificate immediately.",
          sw: "Tatua kihesabu cha captcha, wasilisha, na upakue cheti chako cha PIN mara moja.",
        },
      },
    ],
    officialUrl: "https://itax.kra.go.ke",
  },

  {
    slug: "driving-licence",
    category: "transport",
    icon: "🚗",
    title: { en: "Smart Driving Licence", sw: "Leseni ya Kuendesha (Smart)" },
    summary: {
      en: "The NTSA smart driving licence, renewed or applied for online via eCitizen/TIMS.",
      sw: "Leseni mahiri ya kuendesha ya NTSA, huombwa au kufanywa upya mtandaoni kupitia eCitizen/TIMS.",
    },
    eligibility: [
      {
        en: "Applicants who have passed the driving test, or holders renewing an existing licence.",
        sw: "Waombaji waliofaulu mtihani wa udereva, au wenye leseni wanaofanya upya.",
      },
    ],
    documents: [
      { en: "National ID and KRA PIN.", sw: "Kitambulisho na PIN ya KRA." },
      { en: "Passport-size photo.", sw: "Picha ya ukubwa wa pasipoti." },
      {
        en: "Interim/provisional driving licence or proof of passing the test (new applicants).",
        sw: "Leseni ya muda/ya majaribio au uthibitisho wa kufaulu mtihani (waombaji wapya).",
      },
      {
        en: "For PSV: a valid medical certificate and certificate of good conduct.",
        sw: "Kwa PSV: cheti halali cha matibabu na cheti cha mwenendo mzuri.",
      },
    ],
    fees: [
      { label: { en: "Smart DL (3 years)", sw: "Leseni Smart (miaka 3)" }, amountKes: 3050 },
      { label: { en: "Smart DL (1 year)", sw: "Leseni Smart (mwaka 1)" }, amountKes: 650 },
    ],
    timeline: {
      en: "Card ready in about 1–2 weeks; collect from the chosen NTSA/Huduma point.",
      sw: "Kadi tayari ndani ya wiki 1–2; chukua kutoka kituo ulichochagua cha NTSA/Huduma.",
    },
    steps: [
      {
        title: { en: "Log in to the TIMS portal", sw: "Ingia kwenye tovuti ya TIMS" },
        detail: {
          en: "Access TIMS through eCitizen (NTSA). Ensure your KRA PIN is linked.",
          sw: "Fikia TIMS kupitia eCitizen (NTSA). Hakikisha PIN yako ya KRA imeunganishwa.",
        },
      },
      {
        title: { en: "Select the licence service", sw: "Chagua huduma ya leseni" },
        detail: {
          en: "Choose 'Apply for Smart DL' (new) or 'Renew DL', and the validity period.",
          sw: "Chagua 'Omba Smart DL' (mpya) au 'Fanya upya DL', na muda wa uhalali.",
        },
      },
      {
        title: { en: "Upload photo and details", sw: "Pakia picha na taarifa" },
        detail: {
          en: "Upload a compliant passport photo and confirm your licence classes.",
          sw: "Pakia picha ya pasipoti inayokubalika na uthibitishe madarasa yako ya leseni.",
        },
      },
      {
        title: { en: "Pay the fee", sw: "Lipa ada" },
        detail: {
          en: "Pay via M-Pesa or card. Keep the receipt as proof.",
          sw: "Lipa kupitia M-Pesa au kadi. Hifadhi risiti kama uthibitisho.",
        },
      },
      {
        title: { en: "Collect the smart card", sw: "Chukua kadi mahiri" },
        detail: {
          en: "You're notified when the card is printed; collect at the selected centre.",
          sw: "Utajulishwa kadi ikishachapishwa; chukua katika kituo ulichochagua.",
        },
      },
    ],
    officialUrl: "https://ntsa.ecitizen.go.ke",
  },

  {
    slug: "business-permit",
    category: "business",
    icon: "🏪",
    title: { en: "Single Business Permit", sw: "Kibali cha Biashara (Single Business Permit)" },
    summary: {
      en: "The annual county licence every business needs to operate legally. Fees vary by county and business size.",
      sw: "Leseni ya kila mwaka ya kaunti ambayo kila biashara inahitaji kufanya kazi kihalali. Ada hutofautiana kwa kaunti na ukubwa wa biashara.",
    },
    eligibility: [
      {
        en: "Anyone operating a business within a county — sole traders, companies, SMEs.",
        sw: "Yeyote anayeendesha biashara ndani ya kaunti — wafanyabiashara binafsi, kampuni, biashara ndogo.",
      },
    ],
    documents: [
      { en: "National ID and KRA PIN of the owner.", sw: "Kitambulisho na PIN ya KRA ya mmiliki." },
      {
        en: "Business registration certificate (business name or company).",
        sw: "Cheti cha usajili wa biashara (jina la biashara au kampuni).",
      },
      {
        en: "Premises details: physical location, plot/stall number, lease or rent agreement.",
        sw: "Taarifa za jengo: eneo halisi, nambari ya kiwanja/duka, mkataba wa kukodi.",
      },
    ],
    fees: [
      {
        label: { en: "Permit (varies by county & size, typical small business)", sw: "Kibali (hutofautiana kwa kaunti na ukubwa, biashara ndogo ya kawaida)" },
        amountKes: 5000,
      },
    ],
    timeline: {
      en: "Often same day to 1 week once documents and inspection (if any) are cleared.",
      sw: "Mara nyingi siku hiyo hiyo hadi wiki 1 mara nyaraka na ukaguzi (kama upo) zikithibitishwa.",
    },
    steps: [
      {
        title: { en: "Use your county's e-portal", sw: "Tumia tovuti ya kaunti yako" },
        detail: {
          en: "Most counties have an online revenue portal (e.g. Nairobi's NRS/'eMaliPay'). Register or log in.",
          sw: "Kaunti nyingi zina tovuti ya mapato mtandaoni (mf. NRS/'eMaliPay' ya Nairobi). Jisajili au uingie.",
        },
      },
      {
        title: { en: "Apply for a Single Business Permit", sw: "Omba Kibali cha Biashara" },
        detail: {
          en: "Select the business category and sub-category that best matches your activity.",
          sw: "Chagua kategoria ya biashara na kategoria ndogo inayolingana zaidi na shughuli yako.",
        },
      },
      {
        title: { en: "Enter business and premises details", sw: "Weka taarifa za biashara na jengo" },
        detail: {
          en: "Provide your registration, location and number of employees — these determine the fee band.",
          sw: "Toa usajili wako, eneo na idadi ya wafanyakazi — haya huamua kiwango cha ada.",
        },
      },
      {
        title: { en: "Pay and get the invoice", sw: "Lipa na upate ankara" },
        detail: {
          en: "Generate the bill, pay via M-Pesa paybill or bank, and download the receipt.",
          sw: "Tengeneza bili, lipa kupitia M-Pesa paybill au benki, na upakue risiti.",
        },
      },
      {
        title: { en: "Print the permit", sw: "Chapisha kibali" },
        detail: {
          en: "Download and display the permit at your premises; some counties inspect before issuing.",
          sw: "Pakua na uonyeshe kibali katika jengo lako; baadhi ya kaunti hukagua kabla ya kutoa.",
        },
      },
    ],
    officialUrl: "https://www.ecitizen.go.ke",
  },

  {
    slug: "good-conduct",
    category: "identity",
    icon: "✅",
    title: { en: "Certificate of Good Conduct", sw: "Cheti cha Mwenendo Mzuri" },
    summary: {
      en: "Police clearance certificate from the DCI, required by many employers and for travel.",
      sw: "Cheti cha kibali cha polisi kutoka DCI, kinachohitajika na waajiri wengi na kwa kusafiri.",
    },
    eligibility: [
      {
        en: "Any adult with a National ID who needs a police clearance.",
        sw: "Mtu mzima yeyote mwenye Kitambulisho anayehitaji kibali cha polisi.",
      },
    ],
    documents: [
      { en: "National ID and a copy.", sw: "Kitambulisho na nakala." },
      {
        en: "eCitizen-generated application invoice/QR for fingerprinting.",
        sw: "Ankara/QR ya maombi iliyozalishwa na eCitizen kwa upigaji alama za vidole.",
      },
    ],
    fees: [
      { label: { en: "Application fee", sw: "Ada ya maombi" }, amountKes: 1050 },
    ],
    timeline: {
      en: "About 10–15 working days after fingerprints are submitted.",
      sw: "Takriban siku 10–15 za kazi baada ya alama za vidole kuwasilishwa.",
    },
    steps: [
      {
        title: { en: "Apply via eCitizen (DCI)", sw: "Omba kupitia eCitizen (DCI)" },
        detail: {
          en: "Log in, select the Directorate of Criminal Investigations, and start a Police Clearance application.",
          sw: "Ingia, chagua Kurugenzi ya Upelelezi wa Jinai, na uanze maombi ya Kibali cha Polisi.",
        },
      },
      {
        title: { en: "Pay and print the invoice", sw: "Lipa na uchapishe ankara" },
        detail: {
          en: "Pay the fee and print the invoice/QR — you need it to be fingerprinted.",
          sw: "Lipa ada na uchapishe ankara/QR — unaihitaji ili kupigwa alama za vidole.",
        },
      },
      {
        title: { en: "Get fingerprinted", sw: "Pigwa alama za vidole" },
        detail: {
          en: "Visit DCI headquarters or a registered Huduma Centre with your ID and invoice for fingerprint capture.",
          sw: "Tembelea makao makuu ya DCI au Huduma Centre iliyosajiliwa ukiwa na kitambulisho na ankara kwa upigaji wa alama.",
        },
      },
      {
        title: { en: "Track and download", sw: "Fuatilia na upakue" },
        detail: {
          en: "Once processed, download the certificate from your eCitizen account.",
          sw: "Mara baada ya kushughulikiwa, pakua cheti kutoka akaunti yako ya eCitizen.",
        },
      },
    ],
    officialUrl: "https://www.ecitizen.go.ke",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
