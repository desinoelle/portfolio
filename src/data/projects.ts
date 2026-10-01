// src/data/projects.ts
export interface Project {
  title: string
  description: string
  src: string
  viewlink?: string
  githublink?: string
}

export const projects: Project[] = [
  // ——— Featured on home page (first three) ———
  {
    title: 'Would You Still Love Me?',
    description: 'A relationship simulator...with a twist! Made entirely in Unity with C# and free Unity assets.',
    src: '/WYSLM.png',
    viewlink: 'https://desinoelle.itch.io/would-you-still-love-me-beta',
  },
  {
    title: 'Custom Game Engine',
    description: 'A group project built in C++ for engine architecture coursework at NC State. I implemented the input handling system, sprite, and entity systems.',
    src: '/engine.png',
    githublink: 'https://github.com/desinoelle/csc481-game-engine'
  },
  {
    title: 'Bee The Change',
    description: 'Winner of Best Use of Engine Feature at UNCG\'s Games for a Change Game Jam. I was the level designer, handling map layout and player flow.',
    src: '/BTC.jpeg',
    viewlink: 'https://www.fortnite.com/@napoli/9756-0088-2319',
  },
  {
    title: 'This Portfolio Site',
    description: 'Hand-built in React, TypeScript, and Tailwind v4. A ground-up rebuild of the portfolio I made in 2019. Same site, seven years of learning apart.',
    src: '/folio.PNG',
    githublink: 'https://github.com/desinoelle/portfolio',
  },
  {
    title: 'Cloverleaf',
    description: 'Full-stack forum with real-time chat, built in a team of four with React, Express, MongoDB, and Socket.io. I designed the UI and implemented core features. (2021)',
    src: '/CL.png',
    githublink: 'https://github.com/andrewle12/cloverleaf',
  },
  {
    title: 'The Very Hungry Caterpillar',
    description: 'A cute "Snake"-style game, following the famous children\'s book.',
    src: '/TVHC.PNG',
    viewlink: 'https://www.puzzlescript.net/play.html?p=46a8a407dd664985ab3f8e38170c0139',
    githublink: 'https://github.com/desinoelle/the-very-hungry-caterpillar',
  },
  {
    title: 'By the Light of the Moon',
    description: 'A narrative project, written completely by me in Twine!',
    src: '/BTLOTM.PNG',
    viewlink: 'https://desinoelle.github.io/by-the-light-of-the-moon/',
    githublink: 'https://github.com/desinoelle/by-the-light-of-the-moon',
  },
  {
    title: 'Greedy: The Dice Game',
    description: 'A personal game project built entirely with JavaScript, HTML, and CSS.',
    src: '/Greedy.PNG',
    viewlink: 'https://desinoelle.github.io/Greedy-Game/',
    githublink: 'https://github.com/desinoelle/Greedy-Game',
  },
]