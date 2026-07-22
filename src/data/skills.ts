export interface Skill {
  icon: string;
  name: string;
}

export const skills = [
  { icon: "svg/html.svg", name: "HTML" },
  { icon: "svg/css.svg", name: "CSS" },
  { icon: "svg/sass.svg", name: "SASS" },
  { icon: "svg/bootstrap.svg", name: "Bootstrap" },
  { icon: "svg/javascript.svg", name: "JavaScript" },
  { icon: "svg/react.svg", name: "React" },
  { icon: "svg/next.svg", name: "Next" },
  { icon: "svg/github.svg", name: "GitHub" },
  { icon: "svg/figma.svg", name: "Figma" },
  { icon: "svg/vscode.svg", name: "VS Code" },
] satisfies readonly Skill[];
