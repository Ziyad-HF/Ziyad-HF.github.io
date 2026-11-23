// Terminal portfolio — interactive shell built from ../shared/content.js
(function () {
  "use strict";
  const S = window.SITE;
  const BANNER = {"big": "\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557\u2588\u2588\u2557   \u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \n\u255a\u2550\u2550\u2588\u2588\u2588\u2554\u255d\u2588\u2588\u2551\u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\n  \u2588\u2588\u2588\u2554\u255d \u2588\u2588\u2551 \u255a\u2588\u2588\u2588\u2588\u2554\u255d \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\n \u2588\u2588\u2588\u2554\u255d  \u2588\u2588\u2551  \u255a\u2588\u2588\u2554\u255d  \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551   \u2588\u2588\u2551   \u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\n\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d   \u255a\u2550\u255d   \u255a\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u2550\u2550\u2550\u2550\u255d\n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557   \u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557   \u2588\u2588\u2557\u2588\u2588\u2588\u2557   \u2588\u2588\u2588\u2557\u2588\u2588\u2557   \u2588\u2588\u2557\n\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d\u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d\u2588\u2588\u2554\u2550\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2551\u255a\u2588\u2588\u2557 \u2588\u2588\u2554\u255d\n\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551 \u255a\u2588\u2588\u2588\u2588\u2554\u255d \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2588\u2588\u2554\u2588\u2588\u2551 \u255a\u2588\u2588\u2588\u2588\u2554\u255d \n\u2588\u2588\u2554\u2550\u2550\u255d  \u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u255d  \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551  \u255a\u2588\u2588\u2554\u255d  \u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551   \u2588\u2588\u2551\u2588\u2588\u2551\u255a\u2588\u2588\u2554\u255d\u2588\u2588\u2551  \u255a\u2588\u2588\u2554\u255d  \n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551     \u2588\u2588\u2551  \u2588\u2588\u2551   \u2588\u2588\u2551   \u255a\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u255a\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255d\u2588\u2588\u2551 \u255a\u2550\u255d \u2588\u2588\u2551   \u2588\u2588\u2551   \n\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d     \u255a\u2550\u255d  \u255a\u2550\u255d   \u255a\u2550\u255d    \u255a\u2550\u2550\u2550\u2550\u2550\u255d  \u255a\u2550\u2550\u2550\u2550\u2550\u255d \u255a\u2550\u255d     \u255a\u2550\u255d   \u255a\u2550\u255d", "small": " _________   ___   ___  \n|_  /_ _\\ \\ / /_\\ |   \\ \n / / | | \\ V / _ \\| |) |\n/___|___| |_/_/ \\_\\___/"};
  const out = document.getElementById("out");
  const input = document.getElementById("cmd");
  const screen = document.getElementById("screen");
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const link = (href, text) => `<a href="${esc(href)}" target="_blank" rel="noopener">${esc(text || href)}</a>`;
  const run = (c, label) => `<span class="clickable" data-run="${esc(c)}">${esc(label || c)}</span>`;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 28);

  // ---------- output helpers ----------
  function print(html, cls = "line") {
    const d = document.createElement("div");
    d.className = cls;
    d.innerHTML = html;
    out.appendChild(d);
    screen.scrollTop = screen.scrollHeight;
    return d;
  }
  const blank = () => print("");
  const h = (t) => print(`<span class="section-h">## ${esc(t)}</span>`);
  const rule = () => print(`<span class="rule">${"─".repeat(64)}</span>`);
  const sleep = (ms) => new Promise((r) => setTimeout(r, reduce ? 0 : ms));
  async function typeLine(text, cls = "line", speed = 14) {
    const d = print("", cls);
    if (reduce || skipping) { d.textContent = text; return d; }
    for (let i = 0; i < text.length; i++) { d.textContent += text[i]; if (i % 2 === 0) await sleep(speed); if (skipping) { d.textContent = text; break; } }
    return d;
  }

  // ---------- data shaped for the shell ----------
  const projects = S.projects.map((p, i) => ({ ...p, id: i + 1, slug: slug(p.title) }));
  const catNames = { research: "research", transport: "transportation", health: "medical", vision: "vision", software: "software" };
  const FILES = {
    "about.md": () => cmd.about(),
    "thesis.md": () => cmd.research(),
    "experience.log": () => cmd.experience(),
    "awards.txt": () => cmd.awards(),
    "skills.yml": () => cmd.skills(),
    "contact.vcf": () => cmd.contact(),
    "news.txt": () => cmd.news(),
    "README": () => cmd.help()
  };

  // ---------- commands ----------
  const cmd = {
    help() {
      h("available commands");
      const rows = [
        ["whoami", "who I am, in one screen"],
        ["about", "longer story"],
        ["research", "M.Sc. thesis + publication"],
        ["experience", "work history (experience 2 → details)"],
        ["projects", "all projects (projects --medical, --vision, --transportation, --research, --software)"],
        ["project <n|name>", "open one project"],
        ["awards", "awards & grants"],
        ["news", "latest updates"],
        ["media", "press coverage"],
        ["gallery", "photos"],
        ["skills", "tech stack"],
        ["leadership", "community & volunteering"],
        ["contact", "how to reach me"],
        ["gui", "switch to the regular website"],
        ["neofetch", "system info, but it's me"],
        ["ls / cat <file>", "browse the home folder"],
        ["theme <green|amber|ice|paper>", "change phosphor colour"],
        ["clear", "clear the screen (Ctrl+L)"]
      ];
      print(rows.map(([c, d]) => `  ${run(c.split(" ")[0], c.padEnd(30))}<span class="dim">${esc(d)}</span>`).join("\n"));
      print(`\n<span class="dim">Tip: everything is clickable. Hidden commands exist.</span>`);
    },
    async whoami() {
      print(`<span class="hi">${esc(S.name)}</span>  <span class="dim">·</span>  ${esc(S.headline)}`);
      print(`<span class="dim">${esc(S.role)} · ${esc(S.location)}</span>`);
      blank();
      await typeLine(S.tagline);
      blank();
      print(`<div class="kv">${S.stats.map((s) => `<span class="k">${esc(s.value)}</span><span>${esc(s.label)}</span>`).join("")}</div>`);
      blank();
      print(`<span class="dim">next:</span> ${run("about")}  ${run("research")}  ${run("projects")}  ${run("contact")}`);
    },
    about() {
      h("about.md");
      S.about.forEach((p) => { print(esc(p)); blank(); });
      h("education");
      S.education.forEach((e) => print(`<span class="hi">${esc(e.school)}</span>  <span class="dim">${esc(e.dates)}</span>\n  ${esc(e.degree)} · ${esc(e.place)}`));
      blank();
      print(`<span class="dim">focus:</span> ${S.focus.map((f) => `<span class="chip">${esc(f)}</span>`).join("")}`);
    },
    research() {
      const T = S.thesis;
      h("thesis.md");
      print(`<span class="hi">${esc(T.title)}</span> <span class="dim">(${esc(T.note)})</span>`);
      if (T.story) print(esc(T.story));
      print(`<span class="dim">${esc(T.lab)} · ${esc(T.dates)}</span>`);
      T.points.forEach((p) => print(`  <span class="hi">›</span> ${esc(p)}`));
      blank();
      h("publications");
      S.publications.forEach((p) => {
        print(`<span class="hi">${esc(p.authors)}</span> “${esc(p.title)}.”`);
        p.status.forEach((s) => print(`  <span class="warn">[status]</span> ${esc(s)}`));
        print(`  <span class="dim">${esc(p.summary)}</span>`);
      });
    },
    experience(args) {
      const n = parseInt(args[0], 10);
      if (n && S.experience[n - 1]) {
        const x = S.experience[n - 1];
        h(`${x.role} @ ${x.org}`);
        print(`<span class="dim">${esc(x.dates)} · ${esc(x.place)}</span>`);
        if (x.story) print(esc(x.story));
        x.points.forEach((p) => print(`  <span class="hi">›</span> ${esc(p)}`));
        if (x.link) print(`  <span class="dim">evidence:</span> ${link(x.link, "open ↗")}`);
        return;
      }
      h("experience.log");
      S.experience.forEach((x, i) => {
        print(`<span class="dim">[${esc(x.dates.padEnd(19))}]</span> ${run("experience " + (i + 1), x.role)} <span class="dim">@</span> <span class="hi">${esc(x.org)}</span>`);
      });
      print(`\n<span class="dim">click a role or run</span> experience &lt;n&gt;`);
    },
    projects(args) {
      const flag = (args[0] || "").replace(/^--/, "");
      const key = Object.keys(catNames).find((k) => catNames[k] === flag || k === flag);
      const list = key ? projects.filter((p) => p.cats.includes(key)) : projects;
      h(`ls -la ~/projects${key ? " --" + catNames[key] : ""}  (${list.length})`);
      const head = `<span class="th">#</span><span class="th">name</span><span class="th c3">type</span><span class="th c4">stack</span>`;
      const rows = list.map((p) => `<span class="dim">${String(p.id).padStart(2, "0")}</span><span>${run("project " + p.id, p.title)}${p.featured ? ' <span class="warn">★</span>' : ""}</span><span class="dim c3">${esc(p.meta)}</span><span class="dim c4">${esc(p.tags.slice(0, 3).join(", "))}</span>`).join("");
      print(`<div class="tbl">${head}${rows}</div>`);
      print(`\n<span class="dim">filter:</span> ${Object.values(catNames).map((c) => run("projects --" + c, "--" + c)).join("  ")}  ${run("projects", "all")}`);
    },
    project(args) {
      const q = args.join(" ").toLowerCase();
      const p = projects.find((p) => String(p.id) === q || p.slug.startsWith(slug(q)) || p.title.toLowerCase().includes(q));
      if (!q || !p) return print(`<span class="err">project: not found:</span> ${esc(q)}  <span class="dim">(try ${run("projects")})</span>`);
      h(p.title);
      print(`<span class="dim">${esc(p.meta)}</span>`);
      if (p.image) print(`<div class="img-frame tint"><img src="${esc(p.image)}" alt="${esc(p.imageAlt || p.title)}"><div class="cap">${esc(p.imageAlt || "")}</div></div>`);
      print(esc(p.pitch || p.desc));
      if (p.plainResult || p.result) print(`<span class="warn">result:</span> ${esc(p.plainResult || p.result)}`);
      print(`<span class="dim">under the hood:</span> ${esc(p.desc)}`);
      print(`<span class="dim">stack:</span> ${p.tags.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}`);
      if (p.link) print(`<span class="dim">source:</span> ${link(p.link)}`);
      const next = projects[p.id % projects.length];
      print(`\n<span class="dim">next →</span> ${run("project " + next.id, next.title)}`);
    },
    awards() {
      h("awards.txt");
      S.awards.forEach((a) => print(`<span class="dim">${esc(a.date.padEnd(9))}</span> <span class="hi">${esc(a.title)}</span>${a.link ? " " + link(a.link, "↗") : ""}\n          <span class="dim">${esc(a.detail)}</span>`));
    },
    news() {
      h("news.txt");
      S.news.forEach((n) => print(`<span class="dim">${esc(n.date.padEnd(9))}</span> ${esc(n.text)}${n.link ? " " + link(n.link, "↗") : ""}`));
    },
    media() {
      h("press");
      print(esc(S.media.text));
      print(`<div class="img-frame"><img src="${esc(S.media.image)}" alt="${esc(S.media.imageAlt)}"><div class="cap">BBC Arabic · 4Tech</div></div>`);
      print(`${link(S.media.link, "all coverage ↗")}`);
    },
    gallery() {
      h("~/photos");
      print(S.gallery.map((g) => `<div class="img-frame"><img src="${esc(g.src)}" alt="${esc(g.caption)}" loading="lazy"><div class="cap">${esc(g.caption)}</div></div>`).join(" "));
    },
    skills() {
      h("skills.yml");
      const keys = Object.keys(S.skills);
      keys.forEach((k) => {
        const items = S.skills[k].split(", ");
        print(`<span class="hi">${esc(k)}:</span>\n  ${items.map((i) => `<span class="chip">${esc(i)}</span>`).join("")}`);
      });
    },
    leadership() {
      h("community");
      S.leadership.forEach((l) => print(`<span class="dim">${esc(l.dates.padEnd(19))}</span> <span class="hi">${esc(l.role)}</span> · ${esc(l.org)}${l.note ? `\n${" ".repeat(20)}<span class="dim">${esc(l.note)}</span>` : ""}`));
    },
    contact() {
      h("contact.vcf");
      const L = S.links;
      print(`<div class="kv"><span class="k">email</span><span><a href="mailto:${esc(L.email)}">${esc(L.email)}</a></span><span class="k">linkedin</span><span>${link(L.linkedin, "in/ziyad-el-fayoumy")}</span><span class="k">github</span><span>${link(L.github, "Ziyad-HF")}</span><span class="k">lab</span><span>${link(L.lab, "GeoTrans Lab profile")}</span><span class="k">location</span><span>${esc(S.location)}</span></div>`);
      blank();
      print(`<span class="dim">Open to research and industry roles in applied AI and computer vision: healthcare, transportation, smart cities.</span>`);
    },
    resume() {
      if (S.links.resume) { print(`opening ${link(S.links.resume, "resume.pdf")} …`); window.open(S.links.resume, "_blank", "noopener"); }
      else print(`<span class="warn">resume.pdf:</span> coming soon. Meanwhile: ${run("contact")}`);
    },
    neofetch() {
      const L = [
        ["", `<span class="hi">ziyad</span>@<span class="hi">ualberta</span>`],
        ["", "-".repeat(18)],
        ["OS", "Human 1.0 (Cairo build, Edmonton runtime)"],
        ["Host", "University of Alberta · GeoTrans Lab"],
        ["Kernel", "Systems & Biomedical Engineering (B.Sc., GPA 3.7)"],
        ["Uptime", "M.Sc. in Transportation Engineering, Jan 2026 →"],
        ["Shell", "Python, C++, MATLAB, JavaScript"],
        ["GPU", "PyTorch on HPC (SLURM)"],
        ["Packages", `${projects.length} projects · ${S.awards.length} awards`],
        ["Modules", "computer-vision, medical-ai, transport-ai, data-centric-ai"],
        ["Locale", "ar_EG / en_CA"]
      ];
      print(`<div class="neo"><div class="img-frame tint"><img src="${esc(S.photo)}" alt="Ziyad"><div class="cap">ziyad.jpg</div></div><div>${L.map(([k, v]) => (k ? `<span class="hi">${k}</span>: ${v}` : v)).join("\n")}\n\n${["#39ff7a", "#ffb000", "#7cc4ff", "#ff6b6b", "#c792ea", "#e8e6e1"].map((c) => `<span style="color:${c}">███</span>`).join("")}</div></div>`);
    },
    ls() {
      print(Object.keys(FILES).map((f) => run("cat " + f, f)).join("   ") + `   ${run("projects", "projects/")}   ${run("gallery", "photos/")}`);
    },
    cat(args) {
      const f = FILES[args[0]];
      if (f) return f();
      print(`<span class="err">cat: ${esc(args[0] || "")}: No such file or directory</span>  <span class="dim">(${run("ls")})</span>`);
    },
    theme(args) {
      const t = ["green", "amber", "ice", "paper"];
      const next = t.includes(args[0]) ? args[0] : t[(t.indexOf(document.body.dataset.theme) + 1) % t.length];
      document.body.dataset.theme = next;
      try { localStorage.setItem("zef-term-theme", next); } catch (e) {}
      print(`<span class="dim">phosphor →</span> <span class="hi">${next}</span>`);
    },
    clear() { out.innerHTML = ""; },
    date() { print(new Date().toString()); },
    pwd() { print("/home/ziyad"); },
    echo(args) { print(esc(args.join(" "))); },
    history() { hist.forEach((c, i) => print(`<span class="dim">${String(i + 1).padStart(4)}</span>  ${esc(c)}`)); },
    sudo() { print(`<span class="err">[sudo] password for visitor:</span> nice try. ${run("contact", "Ask me nicely instead.")}`); },
    hire() { print(`<span class="hi">Great choice.</span> Let's talk:`); cmd.contact(); },
    exit() { print(`There is no exit, only ${run("contact")}.`); },
    banner() { printBanner(); },
    gui() { print(`opening the regular website…`); location.href = "../"; }
  };
  const aliases = { "?": "help", man: "help", cv: "resume", work: "experience", exp: "experience", papers: "research", publications: "research", thesis: "research", photos: "gallery", email: "contact", cls: "clear", whois: "whoami" };

  // ---------- shell ----------
  const hist = [];
  let hIdx = 0;
  let busy = false;
  function echo(line) {
    print(`<span class="cmd-echo"><span class="ps1"><span class="u">ziyad</span><span class="at">@</span><span class="h">ualberta</span><span class="p">:~$</span></span>${esc(line)}</span>`);
  }
  async function exec(line, { silentEcho = false } = {}) {
    line = line.trim();
    if (!silentEcho) echo(line);
    if (!line) return;
    hist.push(line); hIdx = hist.length;
    const [raw, ...args] = line.split(/\s+/);
    const name = aliases[raw.toLowerCase()] || raw.toLowerCase();
    const fn = cmd[name];
    busy = true;
    try {
      if (fn) await fn(args);
      else print(`<span class="err">zsh: command not found: ${esc(raw)}</span>  <span class="dim">try</span> ${run("help")}`);
    } finally { busy = false; }
    blank();
  }
  document.getElementById("prompt-form").addEventListener("submit", (e) => {
    e.preventDefault();
    if (busy) return;
    const v = input.value; input.value = "";
    exec(v);
  });
  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") { if (hIdx > 0) input.value = hist[--hIdx]; e.preventDefault(); }
    else if (e.key === "ArrowDown") { input.value = hIdx < hist.length - 1 ? hist[++hIdx] : (hIdx = hist.length, ""); e.preventDefault(); }
    else if (e.key === "Tab") {
      e.preventDefault();
      const v = input.value;
      const pool = v.startsWith("cat ") ? Object.keys(FILES).map((f) => "cat " + f) : v.startsWith("project ") ? projects.map((p) => "project " + p.slug) : Object.keys(cmd);
      const m = pool.filter((c) => c.startsWith(v));
      if (m.length === 1) input.value = m[0] + (pool === Object.keys(cmd) ? " " : "");
      else if (m.length > 1) { echo(v); print(m.map((c) => run(c)).join("   ")); }
    } else if (e.key === "l" && e.ctrlKey) { e.preventDefault(); cmd.clear(); }
  });
  document.addEventListener("click", (e) => {
    const r = e.target.closest("[data-run]");
    if (r && !busy) { exec(r.dataset.run); input.focus({ preventScroll: true }); return; }
    if (!e.target.closest("a,button,input") && !window.getSelection().toString()) input.focus({ preventScroll: true });
  });

  // dock
  const dock = document.getElementById("dock");
  ["help", "whoami", "research", "experience", "projects", "awards", "news", "contact", "neofetch"].forEach((c) => {
    const b = document.createElement("button"); b.type = "button"; b.textContent = c; b.dataset.run = c; dock.appendChild(b);
  });
  document.getElementById("theme-btn").addEventListener("click", () => exec("theme"));

  // clock + size
  const clock = document.getElementById("clock");
  const tick = () => { clock.textContent = new Date().toLocaleTimeString("en-CA", { hour: "2-digit", minute: "2-digit", timeZone: "America/Edmonton" }) + " MT"; };
  tick(); setInterval(tick, 30000);
  const cols = () => { document.getElementById("cols").textContent = `${Math.floor(screen.clientWidth / 8.4)}×${Math.floor(screen.clientHeight / 21.7)}`; };
  cols(); addEventListener("resize", cols);

  try { const t = localStorage.getItem("zef-term-theme"); if (t) document.body.dataset.theme = t; } catch (e) {}

  // ---------- boot ----------
  let skipping = false;
  document.getElementById("skip").addEventListener("click", () => { skipping = true; });
  addEventListener("keydown", (e) => { if (e.key === "Escape") skipping = true; });

  function printBanner() {
    print(`<pre class="banner big" aria-label="${esc(S.name)}">${esc(BANNER.big)}</pre><pre class="banner small" aria-hidden="true">${esc(BANNER.small)}</pre>`);
  }
  async function boot() {
    const steps = [
      ["[  ok  ] mounting /home/ziyad", 90],
      ["[  ok  ] loading content.js (" + projects.length + " projects, " + S.experience.length + " roles)", 90],
      ["[  ok  ] calibrating models … ConvNeXt · YOLOv8 · XGBoost", 110],
      ["[  ok  ] linking evidence (every claim has a source)", 90],
      ["[ warn ] snow detected in Edmonton. road condition: partly covered", 140]
    ];
    for (const [t, d] of steps) { const l = await typeLine(t, "line dim", 6); if (t.includes("warn")) l.className = "line warn"; if (!skipping) await sleep(d); }
    blank();
    printBanner();
    const q = new URLSearchParams(location.search).get("cmd");
    await exec("whoami");
    if (q) await exec(q);
    print(`<span class="dim">Type</span> ${run("help")} <span class="dim">or click a command below. Prefer a normal website?</span> <a href="../">plain view</a>`);
    blank();
    document.getElementById("skip").hidden = true;
    input.focus({ preventScroll: true });
  }
  boot();
})();
