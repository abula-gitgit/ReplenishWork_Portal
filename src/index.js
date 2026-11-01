// Replenish for Work Multi-Language Portal Worker
// Host: rpw.easy-log.app

const DOMAIN = "rpw.easy-log.app";
const URL_RPW_JP = "https://rpwjp.easy-log.app/";
const URL_RPW_EN = "https://rpwen.easy-log.app/";
const URL_RPW_FR = "https://rpwfr.easy-log.app/";
const URL_RP_PORTAL = "https://rp.easy-log.app/";
const URL_RP_JP = "https://rpjp.easy-log.app/";
const URL_RP_EN = "https://rpen.easy-log.app/";

const LANG_CONFIG = {
  ja: {
    code: "ja",
    label: "日本語",
    flag: "🇯🇵",
    homePath: "/",
    privacyPath: "/privacy",
    termsPath: "/terms",
    aboutPath: "/about",
    contactPath: "/contact",
    guidePath: "/guide",
    brandTitle: "Replenish for Work",
    brandSubtitle: "業務・現場向け 備品サイクル管理ポータル",
    pageTitle: "Replenish for Work ポータル - オフィス・現場・医療の消耗品・備品交換サイクル管理 | 完全無料・安心のローカル保存",
    pageDesc: "オフィス備品から医療器具・店舗資材・工場消耗品まで、業務に不可欠な消耗品の次回交換日と発注準備日を自動計算＆リマインド。登録不要・完全無料で今すぐ現場導入。",
    heroBadge: "現場の在庫切れ・交換漏れ・発注遅れをゼロへ",
    heroTitle: '現場とオフィスの消耗品サイクルを、<br><span class="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">迷わず・スマートに自動管理。</span>',
    heroDesc: "オフィス備品、医療・クリニック用品、飲食店の衛生資材、工場の保守品など。切らしてはならない業務用消耗品の「次回交換日」と「発注準備日」をリードタイムから自動算出しリマインドします。",
    navHome: "ホーム",
    navIndustries: "対応業種",
    navFeatures: "特長",
    navFaq: "よくある質問",
    navLaunch: "アプリを起動",
    
    launchJpTitle: "Replenish for Work（日本語版）",
    launchJpBtn: "日本語版アプリを開く（無料）",
    launchEnTitle: "Replenish for Work (English)",
    launchEnBtn: "Launch English Edition (Free)",
    launchFrTitle: "Replenish for Work (Français)",
    launchFrBtn: "Lancer l'application française (Gratuit)",

    industriesBadge: "業種別プリセットですぐに使える",
    industriesTitle: "あらゆるビジネス現場の消耗品に対応",
    industriesSub: "ワンクリックで各業界特有の交換周期や消耗品リストを反映。業務に合わせて自由にカスタマイズ可能です。",

    industries: [
      {
        icon: "🏢",
        name: "オフィス・総務",
        desc: "コピー用紙、トナーカートリッジ、シュレッダーオイル、ホワイトボードマーカー、給茶機フィルターなど",
        tag: "管理コスト削減"
      },
      {
        icon: "🏥",
        name: "医療・クリニック・薬局",
        desc: "医療用手袋、消毒液、オートクレーブ滅菌パック、シリンジ、吸引チューブ、使い捨てマスクなど",
        tag: "衛生・安全管理"
      },
      {
        icon: "🍽️",
        name: "飲食・カフェ・厨房",
        desc: "浄水フィルター、キッチン洗剤、アルコール製剤、油こし紙、衛生手袋、吸油スポンジなど",
        tag: "HACCP・衛生維持"
      },
      {
        icon: "💇",
        name: "サロン・美容・理容",
        desc: "クロス、イヤーキャップ、使い捨てタオル、カラーリング備品、除菌液、替刃など",
        tag: "接客品質向上"
      },
      {
        icon: "🏭",
        name: "製造・工場・メンテナンス",
        desc: "パーツクリーナー、工業用ウエス、研磨シート、保護メガネ、防塵マスク、潤滑オイルなど",
        tag: "ダウンタイム防止"
      },
      {
        icon: "🏨",
        name: "ホテル・宿泊施設",
        desc: "客室アメニティ、客室清掃用ケミカル、スリッパ、空気清浄機加湿フィルター、リネン類など",
        tag: "清潔感・稼働率向上"
      }
    ],

    featuresBadge: "選ばれる4つの強み",
    featuresTitle: "なぜ Replenish for Work なのか",
    feat1Title: "発注リードタイムを考慮した事前リマインド",
    feat1Desc: "「使い切ってから発注する」では現場が止まります。納品までの猶予日数を逆算し、適切なタイミングで「発注準備日」をお知らせします。",
    feat2Title: "完全端末内保存（高セキュリティ・外部送信ゼロ）",
    feat2Desc: "登録データはお使いの端末のブラウザ内（IndexedDB）にのみ暗号化保存。社外サーバーやクラウドへの情報漏洩リスクが根本的にありません。",
    feat3Title: "PWA対応・現場のタブレットで即時稼働",
    feat3Desc: "ホーム画面に追加すれば、アプリストアを通さずネイティブアプリのように起動。電波の届きにくい地下倉庫や工場内でもオフラインで快適に動作します。",
    feat4Title: "完全無料・登録不要ですぐ運用開始",
    feat4Desc: "ユーザー登録やアカウント作成、初期費用・月額利用料は一切不要。URLを開くだけで今日から現場で実運用できます。",

    faqBadge: "FAQ",
    faqTitle: "よくあるご質問",
    faqs: [
      {
        q: "Q. 企業の機密情報や発注データが社外に漏洩する心配はありませんか？",
        a: "ありません。Replenish for Workはサーバーレス・ローカル完結型アーキテクチャを採用しており、登録された品名、保管場所、価格、発注先などのデータはすべて操作端末のブラウザ内部（IndexedDB）にのみ保存されます。外部サーバーへの送信は一切行われません。"
      },
      {
        q: "Q. 複数台の端末（PCや現場のタブレット）でデータを移行・共有できますか？",
        a: "はい。設定画面からワンタップで「バックアップ（JSON）」のエクスポートおよびインポートが可能です。定期的なバックアップや、別端末への環境移行も簡単に行えます。"
      },
      {
        q: "Q. 本当に完全無料で使い続けられますか？",
        a: "はい。すべての機能を無料・無制限でご利用いただけます。アカウント課金やアイテム数制限などの課金要素は一切ありません。"
      },
      {
        q: "Q. 個人向けReplenish（家庭用）との違いは何ですか？",
        a: "個人向け「Replenish」が家庭の日用品サイクルに特化しているのに対し、「Replenish for Work」は納品リードタイムの考慮、業種別プリセット、保管場所別の分類、発注点アラートなど、ビジネス・現場の運用に最適化されています。"
      }
    ],

    ctaTitle: "今日から現場の「備品切れ」トラブルをゼロに。",
    ctaDesc: "面倒な手続きや初期設定は一切不要。今すぐ現場のブラウザから無料で使い始められます。",
    ctaBtn: "今すぐ Replenish for Work を始める",
    familyTitle: "個人・家庭向けモデルもご利用いただけます",
    familyDesc: "ご家庭内の日用品・歯ブラシ・洗剤などの管理には、シンプルな「Replenish（家庭用）」をご活用ください。",
    familyBtn: "家庭用 Replenish ポータルを見る",

    footerDisclaimer: "Replenish for Work はビジネス現場・オフィスの消耗品交換・発注管理を支援するツールです。データはお使いのブラウザ内にのみ安全に保存されます。",
    privacyTitle: "プライバシーポリシー",
    termsTitle: "利用規約・免責事項",
    aboutTitle: "運営者情報",
    contactTitle: "お問い合わせ",
    guideTitle: "ご利用ガイド"
  },
  en: {
    code: "en",
    label: "English",
    flag: "🇺🇸",
    homePath: "/en",
    privacyPath: "/en/privacy",
    termsPath: "/en/terms",
    aboutPath: "/en/about",
    contactPath: "/en/contact",
    guidePath: "/en/guide",
    brandTitle: "Replenish for Work",
    brandSubtitle: "Workplace Consumables Cycle Manager Portal",
    pageTitle: "Replenish for Work Portal - Office, Clinic & Facility Consumable Cycle Manager | 100% Free & Private",
    pageDesc: "Streamline consumable replacement cycles and reorder deadlines for offices, clinics, kitchens, and workshops. Auto-calculate swap dates and buffer lead times. 100% free and local.",
    heroBadge: "Eliminate Stockouts & Delayed Orders Across Workplaces",
    heroTitle: 'Keep workplace consumables and supplies<br><span class="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">effortlessly replenished.</span>',
    heroDesc: "From office supplies and clinical consumables to restaurant sanitation items and factory parts. Automatically calculate replacement dates and procurement deadlines based on lead times.",
    navHome: "Home",
    navIndustries: "Industries",
    navFeatures: "Features",
    navFaq: "FAQ",
    navLaunch: "Launch App",

    launchJpTitle: "Replenish for Work (Japanese)",
    launchJpBtn: "Launch Japanese App (Free)",
    launchEnTitle: "Replenish for Work (English)",
    launchEnBtn: "Launch English App (Free)",
    launchFrTitle: "Replenish for Work (French)",
    launchFrBtn: "Launch French App (Free)",

    industriesBadge: "Industry-Specific Presets",
    industriesTitle: "Tailored for Every Business Environment",
    industriesSub: "Apply industry-standard replenishment cycles with a single click, then customize easily for your team.",

    industries: [
      {
        icon: "🏢",
        name: "Corporate Office & Admin",
        desc: "Copy paper, toner cartridges, shredder oil, whiteboard markers, water cooler filters, cleaning wipes",
        tag: "Cost Efficiency"
      },
      {
        icon: "🏥",
        name: "Clinics, Dental & Pharmacy",
        desc: "Medical gloves, antiseptic solutions, autoclave sterilization pouches, syringes, disposable masks",
        tag: "Hygiene & Safety"
      },
      {
        icon: "🍽️",
        name: "Restaurants, Cafes & Kitchens",
        desc: "Water filters, grease trap strainers, sanitizer spray, food wrap, heavy-duty sponges, chef gloves",
        tag: "HACCP Compliance"
      },
      {
        icon: "💇",
        name: "Salons, Spas & Barber",
        desc: "Neck strips, disposable towels, tint bowls, disinfectant spray, clipper blades, foil wraps",
        tag: "Client Experience"
      },
      {
        icon: "🏭",
        name: "Manufacturing & Maintenance",
        desc: "Brake cleaner, industrial shop rags, abrasive pads, safety glasses, dust masks, lubricating oil",
        tag: "Zero Downtime"
      },
      {
        icon: "🏨",
        name: "Hotels & Hospitality",
        desc: "Guest room amenities, housekeeping chemicals, slippers, air purifier HEPA filters, laundry supplies",
        tag: "Quality Standards"
      }
    ],

    featuresBadge: "Core Advantages",
    featuresTitle: "Why Organizations Choose Replenish for Work",
    feat1Title: "Lead-Time Aware Procurement Alerts",
    feat1Desc: "Ordering when supplies run empty creates workflow halts. We reverse-calculate purchase prep dates using supplier lead times so you reorder just in time.",
    feat2Title: "100% Local & Secure (Zero Server Telemetry)",
    feat2Desc: "All inventory items, pricing, notes, and locations are stored exclusively in your device's browser (IndexedDB). Zero external leakage risk.",
    feat3Title: "PWA Ready & Offline First for Warehouses",
    feat3Desc: "Add to home screen on tablets and phones without an app store. Operates flawlessly in basements, stockrooms, and remote job sites without internet.",
    feat4Title: "100% Free with No Sign-Up Barrier",
    feat4Desc: "No logins, passwords, employee seat licenses, or subscription fees. Start tracking in seconds right from your browser.",

    faqBadge: "FAQ",
    faqTitle: "Frequently Asked Questions",
    faqs: [
      {
        q: "Q. Is company data safe from external leaks?",
        a: "Yes. Replenish for Work uses a privacy-first, client-only architecture. All item names, locations, costs, and vendor notes remain strictly within your device's browser storage (IndexedDB). No data is ever transmitted to remote servers."
      },
      {
        q: "Q. Can I migrate or back up data across multiple devices?",
        a: "Yes. You can export and import complete database backups in JSON format with a single click from the Settings menu, allowing seamless backup and migration."
      },
      {
        q: "Q. Is Replenish for Work truly free forever?",
        a: "Yes. All features are completely free with no user caps, item limits, or hidden subscriptions."
      },
      {
        q: "Q. What is the difference between standard Replenish and Replenish for Work?",
        a: "Standard Replenish is designed for household essentials. Replenish for Work adds supplier lead-time buffers, reorder thresholds, industry templates, and storage location tracking."
      }
    ],

    ctaTitle: "Eliminate Supply Shortages & Downtime Today.",
    ctaDesc: "Zero installation hurdles. Launch directly in your browser and start organizing your workplace.",
    ctaBtn: "Launch Replenish for Work Now",
    familyTitle: "Looking for Personal Household Use?",
    familyDesc: "Try standard Replenish for your personal bathroom, kitchen, and household routine supplies.",
    familyBtn: "View Household Replenish Portal",

    footerDisclaimer: "Replenish for Work assists organizations in scheduling consumable replacements and timely restocking. All data is kept securely on your local device.",
    privacyTitle: "Privacy Policy",
    termsTitle: "Terms of Service",
    aboutTitle: "About Us",
    contactTitle: "Contact",
    guideTitle: "User Guide"
  },
  fr: {
    code: "fr",
    label: "Français",
    flag: "🇫🇷",
    homePath: "/fr",
    privacyPath: "/fr/privacy",
    termsPath: "/fr/terms",
    aboutPath: "/fr/about",
    contactPath: "/fr/contact",
    guidePath: "/fr/guide",
    brandTitle: "Replenish for Work",
    brandSubtitle: "Portail de gestion des cycles de consommables & fournitures pro",
    pageTitle: "Portail Replenish for Work - Gestion des cycles de consommables & fournitures pro | 100% Gratuit & Privé",
    pageDesc: "Optimisez les cycles de remplacement et anticipez les réapprovisionnements pour bureaux, cliniques, restaurants et ateliers. Zéro rupture de stock, 100% sécurisé et local.",
    heroBadge: "Éliminez les ruptures de stock et les retards de commande",
    heroTitle: 'Gérez le réapprovisionnement de vos consommables pro<br><span class="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">avec fluidité et précision.</span>',
    heroDesc: "Fournitures de bureau, consommables médicaux, hygiène en restauration ou maintenance industrielle : calculez automatiquement les dates de renouvellement et anticipez les délais fournisseurs.",
    navHome: "Accueil",
    navIndustries: "Secteurs",
    navFeatures: "Avantages",
    navFaq: "FAQ",
    navLaunch: "Ouvrir l'application",

    launchJpTitle: "Replenish for Work (Japonais)",
    launchJpBtn: "Version japonaise (Gratuit)",
    launchEnTitle: "Replenish for Work (Anglais)",
    launchEnBtn: "Version anglaise (Gratuit)",
    launchFrTitle: "Replenish for Work (Français)",
    launchFrBtn: "Lancer l'application française (Gratuit)",

    industriesBadge: "Modèles sectoriels prêts à l'emploi",
    industriesTitle: "Conçu pour tous les environnements professionnels",
    industriesSub: "Appliquez en un clic les cycles et listes de consommables recommandés, puis personnalisez-les selon vos besoins.",

    industries: [
      {
        icon: "🏢",
        name: "Bureaux & Administratif",
        desc: "Papier d'impression, cartouches de toner, huile broyeur, feutres tableau blanc, cartouches fontaine à eau",
        tag: "Réduction des coûts"
      },
      {
        icon: "🏥",
        name: "Santé, Médical & Pharmacie",
        desc: "Gants médicaux, solution hydroalcoolique, sachets de stérilisation, seringues, masques chirurgicaux",
        tag: "Hygiène & Sécurité"
      },
      {
        icon: "🍽️",
        name: "Restauration, Cafés & Cuisine",
        desc: "Filtres à eau, dégraissants professionnels, désinfectants contact alimentaire, éponges industrielles",
        tag: "Conformité HACCP"
      },
      {
        icon: "💇",
        name: "Salons, Coiffure & Esthétique",
        desc: "Serviettes jetables, capes de protection, gants de coloration, lames rasoir, désinfectants outils",
        tag: "Qualité de service"
      },
      {
        icon: "🏭",
        name: "Ateliers, Usines & Maintenance",
        desc: "Nettoyant freins, chiffons industriels, disques abrasifs, lunettes de protection, lubrifiants",
        tag: "Zéro temps d'arrêt"
      },
      {
        icon: "🏨",
        name: "Hôtellerie & Hébergement",
        desc: "Produits d'accueil, produits ménagers professionnels, chaussons, filtres purificateurs d'air, linge",
        tag: "Standards d'excellence"
      }
    ],

    featuresBadge: "Points Forts",
    featuresTitle: "Pourquoi choisir Replenish for Work",
    feat1Title: "Alertes d'anticipation avec délai de livraison",
    feat1Desc: "Commander au moment où le stock est épuisé paralyse vos équipes. Nous calculons la date de commande idéale en intégrant les délais fournisseurs.",
    feat2Title: "100% Local & Sécurisé (Zéro transmission serveur)",
    feat2Desc: "Vos références, prix, emplacements et notes restent exclusivement enregistrés dans le navigateur de votre appareil (IndexedDB). Zéro risque de fuite.",
    feat3Title: "Compatible PWA & Fonctionnement 100% Hors-ligne",
    feat3Desc: "Installez l'application en un geste sur smartphone ou tablette. Fonctionne parfaitement dans les réserves aveugles, sous-sols ou ateliers sans réseau.",
    feat4Title: "100% Gratuit et sans inscription",
    feat4Desc: "Aucun compte requis, aucun identifiant, aucune licence par utilisateur, aucun abonnement. Démarrez immédiatement depuis votre navigateur.",

    faqBadge: "FAQ",
    faqTitle: "Questions Fréquentes",
    faqs: [
      {
        q: "Q. Les données de notre entreprise sont-elles protégées des fuites ?",
        a: "Absolument. Replenish for Work s'appuie sur une architecture exclusivement locale. L'ensemble des articles, coûts, fournisseurs et cycles de réapprovisionnement sont enregistrés dans l'IndexedDB de votre navigateur. Aucune donnée n'est transmise à des serveurs distants."
      },
      {
        q: "Q. Est-il possible de sauvegarder ou transférer les données vers un autre appareil ?",
        a: "Oui. Depuis le menu des paramètres, exportez ou importez l'intégralité de vos données sous la forme d'un fichier JSON en un clic pour vos sauvegardes et migrations."
      },
      {
        q: "Q. L'application est-elle réellement gratuite et sans frais cachés ?",
        a: "Oui. Toutes les fonctionnalités sont libres d'accès, sans limitation du nombre d'articles, sans compte payant ni frais d'abonnement."
      },
      {
        q: "Q. Quelle est la différence avec la version grand public Replenish ?",
        a: "Replenish standard est pensé pour les besoins du foyer. Replenish for Work intègre la gestion des délais de livraison fournisseurs, les seuils de réapprovisionnement, les modèles professionnels et le classement par zone de stockage."
      }
    ],

    ctaTitle: "Mettez fin dès aujourd'hui aux ruptures d'approvisionnement.",
    ctaDesc: "Aucune procédure complexe ni installation lourde. Lancez l'application gratuitement dans votre navigateur.",
    ctaBtn: "Démarrer Replenish for Work",
    familyTitle: "Vous recherchez une version pour votre foyer ?",
    familyDesc: "Découvrez la version Replenish standard pour le suivi des consommables de votre salle de bain, cuisine et entretien quotidien.",
    familyBtn: "Voir le portail Replenish pour la maison",

    footerDisclaimer: "Replenish for Work est un outil d'assistance pour le suivi et le réapprovisionnement des consommables d'entreprise. Vos données restent exclusivement stockées sur votre appareil.",
    privacyTitle: "Politique de confidentialité",
    termsTitle: "Conditions d'utilisation",
    aboutTitle: "À propos",
    contactTitle: "Contact",
    guideTitle: "Guide d'utilisation"
  }
};

function renderHeader(lang) {
  const cfg = LANG_CONFIG[lang] || LANG_CONFIG.ja;
  const langs = [
    { code: "ja", path: "/", flag: "🇯🇵", label: "JA" },
    { code: "en", path: "/en", flag: "🇺🇸", label: "EN" },
    { code: "fr", path: "/fr", flag: "🇫🇷", label: "FR" }
  ];

  let appUrl = URL_RPW_JP;
  if (lang === "en") appUrl = URL_RPW_EN;
  if (lang === "fr") appUrl = URL_RPW_FR;

  return `
  <header class="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <a href="${cfg.homePath}" class="flex items-center gap-3 group">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
          <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <div>
          <div class="flex items-center gap-2">
            <span class="text-lg font-black text-white tracking-tight leading-tight">Replenish</span>
            <span class="px-1.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">for Work</span>
          </div>
          <span class="text-[10px] text-slate-400 font-medium tracking-wide block">${cfg.brandSubtitle}</span>
        </div>
      </a>

      <nav class="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
        <a href="#industries" class="hover:text-emerald-400 transition-colors">${cfg.navIndustries}</a>
        <a href="#features" class="hover:text-emerald-400 transition-colors">${cfg.navFeatures}</a>
        <a href="#faq" class="hover:text-emerald-400 transition-colors">${cfg.navFaq}</a>
        <a href="${cfg.guidePath}" class="hover:text-emerald-400 transition-colors">${cfg.guideTitle}</a>
      </nav>

      <div class="flex items-center gap-3">
        <!-- Language Switcher -->
        <div class="flex items-center bg-slate-800/90 rounded-lg p-1 border border-slate-700">
          ${langs.map(l => `
            <a href="${l.path}" class="flex items-center gap-1 px-2.5 py-1 rounded text-xs font-bold transition ${l.code === lang ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'}">
              <span>${l.flag}</span>
              <span>${l.label}</span>
            </a>
          `).join("")}
        </div>

        <a href="${appUrl}" class="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold shadow-md shadow-emerald-900/40 transition">
          <span>${cfg.navLaunch}</span>
          <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
        </a>
      </div>
    </div>
  </header>
  `;
}

function renderFooter(lang) {
  const cfg = LANG_CONFIG[lang] || LANG_CONFIG.ja;
  return `
  <footer class="bg-slate-950 text-slate-400 py-14 border-t border-slate-800 text-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
        <div class="md:col-span-2">
          <div class="flex items-center gap-2.5 mb-3">
            <div class="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center">
              <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <span class="text-lg font-bold text-white tracking-tight">Replenish for Work</span>
          </div>
          <p class="text-xs text-slate-400 max-w-md leading-relaxed mb-4">
            ${cfg.footerDisclaimer}
          </p>
          <div class="flex items-center gap-2 text-[11px] text-emerald-400 font-mono">
            <span>● 100% Local IndexedDB Architecture</span>
          </div>
        </div>

        <div>
          <h4 class="text-xs font-bold text-white uppercase tracking-wider mb-3">Replenish for Work</h4>
          <ul class="space-y-2 text-xs">
            <li><a href="${URL_RPW_JP}" class="hover:text-emerald-400 transition">🇯🇵 Replenish for Work (JP)</a></li>
            <li><a href="${URL_RPW_EN}" class="hover:text-emerald-400 transition">🇺🇸 Replenish for Work (EN)</a></li>
            <li><a href="${URL_RPW_FR}" class="hover:text-emerald-400 transition">🇫🇷 Replenish for Work (FR)</a></li>
            <li class="pt-2 border-t border-slate-800 text-[11px] text-slate-500 uppercase tracking-wider">Household Series</li>
            <li><a href="${URL_RP_PORTAL}" class="hover:text-emerald-400 transition">Replenish Portal (Home)</a></li>
            <li><a href="${URL_RP_JP}" class="hover:text-emerald-400 transition">Replenish Household (JP)</a></li>
            <li><a href="${URL_RP_EN}" class="hover:text-emerald-400 transition">Replenish Household (EN)</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-xs font-bold text-white uppercase tracking-wider mb-3">Information</h4>
          <ul class="space-y-2 text-xs">
            <li><a href="${cfg.guidePath}" class="hover:text-white transition">${cfg.guideTitle}</a></li>
            <li><a href="${cfg.privacyPath}" class="hover:text-white transition">${cfg.privacyTitle}</a></li>
            <li><a href="${cfg.termsPath}" class="hover:text-white transition">${cfg.termsTitle}</a></li>
            <li><a href="${cfg.aboutPath}" class="hover:text-white transition">${cfg.aboutTitle}</a></li>
            <li><a href="${cfg.contactPath}" class="hover:text-white transition">${cfg.contactTitle}</a></li>
          </ul>
        </div>
      </div>

      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <p>&copy; ${new Date().getFullYear()} Replenish for Work. All rights reserved.</p>
        <p class="text-[11px]">Private, Client-Side Only Consumable Manager</p>
      </div>
    </div>
  </footer>
  `;
}

function renderPortalPage(lang) {
  const cfg = LANG_CONFIG[lang] || LANG_CONFIG.ja;
  return `<!doctype html>
<html lang="${cfg.code}" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${cfg.pageTitle}</title>
  <meta name="description" content="${cfg.pageDesc}">
  <link rel="icon" type="image/svg+xml" href="/icon.svg">
  <link rel="alternate icon" href="/icon-192.png">
  <link rel="manifest" href="/manifest.json">
  <meta name="theme-color" content="#059669">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://${DOMAIN}${cfg.homePath}">
  <meta property="og:title" content="${cfg.pageTitle}">
  <meta property="og:description" content="${cfg.pageDesc}">
  <meta property="og:image" content="https://${DOMAIN}/icon-512.png">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="${cfg.brandTitle}">
  <meta name="twitter:description" content="${cfg.pageDesc}">
  <meta name="twitter:image" content="https://${DOMAIN}/icon-512.png">

  <!-- JSON-LD Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "${cfg.brandTitle}",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "${cfg.pageDesc}"
  }
  </script>

  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            brand: {
              50: '#ecfdf5',
              100: '#d1fae5',
              500: '#10b981',
              600: '#059669',
              700: '#047857',
              800: '#065f46',
              900: '#064e3b',
            }
          }
        }
      }
    }
  </script>
</head>
<body class="bg-slate-900 text-slate-100 font-sans antialiased selection:bg-emerald-500 selection:text-white">
  ${renderHeader(lang)}

  <!-- HERO SECTION -->
  <section class="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-32 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(16,185,129,0.15),transparent_70%)] pointer-events-none"></div>
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-6 tracking-wide shadow-sm">
        <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>${cfg.heroBadge}</span>
      </div>

      <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6 max-w-4xl mx-auto">
        ${cfg.heroTitle}
      </h1>

      <p class="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
        ${cfg.heroDesc}
      </p>

      <!-- Launch Action Cards (3 Languages) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
        <!-- Japanese Edition -->
        <a href="${URL_RPW_JP}" class="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-850 border border-emerald-500/40 hover:border-emerald-400 shadow-xl shadow-emerald-950/50 hover:shadow-emerald-900/40 transition-all hover:-translate-y-1">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-2xl">🇯🇵</span>
            <span class="text-xs font-bold text-emerald-400 uppercase tracking-wider">Japonais / Japanese</span>
          </div>
          <span class="text-sm sm:text-base font-bold text-white mb-1">${cfg.launchJpTitle}</span>
          <span class="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300 group-hover:text-emerald-200 mt-2">
            <span>${cfg.launchJpBtn}</span>
            <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
          </span>
        </a>

        <!-- English Edition -->
        <a href="${URL_RPW_EN}" class="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-850 border border-cyan-500/40 hover:border-cyan-400 shadow-xl shadow-cyan-950/50 hover:shadow-cyan-900/40 transition-all hover:-translate-y-1">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-2xl">🇺🇸</span>
            <span class="text-xs font-bold text-cyan-400 uppercase tracking-wider">Anglais / English</span>
          </div>
          <span class="text-sm sm:text-base font-bold text-white mb-1">${cfg.launchEnTitle}</span>
          <span class="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 group-hover:text-cyan-200 mt-2">
            <span>${cfg.launchEnBtn}</span>
            <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
          </span>
        </a>

        <!-- French Edition -->
        <a href="${URL_RPW_FR}" class="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-b from-slate-800 to-slate-850 border border-indigo-500/40 hover:border-indigo-400 shadow-xl shadow-indigo-950/50 hover:shadow-indigo-900/40 transition-all hover:-translate-y-1">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-2xl">🇫🇷</span>
            <span class="text-xs font-bold text-indigo-400 uppercase tracking-wider">Français / French</span>
          </div>
          <span class="text-sm sm:text-base font-bold text-white mb-1">${cfg.launchFrTitle}</span>
          <span class="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-300 group-hover:text-indigo-200 mt-2">
            <span>${cfg.launchFrBtn}</span>
            <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
          </span>
        </a>
      </div>

      <!-- Trust Badges -->
      <div class="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-400">
        <span class="inline-flex items-center gap-1.5">
          <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
          ${lang === "fr" ? "100% Gratuit sans frais" : (lang === "en" ? "100% Free Forever" : "完全無料（課金なし）")}
        </span>
        <span class="inline-flex items-center gap-1.5">
          <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
          ${lang === "fr" ? "Sans inscription" : (lang === "en" ? "No Account Needed" : "登録不要（即日開始）")}
        </span>
        <span class="inline-flex items-center gap-1.5">
          <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
          ${lang === "fr" ? "Stockage local 100% privé" : (lang === "en" ? "100% Private Local Storage" : "端末内ローカル保存（情報送信ゼロ）")}
        </span>
        <span class="inline-flex items-center gap-1.5">
          <svg class="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
          ${lang === "fr" ? "Prêt PWA & Hors-ligne" : (lang === "en" ? "PWA & Offline Ready" : "PWAオフライン動作対応")}
        </span>
      </div>
    </div>
  </section>

  <!-- INDUSTRY PRESETS SECTION -->
  <section id="industries" class="py-20 bg-slate-950 border-t border-slate-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">${cfg.industriesBadge}</span>
        <h2 class="text-2xl sm:text-4xl font-extrabold text-white mt-4 mb-3 tracking-tight">${cfg.industriesTitle}</h2>
        <p class="text-sm sm:text-base text-slate-400">${cfg.industriesSub}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${cfg.industries.map(item => `
          <div class="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-900 transition-all group">
            <div class="flex items-center justify-between mb-4">
              <span class="text-3xl">${item.icon}</span>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">${item.tag}</span>
            </div>
            <h3 class="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">${item.name}</h3>
            <p class="text-xs text-slate-400 leading-relaxed">${item.desc}</p>
          </div>
        `).join("")}
      </div>
    </div>
  </section>

  <!-- FEATURES SECTION -->
  <section id="features" class="py-20 bg-slate-900 border-t border-slate-800 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">${cfg.featuresBadge}</span>
        <h2 class="text-2xl sm:text-4xl font-extrabold text-white mt-4 mb-3 tracking-tight">${cfg.featuresTitle}</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="p-8 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-emerald-500/30 transition">
          <div class="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <h3 class="text-lg font-bold text-white mb-2">${cfg.feat1Title}</h3>
          <p class="text-sm text-slate-400 leading-relaxed">${cfg.feat1Desc}</p>
        </div>

        <div class="p-8 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-emerald-500/30 transition">
          <div class="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
          </div>
          <h3 class="text-lg font-bold text-white mb-2">${cfg.feat2Title}</h3>
          <p class="text-sm text-slate-400 leading-relaxed">${cfg.feat2Desc}</p>
        </div>

        <div class="p-8 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-emerald-500/30 transition">
          <div class="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
          </div>
          <h3 class="text-lg font-bold text-white mb-2">${cfg.feat3Title}</h3>
          <p class="text-sm text-slate-400 leading-relaxed">${cfg.feat3Desc}</p>
        </div>

        <div class="p-8 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-emerald-500/30 transition">
          <div class="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5">
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
          </div>
          <h3 class="text-lg font-bold text-white mb-2">${cfg.feat4Title}</h3>
          <p class="text-sm text-slate-400 leading-relaxed">${cfg.feat4Desc}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ SECTION -->
  <section id="faq" class="py-20 bg-slate-950 border-t border-slate-800">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-14">
        <span class="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">${cfg.faqBadge}</span>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-white mt-4 tracking-tight">${cfg.faqTitle}</h2>
      </div>

      <div class="space-y-4">
        ${cfg.faqs.map(faq => `
          <div class="p-6 rounded-2xl bg-slate-900/90 border border-slate-800">
            <h3 class="text-base font-bold text-white mb-2">${faq.q}</h3>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">${faq.a}</p>
          </div>
        `).join("")}
      </div>
    </div>
  </section>

  <!-- CTA SECTION -->
  <section class="py-20 bg-gradient-to-t from-emerald-950/40 via-slate-900 to-slate-950 border-t border-slate-800 text-center relative overflow-hidden">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <h2 class="text-2xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">${cfg.ctaTitle}</h2>
      <p class="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8">${cfg.ctaDesc}</p>

      <div class="flex flex-wrap items-center justify-center gap-4 mb-12">
        <a href="${URL_RPW_JP}" class="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-lg shadow-emerald-900/50 transition">
          🇯🇵 ${cfg.launchJpBtn}
        </a>
        <a href="${URL_RPW_EN}" class="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-cyan-300 font-bold text-sm transition">
          🇺🇸 ${cfg.launchEnBtn}
        </a>
        <a href="${URL_RPW_FR}" class="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-indigo-300 font-bold text-sm transition">
          🇫🇷 ${cfg.launchFrBtn}
        </a>
      </div>

      <!-- Household Link Banner -->
      <div class="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
        <div>
          <div class="text-xs font-bold text-slate-200">${cfg.familyTitle}</div>
          <div class="text-[11px] text-slate-400 mt-0.5">${cfg.familyDesc}</div>
        </div>
        <a href="${URL_RP_PORTAL}" class="whitespace-nowrap px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-emerald-400 text-xs font-bold border border-slate-700 transition">
          ${cfg.familyBtn} &rarr;
        </a>
      </div>
    </div>
  </section>

  ${renderFooter(lang)}
</body>
</html>`;
}

// Legal and Static Page Renderer
function renderLegalPage(type, lang) {
  const cfg = LANG_CONFIG[lang] || LANG_CONFIG.ja;
  const isJa = lang === "ja";
  const isFr = lang === "fr";

  let titles = {};
  if (isJa) {
    titles = {
      privacy: "プライバシーポリシー",
      terms: "利用規約・免責事項",
      about: "運営者情報",
      contact: "お問い合わせ",
      guide: "ご利用ガイド"
    };
  } else if (isFr) {
    titles = {
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
      about: "À propos",
      contact: "Contact",
      guide: "Guide d'utilisation"
    };
  } else {
    titles = {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      about: "About Us",
      contact: "Contact",
      guide: "User Guide"
    };
  }

  const title = titles[type] || "Information";

  let bodyContent = "";

  if (type === "privacy") {
    if (isJa) {
      bodyContent = `
        <h2 class="text-xl font-bold text-white mb-3">1. 個人情報の取り扱いと端末内保存方針</h2>
        <p class="text-sm text-slate-300 leading-relaxed mb-6">
          Replenish for Work（以下「当サービス」）は、ユーザーのプライバシーとセキュリティを最優先に設計されています。当サービス上で登録・入力された備品名、保管場所、交換サイクル、価格、発注先などのデータは、すべて操作中の端末（ブラウザ）内部のIndexedDBにのみ保存されます。開発者を含む外部サーバーへこれらの情報が送信されることは一切ありません。
        </p>

        <h2 class="text-xl font-bold text-white mb-3">2. 広告配信について（Google AdSense等）</h2>
        <p class="text-sm text-slate-300 leading-relaxed mb-6">
          当サービスでは、第三者配信事業者（Google等）による広告配信サービスを利用する場合があります。広告配信事業者は、利用者の過去のアクセス情報に基づいて適切な広告を配信するため、Cookie（クッキー）を使用することがあります。Cookieを無効にする設定およびGoogle広告設定の詳細については、Googleの広告ポリシーと規約をご確認ください。
        </p>

        <h2 class="text-xl font-bold text-white mb-3">3. アクセス解析について</h2>
        <p class="text-sm text-slate-300 leading-relaxed mb-6">
          サイトの品質向上と安定運用の目的で、トラフィックデータを収集するためにアクセスログまたはCloudflare Web Analytics等を利用する場合があります。これらは匿名で収集されており、個人を特定する情報は含まれません。
        </p>
      `;
    } else if (isFr) {
      bodyContent = `
        <h2 class="text-xl font-bold text-white mb-3">1. Confidentialité & Stockage 100% Local</h2>
        <p class="text-sm text-slate-300 leading-relaxed mb-6">
          Replenish for Work a été conçu selon une approche stricte de protection de la vie privée. L'ensemble des consommables, délais fournisseurs, prix, emplacements de stockage et notes restent cantonnés dans le navigateur de votre appareil (IndexedDB). Aucune information n'est transmise ni stockée sur des serveurs distants.
        </p>

        <h2 class="text-xl font-bold text-white mb-3">2. Publicité & Cookies</h2>
        <p class="text-sm text-slate-300 leading-relaxed mb-6">
          Nous pouvons être amenés à diffuser des annonces publicitaires tierces (ex. Google AdSense). Ces régies peuvent utiliser des cookies techniques pour proposer des publicités adaptées. Vous pouvez désactiver les cookies publicitaires dans les paramètres de votre navigateur à tout moment.
        </p>

        <h2 class="text-xl font-bold text-white mb-3">3. Statistiques & Mesure d'audience</h2>
        <p class="text-sm text-slate-300 leading-relaxed mb-6">
          Des métriques de trafic anonymisées (ex. Cloudflare Web Analytics) peuvent être employées dans le seul but de garantir la performance et la fiabilité du service, sans aucune collecte de données nominatives.
        </p>
      `;
    } else {
      bodyContent = `
        <h2 class="text-xl font-bold text-white mb-3">1. Privacy & Client-Side Storage</h2>
        <p class="text-sm text-slate-300 leading-relaxed mb-6">
          Replenish for Work is engineered with a strict privacy-first architecture. All records, item specifications, reorder lead times, and internal notes are stored solely within your local device's browser (IndexedDB). No data is ever transmitted to or stored on remote servers.
        </p>

        <h2 class="text-xl font-bold text-white mb-3">2. Advertising & Cookies</h2>
        <p class="text-sm text-slate-300 leading-relaxed mb-6">
          We may display third-party advertisements (such as Google AdSense). These third-party vendors may use cookies to serve ads based on prior visits. Users can disable personalized cookies in their browser settings.
        </p>

        <h2 class="text-xl font-bold text-white mb-3">3. Analytics</h2>
        <p class="text-sm text-slate-300 leading-relaxed mb-6">
          Privacy-respecting anonymous traffic metrics (e.g., Cloudflare Web Analytics) may be used to measure performance. No personal or device-identifiable information is collected.
        </p>
      `;
    }
  } else if (type === "terms") {
    if (isJa) {
      bodyContent = `
        <h2 class="text-xl font-bold text-white mb-3">1. サービスの利用条件</h2>
        <p class="text-sm text-slate-300 leading-relaxed mb-6">
          当サービスは、業務・現場・オフィスにおける消耗品および定期交換備品のスケジュール管理を支援するツールです。ユーザーは自己の責任において当サービスを無料でご利用いただけます。
        </p>

        <h2 class="text-xl font-bold text-white mb-3">2. 免責事項</h2>
        <p class="text-sm text-slate-300 leading-relaxed mb-6">
          当サービスの利用によって生じた損害（備品の在庫切れ、発注遅延、ブラウザキャッシュ削除に伴うデータ消失等を含む）について、運営者は一切の責任を負いません。重要な業務データは、定期的にアプリ内の「バックアップ（JSON）」機能を利用して保存することを推奨します。
        </p>

        <h2 class="text-xl font-bold text-white mb-3">3. サービスの変更・終了</h2>
        <p class="text-sm text-slate-300 leading-relaxed mb-6">
          運営者は、事前の予告なく当サービスの提供内容を変更、停止、または終了する権利を有します。
        </p>
      `;
    } else if (isFr) {
      bodyContent = `
        <h2 class="text-xl font-bold text-white mb-3">1. Conditions d'accès</h2>
        <p class="text-sm text-slate-300 leading-relaxed mb-6">
          Replenish for Work est mis à disposition gratuitement en tant qu'outil d'assistance à la planification des remplacements et des commandes de consommables professionnels. Les utilisateurs utilisent l'outil sous leur propre responsabilité.
        </p>

        <h2 class="text-xl font-bold text-white mb-3">2. Limitation de responsabilité</h2>
        <p class="text-sm text-slate-300 leading-relaxed mb-6">
          L'éditeur décline toute responsabilité en cas de rupture de stock, retard de livraison ou perte de données locale résultant de l'effacement du cache ou des données du navigateur. Nous recommandons d'exporter régulièrement une sauvegarde JSON de votre inventaire.
        </p>

        <h2 class="text-xl font-bold text-white mb-3">3. Évolution du service</h2>
        <p class="text-sm text-slate-300 leading-relaxed mb-6">
          L'éditeur se réserve le droit de mettre à jour ou d'interrompre l'application à tout moment sans préavis.
        </p>
      `;
    } else {
      bodyContent = `
        <h2 class="text-xl font-bold text-white mb-3">1. Terms of Use</h2>
        <p class="text-sm text-slate-300 leading-relaxed mb-6">
          Replenish for Work is provided as a free tool to track consumable swap intervals and restocking schedules. Users utilize the software at their own discretion.
        </p>

        <h2 class="text-xl font-bold text-white mb-3">2. Disclaimer of Liability</h2>
        <p class="text-sm text-slate-300 leading-relaxed mb-6">
          The developer accepts no responsibility for damages, operational downtime, stockouts, or data loss resulting from local browser clearing. We strongly recommend making regular JSON backups using the export feature.
        </p>

        <h2 class="text-xl font-bold text-white mb-3">3. Service Modifications</h2>
        <p class="text-sm text-slate-300 leading-relaxed mb-6">
          The provider reserves the right to modify or terminate the service at any time without prior notice.
        </p>
      `;
    }
  } else if (type === "about") {
    if (isJa) {
      bodyContent = `
        <h2 class="text-xl font-bold text-white mb-3">サービス概要</h2>
        <p class="text-sm text-slate-300 leading-relaxed mb-6">
          Replenish for Work は、医療施設、オフィス、店舗、工場などの業務現場において「いつ交換すべきか」「いつ発注すべきか」を自動管理・事前通知するWebアプリケーションです。外部通信を行わない安全なアーキテクチャにより、機密情報を社外に出さずに手軽に導入いただけます。
        </p>
        <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 text-xs sm:text-sm">
          <div class="flex"><span class="w-32 text-slate-400 font-bold">サービス名:</span><span class="text-white">Replenish for Work</span></div>
          <div class="flex"><span class="w-32 text-slate-400 font-bold">ドメイン:</span><span class="text-emerald-400 font-mono">rpw.easy-log.app</span></div>
          <div class="flex"><span class="w-32 text-slate-400 font-bold">運営元:</span><span class="text-white">stoooone.studio</span></div>
          <div class="flex"><span class="w-32 text-slate-400 font-bold">料金:</span><span class="text-white">完全無料（登録不要）</span></div>
        </div>
      `;
    } else if (isFr) {
      bodyContent = `
        <h2 class="text-xl font-bold text-white mb-3">Présentation du service</h2>
        <p class="text-sm text-slate-300 leading-relaxed mb-6">
          Replenish for Work est une application web conçue pour les cliniques, bureaux, commerces et ateliers afin d'anticiper le remplacement et la commande des consommables clés. Grâce à son architecture 100% locale, vos données d'entreprise restent strictement confidentielles.
        </p>
        <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 text-xs sm:text-sm">
          <div class="flex"><span class="w-36 text-slate-400 font-bold">Application:</span><span class="text-white">Replenish for Work</span></div>
          <div class="flex"><span class="w-36 text-slate-400 font-bold">Domaine:</span><span class="text-emerald-400 font-mono">rpw.easy-log.app</span></div>
          <div class="flex"><span class="w-36 text-slate-400 font-bold">Éditeur:</span><span class="text-white">stoooone.studio</span></div>
          <div class="flex"><span class="w-36 text-slate-400 font-bold">Tarification:</span><span class="text-white">100% Gratuit (Sans compte)</span></div>
        </div>
      `;
    } else {
      bodyContent = `
        <h2 class="text-xl font-bold text-white mb-3">About Replenish for Work</h2>
        <p class="text-sm text-slate-300 leading-relaxed mb-6">
          Replenish for Work empowers clinics, offices, shops, and workshops to effortlessly schedule supply replacements and procurement lead times. Engineered for complete local privacy and instant PWA deployment.
        </p>
        <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 text-xs sm:text-sm">
          <div class="flex"><span class="w-32 text-slate-400 font-bold">Application:</span><span class="text-white">Replenish for Work</span></div>
          <div class="flex"><span class="w-32 text-slate-400 font-bold">Domain:</span><span class="text-emerald-400 font-mono">rpw.easy-log.app</span></div>
          <div class="flex"><span class="w-32 text-slate-400 font-bold">Provider:</span><span class="text-white">stoooone.studio</span></div>
          <div class="flex"><span class="w-32 text-slate-400 font-bold">Pricing:</span><span class="text-white">100% Free (No Account Required)</span></div>
        </div>
      `;
    }
  } else if (type === "contact") {
    if (isJa) {
      bodyContent = `
        <h2 class="text-xl font-bold text-white mb-3">お問い合わせ窓口</h2>
        <p class="text-sm text-slate-300 leading-relaxed mb-6">
          当サービスに関するご意見、不具合報告、改善のご要望は以下のメールアドレスまでお気軽にお寄せください。
        </p>
        <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center">
          <span class="text-xs text-slate-400 block mb-2">サポート連絡先</span>
          <a href="mailto:stoooone.studio@gmail.com" class="text-base sm:text-lg font-bold text-emerald-400 hover:underline font-mono">stoooone.studio@gmail.com</a>
        </div>
      `;
    } else if (isFr) {
      bodyContent = `
        <h2 class="text-xl font-bold text-white mb-3">Contact & Support</h2>
        <p class="text-sm text-slate-300 leading-relaxed mb-6">
          Pour toute suggestion, retour d'expérience ou signalement d'anomalie, n'hésitez pas à nous contacter par e-mail :
        </p>
        <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center">
          <span class="text-xs text-slate-400 block mb-2">Adresse de contact</span>
          <a href="mailto:stoooone.studio@gmail.com" class="text-base sm:text-lg font-bold text-emerald-400 hover:underline font-mono">stoooone.studio@gmail.com</a>
        </div>
      `;
    } else {
      bodyContent = `
        <h2 class="text-xl font-bold text-white mb-3">Contact Support</h2>
        <p class="text-sm text-slate-300 leading-relaxed mb-6">
          For feature requests, feedback, or bug reports, please reach out via email:
        </p>
        <div class="p-6 rounded-2xl bg-slate-900 border border-slate-800 text-center">
          <span class="text-xs text-slate-400 block mb-2">Email Inquiries</span>
          <a href="mailto:stoooone.studio@gmail.com" class="text-base sm:text-lg font-bold text-emerald-400 hover:underline font-mono">stoooone.studio@gmail.com</a>
        </div>
      `;
    }
  } else if (type === "guide") {
    if (isJa) {
      bodyContent = `
        <h2 class="text-xl font-bold text-white mb-3">Replenish for Work の基本操作</h2>
        <div class="space-y-6 text-sm text-slate-300 leading-relaxed">
          <div class="p-5 rounded-xl bg-slate-900 border border-slate-800">
            <h3 class="text-base font-bold text-emerald-400 mb-2">ステップ 1: 消耗品を登録する</h3>
            <p>「アイテム追加」ボタンから、品名、交換周期（日数/週数/月数）、使用開始日を入力します。業界別テンプレートを選択すれば、おすすめの品目と周期が一括でセットされます。</p>
          </div>
          <div class="p-5 rounded-xl bg-slate-900 border border-slate-800">
            <h3 class="text-base font-bold text-emerald-400 mb-2">ステップ 2: 発注準備日を確認する</h3>
            <p>「リードタイム（納品までの日数）」を設定すると、交換予定日よりも前に「購入準備（発注）リマインド」が自動表示されます。現場の在庫切れを防ぎます。</p>
          </div>
          <div class="p-5 rounded-xl bg-slate-900 border border-slate-800">
            <h3 class="text-base font-bold text-emerald-400 mb-2">ステップ 3: 交換時にワンタップで更新</h3>
            <p>実際に消耗品を新品に交換したら「交換完了」ボタンを押すだけ。次回の予定日が自動で更新され、履歴タイムラインに記録が残ります。</p>
          </div>
          <div class="p-5 rounded-xl bg-slate-900 border border-slate-800">
            <h3 class="text-base font-bold text-emerald-400 mb-2">ステップ 4: ホーム画面に追加（PWA）</h3>
            <p>スマホやタブレットのブラウザメニューから「ホーム画面に追加」を行うと、アプリ同様のフルスクリーンで素早く呼び出せます。</p>
          </div>
        </div>
      `;
    } else if (isFr) {
      bodyContent = `
        <h2 class="text-xl font-bold text-white mb-3">Prise en main de Replenish for Work</h2>
        <div class="space-y-6 text-sm text-slate-300 leading-relaxed">
          <div class="p-5 rounded-xl bg-slate-900 border border-slate-800">
            <h3 class="text-base font-bold text-emerald-400 mb-2">Étape 1 : Ajouter un consommable</h3>
            <p>Cliquez sur « Ajouter un article » et renseignez le nom, le cycle de renouvellement (jours, semaines, mois) et la date de mise en service. Vous pouvez aussi choisir un modèle sectoriel prérempli.</p>
          </div>
          <div class="p-5 rounded-xl bg-slate-900 border border-slate-800">
            <h3 class="text-base font-bold text-emerald-400 mb-2">Étape 2 : Définir le délai fournisseur (Lead Time)</h3>
            <p>Indiquez le délai moyen de livraison pour recevoir une alerte d'anticipation de commande bien avant l'épuisement effectif du matériel.</p>
          </div>
          <div class="p-5 rounded-xl bg-slate-900 border border-slate-800">
            <h3 class="text-base font-bold text-emerald-400 mb-2">Étape 3 : Valider le remplacement en un clic</h3>
            <p>Lorsque vous remplacez l'article par un neuf, cliquez simplement sur « Remplacé ». La date de prochaine échéance est recalculée automatiquement et archivée dans l'historique.</p>
          </div>
          <div class="p-5 rounded-xl bg-slate-900 border border-slate-800">
            <h3 class="text-base font-bold text-emerald-400 mb-2">Étape 4 : Ajouter à l'écran d'accueil (PWA)</h3>
            <p>Depuis le menu de votre navigateur mobile ou tablette, choisissez « Ajouter à l'écran d'accueil » pour l'utiliser en plein écran comme une application native.</p>
          </div>
        </div>
      `;
    } else {
      bodyContent = `
        <h2 class="text-xl font-bold text-white mb-3">Getting Started with Replenish for Work</h2>
        <div class="space-y-6 text-sm text-slate-300 leading-relaxed">
          <div class="p-5 rounded-xl bg-slate-900 border border-slate-800">
            <h3 class="text-base font-bold text-emerald-400 mb-2">Step 1: Register Items</h3>
            <p>Click 'Add Item' to input item name, replacement cycle (days, weeks, months), and start date. Or select an industry preset to populate common workplace items instantly.</p>
          </div>
          <div class="p-5 rounded-xl bg-slate-900 border border-slate-800">
            <h3 class="text-base font-bold text-emerald-400 mb-2">Step 2: Buffer Lead Times</h3>
            <p>Input vendor lead time to automatically compute procurement alert dates before actual stockouts occur.</p>
          </div>
          <div class="p-5 rounded-xl bg-slate-900 border border-slate-800">
            <h3 class="text-base font-bold text-emerald-400 mb-2">Step 3: One-Tap Replacement</h3>
            <p>When items are replaced, hit 'Replaced'. The next cycle calculates automatically with history logged.</p>
          </div>
          <div class="p-5 rounded-xl bg-slate-900 border border-slate-800">
            <h3 class="text-base font-bold text-emerald-400 mb-2">Step 4: Install to Home Screen (PWA)</h3>
            <p>Open browser options on phone or tablet and select 'Add to Home Screen' for instant native-like access.</p>
          </div>
        </div>
      `;
    }
  }

  return `<!doctype html>
<html lang="${cfg.code}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} - ${cfg.brandTitle}</title>
  <link rel="icon" type="image/svg+xml" href="/icon.svg">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-slate-950 text-slate-100 font-sans antialiased min-h-screen flex flex-col justify-between">
  ${renderHeader(lang)}

  <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-grow">
    <div class="mb-8">
      <a href="${cfg.homePath}" class="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 mb-4 transition">
        &larr; ${cfg.navHome}
      </a>
      <h1 class="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">${title}</h1>
    </div>

    <div class="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-xl">
      ${bodyContent}
    </div>
  </main>

  ${renderFooter(lang)}
</body>
</html>`;
}

// Worker Fetch Handler
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // Handle Static Assets from public/
    if (env.ASSETS) {
      if (
        pathname.match(/\.(png|jpg|jpeg|gif|svg|ico|webp|css|js|json|txt|xml)$/) ||
        pathname.startsWith("/assets/") ||
        pathname.startsWith("/guides/")
      ) {
        return env.ASSETS.fetch(request);
      }
    }

    // Determine language (ja, en, fr)
    let lang = "ja";
    if (pathname === "/fr" || pathname.startsWith("/fr/")) {
      lang = "fr";
    } else if (pathname === "/en" || pathname.startsWith("/en/")) {
      lang = "en";
    } else if (url.searchParams.get("lang") === "fr") {
      lang = "fr";
    } else if (url.searchParams.get("lang") === "en") {
      lang = "en";
    }

    // Normalize route path without language prefix
    let cleanPath = pathname;
    if (cleanPath.startsWith("/fr/")) {
      cleanPath = "/" + cleanPath.slice(4);
    } else if (cleanPath === "/fr") {
      cleanPath = "/";
    } else if (cleanPath.startsWith("/en/")) {
      cleanPath = "/" + cleanPath.slice(4);
    } else if (cleanPath === "/en") {
      cleanPath = "/";
    }

    // Route: Privacy
    if (cleanPath === "/privacy") {
      return new Response(renderLegalPage("privacy", lang), {
        headers: { "Content-Type": "text/html; charset=utf-8" }
      });
    }

    // Route: Terms
    if (cleanPath === "/terms") {
      return new Response(renderLegalPage("terms", lang), {
        headers: { "Content-Type": "text/html; charset=utf-8" }
      });
    }

    // Route: About
    if (cleanPath === "/about") {
      return new Response(renderLegalPage("about", lang), {
        headers: { "Content-Type": "text/html; charset=utf-8" }
      });
    }

    // Route: Contact
    if (cleanPath === "/contact") {
      return new Response(renderLegalPage("contact", lang), {
        headers: { "Content-Type": "text/html; charset=utf-8" }
      });
    }

    // Route: Guide
    if (cleanPath === "/guide") {
      return new Response(renderLegalPage("guide", lang), {
        headers: { "Content-Type": "text/html; charset=utf-8" }
      });
    }

    // Route: Home
    if (cleanPath === "/") {
      return new Response(renderPortalPage(lang), {
        headers: { "Content-Type": "text/html; charset=utf-8" }
      });
    }

    // Fallback: Check ASSETS
    if (env.ASSETS) {
      const assetResp = await env.ASSETS.fetch(request);
      if (assetResp.status < 400) {
        return assetResp;
      }
    }

    // Default to Home page
    return new Response(renderPortalPage(lang), {
      headers: { "Content-Type": "text/html; charset=utf-8" }
    });
  }
};
