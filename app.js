'use strict';
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#mobile-menu');
function closeMenu() { if (menu.open) menu.close(); }
menuButton.addEventListener('click', () => {
  menu.showModal();
  menuButton.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
});
menu.querySelector('.menu-close').addEventListener('click', closeMenu);
menu.addEventListener('click', (event) => {
  if (event.target === menu || event.target.closest('a')) closeMenu();
});
menu.addEventListener('close', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
  menuButton.focus({ preventScroll: true });
});
const mobileLayout = window.matchMedia('(max-width: 768px)');
mobileLayout.addEventListener('change', (event) => { if (!event.matches) closeMenu(); });

const tabList = document.querySelector('.job-tablist');
const tabs = [...tabList.querySelectorAll('[role="tab"]')];
function selectTab(index, focus = false) {
  tabs.forEach((tab, current) => {
    const selected = current === index;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    document.getElementById(tab.getAttribute('aria-controls')).hidden = !selected;
  });
  if (focus) tabs[index].focus({ preventScroll: true });
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectTab(index));
  tab.addEventListener('keydown', (event) => {
    const horizontal = tabList.getAttribute('aria-orientation') === 'horizontal';
    let next = index;
    if (event.key === (horizontal ? 'ArrowRight' : 'ArrowDown')) next = (index + 1) % tabs.length;
    else if (event.key === (horizontal ? 'ArrowLeft' : 'ArrowUp')) next = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = tabs.length - 1;
    else return;
    event.preventDefault();
    selectTab(next, true);
    tabs[next].scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'instant' });
  });
});
selectTab(0);
const horizontalTabs = window.matchMedia('(max-width: 600px)');
function updateTabOrientation() { tabList.setAttribute('aria-orientation', horizontalTabs.matches ? 'horizontal' : 'vertical'); }
updateTabOrientation();
horizontalTabs.addEventListener('change', updateTabOrientation);

const header = document.querySelector('.site-header');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let lastScroll = window.scrollY;
let scrollPending = false;
window.addEventListener('scroll', () => {
  if (scrollPending) return;
  scrollPending = true;
  window.requestAnimationFrame(() => {
    const position = window.scrollY;
    header.classList.toggle('scrolled', position > 50);
    if (position < 100 || menu.open || reducedMotion.matches) header.classList.remove('nav-hidden');
    else if (Math.abs(position - lastScroll) > 5) header.classList.toggle('nav-hidden', position > lastScroll);
    lastScroll = position;
    scrollPending = false;
  });
}, { passive: true });

if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('awaiting-reveal');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.about-section, .jobs-section, .featured-project, .project-card, .contact-section').forEach((element) => {
    element.setAttribute('data-reveal', '');
    if (element.getBoundingClientRect().top > window.innerHeight) element.classList.add('awaiting-reveal');
    observer.observe(element);
  });
  document.querySelectorAll('a[href^="#"]').forEach((link) => link.addEventListener('click', () => {
    document.querySelectorAll('.awaiting-reveal').forEach((element) => element.classList.remove('awaiting-reveal'));
  }));
}

let copyTimer;
document.querySelector('.copy-email').addEventListener('click', async () => {
  const status = document.querySelector('.copy-status');
  clearTimeout(copyTimer);
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText('srijankhadka89@gmail.com');
    status.textContent = 'Email copied';
  } catch {
    status.textContent = 'srijankhadka89@gmail.com';
  }
  copyTimer = setTimeout(() => { status.textContent = ''; }, 5000);
});
