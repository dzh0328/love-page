const pageContent = {
  site: {
    brand: "UNVEIL OF US",
    previewThumb: "./网页参考/contact_detail_late.jpg",
    defaultView: "overview",
  },
  navItems: [
    { id: "overview", label: "Unveil + Projects" },
    { id: "detail", label: "Research" },
    { id: "studio", label: "Studio" },
    { id: "contact", label: "Contact" },
  ],
  modePills: [
    { id: "overview", label: "Overview" },
    { id: "detail", label: "Index" },
  ],
  filters: [
    { id: "all", label: "All 12" },
    { id: "graphic", label: "Graphic Identity 04" },
    { id: "site", label: "Site Design 03" },
    { id: "ai", label: "AI 03" },
    { id: "video", label: "Video 01" },
    { id: "three-d", label: "3D 01" },
  ],
  works: [
    {
      id: "red-signal",
      title: "Red Signal",
      tag: "Graphic identity",
      category: "graphic",
      year: "2026",
      theme: "cover story",
      media: { type: "image", src: "./网页参考/analysis_frames/frame_06s.jpg" },
      description: "把爱情像唱片封面那样悬挂在空气里，保留红色高光、透明板层和被光擦过的边缘。",
    },
    {
      id: "flower-static",
      title: "Flower Static",
      tag: "Graphic identity",
      category: "graphic",
      year: "2026",
      theme: "petal drift",
      media: { type: "image", src: "./网页参考/analysis_frames/frame_08s.jpg" },
      description: "柔焦花朵被夹在两层玻璃中间，像一段关系里最短暂也最亮的频段。",
    },
    {
      id: "night-index",
      title: "Night Index",
      tag: "Site design",
      category: "site",
      year: "2025",
      theme: "electric blue",
      media: { type: "image", src: "./assets/images/gallery-04.svg" },
      description: "用蓝色窗口和深色背景做出检索感，让页面像在翻看一盒被认真归档的纪念物。",
    },
    {
      id: "memory-threshold",
      title: "Memory Threshold",
      tag: "AI",
      category: "ai",
      year: "2026",
      theme: "haze portrait",
      media: { type: "image", src: "./网页参考/analysis_frames/frame_12s.jpg" },
      description: "朦胧的人像被留在留白中央，像参考视频里那种突然安静下来的停顿镜头。",
    },
    {
      id: "ocean-proof",
      title: "Ocean Proof",
      tag: "Site design",
      category: "site",
      year: "2025",
      theme: "liquid grain",
      media: { type: "image", src: "./assets/images/gallery-02.svg" },
      description: "把海面颗粒、浅色留白和柔雾层次合在一起，作为队列中的冷静缓冲段落。",
    },
    {
      id: "trace-network",
      title: "Trace Network",
      tag: "3D",
      category: "three-d",
      year: "2026",
      theme: "electric fibers",
      media: { type: "image", src: "./assets/images/story-03.svg" },
      description: "以更深的背景和神经纤维般的亮纹，让整条唱片轨迹有一段明显的能量抬升。",
    },
    {
      id: "reference-motion",
      title: "Reference Motion",
      tag: "Video",
      category: "video",
      year: "2026",
      theme: "source motion",
      media: {
        type: "video",
        src: "./网页参考/唱片参考1.mp4",
        poster: "./网页参考/唱片参考1.mp4.png",
      },
      description: "把原始参考视频直接放进展厅系统里，作为整个网页质感与时间节奏的核心样本。",
    },
    {
      id: "soft-pixel",
      title: "Soft Pixel",
      tag: "AI",
      category: "ai",
      year: "2026",
      theme: "pixel eye",
      media: { type: "image", src: "./网页参考/contact_detail_late.jpg" },
      description: "用黑白像素眼作为工作室语气的预告，也让总览和信息页之间有视觉上的呼应。",
    },
    {
      id: "quiet-field",
      title: "Quiet Field",
      tag: "Graphic identity",
      category: "graphic",
      year: "2025",
      theme: "violet horizon",
      media: { type: "image", src: "./网页参考/analysis_frames/frame_24s.jpg" },
      description: "大面积留白后接一张静止地平线，像在长廊里故意留下的呼吸位。",
    },
    {
      id: "warm-note",
      title: "Warm Note",
      tag: "Graphic identity",
      category: "graphic",
      year: "2025",
      theme: "paper fade",
      media: { type: "image", src: "./assets/images/story-02.svg" },
      description: "更轻、更暖，像整个画廊临近末尾时的柔和收束。",
    },
    {
      id: "deep-water",
      title: "Deep Water",
      tag: "3D",
      category: "three-d",
      year: "2026",
      theme: "under current",
      media: { type: "image", src: "./assets/images/gallery-03.svg" },
      description: "在队列尾部保持一张深色作品，能让前面的高亮卡片显得更通透。",
    },
    {
      id: "contact-print",
      title: "Contact Print",
      tag: "Site design",
      category: "site",
      year: "2026",
      theme: "editorial sheet",
      media: { type: "image", src: "./网页参考/contact_sheet.jpg" },
      description: "把多帧缩略图当成编辑台视图，提示用户这不只是一个首屏，而是一个可切换的展览系统。",
    },
  ],
  studioInfo: {
    label: "Studio",
    title: "Love, archived as a white-space exhibition.",
    intro:
      "UNVEIL OF US 是一个以关系、记忆与封面感为主题的网页展厅实验。我们把“像唱片一样陈列爱情”这件事当作方法，而不是装饰，用更少的界面、更轻的边框和更长的留白，让观看本身变成叙事。",
    clientsLabel: "Selected chapters",
    clients: [
      "First look",
      "Afterglow drive",
      "Soft static",
      "Violet horizon",
      "Quiet field",
      "Late reply",
      "Signal bloom",
      "Contact print",
    ],
    recognitionsLabel: "Recognition",
    recognitions: ["Reference study #1", "Single-page build", "Pure HTML / CSS / JS"],
    servicesLabel: "Services",
    services: ["Graphic identity", "Site design", "AI image curation", "Video rhythm", "3D layering"],
    portrait: "./网页参考/contact_detail_late.jpg",
  },
  contactInfo: {
    label: "Contact",
    title: "Start a new memory stack.",
    intro:
      "如果你也想把某段关系、纪念项目或视觉档案做成这种极简白色展厅，可以从这里留下线索。这个页面会延续参考视频末段那种克制、干净但仍然有触感的界面语言。",
    note: "默认不真正提交表单，只还原版式、字段密度和页面质感。",
    chips: ["Creative direction", "Site structure", "Visual curation", "Memory archive"],
    metaLeft: "Based in Shanghai\nAvailable for selected digital commissions",
    metaRight: "Response window\nUsually within 48 hours",
  },
};

const personalPhotoFiles = [
  "06f254a96e71a5fa09ca17e34d01f336.jpg",
  "2cf9cba385ed3feba0cd545b31392eae.jpeg",
  "628c5b902i839f95fb05947802037326.JPG",
  "9ae10513f5897b5d776f18091a3b805e.jpg",
  "DSCF0014.JPG",
  "DSCF0091.JPG",
  "DSCF0103.JPG",
  "DSCF0351.jpg",
  "DSCF0386.jpg",
  "DSCF0399.jpg",
  "DSCF0524.jpg",
  "DSCF0566.jpg",
  "DSCF0731.JPG",
  "DSCF0732.JPG",
  "DSCF7149.JPG",
  "DSCF7524.JPG",
  "DSCF7939.JPG",
  "DSCF8042.JPG",
  "DSCF8875.JPG",
  "DSCF8890.JPG",
  "DSCF8997.JPG",
  "DSCF9062.JPG",
  "IMG_0034.jpeg",
  "IMG_0043.jpeg",
  "IMG_0072.jpeg",
  "IMG_0087.jpeg",
  "IMG_0144.JPG",
  "IMG_0145.JPG",
  "IMG_0149.JPG",
  "IMG_0152.JPG",
  "IMG_0155.JPG",
  "IMG_0208.JPG",
  "IMG_0216.JPG",
  "IMG_0235.JPG",
  "IMG_0236.JPG",
  "IMG_0242.JPG",
  "IMG_0255.JPG",
  "IMG_0267.JPG",
  "IMG_0383.jpeg",
  "IMG_0765.jpeg",
  "IMG_0768.jpeg",
  "IMG_0863.jpeg",
  "IMG_0918.jpeg",
  "IMG_1079.JPG",
  "IMG_1081.JPG",
  "IMG_1090.JPG",
  "IMG_1102.JPG",
  "IMG_1105.JPG",
  "IMG_1493.JPG",
  "IMG_1612.jpeg",
  "IMG_3112.jpeg",
  "IMG_3489.jpeg",
  "IMG_3505.jpeg",
  "IMG_3637.jpeg",
  "IMG_5256.jpeg",
  "IMG_8781.JPG",
  "IMG_9627.JPG",
  "IMG_9719.JPG",
  "XQN_2529.jpg",
];

const categoryCycle = ["graphic", "site", "ai", "three-d"];
const categoryMeta = {
  graphic: { tag: "Graphic identity", label: "Graphic Identity" },
  site: { tag: "Site design", label: "Site Design" },
  ai: { tag: "AI", label: "AI" },
  "three-d": { tag: "3D", label: "3D" },
};

function toThumbPath(src) {
  const filename = src;
  const baseName = filename.replace(/\.[^.]+$/, "");
  return `./assets/generated/personal-thumbs/${baseName}.jpg`;
}

function toFullPath(src) {
  return `./assets/generated/personal-full/${src}`;
}

pageContent.site.previewThumb = toThumbPath(personalPhotoFiles[0]);
pageContent.studioInfo.portrait = toThumbPath(personalPhotoFiles[1]);
pageContent.works = personalPhotoFiles.map((src, index) => {
  const baseName = src.replace(/\.[^.]+$/, "");
  const category = categoryCycle[index % categoryCycle.length];
  const meta = categoryMeta[category];

  return {
    id: `photo-${index + 1}`,
    title: baseName,
    tag: meta.tag,
    category,
    year: "2026",
    theme: "personal archive",
    media: {
      type: "image",
      src: toThumbPath(src),
      fullSrc: toFullPath(src),
    },
    description: `来自个人材料排版文件夹的照片档案：${baseName}。`,
  };
});

pageContent.filters = pageContent.filters.map((filter) => {
  if (filter.id === "all") {
    return { ...filter, label: `All ${pageContent.works.length}` };
  }

  const count = pageContent.works.filter((work) => work.category === filter.id).length;
  const baseLabel = categoryMeta[filter.id]?.label || filter.label.split(" ")[0] || filter.label;
  return { ...filter, label: `${baseLabel} ${count}` };
});

const state = {
  view: pageContent.site.defaultView,
  activeFilter: "all",
  activeWorkId: pageContent.works[0].id,
  galleryProgress: 0,
  hoveredWorkId: null,
  interactionMode: "desktop",
};

const app = document.querySelector("#app");
const topNav = document.querySelector("[data-top-nav]");
const previewTile = document.querySelector(".preview-tile img");
let trackMotionCleanup = null;
let overviewCleanup = null;
const mobileMediaQuery = window.matchMedia("(max-width: 720px), (pointer: coarse)");

if (previewTile) {
  previewTile.src = pageContent.site.previewThumb;
}

function getFilteredWorks() {
  if (state.activeFilter === "all") {
    return pageContent.works;
  }

  return pageContent.works.filter((work) => work.category === state.activeFilter);
}

function getActiveWork() {
  const current = pageContent.works.find((work) => work.id === state.activeWorkId);
  return current || pageContent.works[0];
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function isMobileInteractionMode() {
  return state.interactionMode === "mobile";
}

function updateInteractionMode() {
  state.interactionMode = mobileMediaQuery.matches ? "mobile" : "desktop";
}

function getContinuousLoopSlot(index, progress, total, lead = 4.15, trail = 8.8) {
  if (total <= 1) {
    return 0;
  }

  let slot = index - progress;

  while (slot < -lead) {
    slot += total;
  }

  while (slot > trail) {
    slot -= total;
  }

  return slot;
}

function syncGalleryProgressToActiveWork() {
  const works = getFilteredWorks();
  const index = works.findIndex((work) => work.id === state.activeWorkId);
  state.galleryProgress = index === -1 ? 0 : index;
}

function syncActiveWorkFromProgress() {
  const works = getFilteredWorks();
  const total = works.length;
  if (total === 0) {
    state.activeWorkId = pageContent.works[0].id;
    return;
  }

  const normalized = ((Math.round(state.galleryProgress) % total) + total) % total;
  const activeIndex = normalized;
  state.activeWorkId = works[activeIndex]?.id || pageContent.works[0].id;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderMedia(media, title, eager = false) {
  if (media.type === "video") {
    return `
      <video muted loop playsinline preload="metadata" ${eager ? "autoplay" : ""} poster="${media.poster || ""}">
        <source src="${media.src}" type="video/mp4" />
      </video>
    `;
  }

  const imageSrc = eager ? media.fullSrc || media.src : media.src;
  return `<img src="${imageSrc}" alt="${escapeHtml(title)}" loading="${eager ? "eager" : "lazy"}" />`;
}

function renderTopNav() {
  if (!topNav) {
    return;
  }

  topNav.innerHTML = pageContent.navItems
    .map(
      (item) => `
        <button
          class="chrome-button${state.view === item.id ? " is-active" : ""}"
          type="button"
          data-action="go-view"
          data-view="${item.id}"
        >
          ${item.label}
        </button>
      `
    )
    .join("");
}

function renderOverview() {
  const works = getFilteredWorks();

  if (!works.some((work) => work.id === state.activeWorkId)) {
    state.activeWorkId = works[0]?.id || pageContent.works[0].id;
  }
  syncGalleryProgressToActiveWork();

  return `
    <section class="scene">
      <div class="scene-grid is-overview">
        <section class="gallery-stage">
          <div class="track-perspective">
            <div class="gallery-track" data-gallery-track>
              ${works
                .map((work, index) => {
                  const isFocused = work.id === state.activeWorkId;
                  return `
                    <article
                      class="work-card${isFocused ? " is-focused" : ""}"
                      style="--index:${index}; --slot:${index};"
                      data-work-id="${work.id}"
                      data-work-index="${index}"
                    >
                      <button
                        class="work-card-hover"
                        type="button"
                        data-hover-work-id="${work.id}"
                        aria-label="聚焦 ${escapeHtml(work.title)}"
                      ></button>
                      <button
                        class="work-card-button"
                        type="button"
                        data-action="open-detail"
                        data-work-id="${work.id}"
                        aria-label="查看 ${escapeHtml(work.title)}"
                      ></button>
                      <div class="work-card-backdrop"></div>
                      <div class="work-layer layer-b" aria-hidden="true">
                        <div class="work-card-plate">
                          <div class="work-card-media">
                            ${renderMedia(work.media, work.title)}
                          </div>
                          <div class="work-card-glass"></div>
                        </div>
                      </div>
                      <div class="work-layer layer-a">
                        <div class="work-card-plate">
                          <div class="work-card-media">
                            ${renderMedia(work.media, work.title, index < 2)}
                          </div>
                          <div class="work-card-glass"></div>
                          <div class="work-card-meta">
                            <span>${work.tag}</span>
                            <strong>${work.title}</strong>
                          </div>
                        </div>
                      </div>
                    </article>
                  `;
                })
                .join("")}
            </div>
          </div>
        </section>

        <aside class="side-rail" aria-label="筛选">
          ${pageContent.filters
            .map(
              (filter) => `
                <button
                  class="filter-pill${state.activeFilter === filter.id ? " is-active" : ""}"
                  type="button"
                  data-action="set-filter"
                  data-filter="${filter.id}"
                >
                  ${filter.label}
                </button>
              `
            )
            .join("")}
        </aside>
      </div>
    </section>
  `;
}

function renderDetail() {
  const work = getActiveWork();
  const visibleWorks = getFilteredWorks();
  const currentIndex = Math.max(
    0,
    visibleWorks.findIndex((item) => item.id === work.id)
  );

  return `
    <section class="scene">
      <section class="detail-view">
        <div class="detail-visual">
          <div class="detail-frame">
            ${renderMedia(work.media, work.title, true)}
          </div>
        </div>

        <div class="detail-copy">
          <p class="detail-kicker">${work.tag} / ${work.year}</p>
          <h1 class="detail-title">${work.title}</h1>
          <p class="detail-description">${work.description}</p>
          <p class="detail-counter">${String(currentIndex + 1).padStart(2, "0")} / ${String(visibleWorks.length).padStart(2, "0")}</p>

          <div class="detail-actions">
            <button class="pager-button" type="button" data-action="step-detail" data-direction="-1">Previous</button>
            <button class="pager-button" type="button" data-action="step-detail" data-direction="1">Next</button>
            <button class="pager-button" type="button" data-action="go-view" data-view="overview">Back to overview</button>
          </div>
        </div>
      </section>
    </section>
  `;
}

function renderStudio() {
  const studio = pageContent.studioInfo;
  return `
    <section class="scene">
      <section class="studio-view">
        <div class="studio-copy">
          <p class="section-label">${studio.label}</p>
          <h1 class="section-title">${studio.title}</h1>
          <p class="studio-intro">${studio.intro}</p>

          <section class="studio-block">
            <p class="section-label">${studio.clientsLabel}</p>
            <ul class="studio-list">
              ${studio.clients.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </section>

          <section class="studio-block">
            <p class="section-label">${studio.recognitionsLabel}</p>
            <ul class="studio-list">
              ${studio.recognitions.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </section>

          <section class="studio-block">
            <p class="section-label">${studio.servicesLabel}</p>
            <div class="studio-tags">
              ${studio.services.map((item) => `<span class="contact-chip">${item}</span>`).join("")}
            </div>
          </section>
        </div>

        <div class="studio-visual">
          <figure class="studio-portrait">
            <img src="${studio.portrait}" alt="Studio visual" loading="eager" />
          </figure>
        </div>
      </section>
    </section>
  `;
}

function renderContact() {
  const contact = pageContent.contactInfo;
  return `
    <section class="scene">
      <section class="contact-view">
        <div class="contact-copy">
          <p class="contact-label">${contact.label}</p>
          <h1 class="section-title">${contact.title}</h1>
          <p class="contact-intro">${contact.intro}</p>
          <div class="contact-chips">
            ${contact.chips.map((item) => `<span class="contact-chip">${item}</span>`).join("")}
          </div>
          <p class="contact-note">${contact.note}</p>
        </div>

        <div class="contact-panel">
          <div class="contact-grid">
            <label class="field">
              <span>Name</span>
              <input type="text" placeholder="Your name" />
            </label>
            <label class="field">
              <span>Email</span>
              <input type="email" placeholder="hello@example.com" />
            </label>
            <label class="field">
              <span>Project type</span>
              <input type="text" placeholder="Single page exhibition" />
            </label>
            <label class="field">
              <span>Timeline</span>
              <input type="text" placeholder="April / May" />
            </label>
            <label class="field is-full">
              <span>What should this memory feel like?</span>
              <textarea placeholder="Describe the mood, source material and the level of archival detail you want to preserve."></textarea>
            </label>
          </div>

          <div class="contact-meta">
            <p>${contact.metaLeft.replace("\n", "<br />")}</p>
            <p>${contact.metaRight.replace("\n", "<br />")}</p>
          </div>
        </div>
      </section>
    </section>
  `;
}

function renderModePills() {
  return `
    <div class="bottom-modes">
      ${pageContent.modePills
        .map((item) => {
          const targetView = item.id === "detail" ? "detail" : "overview";
          const isActive = item.id === "detail" ? state.view === "detail" : state.view === "overview";
          return `
            <button
              class="mode-pill${isActive ? " is-active" : ""}"
              type="button"
              data-action="go-view"
              data-view="${targetView}"
            >
              ${item.label}
            </button>
          `;
        })
        .join("")}
    </div>
  `;
}

function renderStatusNote() {
  const note =
    state.view === "overview"
      ? "Overview / drifting gallery"
      : state.view === "detail"
        ? "Detail / enlarged cover"
        : state.view === "studio"
          ? "Studio / information layout"
          : "Contact / inquiry frame";

  return `<div class="status-note">${note}</div>`;
}

function renderApp() {
  if (overviewCleanup) {
    overviewCleanup();
    overviewCleanup = null;
  }

  let content = "";

  if (state.view === "overview") {
    content = renderOverview();
  } else if (state.view === "detail") {
    content = renderDetail();
  } else if (state.view === "studio") {
    content = renderStudio();
  } else if (state.view === "contact") {
    content = renderContact();
  } else {
    state.view = "overview";
    content = renderOverview();
  }

  app.innerHTML = `${content}${renderModePills()}${renderStatusNote()}`;
  renderTopNav();
  hydrateMedia();
  setupTrackMotion();
  setupOverviewInteractions();
  applyOverviewLayout();
}

function hydrateMedia() {
  const videos = document.querySelectorAll("video");
  videos.forEach((video) => {
    video.play().catch(() => {});
  });
}

function setupTrackMotion() {
  const track = document.querySelector("[data-gallery-track]");
  if (trackMotionCleanup) {
    trackMotionCleanup();
    trackMotionCleanup = null;
  }

  if (!track) {
    return;
  }

  if (isMobileInteractionMode()) {
    track.style.setProperty("--drift-x", "0px");
    track.style.setProperty("--drift-y", "0px");
    return;
  }

  let frameId = 0;

  const handlePointerMove = (event) => {
    const bounds = track.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    cancelAnimationFrame(frameId);
    frameId = requestAnimationFrame(() => {
      track.style.setProperty("--drift-x", `${x * 18}px`);
      track.style.setProperty("--drift-y", `${y * 12}px`);
    });
  };

  const handlePointerLeave = () => {
    cancelAnimationFrame(frameId);
    track.style.setProperty("--drift-x", "0px");
    track.style.setProperty("--drift-y", "0px");
  };

  track.addEventListener("pointermove", handlePointerMove);
  track.addEventListener("pointerleave", handlePointerLeave);

  trackMotionCleanup = () => {
    cancelAnimationFrame(frameId);
    track.removeEventListener("pointermove", handlePointerMove);
    track.removeEventListener("pointerleave", handlePointerLeave);
  };
}

function applyOverviewLayout() {
  const track = document.querySelector("[data-gallery-track]");
  const cards = document.querySelectorAll(".work-card");

  if (!track || cards.length === 0) {
    return;
  }

  const works = getFilteredWorks();
  const total = works.length;
  syncActiveWorkFromProgress();
  const focusedWorkId = isMobileInteractionMode() ? state.activeWorkId : state.hoveredWorkId || state.activeWorkId;
  const mobileMode = isMobileInteractionMode();

  cards.forEach((card) => {
    const index = Number(card.dataset.workIndex || 0);
    const slot = getContinuousLoopSlot(index, state.galleryProgress, total, mobileMode ? 2.7 : 4.15, mobileMode ? 5.2 : 8.8);
    const isFocused = card.dataset.workId === focusedWorkId;
    const left = mobileMode ? 47.5 + slot * 12.2 : 34.2 + slot * 7.2;
    const top = mobileMode ? 52.5 - slot * 6.9 : 46.8 - slot * 4.7;
    const depth = mobileMode ? -slot * 92 : -slot * 138;
    const peakSlot = mobileMode ? 0.1 : 1.8;
    const distanceFromPeak = Math.abs(slot - peakSlot);
    const scale = mobileMode
      ? 1.09 - distanceFromPeak * 0.085 - Math.max(slot - peakSlot, 0) * 0.015
      : 1.03 - distanceFromPeak * 0.03 - Math.max(slot - peakSlot, 0) * 0.008;
    const baseOpacity = mobileMode
      ? clamp(1 - Math.max(slot, 0) * 0.11 - Math.max(-slot, 0) * 0.075, 0, 1)
      : clamp(1 - Math.max(slot, 0) * 0.1 - Math.max(-slot, 0) * 0.04, 0, 1);
    const fadeOutLeft = mobileMode ? clamp((slot + 2.7) / 1.2, 0, 1) : clamp((slot + 4.15) / 1.9, 0, 1);
    const fadeOutRight = mobileMode ? clamp((5.25 - slot) / 1.15, 0, 1) : 1;
    const opacity = clamp(baseOpacity * fadeOutLeft * fadeOutRight + Math.max(slot, 0) * (mobileMode ? 0.008 : 0.015), 0, 1);
    const visibility = mobileMode ? slot > -2.65 && slot < 5.25 : slot > -4.1 && slot < 8.75;

    card.style.setProperty("--slot", slot.toFixed(3));
    card.style.left = `${left}%`;
    card.style.top = `${top}%`;
    card.style.zIndex = String((isFocused ? 1800 : 1000) - Math.round(slot * 36));
    card.style.opacity = visibility ? opacity.toFixed(3) : "0";
    card.style.transform = isFocused
      ? `translate3d(0, 0, ${depth + (mobileMode ? 14 : 18)}px) scale(${(scale + (mobileMode ? 0.025 : 0.01)).toFixed(3)})`
      : `translate3d(0, 0, ${depth}px) scale(${scale.toFixed(3)})`;
    card.style.pointerEvents = visibility ? "auto" : "none";
    card.classList.toggle("is-focused", isFocused);
  });
}

function findClosestCardAtPoint(clientX, clientY, cards) {
  const hitStack = document.elementsFromPoint(clientX, clientY);
  const directWorkId = hitStack
    .find((element) => element instanceof HTMLElement && element.closest(".work-card"))
    ?.closest(".work-card")
    ?.dataset.workId;

  if (directWorkId) {
    return directWorkId;
  }

  let bestWorkId = null;
  let bestScore = Number.POSITIVE_INFINITY;

  cards.forEach((card) => {
    if (!(card instanceof HTMLElement) || card.style.pointerEvents === "none" || card.style.opacity === "0") {
      return;
    }

    const rect = card.getBoundingClientRect();
    const inside = clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
    if (!inside) {
      return;
    }

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const score = Math.abs(clientX - centerX) + Math.abs(clientY - centerY) * 0.6;

    if (score < bestScore) {
      bestScore = score;
      bestWorkId = card.dataset.workId || null;
    }
  });

  return bestWorkId;
}

function setupOverviewInteractions() {
  const track = document.querySelector("[data-gallery-track]");
  const cards = document.querySelectorAll(".work-card");

  if (!track || cards.length === 0) {
    return;
  }

  const mobileMode = isMobileInteractionMode();
  let pointerId = null;
  let startX = 0;
  let startProgress = 0;
  let moved = false;

  const handleWheel = (event) => {
    if (mobileMode) {
      return;
    }

    if (state.view !== "overview") {
      return;
    }

    event.preventDefault();
    const next = state.galleryProgress + event.deltaY * 0.0018;

    if (Math.abs(event.deltaY) < 0.01) {
      return;
    }

    state.galleryProgress = next;
    applyOverviewLayout();
  };

  const handlePointerMove = (event) => {
    if (mobileMode) {
      if (pointerId !== event.pointerId) {
        return;
      }

      event.preventDefault();
      const deltaX = event.clientX - startX;
      if (Math.abs(deltaX) > 4) {
        moved = true;
      }
      state.galleryProgress = startProgress - deltaX * 0.012;
      applyOverviewLayout();
      return;
    }

    const hitStack = document.elementsFromPoint(event.clientX, event.clientY);
    const bestTarget = hitStack.find((element) => element instanceof HTMLElement && element.dataset.hoverWorkId);
    const bestWorkId = bestTarget?.dataset.hoverWorkId || null;

    if (!bestWorkId) {
      return;
    }

    if (state.hoveredWorkId === bestWorkId && track.classList.contains("is-dimmed")) {
      return;
    }

    track.classList.add("is-dimmed");
    state.hoveredWorkId = bestWorkId;
    applyOverviewLayout();
  };

  const handlePointerLeave = () => {
    if (mobileMode) {
      return;
    }

    track.classList.remove("is-dimmed");
    state.hoveredWorkId = null;
    applyOverviewLayout();
    cards.forEach((item) => {
      item.classList.toggle("is-focused", item.dataset.workId === state.activeWorkId);
    });
  };

  const handlePointerDown = (event) => {
    if (!mobileMode || event.pointerType === "mouse") {
      return;
    }

    event.preventDefault();
    pointerId = event.pointerId;
    startX = event.clientX;
    startProgress = state.galleryProgress;
    moved = false;
    track.setPointerCapture(event.pointerId);
  };

  const handlePointerUp = (event) => {
    if (!mobileMode || pointerId !== event.pointerId) {
      return;
    }

    event.preventDefault();
    pointerId = null;
    state.galleryProgress = Math.round(state.galleryProgress);
    syncActiveWorkFromProgress();
    applyOverviewLayout();

    if (track.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId);
    }
  };

  const handleTrackClick = (event) => {
    const actionTarget = event.target.closest("[data-action]");
    if (actionTarget) {
      return;
    }

    if (mobileMode) {
      if (moved) {
        return;
      }

      const workId = findClosestCardAtPoint(event.clientX, event.clientY, cards);
      if (!workId) {
        return;
      }

      if (state.activeWorkId !== workId) {
        state.activeWorkId = workId;
        syncGalleryProgressToActiveWork();
        applyOverviewLayout();
        return;
      }

      state.view = "detail";
      renderApp();
      return;
    }

    if (!state.hoveredWorkId) {
      return;
    }

    state.activeWorkId = state.hoveredWorkId;
    state.hoveredWorkId = null;
    syncGalleryProgressToActiveWork();
    state.view = "detail";
    renderApp();
  };

  if (!mobileMode) {
    window.addEventListener("wheel", handleWheel, { passive: false });
  }

  if (mobileMode) {
    track.addEventListener("pointerdown", handlePointerDown);
    track.addEventListener("pointermove", handlePointerMove);
    track.addEventListener("pointerup", handlePointerUp);
    track.addEventListener("pointercancel", handlePointerUp);
  } else {
    track.addEventListener("pointermove", handlePointerMove);
    track.addEventListener("pointerleave", handlePointerLeave);
  }

  track.addEventListener("click", handleTrackClick);

  overviewCleanup = () => {
    window.removeEventListener("wheel", handleWheel);
    track.removeEventListener("pointerdown", handlePointerDown);
    track.removeEventListener("pointermove", handlePointerMove);
    track.removeEventListener("pointerup", handlePointerUp);
    track.removeEventListener("pointercancel", handlePointerUp);
    track.removeEventListener("pointerleave", handlePointerLeave);
    track.removeEventListener("click", handleTrackClick);
  };
}

function stepDetail(direction) {
  const works = getFilteredWorks();
  const currentIndex = works.findIndex((work) => work.id === state.activeWorkId);
  const nextIndex = currentIndex === -1 ? 0 : (currentIndex + direction + works.length) % works.length;
  state.activeWorkId = works[nextIndex]?.id || pageContent.works[0].id;
  state.view = "detail";
  renderApp();
}

document.addEventListener("click", (event) => {
  const actionTarget = event.target.closest("[data-action]");

  if (!actionTarget) {
    return;
  }

  const action = actionTarget.dataset.action;

  if (action === "go-view") {
    const nextView = actionTarget.dataset.view;
    if (nextView === "detail") {
      state.view = "detail";
    } else {
      state.view = nextView;
      if (nextView === "overview") {
        syncGalleryProgressToActiveWork();
      }
    }
    renderApp();
    return;
  }

  if (action === "set-filter") {
    state.activeFilter = actionTarget.dataset.filter;
    const works = getFilteredWorks();
    state.activeWorkId = works[0]?.id || pageContent.works[0].id;
    state.galleryProgress = 0;
    state.view = "overview";
    renderApp();
    return;
  }

  if (action === "open-detail") {
    return;
  }

  if (action === "step-detail") {
    stepDetail(Number(actionTarget.dataset.direction || 1));
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.view === "detail") {
    state.view = "overview";
    renderApp();
    return;
  }

  if (state.view !== "detail") {
    return;
  }

  if (event.key === "ArrowRight") {
    stepDetail(1);
  }

  if (event.key === "ArrowLeft") {
    stepDetail(-1);
  }
});

const handleViewportChange = () => {
  const previousMode = state.interactionMode;
  updateInteractionMode();
  if (previousMode !== state.interactionMode) {
    state.hoveredWorkId = null;
    renderApp();
    return;
  }

  applyOverviewLayout();
};

updateInteractionMode();
if (typeof mobileMediaQuery.addEventListener === "function") {
  mobileMediaQuery.addEventListener("change", handleViewportChange);
} else if (typeof mobileMediaQuery.addListener === "function") {
  mobileMediaQuery.addListener(handleViewportChange);
}
window.addEventListener("resize", handleViewportChange);

renderApp();
