export const contentWebLocalize = {
  en: {
    hero: {
      pageTitle: "WEB LOCALIZATION SAMPLE",
      title: "From source content to localized product",
      lead:
        "A practical web localization workflow using Tolgee — from English source strings to a Ukrainian localized version of a React website.",
      meta: ["Tolgee", "React + Vite", "JSON", "EN → UA"],
    },

    sample: {
      title: "The sample",
      text: [
        "This sample demonstrates the localization of a small React/Vite website created specifically to represent a realistic web localization task.",
        "The website contains typical product-facing content:",
      ],
      items: [
        "navigation",
        "headings and UI text",
        "explanatory content",
        "workflow descriptions",
        "service categories",
        "calls to action",
      ],
      closing:
        "The original interface was created in English. The localization resource was prepared as a structured JSON file and processed through Tolgee.",
    },

    workflow: {
      title: "Localization workflow",

      steps: [
        {
          number: "01",
          title: "PREPARE",
          text: [
            "The website's user-facing strings were organized in a structured en.json localization resource.",
            "The resource contains 28 translation keys, grouped by interface sections such as navigation, hero content, workflow, services, and CTA.",
          ],
          details: [
            ["Source format", "JSON"],
            ["Source language", "English"],
            ["Target language", "Ukrainian"],
          ],
          image: "/images/samples/web-localization/en-json.webp",
          imageAlt: "en.json localization resource in VS Code",
        },

        {
          number: "02",
          title: "TRANSLATE",
          text: [
            "The English resource was imported into Tolgee, where the Ukrainian localization was created and reviewed in a CAT-style translation interface.",
            "Translation decisions were made with attention to:",
          ],
          items: [
            "meaning and context",
            "natural Ukrainian UI wording",
            "terminology consistency",
            "CTA conventions",
            "appropriate length for interface elements",
          ],
          examplesTitle: "Examples",
          examples: [
            ["Get started", "Розпочати"],
            ["Explore the workflow", "Етапи виконання"],
            [
              "Localization without the chaos",
              "Локалізація без метушні",
            ],
          ],
          closing:
            "The translation interface also provided machine translation suggestions and contextual information, which were used as reference rather than as a replacement for human review.",
          image: "/images/samples/web-localization/tolgee.webp",
          imageAlt: "Tolgee translation interface",
        },

        {
          number: "03",
          title: "REVIEW",
          text: [
            "The completed Ukrainian strings were reviewed in Tolgee before export.",
            "The localization was then exported as a structured JSON resource:",
          ],
          file: "uk.json",
          closing:
            "The exported file was checked in VS Code to confirm that the localization structure and translated values were preserved.",
          image: "/images/samples/web-localization/uk-json.webp",
          imageAlt: "uk.json localized resource in VS Code",
        },

        {
          number: "04",
          title: "INTEGRATE",
          text: [
            "The translated resource was returned to the React application.",
            "The application was updated to use the localized resource instead of hard-coded English strings.",
          ],
          closing:
            "No language switcher was added: this sample demonstrates the localization handoff and integration workflow, rather than development of an i18n system.",
        },
      ],
    },

    result: {
      title: "Result",
      text:
        "The final Ukrainian resource was successfully integrated into the website and rendered as a localized version of the original English interface.",
      images: [
        {
          label: "English source",
          src: "/images/samples/web-localization/english-version.webp",
          alt: "English source version of the localized website",
        },
        {
          label: "Ukrainian localized version",
          src: "/images/samples/web-localization/ukrainian-version.webp",
          alt: "Ukrainian localized version of the website",
        },
      ],
    },

    tools: {
      title: "Tools & formats",
      items: [
        ["Platform", "Tolgee"],
        ["Technology", "React + Vite"],
        ["Source format", "JSON"],
        ["Localization resources", "en.json → uk.json"],
        ["Source language", "English"],
        ["Target language", "Ukrainian"],
      ],
    },

    demonstrates: {
      title: "What this sample demonstrates",
      workflow:
        "Source content → localization platform → translation → review → export → resource integration → localized product",
      text:
        "It demonstrates not only translation quality, but also familiarity with structured localization resources, CAT-style workflows, terminology and context, and the technical handoff between localization and product development.",
    },
  },

  ua: {
    hero: {
      pageTitle: "СЕМПЛ ЛОКАЛІЗАЦІЇ ВЕБСАЙТУ",
      title: "Від вихідного контенту до локалізованого продукту",
      lead:
        "Практичний приклад локалізації вебсайту з використанням Tolgee — від англомовних вихідних рядків до готової української версії React-сайту.",
      meta: ["Tolgee", "React + Vite", "JSON", "EN → UA"],
    },

    sample: {
      title: "Семпл",
      text: [
        "Цей семпл демонструє локалізацію невеликого вебсайту на React/Vite, створеного спеціально для відтворення реального завдання з веблокалізації.",
        "Сайт містить типові елементи користувацького інтерфейсу:",
      ],
      items: [
        "навігацію",
        "заголовки та UI-тексти",
        "інформаційний контент",
        "описи етапів workflow",
        "категорії послуг",
        "заклики до дії",
      ],
      closing:
        "Початковий інтерфейс був створений англійською мовою. Користувацькі рядки були винесені у структурований JSON-файл і опрацьовані в Tolgee.",
    },

    workflow: {
      title: "Процес локалізації",

      steps: [
        {
          number: "01",
          title: "ПІДГОТОВКА",
          text: [
            "Користувацькі рядки вебсайту були організовані у структурований ресурс локалізації en.json.",
            "Ресурс містить 28 ключів перекладу, згрупованих за розділами інтерфейсу: навігація, hero-блок, workflow, послуги та CTA.",
          ],
          details: [
            ["Формат", "JSON"],
            ["Мова оригіналу", "англійська"],
            ["Мова перекладу", "українська"],
          ],
          image: "/images/samples/web-localization/en-json.webp",
          imageAlt: "Ресурс локалізації en.json у VS Code",
        },

        {
          number: "02",
          title: "ПЕРЕКЛАД",
          text: [
            "Англомовний ресурс було імпортовано в Tolgee, де виконано українську локалізацію та її перевірку в CAT-інтерфейсі.",
            "Під час перекладу враховувалися:",
          ],
          items: [
            "значення та контекст",
            "природність українських UI-текстів",
            "послідовність термінології",
            "особливості формулювань CTA",
            "довжина тексту в інтерфейсі",
          ],
          examplesTitle: "Приклади",
          examples: [
            ["Get started", "Розпочати"],
            ["Explore the workflow", "Етапи виконання"],
            [
              "Localization without the chaos",
              "Локалізація без метушні",
            ],
          ],
          closing:
            "Tolgee також надавав варіанти машинного перекладу та контекстну інформацію. Вони використовувалися як допоміжний інструмент, а не як заміна перекладу та перевірки людиною.",
          image: "/images/samples/web-localization/tolgee.webp",
          imageAlt: "Інтерфейс перекладу в Tolgee",
        },

        {
          number: "03",
          title: "ПЕРЕВІРКА",
          text: [
            "Готові українські рядки були перевірені в Tolgee перед експортом.",
            "Після цього локалізацію було експортовано у структурований JSON-ресурс:",
          ],
          file: "uk.json",
          closing:
            "Експортований файл перевірено у VS Code, щоб переконатися, що структура локалізації та перекладені значення збереглися коректно.",
          image: "/images/samples/web-localization/uk-json.webp",
          imageAlt: "Локалізований ресурс uk.json у VS Code",
        },

        {
          number: "04",
          title: "ІНТЕГРАЦІЯ",
          text: [
            "Перекладений ресурс було повернуто до React-застосунку.",
            "Застосунок оновлено так, щоб він використовував локалізований ресурс замість захардкоджених англійських рядків.",
          ],
          closing:
            "Перемикач мов не додавався: цей семпл демонструє процес локалізації та передачі локалізованого ресурсу в продукт, а не розробку власної i18n-системи.",
        },
      ],
    },

    result: {
      title: "Результат",
      text:
        "Український ресурс успішно інтегровано у вебсайт, і він відображається як локалізована версія початкового англомовного інтерфейсу.",
      images: [
        {
          label: "Англійська версія",
          src: "/images/samples/web-localization/english-version.webp",
          alt: "Англійська версія локалізованого вебсайту",
        },
        {
          label: "Українська локалізована версія",
          src: "/images/samples/web-localization/ukrainian-version.webp",
          alt: "Українська локалізована версія вебсайту",
        },
      ],
    },

    tools: {
      title: "Інструменти та формати",
      items: [
        ["Платформа", "Tolgee"],
        ["Технологія", "React + Vite"],
        ["Формат", "JSON"],
        ["Ресурси локалізації", "en.json → uk.json"],
        ["Мова оригіналу", "English"],
        ["Мова перекладу", "Ukrainian"],
      ],
    },

    demonstrates: {
      title: "Що демонструє цей семпл",
      workflow:
        "Вихідний контент → платформа локалізації → переклад → перевірка → експорт → інтеграція ресурсу → локалізований продукт",
      text:
        "Семпл демонструє не лише якість перекладу, а й практичне розуміння структурованих localization resources, CAT-workflow, роботи з контекстом і термінологією та технічної взаємодії між локалізацією і розробкою.",
    },
  },
};
