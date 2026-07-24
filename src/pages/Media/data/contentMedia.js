// previews
import preview01 from "../previews/preview01.webp";
import preview02 from "../previews/preview02.webp";
import preview03 from "../previews/preview03.webp";
import preview04 from "../previews/preview04.webp";
import preview05 from "../previews/preview05.webp";
import preview06 from "../previews/preview06.webp";
import preview07 from "../previews/preview07.webp";
import preview08 from "../previews/preview08.webp";

// article images
import article01 from "../articles/not-wasting-waste/page1.jpg";

import article02Page1 from "../articles/winter-wonders/page1.jpg";
import article02Page2 from "../articles/winter-wonders/page2.jpg";

import article03Page1 from "../articles/all-the-lonely-people/page1.jpg";
import article03Page2 from "../articles/all-the-lonely-people/page2.jpg";

import article04 from "../articles/business-over-living/page1.jpg";

import article05Page1 from "../articles/kyiv-mostly-harmless/page1.jpg";
import article05Page2 from "../articles/kyiv-mostly-harmless/page2.jpg";

import article06Page1 from "../articles/bessarabka-passes-the-test/page1.jpg";
import article06Page2 from "../articles/bessarabka-passes-the-test/page2.jpg";

import article07Page1 from "../articles/streetcar-from-past-to-future/page1.jpg";
import article07Page2 from "../articles/streetcar-from-past-to-future/page2.jpg";

import article08 from "../articles/arcane-art-gallery/page1.jpg";


export const mediaItems = {
  en: {
    headerTitle: "Media Archive",
    headerDescription: "Collection of authored materials for a Ukrainian newspaper.",

    previewAlt: "Preview of",
    buttonOpen: "Open",
    buttonPreview: "Preview",

    previousArticle: "Previous article",
    nextArticle: "Next article",

    explorerPlaceholder: "Select Preview to explore the article.",
    closeExplorer: "Close explorer",

    fieldDate: "Date",
    fieldSubject: "Subject",
    fieldDescription: "Description",

    articleNotFound: "Article not found",
    pageAlt: "page",
    buttonBack: "Back",
    
    items: [
      {
        id: 1,

        preview: preview01,

        images: [article01],

        title: "Not Wasting Waste",

        date: "1 November 2012",

        subject: "Urban Ecosystem",

        description: "An article explores the prospects for Ukraine's recycling companies and the environmental risks associated with landfills",
      },

      {
        id: 2,

        preview: preview02,

        images: [article02Page1, article02Page2],

        title: "Winter Wonders Spell Trouble",

        date: "14 December 2012",

        subject: "Urban Ecosystem",

        description: "An article examines snow clearance practices, municipal maintenance regulations, and the performance of public utility services",
      },

      {
        id: 3,

        preview: preview03,

        images: [article03Page1, article03Page2],

        title: "All the Lonely People",

        date: "18 January 2013",

        subject: "Urban Ecosystem",

        description: "An article about Kyiv's homeless population, the realities of municipal shelters, and the challenges in obtaining legal identification documents",
      },

      {
        id: 4,

        preview: preview04,

        images: [article04],

        title: "Business Over Living",

        date: "1 February 2013",

        subject: "Urban Ecosystem",

        description: "An article examines urban planning challenges, from master planning to development practices that undermine architectural principles of urban living",
      },

      {
        id: 5,

        preview: preview05,

        images: [article05Page1, article05Page2],

        title: "Kyiv: Mostly Harmless",

        date: "8 February 2013",

        subject: "Urban Ecosystem",

        description: "An article explores the historical and current trends in Kyiv's organized crime, presents crime statistics across residential areas, and discusses emerging forms of urban surveillance",
      },

      {
        id: 6,

        preview: preview06,

        images: [article06Page1, article06Page2],

        title: "Bessarabka Passes the Test",

        date: "22 February 2013",

        subject: "Urban Ecosystem",

        description: "An article about food quality standards and food inspection practices at Kyiv's oldest indoor market",
      },

      {
        id: 7,

        preview: preview07,

        images: [article07Page1, article07Page2],

        title: "Streetcar: From Past to Future",

        date: "22 March 2013",

        subject: "Urban Ecosystem",

        description: "An article traces the past, present, and uncertain future of Kyiv's tram network",
      },

      {
        id: 8,

        preview: preview08,

        images: [article08],

        title: "Arcane Art Gallery: Svetangs and Objective Art",

        date: "5 April 2013",

        subject: "Arts & Culture",

        description: "An article covers the first exhibition by Ukrainian artist Halyna Moskvitina, who spent ten years in Nepal and developed a distinctive artistic style of Svetangs - paintings that radiate transcendental light",
      },
    ],
  },

  ua: {
    headerTitle: "Архів публікацій",
    headerDescription: "Добірка авторських матеріалів для української газети.",

    previewAlt: "Попередній перегляд",
    buttonOpen: "Відкрити",
    buttonPreview: "Перегляд",

    previousArticle: "Попередня стаття",
    nextArticle: "Наступна стаття",

    explorerPlaceholder: "Натисніть «Перегляд», щоб переглянути статтю.",
    closeExplorer: "Закрити",

    fieldDate: "Дата",
    fieldSubject: "Тема",
    fieldDescription: "Опис",

    articleNotFound: "Статтю не знайдено",
    pageAlt: "сторінка",
    buttonBack: "Назад",
    
    items: [
      {
        id: 1,

        preview: preview01,

        images: [article01],

        title: "Not Wasting Waste",

        date: "1 листопада 2012",

        subject: "Екосистема міста",

        description: "Стаття про перспективи українських гравців в царині переробки і ризики сміттєзвалищ для екології країни",
      },

      {
        id: 2,

        preview: preview02,

        images: [article02Page1, article02Page2],

        title: "Winter Wonders Spell Trouble",

        date: "14 грудня 2012",

        subject: "Екосистема міста",

        description: "Стаття висвітлює сучасні методи снігоприбирання, дає оцінку міським законам благоустрою і роботі комунальних служб",
      },

      {
        id: 3,

        preview: preview03,

        images: [article03Page1, article03Page2],

        title: "All the Lonely People",

        date: "18 січня 2013",

        subject: "Екосистема міста",

        description: "Стаття про безпритульних Києва, реальність міських притулків та перспективи документації",
      },

      {
        id: 4,

        preview: preview04,

        images: [article04],

        title: "Business Over Living",

        date: "1 лютого 2013",

        subject: "Екосистема міста",

        description: "Стаття описує проблеми у містобудуванні - від генерального планування, до містобудівних практик котрі порушують архітектурні принципи розвитку сучасних міст",
      },

      {
        id: 5,

        preview: preview05,

        images: [article05Page1, article05Page2],

        title: "Kyiv: Mostly Harmless",

        date: "8 лютого 2013",

        subject: "Екосистема міста",

        description: "Стаття описує минуле і сучасність київського бандитизму, представляє статиску рівня злочинності у житлових масивах і нові практики спостереження за містянами",
      },

      {
        id: 6,

        preview: preview06,

        images: [article06Page1, article06Page2],

        title: "Bessarabka Passes the Test",

        date: "22 лютого 2013",

        subject: "Екосистема міста",
  
        description: "Стаття про якість харчових продуктів і практики контролю якості на одному з найстаріших київських критих ринків",
      },

      {
        id: 7,

        preview: preview07,

        images: [article07Page1, article07Page2],

        title: "Streetcar: From Past to Future",

        date: "22 березня 2013",

        subject: "Екосистема міста",

        description: "Стаття про минуле, сучасність і примарне майбутнє київських трамвайних маршрутів",
      },

      {
        id: 8,

        preview: preview08,

        images: [article08],

        title: "Arcane Art Gallery: Svetangs and Objective Art",

        date: "5 квітня 2013",

        subject: "Культурне життя столиці",

        description: "Стаття присвячена відкриттю першої виставки української художниці Галини Москвітіної, котра 10 років жила у Непалі і створила авторський художній стиль светангів - картин, що випромінюють трансцендентне світло",
      },
    ]
  }  
};
