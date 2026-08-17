export const content = {
  en: {
    pageTitle: "Localization",

    pageDescription:
      "Core rules and principles for working with translations in game, UI, software, GUI, and website localization projects.",

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
      "Основні правила і принципи роботи з перекладами у проектах локалізації ігор, UI, програмного забезпечення, GUI для софту, вебсайтів.",

    readMore: "Детальніше",

    fileFormatsTitle: "Формати файлів",

    items: [
      {
        id: "localization-workflow",
        title: "Localization Workflow: від вихідних рядків до LQA",
        lead:
          "Процес локалізації гри — це керований виробничий цикл, у якому мова, контекст, технічна структура та досвід гравця мають залишатися узгодженими. Локалізатор не просто перекладає окремі речення: він перетворює вихідний контент на версію цільової мови, яка коректно працює всередині гри та зберігає послідовність у всіх її системах.",

        sections: [
          {
            heading: "1. Підготовка та аналіз вихідних матеріалів",
            text:
              "Процес починається з отримання вихідних рядків і налаштування локалізаційного середовища. Перед перекладом перевіряються файли, їхні формати, обмеження кількості символів, змінні, теги, плейсхолдери, контекстні примітки та довідкові матеріали. На цьому етапі визначаються технічні обмеження й неоднозначності, щоб уникнути дорогих виправлень на наступних стадіях. Також може бути підготовлена або оновлена термінологічна база, style guide та Translation Memory.",
          },
          {
            heading: "2. Переклад та лінгвістична адаптація",
            text:
              "Далі рядки перекладаються з урахуванням контексту, призначення, тону та усталеної термінології гри. UI-елементи потребують інших рішень, ніж діалоги, квести, туторіали чи системні повідомлення. Змінні та markup мають залишатися технічно коректними, тоді як синтаксис і природність цільової мови мають перевагу над буквальним відтворенням. Якщо вихідний текст неоднозначний, використовуються queries та контекстне дослідження.",
          },
          {
            heading: "3. Review та лінгвістичний контроль якості",
            text:
              "Переклад проходить перевірку на точність, природність, термінологічну та стилістичну послідовність, граматику й відповідність tone of voice. Translation Memory і glossary допомагають підтримувати consistency у великих масивах контенту, а додатковий лінгвістичний review дозволяє виявити нюанси або помилки, пропущені під час первинного перекладу. Невирішені queries мають бути уточнені, а погоджені виправлення — внесені до робочих файлів або CAT-середовища.",
          },
          {
            heading: "4. Інтеграція та функціональна перевірка",
            text:
              "Після затвердження переклади імпортуються або інтегруються в локалізаційну систему гри. Саме тут лінгвістичні рішення зустрічаються з технічною реалізацією: плейсхолдери мають коректно підставлятися, рядки — відображатися без обрізання, спеціальні символи — правильно рендеритися, а локалізований контент — з'являтися у відповідних екранах і контекстах. Тестування таким чином поєднує роботу перекладача з реальною поведінкою гри.",
          },
          {
            heading: "5. LQA та фінальна передача",
            text:
              "Localization Quality Assurance перевіряє локалізовану гру безпосередньо в робочому середовищі, виявляючи лінгвістичні, візуальні та функціональні проблеми: неправильні переклади, обрізаний або накладений текст, некоректні підстановки, пропущені рядки, непослідовну термінологію та контекстні помилки. Проблеми документуються, відтворюються, виправляються й повторно тестуються, доки локалізована версія не відповідає встановленим вимогам якості. Отже, фінальним результатом є не просто перекладений файл, а перевірений мовний досвід, готовий для гравця.",
          },
        ],

        card: {
          title: "Localization Workflow",
          description:
            "Від вихідних рядків до перевіреного мовного досвіду в грі.",
          points: [
            {
              label: "Підготувати",
              text:
                "проаналізувати файли, контекст, обмеження, термінологію та reference materials.",
            },
            {
              label: "Перекласти",
              text:
                "адаптувати зміст, tone, terminology, variables і вимоги UI.",
            },
            {
              label: "Перевірити",
              text:
                "проконтролювати точність, consistency, fluency, grammar та style.",
            },
            {
              label: "Інтегрувати",
              text:
                "перевірити strings, placeholders, rendering, layout і контекст у грі.",
            },
            {
              label: "Провести LQA",
              text:
                "виявити, задокументувати, виправити та повторно протестувати лінгвістичні й функціональні проблеми.",
            },
          ],
        },
      },

      {
        id: "translation-memory-glossary",
        title:
          "Translation Memory & Glossary: послідовність, термінологія та єдиний стиль",
        lead:
          "Translation Memory (TM) і glossary утворюють лінгвістичну основу локалізаційного процесу. Вони допомагають не лише прискорювати переклад, а й забезпечувати consistency: однакові поняття, назви та повторювані фрагменти мають отримувати передбачувані відповідники в усій грі.",

        sections: [
          {
            heading: "Translation Memory: повторне використання перевірених рішень",
            text:
              "Translation Memory — це база сегментів, у якій зберігаються пари «source → target» із попередніх перекладів. Коли подібний або ідентичний рядок зустрічається знову, CAT-tool може запропонувати вже перекладений варіант. Це зменшує повторну роботу й допомагає зберігати послідовність між меню, туторіалами, діалогами та системними повідомленнями. Водночас TM не повинна сприйматися як автоматична істина: запропонований сегмент перевіряється на актуальність, контекст і відповідність поточному проєкту.",
          },
          {
            heading: "Glossary: контроль термінології",
            text:
              "Glossary — це структурований набір затверджених термінів, їхніх відповідників, визначень і, за потреби, контекстних або стилістичних приміток. У game localization це особливо важливо для назв механік, предметів, персонажів, локацій, фракцій та інтерфейсних елементів. Якщо один термін перекладається по-різному в різних частинах гри без обґрунтованої причини, гравець отримує непослідовний досвід. Glossary встановлює узгоджене правило ще до того, як варіативність починає створювати проблему.",
          },
          {
            heading: "Consistency та editorial control",
            text:
              "TM і glossary працюють разом, але виконують різні функції. TM зберігає попередні перекладацькі рішення, тоді як glossary визначає, які терміни й назви мають використовуватися. Разом вони підтримують linguistic consistency на рівні лексики, фразеології та повторюваних сегментів. Водночас consistency не означає механічну однаковість: рішення можуть змінюватися залежно від контексту, граматики, персонажа або функції рядка. Саме тому термінологічні правила доповнюються style guide, який визначає tone of voice, рівень формальності, пунктуацію, capitalization та інші редакційні принципи.",
          },
          {
            heading: "Підтримка протягом усього проєкту",
            text:
              "Лінгвістичні ресурси потребують постійного maintenance. Нові терміни додаються до glossary після узгодження, застарілі записи оновлюються, а помилкові TM-сегменти виправляються, щоб неправильне рішення не поширювалося далі. Для великих проєктів важливо також контролювати версії ресурсів і правила доступу до них. Так створюється єдина мовна база, якою можуть послідовно користуватися перекладачі, reviewers та LQA.",
          },
          {
            heading: "Висновок",
            text:
              "TM, glossary та style guide перетворюють окремі перекладацькі рішення на керовану мовну систему. Їхня цінність полягає не лише в економії часу, а в тому, що вони підтримують цілісний, передбачуваний і впізнаваний language experience протягом усього життєвого циклу локалізації.",
          },
        ],

        card: {
          title: "Translation Memory & Glossary",
          description:
            "Лінгвістична система, що забезпечує consistency, термінологічну точність і цілісність стилю.",
          points: [
            {
              label: "TM",
              text:
                "зберігає та повторно використовує перевірені перекладацькі рішення.",
            },
            {
              label: "Glossary",
              text:
                "фіксує затверджену термінологію, назви та відповідники.",
            },
            {
              label: "Consistency",
              text:
                "підтримує послідовність мови в усіх частинах гри.",
            },
            {
              label: "Style Guide",
              text:
                "визначає tone, формальність та редакційні правила.",
            },
            {
              label: "Maintenance",
              text:
                "оновлює ресурси й запобігає поширенню застарілих рішень.",
            },
          ],
        },
      },

      {
        id: "unity-localization",
        title:
          "Unity Localization: таблиці, keys, Smart Strings і локалізовані ресурси",
        lead:
          "Unity Localization — це система керування багатомовним контентом у середовищі Unity. Замість того щоб вбудовувати перекладений текст безпосередньо у сцени або скрипти, локалізований контент зберігається як структуровані ресурси й отримується відповідно до активної локалі. Це відокремлює ігрову логіку від мовних даних і дозволяє одній і тій самій системі підтримувати кілька мов без дублювання реалізації.",

        sections: [
          {
            heading: "Localization Tables: структура мовних даних",
            text:
              "Localization Tables — центральні структури, у яких організовується локалізований контент. String Table зберігає текстові записи, тоді як Asset Table може керувати локалізованими ресурсами: зображеннями, аудіо та іншими assets. Кожен запис ідентифікується унікальним key, а не перекладеним текстом. Key створює стабільне посилання, яким ігрова система може користуватися незалежно від обраної мови.",
          },
          {
            heading: "Keys і мовні ресурси",
            text:
              "Keys створюють рівень абстракції між реалізацією гри та мовними ресурсами. Розробник може звертатися до `quest.completed`, не прив'язуючи інтерфейс або ігрову логіку до конкретної мови. Це спрощує оновлення, review і керування рядками в міру розвитку проєкту. Мовні ресурси організовуються за locale, завдяки чому система може вибрати відповідний переклад після зміни мови.",
          },
          {
            heading: "Smart Strings і variables",
            text:
              "Статичних рядків не завжди достатньо. У грі часто потрібен динамічний контент: імена персонажів, кількість предметів, очки або інші runtime values. Smart Strings дозволяють поєднувати локалізований текст зі змінними та умовною логікою, зберігаючи при цьому правила цільової мови. Це особливо важливо для мов із відмінним порядком слів, граматичним узгодженням, правилами множини або родом. Тому локалізація має враховувати поведінку variables у цільовій мові, а не просто механічно вставляти їх у текст.",
          },
          {
            heading: "Localization у runtime",
            text:
              "Під час виконання localization system пов'язує активну locale з відповідним записом таблиці або локалізованим asset. Після зміни locale підтримувані UI-елементи та ресурси можуть оновлюватися відповідно. Та сама система може керувати текстом, аудіо, зображеннями та іншими локалізованими ресурсами, залишаючи основну ігрову логіку незмінною. Така архітектура також робить тестування системнішим: можна перевірити, чи коректно знаходяться keys, чи правильно працюють variables, чи обробляються відсутні переклади та чи відповідають локалізовані assets потрібній locale.",
          },
          {
            heading: "Висновок",
            text:
              "Unity Localization створює структурований рівень між функціональністю гри та багатомовним контентом. Tables організовують ресурси, keys забезпечують стабільні посилання, Smart Strings працюють із динамічним контентом, а locales визначають, які ресурси відображаються гравцеві. Розуміння цієї структури важливе для локалізатора, який працює з Unity, оскільки лінгвістичні рішення зрештою мають коректно функціонувати всередині технічної архітектури гри.",
          },
        ],

        card: {
          title: "Unity Localization",
          description:
            "Структурована система, що поєднує багатомовний контент із логікою гри та runtime.",
          points: [
            {
              label: "Tables",
              text:
                "організовують локалізовані strings і assets за типами ресурсів.",
            },
            {
              label: "Keys",
              text:
                "створюють стабільні посилання незалежно від мови.",
            },
            {
              label: "Locales",
              text:
                "визначають активні мовні ресурси.",
            },
            {
              label: "Smart Strings",
              text:
                "поєднують локалізований текст із динамічними variables та логікою.",
            },
            {
              label: "Runtime",
              text:
                "знаходить і відображає потрібний локалізований контент у грі.",
            },
          ],
        },
      },

      {
        id: "narrative-localization",
        title:
          "Narrative Localization: зміст, голос персонажа та досвід гравця",
        lead:
          "Наративна локалізація адаптує сюжетний і орієнтований на гравця контент гри так, щоб він залишався цілісним, природним і переконливим цільовою мовою. На відміну від суто функціонального перекладу, вона має зберігати не лише значення, а й голос персонажа, контекст, тон, ритм і культурну релевантність. Кожен локалізований рядок має працювати як частина ігрового світу, а не як ізольоване речення.",

        sections: [
          {
            heading: "Контекст — передусім",
            text:
              "Контекст визначає, як саме потрібно зрозуміти й перекласти рядок. Короткий напис інтерфейсу, ціль квесту, репліка персонажа, опис предмета чи системне повідомлення можуть вимагати абсолютно різних мовних рішень, навіть якщо використовують схожу лексику. Тому локалізатору потрібен контекст: хто говорить, у якій сцені, з якою метою, у яких стосунках перебувають персонажі та що відбувається під час гри. Без достатнього контексту навіть граматично правильний переклад може виявитися неточним або неприродним.",
          },
          {
            heading: "Голос персонажа та тон",
            text:
              "Персонаж має звучати як саме цей персонаж протягом усієї гри. Вік, особистість, соціальний статус, емоційний стан, стосунки та роль у сюжеті впливають на лексику, структуру речень, рівень формальності, ритм і вибір сталих виразів. Саркастичний персонаж, військовий командир і дитина не повинні звучати однаково лише тому, що описують одну й ту саму подію. Тон також має залишатися послідовним на рівні всієї гри.",
          },
          {
            heading: "Культурна адаптація",
            text:
              "Локалізація може потребувати культурної адаптації, якщо прямий відповідник буде незрозумілим, неприродним або втратить потрібний ефект для цільової аудиторії. Ідіоми, жарти, культурні посилання, імена, одиниці вимірювання, мовні норми та специфічні вирази можуть потребувати переформулювання зі збереженням їхньої сюжетної функції. Адаптація має відтворювати задуманий досвід, не стираючи без необхідності культурну ідентичність оригінального твору.",
          },
          {
            heading: "UI, системні повідомлення та обмеження",
            text:
              "Наративна локалізація виходить далеко за межі діалогів. Цілі квестів, навчальні підказки, описи предметів, меню, сповіщення, досягнення та системні повідомлення мають бути зрозумілими й відповідати своїй функції. При цьому простір часто обмежений, особливо в елементах інтерфейсу, субтитрах, кнопках і мобільних інтерфейсах. Обмеження кількості символів, тривалість відображення субтитрів, перенесення рядків, розширення тексту та розміри інтерфейсу безпосередньо впливають на перекладацькі рішення.",
          },
          {
            heading: "Послідовність у всій грі",
            text:
              "Термінологія, імена персонажів, локації, фракції, ігрові механіки та повторювані фрази мають залишатися послідовними в тисячах рядків. Translation Memory, глосарії, стильові довідники й контекстні матеріали допомагають підтримувати цю послідовність, але наративне судження залишається необхідним, коли одна й та сама фраза набуває різного значення залежно від ситуації.",
          },
          {
            heading: "Висновок",
            text:
              "Наративна локалізація — це перетин лінгвістичної точності, сторітелінгу, культурної компетентності та технічних обмежень. Її результатом має бути локалізована гра, яку гравець сприймає як цілісну й автентичну: персонажі зберігають свої голоси, задум оригіналу переживає адаптацію, інформація залишається функціональною, а мова звучить природно для цільової аудиторії.",
          },
        ],

        card: {
          title: "Наративна локалізація",
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
          "File Formats: робота зі структурованими локалізаційними ресурсами",
        lead:
          "Локалізація рідко відбувається у звичайному документі, де перекладач може вільно редагувати кожне речення. Ігровий контент часто зберігається у структурованих файлах, які поєднують перекладні рядки з keys, metadata, variables, markup та технічними інструкціями. Тому локалізатор має розуміти не лише значення рядка, а й структуру файлу та елементи, які необхідно залишити недоторканими.",

        sections: [
          {
            heading: "Структуровані формати: JSON, XML та YAML",
            text:
              "JSON, XML і YAML часто використовуються для зберігання конфігураційних даних, діалогів, UI-рядків, metadata та інших ігрових ресурсів. Їхній синтаксис відрізняється, але принцип подібний: перекладний текст існує поруч зі структурними елементами — keys, tags, attributes або вкладеними об'єктами. Отже, завдання полягає не просто в перекладі видимого тексту, а у визначенні, які частини є мовним контентом, а які належать до технічної структури файлу.",
          },
          {
            heading: "CSV та табличні ресурси",
            text:
              "CSV та подібні табличні формати можуть містити великі масиви локалізаційних рядків, організованих у колонки на кшталт keys, source text, translations, context або character information. Їхня простота може бути оманливою: необхідно правильно зберігати separators, quotation marks, line breaks, вирівнювання колонок та encoding. Перед внесенням структурних змін локалізатор має перевірити, як файл очікується імпортувати або експортувати.",
          },
          {
            heading: "PO та спеціалізовані локалізаційні формати",
            text:
              "PO-файли широко використовуються у localization workflows на основі gettext. Вони зазвичай містять source strings, translated strings, identifiers і contextual information. Їхня структура дозволяє localization tools відокремлювати мовний контент від metadata та технічних маркерів. Інші спеціалізовані формати можуть використовувати власні правила, але принцип залишається тим самим: спочатку потрібно зрозуміти формат, а потім працювати з ним відповідно до встановленого workflow проєкту, а не сприймати ресурс як звичайний текстовий документ.",
          },
          {
            heading: "Markdown та markup",
            text:
              "Markdown та інші markup-based формати потребують особливої уваги, оскільки елементи форматування можуть безпосередньо знаходитися всередині тексту, що перекладається. Links, emphasis markers, placeholders, variables або inline code можуть потребувати збереження, тоді як навколишній текст адаптується. Локалізатор має зберегти функціональність markup і водночас зробити текст цільової мови природним та читабельним.",
          },
          {
            heading: "Що не можна зламати",
            text:
              "У різних форматах особливого захисту потребують keys, placeholders, variables, tags, escape characters, delimiters, file encoding та структурна ієрархія. Перед передачею файл необхідно перевірити, щоб він залишався синтаксично коректним і міг бути безпечно імпортований у цільову систему.",
          },
          {
            heading: "Висновок",
            text:
              "Професійний локалізатор сприймає localization files одночасно як мовні ресурси й технічні assets. Мета — адаптувати перекладний контент, зберігши структуру, яка дозволяє грі або localization platform правильно його інтерпретувати. Розуміння форматів зменшує integration errors, захищає development pipeline і забезпечує безпечний шлях від вихідних ресурсів до фінального продукту.",
          },
        ],

        card: {
          title: "File Formats",
          description:
            "Робота з локалізаційними ресурсами без порушення їхньої технічної цілісності.",
          points: [
            {
              label: "Identify",
              text:
                "відокремити перекладний контент від структури та metadata.",
            },
            {
              label: "Preserve",
              text:
                "захистити keys, tags, variables, placeholders та hierarchy.",
            },
            {
              label: "Adapt",
              text:
                "перекласти strings з урахуванням обмежень конкретного формату.",
            },
            {
              label: "Validate",
              text:
                "перевірити encoding, syntax, delimiters та import compatibility.",
            },
            {
              label: "Deliver",
              text:
                "передати структурно коректні ресурси, готові до integration.",
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
          "Структуровані дані з keys, вкладеними об'єктами, перекладними значеннями та variables.",

        example:
          `"quest.completed": {\n  "title": "Quest Complete",\n  "message": "You found {itemName}!"\n}`,

        points: [
          "Keys не перекладаються.",
          "Values можуть бути перекладними.",
          "Variables на кшталт {itemName} мають залишатися незмінними.",
          "JSON syntax, лапки, коми та дужки мають залишатися коректними.",
        ],
      },

      {
        id: "csv",
        format: "CSV",
        title: "CSV",

        description:
          "Табличні локалізаційні дані, організовані за колонками для keys, context та мов.",

        example:
          `key,context,en,uk\nmenu.play,Main menu button,Play,Грати\nmenu.quit,Main menu button,Quit,Вийти`,

        points: [
          "Перший рядок визначає колонки.",
          "key ідентифікує рядок.",
          "context допомагає зрозуміти використання рядка.",
          "Quoting, delimiters, line breaks та encoding мають значення.",
        ],
      },

      {
        id: "xml",
        format: "XML",
        title: "XML",

        description:
          "Ієрархічний формат, де elements, attributes і tags є частиною структури файлу.",

        example:
          `<quest id="quest_001">\n  <title>Find the Lost Sword</title>\n  <objective>Return it to the blacksmith.</objective>\n</quest>`,

        points: [
          "Назви елементів є структурними.",
          "Attributes можуть містити технічні дані.",
          "Текст усередині елементів може бути перекладним.",
          "Tags та hierarchy мають залишатися незмінними.",
        ],
      },

      {
        id: "po",
        format: "PO",
        title: "PO",

        description:
          "Формат локалізації на основі gettext, що розділяє source strings, translations, identifiers та context.",

        example:
          `msgid "Quest Complete"\nmsgstr "Квест завершено"`,

        points: [
          "msgid містить вихідний рядок.",
          "msgstr містить переклад.",
          "Identifiers і context можуть супроводжувати рядок.",
          "Metadata та технічні маркери мають залишатися коректними.",
        ],
      },

      {
        id: "yaml",
        format: "YAML",
        title: "YAML",

        description:
          "Читабельні структуровані дані, у яких indentation визначає ієрархію.",

        example:
          `quest:\n  id: quest_001\n  title: "Find the Lost Sword"\n  objective: "Return it to the blacksmith."`,

        points: [
          "Keys визначають структуру.",
          "Values можуть бути перекладними або технічними.",
          "Indentation визначає hierarchy.",
          "Зміна indentation може зламати файл.",
        ],
      },
    ],
  },
};

