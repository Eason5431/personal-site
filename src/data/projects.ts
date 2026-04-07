export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  thumbnail?: string;   // public/ 下的圖片路徑，選填（未填則用漸層背景）
  emoji?: string;       // 縮圖 emoji 佔位符
  bgGradient?: string;  // 縮圖背景漸層（CSS gradient string）
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'ad-analytics',
    name: 'Ad Analytics Dashboard',
    description: '廣告數據分析報表，讀取 Google Sheets 數據，自動生成 AI 週報，支援多渠道 KPI 追蹤與圖表視覺化。',
    tags: ['Python', 'Google Sheets API', 'Claude API', 'HTML/CSS'],
    githubUrl: 'https://github.com/eason/ad-analytics',
    demoUrl: 'https://ad-analytics.vercel.app',
    emoji: '📊',
    bgGradient: 'linear-gradient(135deg, #dbeafe, #ede9fe)',
    featured: true,
  },
  {
    id: 'blockchain-layman',
    name: '區塊鏈白話文',
    description: '針對幣圈小白的區塊鏈知識網站，Astro 驅動，收錄 20+ 篇原創文章、Glossary 術語頁，已部署至 Vercel。',
    tags: ['Astro', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    githubUrl: 'https://github.com/eason/blockchain-layman',
    demoUrl: 'https://blockchain-layman.vercel.app',
    emoji: '🌐',
    bgGradient: 'linear-gradient(135deg, #d1fae5, #a7f3d0)',
    featured: true,
  },
  {
    id: 'ai-resume',
    name: 'AI Resume Generator',
    description: 'React + Express 三服務架構的 AI 履歷生成器，支援客製化模板、Admin Dashboard 與即時預覽。',
    tags: ['React', 'Express', 'Node.js', 'OpenAI API'],
    githubUrl: 'https://github.com/eason/ai-resume',
    emoji: '🤖',
    bgGradient: 'linear-gradient(135deg, #fef3c7, #fde68a)',
    featured: true,
  },
  {
    id: 'ppt-maker',
    name: 'PPT Maker',
    description: '將文章自動拆解為分鏡表，再依 Polaris 風格規範生成 .pptx，一鍵完成從文字到簡報的全流程。',
    tags: ['Claude API', 'PptxGenJS', 'Python'],
    githubUrl: 'https://github.com/eason/ppt-maker',
    emoji: '📱',
    bgGradient: 'linear-gradient(135deg, #fce7f3, #fbcfe8)',
    featured: false,
  },
  {
    id: 'stock-bot',
    name: 'Stock Line Bot',
    description: 'LINE 股票分析機器人，整合技術分析（7日/30日）、新聞摘要與走勢判斷，以自然語言回應查詢。',
    tags: ['Python', 'LINE Messaging API', 'yFinance'],
    githubUrl: 'https://github.com/eason/stock-bot',
    emoji: '📈',
    bgGradient: 'linear-gradient(135deg, #e0f2fe, #bae6fd)',
    featured: false,
  },
  {
    id: 'marketing-website',
    name: 'Marketing Website',
    description: '全方位行銷網站，含服務介紹二級頁面、LINE AI 客服引導、數據報表展示與廣告投放代操說明。',
    tags: ['HTML/CSS/JS', 'Formspree', 'LINE API'],
    githubUrl: 'https://github.com/eason/marketing-website',
    emoji: '🎯',
    bgGradient: 'linear-gradient(135deg, #f3e8ff, #e9d5ff)',
    featured: false,
  },
];
