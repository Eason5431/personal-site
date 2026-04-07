export interface ExperienceSection {
  heading?: string;
  bullets: string[];
}

export interface WorkExperience {
  period: string;
  role: string;
  company: string;
  sections: ExperienceSection[];
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

export interface CertificationGroup {
  label: string;
  primary: string[];
  secondary: string[];
  column?: boolean;
}

export interface Resume {
  experiences: WorkExperience[];
  skillGroups: SkillGroup[];
  education: Education[];
  certifications: CertificationGroup[];
}

export const resume: Resume = {
  experiences: [
    {
      period: '2025/11 — 2026/04',
      role: '資深產品經理',
      company: 'WEEX International Exchange',
      sections: [
        {
          heading: 'AI 研發體系與效能優化',
          bullets: [
            '利用 Claude Code 打造引導式需求框架與產品復盤知識庫，確保 PRD 覆蓋 100% 邊際場景，縮短交付週期 40% 並降低 30% 需求變更率',
            '將 AI 提效經驗轉化為標準 SOP 於部門推廣，帶動產品團隊轉型為 AI-First 工作模式，極大化研發產能',
          ],
        },
        {
          heading: '產品增長與用戶體驗',
          bullets: [
            '主導登錄註冊流程大改版，透過 A/B Testing 優化用戶旅程，成功提升 20% 註冊轉化率',
            '重新設計充值與提幣流程介面，減少用戶操作摩擦力，成功減少 15% 充值跳出率',
          ],
        },
      ],
    },
    {
      period: '2024/10 — 2025/07',
      role: '商業分析師',
      company: 'Digifinex Digital Assets Exchange（藍智天際顧問有限公司）',
      sections: [
        {
          heading: '數據治理與決策賦能',
          bullets: [
            '實作全用戶生命週期監控，主導從數據埋點到 BI 儀表板的上線，支持跨部門每日 10+ 需求決策',
            '透過跨部門深度訪談對齊數據痛點，建立統一的核心觀測指標，達成全公司數據口徑一致化',
          ],
        },
        {
          heading: '用戶增長與營收優化',
          bullets: [
            '分析用戶轉化瓶頸並優化交易路徑，達成 MAU 增長 150% 與槓桿交易量提升 30%',
            '透過行為數據識別高潛力轉化族群，實施精準分層營銷，提升 12% 高價值用戶活躍度',
          ],
        },
      ],
    },
    {
      period: '2022/10 — 2024/10',
      role: '軟體專案經理／產品經理',
      company: 'MEXC Global Exchange（邁德弗科技有限公司）',
      sections: [
        {
          heading: 'AI 創新與營運自動化',
          bullets: [
            '建構專案管理分析平台，將數據轉化為團隊決策之核心指標，實現研發效能透明化，覆蓋 200+ 內部用戶',
            '主導自研 AI 客服系統，導入 RAG 框架建構客服知識庫，成功減少 15% 人工進線量',
          ],
        },
        {
          heading: '產品戰略規劃與交付管理',
          bullets: [
            '負責客服系統 / 運營系統 / 代理系統之產品，協作跨職能團隊（前端、後端、QA）共 30-40 人',
            '於 18 個月內達成平均交付率 ≥ 90% 且維持重大事故 ≤ 4 次的高穩定紀錄',
          ],
        },
      ],
    },
    {
      period: '2020/06 — 2022/09',
      role: '軟體產品經理',
      company: '明基佳世達集團 - 星益欣數位服務股份有限公司',
      sections: [
        {
          bullets: [
            '全通路系統產品規劃＆專案管理，負責產品：KIOSK / CRM / mPOS 行動點餐機',
            '收集與分析客戶需求，針對客戶需求規劃產品解決方案',
            '專案成果：佐登妮絲觀光工廠 KIOSK 導入 / 鬍鬚張票券功能 / 健身工廠 Kiosk 自助申辦 / 富足康計畫案 CRM 導入顧問',
          ],
        },
      ],
    },
  ],
  skillGroups: [
    {
      label: 'AI 產品實踐',
      primary: ['Claude Code', '引導式需求分析', 'PRD 自動化框架'],
      secondary: ['RAG'],
    },
    {
      label: '產品 & 專案管理',
      primary: ['Figma', 'Scrum'],
      secondary: ['Axure RP', 'Jira', 'Kanban'],
    },
    {
      label: '數據分析',
      primary: ['SQL', 'Tableau', 'Power BI'],
      secondary: ['MySQL', 'Clickhouse', 'Python', 'Excel', 'Google Analytics'],
    },
  ],
  certifications: [
    {
      label: '專案管理',
      primary: ['PMI-ACP 敏捷式專案管理師證照', 'PMI-PMP 國際專案管理師認證'],
      secondary: [],
      column: true,
    },
    {
      label: 'Google',
      primary: ['Google Analytics(分析)個人認證'],
      secondary: ['Google Ads 搜尋廣告認證'],
    },
    {
      label: '其他',
      primary: [],
      secondary: ['台北市街頭藝人證', '中華民國桌球協會C級運動教練證'],
    },
  ],
  education: [
    {
      degree: 'AI/Big Data 資料分析師班',
      school: '資訊工業資策會數位教育研究所',
      year: '2019',
    },
    {
      degree: '企業管理學系',
      school: '東吳大學',
      year: '2015 — 2019',
    },
  ],
};
