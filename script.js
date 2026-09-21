/* Language and navigation. English in index.html remains the no-JavaScript fallback. */
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu(returnFocus = false) {
  navigation.hidden = true;
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', document.documentElement.lang === 'ko' ? '메뉴 열기' : 'Open navigation');
  if (returnFocus) toggle.focus();
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  navigation.hidden = !open;
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', document.documentElement.lang === 'ko' ? (open ? '메뉴 닫기' : '메뉴 열기') : (open ? 'Close navigation' : 'Open navigation'));
});
navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !navigation.hidden) closeMenu(true); });
document.addEventListener('click', event => { if (!navigation.hidden && !navigation.contains(event.target) && !toggle.contains(event.target)) closeMenu(); });

/* KOREAN COPY: edit the translated wording here. English is read from index.html.
 * Brand names, product abbreviations, email addresses and phone numbers stay unchanged.
 * Entries replace content only; button icons are preserved separately below. */
const koreanCopy = {
  '.skip-link':'브로슈어 본문으로 이동',
  '#navigation a[href="#about"]':'회사 소개',
  '#navigation a[href="#why-pqc"]':'왜 PQC인가?',
  '#navigation a[href="#platform"]':'KEY4C 플랫폼',
  '#navigation a[href="#proven"]':'국내 실증',
  '#navigation a[href="#global"]':'글로벌 협력',
  '#navigation a[href="#contact"]':'문의하기',
  '#navigation a[href="#thanks"]':'감사합니다',
  '.eyebrow':'더 안전한 내일을<br>만드는 보안',
  '#hero-title':'양자내성<br>보안 기술<br><span>신뢰할 수 있는 세상을 위해</span>',
  '.hero-intro':'케이스마텍은 양자 컴퓨팅 시대를 위한<br>암호 보안 기술을 제공합니다.',
  '.principles':'신뢰<br>기술<br>사람',
  '.hero-brand':'<strong>KSMARTECH</strong><br>다가올 미래를 위한 보안',
  '.scroll-link':'아래로 <span aria-hidden="true">↓</span>',
  '#about .kicker':'회사 소개',
  '#about-title':'케이스마텍 소개',
  '#about .section-heading>p:last-child':'케이스마텍은 더욱 긴밀하게 연결되는 세상에서<br>디지털 신뢰를 지키는<br>보안 기술 기업입니다.',
  '.about-photo figcaption':'<div class="accent-line"></div>더 나은 내일을 위한<br>디지털 신뢰',
  '.values>div:nth-child(1) h3':'디지털 키<br>전문성',
  '.values>div:nth-child(2) h3':'신뢰할 수 있는<br>기술',
  '.values>div:nth-child(3) h3':'글로벌<br>파트너십',
  '#why-pqc .kicker':'양자내성암호의 필요성',
  '#why-title':'왜 PQC인가?',
  '#why-pqc .section-heading>p:last-child':'양자 컴퓨팅이 보안의 기준을 바꾸고 있습니다.<br>다가올 변화에 대비해야 할 때는<br>바로 지금입니다.',
  '.risk-card:nth-child(1) h3':'양자 컴퓨팅의 위협',
  '.risk-card:nth-child(1) p':'양자 컴퓨팅의 발전은 기존 암호 체계의 안전성을 위협합니다.',
  '.risk-card:nth-child(2) h3':'장기적 보안 위험',
  '.risk-card:nth-child(2) p':'오늘 수집된 데이터가<br>미래에 해독될 수 있습니다.<br>(HNDL)',
  '.risk-card:nth-child(3) h3':'핵심 인프라 보호',
  '.risk-card:nth-child(3) p':'금융과 공공 서비스에는 선제적이고 전략적인 보안 전환이 필요합니다.',
  '#platform .kicker':'KEY4C 플랫폼',
  '#platform-title':'KEY4C 보안<br>플랫폼',
  '#platform .section-heading>p:last-child':'모든 보안은 신뢰할 수 있는 신뢰점(Root of Trust)에서 시작됩니다.<br>KEY4C는 HSM 기반의<br>통합 보안 서비스를 제공합니다.',
  '.platform-core span':'보안 플랫폼',
  '.hsm p':'핵심 보안',
  '.kms p':'암호 키<br>수명주기 관리',
  '.ca h3':'사설 인증기관',
  '.ca p':'신뢰할 수 있는<br>인증서',
  '.folder h3':'보안 폴더',
  '.folder p':'데이터 보호',
  '.secret h3':'시크릿 관리',
  '.secret p':'K8s 시크릿 플러그인',
  '.otp p':'강력한<br>사용자 인증',
  '#proven .kicker':'국내 실증',
  '#proven-title':'한국에서 검증하다',
  '#proven .section-heading>p:last-child':'실제 금융 환경에서<br>하이브리드 PQC 기술을 검증하고 있습니다.',
  '.project-photo figcaption strong':'2026<br>국내 PQC<br>실증 사업',
  '.project-photo figcaption>span':'금융 서비스',
  '.project-grid article:nth-child(1) h3':'종단간 암호화',
  '.project-grid article:nth-child(1) p':'데이터 전송 전 구간의<br>보안',
  '.project-grid article:nth-child(2) h3':'디지털 인증서',
  '.project-grid article:nth-child(2) p':'PQC 기반<br>인증서',
  '.project-grid article:nth-child(3) h3':'전자서명',
  '.project-grid article:nth-child(3) p':'안전하고 신뢰할 수 있는<br>거래',
  '.project-grid article:nth-child(4) h3':'암호 키 관리',
  '.project-grid article:nth-child(4) p':'안전한 암호 키<br>수명주기 관리',
  '#global .kicker':'글로벌 협력',
  '#global-title':'더 안전한<br>세상을 향해',
  '#global .section-heading>p:last-child':'케이스마텍은 더욱 안전한 디지털 세상을 위해<br>글로벌 파트너십을 확대합니다.',
  '.stats>div:nth-child(1) p':'글로벌<br>파트너',
  '.stats>div:nth-child(2) p':'진출 목표<br>시장',
  '.stats>div:nth-child(3) p':'더 안전한<br>내일',
  '#global blockquote p':'모든 디지털 키가 안전한 세상,<br>우리는 그 미래를 믿습니다.”',
  '#contact .kicker':'함께 시작하세요',
  '#contact-title':'더 안전한 내일을<br>함께 만들어갑니다',
  '#contact .section-heading>p:last-child':'케이스마텍과 연결하세요.<br>여러분과 함께 더 안전한 미래를<br>만들 준비가 되어 있습니다.',
  '.contact-grid>a:nth-child(1) h3':'이메일',
  '.contact-grid>a:nth-child(2) h3':'전화',
  '.contact-grid>a:nth-child(3) h3':'상담 문의',
  '.contact-grid>a:nth-child(3) p':'상담이 필요하시면<br>문의해 주세요',
  '.signature':'신뢰할 수 있는 보안<br><span>더 밝은 내일을 위해</span>',
  '.contact-footer>p':'더 나은 내일을 위한<br>디지털 신뢰',
  '#thanks-title':'감사합니다',
  '#thanks .section-heading>p:last-child':'더 안전한 내일,<br>여러분과 함께합니다.',
  '.closing-values>div:nth-child(1) p':'안전한<br>오늘',
  '.closing-values>div:nth-child(2) p':'함께 만드는<br>든든한 미래',
  '.closing-values>div:nth-child(3) p':'더 안전한<br>내일',
  '.closing-quote p':'“보안은 단순한 기술이 아니라,<br>더 나은 내일을 위한 약속입니다.”',
  '.closing-footer p':'더 나은 내일을 위한 디지털 신뢰'
};
const koreanButtons = {
  '#home .button':'보안 기술 살펴보기',
  '#about .button':'자세히 보기',
  '#why-pqc .button':'자세히 보기',
  '#platform .button':'KEY4C 서비스 살펴보기',
  '#proven .button':'실증 사업 자세히 보기',
  '#global .button':'파트너십 문의',
  '#contact .button':'문의하기',
  '#thanks .button':'처음으로'
};
const translatedNodes = [];
for (const [selector, ko] of Object.entries(koreanCopy)) {
  document.querySelectorAll(selector).forEach(element => translatedNodes.push({element,en:element.innerHTML,ko}));
}
for (const [selector, ko] of Object.entries(koreanButtons)) {
  const element = document.querySelector(selector);
  const icon = element.querySelector('.arrow').outerHTML;
  translatedNodes.push({element,en:element.innerHTML,ko:ko+icon});
}
const translatedAttributes = [
  ['#navigation','aria-label','브로슈어 목차'],
  ['.platform-diagram','aria-label','6가지 보안 서비스를 통합하는 KEY4C'],
  ['.about-photo img','alt','푸른 하늘 아래 케이스마텍 사옥'],
  ['.project-photo img','alt','한국의 금융기관 건물'],
  ['.world-map img','alt','국경 없는 보안: 한국과 유럽, 중동, 아프리카, 북미, 아시아·태평양을 연결하는 글로벌 네트워크'],
  ['.contact-building img','alt','케이스마텍 사옥'],
  ['.thanks-earth img','alt','일출과 함께 네트워크로 연결된 지구']
].map(([selector,attribute,ko])=>{const element=document.querySelector(selector);return {element,attribute,ko,en:element.getAttribute(attribute)};});
const languageSelect = document.querySelector('#language-select');
const englishTitle = document.title;
const description = document.querySelector('meta[name="description"]');
const englishDescription = description.content;
function setLanguage(language) {
  const selected = language === 'ko' ? 'ko' : 'en';
  document.documentElement.lang = selected;
  languageSelect.value = selected;
  translatedNodes.forEach(item=>{item.element.innerHTML=item[selected];});
  translatedAttributes.forEach(item=>item.element.setAttribute(item.attribute,item[selected]));
  document.querySelectorAll('.steps').forEach((element,index)=>element.setAttribute('aria-label',selected==='ko'?`전체 7개 화면 중 ${index+1}번째`:`Section ${index+1} of 7`));
  document.title = selected === 'ko' ? 'KSMARTECH | 다가올 미래를 위한 보안' : englishTitle;
  description.content = selected === 'ko' ? '케이스마텍 — 신뢰할 수 있는 세상을 위한 양자내성 보안. KEY4C 플랫폼과 글로벌 파트너십을 소개합니다.' : englishDescription;
  closeMenu();
  try { localStorage.setItem('ksmartech-language',selected); } catch { /* File or private mode may disable storage. */ }
}
languageSelect.addEventListener('change',event=>setLanguage(event.target.value));
let initialLanguage='en';
try { initialLanguage=localStorage.getItem('ksmartech-language')||'en'; } catch { /* Default to English. */ }
setLanguage(initialLanguage);
