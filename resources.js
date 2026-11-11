(function () {
  var R = window.RESOURCES || [], LEVELS = ['Class 11', 'Class 12', 'JEE Main', 'JEE Advanced'];
  var TYPECOL = { 'Notes': '#1B2A6B', 'Formula Sheet': '#FF8A14', 'Practice Sheet': '#11800F', 'Previous Papers': '#7A4FD0' };
  var level = 'All', type = 'All', query = '', lastFocus = null;
  function $(i) { return document.getElementById(i); }
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

  /* ---------- turn a normal Google Drive share link into view, preview and download links ---------- */
  function parse(url) {
    url = String(url || '').trim();
    if (!/^https:\/\//i.test(url)) return null;
    var f = url.match(/\/folders\/([\w-]{10,})/), d = url.match(/\/d\/([\w-]{10,})/) || url.match(/[?&]id=([\w-]{10,})/);
    if (f && /drive\.google\.com/.test(url)) return { kind: 'folder', open: url };
    if (d && /(drive|docs)\.google\.com/.test(url)) return { kind: 'file', open: 'https://drive.google.com/file/d/' + d[1] + '/view', preview: 'https://drive.google.com/file/d/' + d[1] + '/preview', down: 'https://drive.google.com/uc?export=download&id=' + d[1] };
    return { kind: 'link', open: url };
  }
  function fmtDate(s) {
    var d = new Date(s + 'T00:00:00'); if (isNaN(d)) return '';
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  }
  function colour(t) { return TYPECOL[t] || '#5B6BB5'; }
  function inLevel(r, l) { return l === 'All' || (r.levels || []).indexOf(l) > -1; }

  /* ---------- filters ---------- */
  function drawTabs() {
    $('tabs').innerHTML = ['All'].concat(LEVELS).map(function (l) {
      var n = R.filter(function (r) { return inLevel(r, l); }).length;
      return '<button class="tab" data-l="' + esc(l) + '" aria-pressed="' + (l === level) + '">' + (l === 'All' ? 'All files' : esc(l)) + '<small>' + n + '</small></button>';
    }).join('');
  }
  function drawTypes() {
    var seen = {}, list = ['All'];
    R.forEach(function (r) { if (r.type && !seen[r.type]) { seen[r.type] = 1; list.push(r.type); } });
    $('types').innerHTML = list.map(function (t) {
      return '<button class="chip" data-t="' + esc(t) + '" aria-pressed="' + (t === type) + '">' + (t === 'All' ? 'All types' : esc(t)) + '</button>';
    }).join('');
  }

  /* ---------- cards ---------- */
  function draw() {
    var q = query.toLowerCase().trim();
    var list = R.filter(function (r) {
      if (!inLevel(r, level) || (type !== 'All' && r.type !== type)) return false;
      return !q || [r.title, r.chapter, r.desc, r.type, (r.levels || []).join(' ')].join(' ').toLowerCase().indexOf(q) > -1;
    }).sort(function (a, b) { return String(b.date).localeCompare(String(a.date)); });
    $('cards').innerHTML = list.map(function (r) {
      var L = parse(r.link), idx = R.indexOf(r), btns;
      if (!L) btns = '<span class="btn sm off" aria-disabled="true">Link coming soon</span>';
      else if (L.kind === 'file') btns = '<button class="btn sm" data-v="' + idx + '">View</button><a class="btn sm ghost" href="' + esc(L.down) + '" target="_blank" rel="noopener">Download</a>';
      else btns = '<a class="btn sm" href="' + esc(L.open) + '" target="_blank" rel="noopener">' + (L.kind === 'folder' ? 'Open folder' : 'Open link') + '</a>';
      var meta = [r.pages > 0 ? r.pages + (r.pages === 1 ? ' page' : ' pages') : '', r.date ? fmtDate(r.date) : ''].filter(Boolean).join(' · ');
      return '<article class="card" style="--c:' + colour(r.type) + '"><div class="ctop"><span class="ico" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 2h8l5 5v15H6z"/><path d="M14 2v5h5"/></svg>' + (L && L.kind === 'folder' ? 'FOLDER' : 'PDF') + '</span><span class="badge">' + esc(r.type) + '</span></div>' +
        '<h3>' + esc(r.title) + '</h3>' + (r.chapter ? '<p class="ch">' + esc(r.chapter) + ' · ' + esc((r.levels || []).join(', ')) + '</p>' : '') +
        (r.desc ? '<p class="desc">' + esc(r.desc) + '</p>' : '') + (meta ? '<p class="meta">' + esc(meta) + '</p>' : '') +
        '<div class="cbtns">' + btns + '</div></article>';
    }).join('');
    var note = $('note');
    note.hidden = list.length > 0;
    note.textContent = !R.length ? 'No resources have been added yet.' : 'No file matches your search. Try a different word, or choose "All files".';
    $('count').textContent = list.length + (list.length === 1 ? ' file' : ' files');
  }

  $('tabs').addEventListener('click', function (e) { var b = e.target.closest('.tab'); if (b) { level = b.dataset.l; drawTabs(); draw(); } });
  $('types').addEventListener('click', function (e) { var b = e.target.closest('.chip'); if (b) { type = b.dataset.t; drawTypes(); draw(); } });
  $('search').addEventListener('input', function () { query = this.value; draw(); });
  $('searchForm').addEventListener('submit', function (e) { e.preventDefault(); $('list').scrollIntoView({ behavior: 'smooth' }); });

  /* ---------- PDF viewer window ---------- */
  var modal = $('modal');
  function openViewer(r, trigger) {
    var L = parse(r.link); if (!L || L.kind !== 'file') return;
    lastFocus = trigger; $('mTitle').textContent = r.title;
    $('mFrame').src = L.preview; $('mOpen').href = L.open; $('mDown').href = L.down;
    modal.hidden = false; document.body.classList.add('lock'); $('mClose').focus();
  }
  function closeViewer() { modal.hidden = true; $('mFrame').src = 'about:blank'; document.body.classList.remove('lock'); if (lastFocus) lastFocus.focus(); }
  $('cards').addEventListener('click', function (e) { var b = e.target.closest('[data-v]'); if (b) openViewer(R[+b.dataset.v], b); });
  $('mClose').addEventListener('click', closeViewer);
  modal.addEventListener('click', function (e) { if (e.target === modal) closeViewer(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !modal.hidden) closeViewer(); });

  /* ---------- phone menu and footer year ---------- */
  var mb = $('menuBtn'), nav = $('nav');
  mb.addEventListener('click', function () { var o = nav.classList.toggle('open'); mb.setAttribute('aria-expanded', o); });
  nav.addEventListener('click', function (e) { if (e.target.tagName === 'A') { nav.classList.remove('open'); mb.setAttribute('aria-expanded', 'false'); } });
  $('year').textContent = new Date().getFullYear();

  drawTabs(); drawTypes(); draw();
})();
