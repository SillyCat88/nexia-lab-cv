export const content = {
  en: {
    pageTitle: "Localization",

    pageDescription:
      "Basic rules and principles concerning localization workflows in game, web and software development.",

    readMore: "Read more",

    fileFormatsTitle: "File Formats",

    items: [
      {
        id: "localization-workflow",
        title: "Localization Workflow: From Source Strings to LQA",
        lead:
          "A game localization workflow is a controlled production cycle in which language, context, technical structure, and player experience must remain aligned. The localizer does not simply translate isolated sentences: they transform source content into a target-language version that functions correctly inside the game and remains consistent across its systems.",

        sections: [
          {
            heading: "1. Preparation and Source Analysis",
            text:
              "The process begins with receiving source strings and establishing the localization environment. Files, formats, character limits, variables, tags, placeholders, context notes, and reference materials are reviewed before translation starts. This stage identifies technical constraints and ambiguities early, reducing costly corrections later. A terminology base, style guide, and translation memory may also be prepared or updated.",
          },
          {
            heading: "2. Translation and Linguistic Adaptation",
            text:
              "Strings are then translated according to context, purpose, tone, and the game's established terminology. UI labels require different decisions from dialogue, quest text, tutorials, or system messages. Variables and markup must remain intact, while target-language syntax and natural phrasing take priority over literal equivalence. Where the source is ambiguous, queries and contextual research help establish the intended meaning.",
          },
          {
            heading: "3. Review and Linguistic Quality Control",
            text:
              "Translated content undergoes review for accuracy, fluency, terminology, consistency, grammar, and style. Translation memory and glossary checks support consistency across large volumes of content, while a second linguistic pass can identify nuances or errors missed during initial translation. At this stage, unresolved queries should be clarified and corrections incorporated into the working files or CAT environment.",
          },
          {
            heading: "4. Integration and Functional Validation",
            text:
              "Approved translations are imported or integrated into the game's localization system. This is where linguistic decisions meet technical implementation: placeholders must populate correctly, strings must display without truncation, special characters must render properly, and localized content must appear in the intended screens and contexts. Testing therefore connects the translator's work with the game's actual interface and behavior.",
          },
          {
            heading: "5. LQA and Final Delivery",
            text:
              "Localization Quality Assurance evaluates the localized game in its running environment, checking linguistic, visual, and functional issues such as mistranslations, clipping, overlapping text, incorrect substitutions, missing strings, inconsistent terminology, and context-dependent errors. Issues are documented, reproduced, corrected, and retested until the localized build meets the required quality standard. The final deliverable is therefore not merely a translated file, but a validated language experience ready for players.",
          },
        ],

        card: {
          title: "Localization Workflow",
          description:
            "From source strings to a validated in-game language experience.",
          points: [
            {
              label: "Prepare",
              text: "analyse files, context, constraints, terminology, and references.",
            },
            {
              label: "Translate",
              text: "adapt meaning, tone, terminology, variables, and UI requirements.",
            },
            {
              label: "Review",
              text: "verify accuracy, consistency, fluency, grammar, and style.",
            },
            {
              label: "Integrate",
              text:
                "validate strings, placeholders, rendering, layout, and context in-game.",
            },
            {
              label: "LQA",
              text:
                "identify, document, correct, and retest linguistic and functional issues.",
            },
          ],
        },
      },

      {
        id: "translation-memory-glossary",
        title: "Translation Memory & Glossary: Consistency, Terminology & Style",
        lead:
          "Translation Memory (TM) and a glossary form the linguistic foundation of the localization process. They do more than accelerate translation: they establish consistency, ensuring that the same concepts, names, and recurring fragments receive predictable equivalents throughout the game.",

        sections: [
          {
            heading: "Translation Memory: Reusing Proven Solutions",
            text:
              "Translation Memory is a database of segments that stores source–target translation pairs from previous work. When an identical or similar string appears again, a CAT tool can suggest an existing translation. This reduces repetitive work and helps maintain consistency across menus, tutorials, dialogue, and system messages. However, TM should never be treated as an automatic authority: every suggested segment must be evaluated for relevance, context, and suitability to the current project.",
          },
          {
            heading: "Glossary: Controlling Terminology",
            text:
              "A glossary is a structured collection of approved terms, their target-language equivalents, definitions, and, when necessary, contextual or stylistic notes. In game localization, this is particularly important for mechanics, items, characters, locations, factions, and interface elements. If the same term is translated differently across different parts of a game without a justified reason, the player experiences linguistic inconsistency. A glossary establishes an agreed terminology rule before variation becomes a problem.",
          },
          {
            heading: "Consistency & Editorial Control",
            text:
              "TM and glossary work together but serve different purposes. TM preserves previous translation decisions, while the glossary defines which terms and names should be used. Together, they support linguistic consistency at the level of vocabulary, phrasing, and recurring segments. Consistency, however, does not mean mechanical repetition: a translation may legitimately change according to context, grammar, character, or string function. For this reason, terminology rules are complemented by a style guide defining tone of voice, formality, punctuation, capitalization, and other editorial principles.",
          },
          {
            heading: "Maintenance Throughout the Project",
            text:
              "Linguistic resources require continuous maintenance. New terms are added to the glossary after approval, outdated entries are revised, and incorrect TM segments are corrected so that unsuitable solutions do not propagate. Large projects may also require version control and clearly defined access rules. This creates a shared linguistic foundation that translators, reviewers, and LQA specialists can use consistently.",
          },
          {
            heading: "Conclusion",
            text:
              "TM, glossary, and style guide transform individual translation decisions into a controlled linguistic system. Their value lies not only in saving time, but in maintaining a coherent, predictable, and recognizable language experience throughout the entire localization lifecycle.",
          },
        ],

        card: {
          title: "Translation Memory & Glossary",
          description:
            "A linguistic system that ensures consistency, terminological accuracy, and stylistic coherence.",
          points: [
            {
              label: "TM",
              text: "stores and reuses proven translation solutions.",
            },
            {
              label: "Glossary",
              text: "defines approved terminology, names, and equivalents.",
            },
            {
              label: "Consistency",
              text: "maintains linguistic coherence across the game.",
            },
            {
              label: "Style Guide",
              text: "establishes tone, formality, and editorial rules.",
            },
            {
              label: "Maintenance",
              text:
                "keeps resources current and prevents outdated solutions from spreading.",
            },
          ],
        },
      },

      {
        id: "unity-localization",
        title: "Unity Localization: Tables, Keys, Smart Strings & Localized Assets",
        lead:
          "Unity Localization is a localization system designed to manage multilingual game content within the Unity environment. Instead of embedding translated text directly into scenes or scripts, localized content is stored as structured resources and retrieved according to the active locale. This separates game logic from language data and allows the same game systems to support multiple languages without duplicating implementation.",

        sections: [
          {
            heading: "Localization Tables: Structuring Language Data",
            text:
              "Localization Tables are the central data structures used to organize localized content. A String Table stores textual entries, while an Asset Table can manage localized assets such as images, audio, or other resources. Each entry is identified by a unique key rather than by its translated text. The key provides a stable reference that game systems can use regardless of the selected language.",
          },
          {
            heading: "Keys & Language Resources",
            text:
              "Keys create a layer of abstraction between the game's implementation and its language resources. A developer can reference `quest.completed` without hard-coding a particular language into the interface or gameplay logic. This makes strings easier to update, review, and manage as the project grows. Language resources are organized by locale, allowing the system to select the appropriate translation when the player changes language.",
          },
          {
            heading: "Smart Strings & Variables",
            text:
              "Static strings are not always sufficient. Games frequently need dynamic content such as character names, item quantities, scores, or contextual values. Smart Strings allow localized text to incorporate variables and conditional logic while preserving the linguistic rules of each language. This becomes especially important for languages with different word order, grammatical agreement, pluralization, or gender requirements.",
          },
          {
            heading: "Localization at Runtime",
            text:
              "At runtime, the localization system connects the active locale with the appropriate table entry or localized asset. When the locale changes, supported UI elements and resources can update accordingly. The same mechanism can control text, audio, images, and other localized content while keeping the underlying game logic unchanged. This architecture also makes testing more systematic: translators and developers can verify whether keys resolve correctly, variables behave as expected, missing translations are handled appropriately, and localized assets correspond to the correct locale.",
          },
          {
            heading: "Conclusion",
            text:
              "Unity Localization provides a structured layer between game functionality and multilingual content. Tables organize resources, keys provide stable references, Smart Strings handle dynamic content, and locales determine which resources are presented to the player. Understanding this structure is essential for a localizer working with Unity because linguistic decisions must ultimately function within the technical architecture of the game.",
          },
        ],

        card: {
          title: "Unity Localization",
          description:
            "A structured system connecting multilingual content with Unity’s game logic and runtime.",
          points: [
            {
              label: "Tables",
              text: "organize localized strings and assets by resource type.",
            },
            {
              label: "Keys",
              text: "provide stable references independent of language.",
            },
            {
              label: "Locales",
              text: "determine which language resources are active.",
            },
            {
              label: "Smart Strings",
              text:
                "combine localized text with dynamic variables and logic.",
            },
            {
              label: "Runtime",
              text:
                "resolves and displays the correct localized content in-game.",
            },
          ],
        },
      },

      {
        id: "narrative-localization",
        title: "Narrative Localization: Meaning, Voice & Player Experience",
        lead:
          "Narrative localization adapts a game's story and player-facing language so that it feels coherent, natural, and intentional in the target language. Unlike purely functional translation, it must preserve not only meaning but also character, context, tone, pacing, and cultural relevance. Every localized line should work as part of the game world rather than as an isolated sentence.",

        sections: [
          {
            heading: "Context Comes First",
            text:
              "Context determines how a string should be interpreted and translated. A short UI label, quest objective, character line, item description, and system message may require completely different linguistic decisions even when they contain similar vocabulary. The localizer therefore needs access to context such as speaker, scene, function, character relationships, surrounding dialogue, and gameplay situation. Without sufficient context, even grammatically correct translation can become inaccurate or unnatural.",
          },
          {
            heading: "Character Voice & Tone",
            text:
              "Characters should sound like themselves across the entire game. Age, personality, social position, emotional state, relationships, and narrative role influence vocabulary, sentence structure, formality, rhythm, and idiomatic choices. A sarcastic character, a military commander, and a child should not sound interchangeable simply because they describe the same event. Tone must also remain consistent at the level of the game as a whole.",
          },
          {
            heading: "Cultural Adaptation",
            text:
              "Localization may require cultural adaptation when a direct equivalent would be confusing, unnatural, or ineffective for the target audience. Idioms, jokes, references, names, units, conventions, and culturally specific expressions may need to be reformulated while preserving their narrative function. Adaptation should clarify or reproduce the intended experience without unnecessarily replacing the identity of the original work.",
          },
          {
            heading: "UI, System Messages & Constraints",
            text:
              "Narrative localization extends beyond dialogue. Quest objectives, tutorials, item descriptions, menus, notifications, achievements, and system messages must communicate clearly while fitting their functional purpose. Space is often limited, particularly in UI elements, subtitles, buttons, and mobile interfaces. Character limits, subtitle timing, line breaks, text expansion, and interface dimensions can therefore influence translation choices.",
          },
          {
            heading: "Consistency Across the Game",
            text:
              "Narrative terminology, character names, locations, factions, mechanics, and recurring phrases must remain consistent across thousands of strings. Translation Memory, glossaries, style guides, and contextual references support this consistency, but narrative judgment remains essential when a repeated expression carries different meanings in different situations.",
          },
          {
            heading: "Conclusion",
            text:
              "Narrative localization is the intersection of linguistic accuracy, storytelling, cultural awareness, and technical constraints. Its success is measured by whether players experience the localized game as coherent and authentic: characters retain their voices, narrative intent survives adaptation, information remains functional, and language feels native to the target audience.",
          },
        ],

        card: {
          title: "Narrative Localization",
          description:
            "Recreating story, character, tone, and context while preserving the player's intended experience.",
          points: [
            {
              label: "Context",
              text:
                "understand the scene, speaker, purpose, and gameplay situation.",
            },
            {
              label: "Character Voice",
              text:
                "preserve personality, relationships, rhythm, and individuality.",
            },
            {
              label: "Cultural Adaptation",
              text:
                "transfer references, humour, and meaning appropriately.",
            },
            {
              label: "Constraints",
              text:
                "respect UI space, subtitles, timing, and character limits.",
            },
            {
              label: "Consistency",
              text:
                "maintain terminology, narrative continuity, and tone across the game.",
            },
          ],
        },
      },

      {
        id: "file-formats",
        title: "File Formats: Working with Structured Localization Resources",
        lead:
          "Localization rarely happens in a simple document where a translator can edit every sentence freely. Game content is often stored in structured files that combine translatable strings with keys, metadata, variables, markup, and technical instructions. A localizer therefore needs to understand not only what a string means, but also how the file is structured and which elements must remain untouched.",

        sections: [
          {
            heading: "Structured Formats: JSON, XML & YAML",
            text:
              "JSON, XML, and YAML are commonly used to store configuration data, dialogue, UI strings, metadata, and other game resources. Their syntax differs, but the principle is similar: translatable values exist alongside structural elements such as keys, tags, attributes, or nested objects. The task is therefore not simply to translate visible text, but to identify which parts are linguistic content and which parts belong to the file's technical structure.",
          },
          {
            heading: "CSV & Tabular Resources",
            text:
              "CSV and similar tabular formats can contain large volumes of localization strings organized into columns such as keys, source text, translations, context, or character information. Their apparent simplicity can be misleading: separators, quotation marks, line breaks, column alignment, and encoding must be preserved correctly. A localizer should verify how the file is expected to be imported or exported before making structural changes.",
          },
          {
            heading: "PO & Localization-Specific Formats",
            text:
              "PO files are widely associated with gettext-based localization workflows. They typically contain source strings, translated strings, identifiers, and contextual information. Their structure allows translation tools to distinguish the linguistic content from metadata and technical markers. Other localization-specific formats may follow different conventions, but the same principle applies: understand the format before editing it and use the project's established workflow rather than treating the resource as ordinary prose.",
          },
          {
            heading: "Markdown & Markup",
            text:
              "Markdown and other markup-based content require particular care because formatting syntax can coexist directly with translatable text. Elements such as links, emphasis markers, placeholders, variables, or inline code may need to remain unchanged while the surrounding language is adapted. The translator must preserve functional markup while ensuring that the resulting target-language text remains natural and readable.",
          },
          {
            heading: "What Must Not Break",
            text:
              "Across formats, several elements require consistent protection: keys, placeholders, variables, tags, escape characters, delimiters, file encoding, and structural hierarchy. Before delivery, the file should be validated to ensure that it remains syntactically correct and can still be imported by the target system.",
          },
          {
            heading: "Conclusion",
            text:
              "A professional localizer treats localization files as both language resources and technical assets. The goal is to transform the translatable content while preserving the structure that allows the game or localization platform to interpret it correctly. Format awareness reduces integration errors, protects the development pipeline, and allows linguistic work to move safely from source files into the final product.",
          },
        ],

        card: {
          title: "File Formats",
          description:
            "Working with localization resources without compromising their technical integrity.",
          points: [
            {
              label: "Identify",
              text:
                "distinguish translatable content from structure and metadata.",
            },
            {
              label: "Preserve",
              text:
                "protect keys, tags, variables, placeholders, and hierarchy.",
            },
            {
              label: "Adapt",
              text:
                "translate strings while respecting format-specific constraints.",
            },
            {
              label: "Validate",
              text:
                "check encoding, syntax, delimiters, and import compatibility.",
            },
            {
              label: "Deliver",
              text:
                "provide structurally intact resources ready for integration.",
            },
          ],
        },
      },
    ],

    fileFormats: [
      {
        id: "json",
        format: "JSON",
        title: "JSON",

        description:
          "Structured data with keys, nested objects, translatable values, and variables.",

        example:
          `"quest.completed": {\n  "title": "Quest Complete",\n  "message": "You found {itemName}!"\n}`,

        points: [
          "Keys are not translated.",
          "Values may be translatable.",
          "Variables such as {itemName} must remain unchanged.",
          "JSON syntax, quotes, commas, and brackets must remain intact.",
        ],
      },

      {
        id: "csv",
        format: "CSV",
        title: "CSV",

        description:
          "Tabular localization data organized into columns for keys, context, and languages.",

        example:
          `key,context,en,uk\nmenu.play,Main menu button,Play,Грати\nmenu.quit,Main menu button,Quit,Вийти`,

        points: [
          "The header defines the columns.",
          "key identifies the string.",
          "context helps determine how the string is used.",
          "Quoting, delimiters, line breaks, and encoding matter.",
        ],
      },

      {
        id: "xml",
        format: "XML",
        title: "XML",

        description:
          "Hierarchical resources where elements, attributes, and tags form part of the file structure.",

        example:
          `<quest id="quest_001">\n  <title>Find the Lost Sword</title>\n  <objective>Return it to the blacksmith.</objective>\n</quest>`,

        points: [
          "Element names are structural.",
          "Attributes may contain technical data.",
          "Text inside elements may be translatable.",
          "Tags and hierarchy must remain intact.",
        ],
      },

      {
        id: "po",
        format: "PO",
        title: "PO",

        description:
          "A gettext-based localization format that separates source strings, translations, identifiers, and context.",

        example:
          `msgid "Quest Complete"\nmsgstr "Квест завершено"`,

        points: [
          "msgid contains the source string.",
          "msgstr contains the translation.",
          "Identifiers and context may accompany the string.",
          "Metadata and technical markers must remain valid.",
        ],
      },

      {
        id: "yaml",
        format: "YAML",
        title: "YAML",

        description:
          "Human-readable structured data where indentation defines hierarchy.",

        example:
          `quest:\n  id: quest_001\n  title: "Find the Lost Sword"\n  objective: "Return it to the blacksmith."`,

        points: [
          "Keys define the structure.",
          "Values may be translatable or technical.",
          "Indentation determines hierarchy.",
          "Changing indentation can break the file.",
        ],
      },
    ],
  },

  ua: {
    pageTitle: "Локалізація",

    pageDescription:
      "Основні правила і принципи роботи з перекладами у проектах локалізації ігор, вебсайтів, ПЗ.",

    readMore: "Детальніше",

    fileFormatsTitle: "Формати файлів",

    items: [
      {
        id: "localization-workflow",
        title: "Процес локалізації: від вихідних рядків до LQA",
        lead:
          "Процес локалізації гри — це керований виробничий цикл, у якому мова, контекст, технічна структура та досвід гравця мають залишатися узгодженими. Локалізатор не просто перекладає окремі речення: він перетворює вихідний контент на версію цільової мови, яка коректно працює всередині гри та зберігає послідовність у всіх її системах.",

        sections: [
          {
            heading: "1. Підготовка та аналіз вихідних матеріалів",
            text:
              "Процес починається з отримання вихідних рядків і налаштування локалізаційного середовища. Перед перекладом перевіряються файли, їхні формати, обмеження кількості символів, змінні, теги, плейсхолдери, контекстні примітки та довідкові матеріали. На цьому етапі визначаються технічні обмеження й неоднозначності, щоб уникнути дорогих виправлень на наступних стадіях. Також може бути підготовлена або оновлена пам'ять перекладів, термінологічна база, стилістичний довідник.",
          },
          {
            heading: "2. Переклад та лінгвістична адаптація",
            text:
              "Далі рядки перекладаються з урахуванням контексту, призначення, тону та усталеної термінології гри. UI-елементи потребують інших рішень, ніж діалоги, квести, туторіали чи системні повідомлення. Змінні та розмітка мають залишатися технічно коректними, тоді як синтаксис і природність цільової мови мають перевагу над буквальним відтворенням. Якщо вихідний текст неоднозначний, виконуються запити та контекстне дослідження.",
          },
          {
            heading: "3. Перегляд та лінгвістичний контроль якості",
            text:
              "Переклад проходить перевірку на точність, природність, термінологічну та стилістичну послідовність, граматику й відповідність комунікативного тону. Пам'ять перекладів і глосарій допомагають підтримувати послідовність у великих масивах контенту, а додатковий лінгвістичний перегляд дозволяє виявити нюанси або помилки, пропущені під час первинного перекладу. Невирішені запити мають бути уточнені, а погоджені виправлення — внесені до робочих файлів або CAT-середовища.",
          },
          {
            heading: "4. Інтеграція та функціональна перевірка",
            text:
              "Після затвердження переклади імпортуються або інтегруються в локалізаційну систему гри. Саме тут лінгвістичні рішення зустрічаються з технічною реалізацією: плейсхолдери мають коректно підставлятися, рядки — відображатися без обрізання, спеціальні символи — правильно рендеритися, а локалізований контент — з'являтися у відповідних екранах і контекстах. Тестування таким чином поєднує роботу перекладача з реальною поведінкою гри.",
          },
          {
            heading: "5. Контроль якості локалізації та фіналізація виконання",
            text:
              "Контроль якості локалізації оцінює локалізовану гру безпосередньо у середовищі виконання. Перевірка виявляє лінгвістичні, візуальні чи функціональні проблеми: неправильні переклади, обрізаний або накладений текст, некоректні підстановки, пропущені рядки, непослідовну термінологію та контекстні помилки. Проблеми документуються, відтворюються, виправляються й повторно тестуються, доки локалізована версія не відповідатиме встановленим вимогам якості. Фінальним результатом є не просто перекладений файл, а перевірений мовний досвід, готовий до гравців.",
          },
        ],

        card: {
          title: "Процес локалізації",
          description:
            "Від вихідних рядків до перевіреного мовного досвіду в грі.",
          points: [
            {
              label: "Підготовка",
              text:
                "проаналізувати файли, контекст, обмеження, термінологію та довідкові матеріали.",
            },
            {
              label: "Переклад",
              text:
                "адаптувати зміст, емоційну подачу, термінологію, змінні і вимоги UI.",
            },
            {
              label: "Перевірка",
              text:
                "проконтролювати точність, послідовність, плавність, граматику та стиль.",
            },
            {
              label: "Інтеграція",
              text:
                "перевірити рядки, плейсхолдери, рендеринг, побудову сцени і контекст в ігровому середовищі.",
            },
            {
              label: "Виконання LQA",
              text:
                "виявити, задокументувати, виправити та повторно протестувати лінгвістичні й функціональні проблеми.",
            },
          ],
        },
      },

      {
        id: "translation-memory-glossary",
        title:
          "Пам'ять перекладів і глосарій: послідовність, термінологія та єдиний стиль",
        lead:
          "Пам'ять перекладів (ПП) і глосарій утворюють лінгвістичну основу локалізаційного процесу. Вони допомагають не лише прискорювати переклад, а й забезпечувати послідовність: однакові поняття, назви та повторювані фрагменти мають отримувати передбачувані відповідники в усій грі.",

        sections: [
          {
            heading: "Пам'ять перекладів: повторне використання перевірених рішень",
            text:
              "Пам'ять перекладів — це база сегментів, у якій зберігаються пари «оригінал → переклад» з попередніх перекладів. Коли подібний або ідентичний рядок зустрічається знову, CAT-tool може запропонувати вже перекладений варіант. Це зменшує повторну роботу й допомагає зберігати послідовність між меню, туторіалами, діалогами та системними повідомленнями. Водночас ПП не повинна сприйматися як автоматична істина: запропонований сегмент перевіряється на актуальність, контекст і відповідність поточному проекту.",
          },
          {
            heading: "Глосарій: контроль термінології",
            text:
              "Глосарій — це структурований набір затверджених термінів, їхніх відповідників, визначень і, за потреби, контекстних або стилістичних приміток. У локалізації ігор це особливо важливо для назв механік, предметів, персонажів, локацій, фракцій та елементів інтерфейсу. Якщо один термін перекладається по-різному в різних частинах гри без обґрунтованої причини, гравець отримує непослідовний досвід. Глосарій встановлює узгоджене правило ще до того, як варіативність починає створювати проблему.",
          },
          {
            heading: "Послідовність та редакторський контроль",
            text:
              "ПП і глосарії працюють разом, але виконують різні функції. ПП зберігає попередні перекладацькі рішення, тоді як глосарій визначає, які терміни й назви мають використовуватися. Разом вони підтримують лінгвістичну послідовність на рівні лексики, фразеології та повторюваних сегментів. Водночас послідовність не означає механічну однаковість: рішення можуть змінюватися залежно від контексту, граматики, персанажа чи функції рядка. Саме тому термінологічні правила доповнюються стилістичним довідником, який визначає тон комунікації, рівень формальності, пунктуацію, написання слів з великої літери та інші редакційні принципи.",
          },
          {
            heading: "Підтримка протягом усього проекту",
            text:
              "Лінгвістичні ресурси потребують постійної підтримки та обслуговування. Нові терміни додаються до глосарія після узгодження, застарілі записи оновлюються, а помилкові ПП-сегменти виправляються, щоб неправильне рішення не поширювалося далі. Для великих проектів важливо також контролювати версії ресурсів і правила доступу до них. Так створюється єдина мовна база, якою можуть користуватися перекладачі, рев'юери та LQA.",
          },
          {
            heading: "Висновок",
            text:
              "ПП, глосарій та стилістичний довідник перетворюють окремі перекладацькі рішення на керовану мовну систему. Їхня цінність полягає не лише в економії часу, а і в тому, що вони підтримують цілісний, передбачуваний і впізнаваний мовний досвід протягом усього життєвого циклу локалізації.",
          },
        ],

        card: {
          title: "Пам'ять перекладів і глосарій",
          description:
            "Лінгвістична система, що забезпечує послідовність, термінологічну точність і цілісність стилю.",
          points: [
            {
              label: "ПП",
              text:
                "зберігає та повторно використовує перевірені перекладацькі рішення.",
            },
            {
              label: "Глосарій",
              text:
                "фіксує затверджену термінологію, назви та відповідники.",
            },
            {
              label: "Послідовність",
              text:
                "підтримує послідовність мови в усіх частинах гри.",
            },
            {
              label: "Стилістичний довідник",
              text:
                "визначає тон, формальність та редакційні правила.",
            },
            {
              label: "Підтримка і обслуговування",
              text:
                "оновлює ресурси й запобігає поширенню застарілих рішень.",
            },
          ],
        },
      },

      {
        id: "unity-localization",
        title:
          "Локалізація з Unity: таблиці, ключі, динамічні рядки і локалізовані ресурси",
        lead:
          "Локалізація з Unity — це система керування багатомовним контентом у середовищі Unity. Замість того щоб вбудовувати перекладений текст безпосередньо у сцени або скрипти, локалізований контент зберігається як структуровані ресурси й отримується відповідно до активної локалі. Це відокремлює ігрову логіку від мовних даних і дозволяє одній і тій самій системі підтримувати кілька мов без дублювання реалізації.",

        sections: [
          {
            heading: "Таблиці локалізації: структура мовних даних",
            text:
              "Таблиці локалізації — центральні структури, у яких організовується локалізований контент. String Table зберігає текстові записи, тоді як Asset Table може керувати локалізованими ресурсами: зображеннями, аудіо та іншими ассетами. Кожен запис ідентифікується унікальним ключем, а не перекладеним текстом. Ключ створює стабільне посилання, яким ігрова система може користуватися незалежно від обраної мови.",
          },
          {
            heading: "Ключі і мовні ресурси",
            text:
              "Ключі створюють рівень абстракції між реалізацією гри та мовними ресурсами. Розробник може звертатися до `quest.completed`, не прив'язуючи інтерфейс або ігрову логіку до конкретної мови. Це спрощує оновлення, перегляд і керування рядками в міру розвитку проекту. Мовні ресурси організовуються за допомогою локалей, завдяки чому система може вибрати відповідний переклад після зміни мови.",
          },
          {
            heading: "Динамічні рядки і змінні",
            text:
              "Статичних рядків не завжди достатньо. У грі часто потрібен динамічний контент: імена персонажів, кількість предметів, очки або інші значення середовища виконання. Динамічні рядки дозволяють поєднувати локалізований текст зі змінними та умовною логікою, зберігаючи при цьому правила цільової мови. Це особливо важливо для мов із відмінним порядком слів, граматичним узгодженням, правилами множини або роду. Тому локалізація має враховувати поведінку змінних у цільовій мові, а не просто механічно вставляти їх у текст.",
          },
          {
            heading: "Локалізація у середовищі виконання",
            text:
              "Під час виконання система локалізації пов'язує активну локаль з відповідним записом таблиці або локалізованим ресурсом. Після зміни локалі підтримувані UI-елементи та ресурси можуть оновлюватися відповідно. Та сама система може керувати текстом, аудіо, зображеннями та іншими локалізованими ресурсами, залишаючи основну ігрову логіку незмінною. Така архітектура також робить тестування системнішим: можна перевірити, чи коректно знаходяться ключі, чи правильно працюють змінні, чи обробляються відсутні переклади та чи відповідають локалізовані ассети потрібній локалі.",
          },
          {
            heading: "Висновок",
            text:
              "Локалізація з Unity створює структурований рівень між функціональністю гри та багатомовним контентом. Таблиці організовують ресурси, ключі забезпечують стабільні посилання, динамічні рядки працюють із динамічним контентом, а локалі визначають, які ресурси відображаються гравцеві. Розуміння цієї структури важливе для локалізатора, який працює з Unity, оскільки лінгвістичні рішення зрештою мають коректно функціонувати всередині технічної архітектури гри.",
          },
        ],

        card: {
          title: "Локалізація з Unity",
          description:
            "Структурована система, що поєднує багатомовний контент із логікою гри та середовищем виконання.",
          points: [
            {
              label: "Таблиці",
              text:
                "організовують локалізовані strings і assets за типами ресурсів.",
            },
            {
              label: "Ключі",
              text:
                "створюють стабільні посилання незалежно від мови.",
            },
            {
              label: "Локалі",
              text:
                "визначають активні мовні ресурси.",
            },
            {
              label: "Динамічні рядки",
              text:
                "поєднують локалізований текст із динамічними змінними та логікою.",
            },
            {
              label: "Середовище виконання",
              text:
                "знаходить і відображає потрібний локалізований контент у грі.",
            },
          ],
        },
      },

      {
        id: "narrative-localization",
        title:
          "Локалізація наративу: зміст, голос персонажа та досвід гравця",
        lead:
          "Локалізація наративу адаптує сюжетний і орієнтований на гравця контент гри так, щоб він залишався цілісним, природним і переконливим цільовою мовою. На відміну від суто функціонального перекладу, вона має зберігати не лише значення, а й характер, контекст, тон комунікації, темп оповіді і культурну релевантність. Кожен локалізований рядок має працювати як частина ігрового світу, а не як ізольоване речення.",

        sections: [
          {
            heading: "Контекст — передусім",
            text:
              "Контекст визначає, як саме потрібно зрозуміти й перекласти рядок. Короткий підпис у інтерфейсі, ціль квесту, репліка персонажа, опис предмета чи системне повідомлення можуть вимагати абсолютно різних мовних рішень, навіть якщо використовують схожу лексику. Тому локалізатору потрібен контекст: хто говорить, у якій сцені, з якою метою, у яких стосунках перебувають персонажі та що відбувається під час гри. Без достатнього контексту навіть граматично правильний переклад може виявитися неточним або неприродним.",
          },
          {
            heading: "Голос і тон персонажа",
            text:
              "Персонажі мають бути схожі на себе протягом усієї гри. Вік, особистість, соціальний статус, емоційний стан, стосунки та роль у сюжеті впливають на лексику, структуру речень, рівень формальності, ритм і вибір сталих виразів. Саркастичний персонаж, військовий командир і дитина не повинні звучати однаково лише тому, що описують одну й ту саму подію. Тон комунікації також має залишатися послідовним впродовж гри.",
          },
          {
            heading: "Культурна адаптація",
            text:
              "Локалізація може потребувати культурної адаптації, якщо прямий відповідник буде незрозумілим, неприродним або втратить потрібний ефект для цільової аудиторії. Ідіоми, жарти, культурні посилання, імена, одиниці вимірювання, мовні норми та специфічні вирази можуть потребувати переформулювання зі збереженням їхньої сюжетної функції. Адаптація має відтворювати задуманий досвід, не стираючи без необхідності культурну ідентичність оригінального твору.",
          },
          {
            heading: "Інтерфейс користувача, системні повідомлення та обмеження",
            text:
              "Наративна локалізація виходить далеко за межі діалогів. Цілі квестів, навчальні підказки, описи предметів, меню, сповіщення, досягнення та системні повідомлення мають бути зрозумілими й відповідати своїй функції. При цьому простір часто обмежений, особливо в елементах інтерфейсу, субтитрах, кнопках і мобільних інтерфейсах. Обмеження кількості символів, тривалість відображення субтитрів, перенесення рядків, розширення тексту та розміри інтерфейсу безпосередньо впливають на перекладацькі рішення.",
          },
          {
            heading: "Послідовність у всій грі",
            text:
              "Термінологія, імена персонажів, локації, фракції, ігрові механіки та повторювані фрази мають залишатися послідовними в тисячах рядків. Пам'ять перекладів, глосарії, стильові довідники й контекстні матеріали допомагають підтримувати цю послідовність, але наративне судження залишається необхідним, коли одна й та сама фраза набуває різного значення залежно від ситуації.",
          },
          {
            heading: "Висновок",
            text:
              "Локалізація наративу — вимагає лінгвістичної точності, навичок сторітелінгу, культурної компетентності та усвідомлення технічних обмежень. Її результатом має бути локалізована гра, яку гравець сприймає як цілісну й автентичну: персонажі зберігають свої голоси, задум оригіналу переживає адаптацію, інформація залишається функціональною, а мова звучить природно для цільової аудиторії.",
          },
        ],

        card: {
          title: "Локалізація наративу",
          description:
            "Відтворення сюжету, голосу персонажа, тону та контексту зі збереженням задуму й досвіду гравця.",
          points: [
            {
              label: "Контекст",
              text:
                "зрозуміти сцену, мовця, мету та ігрову ситуацію.",
            },
            {
              label: "Голос персонажа",
              text:
                "зберегти особистість, стосунки, ритм та індивідуальність.",
            },
            {
              label: "Культурна адаптація",
              text:
                "коректно адаптувати посилання, гумор і культурний зміст.",
            },
            {
              label: "Обмеження",
              text:
                "врахувати простір інтерфейсу, субтитри, час відображення та кількість символів.",
            },
            {
              label: "Послідовність",
              text:
                "підтримувати термінологію, наративну цілісність і тон протягом усієї гри.",
            },
          ],
        },
      },

      {
        id: "file-formats",
        title:
          "Формати файлів: робота зі структурованими локалізаційними ресурсами",
        lead:
          "Локалізація рідко відбувається у звичайному документі, де перекладач може вільно редагувати кожне речення. Ігровий контент часто зберігається у структурованих файлах, які поєднують рядки перекладу з ключами, метаданими, змінними, розміткою та технічними інструкціями. Тому локалізатор має розуміти не лише значення рядка, а й структуру файлу та елементи, які необхідно залишити недоторканими.",

        sections: [
          {
            heading: "Структуровані формати: JSON, XML та YAML",
            text:
              "JSON, XML і YAML часто використовуються для зберігання конфігураційних даних, діалогів, рядків інтерфейсу, метаданих та інших ігрових ресурсів. Їхній синтаксис відрізняється, але принцип подібний: текст призначений для перекладу існує поруч зі структурними елементами — ключами, тегами, атрибутами або вкладеними об'єктами. Тому, завдання полягає не лише в перекладі видимого тексту, а й у визначенні, які частини є мовним контентом, а які належать до технічної структури файлу.",
          },
          {
            heading: "CSV та табличні ресурси",
            text:
              "CSV та подібні табличні формати можуть містити великі масиви локалізаційних рядків, організованих у колонки, такі як ключі, вихідний текст, переклади, контекст або інформація про персонажа. Їхня простота може бути оманливою: необхідно правильно зберігати роздільники, лапки, переноси рядків, вирівнювання колонок та кодування. Перед внесенням структурних змін локалізатор має перевірити очікування стосовно імпорту або експорту файлу.",
          },
          {
            heading: "PO та спеціалізовані локалізаційні формати",
            text:
              "PO-файли широко використовуються у процесах локалізації котрі працюють з gettext. Вони зазвичай містять оригінальні рядки, рядки для перекладу, ідентифікатори та інформацію про контест. Їхня структура дозволяє інструментам локалізації відокремлювати мовний контент від метаданих та технічних маркерів. Інші спеціалізовані формати можуть використовувати власні правила, але принцип залишається тим самим: спочатку потрібно зрозуміти формат, а потім працювати з ним відповідно до встановленого робочого процесу проекту, а не сприймати ресурс як звичайний текстовий документ.",
          },
          {
            heading: "Markdown та markup",
            text:
              "Markdown та інші формати на основі розмітки потребують особливої уваги, оскільки елементи форматування можуть безпосередньо знаходитися всередині тексту, що перекладається. Посилання, маркери виділення, плейсхолдери, змінні або інлайн-код можуть потребувати збереження, тоді як навколишній текст адаптується. Локалізатор має зберегти функціональність розмітки і водночас зробити текст цільової мови природним та читабельним.",
          },
          {
            heading: "Що не можна зламати",
            text:
              "У різних форматах особливого захисту потребують ключі, плейсхолдери, змінні, теги, символи екранування, роздільники, кодування файлу та структурна ієрархія. Перед передачею файл необхідно перевірити, щоб він залишався синтаксично коректним і міг бути безпечно імпортований у цільову систему.",
          },
          {
            heading: "Висновок",
            text:
              "Професійний локалізатор сприймає файли локалізації одночасно як мовні ресурси й технічні компоненти. Мета — адаптувати перекладний контент, зберігши структуру, яка дозволяє грі або платформі локалізації правильно його інтерпретувати. Розуміння форматів зменшує помилки інтеграції даних, захищає пайплайн розробки і гарантує безпечний шлях від вихідних ресурсів до фінального продукту.",
          },
        ],

        card: {
          title: "Формати файлів",
          description:
            "Робота з локалізаційними ресурсами без порушення їхньої технічної цілісності.",
          points: [
            {
              label: "Ідентифікація",
              text:
                "відокремити перекладний контент від структури та метаданих.",
            },
            {
              label: "Захист",
              text:
                "захистити ключі, теги, змінні, плейсхолдери та ієрархію.",
            },
            {
              label: "Адаптація",
              text:
                "перекласти рядки з урахуванням обмежень конкретного формату.",
            },
            {
              label: "Перевірка",
              text:
                "перевірити кодування, синтаксис, роздільники та сумісніть імпорту.",
            },
            {
              label: "Виконання",
              text:
                "передати структурно коректні ресурси, готові до інтеграції.",
            },
          ],
        },
      },
    ],

    fileFormats: [
      {
        id: "json",
        format: "JSON",
        title: "JSON",

        description:
          "Структуровані дані з ключами, вкладеними об'єктами, значеннями, що перекладаються та змінними.",

        example:
          `"quest.completed": {\n  "title": "Quest Complete",\n  "message": "You found {itemName}!"\n}`,

        points: [
          "Ключі не перекладаються.",
          "Значення можуть бути призначеними для перекладу.",
          "Змінні на кшталт {itemName} мають залишатися незмінними.",
          "Синтаксис JSON, лапки, коми та дужки мають залишатися коректними.",
        ],
      },

      {
        id: "csv",
        format: "CSV",
        title: "CSV",

        description:
          "Табличні локалізаційні дані, впорядковані у колонки для ключів, контексту та мов.",

        example:
          `key,context,en,uk\nmenu.play,Main menu button,Play,Грати\nmenu.quit,Main menu button,Quit,Вийти`,

        points: [
          "Перший рядок визначає колонки.",
          "key ідентифікує рядок.",
          "context допомагає зрозуміти використання рядка.",
          "Лапки, роздільники, переноси рядків та кодування мають значення.",
        ],
      },

      {
        id: "xml",
        format: "XML",
        title: "XML",

        description:
          "Ієрархічний формат, де елементи, атрибути і теги є частиною структури файлу.",

        example:
          `<quest id="quest_001">\n  <title>Find the Lost Sword</title>\n  <objective>Return it to the blacksmith.</objective>\n</quest>`,

        points: [
          "Назви елементів є структурними.",
          "Атрибути можуть містити технічні дані.",
          "Текст усередині елементів може бути призначеним для перекладу.",
          "Теги та ієрархія мають залишатися незмінними.",
        ],
      },

      {
        id: "po",
        format: "PO",
        title: "PO",

        description:
          "Формат локалізації на основі gettext, що розділяє вихідні рядки, переклади, ідентифікатори та контекст.",

        example:
          `msgid "Quest Complete"\nmsgstr "Квест завершено"`,

        points: [
          "msgid містить вихідний рядок.",
          "msgstr містить переклад.",
          "Ідентифікатори і контекст можуть супроводжувати рядок.",
          "Метадані та технічні маркери мають залишатися коректними.",
        ],
      },

      {
        id: "yaml",
        format: "YAML",
        title: "YAML",

        description:
          "Читабельні структуровані дані, у яких система відступів визначає ієрархію.",

        example:
          `quest:\n  id: quest_001\n  title: "Find the Lost Sword"\n  objective: "Return it to the blacksmith."`,

        points: [
          "Ключі визначають структуру.",
          "Значення можуть бути призначеними для перекладу або технічними.",
          "Система відступів визначає ієрархію.",
          "Зміна у відступах може зламати файл.",
        ],
      },
    ],
  },
};

