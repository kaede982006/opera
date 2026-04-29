function initAudioPlayback() {
  const audioElements = Array.from(document.querySelectorAll('audio'));

  audioElements.forEach((audio) => {
    audio.addEventListener('play', () => {
      audioElements.forEach((otherAudio) => {
        if (otherAudio !== audio) {
          otherAudio.pause();
        }
      });
    });
  });
}

window.initAudioPlayback = initAudioPlayback;
