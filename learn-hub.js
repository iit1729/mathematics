(function () {
  var C = window.CHAPTERS || [], LEVELS = [
    ['Class 11', 'Foundation chapters'], ['Class 12', 'Board and JEE chapters'],
    ['JEE Main', 'High-yield chapters'], ['JEE Advanced', 'Deeper problems and proofs']
  ], cur = 'All', query = '';
  function $(i) { return document.getElementById(i); }
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function inLevel(c, l) { return l === 'All' || (c.levels || []).indexOf(l) > -1; }
  function readyCount(l) { return C.filter(function (c) { return c.status === 'ready' && inLevel(c, l); }).length; }

  /* course category buttons (also work as filters) */
  function drawCats() {
    var all = [['All', 'Every chapter']].concat(LEVELS);
    $('cats').innerHTML = all.map(function (l) {
      var n = readyCount(l[0]);
      return '<button class="cat" data-l="' + esc(l[0]) + '" aria-pressed="' + (l[0] === cur) + '"><b>' + (l[0] === 'All' ? 'All chapters' : esc(l[0])) + '</b><span>' + esc(l[1]) + '</span><small>' + n + ' ready</small></button>';
    }).join('');
  }

  /* chapter cards */
  function drawCards() {
    var q = query.toLowerCase().trim();
    var list = C.filter(function (c) {
      if (!inLevel(c, cur)) return false;
      if (!q) return true;
      return [c.title, c.branch, c.desc, (c.tags || []).join(' '), (c.levels || []).join(' ')].join(' ').toLowerCase().indexOf(q) > -1;
    });
    list.sort(function (a, b) { return (a.status === 'ready' ? 0 : 1) - (b.status === 'ready' ? 0 : 1); });   /* ready chapters first */
    $('cards').innerHTML = list.map(function (c) {
      var ok = c.status === 'ready';
      return '<article class="card' + (ok ? '' : ' soon') + '"><div class="card-top"><span class="branch">' + esc(c.branch) + '</span><span class="badge ' + (ok ? 'ok' : 'wait') + '">' + (ok ? 'Ready' : 'Coming soon') + '</span></div>' +
        '<h3>' + esc(c.title) + '</h3><p>' + esc(c.desc) + '</p>' +
        '<div class="tags">' + (c.tags || []).map(function (t) { return '<span>' + esc(t) + '</span>'; }).join('') + '</div>' +
        '<p class="lv">' + esc((c.levels || []).join(' · ')) + '</p>' +
        (ok ? '<a class="btn" href="' + esc(c.url) + '">Start learning</a>' : '<span class="btn off" aria-disabled="true">Coming soon</span>') + '</article>';
    }).join('');
    var ready = list.filter(function (c) { return c.status === 'ready'; }).length;
    $('listTitle').textContent = cur === 'All' ? 'All chapters' : cur + ' chapters';
    $('count').textContent = list.length ? ready + ' ready, ' + (list.length - ready) + ' coming soon' : '';
    $('empty').hidden = list.length > 0;
  }

  $('cats').addEventListener('click', function (e) {
    var b = e.target.closest('.cat'); if (!b) return;
    cur = b.dataset.l; drawCats(); drawCards();
    $('chapters').scrollIntoView({ behavior: 'smooth' });
  });
  $('search').addEventListener('input', function () { query = this.value; drawCards(); });
  $('search').addEventListener('keydown', function (e) { if (e.key === 'Enter') $('chapters').scrollIntoView({ behavior: 'smooth' }); });
  drawCats(); drawCards();
})();
