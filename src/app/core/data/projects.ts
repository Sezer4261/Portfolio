export interface Project {
  /** Key inside `projects.*` of the translations. */
  key: string;
  title: string;
  technologies: string[];
  image: string;
  icon: string;
  /** Background of the preview box and color of the rays (Figma: "Projects Interaction"). */
  boxColor: string;
  rayColor: string;
  github: string;
  live: string;
}

const GITHUB = 'https://github.com/Sezer4261';
const PAGES = 'https://sezer4261.github.io';

const COLORS = [
  { boxColor: 'var(--c-yellow)', rayColor: 'var(--c-orange)' },
  { boxColor: 'var(--c-blue)', rayColor: 'var(--c-orange)' },
  { boxColor: 'var(--c-orange)', rayColor: 'var(--c-yellow)' },
];

function project(key: string, title: string, repo: string, technologies: string[], index: number): Project {
  return {
    key,
    title,
    technologies,
    image: `assets/img/projects/${key}.webp`,
    icon: `assets/icons/projects/${key}-icon.svg`,
    ...COLORS[index % COLORS.length],
    github: `${GITHUB}/${repo}`,
    live: `${PAGES}/${repo}/`,
  };
}

export const PROJECTS: Project[] = [
  project('el-pollo-loco', 'El Pollo Loco', 'El-Pollo-Loco', ['JavaScript', 'HTML', 'CSS', 'Canvas'], 0),
  project('poll-app', 'Poll App', 'PollApp', ['Angular', 'TypeScript', 'SCSS', 'Supabase'], 1),
  project('memory', 'Memory', 'Memory', ['TypeScript', 'Vite', 'CSS'], 2),
  project('join', 'Join', 'Join-App-Sezer', ['JavaScript', 'HTML', 'CSS', 'Firebase'], 3),
  project('order-app', 'Order App', 'Order-App', ['JavaScript', 'HTML', 'Tailwind CSS'], 4),
  project('pokedex', 'Pokédex', 'Pokedex', ['JavaScript', 'HTML', 'CSS', 'REST-API'], 5),
  project('cooking-world', 'Kochwelt', 'Cooking-world', ['HTML', 'CSS', 'JavaScript'], 6),
  project('photo-album', 'Fotogram', 'Photo-album', ['HTML', 'CSS', 'JavaScript'], 7),
];
