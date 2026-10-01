export const contentApp = {
  en: {
    hero: {
      pageTitle: "APP LOCALIZATION SAMPLE",
      title: "From source strings to a working localized app",
      lead:
        "A practical Android app localization workflow — from preparing source strings to building and testing a localized interface on a real device.",
      meta: ["Android", "Kotlin", "Jetpack Compose", "EN ⇄ UA"],
    },

    sample: {
      title: "The sample",
      text: [
        "This sample demonstrates a realistic mobile app localization workflow, using a small Android application created specifically for this purpose.",
        "RocketTranslator is a translation tool with a user interface that includes:",
      ],
      items: [
        "a main translation screen",
        "text input and output areas",
        "language selection",
        "interface controls and buttons",
        "settings and navigation",
        "supporting UI elements",
      ],
      closing:
        "The original interface was created in English. The first task was to identify user-facing text and prepare it for localization instead of leaving English strings directly inside the UI code.",
    },

    workflow: {
      title: "Localization workflow",

      steps: [
        {
          number: "01",
          title: "PREPARE",
          text: [
            "I started with a small Android application built with Kotlin and Jetpack Compose.",
            "The interface text was moved into Android string resources, separating localized content from application logic.",
          ],
          details: [
            ["Platform", "Android"],
            ["Technology", "Kotlin + Jetpack Compose"],
            ["Base language", "English"],
            ["Target language", "Ukrainian"],
          ],
          closing:
            "English became the base resource set, while a separate Ukrainian resource set was prepared using Android's standard localization structure.",
          image: "/images/samples/app-localization/string-resources.webp",
          imageAlt: "Android string resources prepared for localization",
        },

        {
          number: "02",
          title: "LOCALIZE",
          text: [
            "The interface was connected to Android string resources and translated into Ukrainian.",
            "The localization covered both the main translation screen and secondary interface elements:",
          ],
          items: [
            "settings and navigation",
            "buttons and interface labels",
            "input hints",
            "character counter",
            "language selection controls",
            "supporting interface text",
          ],
          closing:
            "The application language became a user-controlled setting. English and Українська can be selected independently of the English ⇄ Ukrainian translation pair used by the app itself.",
          image: "/images/samples/app-localization/localized-interface.webp",
          imageAlt: "RocketTranslator localized interface",
        },

        {
          number: "03",
          title: "BUILD & TEST",
          text: [
            "The application was built and installed on a physical Android device.",
            "Testing the rendered interface helped identify layout issues that were not apparent from the source strings alone.",
          ],
          items: [
            "checked interface elements in both languages",
            "tested text length and button proportions",
            "reviewed the header and taglines",
            "adjusted the layout to accommodate longer Ukrainian text",
          ],
          closing:
            "For example, the Ukrainian label «Очистити» required a layout adjustment to prevent awkward text wrapping. The Ukrainian tagline was also allowed to occupy two lines where necessary.",
          image: "/images/samples/app-localization/device-testing.webp",
          imageAlt: "RocketTranslator running on a physical Android device",
        },

        {
          number: "04",
          title: "VERIFY",
          text: [
            "After localization and layout adjustments, I tested the main application functions directly on the device.",
            "The functional checks covered:",
          ],
          items: [
            "English / Ukrainian interface language switching",
            "English ⇄ Ukrainian translation pair switching",
            "Swap language-pair control",
            "text input and character counter",
            "Clear and copy to clipboard",
            "Settings and back navigation",
            "Translate button states",
          ],
          closing:
            "The translation engine was intentionally left outside the scope of this sample because no external translation API was connected. The focus was on the localized interface and its functionality.",
          image: "/images/samples/app-localization/functional-testing.webp",
          imageAlt: "RocketTranslator interface during functional testing",
        },
      ],
    },

    result: {
      title: "Result",
      text:
        "The final result is a functioning Android application with a localized English/Ukrainian interface, structured Android string resources, language switching, and a mobile UI tested on a physical device.",
      images: [
        {
          label: "English interface",
          src: "/images/samples/app-localization/english-version.webp",
          alt: "English version of the RocketTranslator interface",
        },
        {
          label: "Ukrainian localized interface",
          src: "/images/samples/app-localization/ukrainian-version.webp",
          alt: "Ukrainian localized version of the RocketTranslator interface",
        },
      ],
    },

    tools: {
      title: "Tools & technologies",
      items: [
        ["Platform", "Android"],
        ["Programming language", "Kotlin"],
        ["UI framework", "Jetpack Compose"],
        ["Localization resources", "Android string resources"],
        ["Source language", "English"],
        ["Target language", "Ukrainian"],
        ["Testing", "Physical Android device"],
      ],
    },

    demonstrates: {
      title: "What this sample demonstrates",
      workflow:
        "Source application → localization-ready resources → translation → localized UI → device testing → linguistic and layout corrections → final build",
      text:
        "This sample demonstrates a complete app localization workflow, including structured resources, interface translation, language switching, functional verification, and the linguistic and layout adjustments required to make a localized mobile interface work in practice.",
    },
  },

  ua: {
    hero: {
      pageTitle: "СЕМПЛ ЛОКАЛІЗАЦІЇ ЗАСТОСУНКУ",
      title: "Від вихідних рядків до готового локалізованого застосунку",
      lead:
        "Практичний процес локалізації Android-застосунку — від підготовки вихідних рядків до збірки та тестування локалізованого інтерфейсу на реальному пристрої.",
      meta: ["Android", "Kotlin", "Jetpack Compose", "EN ⇄ UA"],
    },

    sample: {
      title: "Семпл",
      text: [
        "Цей семпл демонструє реальний робочий процес локалізації мобільного застосунку на прикладі невеликого Android-застосунку, створеного спеціально для цієї роботи.",
        "RocketTranslator — застосунок для перекладу тексту з такими елементами інтерфейсу:",
      ],
      items: [
        "головний екран перекладача",
        "поля введення та результату",
        "вибір мов",
        "кнопки та елементи керування",
        "налаштування та навігація",
        "допоміжні елементи інтерфейсу",
      ],
      closing:
        "Початковий інтерфейс був англомовним. Першим завданням стало визначення всіх користувацьких текстів і підготовка їх до локалізації замість використання англійських рядків безпосередньо в коді інтерфейсу.",
    },

    workflow: {
      title: "Процес локалізації",

      steps: [
        {
          number: "01",
          title: "ПІДГОТОВКА",
          text: [
            "Роботу розпочато з невеликого Android-застосунку, створеного за допомогою Kotlin та Jetpack Compose.",
            "Тексти інтерфейсу було винесено в Android string resources, що дозволило відокремити локалізований контент від логіки застосунку.",
          ],
          details: [
            ["Платформа", "Android"],
            ["Технології", "Kotlin + Jetpack Compose"],
            ["Базова мова", "англійська"],
            ["Мова перекладу", "українська"],
          ],
          closing:
            "Англійська стала базовою мовою ресурсів, а для української було створено окремий набір відповідно до стандартної структури локалізації Android.",
          image: "/images/samples/app-localization/string-resources.webp",
          imageAlt: "Ресурси Android string resources, підготовлені до локалізації",
        },

        {
          number: "02",
          title: "ЛОКАЛІЗАЦІЯ",
          text: [
            "Інтерфейс було підключено до Android string resources і перекладено українською мовою.",
            "Локалізація охопила головний екран перекладача та другорядні елементи інтерфейсу:",
          ],
          items: [
            "налаштування та навігацію",
            "кнопки й написи інтерфейсу",
            "підказки в полях введення",
            "лічильник символів",
            "елементи вибору мов",
            "допоміжні тексти інтерфейсу",
          ],
          closing:
            "Мова інтерфейсу стала налаштуванням, доступним користувачеві. English та Українська перемикаються незалежно від пари мов English ⇄ Ukrainian, з якою працює сам застосунок.",
          image: "/images/samples/app-localization/localized-interface.webp",
          imageAlt: "Локалізований інтерфейс RocketTranslator",
        },

        {
          number: "03",
          title: "ЗБІРКА ТА ТЕСТУВАННЯ",
          text: [
            "Застосунок було зібрано та встановлено на фізичний Android-пристрій.",
            "Тестування реального інтерфейсу допомогло виявити проблеми з компонуванням, які не були помітні під час роботи лише з вихідними рядками.",
          ],
          items: [
            "перевірка елементів інтерфейсу обома мовами",
            "тестування довжини текстів і пропорцій кнопок",
            "перевірка заголовка та tagline",
            "адаптація компонування до довших українських текстів",
          ],
          closing:
            "Наприклад, український напис «Очистити» потребував коригування компонування, щоб уникнути невдалого перенесення тексту. Українському tagline також було дозволено займати два рядки.",
          image: "/images/samples/app-localization/device-testing.webp",
          imageAlt: "RocketTranslator, запущений на фізичному Android-пристрої",
        },

        {
          number: "04",
          title: "ФУНКЦІОНАЛЬНА ПЕРЕВІРКА",
          text: [
            "Після локалізації та коригування інтерфейсу я перевірила основні функції застосунку безпосередньо на пристрої.",
            "Перевірка охопила:",
          ],
          items: [
            "перемикання мови інтерфейсу English / Українська",
            "перемикання пари мов English ⇄ Ukrainian",
            "функцію Swap",
            "введення тексту та лічильник символів",
            "очищення поля та копіювання в буфер обміну",
            "відкриття Settings і повернення назад",
            "стани кнопки Translate",
          ],
          closing:
            "Механізм перекладу навмисно залишився поза межами цього семплу, оскільки зовнішній API перекладу не підключався. Основна увага приділялася локалізації інтерфейсу та його функціональності.",
          image: "/images/samples/app-localization/functional-testing.webp",
          imageAlt: "Інтерфейс RocketTranslator під час функціонального тестування",
        },
      ],
    },

    result: {
      title: "Результат",
      text:
        "У результаті створено функціональний Android-застосунок із локалізованим англійським та українським інтерфейсом, структурованими Android string resources, перемиканням мови та перевіреним на фізичному пристрої UI.",
      images: [
        {
          label: "Англійський інтерфейс",
          src: "/images/samples/app-localization/english-version.webp",
          alt: "Англійська версія інтерфейсу RocketTranslator",
        },
        {
          label: "Українська локалізована версія",
          src: "/images/samples/app-localization/ukrainian-version.webp",
          alt: "Українська локалізована версія інтерфейсу RocketTranslator",
        },
      ],
    },

    tools: {
      title: "Інструменти та технології",
      items: [
        ["Платформа", "Android"],
        ["Мова програмування", "Kotlin"],
        ["UI-фреймворк", "Jetpack Compose"],
        ["Ресурси локалізації", "Android string resources"],
        ["Мова оригіналу", "English"],
        ["Мова перекладу", "Ukrainian"],
        ["Тестування", "Фізичний Android-пристрій"],
      ],
    },

    demonstrates: {
      title: "Що демонструє цей семпл",
      workflow:
        "Вихідний застосунок → підготовка ресурсів → переклад → локалізований інтерфейс → тестування на пристрої → мовні та UI-коригування → готова збірка",
      text:
        "Цей семпл демонструє повний процес локалізації мобільного застосунку: роботу зі структурованими ресурсами, переклад інтерфейсу, перемикання мов, функціональну перевірку та мовні й візуальні коригування, необхідні для повноцінної роботи локалізованого мобільного інтерфейсу.",
    },
  },
};
