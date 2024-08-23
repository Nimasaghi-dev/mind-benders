/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentQuestionIndex: 0,
  score: 0,
  questions: [
    {
      text: 'How many continents do we have in the world?',
      answers: {
        a: '7',
        b: '5',
        c: '6',
        d: '8',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: '',
          href: '',
        },
        {
          text: '',
          href: '',
        },
      ],
    },

    {
      text: 'What is the smallest country in the world?',
      answers: {
        a: 'Vatican City',
        b: 'Monaco',
        c: 'San Marino',
        d: 'Lichtenstein',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: '',
          href: '',
        },
        {
          text: '',
          href: '',
        },
      ],
    },

    {
      text: 'Which ocean is the largest?',
      answers: {
        a: 'Atlantic',
        b: 'Indian',
        c: 'Southern',
        d: 'Pacific',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: '',
          href: '',
        },
        {
          text: '',
          href: '',
        },
      ],
    },

    {
      text: 'What is the capital of Iran?',
      answers: {
        a: 'Berlin',
        b: 'Tehran',
        c: 'Damascus',
        d: 'Miami',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: '',
          href: '',
        },
        {
          text: '',
          href: '',
        },
      ],
    },

    {
      text: 'What is the longest river in the world?',
      answers: {
        a: 'Mississipi',
        b: 'Nile',
        c: 'Amazon',
        d: 'Yangtze',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'javascript.info',
          href: 'https://javascript.info/types#type-typeof',
        },
        {
          text: '',
          href:
            '',
        },
      ],
    },

    {
      text: 'Which country has the most natural lakes?',
      answers: {
        a: 'Canada',
        b: 'Russia',
        c: 'USA',
        d: 'India',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'World Atlas',
          href: 'https://www.worldatlas.com/articles/which-country-has-the-most-lakes.html',
        },
        {
          text: 'National Geographic',
          href: 'https://www.nationalgeographic.com/environment/freshwater/lakes/',
        },
      ],
    },

    {
      text: 'Which desert is the largest in the world?',
      answers: {
        a: 'Sahara',
        b: 'Arabian',
        c: 'Gobi',
        d: 'Antarctic',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'Live Science',
          href: 'https://www.livescience.com/32120-largest-desert.html',
        },
        {
          text: 'World Atlas',
          href: 'https://www.worldatlas.com/articles/largest-deserts-in-the-world.html',
        },
      ],
    },

    {
      text: 'What is the tallest mountain in the world?',
      answers: {
        a: 'Mount Everest',
        b: 'K2',
        c: 'Kangchenjunga',
        d: 'Lhotse',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'BBC',
          href: 'https://www.bbc.com/news/science-environment-54605069',
        },
        {
          text: 'National Geographic',
          href: 'https://www.nationalgeographic.com/adventure/article/tallest-mountain-on-earth',
        },
      ],
    },

    {
      text: 'Which country is known as the Land of the Rising Sun?',
      answers: {
        a: 'China',
        b: 'South Korea',
        c: 'Japan',
        d: 'Thailand',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'Japan Times',
          href: 'https://www.japantimes.co.jp/community/2020/06/07/voices/land-of-the-rising-sun/',
        },
        {
          text: 'National Geographic',
          href: 'https://www.nationalgeographic.com/travel/article/japan',
        },
      ],
    },

    {
      text: 'Which country has the largest population?',
      answers: {
        a: 'India',
        b: 'China',
        c: 'USA',
        d: 'Indonesia',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'Worldometer',
          href: 'https://www.worldometers.info/world-population/population-by-country/',
        },
        {
          text: 'United Nations',
          href: 'https://www.un.org/development/desa/en/key-issues/population.html',
        },
      ],
    },
  ],
};
