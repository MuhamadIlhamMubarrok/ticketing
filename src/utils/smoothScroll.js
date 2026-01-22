export const smoothScrollTo = (targetId, duration = 1400, offset = 0) => {
  const target = document.getElementById(targetId);
  if (!target) return;

  const startPosition = window.pageYOffset;
  const targetPosition = target.getBoundingClientRect().top - offset;
  const startTime = performance.now();

  const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

  const animateScroll = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOut(progress);

    window.scrollTo(0, startPosition + targetPosition * ease);

    if (elapsed < duration) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};
