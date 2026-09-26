export interface Skill {
  name: string;
  icon: string;
}

const icon = (file: string) => `assets/icons/skills/${file}.svg`;

export const SKILLS: Skill[] = [
  { name: 'HTML', icon: icon('html') },
  { name: 'CSS', icon: icon('css') },
  { name: 'JavaScript', icon: icon('javascript') },
  { name: 'TypeScript', icon: icon('typescript') },
  { name: 'Angular', icon: icon('angular') },
  { name: 'React', icon: icon('react') },
  { name: 'Node.js', icon: icon('node') },
  { name: 'Git / GitHub', icon: icon('git') },
  { name: 'Firebase', icon: icon('firebase') },
  { name: 'Responsive Design', icon: icon('responsive') },
];

/** Shown in the yellow "Growth mindset" card. */
export const LEARNING_SKILLS: Skill[] = [
  { name: 'Vue.js', icon: icon('vue') },
  { name: 'Supabase', icon: icon('supabase') },
  { name: 'Material Design', icon: icon('material-design') },
];
