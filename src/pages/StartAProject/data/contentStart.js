export const contentStart = {
  en: {
    title: "Start a Project",

    lead:
      "Please fill in the form below and tell me about your project. I look forward to learning more about it and exploring how we can work together.",

    capacityNote:
      "Please note that I am a one-person agency, so my working capacity is necessarily that of one person.",

    sections: {
      services: "What do you need?",
      project: "Project details",
      resources: "Context & resources",
      workflow: "Scope & workflow",
      collaboration: "Collaboration & timeline",
      commercial: "Budget, payment & contract",
      contact: "Contact & next steps",
    },

    servicesIntro: "Select all services that apply.",

    services: {
      translation: "Translation",
      mtpe: "MTPE",
      editing: "Editing",
      proofreading: "Proofreading",
      technicalTranslation: "Technical translation",
      webLocalization: "Website / web localization",
      softwareLocalization: "Software / app localization",
      uxUiLocalization: "UX/UI localization",
      gameLocalization: "Game localization",
      localizationQA: "Localization QA",
      linguisticTesting: "Linguistic testing",
      resourcePreparation: "Localization resource / file preparation",
      subtitling: "Subtitling",
      transcription: "Transcription",
      transcriptionTranslation: "Transcription + translation",
      voiceoverPreparation: "Voice-over script preparation",
      voiceoverLocalization: "Voice-over localization",
      projectSupport: "Localization project support",
      other: "Other",
    },

    project: {
      contentType: "What are you working on?",
      contentTypeOptions: {
        general: "General content",
        technical: "Technical documentation",
        website: "Website / web content",
        software: "Software / app",
        game: "Game",
        uxui: "UX/UI",
        marketing: "Marketing / advertising",
        editorial: "Editorial / publishing",
        video: "Video / audiovisual",
        interview: "Interview / recorded speech",
        other: "Other",
      },

      sourceLanguage: "Source language",
      targetLanguages: "Target language(s)",
      subject: "Subject / domain",
      audience: "Intended audience",
      audienceOptions: {
        general: "General public",
        consumers: "Consumers / customers",
        professionals: "Professionals / specialists",
        players: "Players",
        softwareUsers: "Software users",
        internal: "Internal team",
        other: "Other",
        unsure: "Not sure",
      },

      use: "Where will the content be used?",
      useOptions: {
        public: "Public-facing",
        internal: "Internal",
        commercial: "Commercial",
        product: "In-product",
        marketing: "Marketing",
        educational: "Educational",
        other: "Other",
      },

      volume: "Approximate volume",
      volumeOptions: {
        under1k: "Under 1,000 words",
        oneTo5k: "1,000–5,000 words",
        fiveTo20k: "5,000–20,000 words",
        twentyTo50k: "20,000–50,000 words",
        over50k: "50,000+ words",
        unknown: "I don't know yet",
        audioVideo: "Audio / video duration",
        ongoing: "Ongoing / recurring",
      },

      formats: "File format(s) / platform",
      finalized: "Is the source content already finalized?",
      finalizedOptions: {
        yes: "Yes",
        no: "No",
        partially: "Partially",
      },

      changing:
        "Will the source content continue to change during the project?",
      changingOptions: {
        yes: "Yes",
        no: "No",
        unknown: "Not sure yet",
      },

      other: "Other details",
      otherPlaceholder: "Please specify",
    },

    game: {
      what: "What are you localizing?",
      options: {
        ui: "UI",
        dialogue: "Dialogue",
        quests: "Quests",
        items: "Items / descriptions",
        tutorials: "Tutorials",
        achievements: "Achievements",
        menus: "Menus",
        store: "Store / marketing materials",
        ingame: "In-game text",
        other: "Other",
      },

      engine: "Which engine is the game using?",
      engineOptions: {
        unity: "Unity",
        unreal: "Unreal Engine",
        other: "Other",
        unknown: "Not sure",
      },

      setup: "How is localization currently managed?",
      setupOptions: {
        unityLocalization: "Unity Localization",
        unreal: "Unreal localization",
        spreadsheet: "CSV / spreadsheet",
        jsonXml: "JSON / XML",
        platform: "CAT / localization platform",
        custom: "Custom system",
        unknown: "Not sure",
      },

      build: "Will I have access to the game / build?",
      buildOptions: {
        yes: "Yes",
        no: "No",
        tbd: "To be decided",
      },

      testing: "Do you need linguistic testing?",
      testingOptions: {
        yes: "Yes",
        no: "No",
        unsure: "Not sure",
      },
    },

    audiovisual: {
      subtitling: {
        what: "What do you need?",
        options: {
          translation: "Translation",
          transcription: "Transcription",
          subtitleCreation: "Subtitle creation",
          translationSubtitle: "Translation + subtitle creation",
          qa: "Subtitle review / QA",
        },
        duration: "Total video duration",
        transcript: "Do you already have a transcript?",
        timecodes: "Do you already have timecodes?",
        formats: "Subtitle format",
      },

      transcription: {
        recordingType: "What kind of recording is it?",
        recordingOptions: {
          interview: "Interview",
          meeting: "Meeting",
          podcast: "Podcast",
          lecture: "Lecture",
          video: "Video",
          other: "Other",
        },
        duration: "Total recording duration",
        speakers: "How many speakers are there?",
        speakerOptions: {
          one: "1",
          two: "2",
          threeFive: "3–5",
          sixPlus: "6+",
          unknown: "Not sure",
        },
        quality: "What is the audio quality like?",
        qualityOptions: {
          clear: "Clear",
          noise: "Some background noise",
          difficult: "Difficult",
          unknown: "Not sure",
        },
        transcriptType: "What type of transcript do you need?",
        transcriptOptions: {
          verbatim: "Verbatim",
          edited: "Edited / cleaned",
          unsure: "Not sure",
        },
        timestamps: "Do you need timestamps?",
      },

      voiceover: {
        prepared: "What do you need prepared?",
        options: {
          translation: "Script translation",
          adaptation: "Script localization / adaptation",
          preparation: "Voice-over script preparation",
          timing: "Timing / segmentation",
          pronunciation: "Pronunciation notes",
          terminology: "Terminology preparation",
          qa: "Voice-over QA",
          other: "Other",
        },
        production: "How will the voice be produced?",
        productionOptions: {
          human: "Human voice actor",
          ai: "AI-generated voice",
          undecided: "Not decided",
          other: "Other",
        },
      },
    },

    resources: {
      available: "What materials are available?",
      options: {
        sourceFiles: "Source files",
        references: "Reference materials",
        glossary: "Glossary / terminology",
        tm: "Translation memory",
        styleGuide: "Style guide",
        previous: "Previous translations",
        screenshots: "Screenshots / visual context",
        transcript: "Existing transcript",
        timecodes: "Timecodes",
        build: "Game build",
        other: "Other",
        none: "Nothing yet",
      },
      other: "Other resources",
      otherPlaceholder: "Please specify",
    },

    workflow: {
      handle: "What would you like me to handle?",
      handleOptions: {
        translation: "Translation",
        editing: "Editing",
        proofreading: "Proofreading",
        localization: "Localization",
        adaptation: "Adaptation",
        filePreparation: "File preparation",
        resourcePreparation: "Localization resource preparation",
        integration: "Integration",
        qa: "QA",
        testing: "Linguistic testing",
        delivery: "Final delivery / packaging",
        other: "Other",
      },

      remaining: "Who will handle the remaining parts of the workflow?",
      remainingOptions: {
        me: "Me",
        team: "Your team",
        vendor: "Another vendor",
        shared: "Shared",
        undecided: "Not decided",
      },

      deliverables: "What would you expect to receive as the final deliverables?",
      deliverablesPlaceholder:
        "Please describe the expected final files, materials or other deliverables.",

      notes: "Anything else about the workflow?",
      notesPlaceholder: "Optional",
    },

    collaboration: {
      type: "What type of collaboration are you looking for?",
      typeOptions: {
        oneTime: "One-time project",
        shortTerm: "Short-term engagement",
        recurring: "Recurring projects",
        longTerm: "Long-term collaboration",
        ongoing: "Ongoing localization support",
        agency: "Agency / subcontracting",
        vendor: "Vendor relationship",
        other: "Other",
      },

      workload: "What is the expected workload?",
      workloadOptions: {
        small: "Small / occasional",
        medium: "Medium",
        large: "Large",
        ongoing: "Ongoing",
        unknown: "Unknown",
      },

      start: "When would you like to start?",
      startOptions: {
        asap: "ASAP",
        week: "Within a week",
        month: "Within a month",
        flexible: "Flexible",
        specific: "Specific date",
      },

      startDate: "Preferred start date",

      deadline: "What is your expected deadline?",
      deadlineOptions: {
        specific: "Specific date",
        flexible: "Flexible",
        milestones: "Multiple milestones",
        ongoing: "Ongoing",
        unknown: "Unknown",
      },

      deadlineDate: "Expected deadline",

      milestones: "Are there any milestones or staged deliveries?",
      milestonesOptions: {
        yes: "Yes",
        no: "No",
        unsure: "Not sure",
      },

      milestoneDetails: "Please describe the expected milestones.",
      milestonePlaceholder: "Optional",

      capacity:
        "Please note that I am a one-person agency — which means that, despite the plural-sounding title, there is still only one human doing the work.",

      flexibility: "Is your timeline flexible if necessary?",
      flexibilityOptions: {
        yes: "Yes",
        somewhat: "Somewhat",
        no: "No",
      },
    },

    commercial: {
      pricing: "How would you prefer the project to be priced?",
      pricingOptions: {
        fixed: "Fixed project fee",
        hourly: "Hourly",
        word: "Per word",
        character: "Per character",
        minute: "Per minute of audio / video",
        subtitle: "Per subtitle",
        milestone: "Milestone-based",
        proposal: "Open to proposal",
        undecided: "Not decided",
      },

      budget: "Do you already have a budget or target rate?",
      budgetOptions: {
        yes: "Yes — I can provide it",
        quote: "I would like a quote",
        discussion: "Open to discussion",
        undecided: "Not decided",
      },

      budgetValue: "Budget / target rate",
      budgetPlaceholder: "Optional",

      payment: "What are your standard payment terms?",
      paymentOptions: {
        upfront: "Upfront",
        delivery: "Upon delivery",
        milestones: "Milestones",
        net7: "Net 7",
        net14: "Net 14",
        net30: "Net 30",
        other: "Other",
        agree: "To be agreed",
      },

      contract: "Are there any contractual requirements?",
      contractOptions: {
        agreement: "Service agreement",
        nda: "NDA",
        po: "Purchase order",
        onboarding: "Vendor onboarding",
        invoice: "Invoice requirements",
        tax: "Tax documentation",
        platform: "Platform-specific payment process",
        other: "Other",
        none: "None",
      },

      other: "Other commercial requirements",
      otherPlaceholder: "Please specify",
    },

    contact: {
      name: "Name",
      company: "Company / organization",
      email: "Email",
      website: "Website / project URL",
      contactMethod: "Preferred contact method",
      contactOptions: {
        email: "Email",
        other: "Other",
      },

      additional: "Anything else I should know?",
      additionalPlaceholder:
        "Tell me anything else that may be relevant to the project.",

      files: "Attach relevant files",
      filesHint:
        "You can attach a brief, sample files, screenshots, style guide or other relevant materials.",

      next: "What would you like to happen next?",
      nextOptions: {
        discuss: "Discuss the project",
        availability: "Check availability",
        estimate: "Receive an estimate",
        workflow: "Receive a proposed workflow",
        information: "Send additional information",
        exploring: "Just exploring options",
      },

      submit: "Submit project inquiry",

      confirmation:
        "Thank you for submitting the project form. I’ve received your information and will get back to you shortly to discuss the details of the project and our potential collaboration.",
    },
  },

  ua: {
    title: "Почати роботу над проектом",

    lead:
      "Будь ласка, заповніть форму нижче і розкажіть про свій проект. Я б дуже хотіла дізнатися більше і обговорити можливість співпраці.",

    capacityNote:
      "Зверніть увагу: я працюю як агенція, що складається з однієї людини, тому моя робоча спроможність відповідно обмежена можливостями однієї людини.",

    sections: {
      services: "Що вам потрібно?",
      project: "Деталі проекту",
      resources: "Контекст і матеріали",
      workflow: "Обсяг роботи та процес",
      collaboration: "Співпраця та строки",
      commercial: "Вартість, оплата та договір",
      contact: "Контакти та подальші кроки",
    },

    servicesIntro: "Оберіть усі послуги, які вам потрібні.",

    services: {
      translation: "Переклад",
      mtpe: "MTPE",
      editing: "Редагування",
      proofreading: "Коректура",
      technicalTranslation: "Технічний переклад",
      webLocalization: "Локалізація вебсайту / вебконтенту",
      softwareLocalization: "Локалізація програмного забезпечення / застосунку",
      uxUiLocalization: "Локалізація UX/UI",
      gameLocalization: "Локалізація гри",
      localizationQA: "Локалізаційне QA",
      linguisticTesting: "Лінгвістичне тестування",
      resourcePreparation: "Підготовка локалізаційних ресурсів / файлів",
      subtitling: "Субтитрування",
      transcription: "Транскрибування",
      transcriptionTranslation: "Транскрибування + переклад",
      voiceoverPreparation: "Підготовка тексту для озвучення",
      voiceoverLocalization: "Локалізація для voice-over",
      projectSupport: "Супровід локалізаційного процесу",
      other: "Інше",
    },

    project: {
      contentType: "Над чим ви працюєте?",
      contentTypeOptions: {
        general: "Загальний контент",
        technical: "Технічна документація",
        website: "Вебсайт / вебконтент",
        software: "Програмне забезпечення / застосунок",
        game: "Гра",
        uxui: "UX/UI",
        marketing: "Маркетинг / реклама",
        editorial: "Редакційні / видавничі матеріали",
        video: "Відео / аудіовізуальний контент",
        interview: "Інтерв'ю / записане мовлення",
        other: "Інше",
      },

      sourceLanguage: "Мова оригіналу",
      targetLanguages: "Цільова мова / мови",
      subject: "Тематика / галузь",

      audience: "Для кого призначений контент?",
      audienceOptions: {
        general: "Широка аудиторія",
        consumers: "Споживачі / клієнти",
        professionals: "Професіонали / фахівці",
        players: "Гравці",
        softwareUsers: "Користувачі програмного забезпечення",
        internal: "Внутрішня команда",
        other: "Інше",
        unsure: "Поки не визначено",
      },

      use: "Де буде використовуватися контент?",
      useOptions: {
        public: "Для широкої аудиторії",
        internal: "Внутрішнє використання",
        commercial: "Комерційне використання",
        product: "У складі продукту",
        marketing: "Маркетинг",
        educational: "Освітні матеріали",
        other: "Інше",
      },

      volume: "Орієнтовний обсяг",
      volumeOptions: {
        under1k: "До 1 000 слів",
        oneTo5k: "1 000–5 000 слів",
        fiveTo20k: "5 000–20 000 слів",
        twentyTo50k: "20 000–50 000 слів",
        over50k: "Понад 50 000 слів",
        unknown: "Поки не знаю",
        audioVideo: "Тривалість аудіо / відео",
        ongoing: "Постійний / регулярний обсяг",
      },

      formats: "Формат(и) файлів / платформа",
      finalized: "Чи остаточно готовий вихідний контент?",
      finalizedOptions: {
        yes: "Так",
        no: "Ні",
        partially: "Частково",
      },

      changing: "Чи буде вихідний контент змінюватися під час роботи?",
      changingOptions: {
        yes: "Так",
        no: "Ні",
        unknown: "Поки не знаю",
      },

      other: "Інші деталі",
      otherPlaceholder: "Будь ласка, уточніть",
    },

    game: {
      what: "Що саме потрібно локалізувати?",
      options: {
        ui: "UI",
        dialogue: "Діалоги",
        quests: "Квести",
        items: "Предмети / описи",
        tutorials: "Навчання / туторіали",
        achievements: "Досягнення",
        menus: "Меню",
        store: "Сторінка гри / маркетингові матеріали",
        ingame: "Ігровий текст",
        other: "Інше",
      },

      engine: "На якому рушії працює гра?",
      engineOptions: {
        unity: "Unity",
        unreal: "Unreal Engine",
        other: "Інше",
        unknown: "Поки не знаю",
      },

      setup: "Як зараз організовано локалізацію?",
      setupOptions: {
        unityLocalization: "Unity Localization",
        unreal: "Unreal localization",
        spreadsheet: "CSV / таблиця",
        jsonXml: "JSON / XML",
        platform: "CAT / локалізаційна платформа",
        custom: "Власна система",
        unknown: "Поки не знаю",
      },

      build: "Чи матиму я доступ до гри / білду?",
      buildOptions: {
        yes: "Так",
        no: "Ні",
        tbd: "Буде визначено пізніше",
      },

      testing: "Чи потрібне лінгвістичне тестування?",
      testingOptions: {
        yes: "Так",
        no: "Ні",
        unsure: "Не знаю",
      },
    },

    audiovisual: {
      subtitling: {
        what: "Що саме вам потрібно?",
        options: {
          translation: "Переклад",
          transcription: "Транскрибування",
          subtitleCreation: "Створення субтитрів",
          translationSubtitle: "Переклад + створення субтитрів",
          qa: "Перевірка / QA субтитрів",
        },
        duration: "Загальна тривалість відео",
        transcript: "Чи маєте ви готову транскрипцію?",
        timecodes: "Чи маєте ви готові таймкоди?",
        formats: "Формат субтитрів",
      },

      transcription: {
        recordingType: "Що це за запис?",
        recordingOptions: {
          interview: "Інтерв'ю",
          meeting: "Зустріч / нарада",
          podcast: "Подкаст",
          lecture: "Лекція",
          video: "Відео",
          other: "Інше",
        },
        duration: "Загальна тривалість запису",
        speakers: "Скільки людей говорить у записі?",
        speakerOptions: {
          one: "1",
          two: "2",
          threeFive: "3–5",
          sixPlus: "6+",
          unknown: "Поки не знаю",
        },
        quality: "Яка якість аудіо?",
        qualityOptions: {
          clear: "Чіткий запис",
          noise: "Є фоновий шум",
          difficult: "Складний для сприйняття",
          unknown: "Поки не знаю",
        },
        transcriptType: "Яка транскрипція вам потрібна?",
        transcriptOptions: {
          verbatim: "Дослівна",
          edited: "Відредагована / очищена",
          unsure: "Не знаю",
        },
        timestamps: "Чи потрібні таймкоди?",
      },

      voiceover: {
        prepared: "Що саме потрібно підготувати?",
        options: {
          translation: "Переклад сценарію",
          adaptation: "Локалізація / адаптація сценарію",
          preparation: "Підготовка тексту для voice-over",
          timing: "Таймінг / сегментація",
          pronunciation: "Примітки щодо вимови",
          terminology: "Підготовка термінології",
          qa: "QA voice-over",
          other: "Інше",
        },
        production: "Як буде створюватися озвучення?",
        productionOptions: {
          human: "Людський актор",
          ai: "Голос, створений ШІ",
          undecided: "Ще не визначено",
          other: "Інше",
        },
      },
    },

    resources: {
      available: "Які матеріали вже є?",
      options: {
        sourceFiles: "Вихідні файли",
        references: "Довідкові матеріали",
        glossary: "Глосарій / термінологія",
        tm: "Пам'ять перекладів",
        styleGuide: "Стайлгайд",
        previous: "Попередні переклади",
        screenshots: "Скріншоти / візуальний контекст",
        transcript: "Готова транскрипція",
        timecodes: "Таймкоди",
        build: "Білд гри",
        other: "Інше",
        none: "Поки нічого",
      },
      other: "Інші матеріали",
      otherPlaceholder: "Будь ласка, уточніть",
    },

    workflow: {
      handle: "Що саме ви хотіли б доручити мені?",
      handleOptions: {
        translation: "Переклад",
        editing: "Редагування",
        proofreading: "Коректура",
        localization: "Локалізація",
        adaptation: "Адаптація",
        filePreparation: "Підготовка файлів",
        resourcePreparation: "Підготовка локалізаційних ресурсів",
        integration: "Інтеграція",
        qa: "QA",
        testing: "Лінгвістичне тестування",
        delivery: "Фінальна підготовка / передача матеріалів",
        other: "Інше",
      },

      remaining: "Хто виконуватиме решту роботи?",
      remainingOptions: {
        me: "Я",
        team: "Ваша команда",
        vendor: "Інший підрядник",
        shared: "Спільна робота",
        undecided: "Поки не визначено",
      },

      deliverables: "Що ви очікуєте отримати як фінальний результат?",
      deliverablesPlaceholder:
        "Опишіть очікувані фінальні файли, матеріали або інші результати роботи.",

      notes: "Щось іще щодо процесу?",
      notesPlaceholder: "Необов'язково",
    },

    collaboration: {
      type: "Який формат співпраці вас цікавить?",
      typeOptions: {
        oneTime: "Разовий проект",
        shortTerm: "Короткострокова співпраця",
        recurring: "Регулярні проекти",
        longTerm: "Довгострокова співпраця",
        ongoing: "Постійний локалізаційний супровід",
        agency: "Робота з агенцією / субпідряд",
        vendor: "Взаємини з вендором",
        other: "Інше",
      },

      workload: "Який очікуваний обсяг роботи?",
      workloadOptions: {
        small: "Невеликий / періодичний",
        medium: "Середній",
        large: "Великий",
        ongoing: "Постійний",
        unknown: "Поки не знаю",
      },

      start: "Коли ви хотіли б розпочати?",
      startOptions: {
        asap: "Якнайшвидше",
        week: "Протягом тижня",
        month: "Протягом місяця",
        flexible: "Без конкретної дати",
        specific: "У конкретну дату",
      },

      startDate: "Бажана дата початку",

      deadline: "Який очікуваний дедлайн?",
      deadlineOptions: {
        specific: "Конкретна дата",
        flexible: "Гнучкий",
        milestones: "Кілька етапів",
        ongoing: "Постійна робота",
        unknown: "Поки не знаю",
      },

      deadlineDate: "Очікуваний дедлайн",

      milestones: "Чи передбачені етапи або поетапна передача результатів?",
      milestonesOptions: {
        yes: "Так",
        no: "Ні",
        unsure: "Поки не знаю",
      },

      milestoneDetails: "Опишіть, будь ласка, очікувані етапи.",
      milestonePlaceholder: "Необов'язково",

      capacity:
        "Зверніть увагу: я працюю як агенція, що складається з однієї людини — тобто усю роботу виконує одна людина.",

      flexibility: "Чи гнучкі строки, якщо це буде необхідно?",
      flexibilityOptions: {
        yes: "Так",
        somewhat: "Частково",
        no: "Ні",
      },
    },

    commercial: {
      pricing: "Як ви хотіли б розраховувати вартість роботи?",
      pricingOptions: {
        fixed: "Фіксована вартість проекту",
        hourly: "Погодинна оплата",
        word: "За слово",
        character: "За символ",
        minute: "За хвилину аудіо / відео",
        subtitle: "За субтитр",
        milestone: "За етапами",
        proposal: "Готові розглянути мою пропозицію",
        undecided: "Поки не визначено",
      },

      budget: "Чи маєте ви вже бюджет або бажану ставку?",
      budgetOptions: {
        yes: "Так — можу її вказати",
        quote: "Хочу отримати розрахунок",
        discussion: "Готовий(-а) обговорити",
        undecided: "Поки не визначено",
      },

      budgetValue: "Бюджет / бажана ставка",
      budgetPlaceholder: "Необов'язково",

      payment: "Які у вас стандартні умови оплати?",
      paymentOptions: {
        upfront: "Передоплата",
        delivery: "Після виконання",
        milestones: "За етапами",
        net7: "Термін оплати 7 днів",
        net14: "Термін оплати 14 днів",
        net30: "Термін оплати 30 днів",
        other: "Інше",
        agree: "Потрібно узгодити",
      },

      contract: "Чи є у вас особливі договірні вимоги?",
      contractOptions: {
        agreement: "Договір про надання послуг",
        nda: "Угода про нерозголошення",
        po: "Замовлення на придбання",
        onboarding: "Онбординг вендорів",
        invoice: "Вимоги до рахунків / інвойсів",
        tax: "Податкові документи",
        platform: "Оплата через певну платформу",
        other: "Інше",
        none: "Немає",
      },

      other: "Інші комерційні умови",
      otherPlaceholder: "Будь ласка, уточніть",
    },

    contact: {
      name: "Ім'я",
      company: "Компанія / організація",
      email: "Email",
      website: "Сайт / URL проекту",
      contactMethod: "Бажаний спосіб зв'язку",
      contactOptions: {
        email: "Email",
        other: "Інше",
      },

      additional: "Щось іще, що мені варто знати?",
      additionalPlaceholder:
        "Напишіть усе, що може бути важливим для розуміння проекту.",

      files: "Додати файли",
      filesHint:
        "Можна додати brief, приклади файлів, скріншоти, стайлгайд або інші релевантні матеріали.",

      next: "Що ви хотіли б отримати далі?",
      nextOptions: {
        discuss: "Обговорити проект",
        availability: "Перевірити мою доступність",
        estimate: "Отримати оцінку вартості",
        workflow: "Отримати запропонований процес роботи",
        information: "Надіслати додаткову інформацію",
        exploring: "Поки лише вивчаю можливості",
      },

      submit: "Надіслати запит",

      confirmation:
        "Дякую, що заповнили форму. Я отримала вашу інформацію і найближчим часом напишу вам, щоб обговорити деталі проекту та можливу співпрацю.",
    },
  },
};

