// Projects data
export type Category = 'games' | 'web' | 'design' | 'tools'

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
    title: 'Would You Still Love Me?',                    // Unity game's actual title
    description: 'A relationship simulator...with a twist! Made entirely in Unity with C# and free Unity assets.',              // See prompts below
    src: '/WYSLM.png',          // Gameplay screenshot — action, not a menu
    viewlink: 'https://desinoelle.itch.io/would-you-still-love-me-beta',                 // itch.io build, or a YouTube gameplay clip
  },
  {
    title: 'This Portfolio Site',  // Or "Portfolio Site"
    description: 'Hand-built in React, TypeScript, and Tailwind v4 — a ground-up rebuild of the portfolio I made in 2019. Same site, seven years of learning apart.',
    src: 'folio.PNG',          // Screenshot of the site itself
    viewlink: 'https://portfolio-eight-dusky-qu40zca26q.vercel.app/portfolio',         // Vercel URL once deployed
    githublink: 'https://github.com/desinoelle/portfolio',
  },
  {
    title: 'Bee The Change',                    // UEFN jam entry title
    description: 'Winner of Best Use of Engine Feature by UNCGs Games for a Change Game Jam ',
    src: '/BTC.jpeg',          // Best-looking shot of your level
    viewlink: 'https://www.fortnite.com/@napoli/9756-0088-2319',                 // Fortnite island code link, or video
  },
  {
    title: 'The Very Hungry Caterpillar',
    description: 'A cute "Snake"-style game, following the famous childrens book',
    src: '/TVHC.PNG',
    viewlink: 'https://www.puzzlescript.net/play.html?p=46a8a407dd664985ab3f8e38170c0139',
    githublink: 'https://github.com/desinoelle/the-very-hungry-caterpillar',
  },
  {
    title: 'By the Light of the Moon',
    description: 'A narrative project, written completly by me in Twine!',
    src: '/BTLOTM.PNG',
    viewlink: 'https://desinoelle.github.io/by-the-light-of-the-moon/',                 // itch.io or wherever the Twine build lives
    githublink: 'https://github.com/desinoelle/by-the-light-of-the-moon'
  },
  {
    title: 'Greedy: The Dice Game',
    description: 'A personal game project built entirely with JavaScript, HTML, and CSS.',
    src: '/Greedy.PNG',
    viewlink: 'https://desinoelle.github.io/Greedy-Game/',
    githublink: 'https://github.com/desinoelle/Greedy-Game'
  }
]