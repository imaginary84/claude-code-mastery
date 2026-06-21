// 다크모드 토글
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

// 초기 다크모드 설정 (localStorage 확인)
function initTheme() {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  if (isDarkMode) {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }
}

// 페이지 로드 시 초기화
initTheme();

themeToggle.addEventListener('click', () => {
  html.classList.toggle('dark');
  const isDark = html.classList.contains('dark');
  localStorage.setItem('darkMode', isDark);

  // 즉시 UI 업데이트
  document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
});

// 모바일 메뉴 토글
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// 모바일 메뉴 링크 클릭 시 메뉴 닫기
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// 스크롤 시 헤더 배경 변경
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Smooth scroll을 위한 네비게이션 링크 처리
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#' && href !== '') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// 활성 네비게이션 링크 하이라이트
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNavLink);

// Intersection Observer로 섹션 등장 애니메이션
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('section-animate');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// 섹션과 fade-in 요소 관찰
document.querySelectorAll('section, .fade-in').forEach(element => {
  observer.observe(element);
});

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  updateActiveNavLink();

  // 페이지 로딩 애니메이션
  document.body.style.opacity = '1';
});

// 백투탑 버튼 기능
const backToTopBtn = document.getElementById('back-to-top');
if (backToTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });
}

// 수평 스크롤 시 자동 활성화 네비게이션 업데이트
let scrollTimeout;
window.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    updateActiveNavLink();
  }, 100);
});

// 프로젝트 카드 호버 효과 강화
const projectCards = document.querySelectorAll('[id="projects"] .bg-white');
projectCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05)';
  });
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
});

// 프리로딩
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});

// 키보드 네비게이션 (Tab 키)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    // 모바일 메뉴 닫기
    if (!mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
    }
  }
});

// 페이지 초기 로드 시 스크롤 위치 맨 위로
window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});
