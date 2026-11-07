(function () {
  var T = window.TESTS || [], list = document.getElementById('testList'), run = document.getElementById('runner'), st, timerId;
  function math(el) {
    if (window.renderMathInElement) renderMathInElement(el, { delimiters: [{ left: '$$', right: '$$', display: true }, { left: '$', right: '$', display: false }], throwOnError: false });
  }
  function fmt(s) { var m = Math.floor(s / 60), r = s % 60; return m + ':' + (r < 10 ? '0' : '') + r; }
  var L = 'ABCD';

  list.innerHTML = T.map(function (t, i) {
    return '<div class="tcard"><span class="tag">' + (t.minutes ? 'Mock test' : 'Chapter quiz') + '</span><h3 style="margin-top:10px">' + t.title + '</h3><p class="muted">' + t.desc + '</p><p class="muted small">' + t.questions.length + ' questions | ' + (t.minutes ? t.minutes + ' minutes' : 'no time limit') + '</p><button class="btn sm" data-i="' + i + '">Start</button></div>';
  }).join('');
  list.onclick = function (e) { var b = e.target.closest('button[data-i]'); if (b) start(+b.dataset.i); };

  function start(i) {
    var t = T[i];
    st = { t: t, cur: 0, a: t.questions.map(function () { return -1; }), m: t.questions.map(function () { return false; }), left: t.minutes * 60, done: false };
    document.getElementById('picker').hidden = true; run.hidden = false; window.scrollTo(0, 0);
    if (t.minutes) { clearInterval(timerId); timerId = setInterval(tick, 1000); }
    draw();
  }
  function tick() {
    st.left--; if (st.left <= 0) { finish(); return; }
    var el = document.getElementById('timer'); if (el) el.textContent = fmt(st.left);
  }
  function draw() {
    var t = st.t, q = t.questions[st.cur], quiz = !t.minutes, a = st.a[st.cur], locked = quiz && a > -1;
    var h = '<div class="rhead"><h2>' + t.title + '</h2>' + (t.minutes ? '<div class="timer" id="timer">' + fmt(st.left) + '</div>' : '') + '</div><div class="rgrid"><div class="qbox">';
    h += '<p class="muted">Question ' + (st.cur + 1) + ' of ' + t.questions.length + '</p><div class="qtext">' + q.q + '</div><div class="opts">';
    q.o.forEach(function (o, k) {
      var c = 'opt'; if (a === k) c += ' sel';
      if (locked) { if (k === q.a) c += ' right'; else if (a === k) c += ' wrong'; }
      h += '<button class="' + c + '" data-k="' + k + '"' + (locked ? ' disabled' : '') + '><b>' + L[k] + '</b> ' + o + '</button>';
    });
    h += '</div>';
    if (locked) h += '<div class="sol"><b>Solution:</b> ' + q.s + '</div>';
    h += '<div class="nav2"><button class="btn ghost sm" data-act="prev"' + (st.cur ? '' : ' disabled') + '>Previous</button>';
    if (!quiz) h += '<button class="btn ghost sm" data-act="mark">' + (st.m[st.cur] ? 'Unmark review' : 'Mark for review') + '</button><button class="btn ghost sm" data-act="clear">Clear answer</button>';
    h += st.cur < t.questions.length - 1 ? '<button class="btn sm" data-act="next">Next</button>' : '<button class="btn sm" data-act="submit">Submit</button>';
    h += '</div></div><aside class="pal"><h3>Questions</h3><div class="pgrid">' + t.questions.map(function (_, k) {
      var c = 'pb'; if (k === st.cur) c += ' cur'; if (st.a[k] > -1) c += ' ans'; if (st.m[k]) c += ' rev';
      return '<button class="' + c + '" data-go="' + k + '">' + (k + 1) + '</button>';
    }).join('') + '</div><p class="muted small">Green: answered. Yellow ring: marked for review.</p>' + (quiz ? '' : '<button class="btn sm" data-act="submit">Submit test</button>') + '</aside></div>';
    run.innerHTML = h; math(run);
  }
  run.onclick = function (e) {
    var b = e.target.closest('button'); if (!b) return;
    if (st.done) { if (b.dataset.act === 'again') location.reload(); return; }
    if (b.dataset.k !== undefined) { st.a[st.cur] = +b.dataset.k; draw(); return; }
    if (b.dataset.go !== undefined) { st.cur = +b.dataset.go; draw(); return; }
    var a = b.dataset.act;
    if (a === 'prev') st.cur--; else if (a === 'next') st.cur++;
    else if (a === 'mark') st.m[st.cur] = !st.m[st.cur];
    else if (a === 'clear') st.a[st.cur] = -1;
    else if (a === 'submit') { if (!st.t.minutes || confirm('Submit the test now?')) finish(); return; }
    draw();
  };
  function finish() {
    clearInterval(timerId); st.done = true;
    var t = st.t, q = t.questions, right = 0, wrong = 0, skip = 0;
    q.forEach(function (x, i) { if (st.a[i] < 0) skip++; else if (st.a[i] === x.a) right++; else wrong++; });
    var mock = !!t.minutes, score = mock ? right * 4 - wrong : right, max = mock ? q.length * 4 : q.length;
    var h = '<h2>Result: ' + t.title + '</h2><div class="score"><b>' + score + '</b> / ' + max + '</div><p class="muted">Correct: ' + right + ' | Wrong: ' + wrong + ' | Not attempted: ' + skip + (mock ? ' | Marking: +4 correct, -1 wrong' : '') + '</p><button class="btn" data-act="again">Back to all tests</button><div class="review">';
    q.forEach(function (x, i) {
      var u = st.a[i], c = u < 0 ? 'skip' : u === x.a ? 'right' : 'wrong';
      h += '<div class="ritem ' + c + '"><p class="muted">Question ' + (i + 1) + ' | ' + (u < 0 ? 'Not attempted' : u === x.a ? 'Correct' : 'Wrong') + '</p><div class="qtext">' + x.q + '</div><p>Your answer: ' + (u < 0 ? '-' : L[u] + '. ' + x.o[u]) + '<br>Correct answer: ' + L[x.a] + '. ' + x.o[x.a] + '</p><div class="sol"><b>Solution:</b> ' + x.s + '</div></div>';
    });
    run.innerHTML = h + '</div>'; math(run); window.scrollTo(0, 0);
  }
})();
