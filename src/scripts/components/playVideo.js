export function playVideo() {
  const video = document.querySelector('.video');
  const playVideoLink = document.querySelectorAll('.play-video');
  const videoClose = document.querySelector('.video__close');

  playVideoLink.forEach((buttonPlayVideo) => {
    buttonPlayVideo.addEventListener('click', () => {
      video.classList.add('video--active');
    });
  });

  videoClose.addEventListener('click', () => {
    video.classList.remove('video--active');
  });

  video.addEventListener('click', () => {
    video.classList.remove('video--active');
  });
}
