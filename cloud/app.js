(function () {
  "use strict";
  const S = window.SITE, WORLD = window.WORLD, $ = (s) => document.querySelector(s);
  const e = (t) => String(t == null ? "" : t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const exp = (o) => S.experience.find((x) => x.org.indexOf(o) === 0), proj = (t) => S.projects.find((p) => p.title.indexOf(t) !== -1);
  const kasr = exp("Kasr"), autism = proj("Autism"), pub = S.publications[0], T = S.thesis, cities = S.journey.slice().reverse();
  const ic = (n) => `<i class="ph ph-${n}" aria-hidden="true"></i>`;

  /* ---------- chapters ---------- */
  const ext = (href, inner, cls, extra) => `<a ${cls ? `class="${cls}" ` : ""}href="${e(href)}" target="_blank" rel="noopener"${extra || ""}>${inner}</a>`;
  const hv = (icon, cap) => (icon ? ` data-icon="${icon}"${cap ? ` data-cap="${e(cap)}"` : ""}` : "");
  const pic = (src, alt, icon, fit) => (src ? `<img class="shot zoom${fit === "contain" ? " contain" : ""}" src="${e(src)}" alt="${e(alt || "")}" loading="lazy" decoding="async" tabindex="0"${hv(icon, alt)}>` : "");
  const row = (title, side, text, href, icon) => `<li${hv(icon, title)}>${href ? ext(href, `<span>${e(title)}</span><small>${e(side || "")} ${ic("arrow-up-right")}</small>`) : `<div class="r"><span>${e(title)}</span><small>${e(side || "")}</small></div>`}${text ? `<p>${e(text)}</p>` : ""}</li>`;
  const pts = (list, icons) => `<ul class="pts">${list.map((x, n) => `<li${hv(icons[n], "")}>${e(x)}</li>`).join("")}</ul>`;
  const tech = (inner) => `<details><summary>For the technical reader</summary><div>${inner}</div></details>`;
  const startsIcon = (map, s) => { const k = Object.keys(map).find((p) => s.indexOf(p) === 0); return k ? map[k] : ""; };
  const PICON = { "Calibrated Wildfire": "fire", Multimodal: "baby", Asthma: "traffic-signal", Exploring: "brain", Climate: "cloud-sun", FitMate: "barbell", Pandora: "head-circuit", VisionVerse: "eye", "CT Toolkit": "scan", MammoCLAHE: "circle-half", Ultrasound: "wave-sine", "Fat-Water": "heartbeat", FaceX: "user-focus", News: "newspaper", Thyroid: "stethoscope", Cancer: "chart-line", SoundScan: "waveform", Graphics: "game-controller", TheraPlan: "radioactive", DICOM: "cube", ADVIA: "test-tube" };
  const OICON = { "University of Alberta": "graduation-cap", Kasr: "brain", Westlake: "dna", "Siemens EDA": "cpu", "Siemens Healthineers": "wrench", "Dar Al Fouad": "hospital" };
  const AICON = ["medal", "trophy", "hand-coins", "ranking", "crown", "star", "device-mobile"], MICON = ["television", "broadcast", "newspaper"], LICON = ["calendar-check", "hand-heart", "chalkboard-teacher", "megaphone", "users-three"];
  const SKICON = { Languages: "code", "AI & ML": "robot", "Computer Vision": "eye", "Vision-Language & Speech": "chat-circle-text", "Data-Centric AI": "database", Geospatial: "map-trifold", "Research Computing": "terminal-window", "Medical Imaging": "scan" };
  const STICON = ["images", "presentation-chart", "trophy", "stack"];
  const fire = proj("Wildfire"), asthma = proj("Asthma"), msc = S.education.find((x) => x.school.indexOf("Alberta") !== -1), uofa = exp("University of Alberta");
  const lab = T.lab.split(" · "), poster = S.gallery.find((g) => /poster/i.test(g.caption));
  const covered = [fire, autism, asthma], used = [T.image, autism.image, fire.image, poster && poster.src];
  const earlier = S.experience.filter((x) => x !== uofa && x !== kasr), road = S.gallery.filter((g) => used.indexOf(g.src) === -1);
  const anchorOf = (p) => (p === autism ? "autism" : "more-research");
  const CATS = [["all", "All"], ["health", "Medical"], ["transport", "Transportation"], ["vision", "Vision"], ["research", "Research"], ["software", "Software"]];
  const certSrc = (c) => S.assetBase + "assets/" + c.img;
  const CH = [
    { id: "intro", key: "blob", col: [205, 222, 255], cap: "", sub: "", html: `
      <div class="who"><img class="avatar" src="${e(S.photo)}" alt="Portrait of ${e(S.name)}" width="64" height="64"><p class="label">${e(S.location)}</p></div>
      <h1>${e(S.name)}</h1><p class="role"${hv("graduation-cap", "University of Alberta")}>M.Sc. student and ${e(uofa.role)} at the University of Alberta</p><p class="lede">${e(S.tagline)}</p>
      <div class="cta"><a class="btn primary" href="mailto:${e(S.links.email)}"${hv("envelope-simple", "Say hello")}>${ic("envelope-simple")} Get in touch</a><a class="btn" href="#research">See my research ${ic("arrow-right")}</a></div>
      <div class="stats">${S.stats.map((s, n) => `<div${hv(STICON[n], s.value)}><b>${e(s.value)}</b><span>${e(s.label)}</span></div>`).join("")}</div>` },
    { id: "research", nav: "Research", key: "road", col: [45, 212, 191], cap: "A winter road", sub: "an illustration, not thesis data", html: `
      <p class="label">What I do now · full time since ${e(msc.dates.split(" ")[0] + " " + msc.dates.split(" ")[1])}</p><h2>Teaching AI to read winter roads</h2>
      <div class="chips"><span class="chip"${hv("graduation-cap", msc.degree)}>${e(msc.degree)}</span><span class="chip"${hv("graduation-cap", uofa.role)}>${e(uofa.role)}</span>${lab.map((x) => `<span class="chip">${e(x)}</span>`).join("")}</div>
      <p class="lede" style="margin-top:20px"${hv("road-horizon", "Winter road monitoring")}>${e(T.story)}</p>
      ${pts(T.plain, ["snowflake", "seal-check", "map-pin", "timer"])}
      ${pic(T.image, T.imageAlt, "users-three")}
      ${tech(`<p><b>${e(T.note)}:</b> ${e(T.title)}</p><ul class="pts">${T.points.map((x) => `<li>${e(x)}</li>`).join("")}</ul>`)}` },
    { id: "publication", nav: "Publication", key: "icon:presentation-chart", col: [159, 214, 255], cap: "From thesis to paper", sub: "TRB Annual Meeting, January 2027", html: `
      <p class="label">Publication</p><h2>Before you trust an AI model, trust its data</h2>
      <p class="lede"${hv("file-text", "The paper")}>${e(pub.plain)}</p>
      <p><b>${e(pub.title)}</b><br>${e(pub.authors)}</p>
      <ul class="rows">${pub.status.map((x, n) => `<li${hv(n ? "file-text" : "presentation-chart", n ? "Journal submission" : "TRB 2027")}><p class="news">${e(x)}</p></li>`).join("")}</ul>
      ${tech(`<p>${e(pub.summary)}</p>`)}
      ${poster ? `<figure class="fig">${pic(poster.src, poster.caption, "presentation-chart")}<figcaption>${e(poster.caption)}</figcaption></figure>` : ""}` },
    { id: "more-research", key: "icon:fire", col: [251, 146, 60], cap: "More research in Edmonton", sub: "course and GIS projects", html: `
      <p class="label">More research at the University of Alberta</p><h2>From wildfires to city health</h2>
      <div${hv("fire", "Wildfire damage assessment")}><h3 style="margin-top:8px">${e(fire.title)}</h3><p class="meta">${e(fire.meta)}</p><p>${e(fire.pitch)}</p><p class="note">${e(fire.plainResult)}</p></div>
      ${pic(fire.image, fire.imageAlt, "fire", "contain")}
      ${tech(`<p>${e(fire.desc)}</p><p>${ext(fire.link, "Open the project")}</p>`)}
      <div${hv("traffic-signal", "Traffic and asthma")}><h3>${e(asthma.title)}</h3><p class="meta">${e(asthma.meta)}</p><p>${e(asthma.pitch)}</p></div>
      ${tech(`<p>${e(asthma.desc)}</p>`)}` },
    { id: "medical", nav: "Medical AI", key: "spine", col: [251, 113, 133], cap: "Lumbar spine", sub: "an illustration, not patient data", html: `
      <p class="label">Alongside my M.Sc. · part time</p><h2>Helping neurosurgeons decide</h2>
      <div class="chips"><span class="chip">${e(kasr.role)}</span><span class="chip">${e(kasr.org)}</span><span class="chip">${e(kasr.dates)}</span><span class="chip">${e(kasr.place)}</span></div>
      <p class="lede" style="margin-top:20px">${e(kasr.story)}</p>
      ${pts(kasr.plain, ["users-three", "pencil-simple", "chart-line", "handshake"])}
      ${tech(`<ul class="pts">${kasr.points.map((x) => `<li>${e(x)}</li>`).join("")}</ul>`)}` },
    { id: "autism", nav: "Autism platform", key: "icon:baby", col: [196, 165, 255], cap: "Early autism detection", sub: "B.Sc. graduation project, Cairo University", html: `
      <p class="label">Graduation project · ${e(autism.meta.split(" · ")[1] || "")}</p><h2>${e(autism.title)}</h2>
      <p class="lede"${hv("brain", "Behaviour, gaze and speech")}>${e(autism.pitch)}</p>
      <p class="note"${hv("trophy", "1st of 259 projects")}>${e(autism.plainResult)}</p>
      ${pic(autism.image, autism.imageAlt, "users-three")}
      ${tech(`<p>${e(autism.desc)}</p><p>${ext(autism.link, "Open the project")}</p>`)}` },
    { id: "media", tick: "Media", key: "icon:television", col: [248, 180, 217], cap: "On air and in print", sub: "coverage of the Autism Detection Platform", html: `
      <p class="label">In the media</p><h2>On BBC Arabic, Al-Mehwar TV and in Al-Ahram</h2><p>${e(S.media.text)}</p>
      <div class="press">${S.media.items.map((m, n) => `<figure${hv(MICON[n], m.caption)}><img class="zoom" src="${e(m.src)}" alt="${e(m.caption)}" loading="lazy" decoding="async" tabindex="0"><figcaption>${m.href ? ext(m.href, `${e(m.caption)} ${ic("arrow-up-right")}`) : e(m.caption)}</figcaption></figure>`).join("")}</div>` },
    { id: "journey", tick: "Journey", key: "earth", col: [245, 185, 66], cap: "Cairo · Hangzhou · Edmonton", sub: "the journey so far", html: `
      <p class="label">The journey</p><h2>Cairo, Hangzhou, Edmonton</h2>
      <ul class="rows">${cities.map((j) => `<li data-city="${e(j.city)}" data-cap="${e(j.city + ", " + j.country)}"><div class="r"><span>${e(j.city)}, ${e(j.country)}</span><small>${e(j.years)}</small></div></li>`).join("")}</ul>
      <div class="strip">${road.map((g) => `<figure>${pic(g.src, g.caption)}<figcaption>${e(g.caption)}</figcaption></figure>`).join("")}</div>` },
    { id: "experience", nav: "Experience", key: "helix", col: [147, 180, 255], cap: "A path, one turn at a time", sub: "internships, training and education", html: `
      <p class="label">Before Edmonton</p><h2>Internships and training</h2>
      <ul class="rows">${earlier.map((x) => row(x.role + ", " + x.org, x.dates, x.story, x.link, startsIcon(OICON, x.org))).join("")}</ul>
      <h3>Education</h3><ul class="rows">${S.education.map((x, n) => row(x.degree, x.dates, x.school + " · " + x.place, "", n ? "student" : "graduation-cap")).join("")}</ul>` },
    { id: "projects", nav: "Projects", key: "cube", col: [110, 231, 183], cap: "A grid of pixels", sub: "where every vision project starts", html: `
      <p class="label">Projects</p><h2>All ${S.projects.length} projects</h2>
      <div class="filters" id="pfilter" role="group" aria-label="Filter projects">${CATS.map((c, n) => `<button type="button" data-cat="${c[0]}" aria-pressed="${!n}">${c[1]}</button>`).join("")}</div>
      <ul class="rows" id="plist">${S.projects.map((p, i) => { const cov = covered.indexOf(p) !== -1; return `<li class="${i >= 7 ? "x" : ""}" data-cats="${e(p.cats.join(" "))}"${hv(startsIcon(PICON, p.title), p.title)}>${cov ? `<a href="#${anchorOf(p)}"><span>${e(p.title)}</span><small>Covered above</small></a>` : (p.link ? ext(p.link, `<span>${e(p.title)}</span><small>${ic("arrow-up-right")}</small>`) : `<div class="r"><span>${e(p.title)}</span></div>`) + `<p>${e(p.pitch)}</p><details><summary>How it works</summary><div><p>${e(p.desc)}</p><div class="chips">${(p.tags || []).map((t) => `<span class="chip">${e(t)}</span>`).join("")}</div></div></details>`}</li>`; }).join("")}</ul>
      <button class="link" id="pmore" aria-expanded="false">Show all ${S.projects.length} projects</button>` },
    { id: "recognition", nav: "Recognition", key: "first", col: [250, 204, 21], cap: "1st of 259 projects", sub: "Dell Envision the Future 2025", html: `
      <p class="label">Recognition</p><h2>Awards and grants</h2>
      <ul class="rows">${S.awards.map((a, n) => row(a.title, a.date, a.detail, a.link, AICON[n])).join("")}</ul>
      <h3>Certificates (${S.certificates.length})</h3><div class="certs">${S.certificates.map((c) => `<figure${hv("certificate", c.title)}><img class="zoom" src="${e(certSrc(c))}" alt="${e(c.title)}, ${e(c.issuer)}" loading="lazy" decoding="async" tabindex="0"><figcaption><b>${e(c.title)}</b>${e(c.issuer)} · ${e(c.date)}</figcaption></figure>`).join("")}</div>` },
    { id: "community", key: "network", col: [94, 234, 212], cap: "A network", sub: "the people I have worked with", html: `
      <p class="label">Community</p><h2>Leadership and volunteering</h2>
      <ul class="rows">${S.leadership.map((l, n) => row(l.role + ", " + l.org, l.dates, l.note, "", LICON[n])).join("")}</ul>` },
    { id: "skills", key: "icon:code", col: [203, 213, 225], cap: "Toolbox", sub: "for the technical reader", html: `
      <p class="label">Toolbox</p><h2>Skills</h2>
      ${Object.keys(S.skills).map((k) => `<p class="skill"${hv(SKICON[k] || "code", k)}><b>${e(k)}</b>${e(S.skills[k])}</p>`).join("")}` },
    { id: "contact", nav: "Contact", key: "hello", col: [255, 255, 255], cap: "", sub: "", html: `
      <p class="label">Contact</p><h2>Let's build something useful</h2><p class="lede">I'm open to research and industry opportunities in applied AI and computer vision, especially in healthcare, transportation, and smart cities.</p>
      <p><a class="mail" href="mailto:${e(S.links.email)}"${hv("envelope-simple", "Email")}>${e(S.links.email)}</a></p>
      <div class="cta">${ext(S.links.linkedin, ic("linkedin-logo") + " LinkedIn", "btn", hv("linkedin-logo", "LinkedIn"))}${ext(S.links.github, ic("github-logo") + " GitHub", "btn", hv("github-logo", "GitHub"))}<a class="btn" href="../">Classic site ${ic("arrow-right")}</a></div>
      <p class="fine">© ${new Date().getFullYear()} ${e(S.name)}. The 3D shapes are illustrations drawn in your browser. No cookies, analytics or tracking.</p>` },
  ];
  const rgb = (c) => `rgb(${c.join(",")})`;
  $("#main").innerHTML = CH.map((c) => `<section class="sec" id="${c.id}" style="--c:${rgb(c.col)}"><div class="col">${c.html}</div></section>`).join("");
  $("#prog").innerHTML = CH.map((c) => `<a href="#${c.id}" aria-label="${e(c.nav || c.tick || c.cap)}"><span>${e(c.nav || c.tick || c.cap)}</span></a>`).join("");
  $("#nav").innerHTML = CH.filter((c) => c.nav).map((c) => `<a href="#${c.id}">${e(c.nav)}</a>`).join("");
  $("#nm").textContent = S.name; $("#hi").href = "mailto:" + S.links.email;
  const secs = [...document.querySelectorAll(".sec")], ticks = [...$("#prog").children], navs = [...$("#nav").children];
  const pl = $("#plist"), pm = $("#pmore"), pf = [...$("#pfilter").children];
  pm.addEventListener("click", () => { const on = pl.classList.toggle("all"); pm.setAttribute("aria-expanded", on); pm.textContent = on ? "Show fewer projects" : `Show all ${S.projects.length} projects`; requestAnimationFrame(measure); });
  pf.forEach((b) => b.addEventListener("click", () => { const c = b.dataset.cat; pf.forEach((x) => x.setAttribute("aria-pressed", x === b)); pl.classList.toggle("filtered", c !== "all"); pm.hidden = c !== "all"; [...pl.children].forEach((li) => (li.hidden = c !== "all" && !li.dataset.cats.split(" ").includes(c))); requestAnimationFrame(measure); }));
  document.addEventListener("toggle", () => requestAnimationFrame(measure), true);
  const io = new IntersectionObserver((es) => es.forEach((x) => x.isIntersecting && x.target.classList.add("in")), { rootMargin: "0px 0px -10% 0px" });
  document.querySelectorAll(".col").forEach((x) => io.observe(x));
  // lightbox
  const lb = $("#lightbox"), lbImg = $("#lb-img"), lbCap = $("#lb-cap");
  const zoom = (im) => { lbImg.src = im.src; lbImg.alt = im.alt; lbCap.textContent = im.alt; lb.showModal(); };
  document.addEventListener("click", (ev) => { if (ev.target.classList && ev.target.classList.contains("zoom")) zoom(ev.target); else if (ev.target === lb || ev.target === lbImg) lb.close(); });
  document.addEventListener("keydown", (ev) => { if (ev.key === "Enter" && ev.target.classList && ev.target.classList.contains("zoom")) zoom(ev.target); });
  $("#lb-x").addEventListener("click", () => lb.close());

  /* ---------- shapes ---------- */
  // Keep this query in step with the "stacked layout" block in style.css.
  const STACKED = matchMedia("(max-width: 1023.98px) and (min-height: 500.02px), (max-width: 699.98px)");
  const small = Math.min(innerWidth, innerHeight) < 700, N = small ? 2600 : 5200;
  let seed = 7; const rnd = () => { seed |= 0; seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  const make = (fn) => { const p = new Float32Array(N * 3), s = new Float32Array(N); for (let k = 0; k < N; k++) { const v = fn(k); p[k * 3] = v[0]; p[k * 3 + 1] = v[1]; p[k * 3 + 2] = v[2]; s[k] = v[3] == null ? 0.4 + rnd() * 0.9 : v[3]; } return { p, s }; };
  const ll = (lat, lon, r) => { const a = (lat * Math.PI) / 180, b = (lon * Math.PI) / 180; return [r * Math.cos(a) * Math.sin(b), r * Math.sin(a), r * Math.cos(a) * Math.cos(b)]; };
  const land = []; WORLD.rows.forEach((row, r) => { for (let c = 0; c < row.length; c++) if (row[c] === "1") land.push([WORLD.lat0 - r * WORLD.step, WORLD.lon0 + c * WORLD.step]); });
  function textPts(str) {
    const c = document.createElement("canvas"), w = (c.width = 640), h = (c.height = 280), x = c.getContext("2d");
    x.fillStyle = "#fff"; x.textAlign = "center"; x.textBaseline = "middle"; let fs = 220; x.font = `600 ${fs}px Geist, Arial, sans-serif`;
    const tw = x.measureText(str).width; if (tw > w * 0.92) { fs *= (w * 0.92) / tw; x.font = `600 ${fs}px Geist, Arial, sans-serif`; }
    x.fillText(str, w / 2, h / 2); const d = x.getImageData(0, 0, w, h).data, pts = [];
    for (let j = 0; j < h; j += 3) for (let i = 0; i < w; i += 3) if (d[(j * w + i) * 4 + 3] > 128) pts.push([(i - w / 2) / (w / 2) * 1.25, -(j - h / 2) / (w / 2) * 1.25]);
    return pts.length ? pts : [[0, 0]];
  }
  const sm = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
  const G = {
    blob: () => make((k) => { const y = 1 - (2 * (k + 0.5)) / N, r = Math.sqrt(1 - y * y), th = k * 2.399963, q = 0.92 + 0.1 * Math.sin(th * 3 + y * 6) * Math.cos(y * 5); return [Math.cos(th) * r * q, y * q, Math.sin(th) * r * q]; }),
    spine: () => make(() => { const v3 = SP(); return [v3[0] * 1.25, v3[1] * 0.92, v3[2] * 1.25 + 0.22, v3[3]]; }),
    _sp: 0 };
  const SP = (() => { return (() => {
      const v = Math.floor(rnd() * 6), yc = 0.92 - v * 0.36, zc = 0.2 * Math.cos(yc * 1.5) - 0.12, u = rnd(), a = rnd() * 6.2832, j = () => (rnd() - 0.5) * 0.03;
      if (u < 0.5) { if (rnd() < 0.72) return [Math.cos(a) * 0.3, yc + (rnd() - 0.5) * 0.22, zc + Math.sin(a) * 0.24]; const q = Math.sqrt(rnd()); return [Math.cos(a) * 0.3 * q, yc + (rnd() < 0.5 ? 0.11 : -0.11), zc + Math.sin(a) * 0.24 * q]; }
      if (u < 0.62) return v < 5 ? [Math.cos(a) * 0.27, yc - 0.18 + (rnd() - 0.5) * 0.05, zc + 0.01 * v + Math.sin(a) * 0.21, 0.3] : [Math.cos(a) * 0.3, yc + 0.11, zc + Math.sin(a) * 0.24];
      if (u < 0.78) return [Math.cos(a) * 0.15 + j(), yc + (rnd() - 0.5) * 0.12, zc - 0.36 + Math.sin(a) * 0.12 + j()];
      if (u < 0.9) { const t = rnd(); return [j() * 1.6, yc - 0.02 - t * 0.12 + j(), zc - 0.48 - t * 0.3]; }
      const t = rnd(), sd = rnd() < 0.5 ? -1 : 1; return [sd * (0.18 + t * 0.36), yc + 0.02 + j(), zc - 0.3 + j() - t * 0.05];
    }); })();
  Object.assign(G, {
    road: () => make(() => {
      const z = (rnd() * 2 - 1) * 1.3, xr = 0.32 * Math.sin(z * 1.7), u = rnd(); let x, y = -0.2, s;
      if (u < 0.16) { x = xr + (rnd() < 0.5 ? -0.2 : 0.2); s = 1.1; }
      else if (u < 0.22) { if (Math.floor((z + 2) * 5) % 2) return [xr + (rnd() - 0.5) * 0.36, y, z, 0.25]; x = xr; s = 1.5; }
      else if (u < 0.3) { x = (rnd() * 2 - 1) * 1.3; y = rnd() * 1.1 - 0.1; s = 0.5; }
      else { x = (Math.round(((rnd() * 2 - 1) * 1.3) / 0.075) * 0.075); const d = Math.abs(x - xr); if (d < 0.26) x = xr + (x < xr ? -1 : 1) * (0.26 + rnd() * 0.5); const dd = Math.abs(x - xr); y = -0.2 + (0.2 * Math.sin(x * 2.3 + 1) * Math.cos(z * 2.1) + 0.09 * Math.sin(x * 5 + z * 3) + 0.12) * sm(0.24, 0.7, dd); }
      const ca = Math.cos(0.42), sa = Math.sin(0.42); return [x * 0.88, (y * ca - z * sa + 0.1) * 0.88, (y * sa + z * ca) * 0.88, s];
    }),
    cube: () => make(() => { const g = () => (Math.floor(rnd() * 7) - 3) * 0.21; const edge = rnd() < 0.3; if (edge) { const ax = Math.floor(rnd() * 3), v = [g(), g(), g()]; v[ax] = rnd() * 1.26 - 0.63; return [v[0], v[1], v[2], 0.3]; } return [g() + (rnd() - 0.5) * 0.03, g() + (rnd() - 0.5) * 0.03, g() + (rnd() - 0.5) * 0.03, 1.1]; }),
    earth: () => make((k) => { const c = land[Math.floor(rnd() * land.length)]; return ll(c[0] + (rnd() - 0.5) * 1.6, c[1] + (rnd() - 0.5) * 1.6, 1).concat(0.8); }),
    helix: () => make(() => { const t = rnd(), a = t * 15.7 + (rnd() < 0.5 ? 0 : Math.PI), y = -1.05 + 2.1 * t, u = rnd(); if (u < 0.2) { const q = rnd(), a0 = Math.round((t * 15.7) / 0.5) * 0.5, y0 = -1.05 + (2.1 * a0) / 15.7; return [Math.cos(a0) * 0.55 * (1 - 2 * q), y0, Math.sin(a0) * 0.55 * (1 - 2 * q), 0.35]; } const w = (rnd() - 0.5) * 0.1; return [Math.cos(a) * (0.55 + w), y + (rnd() - 0.5) * 0.05, Math.sin(a) * (0.55 + w)]; }),
    network: () => { const nodes = []; for (let n = 0; n < 16; n++) { const y = 1 - (2 * (n + 0.5)) / 16, r = Math.sqrt(1 - y * y), th = n * 2.399963; nodes.push([Math.cos(th) * r * 0.9, y * 0.9, Math.sin(th) * r * 0.9]); } const edges = []; nodes.forEach((a, i) => nodes.forEach((b, j) => { if (j > i && Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]) < 0.95) edges.push([a, b]); })); const g = () => (rnd() + rnd() + rnd() - 1.5) * 0.09;
      return make(() => { if (rnd() < 0.5) { const c = nodes[Math.floor(rnd() * nodes.length)]; return [c[0] + g(), c[1] + g(), c[2] + g(), 1]; } const ed = edges[Math.floor(rnd() * edges.length)], t = rnd(); return [ed[0][0] + (ed[1][0] - ed[0][0]) * t, ed[0][1] + (ed[1][1] - ed[0][1]) * t, ed[0][2] + (ed[1][2] - ed[0][2]) * t, 0.3]; }); },
    first: () => { const t = textPts("1st"); return make(() => { const q = t[Math.floor(rnd() * t.length)]; return [q[0] + (rnd() - 0.5) * 0.012, q[1] + (rnd() - 0.5) * 0.012, (rnd() - 0.5) * 0.22]; }); },
    hello: () => { const t = textPts("Hello"); return make(() => { const q = t[Math.floor(rnd() * t.length)]; return [q[0] + (rnd() - 0.5) * 0.012, q[1] + (rnd() - 0.5) * 0.012, (rnd() - 0.5) * 0.18]; }); },
  });
  const SPIN = { blob: 1, spine: 1, cube: 1, earth: 1, helix: 1, network: 1 };
  const ICONS = window.CLOUD_ICONS || {}, cache = {}; let fontOK = false, shapes = [];
  function iconPts(name) {
    const c = document.createElement("canvas"), w = (c.width = c.height = 320), x = c.getContext("2d");
    x.fillStyle = "#fff"; x.textAlign = "center"; x.textBaseline = "middle"; x.font = "250px PhShape"; x.fillText(ICONS[name], w / 2, w / 2);
    const d = x.getImageData(0, 0, w, w).data, out = [];
    for (let j = 0; j < w; j += 2) for (let i = 0; i < w; i += 2) if (d[(j * w + i) * 4 + 3] > 128) out.push([((i - w / 2) / (w / 2)) * 1.12, (-(j - w / 2) / (w / 2)) * 1.12]);
    return out;
  }
  function shape(key) {
    if (cache[key]) return cache[key];
    if (key.indexOf("icon:") === 0) { const n = key.slice(5), t = fontOK && ICONS[n] ? iconPts(n) : []; if (t.length < 50) return shape("blob"); return (cache[key] = make(() => { const q = t[Math.floor(rnd() * t.length)]; return [q[0] + (rnd() - 0.5) * 0.02, q[1] + (rnd() - 0.5) * 0.02, (rnd() - 0.5) * 0.22]; })); }
    return (cache[key] = G[key]());
  }
  const jit = new Float32Array(N * 4); for (let k = 0; k < N * 4; k++) jit[k] = rnd();

  /* ---------- render ---------- */
  const cv = $("#art"), ctx = cv.getContext("2d");
  let stacked = false, W = 0, H = 0, cx = 0, cy = 0, R = 0, tops = [], hs = [], px = 0, py = 0, tx = 0, ty = 0, cur = -1;
  let ov = 0, ovTarget = 0, ovT = 1, OA = null, OB = null, aim = null, aimW = 0, aimOn = false, hoverEl = null, clearT = 0, touch = false;
  const near = (c, to) => { let d = (to - c) % 6.2832; if (d > 3.1416) d -= 6.2832; if (d < -3.1416) d += 6.2832; return c + d; };
  function measure() { tops = secs.map((s) => s.offsetTop); hs = secs.map((s) => s.offsetHeight); }
  function resize() { const d = Math.min(devicePixelRatio || 1, 2); W = innerWidth; H = innerHeight; cv.width = W * d; cv.height = H * d; ctx.setTransform(d, 0, 0, d, 0, 0);
    stacked = STACKED.matches;
    if (stacked) { cx = W / 2; cy = 64 + (H * 0.56 - 64) * 0.52; R = Math.min(W * 0.36, (H * 0.56 - 64) * 0.4); }
    else { const colW = Math.min(540, W * 0.44), gut = Math.max(24, Math.min(48, W * 0.04)), left = Math.max(0, (W - 1280) / 2) + gut + colW; cx = left + (W - left) * 0.5; cy = H * 0.52; R = Math.min((W - left) * 0.4, H * 0.36); }
    measure(); }
  addEventListener("pointermove", (ev) => { if (!W || !H) return; tx = ev.clientX / W - 0.5; ty = ev.clientY / H - 0.5; }, { passive: true });
  const capT = $("#cap-t"), capS = $("#cap-s"), root = document.documentElement;
  let t0 = 0, time = 0;
  function frame(now) {
    const dt = Math.min(0.05, (now - t0) / 1000 || 0); t0 = now; if (!reduce) time += dt;
    px += (tx - px) * 0.06; py += (ty - py) * 0.06;
    const mid = scrollY + H * (stacked ? 0.75 : 0.5); let i = 0; for (let k = 0; k < tops.length; k++) if (tops[k] <= mid) i = k;
    const j = Math.min(CH.length - 1, i + 1), bl = i === j ? 0 : sm(0, 1, (mid - (tops[i] + hs[i] - H * 0.55)) / (H * 0.55));
    const show = bl > 0.5 ? j : i;
    ov += Math.max(-dt / 0.45, Math.min(dt / 0.45, ovTarget - ov)); if (ovT < 1) ovT = Math.min(1, ovT + dt / 0.6); aimW += Math.max(-dt / 0.5, Math.min(dt / 0.5, (aimOn ? 1 : 0) - aimW));
    if (reduce) { ov = ovTarget; ovT = 1; aimW = aimOn ? 1 : 0; }
    if (show !== cur) { cur = show; if (!hoverEl) capT.textContent = CH[show].cap; capS.textContent = CH[show].sub; root.style.setProperty("--c", rgb(CH[show].col)); ticks.forEach((a, k) => a.classList.toggle("on", k === show)); navs.forEach((a) => a.classList.toggle("on", a.getAttribute("href") === "#" + CH[show].id)); }
    const A = shapes[i], B = shapes[j], ca = CH[i].col, cb = CH[j].col, col = [0, 1, 2].map((k) => Math.round(ca[k] + (cb[k] - ca[k]) * bl));
    const ang = (key) => (SPIN[key] ? ((time * 0.22 + Math.PI) % (2 * Math.PI)) - Math.PI : Math.sin(time * 0.45) * 0.38);
    const eo = ov * ov * (3 - 2 * ov), ea = aimW * aimW * (3 - 2 * aimW);
    let ry = ang(CH[i].key) * (1 - bl) + ang(CH[j].key) * bl, rx = 0.16;
    if (aim && ea > 0) { ry += (near(ry, aim.ry) - ry) * ea; rx += (aim.rx - rx) * ea; }
    ry = ry * (1 - eo) + Math.sin(time * 0.6) * 0.42 * eo + px * 0.5; rx += py * 0.3;
    const cyR = Math.cos(ry), syR = Math.sin(ry), cxR = Math.cos(rx), sxR = Math.sin(rx), f = 3.4;
    ctx.clearRect(0, 0, W, H); ctx.globalCompositeOperation = "lighter";
    const styles = []; for (let b = 0; b < 8; b++) styles.push(`rgba(${col[0]},${col[1]},${col[2]},${(0.2 + b * 0.115).toFixed(2)})`);
    const rot = (x, y, z) => { const x1 = x * cyR + z * syR, z1 = -x * syR + z * cyR, y1 = y * cxR - z1 * sxR, z2 = y * sxR + z1 * cxR, s = f / (f - z2); return [cx + x1 * R * s, cy - y1 * R * s, z2, s]; };
    let last = -1;
    for (let k = 0; k < N; k++) {
      const o = k * 3, q = k * 4; let m = Math.min(1, Math.max(0, bl * 1.7 - jit[q] * 0.7)); m = m * m * (3 - 2 * m);
      const sw = Math.sin(m * Math.PI) * 0.45;
      const wob = Math.sin(time * 0.9 + jit[q] * 6.2832) * 0.012;
      const x = A.p[o] + (B.p[o] - A.p[o]) * m + (jit[q + 1] - 0.5) * sw + wob, y = A.p[o + 1] + (B.p[o + 1] - A.p[o + 1]) * m + (jit[q + 2] - 0.5) * sw, z = A.p[o + 2] + (B.p[o + 2] - A.p[o + 2]) * m + (jit[q + 3] - 0.5) * sw;
      let x2 = x, y2 = y, z2 = z, s0 = A.s[k] + (B.s[k] - A.s[k]) * m;
      if (ov > 0.001 && OB) {
        let e2 = Math.min(1, Math.max(0, ov * 1.6 - jit[q + 2] * 0.6)); e2 = e2 * e2 * (3 - 2 * e2);
        let ox = OB.p[o], oy = OB.p[o + 1], oz = OB.p[o + 2], os = OB.s[k];
        if (ovT < 1 && OA !== OB) { let e3 = Math.min(1, Math.max(0, ovT * 1.6 - jit[q + 1] * 0.6)); e3 = e3 * e3 * (3 - 2 * e3); const s3 = Math.sin(e3 * Math.PI) * 0.3; ox = OA.p[o] + (ox - OA.p[o]) * e3 + (jit[q + 3] - 0.5) * s3; oy = OA.p[o + 1] + (oy - OA.p[o + 1]) * e3 + (jit[q] - 0.5) * s3; oz = OA.p[o + 2] + (oz - OA.p[o + 2]) * e3 + (jit[q + 2] - 0.5) * s3; }
        const s2 = Math.sin(e2 * Math.PI) * 0.35;
        x2 = x + (ox - x) * e2 + (jit[q + 3] - 0.5) * s2; y2 = y + (oy - y) * e2 + (jit[q + 1] - 0.5) * s2; z2 = z + (oz - z) * e2 + (jit[q] - 0.5) * s2; s0 += (os - s0) * e2;
      }
      const r = rot(x2, y2, z2), b = Math.max(0, Math.min(7, Math.round((r[2] + 1.2) * 3))), sz = s0 * r[3] * Math.max(1.3, Math.min(2.2, R / 150));
      if (b !== last) { ctx.fillStyle = styles[b]; last = b; }
      ctx.fillRect(r[0] - sz / 2, r[1] - sz / 2, sz, sz);
      if (k % 7 === 0 && b > 3) { ctx.globalAlpha = 0.09; ctx.fillRect(r[0] - sz * 2.5, r[1] - sz * 2.5, sz * 5, sz * 5); ctx.globalAlpha = 1; }
    }
    // journey markers on the globe
    const ei = CH.findIndex((c) => c.key === "earth"), ew = (i === ei ? 1 - bl : j === ei ? bl : 0) * (1 - eo);
    if (ew > 0.6) {
      ctx.globalCompositeOperation = "source-over"; const al = (ew - 0.6) / 0.4; ctx.font = '500 12px "Geist Mono", monospace';
      cities.forEach((c, n) => {
        if (n) { const a = ll(cities[n - 1].lat, cities[n - 1].lon, 1), b = ll(c.lat, c.lon, 1); for (let t = 0; t <= 1; t += 0.025) { let v = [0, 1, 2].map((d) => a[d] + (b[d] - a[d]) * t); const len = Math.hypot(v[0], v[1], v[2]), h = 1 + 0.22 * Math.sin(t * Math.PI); v = v.map((d) => (d / len) * h); const r = rot(v[0], v[1], v[2]); ctx.fillStyle = `rgba(255,255,255,${(r[2] > -0.2 ? 0.75 : 0.12) * al})`; ctx.fillRect(r[0] - 1, r[1] - 1, 2, 2); } }
        const v = ll(c.lat, c.lon, 1.01), r = rot(v[0], v[1], v[2]); if (r[2] < -0.1) return;
        ctx.globalAlpha = al; ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.arc(r[0], r[1], 4, 0, 6.2832); ctx.fill();
        ctx.strokeStyle = "rgba(255,255,255,.6)"; ctx.beginPath(); ctx.arc(r[0], r[1], 8 + 3 * Math.sin(time * 2 + n), 0, 6.2832); ctx.stroke();
        ctx.fillText(c.city.toUpperCase(), r[0] + 14, r[1] + 4); ctx.globalAlpha = 1;
      });
    }
    ctx.globalCompositeOperation = "source-over";
  }
  // point at any line: the sculpture becomes its icon
  const main = $("#main");
  function setHover(el) {
    clearTimeout(clearT); if (el === hoverEl) return; hoverEl = el;
    if (!el) { ovTarget = 0; aimOn = false; if (cur >= 0) capT.textContent = CH[cur].cap; return; }
    if (el.dataset.city) { const c = cities.find((x) => x.city === el.dataset.city); aim = { ry: (-c.lon * Math.PI) / 180, rx: ((c.lat * Math.PI) / 180) * 0.62 }; aimOn = true; ovTarget = 0; }
    else { const s = shape("icon:" + el.dataset.icon); if (ov > 0.05 && OB && OB !== s) { OA = OB; ovT = 0; } else { OA = s; ovT = 1; } OB = s; ovTarget = 1; aimOn = false; }
    if (el.dataset.cap) capT.textContent = el.dataset.cap;
  }
  const pick = (t) => (t && t.closest ? t.closest("[data-icon],[data-city]") : null);
  main.addEventListener("pointerover", (ev) => { touch = ev.pointerType === "touch"; const el = pick(ev.target); if (el) setHover(el); else { clearTimeout(clearT); clearT = setTimeout(() => setHover(null), 160); } });
  main.addEventListener("pointerleave", () => setHover(null));
  main.addEventListener("focusin", (ev) => { const el = pick(ev.target); if (el) setHover(el); });
  main.addEventListener("focusout", () => { clearTimeout(clearT); clearT = setTimeout(() => setHover(null), 160); });
  addEventListener("scroll", () => { if (touch && hoverEl) setHover(null); }, { passive: true });

  let raf = 0, started = false; const loop = (n) => { raf = 0; try { frame(n); } finally { if (!document.hidden) raf = requestAnimationFrame(loop); } }, kick = () => { if (started && !raf) raf = requestAnimationFrame(loop); };
  document.addEventListener("visibilitychange", kick); addEventListener("resize", () => { resize(); kick(); }); addEventListener("load", () => { resize(); kick(); });
  // Show the chapter menu only when every link fits beside the buttons.
  const navEl = $("#nav"), fitNav = () => { navEl.classList.remove("nofit"); navEl.classList.toggle("nofit", navEl.scrollWidth > navEl.clientWidth + 1); };
  addEventListener("resize", fitNav); addEventListener("load", fitNav); if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitNav); fitNav();
  const start = () => { if (started) return; shapes = CH.map((c) => shape(c.key)); started = true; resize(); kick(); };
  const done = new Promise((res) => { try { const ff = new FontFace("PhShape", "url(" + S.assetBase + "assets/icons/phosphor-shapes.woff2)"); ff.load().then((f) => { document.fonts.add(f); fontOK = true; res(); }, res); } catch (err) { res(); } setTimeout(res, 3000); });
  const textFont = document.fonts && document.fonts.load ? document.fonts.load('600 100px "Geist"').catch(() => {}) : Promise.resolve();
  Promise.all([done, Promise.race([textFont, new Promise((r) => setTimeout(r, 3000))])]).then(start);
  if (STACKED.addEventListener) STACKED.addEventListener("change", () => { resize(); kick(); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => requestAnimationFrame(measure));
  addEventListener("orientationchange", () => setTimeout(() => { resize(); kick(); }, 250));
})();
