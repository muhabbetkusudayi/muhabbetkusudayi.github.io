(function () {
  var root = document.documentElement;
  var btn = document.getElementById('modeSwitch');
  var label = document.getElementById('modeSwitchLabel');

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    if (btn) btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    if (label) label.textContent = theme === 'dark' ? 'light' : 'dark';
  }

  var stored = null;
  try {
    stored = localStorage.getItem('theme');
  } catch (e) {
    stored = null;
  }

  var preferred = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  apply(preferred);

  if (btn) {
    btn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      apply(next);
      try {
        localStorage.setItem('theme', next);
      } catch (e) {}
    });
  }
})();