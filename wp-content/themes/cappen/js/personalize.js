(() => {
  const STORAGE_KEY = "yojo-portfolio-lang";
  const LEGACY_STORAGE_KEY = "yoji-portfolio-lang";
  const EMAIL = "zhujieyohji@gmail.com";
  const DISPLAY_EMAIL = "ZHUJIEYOHJI@GMAIL.COM";
  const PHONE = "+8618048054389";
  const PHONE_LABEL = "+86 180 4805 4389";
  const URLS = {
    app: "https://yoboxapp.com/app",
    comfy: "https://comfyui.yoboxapp.com/",
    api: "https://api.yoboxapp.com/",
    contact: "mailto:zhujieyohji@gmail.com?subject=Portfolio%20Inquiry",
  };

  const CASE_PATHS = [
    "/work/amanda-braga/",
    "/work/credit-genie/",
    "/work/jcpm-malls/",
    "/work/ministry-of-supply/",
    "/work/leadedu/",
    "/work/neondoor/",
  ];

  const SITE = {
    en: {
      brand: "Zhu Jie / yojo",
      meta: {
        homeTitle: "Zhu Jie / yojo - Visual, AI Coding, Product Portfolio",
        worksTitle: "Selected Cases - Zhu Jie / yojo",
        aboutTitle: "Profile & Experience - Zhu Jie / yojo",
        startTitle: "Contact - Zhu Jie / yojo",
        shopTitle: "Products & Links - Zhu Jie / yojo",
        homeDescription:
          "Personal portfolio and case studies by Zhu Jie / yojo, spanning visual systems, AI coding, ComfyUI workflows, and AI product design.",
      },
      ui: {
        cursorDiscover: "OPEN",
        close: "close",
        keepScrollingPrimary: "Keep scrolling for next case",
        keepScrollingSecondary: "Keep exploring more",
        featuredLabel: "Featured Cases",
        featuredTitle:
          "Selected Cases Across Visual Systems, AI Coding, and Product Delivery",
        focusLabel: "Focus & Experience",
        focusTitle:
          "From Visual Craft to AI-Coded Products, the Goal Is Always Usable Product Value.",
        talkTitle: "LET'S TALK PROJECTS",
        send: "SEND INQUIRY",
        socialLabel: "Links",
        footerLead: "Based in",
        footerMid: "working",
        footerTag1: "SHENZHEN, CN",
        footerTag2: "WORLDWIDE",
        footerCopyright: "©2026 Zhu Jie / yojo. All rights reserved.",
        openWorkflow: "Open Workflow",
        openProduct: "Open Product",
        openCanvas: "Open Canvas",
        openApi: "Open API",
        requestDetails: "Request Details",
        openLink: "Open Link",
      },
      cookie: {
        mainTitle: "This site uses cookies",
        ok: "OK",
        prefsTitle: "Cookie preferences",
        prefsText:
          "Cookies help keep the mirrored experience stable, measure performance, and remember your language choice.",
        items: [
          {
            name: "Essential",
            text:
              "Essential cookies support the language toggle and the basic interaction flow of the site.",
          },
          {
            name: "Statistics",
            text:
              "Statistics cookies help measure usage so the local demo stays reliable while testing.",
          },
          {
            name: "External Media",
            text:
              "External media cookies allow embedded external services and outbound links to work as expected.",
          },
        ],
        acceptAll: "Accept all",
        decline: "Decline",
        save: "Save",
      },
      nav: [
        { label: "Cases", href: "/works/", target: "_self", ariaLabel: "Cases" },
        { label: "Profile", href: "/about/", target: "_self", ariaLabel: "Profile" },
        {
          label: "Products",
          href: URLS.app,
          target: "_blank",
          ariaLabel: "Products",
        },
        {
          label: "Contact",
          href: "/start-a-project/",
          target: "_self",
          ariaLabel: "Contact",
        },
      ],
      preloader: {
        top: "VISUAL SYSTEMS",
        bottom: "AI PRODUCTS",
        text:
          "Personal portfolio by Zhu Jie / yojo, focused on visual systems, AI coding, and product design.",
      },
      hero: {
        title: ["VISUAL", "SYSTEMS", "AI", "PRODUCTS"],
        text:
          "Personal portfolio by Zhu Jie / yojo, focused on visual systems, AI coding, and product design.",
      },
      subHero:
        "A personal body of work spanning <span class='italic'>visual direction, AI coding, and product thinking</span> across workflows, tools, and launch-ready experiences.",
      about: {
        mixedTitle: "VISUAL SYSTEMS AI PRODUCTS",
        subTitle:
          "I work between <span class='italic'>visual systems</span>, <span class='italic'>AI coding</span>, and <span class='italic'>product thinking</span> to turn emerging tools into usable experiences, scalable workflows, and commercially grounded cases.",
        introTitle:
          "Personal portfolio built around visual craft, AI implementation, and practical product delivery.",
        introText:
          "My work spans AI model training, AI image and video effect products, AI camera products, and the web interfaces that help those ideas ship.<br><br>Recent focus includes ComfyUI workflows, AI e-commerce image systems, template design, multimodal tooling, and AI-coded web products.<br><br>One AI camera / effects product line reached 50M+ downloads across Brazil App Store and Google Play, while earlier character-training pipelines helped improve game art efficiency by 80%+.",
        items: [
          {
            title: "Visual Systems",
            text:
              "ComfyUI Workflow Design<br>Image Template Design<br>E-commerce Visual Automation<br>AI Image / Video Direction<br>Figma UI / Prototyping<br>Template Commerce Assets",
          },
          {
            title: "AI Coding / Product",
            text:
              "AI-Coded Web Products<br>Workflow UI / Infinite Canvas<br>API Integration & Tooling<br>MVP Definition / Experiments<br>Overseas Trend Research<br>Ops / Data-Informed Iteration",
          },
        ],
        clientsTitle:
          "Products, toolchains, and domains behind the work.",
        clients: [
          "ComfyUI",
          "Flux",
          "Figma",
          "GPT",
          "Claude",
          "Cursor",
          "Runway",
          "Pika",
          "PixVerse",
          "SDXL",
          "Faceme",
          "Dressup",
          "Agecam",
          "Yearcam",
          "Remagix",
          "Vini",
          "Amazon SKU Automation",
          "Multimodal LLMs",
        ],
        awards: [
          {
            title: "Visual Systems",
            tags: ["ComfyUI", "Templates", "Figma"],
          },
          {
            title: "AI Coding",
            tags: ["Front-End", "API", "Automation"],
          },
          {
            title: "Product Thinking",
            tags: ["MVPs", "Features", "Iteration"],
          },
          {
            title: "Image / Video",
            tags: ["Flux", "Runway", "Pika"],
          },
          {
            title: "Model Training",
            tags: ["LoRA", "SD", "Multi-view"],
          },
          {
            title: "Outcomes",
            tags: ["80%+ Efficiency", "50M+ Downloads"],
          },
        ],
      },
      talk: {
        toLabel: "TO: ZHU JIE / YOJO",
        intro:
          "Hi, I'm Yojo's portfolio assistant. Share a bit about your idea and I'll point you to the most relevant case or next step.<br><br>Shall we begin?<br class='macgyver'>👉 Hit Enter &nbsp;<span class='tag' data-cursor='none'>Enter</span>",
        name: "Hi, my name is <span class='talk__form__message__value'></span>&nbsp;<span class='tag' data-cursor='none'>Enter</span>",
        email:
          "You can email me at <span class='talk__form__message__value'></span>&nbsp;<span class='tag' data-cursor='none'>Enter</span>",
        project:
          "I need help with a <span class='options multiple'><span>visual system</span><span>ComfyUI workflow</span><span>AI image tool</span><span>AI video workflow</span><span>AI-coded website</span><span>product prototype</span><span>template design</span><span>API integration</span><span>camera / effect concept</span><span>consulting</span></span> <span class='tag' data-cursor='none'>Enter</span>",
        budget:
          "My budget range is between <span class='options'><span>under 5k</span><span>5k to 10k</span><span>10k to 20k</span><span>20k to 50k</span><span>50k+</span></span> <span class='tag' data-cursor='none'>Enter</span>",
        note:
          "Additional note: <span class='talk__form__message__value'></span>&nbsp;<span class='tag' data-cursor='none'>Enter</span>",
        successTop: "Thanks for reaching out.",
        successBottom:
          "I'll follow up with the right case or next step soon.",
        inputLabels: {
          name: "Name",
          email: "Email",
          note: "Note",
        },
      },
      footer: {
        title: ["VISUAL &", "AI CODING", "PRODUCTS"],
        links: [
          { label: "Yobox App", href: URLS.app, target: "_blank" },
          { label: "ComfyUI Lab", href: URLS.comfy, target: "_blank" },
          { label: "API Hub", href: URLS.api, target: "_blank" },
          { label: "Email", href: `mailto:${EMAIL}`, target: "_self" },
          { label: PHONE_LABEL, href: `tel:${PHONE}`, target: "_self" },
        ],
      },
      cases: [
        {
          path: CASE_PATHS[0],
          label: "ComfyUI Workflow",
          title: "ComfyUI E-commerce Workflow",
          teaser:
            "Designing a reusable ComfyUI production system for e-commerce imagery, templates, and batch automation.",
          year: "2025",
          text:
            "Designed end-to-end ComfyUI workflows for e-commerce imagery, template production, and automated Amazon SKU assets. The system connected prompt design, batch generation, and quality control into a repeatable visual pipeline that reduced manual production time and made product-image delivery more scalable.",
          tags: ["ComfyUI", "Visual Automation"],
          link: {
            href: URLS.comfy,
            label: "Open Workflow",
            target: "_blank",
          },
        },
        {
          path: CASE_PATHS[1],
          label: "Yobox App",
          title: "AI Tool Station",
          teaser:
            "Turning AI tooling into a usable web product with fast front-end delivery and product-minded iteration.",
          year: "2025",
          text:
            "Built and iterated AI-coded web interfaces for Yobox App, turning internal ideas into usable tools for image creation, workflow exploration, and lightweight experimentation. The work combined front-end implementation, feature framing, and rapid product testing around real creator use cases.",
          tags: ["AI Tools", "Front-End"],
          link: {
            href: URLS.app,
            label: "Open Product",
            target: "_blank",
          },
        },
        {
          path: CASE_PATHS[2],
          label: "Infinite Canvas",
          title: "ComfyUI Infinite Canvas",
          teaser:
            "Exploring canvas-based workflow creation for more visual and intuitive ComfyUI building.",
          year: "2025",
          text:
            "Shaped a visual infinite-canvas experience for ComfyUI-style workflow building, focused on clarity, extensibility, and faster iteration. The case sits between visual design and product design: making complex node systems easier to read, arrange, and expand.",
          tags: ["Workflow UI", "Canvas"],
          link: {
            href: URLS.comfy,
            label: "Open Canvas",
            target: "_blank",
          },
        },
        {
          path: CASE_PATHS[3],
          label: "API Hub",
          title: "API Relay Hub",
          teaser:
            "Packaging model access and workflow endpoints into a practical API layer for product experiments.",
          year: "2025",
          text:
            "Structured an API-facing layer for AI workflows and model calls, supporting faster prototyping across image, video, and automation scenarios. The work emphasized product utility over infrastructure theatre: clear endpoints, stable handoffs, and fast integration into lightweight web tools.",
          tags: ["API Product", "AI Coding"],
          link: {
            href: URLS.api,
            label: "Open API",
            target: "_blank",
          },
        },
        {
          path: CASE_PATHS[4],
          label: "AI Camera Effects",
          title: "AI Camera & Effect Design",
          teaser:
            "Designing AI camera gameplay and effect concepts that balanced trend speed, visuals, and retention.",
          year: "2024",
          text:
            "Worked on AI camera and effect products including Faceme, Dressup, Agecam, Yearcam, Remagix, and Vini. The role covered feature ideation, visual and product design, overseas trend tracking, and some front-end implementation support. One product line reached more than 50M downloads across Brazil App Store and Google Play.",
          tags: ["AI Camera", "Product Design"],
          link: {
            href: URLS.contact,
            label: "Request Details",
            target: "_self",
          },
        },
        {
          path: CASE_PATHS[5],
          label: "Model Training",
          title: "Game Character Model Training",
          teaser:
            "Building character training and automation pipelines that improved game art efficiency by 80%+.",
          year: "2023",
          text:
            "Trained LoRA and Stable Diffusion models for game-character workflows, then pushed them into usable production systems such as face replacement, multi-view generation, outfit switching, and 3D preview assistance. The pipeline helped improve game art efficiency by more than 80%.",
          tags: ["Model Training", "Pipeline"],
          link: {
            href: URLS.contact,
            label: "Request Details",
            target: "_self",
          },
        },
      ],
      workItems: [
        {
          title: "ComfyUI Workflow Design",
          year: "2025",
          text:
            "Designed reusable ComfyUI nodes and workflow chains for e-commerce imagery, batch output, and asset consistency.",
          tags: ["ComfyUI", "Workflow", "Visual"],
          link: {
            href: URLS.comfy,
            label: "Open Workflow",
            target: "_blank",
          },
        },
        {
          title: "AI E-commerce Image System",
          year: "2025",
          text:
            "Built template-driven AI image production for e-commerce scenarios, balancing speed, consistency, and SKU-level variation.",
          tags: ["E-commerce", "AI Image", "Templates"],
          link: {
            href: URLS.contact,
            label: "Request Details",
            target: "_self",
          },
        },
        {
          title: "Yobox App Tool Station",
          year: "2025",
          text:
            "Turned AI tool ideas into usable web experiences with fast front-end iteration and product framing.",
          tags: ["AI Tools", "Front-End"],
          link: {
            href: URLS.app,
            label: "Open Product",
            target: "_blank",
          },
        },
        {
          title: "ComfyUI Infinite Canvas",
          year: "2025",
          text:
            "Explored canvas-based workflow editing to make node logic easier to read, connect, and expand.",
          tags: ["Canvas", "Product UI"],
          link: {
            href: URLS.comfy,
            label: "Open Canvas",
            target: "_blank",
          },
        },
        {
          title: "API Relay Hub",
          year: "2025",
          text:
            "Packaged model calls and workflow endpoints into a practical API layer for lightweight product experiments.",
          tags: ["API", "AI Coding"],
          link: {
            href: URLS.api,
            label: "Open API",
            target: "_blank",
          },
        },
        {
          title: "Amazon SKU Automation",
          year: "2025",
          text:
            "Automated visual production for Amazon SKU images, reducing repetitive work and improving delivery consistency.",
          tags: ["Automation", "SKU", "Ops"],
          link: {
            href: URLS.contact,
            label: "Request Details",
            target: "_self",
          },
        },
        {
          title: "AI-Coded Web Products",
          year: "2025",
          text:
            "Used AI coding workflows to ship small web products, landing pages, and feature experiments faster.",
          tags: ["Vibe Coding", "Web", "Prototype"],
          link: {
            href: URLS.app,
            label: "Open Product",
            target: "_blank",
          },
        },
        {
          title: "AI Camera & Effect Design",
          year: "2024",
          text:
            "Worked on gameplay, effect concepts, and feature framing for AI camera apps including Faceme, Dressup, Agecam, Yearcam, Remagix, and Vini.",
          tags: ["AI Camera", "Feature", "Visual"],
          link: {
            href: URLS.contact,
            label: "Request Details",
            target: "_self",
          },
        },
        {
          title: "Overseas AI Trend Research",
          year: "2024",
          text:
            "Tracked overseas communities, trends, and product signals to inform faster concept validation and feature direction.",
          tags: ["Research", "Trend", "Product"],
          link: {
            href: URLS.contact,
            label: "Request Details",
            target: "_self",
          },
        },
        {
          title: "Figma UI & Prototyping",
          year: "2024",
          text:
            "Supported interface design, wireframes, and lightweight prototyping for product ideas and campaign features.",
          tags: ["Figma", "UI", "Prototype"],
          link: {
            href: URLS.contact,
            label: "Request Details",
            target: "_self",
          },
        },
        {
          title: "Game Character LoRA Training",
          year: "2023",
          text:
            "Trained game-character LoRA and Stable Diffusion models for stylized asset generation and controllable production use.",
          tags: ["LoRA", "SD", "Training"],
          link: {
            href: URLS.contact,
            label: "Request Details",
            target: "_self",
          },
        },
        {
          title: "Character Automation Pipeline",
          year: "2023",
          text:
            "Built workflows for face swap, multi-view output, outfit replacement, and 3D preview assistance, helping improve art efficiency by 80%+.",
          tags: ["Pipeline", "Automation", "80%+"],
          link: {
            href: URLS.contact,
            label: "Request Details",
            target: "_self",
          },
        },
      ],
    },
    zh: {
      brand: "朱杰 / yojo",
      meta: {
        homeTitle: "朱杰 / yojo - 视觉、AI Coding、产品作品集",
        worksTitle: "案例精选 - 朱杰 / yojo",
        aboutTitle: "个人简历与经历 - 朱杰 / yojo",
        startTitle: "联系合作 - 朱杰 / yojo",
        shopTitle: "产品与链接 - 朱杰 / yojo",
        homeDescription:
          "朱杰 / yojo 的个人作品集与案例站，围绕视觉系统、AI Coding、ComfyUI 工作流与 AI 产品设计展开。",
      },
      ui: {
        cursorDiscover: "查看",
        close: "关闭",
        keepScrollingPrimary: "继续下滑 查看下一个案例",
        keepScrollingSecondary: "继续探索 更多内容",
        featuredLabel: "精选案例",
        featuredTitle: "围绕 视觉系统、AI Coding 与 产品落地 的 代表案例",
        focusLabel: "方向与经验",
        focusTitle: "从 视觉表达 到 AI 编码产品，最终都要落到 真正可用的 产品价值。",
        talkTitle: "聊聊 项目",
        send: "发送需求",
        socialLabel: "链接",
        footerLead: "常驻",
        footerMid: "服务",
        footerTag1: "深圳，中国",
        footerTag2: "全球协作",
        footerCopyright: "©2026 朱杰 / yojo。保留所有权利。",
        openWorkflow: "打开工作流",
        openProduct: "打开产品",
        openCanvas: "打开画布",
        openApi: "打开 API",
        requestDetails: "索取详情",
        openLink: "打开链接",
      },
      cookie: {
        mainTitle: "本网站使用 Cookie",
        ok: "好的",
        prefsTitle: "Cookie 偏好",
        prefsText:
          "Cookie 用来保证本地镜像体验稳定、记录语言选择，并帮助测试时确认基础交互正常。",
        items: [
          {
            name: "必要",
            text: "必要 Cookie 用来支持语言切换，以及页面基础交互流程。",
          },
          {
            name: "统计",
            text: "统计 Cookie 用来观察本地演示时的使用情况，确保测试过程更稳定。",
          },
          {
            name: "外部媒体",
            text: "外部媒体 Cookie 让嵌入内容与外部跳转链接保持正常工作。",
          },
        ],
        acceptAll: "全部接受",
        decline: "拒绝",
        save: "保存",
      },
      nav: [
        { label: "案例", href: "/works/", target: "_self", ariaLabel: "案例" },
        { label: "简历", href: "/about/", target: "_self", ariaLabel: "简历" },
        {
          label: "产品",
          href: URLS.app,
          target: "_blank",
          ariaLabel: "产品",
        },
        {
          label: "联系",
          href: "/start-a-project/",
          target: "_self",
          ariaLabel: "联系",
        },
      ],
      preloader: {
        top: "视觉 系统",
        bottom: "AI 产品",
        text: "朱杰 / yojo 的 个人作品集，聚焦 视觉、AI Coding 与 产品设计。",
      },
      hero: {
        title: ["视觉", "系统", "AI", "产品"],
        text: "朱杰 / yojo 的 个人作品集，聚焦 视觉、AI Coding 与 产品设计。",
      },
      subHero:
        "这是一组 围绕 <span class='italic'>视觉方向、AI Coding 与 产品思维</span> 展开的 个人案例，覆盖 工作流、工具 与 可落地体验。",
      about: {
        mixedTitle: "视觉系统 AI 产品",
        subTitle:
          "我在 <span class='italic'>视觉系统</span>、<span class='italic'>AI Coding</span> 与 <span class='italic'>产品思维</span> 之间工作，把 新工具 变成 可用体验、可扩展工作流 与 真正能落地的案例。",
        introTitle:
          "围绕 视觉表达、AI 实现 与 产品交付 搭起来的 个人作品集。",
        introText:
          "我的工作横跨 AI 模型训练、AI 图像 / 视频效果产品、AI 相机产品，以及 可落地的 Web 实现。<br><br>近期重点包括 ComfyUI 工作流、AI 电商出图系统、模板设计、多模态工具，以及 AI Coding 驱动的网页产品。<br><br>其中一条 AI 相机 / 特效产品线 在 巴西 App Store 与 Google Play 累计 5000万+ 下载；更早的角色训练管线 将 游戏美术效率 提升到 80%+。",
        items: [
          {
            title: "视觉系统",
            text:
              "ComfyUI 工作流设计<br>图像模板设计<br>AI 电商出图自动化<br>AI 图像 / 视频方向<br>Figma 界面与原型<br>模板电商资产设计",
          },
          {
            title: "AI Coding / 产品",
            text:
              "AI 编码网页产品<br>工作流 UI / 无限画布<br>API 集成与工具化<br>MVP 定义 / 实验验证<br>海外趋势研究<br>运营 / 数据驱动迭代",
          },
        ],
        clientsTitle: "这些案例背后的 产品、工具链 与 领域经验。",
        clients: [
          "ComfyUI",
          "Flux",
          "Figma",
          "GPT",
          "Claude",
          "Cursor",
          "Runway",
          "Pika",
          "PixVerse",
          "SDXL",
          "Faceme",
          "Dressup",
          "Agecam",
          "Yearcam",
          "Remagix",
          "Vini",
          "Amazon SKU 自动化",
          "多模态 LLM",
        ],
        awards: [
          {
            title: "视觉系统",
            tags: ["ComfyUI", "模板", "Figma"],
          },
          {
            title: "AI 编码",
            tags: ["前端", "API", "自动化"],
          },
          {
            title: "产品思维",
            tags: ["MVP", "功能", "迭代"],
          },
          {
            title: "图像 / 视频",
            tags: ["Flux", "Runway", "Pika"],
          },
          {
            title: "模型训练",
            tags: ["LoRA", "SD", "多视图"],
          },
          {
            title: "结果",
            tags: ["80%+ 效率", "5000万+ 下载"],
          },
        ],
      },
      talk: {
        toLabel: "TO: 朱杰 / YOJO",
        intro:
          "你好，我是 Yojo 作品集助手。告诉我你的想法，我会把你带到 最相关的案例 或 下一步沟通方式。<br><br>现在开始？<br class='macgyver'>👉 回车继续 &nbsp;<span class='tag' data-cursor='none'>Enter</span>",
        name: "你好，我是 <span class='talk__form__message__value'></span>&nbsp;<span class='tag' data-cursor='none'>Enter</span>",
        email:
          "我的邮箱是 <span class='talk__form__message__value'></span>&nbsp;<span class='tag' data-cursor='none'>Enter</span>",
        project:
          "我需要的是 <span class='options multiple'><span>视觉系统</span><span>ComfyUI 工作流</span><span>AI 图像工具</span><span>AI 视频流程</span><span>AI 编码网站</span><span>产品原型</span><span>模板设计</span><span>API 集成</span><span>相机 / 特效概念</span><span>顾问合作</span></span> <span class='tag' data-cursor='none'>Enter</span>",
        budget:
          "预算范围大概在 <span class='options'><span>5k 以下</span><span>5k 到 10k</span><span>10k 到 20k</span><span>20k 到 50k</span><span>50k+</span></span> <span class='tag' data-cursor='none'>Enter</span>",
        note:
          "补充说明：<span class='talk__form__message__value'></span>&nbsp;<span class='tag' data-cursor='none'>Enter</span>",
        successTop: "感谢你的联系。",
        successBottom: "我会尽快根据你的方向回复对应案例或下一步沟通方式。",
        inputLabels: {
          name: "姓名",
          email: "邮箱",
          note: "备注",
        },
      },
      footer: {
        title: ["视觉与", "AI 编码", "产品案例"],
        links: [
          { label: "Yobox App", href: URLS.app, target: "_blank" },
          { label: "ComfyUI 实验室", href: URLS.comfy, target: "_blank" },
          { label: "API 中台", href: URLS.api, target: "_blank" },
          { label: "邮箱", href: `mailto:${EMAIL}`, target: "_self" },
          { label: PHONE_LABEL, href: `tel:${PHONE}`, target: "_self" },
        ],
      },
      cases: [
        {
          path: CASE_PATHS[0],
          label: "ComfyUI 工作流",
          title: "ComfyUI 电商工作流",
          teaser: "把 电商图像工作流 组织成 可复用的 ComfyUI 生产系统。",
          year: "2025",
          text:
            "围绕电商图像、模板生产与 Amazon SKU 出图，我设计了一套端到端的 ComfyUI 工作流。它把提示词设计、批量生成、质量控制串成可重复使用的视觉生产链，减少人工处理时间，也让产品图交付更稳定、更容易扩展。",
          tags: ["ComfyUI", "视觉自动化"],
          link: {
            href: URLS.comfy,
            label: "打开工作流",
            target: "_blank",
          },
        },
        {
          path: CASE_PATHS[1],
          label: "Yobox 工具站",
          title: "AI 工具站",
          teaser: "把 AI 工具 变成 真正可用的 Web 产品 与 快速迭代界面。",
          year: "2025",
          text:
            "围绕 Yobox App，我把一些内部想法做成真正可用的 AI 工具网页，覆盖图像生成、工作流探索与轻量实验。这里的重点不是只把界面写出来，而是把前端实现、功能 framing 与产品测试连在一起，让工具更快进入真实使用场景。",
          tags: ["AI 工具", "前端实现"],
          link: {
            href: URLS.app,
            label: "打开产品",
            target: "_blank",
          },
        },
        {
          path: CASE_PATHS[2],
          label: "无限画布",
          title: "ComfyUI 无限画布",
          teaser: "用 更直观的 画布交互 重新组织 ComfyUI 工作流构建。",
          year: "2025",
          text:
            "这个方向的重点，是把复杂节点系统变得更清楚、更容易阅读和扩展。我围绕无限画布式的工作流体验，去平衡视觉表达、产品结构与可扩展性，让 ComfyUI 风格的节点搭建更接近直觉化使用。",
          tags: ["工作流 UI", "画布交互"],
          link: {
            href: URLS.comfy,
            label: "打开画布",
            target: "_blank",
          },
        },
        {
          path: CASE_PATHS[3],
          label: "API 中台",
          title: "API Relay Hub",
          teaser: "把 模型能力 与 工作流调用 封装成 更实用的 API 产品层。",
          year: "2025",
          text:
            "我把 AI 工作流与模型调用整理成更适合产品实验的 API 层，服务图像、视频与自动化场景。重点不是做一层看起来很复杂的基础设施，而是让接口清晰、接入稳定、真正能被轻量网页产品快速调用。",
          tags: ["API 产品", "AI Coding"],
          link: {
            href: URLS.api,
            label: "打开 API",
            target: "_blank",
          },
        },
        {
          path: CASE_PATHS[4],
          label: "AI 相机效果",
          title: "AI 相机与特效设计",
          teaser: "围绕 AI 相机玩法 与 特效设计 平衡 趋势速度、视觉效果 与 留存。",
          year: "2024",
          text:
            "我参与过 Faceme、Dressup、Agecam、Yearcam、Remagix、Vini 等 AI 相机 / 特效产品的玩法与功能设计，工作内容包含功能想法、视觉与产品设计、海外趋势观察，以及少量前端实现支持。其中一条产品线在巴西 App Store 与 Google Play 累计获得 5000万+ 下载。",
          tags: ["AI 相机", "产品设计"],
          link: {
            href: URLS.contact,
            label: "索取详情",
            target: "_self",
          },
        },
        {
          path: CASE_PATHS[5],
          label: "模型训练",
          title: "游戏角色模型训练",
          teaser: "搭建 角色训练 与 自动化管线，把 游戏美术效率 提升到 80%+。",
          year: "2023",
          text:
            "我做过游戏角色方向的 LoRA 与 Stable Diffusion 训练，并把它们推进到更接近生产可用的流程里，例如换头、多视图生成、换装与 3D 预览辅助。这套训练与自动化管线，最终帮助游戏美术效率提升 80%+。",
          tags: ["模型训练", "管线"],
          link: {
            href: URLS.contact,
            label: "索取详情",
            target: "_self",
          },
        },
      ],
      workItems: [
        {
          title: "ComfyUI 工作流设计",
          year: "2025",
          text:
            "围绕电商图像、批量出图与资产一致性，设计可复用的 ComfyUI 节点流程与工作流链路。",
          tags: ["ComfyUI", "工作流", "视觉"],
          link: {
            href: URLS.comfy,
            label: "打开工作流",
            target: "_blank",
          },
        },
        {
          title: "AI 电商出图系统",
          year: "2025",
          text:
            "搭建模板驱动的 AI 电商图像生产系统，在速度、稳定性与 SKU 变化之间做平衡。",
          tags: ["电商", "AI 图像", "模板"],
          link: {
            href: URLS.contact,
            label: "索取详情",
            target: "_self",
          },
        },
        {
          title: "Yobox 工具站",
          year: "2025",
          text:
            "把 AI 工具想法快速落成网页体验，用前端迭代去验证真实使用价值。",
          tags: ["AI 工具", "前端"],
          link: {
            href: URLS.app,
            label: "打开产品",
            target: "_blank",
          },
        },
        {
          title: "ComfyUI 无限画布",
          year: "2025",
          text:
            "探索画布式工作流编辑，让节点逻辑更容易阅读、连接与扩展。",
          tags: ["画布", "产品 UI"],
          link: {
            href: URLS.comfy,
            label: "打开画布",
            target: "_blank",
          },
        },
        {
          title: "API Relay Hub",
          year: "2025",
          text:
            "把模型调用与工作流接口打包成更实用的 API 层，支持轻量产品实验。",
          tags: ["API", "AI Coding"],
          link: {
            href: URLS.api,
            label: "打开 API",
            target: "_blank",
          },
        },
        {
          title: "Amazon SKU 自动化",
          year: "2025",
          text:
            "围绕 Amazon SKU 图片生产做自动化设计，减少重复工作并提升交付稳定性。",
          tags: ["自动化", "SKU", "运营"],
          link: {
            href: URLS.contact,
            label: "索取详情",
            target: "_self",
          },
        },
        {
          title: "AI 编码网页产品",
          year: "2025",
          text:
            "用 AI Coding 流程更快交付小型网页产品、Landing Page 与功能实验。",
          tags: ["Vibe Coding", "Web", "原型"],
          link: {
            href: URLS.app,
            label: "打开产品",
            target: "_blank",
          },
        },
        {
          title: "AI 相机与特效设计",
          year: "2024",
          text:
            "参与 Faceme、Dressup、Agecam、Yearcam、Remagix、Vini 等产品的玩法、特效与功能设计。",
          tags: ["AI 相机", "功能", "视觉"],
          link: {
            href: URLS.contact,
            label: "索取详情",
            target: "_self",
          },
        },
        {
          title: "海外 AI 趋势研究",
          year: "2024",
          text:
            "持续跟踪海外社区、趋势与产品信号，帮助更快判断概念方向与功能机会。",
          tags: ["研究", "趋势", "产品"],
          link: {
            href: URLS.contact,
            label: "索取详情",
            target: "_self",
          },
        },
        {
          title: "Figma UI 与原型",
          year: "2024",
          text:
            "支持产品方向的界面设计、线框图与轻量原型，补齐从想法到落地的表达链路。",
          tags: ["Figma", "UI", "原型"],
          link: {
            href: URLS.contact,
            label: "索取详情",
            target: "_self",
          },
        },
        {
          title: "游戏角色 LoRA 训练",
          year: "2023",
          text:
            "训练游戏角色方向的 LoRA 与 Stable Diffusion 模型，用于风格化资产生成与可控生产。",
          tags: ["LoRA", "SD", "训练"],
          link: {
            href: URLS.contact,
            label: "索取详情",
            target: "_self",
          },
        },
        {
          title: "角色自动化管线",
          year: "2023",
          text:
            "搭建换头、多视图、换装与 3D 预览辅助流程，帮助美术效率提升 80%+。",
          tags: ["管线", "自动化", "80%+"],
          link: {
            href: URLS.contact,
            label: "索取详情",
            target: "_self",
          },
        },
      ],
    },
  };

  let scheduled = false;

  function normalizePath(pathname) {
    if (!pathname) {
      return "/";
    }
    return pathname.endsWith("/") ? pathname : `${pathname}/`;
  }

  function qs(selector, root = document) {
    return root.querySelector(selector);
  }

  function qsa(selector, root = document) {
    return Array.from(root.querySelectorAll(selector));
  }

  function setText(element, value) {
    if (!element || typeof value !== "string") {
      return;
    }
    element.textContent = value;
  }

  function setHTML(element, value) {
    if (!element || typeof value !== "string") {
      return;
    }
    element.innerHTML = value;
  }

  function setMeta(selector, content) {
    const meta = qs(selector);
    if (!meta) {
      return;
    }
    meta.setAttribute("content", content);
  }

  function renderTags(tags) {
    return tags.map((tag) => `<div class="tag">${tag}</div>`).join("");
  }

  function updateLink(link, data, fallbackLabel) {
    if (!link || !data) {
      return;
    }
    link.setAttribute("href", data.href);
    link.setAttribute("target", data.target || "_self");
    if (data.target === "_blank") {
      link.setAttribute("rel", "noreferrer");
    } else {
      link.removeAttribute("rel");
    }
    link.setAttribute("aria-label", fallbackLabel);
    const label = qs(".link-hover-circle__label span", link);
    setText(label, data.label);
  }

  function updateCopyMail(content) {
    qsa("[data-component='copy-mail']").forEach((element) => {
      element.setAttribute("data-mail", EMAIL);
    });
    setText(qs(".navbar__mail"), DISPLAY_EMAIL);
    setText(qs(".footer__end__mail"), DISPLAY_EMAIL);
    const talkMail = qs(".talk__form__to [data-component='copy-mail']");
    if (talkMail) {
      talkMail.textContent = `( ${DISPLAY_EMAIL} )`;
      talkMail.setAttribute("data-mail", EMAIL);
    }
    const navMailWrapper = qs(".navbar__wrapper [data-component='copy-mail']");
    if (navMailWrapper) {
      navMailWrapper.setAttribute("data-mail", EMAIL);
    }
  }

  function ensureLanguageToggle() {
    const wrapper = qs(".navbar__wrapper");
    if (!wrapper) {
      return;
    }
    let toggle = qs(".personalize-lang", wrapper);
    if (!toggle) {
      toggle = document.createElement("div");
      toggle.className = "personalize-lang";
      toggle.setAttribute("aria-label", "Language toggle");
      toggle.innerHTML = [
        "<button class='personalize-lang__button' type='button' data-lang='en' data-cursor='none'>EN</button>",
        "<button class='personalize-lang__button' type='button' data-lang='zh' data-cursor='none'>中文</button>",
      ].join("");
      const mailBlock = qs("[data-component='copy-mail']", wrapper);
      wrapper.insertBefore(toggle, mailBlock || null);
      qsa(".personalize-lang__button", toggle).forEach((button) => {
        button.addEventListener("click", () => {
          setLanguage(button.getAttribute("data-lang"));
        });
      });
    }
    const current = getLanguage();
    qsa(".personalize-lang__button", toggle).forEach((button) => {
      const active = button.getAttribute("data-lang") === current;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function getLanguage() {
    try {
      const saved =
        window.localStorage.getItem(STORAGE_KEY) ||
        window.localStorage.getItem(LEGACY_STORAGE_KEY);
      if (saved === "en" || saved === "zh") {
        return saved;
      }
    } catch (error) {
      // ignore storage access issues
    }
    const languages = Array.isArray(navigator.languages) ? navigator.languages : [];
    const prefersChinese =
      navigator.language.toLowerCase().startsWith("zh") ||
      languages.some((lang) => lang.toLowerCase().startsWith("zh"));
    return prefersChinese ? "zh" : "en";
  }

  function setLanguage(lang) {
    if (lang !== "en" && lang !== "zh") {
      return;
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      // ignore storage access issues
    }
    scheduleApply();
  }

  function patchHistory() {
    if (window.__yojoPersonalizePatched) {
      return;
    }
    window.__yojoPersonalizePatched = true;
    const notify = () => {
      window.dispatchEvent(new Event("personalize:urlchange"));
    };
    const originalPushState = window.history.pushState.bind(window.history);
    const originalReplaceState = window.history.replaceState.bind(window.history);
    window.history.pushState = function pushState(...args) {
      const result = originalPushState(...args);
      notify();
      return result;
    };
    window.history.replaceState = function replaceState(...args) {
      const result = originalReplaceState(...args);
      notify();
      return result;
    };
    window.addEventListener("popstate", notify);
  }

  function currentCase(content) {
    const path = normalizePath(window.location.pathname);
    return content.cases.find((item) => item.path === path) || null;
  }

  function applyMeta(content) {
    const path = normalizePath(window.location.pathname);
    const activeCase = currentCase(content);
    let title = content.meta.homeTitle;
    let description = content.meta.homeDescription;

    if (activeCase) {
      title = `${activeCase.title} - ${content.brand}`;
      description = activeCase.text;
    } else if (path === "/works/") {
      title = content.meta.worksTitle;
    } else if (path === "/about/") {
      title = content.meta.aboutTitle;
    } else if (path === "/start-a-project/") {
      title = content.meta.startTitle;
    } else if (path === "/shop/") {
      title = content.meta.shopTitle;
    }

    document.title = title;
    setMeta("meta[name='description']", description);
    setMeta("meta[property='og:title']", title);
    setMeta("meta[property='og:description']", description);
    setMeta("meta[name='twitter:title']", title);
    setMeta("meta[name='twitter:description']", description);
    setMeta("meta[property='og:site_name']", content.brand);
    setMeta("meta[name='twitter:site']", content.brand);

    const jsonLd = qs("script[type='application/ld+json']");
    if (jsonLd) {
      try {
        const data = JSON.parse(jsonLd.textContent);
        data.name = content.brand;
        data.url = window.location.origin;
        data.description = description;
        data.contactPoint = {
          "@type": "ContactPoint",
          contactType: "Portfolio",
          telephone: PHONE,
          email: EMAIL,
        };
        data.sameAs = [URLS.app, URLS.comfy, URLS.api];
        jsonLd.textContent = JSON.stringify(data);
      } catch (error) {
        // ignore invalid json-ld payloads
      }
    }
  }

  function applyCookie(content) {
    const mainModule = qs(".cookieconsent__main");
    const prefsModule = qs(".cookieconsent__prefs");
    if (!mainModule || !prefsModule) {
      return;
    }

    setText(qs("header h3", mainModule), content.cookie.mainTitle);
    setText(qs(".accept-all-bt span", mainModule), content.cookie.ok);

    setText(qs(".cookieconsent__title-wrapper h3", prefsModule), content.cookie.prefsTitle);
    setText(qs("header p", prefsModule), content.cookie.prefsText);

    qsa(".cookieconsent__item", prefsModule).forEach((item, index) => {
      const source = content.cookie.items[index];
      if (!source) {
        return;
      }
      item.setAttribute("data-name", source.name);
      setText(qs(".cookieconsent__tab-title h3", item), source.name);
      setText(qs(".cookieconsent__tab-content p", item), source.text);
    });

    const actionButtons = qsa(".cookieconsent__actions .accept-all-bt span", prefsModule);
    if (actionButtons[0]) {
      setText(actionButtons[0], content.cookie.acceptAll);
    }
    setText(qs(".decline-bt span", prefsModule), content.cookie.decline);
    setText(qs(".save-bt span", prefsModule), content.cookie.save);
  }

  function applyNavbar(content) {
    const navLinks = qsa(".navbar__link");
    navLinks.forEach((link, index) => {
      const source = content.nav[index];
      if (!source) {
        return;
      }
      link.setAttribute("href", source.href);
      link.setAttribute("target", source.target);
      link.setAttribute("aria-label", source.ariaLabel);
      if (source.target === "_blank") {
        link.setAttribute("rel", "noreferrer");
        link.removeAttribute("data-router");
      } else {
        link.removeAttribute("rel");
        link.setAttribute("data-router", "custom");
      }
      setText(qs(".navbar__link__label span", link), source.label);
    });
  }

  function applyHero(content) {
    const heroTitle = qs(".hero__subtitle");
    if (heroTitle) {
      setHTML(
        heroTitle,
        [
          `<span class="to-split">${content.hero.title[0]}</span>`,
          `<span class="to-split">${content.hero.title[1]}</span>`,
          "<span>",
          `<span class="to-split for">${content.hero.title[2]}</span>`,
          "<span class='only-mobile'>&nbsp;</span>",
          `<span class="to-split">${content.hero.title[3]}</span>`,
          "</span>",
        ].join(""),
      );
    }

    const preloaderWords = qsa(".main-preloader__word");
    if (preloaderWords[0]) {
      if (!preloaderWords[0].instance || !preloaderWords[0].instance.started) {
        setText(preloaderWords[0], content.preloader.top);
      }
    }
    if (preloaderWords[1]) {
      if (!preloaderWords[1].instance || !preloaderWords[1].instance.started) {
        setText(preloaderWords[1], content.preloader.bottom);
      }
    }
    const preloaderText = qs(".main-preloader__text");
    if (preloaderText && (!preloaderText.instance || !preloaderText.instance.started)) {
      setText(preloaderText, content.preloader.text);
    }
    setText(qs(".discover .text"), content.ui.cursorDiscover);
    setText(qs(".hero__text"), content.hero.text);
    setHTML(qs(".sub-hero__title"), content.subHero);
  }

  function applyHeaderSections(content) {
    const labels = qsa(".header-section__label");
    const titles = qsa(".header-section__title");
    if (labels[0]) {
      setText(labels[0], content.ui.featuredLabel);
    }
    if (titles[0]) {
      setText(titles[0], content.ui.featuredTitle);
    }
    if (labels[1]) {
      setText(labels[1], content.ui.focusLabel);
    }
    if (titles[1]) {
      setText(titles[1], content.ui.focusTitle);
    }
  }

  function applyCases(content) {
    const caseCards = qsa(".case-card");
    caseCards.forEach((card, index) => {
      const source = content.cases[index];
      if (!source) {
        return;
      }
      setText(qs(".case-card__wrapper__article__title", card), source.teaser);
      setText(qs(".case-card__wrapper__article__year", card), source.label);
      const tags = qs(".case-card__wrapper__tags", card);
      setHTML(tags, renderTags(source.tags));
      const link = qs(".case-card__wrapper", card);
      if (link) {
        link.setAttribute("aria-label", source.title);
      }
    });

    const works = qsa(".work-details .work");
    works.forEach((work, index) => {
      const source = content.cases[index];
      if (!source) {
        return;
      }
      setText(qs(".work__title", work), source.title);
      setText(qs(".work__year", work), source.year);
      setText(qs(".work__text", work), source.text);
      setHTML(qs(".work__tags", work), renderTags(source.tags));
      updateLink(qs(".work__link", work), source.link, source.title);
      const nextProject = qsa(".work__next-project span", work);
      if (nextProject[0]) {
        setText(nextProject[0], content.ui.keepScrollingPrimary);
      }
      if (nextProject[1]) {
        setText(nextProject[1], content.ui.keepScrollingSecondary);
      }
    });
  }

  function applyWorkList(content) {
    const items = qsa(".work-item");
    items.forEach((item, index) => {
      const source = content.workItems[index];
      if (!source) {
        return;
      }
      setText(qs(".work-item__title", item), source.title);
      setText(qs(".work-item__year", item), source.year);
      setHTML(qs(".tags", item), renderTags(source.tags));
      setText(qs(".work-item__details__text", item), source.text);
      updateLink(qs(".work-item__details__article a", item), source.link, source.title);
    });
  }

  function applyAbout(content) {
    setHTML(
      qs(".about__header .mixed-title"),
      `<span class="to-split">${content.about.mixedTitle}</span>`,
    );
    setHTML(qs(".about__header__sub-title"), content.about.subTitle);

    const aboutColumns = qsa(".about__content__column");
    if (aboutColumns[0]) {
      setText(qs("h4", aboutColumns[0]), content.about.introTitle);
      setHTML(qs("p", aboutColumns[0]), content.about.introText);
    }

    const aboutItems = qsa(".about__content__item");
    aboutItems.forEach((item, index) => {
      const source = content.about.items[index];
      if (!source) {
        return;
      }
      setText(qs(".about__content__item__title", item), source.title);
      setHTML(qs(".about__content__item__text", item), source.text);
    });

    setText(qs(".about__clients__title"), content.about.clientsTitle);
    const clientsText = qs(".about__clients__text");
    if (clientsText) {
      setHTML(
        clientsText,
        content.about.clients
          .map((client) => `<span class="client">${client}</span>`)
          .join(" / "),
      );
    }

    const awardItems = qsa(".about__awards__item");
    awardItems.forEach((item, index) => {
      const source = content.about.awards[index];
      if (!source) {
        return;
      }
      setHTML(qs("h3", item), `<span class="to-split">${source.title}</span>`);
      setHTML(qs(".tags", item), renderTags(source.tags));
    });
  }

  function applyTalk(content) {
    setText(qs(".talk__title"), content.ui.talkTitle);
    setText(qs(".talk__form__to .talk__form__line-wrapper > div:first-child"), content.talk.toLabel);

    const messageRows = qsa(".talk__form__message__wrapper");
    if (messageRows[0]) {
      setHTML(qs("span", messageRows[0]), content.talk.intro);
    }
    if (messageRows[1]) {
      setHTML(qs("span", messageRows[1]), content.talk.name);
    }
    if (messageRows[2]) {
      setHTML(qs("span", messageRows[2]), content.talk.email);
    }
    if (messageRows[3]) {
      setHTML(qs("span", messageRows[3]), content.talk.project);
    }
    if (messageRows[4]) {
      setHTML(qs("span", messageRows[4]), content.talk.budget);
    }
    if (messageRows[5]) {
      setHTML(qs("span", messageRows[5]), content.talk.note);
    }

    const nameInput = qs(".talk__form input[name='name']");
    const emailInput = qs(".talk__form input[name='email']");
    const noteInput = qs(".talk__form input[name='note']");
    if (nameInput) {
      nameInput.setAttribute("aria-label", content.talk.inputLabels.name);
    }
    if (emailInput) {
      emailInput.setAttribute("aria-label", content.talk.inputLabels.email);
    }
    if (noteInput) {
      noteInput.setAttribute("aria-label", content.talk.inputLabels.note);
    }

    setText(qs(".talk__form__send__bt .button"), content.ui.send);
    setText(qs(".talk__form__success .mcgyver-1"), content.talk.successTop);
    setText(qs(".talk__form__success .mcgyver-2"), content.talk.successBottom);
  }

  function applyFooter(content) {
    setHTML(
      qs(".footer__title"),
      [
        `<span class="to-split">${content.footer.title[0]}</span>`,
        `<span class="to-split rolling">${content.footer.title[1]}</span>`,
        `<span class="to-split">${content.footer.title[2]}</span>`,
      ].join(""),
    );

    setText(qs(".footer__social__label"), content.ui.socialLabel);
    const footerLinks = qsa(".footer__social__links a");
    footerLinks.forEach((link, index) => {
      const source = content.footer.links[index];
      if (!source) {
        return;
      }
      link.setAttribute("href", source.href);
      link.setAttribute("target", source.target);
      if (source.target === "_blank") {
        link.setAttribute("rel", "noreferrer");
      } else {
        link.removeAttribute("rel");
      }
      setText(link, source.label);
    });

    setText(qs(".footer__end__copyright"), content.ui.footerCopyright);
    const footerCenterTexts = qsa(".footer__end__center span[data-component='text-anim']");
    if (footerCenterTexts[0]) {
      setText(footerCenterTexts[0], content.ui.footerLead);
    }
    if (footerCenterTexts[1]) {
      setText(footerCenterTexts[1], content.ui.footerMid);
    }
    const footerTags = qsa(".footer__end__center .tag");
    if (footerTags[0]) {
      setText(footerTags[0], content.ui.footerTag1);
    }
    if (footerTags[1]) {
      setText(footerTags[1], content.ui.footerTag2);
    }
  }

  function applyShared(content) {
    document.documentElement.setAttribute(
      "lang",
      content === SITE.zh ? "zh-CN" : "en-US",
    );

    ensureLanguageToggle();
    updateCopyMail(content);
    setText(qs(".work-details__close-bt"), content.ui.close);
    applyCookie(content);
    applyNavbar(content);
    applyHero(content);
    applyHeaderSections(content);
    applyCases(content);
    applyWorkList(content);
    applyAbout(content);
    applyTalk(content);
    applyFooter(content);
  }

  function applyLanguage() {
    const lang = getLanguage();
    const content = SITE[lang];
    applyMeta(content);
    applyShared(content);
  }

  function scheduleApply() {
    if (scheduled) {
      return;
    }
    scheduled = true;
    window.requestAnimationFrame(() => {
      scheduled = false;
      applyLanguage();
    });
  }

  function init() {
    patchHistory();
    ensureLanguageToggle();
    window.addEventListener("personalize:urlchange", scheduleApply);
    window.addEventListener("load", scheduleApply);
    scheduleApply();
  }

  init();
})();
