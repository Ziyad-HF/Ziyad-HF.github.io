// Atlas design — journey map + story, rendered from ../shared/content.js
(function () {
  "use strict";
  const S = window.SITE, W = window.WORLD;
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const ext = (href, text, cls = "") => href ? `<a class="${cls}" href="${esc(href)}" target="_blank" rel="noopener">${text}</a>` : "";
  const X = (n) => S.experience.find((x) => x.org.includes(n));
  const P = (n) => S.projects.find((p) => p.title.includes(n));
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- hero ----------
  const first = S.name.split(" ")[0], last = S.name.split(" ").slice(1).join(" ");
  const hero = `
  <section class="hero" id="top"><div class="wrap">
    <div class="hero-grid">
      <div class="reveal">
        <span class="kicker caption-1"><span class="live"></span>${esc(S.role)}</span>
        <h1 class="heading-1 hero-h1">${esc(first)}<br>${esc(last)}</h1>
        <p class="lede">${esc(S.tagline)}</p>
        <div class="cta"><a class="btn primary" href="mailto:${esc(S.links.email)}"><i class="ph ph-envelope-simple" aria-hidden="true"></i>Get in touch</a><button class="btn ghost" type="button" id="qv-open"><i class="ph ph-timer" aria-hidden="true"></i>Read the 30 second summary</button>${S.links.resume ? ext(S.links.resume, "Resume", "btn ghost") : ""}</div>
      </div>
      <div class="portrait reveal">
        <img src="${esc(S.photo)}" alt="Portrait of ${esc(S.name)} in Edmonton" width="600" height="750">
        <a class="float f1" href="#recognition"><b>1st / 259</b>Dell Envision the Future</a>
        <a class="float f2" href="#work"><b>TRB 2027</b>paper accepted to present</a>
        <a class="float f3" href="#journey"><b>Edmonton, from Cairo</b><span class="muted">via Hangzhou</span></a>
      </div>
    </div>
    <div class="stats">${S.stats.map((s, i) => `<a class="stat reveal" href="${esc(s.href || "#work")}"><span class="s-k">${["Now researching", "Next: presenting", "Recognized", "Built"][i] || ""}</span><div class="v" data-count="${esc(s.value)}">${esc(s.value)}</div><div class="l">${esc(s.label)}</div><i class="ph ph-arrow-right s-go" aria-hidden="true"></i></a>`).join("")}</div>
    <div class="orgs reveal"><span>Learned and worked at</span><ul>${["University of Alberta", "Kasr Al Ainy · Cairo University", "Siemens EDA", "Siemens Healthineers", "Westlake University", "Dar Al Fouad Hospital"].map((o) => `<li>${o}</li>`).join("")}</ul></div>
  </div></section>`;

  // ---------- journey ----------
  const J = Object.fromEntries(S.journey.map((j) => [j.city, j]));
  const chapterBody = {
    Cairo: { list: [S.education[1].degree + " — " + S.education[1].school, ...["Dar Al Fouad", "Healthineers", "Siemens EDA"].map((n) => { const x = X(n); return `${x.role}, ${x.org} (${x.dates})`; }), "Autism Detection Platform: 1st of 259 in Dell Technologies' Envision the Future; ITIDA grant", "Head of AI Committee at DSC Cairo University"], img: "../shared/assets/dell-win.jpg", alt: "The Autism Detection Platform team after winning Dell's Envision the Future" },
    Hangzhou: { list: X("Westlake").points, img: "../shared/assets/westlake.jpg", alt: "Ziyad at Westlake University's Frontiers of Life Sciences summer school" },
    Edmonton: { list: [S.education[0].degree + " — " + S.education[0].school, "Graduate Research Fellow, GeoTrans Lab (supervisor: Dr. Tae J. Kwon)", "Medical AI Researcher with Kasr Al Ainy's Department of Neurosurgery, now remote", "Paper accepted for presentation at TRB 2027; under review at the Canadian Journal of Civil Engineering", "Event Coordinator, ITE University of Alberta Student Chapter"], img: "../shared/assets/geotrans.jpg", alt: "GeoTrans Lab team at the University of Alberta" }
  };
  const journey = `
  <section id="journey" class="alt"><div class="wrap">
    <p class="sec-k">The journey</p>
    <h2>Three cities, <span class="hl">one thread.</span></h2>
    <p class="sec-intro">Starting where I am now, in Edmonton, and travelling back through a summer in Hangzhou to where it all began in Cairo. Scroll the chapters and the map follows.</p>
    <div class="journey">
      <div class="map-sticky"><div class="map-card">
        <div class="map" id="map"><canvas id="land" aria-hidden="true"></canvas><svg id="routes" viewBox="0 0 1800 690" role="img" aria-label="Map showing Cairo, Hangzhou and Edmonton"></svg></div>
        <div class="map-legend"><span id="map-label">Edmonton ← Hangzhou ← Cairo</span><span class="clock">Edmonton <b id="clock">--:--</b></span></div>
      </div></div>
      <div class="chapters">${S.journey.map((j) => `
        <article class="chapter reveal" data-city="${esc(j.city)}">
          <span class="when">${esc(j.years)}</span>
          <h3>${esc(j.city)} <span>${esc(j.country)}</span></h3>
          <p>${esc(j.text)}</p>
          <ul>${chapterBody[j.city].list.map((l) => `<li>${esc(l)}</li>`).join("")}</ul>
          ${(() => { const ph = S.gallery.filter((g) => g.city === j.city); return `<div class="ch-photos"><img class="ch-main zoom" src="${esc(ph[0].src)}" alt="${esc(ph[0].caption)}" loading="lazy"><p class="ch-cap">${esc(ph[0].caption)}</p>${ph.length > 1 ? `<div class="ch-thumbs">${ph.map((p, k) => `<button type="button" class="${k ? "" : "on"}" data-src="${esc(p.src)}" data-cap="${esc(p.caption)}" aria-label="Show photo: ${esc(p.caption)}"><img src="${esc(p.src)}" alt="" loading="lazy"></button>`).join("")}</div>` : ""}</div>`; })()}
        </article>`).join("")}
      </div>
    </div>
  </div></section>`;

  // ---------- work: two fields + method ----------
  const kasr = X("Kasr"), uofa = X("University of Alberta");
  const autism = P("Autism"), wild = P("Wildfire"), gis = P("Asthma");
  const tech = (html, label = "Technical details") => `<details class="tech"><summary>${label}</summary><div>${html}</div></details>`;
  const item = (meta, title, text, steps = "") => `<div class="item" data-steps="${steps}"><div class="meta">${esc(meta)}</div><h3>${esc(title)}</h3><p>${text.includes("<a href") ? text : esc(text)}</p></div>`;

  // Kasr Al Ainy pipeline diagram (drawn from the role description; no patient data)
  const node = (x, y, w, t1, t2, cls = "") => `<g class="pn ${cls}"><rect x="${x}" y="${y}" width="${w}" height="46" rx="10"/><text x="${x + w / 2}" y="${y + 20}">${t1}</text><text class="sub" x="${x + w / 2}" y="${y + 36}">${t2}</text></g>`;
  const arr = (x1, y1, x2, y2) => `<path class="pa" d="M${x1},${y1} C${(x1 + x2) / 2},${y1} ${(x1 + x2) / 2},${y2} ${x2},${y2}" marker-end="url(#ah)"/>`;
  const pipeline = `<figure class="pipeline" aria-label="How the medical AI supports neurosurgeons">
    <svg viewBox="0 0 600 250" role="img">
      <defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" class="ah"/></marker></defs>
      <text class="lane" x="6" y="18">Scans</text><text class="lane" x="6" y="150">Patient story</text>
      ${node(6, 28, 130, "Spine MRI scans", "of each patient")}${arr(136, 51, 166, 51)}
      ${node(166, 28, 130, "Doctors mark findings", "to teach the AI")}${arr(296, 51, 326, 51)}
      ${node(326, 28, 130, "AI spots problems", "on new scans", "m")}
      ${node(6, 160, 130, "Patient records", "symptoms, pain, treatment")}${arr(136, 183, 326, 183)}
      ${node(326, 160, 130, "AI predicts recovery", "and risk per treatment", "m")}
      ${arr(456, 51, 476, 112)}${arr(456, 183, 476, 128)}
      ${node(476, 97, 118, "Decision support", "for neurosurgeons", "c")}
    </svg>
    <figcaption>A simplified view of how the AI helps the neurosurgery team.</figcaption>
  </figure>`;
  const T = S.thesis, pub = S.publications[0];
  const work = `
  <section id="work"><div class="wrap">
    <p class="sec-k">The work</p>
    <h2>Two fields, <span class="hl">one method.</span></h2>
    <p class="sec-intro">My research sits in healthcare and in transportation. The domains differ; the way I work does not.</p>
    <div class="fields">
      <div class="field reveal" style="--c:var(--med)"><span class="tag">Medical AI</span><h3>Helping clinicians decide</h3>
        ${item(kasr.dates + " · " + kasr.org, kasr.role, esc(kasr.story) + " <a href=\"#pipeline\">See how it works</a>", "1 3")}
        ${item(autism.meta, autism.title, autism.pitch + " " + autism.plainResult, "1 3")}
        ${item("Clinical engineering · 2023–2024", "Hands on with medical devices", "Rotated through hospital departments, calibrated medical devices, and joined Siemens Healthineers engineers on hospital service calls.", "")}
      </div>
      <div class="method reveal"><div class="arrows" aria-hidden="true">→</div><div class="core"><h3>The method</h3><p class="hint">Hover or tap a step to see where I used it.</p><ol>
        <li><button type="button" data-step="1">Get the data right: clean, well-labelled data before any model.</button></li>
        <li><button type="button" data-step="2">Test it honestly: check results on new, unseen cases and say where it falls short.</button></li>
        <li><button type="button" data-step="3">Make it useful: results that clinicians, inspectors and road crews can act on.</button></li></ol></div><div class="arrows" aria-hidden="true">←</div></div>
      <div class="field reveal" style="--c:var(--tra)"><span class="tag">Transportation & infrastructure AI</span><h3>Keeping roads and cities safe</h3>
        ${item("M.Sc. thesis · " + T.dates, T.title, T.story, "1 3")}
        ${item(wild.meta, wild.title, wild.pitch + " " + wild.plainResult, "2 3")}
        ${item(gis.meta, gis.title, gis.pitch, "")}
      </div>
    </div>
    ${tech(`<p><b>${esc(T.title)}</b></p><ul><li>${T.points.map(esc).join("</li><li>")}</li></ul>`, "Thesis: technical details")}
    <div class="pipe-wrap reveal" id="pipeline"><p class="sec-k" style="color:var(--med)">Inside the Medical AI work</p><h3>AI that helps neurosurgeons choose the right treatment</h3><p class="muted" style="max-width:760px">The system looks at two things a neurosurgeon looks at: the patient's spine MRI scans and their story (symptoms, pain levels, examination findings, the treatment they received and how they recovered). It points out problems on the scans and estimates how likely a patient is to improve, or face complications, with each treatment option.</p>${pipeline}${tech(`<ul><li>${kasr.points.slice(1).map(esc).join("</li><li>")}</li></ul>`)}</div>
    <div class="pubcard reveal"><div class="doc" aria-hidden="true"></div><div>
      <div class="sec-k" style="margin:0">Publication</div>
      <h3>${esc(pub.title)}</h3><p style="margin:4px 0 0">${esc(pub.plain)}</p>${tech(`<p>${esc(pub.authors)} · ${esc(pub.summary)}</p>`)}
      <div class="chips"><span class="chip ok">Accepted for presentation · TRB Annual Meeting, Jan 2027</span><span class="chip wait">Under review · Canadian Journal of Civil Engineering</span></div>
    </div></div>
  </div></section>`;


  // ---------- everything timeline ----------
  const MON = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
  const ym = (d) => { const m = String(d).match(/([A-Z][a-z]{2})\w*\s+(\d{4})/); if (m) return [+m[2], MON[m[1]]]; const y = String(d).match(/(\d{4})/); return y ? [+y[1], 0] : [0, 0]; };
  const cityOf = (t) => /Edmonton|Alberta|UAlberta|ITE|Muslim/i.test(t) ? "Edmonton" : /Hangzhou|Westlake/i.test(t) ? "Hangzhou" : "Cairo";
  const EV = [];
  const push = (type, date, title, sub, points, link, image) => { const [y, m] = ym(date); EV.push({ type, date, y, m, title, sub, image, org: (type === "work" || type === "community" || type === "education") ? sub.split(" · ")[0] : "", points: points || [], link, city: cityOf(title + " " + sub) }); };
  S.education.forEach((e) => push("education", e.dates.split(" – ")[0], e.degree.split(" · ")[0], e.school + " · " + e.place, [e.degree, e.dates]));
  const xImg = { "University of Alberta": "ualberta.jpg", "Westlake University": "westlake.jpg", "Siemens EDA": "siemens.jpg", "Siemens Healthineers": "healthineers-academy.jpg" };
  S.experience.forEach((x) => { push("work", x.dates.split(" – ")[0], x.role, x.org + " · " + x.place + " · " + x.dates, x.plain || x.points, x.link, xImg[x.org] ? S.assetBase + "assets/" + xImg[x.org] : ""); EV[EV.length - 1].story = x.story; EV[EV.length - 1].tech = x.points; });
  S.awards.forEach((a) => push("award", a.date, a.title, a.detail, [], a.link, a.image));
  S.leadership.forEach((l) => push("community", l.dates.split(" – ")[0], l.role, l.org + " · " + l.dates, l.note ? [l.note] : []));
  const shortNews = (t) => /submitted/i.test(t) ? "Paper submitted to the Canadian Journal of Civil Engineering" : /accepted/i.test(t) ? "Paper accepted for presentation at TRB 2027" : /poster/i.test(t) ? "Poster at FEGRS 2026, University of Alberta" : t;
  S.news.filter((n) => /paper|poster|TRB|Journal/i.test(n.text)).forEach((n) => push("research", n.date, shortNews(n.text), "Research · University of Alberta", [n.text], n.link, n.image));
  push("research", "Sep 2024", "Multimodal AI-based Autism Detection Platform", "Graduation project · Sep 2024 – Jul 2025 · Cairo", [autism.pitch, autism.plainResult], autism.link, autism.image);
  push("research", "Sep 2026", "Calibrated Wildfire Building-Damage Assessment", "Course research project · University of Alberta", [wild.pitch, wild.plainResult], wild.link, wild.image);
  EV.forEach((e) => { if (/Edmonton|University of Alberta|ITE|Muslim|Wildfire|TRB|Journal|FEGRS|GeoTrans/i.test(e.title + e.sub)) e.city = "Edmonton"; if (/Kasr/i.test(e.sub)) e.city = "Cairo · remote"; });
  EV.sort((a, b) => b.y - a.y || b.m - a.m);
  const TYPES = { work: ["Work", "var(--tra)"], research: ["Research", "var(--res)"], award: ["Awards", "var(--accent2)"], education: ["Education", "var(--vis)"], community: ["Community", "var(--sw)"] };
  const years = [...new Set(EV.map((e) => e.y))].sort((a, b) => b - a);
  const timeline = `
  <section id="timeline" class="alt"><div class="wrap">
    <p class="sec-k">Everything, on one line</p>
    <h2>${EV.length} milestones, <span class="hl">one click each.</span></h2>
    <p class="sec-intro">Every job, paper, award and role since 2020, newest first. Filter by type, then click any milestone for details and evidence.</p>
    <div class="legend tl-filter" role="group" aria-label="Filter milestones">${Object.entries(TYPES).map(([k, [n, c]]) => `<button data-type="${k}" aria-pressed="true" style="--c:${c}"><i></i>${n}</button>`).join(" ")}</div>
    <p class="scroll-hint"><i class="ph ph-arrows-horizontal" aria-hidden="true"></i>Scroll sideways for earlier years</p>
    <div class="tl-wrap">
      <div class="tl-years">${years.map((y) => `<div class="tl-col"><div class="tl-y">${y}</div>${EV.map((e, i) => [e, i]).filter(([e]) => e.y === y).map(([e, i]) => `<button class="tl-ev" data-i="${i}" data-type="${e.type}" style="--c:${TYPES[e.type][1]}"><span class="tl-m">${esc(e.date.split(" ")[0].length === 3 ? e.date.split(" ")[0] : "")}</span>${esc(e.title)}${e.org ? `<span class="tl-o">${esc(e.org)}</span>` : ""}</button>`).join("")}</div>`).join("")}</div>
      <aside class="tl-detail" id="tl-detail" aria-live="polite"></aside>
    </div>
  </div></section>`;

  // ---------- projects ----------
  const CAT = { research: ["Research", "var(--res)"], transport: ["Transportation", "var(--tra)"], health: ["Medical", "var(--med)"], vision: ["Vision", "var(--vis)"], software: ["Software", "var(--sw)"] };
  const card = (p, big) => {
    const c1 = CAT[p.cats[0]][1], c2 = CAT[p.cats[1] || p.cats[0]][1];
    return `<article class="pcard${big ? " big" : ""} reveal" data-cats="${p.cats.join(" ")}" data-text="${esc((p.title + " " + p.pitch + " " + p.desc + " " + p.tags.join(" ")).toLowerCase())}" style="--c1:${c1};--c2:${c2}">
      ${big ? (p.image ? `<img class="zoom${p.imageFit === "contain" ? " contain" : ""}" src="${esc(p.image)}" alt="${esc(p.imageAlt || p.title)}" loading="lazy">` : `<div class="visual">${esc(p.tags.slice(0, 3).join(" · "))}</div>`) : `<div class="stripe"></div>`}
      <div class="pb"><span class="meta">${esc(p.meta)}</span><h3>${esc(p.title)}</h3><p>${esc(p.pitch)}</p>${p.plainResult ? `<p class="result"><i class="ph ph-trophy" aria-hidden="true"></i><span>${esc(p.plainResult)}</span></p>` : ""}
      ${tech(`<p>${esc(p.desc)}</p><div class="chips">${p.tags.map((t) => `<button type="button" class="chip tagbtn" data-tag="${esc(t)}">${esc(t)}</button>`).join("")}</div>`, "How it works")}${ext(p.link, `Open project <i class="ph ph-arrow-right" aria-hidden="true"></i>`, "go")}</div></article>`;
  };
  const projects = `
  <section id="projects" class="alt"><div class="wrap">
    <p class="sec-k">The atlas</p>
    <h2>${S.projects.length} projects, <span class="hl">mapped by field.</span></h2>
    <p class="sec-intro">Most of these were team efforts. Filter by field or search. Open "How it works" on any card for the technical side.</p>
    <div class="toolbar"><input id="psearch" type="search" placeholder="Search projects (e.g. MRI, YOLO, GIS)" aria-label="Search projects">
      <div class="legend" role="group" aria-label="Filter by field"><button data-cat="all" aria-pressed="true">All</button>${Object.entries(CAT).map(([k, [n, c]]) => `<button data-cat="${k}" aria-pressed="false" style="--c:${c}"><i></i>${n}</button>`).join(" ")}</div></div>
    <div class="featured">${S.projects.filter((p) => p.featured).reverse().map((p) => card(p, true)).join("")}</div>
    <div class="pgrid">${S.projects.filter((p) => !p.featured).map((p) => card(p)).join("")}</div>
    <p class="empty" id="pempty" hidden>No projects match that search.</p>
  </div></section>`;

  // ---------- recognition ----------
  const recognition = `
  <section id="recognition"><div class="wrap">
    <p class="sec-k">Recognition</p>
    <h2>Milestones <span class="hl">along the way.</span></h2>
    <p class="scroll-hint"><i class="ph ph-arrows-horizontal" aria-hidden="true"></i>Scroll sideways</p>
    <div class="awards">${S.awards.map((a) => `<article class="award">${a.image ? `<img class="zoom${a.imageFit === "contain" ? " contain" : ""}" src="${esc(a.image)}" alt="${esc(a.title)}" loading="lazy">` : `<div class="ph">${esc((a.title.match(/^\d\w+/) || ["★"])[0])}</div>`}<div class="ab"><span class="date">${esc(a.date)}</span><h3>${esc(a.title)}</h3><p>${esc(a.detail)}</p>${ext(a.link, `Evidence <i class="ph ph-arrow-up-right" aria-hidden="true"></i>`)}</div></article>`).join("")}</div>
    <div class="media reveal"><div class="media-strip">${S.media.items.map((m) => `<a href="${esc(m.href)}" target="_blank" rel="noopener"><img src="${esc(m.src)}" alt="${esc(m.caption)}" loading="lazy"><span>${esc(m.caption)}</span></a>`).join("")}</div><div><p class="sec-k">In the media</p><h3>BBC Arabic, Al-Mehwar TV, Al-Ahram</h3><p class="muted">${esc(S.media.text)}</p><div class="cta" style="margin-top:14px">${(S.media.videos || []).map((v) => ext(v.href, `<i class="ph ph-play-circle" aria-hidden="true"></i>${esc(v.label)}`, "btn ghost")).join("")}${ext(S.media.link, "All coverage", "btn ghost")}</div></div></div>
    <div class="certs-head"><h3>Certificates <span class="muted">(${S.certificates.length})</span></h3><div class="legend cert-filter" role="group" aria-label="Filter certificates">${[["all", "All"], ["award", "Awards"], ["research", "Research & conferences"], ["competition", "Competitions"], ["industry", "Industry training"], ["course", "Courses & workshops"]].map(([k, n], i) => `<button data-cc="${k}" aria-pressed="${!i}">${n}</button>`).join(" ")}</div></div>
    <div class="certs">${[...S.certificates].map((c, i) => [c, i]).sort(([a, i], [b, j]) => { const k = (c) => { const [y, m] = ym(c.date || ""); return y ? y * 12 + (/[A-Z][a-z]{2}/.test(c.date) ? m : 5.5) : -1; }; return k(b) - k(a) || i - j; }).map(([c]) => c).map((c) => `<figure class="cert" data-cc="${c.cat}"><button type="button" class="cert-btn" aria-label="Enlarge certificate: ${esc(c.title)}"><img class="zoom" src="${esc(S.assetBase + "assets/" + c.img)}" alt="Certificate: ${esc(c.title)}, ${esc(c.issuer)}" loading="lazy"></button><figcaption><b>${esc(c.title)}</b><span>${esc(c.issuer)}${c.date ? " · " + esc(c.date) : ""}</span></figcaption></figure>`).join("")}</div>
  </div></section>`;

  const community = `
  <section class="alt"><div class="wrap two">
    <div><p class="sec-k">Community</p><h2 style="font-size:36px">Leadership & volunteering</h2><ul class="lead">${S.leadership.map((l) => `<li><div><b>${esc(l.role)}</b><div class="muted">${esc(l.org)}</div>${l.note ? `<div style="font-size:15px">${esc(l.note)}</div>` : ""}</div><span class="d">${esc(l.dates)}</span></li>`).join("")}</ul></div>
    <div><p class="sec-k">Toolbox</p><h2 style="font-size:36px">Skills</h2><p class="muted">For the technical reader.</p><div class="skills">${Object.entries(S.skills).map(([k, v]) => `<div class="grp"><b>${esc(k)}</b><div class="chips">${v.split(", ").map((x) => `<span class="chip">${esc(x)}</span>`).join("")}</div></div>`).join("")}</div></div>
  </div></section>`;


  // ---------- tagline reveal ----------
  const TAG = "Good AI starts with honest data and ends with decisions people can trust, whether that is a neurosurgeon choosing a treatment or a city clearing its roads after a storm.";
  const tagline = `<section class="tagline" aria-label="What I believe"><div class="wrap"><p class="tag-text heading-2">${TAG.split(" ").map((w) => `<span class="w">${esc(w)}</span>`).join(" ")}</p></div></section>`;

  // ---------- FAQ ----------
  const FAQ = [
    ["What do you work on?", "Computer vision and multimodal AI for two fields: healthcare, where I build AI that supports neurosurgeons' treatment decisions, and transportation, where my thesis uses winter dashcam images to measure how quickly roads are cleared."],
    ["Where are you based?", "Edmonton, Alberta, Canada. I'm a Graduate Research Fellow at the University of Alberta, and I work remotely with the neurosurgery team at Kasr Al Ainy, Cairo University."],
    ["What is your background?", "A B.Sc. in Systems and Biomedical Engineering from Cairo University (GPA 3.7/4), internships at Siemens EDA, Siemens Healthineers and Dar Al Fouad Hospital, and an M.Sc. in Transportation Engineering in progress."],
    ["What roles are you open to?", "Research and industry roles in applied AI and computer vision, especially in healthcare, transportation and smart cities."],
    ["Can I see your code?", "Yes. Most projects link to their GitHub repository, and my profile is at github.com/Ziyad-HF. Some research code stays private until it is published."],
    ["Is there a version for engineers?", "Yes. Use the technical details switch on this page, or open the terminal version and type help."],
    ["How do I reach you?", "Email is fastest: " + S.links.email + ". You can also message me on LinkedIn."]
  ];
  const faq = `<section id="faq" class="alt"><div class="wrap faq-wrap"><div><p class="sec-k">Quick answers</p><h2>Questions people <span class="hl">usually ask.</span></h2></div><div class="faq">${FAQ.map(([q, a]) => `<details class="qa"><summary><span>${esc(q)}</span><i class="ph ph-plus" aria-hidden="true"></i></summary><p>${esc(a)}</p></details>`).join("")}</div></div></section>`;

  const L = S.links;
  const contact = `
  <section id="contact"><div class="wrap"><div class="contact reveal">
    <div><p class="sec-k" style="color:var(--accent2)">Contact</p><h2>Let's build something <span class="hl">useful.</span></h2><p>I'm open to research and industry opportunities in applied AI and computer vision, especially in healthcare, transportation, and smart cities.</p></div>
    <div class="clinks">
      <button type="button" id="copy-email"><span>${esc(L.email)}</span><span id="copy-lbl"><i class="ph ph-copy" aria-hidden="true"></i>Copy</span></button>
      ${ext(L.linkedin, `<span>LinkedIn</span><i class="ph ph-linkedin-logo" aria-hidden="true"></i>`)}${ext(L.github, `<span>GitHub</span><i class="ph ph-github-logo" aria-hidden="true"></i>`)}${ext(L.lab, `<span>GeoTrans Lab profile</span><i class="ph ph-arrow-up-right" aria-hidden="true"></i>`)}
    </div>
  </div></div></section>`;

  document.getElementById("app").innerHTML = hero + journey + tagline + work + timeline + projects + recognition + community + faq + contact +
    `<footer class="foot"><div class="wrap foot-in"><span>© ${new Date().getFullYear()} ${esc(S.name)} · Made in Edmonton, with roots in Cairo.</span><nav aria-label="Footer"><a href="terminal/">Terminal version</a><a href="${esc(S.links.github)}" target="_blank" rel="noopener">GitHub</a><a href="${esc(S.links.linkedin)}" target="_blank" rel="noopener">LinkedIn</a><a href="#top">Back to top</a></nav><span class="privacy">Privacy: this site uses no cookies, analytics or tracking.</span></div></footer>`;

  // ---------- map ----------
  const VW = 1800, VH = 690;
  const proj = (lat, lon) => [((lon - W.lon0) / (W.rows[0].length * W.step)) * VW, ((W.lat0 - lat) / (W.rows.length * W.step)) * VH];
  const canvas = document.getElementById("land");
  function drawLand() {
    const r = canvas.getBoundingClientRect(); const dpr = devicePixelRatio || 1;
    canvas.width = r.width * dpr; canvas.height = r.height * dpr;
    const ctx = canvas.getContext("2d"); ctx.scale(dpr, dpr);
    const cw = r.width / W.rows[0].length, ch = r.height / W.rows.length, rad = Math.max(0.8, Math.min(cw, ch) * 0.32);
    ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--dot").trim();
    W.rows.forEach((row, y) => { for (let x = 0; x < row.length; x++) if (row[x] === "1") { ctx.beginPath(); ctx.arc(x * cw + cw / 2, y * ch + ch / 2, rad, 0, 7); ctx.fill(); } });
  }
  const svg = document.getElementById("routes");
  const pts = Object.fromEntries(S.journey.map((j) => [j.city, proj(j.lat, j.lon)]));
  const arc = (a, b, lift) => { const [x1, y1] = pts[a], [x2, y2] = pts[b]; const mx = (x1 + x2) / 2, my = Math.min(y1, y2) - lift; return `M${x1},${y1} Q${mx},${my} ${x2},${y2}`; };
  svg.innerHTML = `
    <path class="route" data-to="Hangzhou" d="${arc("Cairo", "Hangzhou", 170)}"/>
    <path class="route" data-to="Edmonton" d="${arc("Cairo", "Edmonton", 230)}"/>
    ${S.journey.map((j) => { const [x, y] = pts[j.city]; return `<g class="city" data-city="${esc(j.city)}"><circle class="halo" cx="${x}" cy="${y}" r="12"/><circle class="core" cx="${x}" cy="${y}" r="13"/><text x="${x + 22}" y="${y - 18}">${esc(j.city)}</text></g>`; }).join("")}`;
  function setCity(c) {
    svg.querySelectorAll(".city").forEach((g) => g.classList.toggle("on", g.dataset.city === c));
    svg.querySelectorAll(".route").forEach((r) => r.classList.toggle("on", r.dataset.to === c));
    document.querySelectorAll(".chapter").forEach((ch) => ch.classList.toggle("on", ch.dataset.city === c));
    const j = J[c]; document.getElementById("map-label").textContent = j ? `${j.city}, ${j.country} · ${j.years}` : "";
  }
  drawLand(); setCity(S.journey[0].city);
  let rz; addEventListener("resize", () => { clearTimeout(rz); rz = setTimeout(drawLand, 150); });
  const chapIO = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setCity(e.target.dataset.city)), { rootMargin: "-45% 0px -45% 0px" });
  document.querySelectorAll(".chapter").forEach((c) => chapIO.observe(c));

  // clock
  const clock = document.getElementById("clock");
  const tick = () => (clock.textContent = new Date().toLocaleTimeString("en-CA", { hour: "2-digit", minute: "2-digit", timeZone: "America/Edmonton" }));
  tick(); setInterval(tick, 20000);


  // ---------- simple / technical switch ----------
  const techBtn = document.getElementById("tech-toggle");
  if (techBtn) techBtn.addEventListener("click", () => {
    const on = techBtn.getAttribute("aria-pressed") !== "true";
    techBtn.setAttribute("aria-pressed", on); techBtn.textContent = on ? "Hide technical details" : "Show technical details";
    document.querySelectorAll("details.tech").forEach((d) => (d.open = on));
  });

  // ---------- 30 second summary ----------
  const qv = document.createElement("dialog");
  qv.className = "qv"; qv.setAttribute("aria-label", "30 second summary");
  qv.innerHTML = `<form method="dialog"><button class="qv-x" aria-label="Close">×</button></form>
    <div class="qv-head"><img src="${esc(S.photo)}" alt=""><div><h3>${esc(S.name)}</h3><p>${esc(S.headline)}<br><span class="muted">${esc(S.role)} · ${esc(S.location)}</span></p></div></div>
    <ul class="qv-list">
      <li><b>Now:</b> teaching AI to check how quickly winter roads are cleared after snowstorms (M.Sc., University of Alberta).</li>
      <li><b>Also:</b> building AI that supports neurosurgeons' treatment decisions (Kasr Al Ainy, Cairo University).</li>
      <li><b>Research:</b> paper accepted for presentation at TRB 2027, the largest transportation research meeting; under review at the Canadian Journal of Civil Engineering.</li>
      <li><b>Award:</b> 1st of 259 projects in Dell Technologies' Envision the Future 2025, for an AI platform that helps detect autism early.</li>
      <li><b>Industry:</b> Siemens EDA (software), Siemens Healthineers and Dar Al Fouad Hospital (medical devices).</li>
      <li><b>Tools:</b> Python, PyTorch, computer vision, vision-language models, GIS.</li>
    </ul>
    <div class="cta"><a class="btn primary" href="mailto:${esc(S.links.email)}">Email me</a>${ext(S.links.linkedin, "LinkedIn", "btn")}${S.links.resume ? ext(S.links.resume, "Resume ↓", "btn") : ""}<a class="btn" href="#timeline" data-close>See the full timeline</a></div>`;
  document.body.appendChild(qv);
  document.getElementById("qv-open").addEventListener("click", () => qv.showModal());
  qv.addEventListener("click", (e) => { if (e.target === qv || e.target.closest("[data-close]")) qv.close(); });

  // ---------- section dots ----------
  const SECS = [["top", "Home"], ["journey", "Journey"], ["work", "Work"], ["timeline", "Timeline"], ["projects", "Projects"], ["recognition", "Recognition"], ["contact", "Contact"]];
  const dots = document.createElement("nav"); dots.className = "dots"; dots.setAttribute("aria-label", "Sections");
  dots.innerHTML = SECS.map(([id, n]) => `<a href="#${id}" data-sec="${id}"><span>${n}</span></a>`).join("");
  document.body.appendChild(dots);

  // ---------- timeline behaviour ----------
  const det = document.getElementById("tl-detail");
  const showEv = (i) => {
    const e = EV[i]; document.querySelectorAll(".tl-ev").forEach((b) => b.classList.toggle("sel", +b.dataset.i === i));
    det.innerHTML = `<span class="tl-type" style="--c:${TYPES[e.type][1]}">${TYPES[e.type][0]}</span><h3>${esc(e.title)}</h3><p class="muted">${esc(e.sub)}</p>${e.image ? `<img class="tl-img zoom" src="${esc(e.image)}" alt="${esc(e.title)}">` : ""}<p class="tl-city"><i class="ph ph-map-pin" aria-hidden="true"></i>${esc(e.city)} · ${esc(e.date)}</p>${e.story ? `<p>${esc(e.story)}</p>` : ""}${e.points.length ? `<ul>${e.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>` : ""}${e.tech ? `<details class="tech"><summary>Technical details</summary><div><ul>${e.tech.map((p) => `<li>${esc(p)}</li>`).join("")}</ul></div></details>` : ""}${ext(e.link, `Evidence <i class="ph ph-arrow-up-right" aria-hidden="true"></i>`, "btn")}`;
  };
  document.querySelectorAll(".tl-ev").forEach((b) => b.addEventListener("click", () => showEv(+b.dataset.i)));
  showEv(0);
  document.querySelectorAll(".tl-filter button").forEach((b) => b.addEventListener("click", () => {
    b.setAttribute("aria-pressed", b.getAttribute("aria-pressed") !== "true");
    const on = [...document.querySelectorAll(".tl-filter button[aria-pressed=true]")].map((x) => x.dataset.type);
    document.querySelectorAll(".tl-ev").forEach((ev) => (ev.hidden = !on.includes(ev.dataset.type)));
  }));

  // ---------- method highlight ----------
  const fieldItems = document.querySelectorAll(".field .item");
  const hi = (n) => { document.querySelector(".fields").classList.toggle("focus", !!n); fieldItems.forEach((it) => it.classList.toggle("lit", !!n && it.dataset.steps.split(" ").includes(n))); document.querySelectorAll("[data-step]").forEach((b) => b.classList.toggle("on", b.dataset.step === n)); };
  document.querySelectorAll("[data-step]").forEach((b) => {
    b.addEventListener("mouseenter", () => hi(b.dataset.step)); b.addEventListener("focus", () => hi(b.dataset.step));
    b.addEventListener("mouseleave", () => hi(null)); b.addEventListener("blur", () => hi(null));
    b.addEventListener("click", () => hi(b.classList.contains("on") ? null : b.dataset.step));
  });


  // ---------- chapter photos ----------
  document.querySelectorAll(".ch-thumbs button").forEach((b) => b.addEventListener("click", () => {
    const box = b.closest(".ch-photos"); box.querySelector(".ch-main").src = b.dataset.src; box.querySelector(".ch-main").alt = b.dataset.cap; box.querySelector(".ch-cap").textContent = b.dataset.cap;
    box.querySelectorAll(".ch-thumbs button").forEach((x) => x.classList.toggle("on", x === b));
  }));
  // ---------- certificates filter ----------
  document.querySelectorAll(".cert-filter button").forEach((b) => b.addEventListener("click", () => {
    document.querySelectorAll(".cert-filter button").forEach((x) => x.setAttribute("aria-pressed", x === b));
    document.querySelectorAll(".cert").forEach((c) => (c.hidden = !(b.dataset.cc === "all" || c.dataset.cc === b.dataset.cc)));
  }));
  // ---------- lightbox ----------
  const lb = document.createElement("dialog"); lb.className = "lightbox"; lb.innerHTML = `<form method="dialog"><button class="qv-x" aria-label="Close">×</button></form><img alt=""><p></p>`;
  document.body.appendChild(lb);
  document.addEventListener("click", (e) => {
    const im = e.target.closest("img.zoom"); if (!im) return;
    lb.querySelector("img").src = im.currentSrc || im.src; lb.querySelector("img").alt = im.alt; lb.querySelector("p").textContent = im.alt; lb.showModal();
  });
  lb.addEventListener("click", (e) => { if (e.target === lb || e.target.tagName === "IMG") lb.close(); });


  // ---------- tagline word reveal (rAF throttled) ----------
  const words = [...document.querySelectorAll(".tag-text .w")];
  if (reduce) words.forEach((w) => w.classList.add("on"));
  else {
    let ticking = false;
    const upd = () => { const line = innerHeight * 0.72; words.forEach((w) => w.classList.toggle("on", w.getBoundingClientRect().top < line)); ticking = false; };
    addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(upd); } }, { passive: true });
    upd();
  }

  // ---------- mobile menu ----------
  const menuBtn = document.getElementById("menu-btn"), panel = document.getElementById("menu-panel");
  const setMenu = (open) => { document.body.classList.toggle("menu-open", open); menuBtn.setAttribute("aria-expanded", open); menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu"); panel.hidden = false; panel.classList.toggle("open", open); if (!open) setTimeout(() => { if (!panel.classList.contains("open")) panel.hidden = true; }, 500); };
  menuBtn.addEventListener("click", () => setMenu(!panel.classList.contains("open")));
  panel.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
  addEventListener("keydown", (e) => { if (e.key === "Escape" && panel.classList.contains("open")) setMenu(false); });

  // ---------- reveal + counters ----------
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  if (!reduce) document.querySelectorAll("[data-count]").forEach((el) => {
    const m = el.dataset.count.match(/^(\d+)(.*)$/); if (!m) return;
    const end = +m[1], suf = m[2]; let t0;
    const step = (t) => { t0 = t0 || t; const k = Math.min(1, (t - t0) / 1200); el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))) + suf; if (k < 1) requestAnimationFrame(step); };
    new IntersectionObserver((es, o) => es.forEach((e) => { if (e.isIntersecting) { requestAnimationFrame(step); o.disconnect(); } })).observe(el);
  });

  // ---------- projects filter ----------
  let cat = "all";
  const q = document.getElementById("psearch");
  const filter = () => {
    const s = q.value.trim().toLowerCase(); let n = 0;
    document.querySelectorAll(".pcard").forEach((c) => { const ok = (cat === "all" || c.dataset.cats.split(" ").includes(cat)) && (!s || c.dataset.text.includes(s)); c.hidden = !ok; if (ok) { n++; c.classList.add("in"); } });
    document.getElementById("pempty").hidden = n > 0;
  };
  q.addEventListener("input", filter);
  document.addEventListener("click", (e) => { const t = e.target.closest(".tagbtn"); if (!t) return; q.value = t.dataset.tag; cat = "all"; document.querySelectorAll(".legend:not(.tl-filter) button").forEach((x) => x.setAttribute("aria-pressed", x.dataset.cat === "all")); filter(); document.getElementById("projects").scrollIntoView({ behavior: reduce ? "auto" : "smooth" }); });
  document.querySelectorAll(".legend:not(.tl-filter) button").forEach((b) => b.addEventListener("click", () => { cat = b.dataset.cat; document.querySelectorAll(".legend:not(.tl-filter) button").forEach((x) => x.setAttribute("aria-pressed", x === b)); filter(); }));

  // ---------- misc ----------
  document.getElementById("copy-email").addEventListener("click", async () => {
    const lbl = document.getElementById("copy-lbl");
    try { await navigator.clipboard.writeText(L.email); lbl.textContent = "Copied ✓"; } catch (e) { location.href = "mailto:" + L.email; }
    setTimeout(() => (lbl.textContent = "Copy"), 1800);
  });
  const root = document.documentElement, mbtn = document.getElementById("mode");
  const setIcon = () => (mbtn.innerHTML = root.dataset.mode === "night" ? '<i class="ph ph-moon" aria-hidden="true"></i>' : '<i class="ph ph-sun" aria-hidden="true"></i>');
  setIcon();
  mbtn.addEventListener("click", () => { root.dataset.mode = root.dataset.mode === "night" ? "day" : "night"; try { localStorage.setItem("zef-atlas-mode", root.dataset.mode); } catch (e) {} setIcon(); drawLand(); });
  const navLinks = [...document.querySelectorAll(".nav ul a")];
  const secIO = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { navLinks.forEach((a) => { const on = a.getAttribute("href") === "#" + e.target.id; a.classList.toggle("on", on); if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current"); }); document.querySelectorAll(".dots a").forEach((a) => a.classList.toggle("on", a.dataset.sec === e.target.id)); } }), { rootMargin: "-40% 0px -55% 0px" });
  document.querySelectorAll("main section[id]").forEach((s) => secIO.observe(s));
})();
