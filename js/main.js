function initPage() {
  window.initAudioPlayback();
  window.initLyricsTabs();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPage, { once: true });
} else {
  initPage();
}
