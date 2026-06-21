# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## 언어 및 커뮤니케이션 규칙

### 기본 설정
- **응답 언어**: 한국어
- **코드 주석**: 한국어로 작성
- **커밋 메시지**: 한국어로 작성
- **문서 및 README**: 한국어로 작성
- **변수명/함수명**: 영어 (국제 코딩 표준 준수)

### 예시
```javascript
// 한국어 주석 예시
const getUserProfile = (userId) => {
  // 사용자 정보 조회
  return fetchUser(userId);
};
```

```
커밋 메시지 예시:
"프로젝트 초기 구조 설정 완료"
"Hero 섹션 HTML 마크업 추가"
"네비게이션 메뉴 JavaScript 인터랙션 구현"
```

---

## 프로젝트 개요
개발자 웹 이력서를 HTML, CSS, JavaScript, Tailwind CSS로 구축하는 프로젝트입니다.
자세한 개발 단계와 체크리스트는 `ROADMAP.md`를 참조하세요.

**기술 스택:**
- HTML5
- Tailwind CSS
- Vanilla JavaScript (프레임워크 없음)
- 초기 단계에서는 빌드 도구 미사용 (정적 사이트)

---

## 프로젝트 구조
```
portfolio-resume/
├── index.html                 # 메인 포트폴리오 페이지
├── css/
│   └── custom.css            # Tailwind CSS 커스텀 오버라이드
├── js/
│   └── main.js               # Vanilla JavaScript 인터랙션
├── assets/
│   ├── images/               # 프로필 이미지, 프로젝트 스크린샷
│   ├── icons/                # SVG 아이콘
│   └── profile.jpg           # 프로필 사진
├── ROADMAP.md                # 개발 단계 및 체크리스트
└── CLAUDE.md                 # 이 파일
```

---

## Tailwind CSS 설정
- Tailwind CSS는 개발 단계에서 CDN을 통해 로드 (나중에 빌드 프로세스로 전환 가능)
- 커스텀 테마는 `tailwind.config.js`에서 설정하거나, `css/custom.css`에서 `@apply` 디렉티브 사용
- 반응형 브레이크포인트: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)

---

## 개발 시작하기

### 개발 서버 실행
```bash
# Python을 사용한 간단한 HTTP 서버
python3 -m http.server 8000

# 또는 Node.js http-server 사용
npx http-server
```
브라우저에서 `http://localhost:8000` 방문

### HTML 작성 규칙
- Semantic HTML5 요소 사용 (nav, header, main, section, footer, article)
- 간단한 명명 규칙 또는 BEM 컨벤션 적용
- 접근성을 위해 적절한 제목 계층 및 ARIA 레이블 사용

### Tailwind CSS로 스타일링
- Tailwind 유틸리티 클래스를 최우선으로 사용
- `css/custom.css`는 커스텀 컴포넌트나 복잡한 패턴에만 사용
- `dark:` 접두사로 다크모드 적용
- 모바일 우선 접근법: 기본 스타일은 모바일용, `md:`, `lg:`로 큰 화면 대응

### JavaScript 작성
- 간단하게 `js/main.js`에 모든 스크립트 작성
- Vanilla JavaScript 사용 (프레임워크 없음)
- DOM 선택: `querySelector/querySelectorAll` 사용
- 주요 기능:
  - 모바일 메뉴 토글
  - Smooth scroll 네비게이션
  - 다크모드 토글
  - 폼 유효성 검사

---

## 구현할 주요 기능 (ROADMAP 기준)
1. **네비게이션** - 스티키 헤더 & 모바일 햄버거 메뉴
2. **Hero 섹션** - 프로필 이미지, 자기소개, CTA 버튼
3. **섹션별 내용** - 소개, 기술, 프로젝트(3-4개), 경력, 연락처
4. **반응형 디자인** - 모바일 우선, 모든 화면 크기 최적화
5. **인터랙션** - Smooth scroll, 스크롤 애니메이션, 다크모드
6. **SEO** - Meta 태그, Open Graph, Semantic HTML
7. **접근성** - ARIA 레이블, 키보드 네비게이션, alt 텍스트

---

## 테스트 및 검증
- 여러 브라우저에서 테스트 (Chrome, Firefox, Safari, Edge)
- DevTools 반응형 디자인 모드로 브레이크포인트 테스트
- W3C 검증기로 HTML 검증
- 브라우저 접근성 도구로 검증
- Lighthouse로 성능 점검

---

## 배포
- **GitHub Pages** (가장 간단, main 브랜치에서 자동 배포)
- **Vercel** 또는 **Netlify** (설정 없음, 자동 배포)
- 기타 정적 호스팅 서비스

---

## 브라우저 지원
- 최신 브라우저 2개 버전 지원
- 구형 브라우저에 대한 우아한 성능 저하 (Graceful degradation)
- 초기 버전은 빌드 단계 불필요

---

## Git 워크플로우
- 명확한 메시지로 원자적 커밋 작성
- ROADMAP의 각 단계는 이상적으로 하나의 커밋
- 실험적 기능은 feature 브랜치 사용

---

## 성능 고려사항
- 이미지 최적화 (webp + jpg 폴백)
- 배포 전 CSS/JS 압축
- 필요시 이미지 lazy loading
- Render-blocking 리소스 회피
- Hero 섹션 Critical CSS 인라인 고려
