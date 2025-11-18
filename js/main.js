const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__links");
const yearEl = document.getElementById("year");
const skillBars = document.querySelectorAll(".skill .bar span");
const langButtons = document.querySelectorAll(".lang-switcher__btn");
const i18nElements = document.querySelectorAll("[data-i18n]");

const translations = {
    zh: {
        "meta.title": "WMikeboy｜GitHub 個人履歷",
        "meta.description": "WMikeboy 的個人履歷網站，包含經歷、技能、專案與聯絡方式。",
        "brand.name": "WMikeboy",
        "nav.about": "關於我",
        "nav.experience": "經歷",
        "nav.github": "GitHub",
        "nav.skills": "技能",
        "nav.projects": "專案",
        "nav.contact": "聯絡",
        "nav.toggle": "開啟導覽選單",
        "hero.eyebrow": "GitHub 創作者 · 前端學習者",
        "hero.lead": "熱衷透過 Vue、GitHub Pages 與 TypeScript 實作各式小專案，將學習筆記直接部署成可分享的作品。",
        "hero.cta.primary": "查看作品",
        "hero.cta.secondary": "GitHub",
        "hero.meta.repos.label": "公開 Repo",
        "hero.meta.repos.value": "3（HTML / TypeScript）",
        "hero.meta.updated.label": "最近更新",
        "hero.meta.updated.value": "myvuesite · 2025-11",
        "hero.meta.joined.label": "加入 GitHub",
        "hero.meta.joined.value": "2022-04-05",
        "about.eyebrow": "ABOUT",
        "about.heading": "關於我",
        "about.description": "目前透過 GitHub 建立前端玩具專案，從靜態網站到行動介面皆親手完成。喜歡把想法快速轉成可部署的作品，並將每次實驗寫入 repo 版本歷史。",
        "about.value.title": "我能帶來的價值",
        "about.value.item1": "使用 Vue / 原生 HTML 建立快速可線上展示的頁面",
        "about.value.item2": "結合 GitHub Actions 與 Pages 進行自動化部署",
        "about.value.item3": "在 repo 中留下清楚的變更紀錄，方便追蹤迭代脈絡",
        "about.focus.title": "近期練習方向",
        "about.focus.item1": "Vue 介面模組化與設計系統雛形",
        "about.focus.item2": "GitHub Pages 靜態部署",
        "about.focus.item3": "TypeScript + Capacitor 行動應用雛形",
        "experience.eyebrow": "EXPERIENCE",
        "experience.heading": "學習里程",
        "experience.timeline1.period": "2025.11 - 現在",
        "experience.timeline1.title": "myvuesite｜作品總集",
        "experience.timeline1.desc": "這個 repo 保存了本頁面與其他前端練習，重點在於掌握語意化 HTML 與響應式排版。",
        "experience.timeline2.period": "2025.08",
        "experience.timeline2.title": "mobile｜TypeScript Prototype",
        "experience.timeline2.desc": "運用 TypeScript 製作行動介面的 UI 元件，練習模組化結構與跨平台輸出。",
        "experience.timeline3.period": "2025.05",
        "experience.timeline3.title": "Mygitpagesite｜GitHub Pages",
        "experience.timeline3.desc": "設定 GitHub Pages pipeline，嘗試把最小靜態網頁部署到公開網址。",
        "stats.eyebrow": "GITHUB",
        "stats.heading": "帳號快照",
        "stats.description.prefix": "依據 ",
        "stats.description.suffix": " 公開資料更新（2025-11-18）。",
        "stats.link": "github.com/WMikeboy",
        "stats.card.repos.label": "公開 Repo",
        "stats.card.repos.value": "3",
        "stats.card.repos.detail": "myvuesite · Mygitpagesite · mobile",
        "stats.card.langs.label": "主要語言",
        "stats.card.langs.value": "HTML · TypeScript",
        "stats.card.langs.detail": "著重前端介面與行動開發練習。",
        "stats.card.follow.label": "Followers / Following",
        "stats.card.follow.value": "0 / 1",
        "stats.card.follow.detail": "持續追蹤前端相關帳號，吸收新技巧。",
        "stats.card.joined.label": "加入年份",
        "stats.card.joined.value": "2022",
        "stats.card.joined.detail": "自 2022 起在 GitHub 累積開源學習歷程。",
        "skills.eyebrow": "SKILLS",
        "skills.heading": "技能矩陣",
        "skills.section.product": "產品與設計",
        "skills.section.tech": "技術",
        "skills.section.tools": "工具",
        "skills.product.strategy": "產品策略",
        "skills.product.uxui": "UX / UI 設計",
        "skills.product.system": "Design System",
        "skills.tech.frontend": "Vue / React",
        "skills.tech.ts": "TypeScript",
        "skills.tech.api": "Node / API",
        "projects.eyebrow": "PROJECTS",
        "projects.heading": "精選專案",
        "projects.item1.tag": "HTML · CSS",
        "projects.item1.desc": "完整的個人介紹網站範本，持續迭代內容與樣式，練習響應式版型。",
        "projects.item1.link": "前往 Repo →",
        "projects.item2.tag": "GitHub Pages",
        "projects.item2.desc": "使用 GitHub Pages 發布的極簡著陸頁，專注在部署流程與資源最小化。",
        "projects.item2.link": "查看原始碼 →",
        "projects.item3.tag": "TypeScript",
        "projects.item3.desc": "行動 UI 元件實驗室，嘗試將 TypeScript 與行動框架整合，打造快速互動。",
        "projects.item3.link": "閱讀筆記 →",
        "contact.eyebrow": "CONTACT",
        "contact.heading": "一起打造下一個體驗",
        "contact.description": "若你正在尋找能一起實驗前端技術或部署流程的夥伴，歡迎在 GitHub 或 email 上聯絡。",
        "contact.info.email.label": "Email",
        "contact.info.github.label": "GitHub",
        "contact.info.separator": "：",
        "contact.form.name.label": "您的名字",
        "contact.form.name.placeholder": "例如：王小明",
        "contact.form.email.label": "聯絡 Email",
        "contact.form.email.placeholder": "you@email.com",
        "contact.form.message.label": "訊息",
        "contact.form.message.placeholder": "想合作的內容或想聊的主題",
        "contact.form.button": "送出訊息",
        "footer.copy": "WMikeboy · Powered by GitHub Pages."
    },
    en: {
        "meta.title": "WMikeboy | GitHub Portfolio",
        "meta.description": "Resume-style site for WMikeboy with experience, skills, projects, and contact links.",
        "brand.name": "WMikeboy",
        "nav.about": "About",
        "nav.experience": "Experience",
        "nav.github": "GitHub",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "nav.contact": "Contact",
        "nav.toggle": "Open navigation menu",
        "hero.eyebrow": "GitHub Creator · Front-end Learner",
        "hero.lead": "I build bite-sized experiments with Vue, GitHub Pages, and TypeScript, shipping them as shareable demos.",
        "hero.cta.primary": "View projects",
        "hero.cta.secondary": "GitHub",
        "hero.meta.repos.label": "Public repos",
        "hero.meta.repos.value": "3 (HTML / TypeScript)",
        "hero.meta.updated.label": "Last update",
        "hero.meta.updated.value": "myvuesite · Nov 2025",
        "hero.meta.joined.label": "Joined GitHub",
        "hero.meta.joined.value": "Apr 05, 2022",
        "about.eyebrow": "ABOUT",
        "about.heading": "About",
        "about.description": "I treat GitHub as my front-end playground, from static pages to mobile UIs, and document every iteration in commit history.",
        "about.value.title": "How I add value",
        "about.value.item1": "Ship shareable pages fast with Vue or semantic HTML",
        "about.value.item2": "Automate deployments through GitHub Actions and Pages",
        "about.value.item3": "Keep transparent change logs for every experiment",
        "about.focus.title": "Current focus",
        "about.focus.item1": "Modular Vue components and design system seeds",
        "about.focus.item2": "Reliable GitHub Pages deployments",
        "about.focus.item3": "TypeScript + Capacitor mobile prototypes",
        "experience.eyebrow": "EXPERIENCE",
        "experience.heading": "Learning journey",
        "experience.timeline1.period": "Nov 2025 – Present",
        "experience.timeline1.title": "myvuesite | Work-in-progress hub",
        "experience.timeline1.desc": "This repo houses this page and other practice projects focused on semantic HTML and responsive layouts.",
        "experience.timeline2.period": "Aug 2025",
        "experience.timeline2.title": "mobile | TypeScript prototype",
        "experience.timeline2.desc": "Built mobile UI components with TypeScript to exercise modular structure and cross-platform output.",
        "experience.timeline3.period": "May 2025",
        "experience.timeline3.title": "Mygitpagesite | GitHub Pages",
        "experience.timeline3.desc": "Set up the Pages pipeline to publish a minimal landing page to a public URL.",
        "stats.eyebrow": "GITHUB",
        "stats.heading": "Account snapshot",
        "stats.description.prefix": "Data refreshed from ",
        "stats.description.suffix": " on 2025-11-18.",
        "stats.link": "github.com/WMikeboy",
        "stats.card.repos.label": "Public repos",
        "stats.card.repos.value": "3",
        "stats.card.repos.detail": "myvuesite · Mygitpagesite · mobile",
        "stats.card.langs.label": "Key languages",
        "stats.card.langs.value": "HTML · TypeScript",
        "stats.card.langs.detail": "Focused on front-end interfaces and mobile experiments.",
        "stats.card.follow.label": "Followers / Following",
        "stats.card.follow.value": "0 / 1",
        "stats.card.follow.detail": "Following front-end builders to keep learning.",
        "stats.card.joined.label": "Joined in",
        "stats.card.joined.value": "2022",
        "stats.card.joined.detail": "Documenting my open-source journey since 2022.",
        "skills.eyebrow": "SKILLS",
        "skills.heading": "Skill matrix",
        "skills.section.product": "Product & Design",
        "skills.section.tech": "Technology",
        "skills.section.tools": "Tools",
        "skills.product.strategy": "Product strategy",
        "skills.product.uxui": "UX / UI design",
        "skills.product.system": "Design system",
        "skills.tech.frontend": "Vue / React",
        "skills.tech.ts": "TypeScript",
        "skills.tech.api": "Node / API",
        "projects.eyebrow": "PROJECTS",
        "projects.heading": "Featured projects",
        "projects.item1.tag": "HTML · CSS",
        "projects.item1.desc": "A full personal profile template that keeps evolving to test responsive ideas.",
        "projects.item1.link": "View repo →",
        "projects.item2.tag": "GitHub Pages",
        "projects.item2.desc": "A minimal landing page used to practice the GitHub Pages workflow.",
        "projects.item2.link": "See source →",
        "projects.item3.tag": "TypeScript",
        "projects.item3.desc": "Mobile UI component lab that mixes TypeScript with mobile-friendly frameworks.",
        "projects.item3.link": "Read notes →",
        "contact.eyebrow": "CONTACT",
        "contact.heading": "Build the next experiment",
        "contact.description": "Let’s chat if you want to explore front-end ideas or deployment flows together.",
        "contact.info.email.label": "Email",
        "contact.info.github.label": "GitHub",
        "contact.info.separator": ":",
        "contact.form.name.label": "Your name",
        "contact.form.name.placeholder": "e.g., Alex Wang",
        "contact.form.email.label": "Contact email",
        "contact.form.email.placeholder": "you@email.com",
        "contact.form.message.label": "Message",
        "contact.form.message.placeholder": "Topic you’d like to discuss",
        "contact.form.button": "Send message",
        "footer.copy": "WMikeboy · Powered by GitHub Pages."
    },
    ja: {
        "meta.title": "WMikeboy｜GitHub ポートフォリオ",
        "meta.description": "WMikeboy の経歴・スキル・プロジェクト・連絡先をまとめた自己紹介サイトです。",
        "brand.name": "WMikeboy",
        "nav.about": "自己紹介",
        "nav.experience": "経歴",
        "nav.github": "GitHub",
        "nav.skills": "スキル",
        "nav.projects": "プロジェクト",
        "nav.contact": "連絡先",
        "nav.toggle": "ナビゲーションメニューを開く",
        "hero.eyebrow": "GitHub クリエイター・フロントエンド学習者",
        "hero.lead": "Vue と GitHub Pages、TypeScript を使って小さな実験を形にし、すぐ共有できる作品として公開しています。",
        "hero.cta.primary": "作品を見る",
        "hero.cta.secondary": "GitHub",
        "hero.meta.repos.label": "公開リポジトリ",
        "hero.meta.repos.value": "3（HTML / TypeScript）",
        "hero.meta.updated.label": "最新更新",
        "hero.meta.updated.value": "myvuesite · 2025年11月",
        "hero.meta.joined.label": "GitHub 参加日",
        "hero.meta.joined.value": "2022-04-05",
        "about.eyebrow": "ABOUT",
        "about.heading": "私について",
        "about.description": "GitHub をフロントエンドの実験場として使い、静的サイトからモバイル UI まで手を動かしながら学んでいます。毎回の試行錯誤をコミット履歴に残しています。",
        "about.value.title": "提供できる価値",
        "about.value.item1": "Vue や HTML で素早く共有可能なページを作成",
        "about.value.item2": "GitHub Actions / Pages で自動デプロイを構築",
        "about.value.item3": "リポジトリに詳細な変更履歴を残し、学びを可視化",
        "about.focus.title": "最近のフォーカス",
        "about.focus.item1": "Vue コンポーネントのモジュール化とデザインシステムの種づくり",
        "about.focus.item2": "GitHub Pages による安定した公開",
        "about.focus.item3": "TypeScript と Capacitor を用いたモバイル試作",
        "experience.eyebrow": "EXPERIENCE",
        "experience.heading": "学習の歩み",
        "experience.timeline1.period": "2025年11月 - 現在",
        "experience.timeline1.title": "myvuesite｜作品ハブ",
        "experience.timeline1.desc": "セマンティック HTML とレスポンシブ設計を磨くための練習成果をまとめています。",
        "experience.timeline2.period": "2025年8月",
        "experience.timeline2.title": "mobile｜TypeScript プロトタイプ",
        "experience.timeline2.desc": "TypeScript でモバイル UI コンポーネントを実装し、モジュール構造とクロスプラットフォーム対応を学習。",
        "experience.timeline3.period": "2025年5月",
        "experience.timeline3.title": "Mygitpagesite｜GitHub Pages",
        "experience.timeline3.desc": "最小構成のランディングページを GitHub Pages で公開するパイプラインを整備。",
        "stats.eyebrow": "GITHUB",
        "stats.heading": "アカウント概要",
        "stats.description.prefix": "参照：",
        "stats.description.suffix": " （2025-11-18 時点）。",
        "stats.link": "github.com/WMikeboy",
        "stats.card.repos.label": "公開リポジトリ",
        "stats.card.repos.value": "3",
        "stats.card.repos.detail": "myvuesite · Mygitpagesite · mobile",
        "stats.card.langs.label": "主な言語",
        "stats.card.langs.value": "HTML · TypeScript",
        "stats.card.langs.detail": "フロントエンド UI とモバイル開発の学習に集中。",
        "stats.card.follow.label": "フォロワー / フォロー",
        "stats.card.follow.value": "0 / 1",
        "stats.card.follow.detail": "フロントエンド分野の開発者をフォローしてインプット。",
        "stats.card.joined.label": "登録年",
        "stats.card.joined.value": "2022",
        "stats.card.joined.detail": "2022 年から GitHub で学習記録を公開。",
        "skills.eyebrow": "SKILLS",
        "skills.heading": "スキルマトリクス",
        "skills.section.product": "プロダクト / デザイン",
        "skills.section.tech": "テクノロジー",
        "skills.section.tools": "ツール",
        "skills.product.strategy": "プロダクト戦略",
        "skills.product.uxui": "UX / UI デザイン",
        "skills.product.system": "デザインシステム",
        "skills.tech.frontend": "Vue / React",
        "skills.tech.ts": "TypeScript",
        "skills.tech.api": "Node / API",
        "projects.eyebrow": "PROJECTS",
        "projects.heading": "注目プロジェクト",
        "projects.item1.tag": "HTML · CSS",
        "projects.item1.desc": "自己紹介サイトのテンプレートとして運用し、レスポンシブ案を継続的に検証。",
        "projects.item1.link": "リポジトリを見る →",
        "projects.item2.tag": "GitHub Pages",
        "projects.item2.desc": "GitHub Pages の公開フローを学ぶためのミニマムなランディングページ。",
        "projects.item2.link": "ソースコード →",
        "projects.item3.tag": "TypeScript",
        "projects.item3.desc": "TypeScript とモバイル向けフレームワークを組み合わせた UI 実験室。",
        "projects.item3.link": "ノートを読む →",
        "contact.eyebrow": "CONTACT",
        "contact.heading": "次の体験を一緒に",
        "contact.description": "フロントエンドやデプロイの実験に興味があれば、GitHub かメールで気軽にご連絡ください。",
        "contact.info.email.label": "Email",
        "contact.info.github.label": "GitHub",
        "contact.info.separator": "：",
        "contact.form.name.label": "お名前",
        "contact.form.name.placeholder": "例：山田太郎",
        "contact.form.email.label": "メールアドレス",
        "contact.form.email.placeholder": "you@email.com",
        "contact.form.message.label": "メッセージ",
        "contact.form.message.placeholder": "相談したい内容や話題",
        "contact.form.button": "メッセージを送信",
        "footer.copy": "WMikeboy · GitHub Pages で公開。"
    }
};

const languageMap = {
    zh: "zh-Hant",
    en: "en",
    ja: "ja"
};

const setLanguage = (lang) => {
    const dict = translations[lang] ?? translations.zh;
    i18nElements.forEach((el) => {
        const key = el.dataset.i18n;
        const value = dict[key];
        if (!value) return;
        const attr = el.dataset.i18nAttr;
        if (attr) {
            el.setAttribute(attr, value);
        } else {
            el.textContent = value;
        }
    });

    document.documentElement.lang = languageMap[lang] ?? "en";
    if (dict["meta.title"]) {
        document.title = dict["meta.title"];
    }
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription && dict["meta.description"]) {
        metaDescription.setAttribute("content", dict["meta.description"]);
    }

    localStorage.setItem("wm-lang", lang);
    langButtons.forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });
};

const initialLang = localStorage.getItem("wm-lang") || "zh";
setLanguage(initialLang);

langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const lang = btn.dataset.lang;
        if (lang) {
            setLanguage(lang);
        }
    });
});

if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });
}

if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

const animateSkills = (entries, observer) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const bar = entry.target.querySelector("span");
        const value = entry.target.parentElement?.dataset.skill;
        if (bar && value) {
            bar.style.width = `${value}%`;
        }
        observer.unobserve(entry.target);
    });
};

const observer = new IntersectionObserver(animateSkills, {
    threshold: 0.4,
});

skillBars.forEach((bar) => {
    const parent = bar.parentElement;
    if (parent) {
        observer.observe(parent);
    }
});

const links = document.querySelectorAll(".nav__links a");
links.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});
