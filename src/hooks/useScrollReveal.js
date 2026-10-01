import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
      return;

    const targets = [];
    document.querySelectorAll('main section').forEach((section) => {
      section.querySelectorAll('h1, h2, h3, .grid > div').forEach((element, index) => {
        if (element.matches('h1, h2, h3') && element.parentElement.closest('.grid > div')) return;
        element.classList.add('scroll-reveal');
        element.style.setProperty('--reveal-delay', `${Math.min(index % 6, 5) * 75}ms`);
        targets.push(element);
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('scroll-reveal-active');
            void entry.target.offsetWidth;
            entry.target.classList.add('scroll-reveal-active');
          } else {
            entry.target.classList.remove('scroll-reveal-active');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -7% 0px' }
    );

    targets.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);
}
