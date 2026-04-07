export interface WorkExperience {
  period: string;
  role: string;
  company: string;
  description: string;
}

export interface SkillGroup {
  label: string;
  primary: string[];    // 主力技能 → 深黑底白字
  secondary: string[];  // 輔助技能 → 淺灰底深灰字
}

export interface Education {
  degree: string;
  school: string;
  year: string;
}

export interface Resume {
  experiences: WorkExperience[];
  skillGroups: SkillGroup[];
  education: Education[];
}

export const resume: Resume = {
  experiences: [
    {
      period: '2024/01 — 現在',
      role: 'Full-Stack Developer / AI Builder',
      company: '獨立開發者 · 接案',
      description: '開發 AI 驅動工具、數據報表系統與行銷網站。導入 Claude API 實現自動化流程，服務多個中小企業客戶。',
    },
    {
      period: '2022/06 — 2023/12',
      role: 'Frontend Engineer',
      company: '某科技新創 · 台北',
      description: '負責 React 前端開發，建立組件庫、串接 RESTful API，推動技術文件化流程，提升團隊交付速度 30%。',
    },
    {
      period: '2021/09 — 2022/05',
      role: 'Junior Web Developer',
      company: '數位代理商 · 台北',
      description: '參與多個品牌官網開發，負責響應式切版、SEO 優化與 GA4 埋點分析，協助客戶提升自然流量 40%。',
    },
  ],
  skillGroups: [
    {
      label: 'Frontend',
      primary: ['React', 'TypeScript', 'Astro'],
      secondary: ['Tailwind CSS', 'HTML / CSS'],
    },
    {
      label: 'Backend',
      primary: ['Node.js', 'Express', 'Python'],
      secondary: ['REST API'],
    },
    {
      label: 'AI / Data',
      primary: ['Claude API', 'OpenAI API'],
      secondary: ['Prompt Engineering', 'Google Sheets API'],
    },
    {
      label: 'Tools & Deploy',
      primary: ['Git', 'Vercel'],
      secondary: ['Figma', 'Claude Code'],
    },
  ],
  education: [
    {
      degree: '資訊管理學系 · 學士',
      school: '國立某某大學',
      year: '2017 — 2021',
    },
  ],
};
