import { tripData } from "./data/trip-data.js";

const PACKING_STORAGE = "bali-trip-packing-v1";
const STATUS_STORAGE = "bali-trip-status-v1";
const dayImageDestination = {
  "day-0819": "hong-kong",
  "day-0820": "seminyak",
  "day-0821": "nusa-penida-west",
  "day-0822": "komodo",
  "day-0823": "pink-beach",
  "day-0824": "komodo",
  "day-0825": "bromo",
  "day-0826": "hong-kong",
};
const dayImageOverrides = {
  "day-0824": {
    url: "./assets/photos/komodo-gate.jpg",
    alt: "用户提供的巴厘岛寺庙门照片",
    sourceName: "用户提供",
    sourceUrl: "",
    isRealLocation: true,
  },
  "day-0826": {
    url: "./assets/photos/hong-kong-night.jpg",
    alt: "用户提供的香港夜景照片",
    sourceName: "用户提供",
    sourceUrl: "",
    isRealLocation: true,
  },
};
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const escapeHtml = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

const multiline = (value = "") => escapeHtml(value).replaceAll("\n", "<br />");

const safeRead = (key, fallback) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
};

const safeWrite = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Private browsing or strict storage settings should not block the trip guide.
  }
};

const pill = (label, className = "") => `<span class="pill ${className}">${escapeHtml(label)}</span>`;

const iconPaths = {
  plane: '<path d="M3 12h18M13 5l-1.5 7L13 19M7 8l4.5 4L7 16M17 8l-4.5 4 4.5 4"/>',
  car: '<path d="M5 16h14l-1.4-5.2a2 2 0 0 0-1.9-1.5H8.3a2 2 0 0 0-1.9 1.5L5 16Z"/><path d="M4 16v3h2v-1h12v1h2v-3M7 16h.01M17 16h.01"/>',
  hotel: '<path d="M4 19V8m0 7h16v4M8 15V11h4a3 3 0 0 1 3 3v1M6 19h12"/><path d="M7 11h.01"/>',
  raft: '<path d="M5 15c2 2 4 2 6 0 2 2 4 2 6 0 1 .8 1.7 1.1 2.5 1.1"/><path d="M4 19h16M8 5l-1.5 8M12 5v8M16 5l1.5 8"/><path d="M6 5h12"/>',
  boat: '<path d="M4 15h16l-2.2 4H6L4 15Z"/><path d="M12 15V5m0 0 5 4h-5M8 18c1.3 1 2.7 1 4 0 1.3 1 2.7 1 4 0"/>',
  volcano: '<path d="m4 19 5.2-9 2.8 4 2.3-3L20 19"/><path d="M12 8c-1.5-1-1.5-2 0-3 1.5-1 1.5-2 0-3"/><path d="M4 19h16"/>',
  camera: '<path d="M4 8h3l1.3-2h7.4L17 8h3v10H4V8Z"/><circle cx="12" cy="13" r="3.2"/>',
  bag: '<path d="M5 8h14l-1 12H6L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2M9 12h6"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"/>',
  compass: '<circle cx="12" cy="12" r="8.5"/><path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8 4.8-2.2Z"/>',
  note: '<path d="M5 4h14v16H5zM8 8h8M8 12h8M8 16h5"/>',
  route: '<circle cx="6" cy="17" r="2"/><circle cx="18" cy="7" r="2"/><path d="M8 17c5 0 3-8 8-8"/>',
  outfit: '<path d="m8 5 4 3 4-3 3 3-2 3-2-1v9H9v-9l-2 1-2-3 3-3Z"/>',
  food: '<path d="M6 3v8M4 3v5a2 2 0 0 0 4 0V3M6 10v11M15 3v18M15 3c3 1 4 3 4 6h-4"/>',
  return: '<path d="M4 12h14M10 6l-6 6 6 6M18 6v12"/>',
  stay: '<path d="M4 19V8m0 7h16v4M8 15v-4h4a3 3 0 0 1 3 3v1M6 19h12"/>',
  weather: '<circle cx="9" cy="13" r="3.5"/><path d="M9 7V5M9 21v-2M3 13H1M17 13h-2M4.8 8.8 3.4 7.4M13.2 17.2l1.4 1.4M13.2 8.8l1.4-1.4M4.8 17.2l-1.4 1.4M14 18h4a3 3 0 0 0 0-6h-.3A5 5 0 0 0 8 10.5"/>',
  expand: '<path d="M8 4H4v4M4 4l6 6M16 20h4v-4M20 20l-6-6M20 8V4h-4M20 4l-6 6M4 16v4h4M4 20l6-6"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  arrow: '<path d="M5 12h13M13 6l6 6-6 6"/>',
};

function lineIcon(name, className = "") {
  return `<svg class="line-icon ${escapeHtml(className)}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${iconPaths[name] || iconPaths.compass}</svg>`;
}

function routeIconName(stop) {
  if (stop.label === "北京" || stop.label === "香港") return "plane";
  if (stop.label === "巴厘岛") return "raft";
  if (stop.label === "佩尼达" || stop.label === "科莫多") return "boat";
  if (stop.label === "泗水") return "car";
  if (stop.label === "布罗莫") return "volcano";
  return "compass";
}

function toolkitIconName(group, index = 0) {
  const label = `${group.id || ""} ${group.label || ""}`;
  if (label.includes("证件") || label.includes("支付")) return "bag";
  if (label.includes("通讯") || label.includes("网络")) return "compass";
  if (label.includes("预订") || label.includes("确认")) return "note";
  return ["plane", "hotel", "camera", "bag"][index % 4];
}

function detailLabel(iconName, label) {
  return `<span class="detail-label">${lineIcon(iconName)}<span>${escapeHtml(label)}</span></span>`;
}

function sectionHeading(id, eyebrow, title, intro) {
  return `<div class="section-heading">
    <div>
      <span class="eyebrow">${escapeHtml(eyebrow)}</span>
      <h2 id="${id}">${escapeHtml(title)}</h2>
    </div>
    ${intro ? `<p class="section-intro">${escapeHtml(intro)}</p>` : ""}
  </div>`;
}

function renderNav(meta) {
  return `<div class="nav-inner">
    <a class="brand-mark" href="#hero" aria-label="回到首页"><span class="brand-emblem">${lineIcon("compass")}</span><span><span class="brand-kicker">${escapeHtml(meta.title)}</span><strong>${escapeHtml(meta.subtitle)}</strong></span></a>
    <nav class="nav-links" aria-label="主要章节">
      <a href="#lookbook">图集</a><a href="#itinerary">行程</a><a href="#destinations">地点</a><a href="#packing">清单</a><a href="#memory">纪念馆</a>
    </nav>
    <a class="nav-cta" href="#toolkit">出发工具箱 <span>↗</span></a>
  </div>`;
}

function renderHero(meta) {
  return `<div class="hero-image-wrap">
    <img src="${escapeHtml(meta.heroImage)}" alt="${escapeHtml(meta.heroAlt)}" />
    <div class="hero-image-shade"></div>
    <span class="photo-credit">实景氛围图 · ${escapeHtml(meta.heroSource.name)}</span>
  </div>
  <div class="hero-copy page-shell">
    <div class="hero-kicker-line"><span>TRAVEL ARCHIVE NO. 01</span><span>${escapeHtml(meta.dateLabel)} · ${escapeHtml(meta.peopleLabel)}</span></div>
    <div class="hero-title-lockup"><p class="hero-overline">BALI T RIVER · TRAVEL SPECIAL</p><h1 id="hero-title"><strong>花儿与少年</strong><span>新东方大游——巴厘岛篇</span></h1></div>
    <p class="hero-declaration">${escapeHtml(meta.declaration)}</p>
    <div class="hero-actions"><a class="button button-light" href="#itinerary">打开旅行时间线 ${lineIcon("arrow")}</a><a class="text-link light-link" href="#crew">认识这 7 个人 ${lineIcon("arrow")}</a></div>
    <div class="hero-ticket"><span class="ticket-notch ticket-notch-top"></span><span class="ticket-notch ticket-notch-bottom"></span><span class="ticket-caption">BOARDING PASS · GROUP 07</span><strong>DENPASAR · LABUAN BAJO · BROMO</strong><div><span>TRIP</span><b>T RIVER</b><span>DATE</span><b>19—26 AUG 2026</b></div><small>新东方大游 · 花儿与少年之巴厘岛篇</small></div>
  </div>
  <div class="hero-feature-strip"><div class="page-shell hero-feature-inner">${[["plane", "FLIGHTS", "北京 · 香港 · 巴厘岛"], ["raft", "T RIVER", "Telaga Waja"], ["boat", "KOMODO", "出海找龙"], ["volcano", "BROMO", "日出火山"], ["camera", "ARCHIVE", "7 人影像记录"]].map(([icon, title, text]) => `<div class="hero-feature"><span class="hero-feature-icon">${lineIcon(icon)}</span><span><b>${title}</b><small>${text}</small></span></div>`).join("")}</div></div>
  `;
}

function renderCrew(crew) {
  return `${sectionHeading("crew-title", "THE CAST", "七人小队，正式出场", "每一个分工，都是这场旅行顺利又好玩的理由。")}
  <div class="crew-grid page-shell">${crew.map((member, index) => `<article class="crew-card accent-${escapeHtml(member.accent)} reveal-up" style="--delay:${index * 60}ms; --focus-x:${escapeHtml(member.focusX || "50%")}; --focus-y:${escapeHtml(member.focusY || "50%")}">
    <div class="crew-window-bar"><span></span><span></span><span></span><b>CAST ${String(index + 1).padStart(2, "0")}</b></div>
    <div class="crew-photo-frame"><img src="${escapeHtml(member.photo)}" alt="${escapeHtml(member.photoAlt || `${member.name}的照片`)}" loading="lazy" /><span class="crew-photo-title"><strong>${escapeHtml(member.nickname)}</strong><small>${escapeHtml(member.role)}</small></span></div>
    <div class="crew-copy"><p class="crew-role">${escapeHtml(member.role)}</p><h3>${escapeHtml(member.nickname)}</h3><p class="crew-name">${escapeHtml(member.name)}</p><p class="crew-duty">${escapeHtml(member.tagline)}</p></div>
  </article>`).join("")}</div>`;
}

function renderLookbook(visuals) {
  return `${sectionHeading("lookbook-title", "BALI LOOKBOOK", "把海岛的蓝，放进这趟旅行", "用户提供的巴厘岛视觉图集，作为网页中的旅行氛围、地点过场和旅后灵感墙。")}
  <div class="lookbook-grid page-shell">${visuals.map((visual, index) => `<figure class="lookbook-card lookbook-card-${index + 1}"><img src="${escapeHtml(visual.image)}" alt="${escapeHtml(visual.alt)}" loading="lazy" /><figcaption><span>${escapeHtml(visual.kicker)}</span><strong>${escapeHtml(visual.title)}</strong><small>${escapeHtml(visual.caption)}</small></figcaption></figure>`).join("")}</div>`;
}

function renderRoute(route) {
  return `${sectionHeading("route-title", "THE ROUTE", "从海岛到火山的蓝色路线", "飞机、渡船、包车和吉普车，把这趟旅行串成一条会移动的线。")}
  <div class="route-strip page-shell" role="list">${route.map((stop, index) => `<div class="route-stop route-${escapeHtml(stop.tone)}" role="listitem">
    <div class="route-icon">${lineIcon(routeIconName(stop))}</div><div class="route-stop-copy"><strong>${escapeHtml(stop.label)}</strong><span>${escapeHtml(stop.sub)}</span></div>${index < route.length - 1 ? `<div class="route-line" aria-hidden="true"><span>${lineIcon("plane")}</span></div>` : ""}
  </div>`).join("")}</div>
  <div class="route-note page-shell"><span>${lineIcon("note")}</span><p><strong>本次路线关键词：</strong>水上开场、东西线挑战、出海找龙、火山日出、香港返程彩蛋。</p></div>`;
}

function renderDay(day, statusMap) {
  const status = statusMap[day.statusKey] || "未开始";
  const toneClass = `tone-${day.tone}`;
  const statusOptions = ["未开始", "进行中", "已完成"].map((option) => `<option value="${option}" ${status === option ? "selected" : ""}>${option}</option>`).join("");
  const destination = tripData.destinations.find((item) => item.id === dayImageDestination[day.statusKey]);
  const image = dayImageOverrides[day.statusKey] || destination?.heroImage;
  const weatherFallback = day.weatherFallback || "出发前更新当日天气与现场条件。";
  return `<article class="day-card day-guide-card ${toneClass}" data-day-card="${escapeHtml(day.statusKey)}">
    <div class="day-guide-photo"><img src="${escapeHtml(image?.url || tripData.meta.heroImage)}" alt="${escapeHtml(image?.alt || day.location)}" loading="lazy" data-fallback-title="${escapeHtml(day.location)}" /><span class="guide-photo-label">DAY ${escapeHtml(day.dateLabel.replace(" / ", "·"))}</span><span class="guide-photo-source">${image?.isRealLocation ? "地点实景" : "旅行氛围"}</span></div>
    <div class="day-guide-content">
      <div class="day-topline"><span class="eyebrow">${escapeHtml(day.kicker)}</span><label class="status-control">状态<select data-day-status="${escapeHtml(day.statusKey)}" aria-label="${escapeHtml(day.dateLabel)} 行程状态">${statusOptions}</select></label></div>
      <div class="day-guide-heading"><div><span class="day-date-line">${escapeHtml(day.dateLabel)} · ${escapeHtml(day.weekday)}</span><h3>${escapeHtml(day.location)}</h3><p class="day-time">${escapeHtml(day.time)}</p></div><div class="weather-panel" data-weather-for="${escapeHtml(day.statusKey)}" data-weather-fallback="${escapeHtml(weatherFallback)}"><span class="weather-icon">${lineIcon("weather")}</span><div><span class="weather-label">当日天气</span><strong>出发前更新</strong><small>${escapeHtml(weatherFallback)}</small></div></div></div>
      <p class="day-highlight">“${escapeHtml(day.highlight)}”</p>
      <div class="day-guide-grid">
        <div class="guide-block guide-route">${detailLabel("route", "怎么玩 · ROUTE")}<div class="route-mini">${(day.routeStops || [day.location]).map((stop, index) => `<span><b>${index + 1}</b>${escapeHtml(stop)}</span>`).join("")}</div></div>
        <div class="guide-block">${detailLabel("outfit", "穿什么 · OUTFIT")}<p>${escapeHtml(day.outfit || "轻便、舒适、适合当日活动的服装。")}</p></div>
        <div class="guide-block">${detailLabel("bag", "带什么 · PACK")}<p>${escapeHtml(day.packing || "护照、手机、防晒和水。")}</p></div>
        <div class="guide-block">${detailLabel("food", "吃什么 · FOOD")}<p>${escapeHtml((day.food || []).join(" · "))}</p></div>
        <div class="guide-block">${detailLabel("return", "回程 · RETURN")}<p>${escapeHtml(day.returnTime || "以当日向导 / 船家 / 航班安排为准。")}</p></div>
        <div class="guide-block">${detailLabel("stay", "住宿 · STAY")}<p>${escapeHtml(day.hotel || "交通中转 / 返程")}</p></div>
      </div>
      <div class="day-facts">${day.flight ? `<div><span>航班</span><strong>${escapeHtml(day.flight)}</strong></div>` : ""}${day.cost ? `<div><span>费用</span><strong>${escapeHtml(day.cost)}</strong></div>` : ""}${day.bookingStatus ? `<div><span>预约</span><strong class="confirmed">${escapeHtml(day.bookingStatus)} ${lineIcon("check")}</strong></div>` : ""}${day.services ? `<div><span>服务</span><strong>${escapeHtml(day.services)}</strong></div>` : ""}</div>
      <details class="day-details"><summary>打开完整行程备注 <span>+</span></summary><div class="day-detail-grid"><div><span class="detail-label">行程安排</span><p>${multiline(day.plan)}</p></div>${day.notes ? `<div><span class="detail-label">提醒</span><p>${multiline(day.notes)}</p></div>` : ""}</div></details>
    </div>
  </article>`;
}

function renderItinerary(days, statusMap) {
  return `${sectionHeading("itinerary-title", "DAY BY DAY", "每天都值得被记下来", "表格里的航班、酒店、预约、费用和行李提醒，变成一条可以执行的旅行时间线。")}
  <div class="itinerary-intro page-shell"><span class="sticker">LIVE<br />THE<br />DAY</span><div><p><strong>小提示：</strong>先看当天的时间线，再打开地点灵感卡；如果状态变成“已完成”，它就会自动成为这趟旅行的第一个纪念。</p></div><div class="trip-stats"><span><b>8</b> 天</span><span><b>3</b> 个目的地</span><span><b>∞</b> 个名场面</span></div></div>
  <div class="day-list page-shell">${days.map((day) => renderDay(day, statusMap)).join("")}</div>`;
}

function renderDestination(destination, index) {
  const image = destination.heroImage;
  return `<article class="destination-card reveal-up" data-destination="${escapeHtml(destination.id)}" style="--delay:${(index % 4) * 80}ms">
    <div class="destination-image-wrap"><img src="${escapeHtml(image.url)}" alt="${escapeHtml(image.alt)}" loading="lazy" data-fallback-title="${escapeHtml(destination.name)}" /><span class="location-badge">${image.isRealLocation ? "真实地点图" : "海域氛围图"}</span><button class="image-expand" type="button" data-open-gallery="${escapeHtml(destination.id)}" aria-label="查看 ${escapeHtml(destination.name)} 照片">${lineIcon("expand")}</button></div>
    <div class="destination-body"><div class="destination-meta"><span>${escapeHtml(destination.region)}</span><span>${escapeHtml(destination.duration)}</span><span>${escapeHtml(destination.difficulty)}</span></div><h3>${escapeHtml(destination.name)}</h3><p class="destination-summary">${escapeHtml(destination.summary)}</p><div class="trip-plan"><span class="detail-label">这次怎么走</span><p>${escapeHtml(destination.tripPlan)}</p></div>
      <details class="destination-details"><summary>打开地点 tips <span>+</span></summary><div class="destination-detail-grid"><div><span class="detail-label">小 tips</span><ul>${destination.tips.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div><div><span class="detail-label">吃什么</span><ul>${destination.food.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div><div><span class="detail-label">怎么拍</span><p>${escapeHtml(destination.photoNotes)}</p></div></div></details>
      <div class="destination-bottom"><span class="replace-hint">${escapeHtml(destination.replaceHint)}</span><a class="map-link" href="${escapeHtml(destination.mapUrl)}" target="_blank" rel="noreferrer">打开地图 <span>↗</span></a></div>
    </div>
  </article>`;
}

function renderDestinations(destinations) {
  return `${sectionHeading("destinations-title", "PLACE NOTES", "去过的地方，要有自己的注释", "每张地点卡都把实景、玩法、美食和你们这趟行程放在一起；旅后可以换成自己的照片。")}
  <div class="destination-grid page-shell">${destinations.map(renderDestination).join("")}</div>`;
}

function renderToolkit(toolkit) {
  return `${sectionHeading("toolkit-title", "TRAVEL TOOLKIT", "出发前，先把重要的事放在这里", "已确认的信息和需要出发前再次确认的内容，使用不同标签区分。")}
  <div class="toolkit-grid page-shell">${toolkit.map((group, index) => `<article class="toolkit-card ${index === 2 ? "toolkit-warning" : ""}"><div class="toolkit-icon">${lineIcon(toolkitIconName(group, index))}</div><div><span class="eyebrow">${index === 2 ? "CHECK BEFORE GO" : "READY TO GO"}</span><h3>${escapeHtml(group.label)}</h3><ul>${group.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div></article>`).join("")}</div>`;
}

function renderChecklist(packing, checked) {
  return `${sectionHeading("packing-title", "PACKING MISSION", "行李官，轮到你点名了", "按场景准备，不把重要的东西留给出发前最后五分钟。每个人的勾选只保存在自己的浏览器里。")}
  <div class="packing-layout page-shell"><div class="packing-summary"><div class="packing-sun">${lineIcon("bag")}</div><strong>MISSION<br />PACKED</strong><span id="packing-count">0 / 0 已完成</span><p>完成一项，离海岛更近一步。</p></div><div class="packing-groups">${packing.map((group, index) => `<details class="packing-group" open><summary><span class="packing-group-icon">${lineIcon(toolkitIconName(group, index))}</span><strong>${escapeHtml(group.label)}</strong><span class="group-count" data-group-count="${escapeHtml(group.id)}">0 / ${group.items.length}</span></summary><div class="check-list">${group.items.map((item, index) => { const id = `${group.id}-${index}`; return `<label class="check-item"><input type="checkbox" data-packing-id="${escapeHtml(id)}" ${checked[id] ? "checked" : ""} /><span class="fake-check">${lineIcon("check")}</span><span>${escapeHtml(item)}</span></label>`; }).join("")}</div></details>`).join("")}</div></div>`;
}

function renderMemory(days, fields) {
  return `${sectionHeading("memory-title", "AFTER THE TRIP", "把旅行留在这里", "旅行结束后，把自己的照片、金句和名场面一格一格填回来。")}
  <div class="memory-hero page-shell"><div class="memory-copy"><span class="eyebrow">THE MEMORY ROOM</span><h3>今天的照片，<br /><em>以后会发光。</em></h3><p>这里先留给未来的你们。每一天都预留了照片位和一句话，等七个人把旅途重新讲一遍。</p><span class="hand-note">replace with your own photos</span></div><div class="memory-polaroid"><div class="polaroid-sky"></div><div class="polaroid-scribble">YOUR<br />BALI<br />STORY</div><small>PHOTO / DATE / PEOPLE</small></div></div>
  <div class="memory-grid page-shell">${days.map((day) => `<article class="memory-card"><div class="memory-date">${escapeHtml(day.dateLabel)} <span>${escapeHtml(day.location)}</span></div><div class="memory-photo-placeholder"><span>${lineIcon("camera")}</span><strong>放一张今天的照片</strong><small>旅行后替换这里</small></div><div class="memory-prompts">${fields.map((field) => `<div><span>${escapeHtml(field)}</span><p>写下这一页的故事……</p></div>`).join("")}</div></article>`).join("")}</div>`;
}

function renderApp(container, data) {
  const statusMap = safeRead(STATUS_STORAGE, {});
  const checked = safeRead(PACKING_STORAGE, {});
  $("#site-nav").innerHTML = renderNav(data.meta);
  $("#hero").innerHTML = renderHero(data.meta);
  $("#lookbook").innerHTML = renderLookbook(data.lookbook || []);
  $("#crew").innerHTML = renderCrew(data.crew);
  $("#route").innerHTML = renderRoute(data.route);
  $("#itinerary").innerHTML = renderItinerary(data.days, statusMap);
  $("#destinations").innerHTML = renderDestinations(data.destinations);
  $("#toolkit").innerHTML = renderToolkit(data.toolkit);
  $("#packing").innerHTML = renderChecklist(data.packing, checked);
  $("#memory").innerHTML = renderMemory(data.days, data.memoryFields);
  bindInteractions(data, statusMap, checked);
  updatePackingSummary(data.packing, checked);
  loadWeather(data.days);
}

const weatherLabel = (code) => {
  if (code === 0) return ["sun", "晴朗"];
  if ([1, 2].includes(code)) return ["sun", "晴间多云"];
  if (code === 3) return ["weather", "多云"];
  if ([45, 48].includes(code)) return ["weather", "有雾"];
  if ([51, 53, 55, 56, 57].includes(code)) return ["weather", "毛毛雨"];
  if ([61, 63, 65, 66, 67].includes(code)) return ["weather", "有雨"];
  if ([71, 73, 75, 77].includes(code)) return ["weather", "低温天气"];
  if ([80, 81, 82].includes(code)) return ["weather", "阵雨"];
  if ([95, 96, 99].includes(code)) return ["weather", "雷雨"];
  return ["weather", "天气待定"];
};

async function loadWeather(days) {
  await Promise.all(days.map(async (day) => {
    const panel = $(`[data-weather-for="${day.statusKey}"]`);
    if (!panel || !day.weatherLocation) return;
    const { lat, lon, label } = day.weatherLocation;
    const params = new URLSearchParams({ latitude: lat, longitude: lon, daily: "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max", timezone: "auto", forecast_days: "16" });
    try {
      const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params.toString()}`);
      if (!response.ok) throw new Error(`weather-${response.status}`);
      const payload = await response.json();
      const index = payload.daily?.time?.indexOf(day.date) ?? -1;
      if (index < 0) throw new Error("forecast-not-available");
      const [icon, labelText] = weatherLabel(payload.daily.weather_code[index]);
      const high = Math.round(payload.daily.temperature_2m_max[index]);
      const low = Math.round(payload.daily.temperature_2m_min[index]);
      const rain = payload.daily.precipitation_probability_max[index];
      const wind = Math.round(payload.daily.wind_speed_10m_max[index]);
      panel.innerHTML = `<span class="weather-icon">${lineIcon(icon)}</span><div><span class="weather-label">${escapeHtml(label)} · 当日天气</span><strong>${labelText} · ${low}°—${high}°</strong><small>降雨 ${rain ?? "—"}% · 风速 ${wind ?? "—"} km/h</small></div>`;
      panel.classList.add("weather-live");
    } catch {
      panel.innerHTML = `<span class="weather-icon">${lineIcon("weather")}</span><div><span class="weather-label">当日天气</span><strong>出发前更新</strong><small>${escapeHtml(day.weatherFallback || "以出发前预报为准。")}</small></div>`;
      panel.classList.add("weather-fallback");
    }
  }));
}

function updatePackingSummary(packing, checked) {
  const all = packing.flatMap((group) => group.items.map((_, index) => `${group.id}-${index}`));
  const done = all.filter((id) => checked[id]).length;
  const counter = $("#packing-count");
  if (counter) counter.textContent = `${done} / ${all.length} 已完成`;
  packing.forEach((group) => {
    const groupAll = group.items.map((_, index) => `${group.id}-${index}`);
    const groupDone = groupAll.filter((id) => checked[id]).length;
    const target = $(`[data-group-count="${group.id}"]`);
    if (target) target.textContent = `${groupDone} / ${groupAll.length}`;
  });
}

function bindInteractions(data, statusMap, checked) {
  $$(`[data-day-status]`).forEach((select) => select.addEventListener("change", (event) => {
    statusMap[event.target.dataset.dayStatus] = event.target.value;
    safeWrite(STATUS_STORAGE, statusMap);
    const card = $(`[data-day-card="${event.target.dataset.dayStatus}"]`);
    card?.classList.toggle("is-done", event.target.value === "已完成");
  }));
  $$(`[data-packing-id]`).forEach((input) => input.addEventListener("change", (event) => {
    checked[event.target.dataset.packingId] = event.target.checked;
    safeWrite(PACKING_STORAGE, checked);
    updatePackingSummary(data.packing, checked);
  }));
  $$(`[data-open-gallery]`).forEach((button) => button.addEventListener("click", () => openGallery(data.destinations.find((item) => item.id === button.dataset.openGallery))));
  $$(`[data-fallback-title]`).forEach((image) => image.addEventListener("error", () => {
    image.closest(".destination-image-wrap, .day-guide-photo")?.classList.add("image-failed");
    image.removeAttribute("src");
  }, { once: true }));
  const modal = $("#gallery-modal");
  $("[data-close-modal]")?.addEventListener("click", () => modal.close());
  modal?.addEventListener("click", (event) => { if (event.target === modal) modal.close(); });
  document.addEventListener("keydown", (event) => { if (event.key === "Escape" && modal?.open) modal.close(); });
}

function openGallery(destination) {
  if (!destination) return;
  const modal = $("#gallery-modal");
  const images = [destination.heroImage, ...(destination.gallery || [])].filter(Boolean);
  const galleryMarkup = images.map((image) => `<img src="${escapeHtml(image.url)}" alt="${escapeHtml(image.alt)}" />`).join("");
  const source = destination.heroImage.sourceUrl
    ? `<a href="${escapeHtml(destination.heroImage.sourceUrl)}" target="_blank" rel="noreferrer">图片来源：${escapeHtml(destination.heroImage.sourceName)} ↗</a>`
    : `<span class="modal-source-note">图片来源：${escapeHtml(destination.heroImage.sourceName || "用户提供")}</span>`;
  $("#modal-content").innerHTML = `<div class="modal-gallery">${galleryMarkup}</div><div class="modal-caption"><span>${escapeHtml(destination.region)}</span><h3>${escapeHtml(destination.name)}</h3><p>${escapeHtml(destination.replaceHint)}</p>${source}</div>`;
  modal.showModal();
}

renderApp($("#app"), tripData);

export { renderApp };
