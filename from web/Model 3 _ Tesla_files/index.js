const hasHeroParallax = () => {
  const heroParallax = document.querySelector('.tcl-hero-parallax');
  if (heroParallax) {
    return true;
  }
  return false;
};

const isHeroTheFirstComponentOnThePage = () => {
  const firstComponent = document.querySelector('section[data-component-status]');
  if (firstComponent.classList.contains('hero--default')) {
    return true;
  }
  return false;
};

document.addEventListener('DOMContentLoaded', () => {
  const regionTop = document.querySelector('.tcl-region--top');
  if (regionTop && regionTop.hasChildNodes()) {
    const regionTopHeight = regionTop.clientHeight;
    if (hasHeroParallax()) {
      document.body.style.setProperty(
        '--tcl-hero-parallax-block-size',
        `calc(100vh - ${regionTopHeight}px)`
      );
      document.body.style.setProperty(
        '--template-landing-page-block-size',
        `calc(100vh - ${regionTopHeight}px)`
      );
      document.body.style.setProperty(
        '--template-landing-page-footer-margin-block-start',
        `calc(-70px - ${regionTopHeight}px)`
      );
    } else if (isHeroTheFirstComponentOnThePage()) {
      document
        .querySelector('.hero--default')
        .style.setProperty('--media-height', `calc(100vh - ${regionTopHeight}px)`);
    }
  }
});
