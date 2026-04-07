export interface Project {
  id: string;
  name: string;
  description: string;
  tags: string[];          // 功能描述 tag（非技術棧）
  category: string;        // 必須完全對應 CATEGORY_ORDER 其中一個值
  githubUrl?: string;
  demoUrl?: string;
  thumbnail?: string;
  emoji?: string;
  bgGradient?: string;
  featured: boolean;
  flowchartSvg?: string;   // 預生成 SVG 路徑（/flowcharts/xxx.svg），有值時「詳細介紹」改為 Modal
}

export const projects: Project[] = [
  // ── AI 開發工具 ──
  {
    id: 'claude-workflow',
    name: 'Claude 工作流',
    description: '透過 Claude Code + 自定義 Skill，打造 PRD → Tech Spec → 實作 → 代碼審查的完整 AI 輔助開發流程，涵蓋 backlog 管理、復盤機制與自動化部署。',
    tags: ['AI 開發流程', 'Prompt Engineering', 'Skill 設計'],
    category: 'AI 開發工具',
    githubUrl: 'https://github.com/eason/claude-workflow',
    emoji: '🧠',
    flowchartSvg: '/flowcharts/claude-workflow.svg',
    bgGradient: 'linear-gradient(135deg, #ede9fe, #dbeafe)',
    featured: true,
  },

  // ── LINE 聊天機器人 ──
  {
    id: 'faq-bot-mvp',
    name: 'FAQ Bot MVP',
    description: '基於 RAG 架構的 LINE FAQ 機器人，將知識庫文件向量化後，自動回答用戶問題，支援多輪對話與未知問題轉人工。',
    tags: ['FAQ 機器人', 'RAG 知識庫', 'LINE Bot'],
    category: 'LINE 聊天機器人',
    githubUrl: 'https://github.com/eason/faq-bot-mvp',
    emoji: '🤖',
    flowchartSvg: '/flowcharts/faq-bot-mvp.svg',
    bgGradient: 'linear-gradient(135deg, #d1fae5, #a7f3d0)',
    featured: false,
  },
  {
    id: 'news-bot',
    name: 'News Bot',
    description: 'LINE 新聞推送機器人，每日定時抓取加密貨幣 / 財經新聞，以 AI 摘要後自動推播至指定群組。',
    tags: ['新聞推送', '自動化', 'LINE Bot'],
    category: 'LINE 聊天機器人',
    githubUrl: 'https://github.com/eason/news-bot',
    emoji: '📰',
    flowchartSvg: '/flowcharts/news-bot.svg',
    bgGradient: 'linear-gradient(135deg, #e0f2fe, #bae6fd)',
    featured: false,
  },

  // ── 數據分析 ──
  {
    id: 'ad-analytics',
    name: 'Ad Analytics Dashboard',
    description: '廣告數據分析報表，讀取 Google Sheets 數據，自動生成 AI 週報，支援多渠道 KPI 追蹤與圖表視覺化。',
    tags: ['廣告數據分析', '自動化報表', 'AI 週報'],
    category: '數據分析',
    githubUrl: 'https://github.com/eason/ad-analytics',
    demoUrl: '/demo/ad-analytics.html',
    emoji: '📊',
    bgGradient: 'linear-gradient(135deg, #dbeafe, #ede9fe)',
    featured: true,
    flowchartSvg: '/flowcharts/ad-analytics.svg',
  },

  // ── 內容 / 媒體自動化 ──
  {
    id: 'video-auto',
    name: 'Video Auto Pipeline',
    description: 'AI 自動生成短影片 Pipeline：輸入腳本後自動完成 TTS 配音、AI 圖片生成、字幕嵌入與影片合成，輸出可直接發布的 Reels / 短影片。',
    tags: ['AI 影片生成', 'TTS', '自動化'],
    category: '內容 / 媒體自動化',
    githubUrl: 'https://github.com/eason/video-auto',
    demoUrl: 'https://www.instagram.com/crypto_leekman/',
    emoji: '🎬',
    flowchartSvg: '/flowcharts/video-auto.svg',
    bgGradient: 'linear-gradient(135deg, #f3e8ff, #e9d5ff)',
    featured: false,
  },
  {
    id: 'ppt-maker',
    name: 'PPT Maker',
    description: '將文章自動拆解為分鏡表，再依 Polaris 風格規範生成 .pptx，一鍵完成從文字到簡報的全流程。',
    tags: ['簡報自動化', 'AI 生成', '分鏡設計'],
    category: '內容 / 媒體自動化',
    githubUrl: 'https://github.com/eason/ppt-maker',
    demoUrl: 'https://www.instagram.com/crypto_leekman/',
    emoji: '🖥️',
    flowchartSvg: '/flowcharts/ppt-maker.svg',
    bgGradient: 'linear-gradient(135deg, #fce7f3, #fbcfe8)',
    featured: false,
  },
  {
    id: 'blockchain-layman',
    name: '區塊鏈白話文',
    description: '針對幣圈小白的區塊鏈知識網站，Astro 驅動，收錄 20+ 篇原創文章、Glossary 術語頁，已部署至 Vercel。',
    tags: ['知識型網站', '區塊鏈教育', '內容創作'],
    category: '內容 / 媒體自動化',
    githubUrl: 'https://github.com/eason/blockchain-layman',
    demoUrl: 'https://blockchain-layman.vercel.app',
    emoji: '🌐',
    flowchartSvg: '/flowcharts/blockchain-layman.svg',
    bgGradient: 'linear-gradient(135deg, #d1fae5, #a7f3d0)',
    featured: true,
  },
];
