// ========== DATA ==========
const INITIAL_NOCS = [
  {
    id: '1', name: 'Rana Marketing', englishCompanyName: 'RANA For Marketing Services Via Social',
    arabicCompanyName: 'ران الخدمات التسويق عبر مواقع التواصل', date: '05-06-2026',
    addresseeTitle: 'Ministory of Human Resource & Emiratisation', addresseeCityCountry: 'DUBAI \u2013 UAE',
    title: 'NO OBJECTION CERTIFICATE', employeeName: 'MUHAMMAD EHTASHAM MUHAMMAD IRSHAD',
    nationality: 'Pakistani', emiratesId: '784-2001-1882604-7', sponsorType: 'under my sponsorship',
    bodyTemplate: 'We witness RANA FOR MARKETING SERVICES VIA SOCIAL, Mr {employeeName} a {nationality} national holder of Emirates ID No is {emiratesId} under my sponsorship, and we have no objection to issuing him a work permit for any company in UAE according to the laws of United Arab Emirates.',
    closingText: 'Best Regards,', signoffCompany: 'RANA FOR MARKETING SERVICES VIA SOCIAL',
    signoffCity: 'DUBAI \u2013 UAE', logoType: 'rana', logoColor: '#0c4ea3', stampPosition: 'center',
    stampText: 'RANA FOR MARKETING SERVICES VIA SOCIAL'
  },
  {
    id: '2', name: 'FJM Technical', englishCompanyName: 'F J M Techincal Services',
    arabicCompanyName: '\u0627\u0641 \u062C\u064A\u0647 \u0627\u0645 \u0644\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0641\u0646\u064A\u0629',
    date: '08-06-2026', addresseeTitle: 'Ministory of Human Resource & Emiratisation',
    addresseeCityCountry: 'DUBAI \u2013 UAE', title: 'NO OBJECTION CERTIFICATE',
    employeeName: 'SHEHRYAR ABID ALI', nationality: 'Pakistani', emiratesId: '784-2001-2682761-5',
    sponsorType: 'under my sponsorship',
    bodyTemplate: 'We witness F J M TECHINCAL SERVICES, Mr {employeeName} a {nationality} national holder of Emirates ID No is {emiratesId} under my sponsorship, and we have no objection to issuing him a work permit for any company in UAE according to the laws of United Arab Emirates.',
    closingText: 'Best Regards,', signoffCompany: 'F J M TECHINCAL SERVICES',
    signoffCity: 'DUBAI \u2013 UAE', logoType: 'fjm', logoColor: '#c51b23', stampPosition: 'right',
    stampText: 'F J M TECHINCAL SERVICES'
  },
  {
    id: '3', name: 'Summer City', englishCompanyName: 'SUMMER CITY BUILDING CONTRACTING L.L.C',
    arabicCompanyName: '\u0633\u0645\u0631 \u0633\u064A\u062A\u064A \u0644\u0645\u0642\u0627\u062A \u0627\u0644\u0628\u0646\u0627\u0621 \u0634.\u0630.\u0645.\u0645',
    date: '04-06-2026', addresseeTitle: 'Ministory of Human Resource & Emiratisation',
    addresseeCityCountry: 'DUBAI \u2013 UAE', title: 'NO OBJECTION CERTIFICATE',
    employeeName: 'ASHRAQ AHMED MOHD SHARIF', nationality: 'Indian', emiratesId: '784-1981-6592236-4',
    sponsorType: 'under my sponsorship',
    bodyTemplate: 'We witness SUMMER CITY BUILDING CONTRACTING L.L.C, Mr {employeeName} an {nationality} national holder of Emirates ID No is {emiratesId} under my sponsorship, and we have no objection to issuing him a work permit for any company in UAE according to the laws of United Arab Emirates.',
    closingText: 'Best Regards,', signoffCompany: 'SUMMER CITY BUILDING CONTRACTING L.L.C',
    signoffCity: 'DUBAI \u2013 UAE', logoType: 'summer', logoColor: '#0a6395', stampPosition: 'right',
    stampText: 'SUMMER CITY BUILDING CONTRACTING L.L.C'
  },
  {
    id: '4', name: 'Hassan Ishtiaq', englishCompanyName: 'Hassan Ishtiaq Techincal Services L.L.C',
    arabicCompanyName: '\u062D\u0633\u0646 \u0627\u0634\u062A\u064A\u0627\u0642 \u0644\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0641\u0646\u064A\u0629 \u0630.\u0645.\u0645',
    date: '03-06-2026', addresseeTitle: 'Ministory of Human Resource & Emiratisation',
    addresseeCityCountry: 'DUBAI \u2013 UAE', title: 'NO OBJECTION CERTIFICATE',
    employeeName: 'SUJAN PAKHRIN', nationality: 'Nepalian', emiratesId: '784-2002-7584587-1',
    sponsorType: 'under my sponsorship',
    bodyTemplate: 'We witness HASSAN ISHTIAQ TECHINCAL SERVICES L.L.C, Mr {employeeName} a {nationality} national holder of Emirates ID No is {emiratesId} under my sponsorship, and we have no objection to issuing him a work permit for any company in UAE according to the laws of United Arab Emirates.',
    closingText: 'Best Regards,', signoffCompany: 'HASSAN ISHTIAQ TECHINCAL SERVICES L.L.C',
    signoffCity: 'DUBAI \u2013 UAE', logoType: 'hassan', logoColor: '#0284c7', stampPosition: 'right',
    stampText: 'HASSAN ISHTIAQ TECHINCAL SERVICES L.L.C'
  },
  {
    id: '5', name: 'Wasique Zahir', englishCompanyName: 'WASIQUE ZAHIR TECHNICAL WORKS L.L.C',
    arabicCompanyName: '\u0648\u0627\u062B\u0642 \u0632\u0647\u064A\u0631 \u0644\u0644\u0627\u0639\u0645\u0627\u0644 \u0627\u0644\u0641\u0646\u064A\u0629 \u0634.\u0630.\u0645.\u0645',
    date: '02-06-2026', addresseeTitle: 'Ministory of Human Resource & Emiratisation',
    addresseeCityCountry: 'DUBAI \u2013 UAE', title: 'NO OBJECTION CERTIFICATE',
    employeeName: 'JABAR HUSSAIN MUHAMMAD KHALID', nationality: 'Pakistani',
    emiratesId: '784-1995-6924737-4', sponsorType: 'under my sponsorship',
    bodyTemplate: 'We witness WASIQUE ZAHIR TECHINCAL WORKS L.L.C, Mr {employeeName} a {nationality} national holder of Emirates ID No is {emiratesId} under my sponsorship, and we have no objection to issuing him a work permit for any company in UAE according to the laws of United Arab Emirates.',
    closingText: 'Best Regards,', signoffCompany: 'WASIQUE ZAHIR TECHINCAL WORKS L.L.C',
    signoffCity: 'DUBAI \u2013 UAE', logoType: 'wasique', logoColor: '#086da3', stampPosition: 'right',
    stampText: 'WASIQUE ZAHIR TECHNICAL WORKS L.L.C'
  },
  {
    id: '6', name: 'Amal Jannat', englishCompanyName: 'AMAL JANNAT TECHNICAL SERVICES EST.',
    arabicCompanyName: '\u0645\u0624\u0633\u0633\u0629 \u0627\u0645\u0644 \u062C\u0646\u0627\u062A \u0644\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0641\u0646\u064A\u0629',
    date: '10-06-2026', addresseeTitle: 'Ministory of Human Resource & Emiratisation',
    addresseeCityCountry: 'DUBAI \u2013 UAE', title: 'NO OBJECTION CERTIFICATE',
    employeeName: 'SAMI ULLAH MUHAMMAD YOUSAF', nationality: 'Pakistani',
    emiratesId: '20020110417800', sponsorType: 'under my sponsorship',
    bodyTemplate: 'We witness AMAL JANNAT TECHNICAL SERVICES EST, Mr {employeeName} a {nationality} national holder of Emirates ID No is {emiratesId} under my sponsorship, and we have no objection to issuing him a work permit for any company in UAE according to the laws of United Arab Emirates.',
    closingText: 'Best Regards,', signoffCompany: 'AMAL JANNAT TECHNICAL SERVICES EST',
    signoffCity: 'DUBAI \u2013 UAE', logoType: 'amal', logoColor: '#cc2128', stampPosition: 'center',
    stampText: 'AMAL JANNAT TECHNICAL SERVICES EST.'
  }
];

// ========== STATE ==========
let nocs = JSON.parse(JSON.stringify(INITIAL_NOCS));
let selectedNocId = '1';
let editedNoc = JSON.parse(JSON.stringify(INITIAL_NOCS[0]));
let zoomScale = 0.7;
let autoFixSpelling = false;
let showStamp = true;
let showMargins = false;
let activeTab = 'details';
let isGeneratingPdf = false;
let stampDragX = 0, stampDragY = 0;
let isDragging = false;
let dragStartX = 0, dragStartY = 0, dragOrigX = 0, dragOrigY = 0;

// ========== SVG LOGOS ==========
function renderLogo(type, color, englishTitle, arabicTitle) {
  const c = color || '#0F172A';
  const eng = englishTitle || '';
  const arb = arabicTitle || '';
  switch (type) {
    case 'rana': return `
      <div class="logo-container">
        <svg class="logo-svg" width="64" height="64" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="38" stroke="${c}" stroke-width="5" stroke-dasharray="6 3"/>
          <circle cx="50" cy="50" r="30" fill="#f8fafc" stroke="${c}" stroke-width="2"/>
          <path d="M50 32 L50 68 M32 50 L68 50 M37 37 L63 63 M37 63 L63 37" stroke="${c}" stroke-width="1.5" stroke-linecap="round"/>
          <circle cx="50" cy="50" r="8" fill="${c}"/><circle cx="50" cy="32" r="6" fill="${c}"/>
          <circle cx="50" cy="68" r="6" fill="${c}"/><circle cx="32" cy="50" r="6" fill="${c}"/>
          <circle cx="68" cy="50" r="6" fill="${c}"/>
          <text x="50" y="35" fill="white" font-size="8" font-weight="bold" text-anchor="middle">in</text>
          <text x="32" y="52" fill="white" font-size="7" font-weight="bold" text-anchor="middle">f</text>
          <text x="68" y="52" fill="white" font-size="6" font-weight="bold" text-anchor="middle">t</text>
          <text x="50" y="70" fill="white" font-size="6" font-weight="bold" text-anchor="middle">✉</text>
        </svg>
        <div class="logo-texts">
          <div class="logo-english" style="color:${c}">${escHtml(eng || 'RANA For Marketing Services Via Social')}</div>
          <div class="logo-arabic" style="color:${c}">${escHtml(arb || 'ران الخدمات التسويق عبر مواقع التواصل')}</div>
        </div>
      </div>`;
    case 'fjm': return `
      <div class="logo-container">
        <div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0">
          <svg width="80" height="40" viewBox="0 0 120 60" fill="none">
            <circle cx="28" cy="22" r="12" stroke="${c}" stroke-width="3"/>
            <path d="M28 10 L28 14 M28 30 L28 34 M18 22 L22 22 M34 22 L38 22 M21 15 L24 18 M35 29 L32 26 M21 29 L24 26 M35 15 L32 18" stroke="${c}" stroke-width="3" stroke-linecap="round"/>
            <text x="25" y="48" fill="${c}" font-size="28" font-weight="900" font-style="italic" letter-spacing="1">FJM</text>
          </svg>
          <span style="font-size:9px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;margin-top:-4px;color:${c}">TECHNICAL SERVICES</span>
        </div>
        <div style="border-left:2px solid #fecaca;padding-left:1rem;min-width:0">
          <div class="logo-english" style="color:${c}">${escHtml(eng || 'F J M Technical Services')}</div>
          <div class="logo-arabic" style="color:${c}">${escHtml(arb || 'اف جيه ام للخدمات الفنية')}</div>
        </div>
      </div>`;
    case 'summer': return `
      <div class="logo-container">
        <svg class="logo-svg" width="64" height="64" viewBox="0 0 100 100" fill="none">
          <rect x="25" y="40" width="12" height="42" fill="${c}"/>
          <rect x="42" y="22" width="16" height="60" fill="${c}" opacity="0.8"/>
          <rect x="63" y="32" width="12" height="50" fill="${c}" opacity="0.9"/>
          <line x1="50" y1="22" x2="50" y2="10" stroke="${c}" stroke-width="2"/>
          <line x1="31" y1="40" x2="31" y2="32" stroke="${c}" stroke-width="2"/>
          <rect x="15" y="68" width="70" height="16" fill="${c}" rx="3"/>
          <text x="50" y="80" fill="white" font-size="13" font-weight="bold" text-anchor="middle" letter-spacing="4">SC</text>
        </svg>
        <div class="logo-texts">
          <div class="logo-english" style="color:${c}">${escHtml(eng || 'SUMMER CITY BUILDING CONTRACTING L.L.C')}</div>
          <div class="logo-arabic" style="color:${c}">${escHtml(arb || 'سمر سيتي لمقات البناء ش.ذ.م.م')}</div>
        </div>
      </div>`;
    case 'hassan': return `
      <div class="logo-container">
        <svg class="logo-svg" width="64" height="64" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="34" stroke="${c}" stroke-width="5"/>
          <circle cx="50" cy="50" r="26" stroke="${c}" stroke-width="1" stroke-dasharray="3 3"/>
          <rect x="46" y="8" width="8" height="10" fill="${c}" rx="2"/>
          <rect x="46" y="82" width="8" height="10" fill="${c}" rx="2"/>
          <rect x="8" y="46" width="10" height="8" fill="${c}" rx="2"/>
          <rect x="82" y="46" width="10" height="8" fill="${c}" rx="2"/>
          <line x1="35" y1="50" x2="65" y2="50" stroke="${c}" stroke-width="3"/>
          <line x1="50" y1="35" x2="50" y2="65" stroke="${c}" stroke-width="3"/>
          <circle cx="35" cy="50" r="5" fill="${c}"/><circle cx="65" cy="50" r="5" fill="${c}"/>
          <circle cx="50" cy="35" r="5" fill="${c}"/><circle cx="50" cy="65" r="5" fill="${c}"/>
          <text x="50" y="54" fill="white" font-size="12" font-weight="bold" text-anchor="middle">HI</text>
        </svg>
        <div class="logo-texts">
          <div class="logo-english" style="color:${c}">${escHtml(eng || 'Hassan Ishtiaq Technical Services L.L.C')}</div>
          <div class="logo-arabic" style="color:${c}">${escHtml(arb || 'حسن اشتياق للخدمات الفنية ذ.م.م')}</div>
        </div>
      </div>`;
    case 'wasique': return `
      <div class="logo-container">
        <svg class="logo-svg" width="64" height="48" viewBox="0 0 100 70" fill="none">
          <path d="M10 15 L35 15 L50 45 L65 15 L90 15" stroke="${c}" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M25 45 L75 45" stroke="${c}" stroke-width="5" stroke-linecap="round"/>
          <path d="M40 55 L60 55" stroke="${c}" stroke-width="3" stroke-linecap="round"/>
          <path d="M25 15 L45 42 L65 42 L85 15" stroke="#f1f5f9" stroke-width="2"/>
        </svg>
        <div class="logo-texts">
          <div class="logo-english" style="color:${c}">${escHtml(eng || 'WASIQUE ZAHIR TECHNICAL WORKS L.L.C')}</div>
          <div class="logo-arabic" style="color:${c}">${escHtml(arb || 'واثق زهير للاعمال الفنية ش.ذ.م.م')}</div>
        </div>
      </div>`;
    case 'amal': return `
      <div class="logo-container">
        <svg class="logo-svg" width="64" height="64" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="30" stroke="${c}" stroke-width="6"/>
          ${[0,45,90,135,180,225,270,315].map(a => `<g transform="rotate(${a} 50 50)"><rect x="46" y="10" width="8" height="12" fill="${c}" rx="1"/></g>`).join('')}
          <path d="M30 65 L45 50 L55 58 L72 38" stroke="${c}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M60 38 H75 V53" stroke="${c}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div class="logo-texts">
          <div class="logo-english" style="color:${c}">${escHtml(eng || 'AMAL JANNAT TECHNICAL SERVICES EST.')}</div>
          <div class="logo-arabic" style="color:${c}">${escHtml(arb || 'مؤسسة امل جنات للخدمات الفنية')}</div>
        </div>
      </div>`;
    default:
      var thumbRaw = getLogoSvgThumb(type, c);
      if (!thumbRaw) return '';
      var inner = thumbRaw.replace(/<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
      return `<div class="logo-container">
        <svg class="logo-svg" width="64" height="64" viewBox="0 0 100 100" fill="none">${inner}</svg>
        <div class="logo-texts">
          <div class="logo-english" style="color:${c}">${escHtml(eng)}</div>
          <div class="logo-arabic" style="color:${c}">${escHtml(arb)}</div>
        </div>
      </div>`;
  }
}

function renderStamp(type, text) {
  const sc = '#1e3a8a';
  const clean = (text || '').replace(/[^\x20-\x7E]/g, '').trim().replace(/\s+/g, ' ').toUpperCase();
  const len = clean.length;
  const fs = len > 40 ? '12px' : len > 28 ? '13.5px' : len > 18 ? '15.5px' : '17.5px';
  const short = clean.length > 20 ? clean.substring(0, 18) + '..' : clean;
  let inner = '';
  switch (type) {
    case 'rana': inner = `<circle cx="100" cy="100" r="16" stroke="${sc}" stroke-width="2" stroke-dasharray="4 2"/><path d="M 100 80 L 100 120 M 80 100 L 120 100" stroke="${sc}" stroke-width="2"/><rect x="91" y="91" width="18" height="18" stroke="${sc}" stroke-width="1.5" rx="3" fill="transparent"/><text x="100" y="132" fill="${sc}" font-size="9px" font-weight="bold" text-anchor="middle">DUBAI - UAE</text><text x="100" y="144" fill="${sc}" font-size="8px" font-weight="bold" text-anchor="middle">${escHtml(short)}</text>`; break;
    case 'fjm': inner = `<rect x="82" y="88" width="36" height="24" stroke="${sc}" stroke-width="2" rx="4"/><text x="100" y="104" fill="${sc}" font-size="14px" font-weight="black" text-anchor="middle">FJM</text><text x="100" y="132" fill="${sc}" font-size="10px" font-weight="bold" text-anchor="middle">DUBAI</text><text x="100" y="144" fill="${sc}" font-size="8px" font-weight="bold" text-anchor="middle">${escHtml(short)}</text>`; break;
    case 'summer': inner = `<path d="M 90 85 L 100 70 L 110 85 h-6 v20 h-8 v-20 Z" fill="none" stroke="${sc}" stroke-width="2"/><text x="100" y="118" fill="${sc}" font-size="10px" font-weight="bold" text-anchor="middle">EST. 2023</text><text x="100" y="132" fill="${sc}" font-size="10px" font-weight="bold" text-anchor="middle">${escHtml(short)}</text>`; break;
    case 'hassan': inner = `<text x="100" y="94" fill="${sc}" font-size="11px" font-weight="bold" text-anchor="middle">H.I. TECH</text><text x="100" y="112" fill="${sc}" font-size="11px" font-weight="extrabold" text-anchor="middle">DUBAI \u2022 U.A.E</text><text x="100" y="130" fill="${sc}" font-size="8px" font-weight="bold" text-anchor="middle">${escHtml(short)}</text>`; break;
    case 'wasique': inner = `<circle cx="100" cy="100" r="14" stroke="${sc}" stroke-width="1.5"/><text x="100" y="104" fill="${sc}" font-size="12px" font-weight="black" text-anchor="middle">VZ</text><text x="100" y="128" fill="${sc}" font-size="10px" font-weight="extrabold" text-anchor="middle">DUBAI, UAE</text><text x="100" y="140" fill="${sc}" font-size="8px" font-weight="bold" text-anchor="middle">${escHtml(short)}</text>`; break;
    case 'amal': inner = `<path d="M 85 90 L 100 110 L 115 90" stroke="${sc}" stroke-width="2" stroke-linecap="round"/><path d="M 85 102 L 100 82 L 115 102" stroke="${sc}" stroke-width="2" stroke-linecap="round"/><text x="100" y="124" fill="${sc}" font-size="9px" font-weight="bold" text-anchor="middle">EST. 2023</text><text x="100" y="136" fill="${sc}" font-size="9px" font-weight="bold" text-anchor="middle">${escHtml(short)}</text>`; break;
    default: inner = `<circle cx="100" cy="100" r="14" stroke="${sc}" stroke-width="2"/><text x="100" y="104" fill="${sc}" font-size="10px" font-weight="bold" text-anchor="middle">LOGO</text><text x="100" y="128" fill="${sc}" font-size="9px" font-weight="bold" text-anchor="middle">DUBAI, UAE</text><text x="100" y="140" fill="${sc}" font-size="8px" font-weight="bold" text-anchor="middle">${escHtml(short)}</text>`; break;
  }
  return `<svg class="stamp-svg" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs><path id="stampRing" d="M 100, 100 m -64, 0 a 64,64 0 1,1 128,0 a 64,64 0 1,1 -128,0"/></defs>
    <circle cx="100" cy="100" r="90" stroke="${sc}" stroke-width="3.5" fill="none"/>
    <circle cx="100" cy="100" r="82" stroke="${sc}" stroke-width="1" stroke-dasharray="3 1.5" fill="none"/>
    <text fill="${sc}" font-size="${fs}" font-weight="900" font-family="sans-serif" letter-spacing="1px"><textPath href="#stampRing" startOffset="50%" text-anchor="middle">${escHtml(clean)}</textPath></text>
    <circle cx="100" cy="100" r="52" stroke="${sc}" stroke-width="1.5" fill="none"/>
    <circle cx="100" cy="100" r="47" stroke="${sc}" stroke-width="1" fill="none"/>
    ${inner}
  </svg>`;
}

// ========== HELPERS ==========
function escHtml(s) { const d = document.createElement('div'); d.textContent = s; return d.innerHTML; }

function getRenderedBody(doc) {
  return doc.bodyTemplate
    .replace('{employeeName}', doc.employeeName)
    .replace('{nationality}', doc.nationality)
    .replace('{emiratesId}', doc.emiratesId);
}

function getDisplaySignoffCompany() {
  if (autoFixSpelling) {
    let v = editedNoc.signoffCompany;
    v = v.replace(/Ministory/gi, 'Ministry');
    v = v.replace(/Techincal/gi, 'Technical');
    return v;
  }
  return editedNoc.signoffCompany;
}

function getDisplayAddresseeTitle() {
  if (autoFixSpelling) return 'Ministry of Human Resource & Emiratisation';
  return editedNoc.addresseeTitle;
}

function getDisplayBodyText() {
  let raw = getRenderedBody(editedNoc);
  if (autoFixSpelling) {
    raw = raw.replace(/Ministory/gi, 'Ministry');
    raw = raw.replace(/Techincal/gi, 'Technical');
    raw = raw.replace(/Nepalian/gi, 'Nepalese');
    raw = raw.replace(/holder of Emirates ID No is/gi, 'holder of Emirates ID No.');
  }
  return raw;
}

// ========== UI UPDATES ==========
function updatePreview() {
  const eng = getDisplaySignoffCompany();
  const arb = editedNoc.arabicCompanyName;
  document.getElementById('logoContainer').innerHTML = renderLogo(editedNoc.logoType, editedNoc.logoColor, eng, arb);
  document.getElementById('docDate').textContent = 'Date: ' + editedNoc.date;
  document.getElementById('previewAddresseeTitle').textContent = getDisplayAddresseeTitle();
  document.getElementById('previewAddresseeCity').textContent = editedNoc.addresseeCityCountry;
  document.getElementById('docTitle').innerHTML = `<h2>${escHtml(editedNoc.title)}</h2>`;
  document.getElementById('previewBodyText').innerHTML = escHtml(getDisplayBodyText());
  document.getElementById('previewClosingText').textContent = editedNoc.closingText;
  document.getElementById('previewSignoffCompany').textContent = eng;
  document.getElementById('previewSignoffCity').textContent = editedNoc.signoffCity;

  // Stamp
  const sc = document.getElementById('stampContainer');
  if (showStamp) {
    sc.innerHTML = renderStamp(editedNoc.logoType, getDisplaySignoffCompany());
    sc.className = 'stamp-container draggable-stamp ' + (editedNoc.stampPosition === 'center' ? 'pos-center' : 'pos-right');
    if (stampDragX !== 0 || stampDragY !== 0) {
      sc.style.transform = 'translate(' + stampDragX + 'px, ' + stampDragY + 'px)';
    } else {
      sc.style.transform = '';
    }
  } else {
    sc.innerHTML = '';
    sc.className = 'stamp-container';
  }

  // Margins
  document.getElementById('marginGuide').style.display = showMargins ? 'block' : 'none';

  // Zoom
  document.getElementById('nocA4Page').style.transform = 'scale(' + zoomScale + ')';
  document.getElementById('zoomLabel').textContent = Math.round(zoomScale * 100) + '%';

  // Update sparkle icon
  const si = document.getElementById('sparkleIcon');
  if (autoFixSpelling) { si.style.color = '#f59e0b'; si.style.opacity = '1'; } else { si.style.color = '#94a3b8'; si.style.opacity = '1'; }
}

function updateField(key, value) {
  editedNoc[key] = value;
  if (key === 'logoColor') {
    document.getElementById('logoColor').value = value;
    document.getElementById('logoColorText').value = value;
  }
}

function generatePreview() {
  updatePreview();
}

// ========== STAMP DRAG ==========
let stampDragInitialized = false;
function initStampDrag() {
  if (stampDragInitialized) return;
  const sc = document.getElementById('stampContainer');
  if (!sc) return;
  stampDragInitialized = true;
  sc.addEventListener('mousedown', onStampMouseDown);
  sc.addEventListener('touchstart', onStampTouchStart, { passive: false });
}

function onStampMouseDown(e) {
  if (e.button !== 0) return;
  const sc = document.getElementById('stampContainer');
  if (!sc || !sc.innerHTML) return;
  e.preventDefault();
  isDragging = true;
  dragStartX = e.clientX;
  dragStartY = e.clientY;
  dragOrigX = stampDragX;
  dragOrigY = stampDragY;
  sc.style.cursor = 'grabbing';
  document.addEventListener('mousemove', onStampMouseMove);
  document.addEventListener('mouseup', onStampMouseUp);
}

function onStampMouseMove(e) {
  if (!isDragging) return;
  const dx = (e.clientX - dragStartX) / zoomScale;
  const dy = (e.clientY - dragStartY) / zoomScale;
  stampDragX = dragOrigX + dx;
  stampDragY = dragOrigY + dy;
  const sc = document.getElementById('stampContainer');
  if (sc) sc.style.transform = 'translate(' + stampDragX + 'px, ' + stampDragY + 'px)';
}

function onStampMouseUp() {
  if (!isDragging) return;
  isDragging = false;
  const sc = document.getElementById('stampContainer');
  if (sc) sc.style.cursor = 'grab';
  document.removeEventListener('mousemove', onStampMouseMove);
  document.removeEventListener('mouseup', onStampMouseUp);
}

function onStampTouchStart(e) {
  const sc = document.getElementById('stampContainer');
  if (!sc || !sc.innerHTML) return;
  const touch = e.touches[0];
  isDragging = true;
  dragStartX = touch.clientX;
  dragStartY = touch.clientY;
  dragOrigX = stampDragX;
  dragOrigY = stampDragY;
  document.addEventListener('touchmove', onStampTouchMove, { passive: false });
  document.addEventListener('touchend', onStampTouchEnd);
}

function onStampTouchMove(e) {
  if (!isDragging) return;
  e.preventDefault();
  const touch = e.touches[0];
  const dx = (touch.clientX - dragStartX) / zoomScale;
  const dy = (touch.clientY - dragStartY) / zoomScale;
  stampDragX = dragOrigX + dx;
  stampDragY = dragOrigY + dy;
  const sc = document.getElementById('stampContainer');
  if (sc) sc.style.transform = 'translate(' + stampDragX + 'px, ' + stampDragY + 'px)';
}

function onStampTouchEnd() {
  if (!isDragging) return;
  isDragging = false;
  document.removeEventListener('touchmove', onStampTouchMove);
  document.removeEventListener('touchend', onStampTouchEnd);
}

function switchTab(tab) {
  activeTab = tab;
  document.getElementById('tabDetails').className = 'tab-btn' + (tab === 'details' ? ' active' : '');
  document.getElementById('tabBranding').className = 'tab-btn' + (tab === 'branding' ? ' active' : '');
  document.getElementById('tabContentDetails').style.display = tab === 'details' ? 'block' : 'none';
  document.getElementById('tabContentBranding').style.display = tab === 'branding' ? 'block' : 'none';
}

// ========== PRESETS ==========
function initPresets() {
  const grid = document.getElementById('presetGrid');
  grid.innerHTML = INITIAL_NOCS.map(n => {
    const sel = selectedNocId === n.id;
    const short = n.englishCompanyName.split(' ')[0];
    return `<button class="preset-btn${sel ? ' active' : ''}" onclick="selectPreset('${n.id}')" data-id="${n.id}">
      <span class="preset-tag${sel ? ' active' : ' inactive'}">NOC ${n.id}</span>
      <div class="preset-name">${escHtml(short)}</div>
    </button>`;
  }).join('');
}

function selectPreset(id) {
  selectedNocId = id;
  const original = nocs.find(n => n.id === id);
  if (original) {
    editedNoc = JSON.parse(JSON.stringify(original));
    syncFormFields();
    updatePreview();
  }
  initPresets();
  switchTab('details');
}

function syncFormFields() {
  document.getElementById('addresseeTitle').value = editedNoc.addresseeTitle;
  document.getElementById('addresseeCityCountry').value = editedNoc.addresseeCityCountry;
  document.getElementById('employeeName').value = editedNoc.employeeName;
  document.getElementById('nationality').value = editedNoc.nationality;
  document.getElementById('emiratesId').value = editedNoc.emiratesId;
  document.getElementById('date').value = editedNoc.date;
  document.getElementById('sponsorType').value = editedNoc.sponsorType;
  document.getElementById('bodyTemplate').value = editedNoc.bodyTemplate;
  document.getElementById('closingText').value = editedNoc.closingText;
  document.getElementById('signoffCompany').value = editedNoc.signoffCompany;
  document.getElementById('englishCompanyName').value = editedNoc.englishCompanyName;
  document.getElementById('arabicCompanyName').value = editedNoc.arabicCompanyName;
  document.getElementById('logoColor').value = editedNoc.logoColor;
  document.getElementById('logoColorText').value = editedNoc.logoColor;
  document.getElementById('stampText').value = editedNoc.stampText.toUpperCase();
  // Stamp position buttons
  document.getElementById('posCenter').className = 'seg-btn' + (editedNoc.stampPosition === 'center' ? ' active' : '');
  document.getElementById('posRight').className = 'seg-btn' + (editedNoc.stampPosition === 'right' ? ' active' : '');
}

// ========== ACTIONS ==========
function toggleAutoFix() {
  autoFixSpelling = !autoFixSpelling;
  document.getElementById('autoFixToggle').setAttribute('aria-checked', autoFixSpelling);
  updatePreview();
}

function toggleStamp() {
  showStamp = !showStamp;
  document.getElementById('stampToggle').setAttribute('aria-checked', showStamp);
  document.getElementById('stampOptions').style.display = showStamp ? 'block' : 'none';
  updatePreview();
}

function toggleMargins() {
  showMargins = !showMargins;
  document.getElementById('marginToggle').setAttribute('aria-checked', showMargins);
  updatePreview();
}

function toggleHelp() {
  const b = document.getElementById('helpBanner');
  b.style.display = b.style.display === 'none' ? 'block' : 'none';
}

function setStampPosition(pos) {
  editedNoc.stampPosition = pos;
  stampDragX = 0;
  stampDragY = 0;
  document.getElementById('posCenter').className = 'seg-btn' + (pos === 'center' ? ' active' : '');
  document.getElementById('posRight').className = 'seg-btn' + (pos === 'right' ? ' active' : '');
  updatePreview();
}

function zoomIn() { zoomScale = Math.min(1.2, zoomScale + 0.1); updatePreview(); }
function zoomOut() { zoomScale = Math.max(0.4, zoomScale - 0.1); updatePreview(); }
function resetZoom() { zoomScale = 0.7; updatePreview(); }

function handleReset() {
  const original = INITIAL_NOCS.find(n => n.id === selectedNocId);
  if (original) {
    editedNoc = JSON.parse(JSON.stringify(original));
    stampDragX = 0;
    stampDragY = 0;
    syncFormFields();
    updatePreview();
  }
}

function handlePrint() { window.print(); }

async function handleDownloadPdf() {
  const element = document.getElementById('nocA4Page');
  if (!element) return;
  isGeneratingPdf = true;
  const btn = document.getElementById('downloadBtn');
  const txt = document.getElementById('downloadBtnText');
  btn.disabled = true;
  txt.innerHTML = '<span class="spinner"></span> Rendering...';

  try {
    const originalStyle = element.style.cssText;
    element.style.transform = 'none';
    element.style.margin = '0';
    element.style.position = 'relative';
    element.style.left = '0';
    element.style.top = '0';

    const canvas = await html2canvas(element, {
      scale: 3.5, useCORS: true, logging: false,
      backgroundColor: '#ffffff', width: 794, height: 1123,
      windowWidth: 794, windowHeight: 1123
    });

    element.style.cssText = originalStyle;

    const imgData = canvas.toDataURL('image/jpeg', 1.0);
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297, undefined, 'FAST');
    const safeName = editedNoc.englishCompanyName.replace(/[^a-zA-Z0-9]/g, '_');
    pdf.save('NOC_' + safeName + '.pdf');
  } catch (err) {
    console.error('PDF export failed:', err);
    alert('Failed to generate PDF. Please try Print instead.');
  } finally {
    isGeneratingPdf = false;
    btn.disabled = false;
    txt.textContent = 'Download A4 PDF';
  }
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', function() {
  initPresets();
  syncFormFields();
  updatePreview();
  initStampDrag();
  initLogoPicker();
});

// ========== LOGO CATALOG (50+ selectable logos) ==========
const LOGO_CATALOG = [
  { id: 'rana', name: 'RANA Marketing', category: 'Original' },
  { id: 'fjm', name: 'FJM Technical', category: 'Original' },
  { id: 'summer', name: 'Summer City', category: 'Original' },
  { id: 'hassan', name: 'Hassan Ishtiaq', category: 'Original' },
  { id: 'wasique', name: 'Wasique Zahir', category: 'Original' },
  { id: 'amal', name: 'Amal Jannat', category: 'Original' },
  { id: 'shield', name: 'Shield Corp', category: 'Classic' },
  { id: 'diamond', name: 'Diamond Group', category: 'Classic' },
  { id: 'hexagon', name: 'Hexa Solutions', category: 'Classic' },
  { id: 'crown', name: 'Crown Enterprise', category: 'Classic' },
  { id: 'tower', name: 'Tower Construction', category: 'Classic' },
  { id: 'globe', name: 'Global Trade', category: 'Classic' },
  { id: 'arch', name: 'Arch Builders', category: 'Classic' },
  { id: 'peak', name: 'Peak Engineering', category: 'Classic' },
  { id: 'compass', name: 'Compass Advisory', category: 'Modern' },
  { id: 'prism', name: 'Prism Holdings', category: 'Modern' },
  { id: 'vault', name: 'Vault Finance', category: 'Modern' },
  { id: 'apex', name: 'Apex Trading', category: 'Modern' },
  { id: 'nexus', name: 'Nexus Technology', category: 'Modern' },
  { id: 'forge', name: 'Forge Industries', category: 'Modern' },
  { id: 'summit', name: 'Summit Real Estate', category: 'Modern' },
  { id: 'bridge', name: 'Bridge Engineering', category: 'Modern' },
  { id: 'cascade', name: 'Cascade Services', category: 'Modern' },
  { id: 'helix', name: 'Helix Biotech', category: 'Modern' },
  { id: 'anchor', name: 'Anchor Shipping', category: 'Maritime' },
  { id: 'wave', name: 'Wave Marine', category: 'Maritime' },
  { id: 'lighthouse', name: 'Lighthouse Marine', category: 'Maritime' },
  { id: 'phoenix', name: 'Phoenix Rising', category: 'Premium' },
  { id: 'eagle', name: 'Eagle Eye Consulting', category: 'Premium' },
  { id: 'lion', name: 'Lion Group', category: 'Premium' },
  { id: 'falcon', name: 'Falcon Logistics', category: 'Premium' },
  { id: 'lotus', name: 'Lotus Wellness', category: 'Nature' },
  { id: 'palm', name: 'Palm Holdings', category: 'Nature' },
  { id: 'cedar', name: 'Cedar Development', category: 'Nature' },
  { id: 'oasis', name: 'Oasis Group', category: 'Nature' },
  { id: 'sunrise', name: 'Sunrise Properties', category: 'Nature' },
  { id: 'delta', name: 'Delta Energy', category: 'Tech' },
  { id: 'nova', name: 'Nova Software', category: 'Tech' },
  { id: 'pulse', name: 'Pulse Digital', category: 'Tech' },
  { id: 'orbit', name: 'Orbit Systems', category: 'Tech' },
  { id: 'quantum', name: 'Quantum IT', category: 'Tech' },
  { id: 'cipher', name: 'Cipher Security', category: 'Tech' },
  { id: 'flux', name: 'Flux Media', category: 'Tech' },
  { id: 'vertex', name: 'Vertex Analytics', category: 'Tech' },
  { id: 'sentinel', name: 'Sentinel Safety', category: 'Industrial' },
  { id: 'titan', name: 'Titan Manufacturing', category: 'Industrial' },
  { id: 'steelcraft', name: 'Steelcraft Ltd', category: 'Industrial' },
  { id: 'monarch', name: 'Monarch Holdings', category: 'Premium' },
  { id: 'legacy', name: 'Legacy Investments', category: 'Premium' },
  { id: 'zenith', name: 'Zenith Holdings', category: 'Premium' },
  { id: 'crescent', name: 'Crescent International', category: 'Classic' },
  { id: 'starlight', name: 'Starlight Group', category: 'Classic' },
  { id: 'meridian', name: 'Meridian Consulting', category: 'Modern' },
  { id: 'rocket', name: 'Rocket Aerospace', category: 'Aerospace' },
  { id: 'satellite', name: 'Satellite Systems', category: 'Aerospace' },
  { id: 'stratos', name: 'Stratos Aviation', category: 'Aerospace' },
  { id: 'gear', name: 'Gear Automotive', category: 'Automotive' },
  { id: 'piston', name: 'Piston Motors', category: 'Automotive' },
  { id: 'torque', name: 'Torque Engineering', category: 'Automotive' },
  { id: 'harvest', name: 'Harvest Agriculture', category: 'Agriculture' },
  { id: 'sprout', name: 'Sprout Organic', category: 'Agriculture' },
  { id: 'fields', name: 'Green Fields Farm', category: 'Agriculture' },
  { id: 'bolt', name: 'Bolt Energy', category: 'Energy' },
  { id: 'solar', name: 'Solar Dynamics', category: 'Energy' },
  { id: 'turbine', name: 'Turbine Power', category: 'Energy' },
  { id: 'pulsehealth', name: 'Pulse Healthcare', category: 'Healthcare' },
  { id: 'medica', name: 'Medica Solutions', category: 'Healthcare' },
  { id: 'vita', name: 'Vita Wellness', category: 'Healthcare' },
  { id: 'scales', name: 'Scales & Partners', category: 'Legal' },
  { id: 'gavel', name: 'Gavel Associates', category: 'Legal' },
  { id: 'pillar', name: 'Pillar Law Group', category: 'Legal' },
  { id: 'pixel', name: 'Pixel Media', category: 'Media' },
  { id: 'lens', name: 'Lens Productions', category: 'Media' },
  { id: 'canvas', name: 'Canvas Studios', category: 'Media' },
  { id: 'spice', name: 'Spice Kitchen', category: 'Food' },
  { id: 'brew', name: 'Brew & Co', category: 'Food' },
  { id: 'flame', name: 'Flame Grills', category: 'Food' },
  { id: 'palace', name: 'Palace Hospitality', category: 'Hospitality' },
  { id: 'oar', name: 'Oar Resort & Spa', category: 'Hospitality' },
  { id: 'inn', name: 'The Grand Inn', category: 'Hospitality' },
  { id: 'scroll', name: 'Scroll Academy', category: 'Education' },
  { id: 'torch', name: 'Torch Learning', category: 'Education' },
  { id: 'brain', name: 'Brain Trust', category: 'Education' },
  { id: 'haven', name: 'Haven Properties', category: 'RealEstate' },
  { id: 'cornerstone', name: 'Cornerstone Developments', category: 'RealEstate' },
  { id: 'elevate', name: 'Elevate Builders', category: 'RealEstate' },
  { id: 'victory', name: 'Victory Sports', category: 'Sports' },
  { id: 'arena', name: 'Arena Fitness', category: 'Sports' },
  { id: 'sprint', name: 'Sprint Athletics', category: 'Sports' },
  { id: 'stitch', name: 'Stitch Fashion', category: 'Fashion' },
  { id: 'thread', name: 'Thread Couture', category: 'Fashion' },
  { id: 'velvet', name: 'Velvet Designs', category: 'Fashion' },
  { id: 'route', name: 'Route Logistics', category: 'Logistics' },
  { id: 'cargo', name: 'Cargo Express', category: 'Logistics' },
  { id: 'swift', name: 'Swift Couriers', category: 'Logistics' },
  { id: 'column', name: 'Column Architecture', category: 'Architecture' },
  { id: 'beam', name: 'Beam Structures', category: 'Architecture' },
  { id: 'arc', name: 'Arc Design Studio', category: 'Architecture' },
  { id: 'ledger', name: 'Ledger Finance', category: 'Finance' },
  { id: 'bloom', name: 'Bloom Wealth', category: 'Finance' },
  { id: 'chisel', name: 'Chisel Design', category: 'Architecture' },
  { id: 'marble', name: 'Marble Studios', category: 'Premium' },
  { id: 'radar', name: 'Radar Intelligence', category: 'Tech' },
];

function getLogoSvgThumb(id, color) {
  const c = color || '#0f172a';
  const thumbs = {
    shield: `<svg viewBox="0 0 100 100" fill="none"><path d="M50 8 L85 25 V55 C85 75 68 90 50 95 C32 90 15 75 15 55 V25 Z" stroke="${c}" stroke-width="4" fill="${c}11"/><path d="M50 25 L70 35 V55 C70 68 60 78 50 82 C40 78 30 68 30 55 V35 Z" stroke="${c}" stroke-width="2"/><text x="50" y="58" fill="${c}" font-size="20" font-weight="900" text-anchor="middle" font-family="Inter,sans-serif">S</text></svg>`,
    diamond: `<svg viewBox="0 0 100 100" fill="none"><polygon points="50,5 95,50 50,95 5,50" stroke="${c}" stroke-width="4" fill="${c}11"/><polygon points="50,20 80,50 50,80 20,50" stroke="${c}" stroke-width="2"/><text x="50" y="56" fill="${c}" font-size="22" font-weight="900" text-anchor="middle" font-family="Inter,sans-serif">D</text></svg>`,
    hexagon: `<svg viewBox="0 0 100 100" fill="none"><polygon points="50,5 90,27 90,73 50,95 10,73 10,27" stroke="${c}" stroke-width="4" fill="${c}11"/><polygon points="50,20 75,33 75,67 50,80 25,67 25,33" stroke="${c}" stroke-width="2"/><text x="50" y="56" fill="${c}" font-size="20" font-weight="900" text-anchor="middle" font-family="Inter,sans-serif">H</text></svg>`,
    crown: `<svg viewBox="0 0 100 100" fill="none"><path d="M15 70 L15 35 L35 50 L50 25 L65 50 L85 35 L85 70 Z" stroke="${c}" stroke-width="4" fill="${c}11"/><line x1="15" y1="78" x2="85" y2="78" stroke="${c}" stroke-width="4"/><circle cx="15" cy="35" r="4" fill="${c}"/><circle cx="50" cy="25" r="4" fill="${c}"/><circle cx="85" cy="35" r="4" fill="${c}"/></svg>`,
    tower: `<svg viewBox="0 0 100 100" fill="none"><rect x="30" y="20" width="40" height="70" rx="3" stroke="${c}" stroke-width="3" fill="${c}11"/><rect x="38" y="28" width="10" height="10" rx="1" fill="${c}"/><rect x="52" y="28" width="10" height="10" rx="1" fill="${c}"/><rect x="38" y="44" width="10" height="10" rx="1" fill="${c}"/><rect x="52" y="44" width="10" height="10" rx="1" fill="${c}"/><rect x="38" y="60" width="10" height="10" rx="1" fill="${c}"/><rect x="52" y="60" width="10" height="10" rx="1" fill="${c}"/><line x1="50" y1="10" x2="50" y2="20" stroke="${c}" stroke-width="3"/><circle cx="50" cy="8" r="3" fill="${c}"/></svg>`,
    globe: `<svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="38" stroke="${c}" stroke-width="3" fill="${c}11"/><ellipse cx="50" cy="50" rx="18" ry="38" stroke="${c}" stroke-width="2"/><line x1="12" y1="50" x2="88" y2="50" stroke="${c}" stroke-width="2"/><line x1="50" y1="12" x2="50" y2="88" stroke="${c}" stroke-width="1.5" stroke-dasharray="4 3"/><path d="M18 30 Q50 35 82 30" stroke="${c}" stroke-width="1.5" fill="none"/><path d="M18 70 Q50 65 82 70" stroke="${c}" stroke-width="1.5" fill="none"/></svg>`,
    arch: `<svg viewBox="0 0 100 100" fill="none"><path d="M15 85 L15 40 C15 20 50 5 50 5 C50 5 85 20 85 40 L85 85" stroke="${c}" stroke-width="4" fill="${c}11"/><path d="M30 85 L30 45 C30 30 50 18 50 18 C50 18 70 30 70 45 L70 85" stroke="${c}" stroke-width="2"/><rect x="44" y="60" width="12" height="25" rx="2" fill="${c}"/></svg>`,
    peak: `<svg viewBox="0 0 100 100" fill="none"><path d="M10 80 L40 20 L60 45 L75 15 L90 80 Z" stroke="${c}" stroke-width="3" fill="${c}11"/><path d="M10 80 L40 20 L55 40" stroke="${c}" stroke-width="2" fill="none"/><circle cx="75" cy="12" r="5" fill="${c}"/></svg>`,
    compass: `<svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="40" stroke="${c}" stroke-width="3"/><circle cx="50" cy="50" r="32" stroke="${c}" stroke-width="1.5" stroke-dasharray="5 3"/><polygon points="50,18 56,46 50,42 44,46" fill="${c}"/><polygon points="50,82 56,54 50,58 44,54" fill="${c}" opacity="0.4"/><polygon points="18,50 46,44 42,50 46,56" fill="${c}" opacity="0.4"/><polygon points="82,50 54,44 58,50 54,56" fill="${c}"/><circle cx="50" cy="50" r="4" fill="${c}"/><text x="50" y="14" fill="${c}" font-size="8" font-weight="700" text-anchor="middle">N</text></svg>`,
    prism: `<svg viewBox="0 0 100 100" fill="none"><polygon points="50,10 90,75 10,75" stroke="${c}" stroke-width="4" fill="${c}11"/><polygon points="50,28 75,67 25,67" stroke="${c}" stroke-width="2"/><text x="50" y="62" fill="${c}" font-size="18" font-weight="900" text-anchor="middle" font-family="Inter,sans-serif">P</text></svg>`,
    vault: `<svg viewBox="0 0 100 100" fill="none"><rect x="10" y="20" width="80" height="65" rx="8" stroke="${c}" stroke-width="4" fill="${c}11"/><circle cx="50" cy="52" r="18" stroke="${c}" stroke-width="3"/><circle cx="50" cy="52" r="3" fill="${c}"/><line x1="50" y1="34" x2="50" y2="42" stroke="${c}" stroke-width="2.5"/><line x1="50" y1="62" x2="50" y2="70" stroke="${c}" stroke-width="2.5"/><line x1="32" y1="52" x2="40" y2="52" stroke="${c}" stroke-width="2.5"/><line x1="60" y1="52" x2="68" y2="52" stroke="${c}" stroke-width="2.5"/><rect x="14" y="12" width="12" height="10" rx="2" fill="${c}"/><rect x="74" y="12" width="12" height="10" rx="2" fill="${c}"/></svg>`,
    apex: `<svg viewBox="0 0 100 100" fill="none"><polygon points="50,10 90,85 10,85" stroke="${c}" stroke-width="4" fill="${c}11"/><polygon points="50,30 75,75 25,75" stroke="${c}" stroke-width="2"/><text x="50" y="68" fill="${c}" font-size="20" font-weight="900" text-anchor="middle" font-family="Inter,sans-serif">A</text></svg>`,
    nexus: `<svg viewBox="0 0 100 100" fill="none"><circle cx="25" cy="25" r="10" stroke="${c}" stroke-width="3" fill="${c}22"/><circle cx="75" cy="25" r="10" stroke="${c}" stroke-width="3" fill="${c}22"/><circle cx="25" cy="75" r="10" stroke="${c}" stroke-width="3" fill="${c}22"/><circle cx="75" cy="75" r="10" stroke="${c}" stroke-width="3" fill="${c}22"/><line x1="35" y1="25" x2="65" y2="25" stroke="${c}" stroke-width="2.5"/><line x1="35" y1="75" x2="65" y2="75" stroke="${c}" stroke-width="2.5"/><line x1="25" y1="35" x2="25" y2="65" stroke="${c}" stroke-width="2.5"/><line x1="75" y1="35" x2="75" y2="65" stroke="${c}" stroke-width="2.5"/><line x1="33" y1="33" x2="67" y2="67" stroke="${c}" stroke-width="2"/><line x1="67" y1="33" x2="33" y2="67" stroke="${c}" stroke-width="2"/><circle cx="50" cy="50" r="8" fill="${c}"/></svg>`,
    forge: `<svg viewBox="0 0 100 100" fill="none"><path d="M20 65 L40 30 L55 45 L80 20" stroke="${c}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M20 65 L80 65" stroke="${c}" stroke-width="4" stroke-linecap="round"/><path d="M35 65 L35 80" stroke="${c}" stroke-width="4" stroke-linecap="round"/><path d="M65 65 L65 80" stroke="${c}" stroke-width="4" stroke-linecap="round"/><path d="M25 80 L75 80" stroke="${c}" stroke-width="4" stroke-linecap="round"/><circle cx="80" cy="20" r="5" fill="${c}"/></svg>`,
    summit: `<svg viewBox="0 0 100 100" fill="none"><path d="M10 75 L35 25 L55 50 L75 20 L90 75 Z" stroke="${c}" stroke-width="3" fill="${c}11"/><rect x="38" y="55" width="8" height="20" fill="${c}"/><rect x="54" y="45" width="8" height="30" fill="${c}"/><line x1="10" y1="82" x2="90" y2="82" stroke="${c}" stroke-width="3"/></svg>`,
    bridge: `<svg viewBox="0 0 100 100" fill="none"><path d="M5 70 Q50 15 95 70" stroke="${c}" stroke-width="4" fill="none"/><line x1="5" y1="70" x2="95" y2="70" stroke="${c}" stroke-width="3"/><line x1="20" y1="70" x2="20" y2="47" stroke="${c}" stroke-width="2.5"/><line x1="38" y1="70" x2="38" y2="32" stroke="${c}" stroke-width="2.5"/><line x1="50" y1="70" x2="50" y2="25" stroke="${c}" stroke-width="2.5"/><line x1="62" y1="70" x2="62" y2="32" stroke="${c}" stroke-width="2.5"/><line x1="80" y1="70" x2="80" y2="47" stroke="${c}" stroke-width="2.5"/><line x1="5" y1="78" x2="95" y2="78" stroke="${c}" stroke-width="2"/></svg>`,
    cascade: `<svg viewBox="0 0 100 100" fill="none"><path d="M15 20 L50 20 L50 35" stroke="${c}" stroke-width="3" fill="none"/><path d="M15 40 L85 40 L85 55" stroke="${c}" stroke-width="3" fill="none"/><path d="M15 60 L50 60 L50 75" stroke="${c}" stroke-width="3" fill="none"/><path d="M15 80 L85 80" stroke="${c}" stroke-width="3"/><rect x="44" y="35" width="12" height="5" rx="2" fill="${c}"/><rect x="79" y="55" width="12" height="5" rx="2" fill="${c}"/><rect x="44" y="75" width="12" height="5" rx="2" fill="${c}"/></svg>`,
    helix: `<svg viewBox="0 0 100 100" fill="none"><path d="M30 15 C70 15 30 35 70 35 C30 35 70 55 30 55 C70 55 30 75 70 75 C30 75 70 90 30 90" stroke="${c}" stroke-width="3" fill="none"/><circle cx="30" cy="15" r="4" fill="${c}"/><circle cx="70" cy="35" r="4" fill="${c}"/><circle cx="30" cy="55" r="4" fill="${c}"/><circle cx="70" cy="75" r="4" fill="${c}"/><circle cx="30" cy="90" r="4" fill="${c}"/></svg>`,
    anchor: `<svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="22" r="10" stroke="${c}" stroke-width="3" fill="${c}22"/><line x1="50" y1="32" x2="50" y2="85" stroke="${c}" stroke-width="3.5"/><line x1="30" y1="55" x2="70" y2="55" stroke="${c}" stroke-width="3"/><path d="M22 70 Q22 90 50 85 Q78 90 78 70" stroke="${c}" stroke-width="3" fill="none"/></svg>`,
    wave: `<svg viewBox="0 0 100 100" fill="none"><path d="M5 40 Q18 25 30 40 Q42 55 55 40 Q68 25 80 40 Q88 50 95 40" stroke="${c}" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M5 55 Q18 40 30 55 Q42 70 55 55 Q68 40 80 55 Q88 65 95 55" stroke="${c}" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M5 70 Q18 58 30 70 Q42 82 55 70 Q68 58 80 70 Q88 78 95 70" stroke="${c}" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`,
    lighthouse: `<svg viewBox="0 0 100 100" fill="none"><path d="M40 85 L44 35 L56 35 L60 85 Z" stroke="${c}" stroke-width="3" fill="${c}11"/><rect x="36" y="28" width="28" height="10" rx="3" stroke="${c}" stroke-width="3" fill="${c}22"/><rect x="42" y="22" width="16" height="8" rx="2" fill="${c}"/><line x1="50" y1="18" x2="50" y2="10" stroke="${c}" stroke-width="2.5"/><line x1="35" y1="22" x2="25" y2="15" stroke="${c}" stroke-width="2"/><line x1="65" y1="22" x2="75" y2="15" stroke="${c}" stroke-width="2"/><line x1="50" y1="22" x2="50" y2="12" stroke="${c}" stroke-width="2"/><rect x="42" y="50" width="6" height="8" fill="${c}"/><rect x="52" y="50" width="6" height="8" fill="${c}"/><rect x="42" y="64" width="6" height="8" fill="${c}"/><rect x="52" y="64" width="6" height="8" fill="${c}"/><line x1="30" y1="85" x2="70" y2="85" stroke="${c}" stroke-width="3"/></svg>`,
    phoenix: `<svg viewBox="0 0 100 100" fill="none"><path d="M50 15 C35 30 15 40 15 65 C15 80 30 85 50 85 C70 85 85 80 85 65 C85 40 65 30 50 15 Z" stroke="${c}" stroke-width="3" fill="${c}11"/><path d="M50 25 L55 45 L70 35 L58 50 L80 55 L58 60 L70 75 L55 60 L50 80 L45 60 L30 75 L42 60 L20 55 L42 50 L30 35 L45 45 Z" stroke="${c}" stroke-width="1.5" fill="${c}33"/></svg>`,
    eagle: `<svg viewBox="0 0 100 100" fill="none"><path d="M50 15 L20 45 L10 42 L15 55 L8 60 L22 58 L30 70 L40 65 L50 80 L60 65 L70 70 L78 58 L92 60 L85 55 L90 42 L80 45 Z" stroke="${c}" stroke-width="3" fill="${c}11"/><circle cx="42" cy="38" r="2.5" fill="${c}"/><circle cx="58" cy="38" r="2.5" fill="${c}"/><path d="M45 44 L50 50 L55 44" stroke="${c}" stroke-width="2" fill="none"/></svg>`,
    lion: `<svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="48" r="28" stroke="${c}" stroke-width="3" fill="${c}11"/><path d="M28 25 C28 12 72 12 72 25" stroke="${c}" stroke-width="3" fill="none"/><path d="M22 32 C18 20 35 5 50 5 C65 5 82 20 78 32" stroke="${c}" stroke-width="2" fill="${c}15"/><circle cx="40" cy="42" r="3" fill="${c}"/><circle cx="60" cy="42" r="3" fill="${c}"/><ellipse cx="50" cy="52" rx="5" ry="4" fill="${c}"/><path d="M42 58 Q50 66 58 58" stroke="${c}" stroke-width="2" fill="none"/></svg>`,
    falcon: `<svg viewBox="0 0 100 100" fill="none"><path d="M50 10 L15 55 L30 50 L10 75 L45 60 L50 90 L55 60 L90 75 L70 50 L85 55 Z" stroke="${c}" stroke-width="3" fill="${c}11"/><circle cx="50" cy="35" r="6" stroke="${c}" stroke-width="2"/><circle cx="50" cy="35" r="2" fill="${c}"/></svg>`,
    lotus: `<svg viewBox="0 0 100 100" fill="none"><ellipse cx="50" cy="55" rx="15" ry="25" stroke="${c}" stroke-width="2" fill="${c}15"/><ellipse cx="30" cy="55" rx="15" ry="22" transform="rotate(-20 30 55)" stroke="${c}" stroke-width="2" fill="${c}10"/><ellipse cx="70" cy="55" rx="15" ry="22" transform="rotate(20 70 55)" stroke="${c}" stroke-width="2" fill="${c}10"/><ellipse cx="18" cy="60" rx="12" ry="18" transform="rotate(-35 18 60)" stroke="${c}" stroke-width="1.5" fill="${c}08"/><ellipse cx="82" cy="60" rx="12" ry="18" transform="rotate(35 82 60)" stroke="${c}" stroke-width="1.5" fill="${c}08"/><line x1="50" y1="78" x2="50" y2="92" stroke="${c}" stroke-width="3"/><line x1="38" y1="88" x2="62" y2="88" stroke="${c}" stroke-width="2"/></svg>`,
    palm: `<svg viewBox="0 0 100 100" fill="none"><path d="M50 90 L50 45" stroke="${c}" stroke-width="4" stroke-linecap="round"/><path d="M50 45 C30 20 10 25 5 15" stroke="${c}" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M50 45 C50 15 60 5 75 5" stroke="${c}" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M50 45 C70 20 90 25 95 15" stroke="${c}" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M50 45 C35 25 20 15 15 5" stroke="${c}" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M50 45 C65 25 80 15 85 5" stroke="${c}" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M50 45 C45 20 55 5 65 10" stroke="${c}" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M50 45 C55 20 45 5 35 10" stroke="${c}" stroke-width="2" fill="none" stroke-linecap="round"/><ellipse cx="50" cy="48" rx="6" ry="8" fill="${c}"/></svg>`,
    cedar: `<svg viewBox="0 0 100 100" fill="none"><path d="M50 10 L30 40 L38 40 L22 60 L32 60 L18 80 L82 80 L68 60 L78 60 L62 40 L70 40 Z" stroke="${c}" stroke-width="3" fill="${c}11"/><rect x="46" y="80" width="8" height="12" fill="${c}"/></svg>`,
    oasis: `<svg viewBox="0 0 100 100" fill="none"><ellipse cx="50" cy="70" rx="40" ry="12" stroke="${c}" stroke-width="2" fill="${c}11"/><path d="M50 60 L50 25" stroke="${c}" stroke-width="3"/><path d="M50 25 C30 15 20 30 15 25" stroke="${c}" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M50 25 C70 15 80 30 85 25" stroke="${c}" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M50 30 C35 22 25 35 18 30" stroke="${c}" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M50 30 C65 22 75 35 82 30" stroke="${c}" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M50 38 C38 30 28 42 22 38" stroke="${c}" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M50 38 C62 30 72 42 78 38" stroke="${c}" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`,
    sunrise: `<svg viewBox="0 0 100 100" fill="none"><path d="M10 65 Q30 65 50 65 Q70 65 90 65" stroke="${c}" stroke-width="3"/><circle cx="50" cy="65" r="20" stroke="${c}" stroke-width="3" fill="${c}11"/><line x1="50" y1="38" x2="50" y2="25" stroke="${c}" stroke-width="2.5" stroke-linecap="round"/><line x1="30" y1="48" x2="22" y2="38" stroke="${c}" stroke-width="2" stroke-linecap="round"/><line x1="70" y1="48" x2="78" y2="38" stroke="${c}" stroke-width="2" stroke-linecap="round"/><line x1="50" y1="38" x2="65" y2="28" stroke="${c}" stroke-width="2" stroke-linecap="round"/><line x1="50" y1="38" x2="35" y2="28" stroke="${c}" stroke-width="2" stroke-linecap="round"/><line x1="10" y1="65" x2="90" y2="65" stroke="${c}" stroke-width="2" stroke-dasharray="0"/></svg>`,
    delta: `<svg viewBox="0 0 100 100" fill="none"><polygon points="50,10 90,85 10,85" stroke="${c}" stroke-width="4" fill="${c}11"/><line x1="30" y1="70" x2="50" y2="30" stroke="${c}" stroke-width="2.5"/><line x1="70" y1="70" x2="50" y2="30" stroke="${c}" stroke-width="2.5"/><line x1="30" y1="70" x2="70" y2="70" stroke="${c}" stroke-width="2.5"/><text x="50" y="65" fill="${c}" font-size="14" font-weight="900" text-anchor="middle" font-family="Inter,sans-serif">Δ</text></svg>`,
    nova: `<svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="35" stroke="${c}" stroke-width="3" fill="${c}11"/><circle cx="50" cy="50" r="8" fill="${c}"/><line x1="50" y1="15" x2="50" y2="28" stroke="${c}" stroke-width="3" stroke-linecap="round"/><line x1="50" y1="72" x2="50" y2="85" stroke="${c}" stroke-width="3" stroke-linecap="round"/><line x1="15" y1="50" x2="28" y2="50" stroke="${c}" stroke-width="3" stroke-linecap="round"/><line x1="72" y1="50" x2="85" y2="50" stroke="${c}" stroke-width="3" stroke-linecap="round"/><line x1="25" y1="25" x2="34" y2="34" stroke="${c}" stroke-width="2" stroke-linecap="round"/><line x1="66" y1="66" x2="75" y2="75" stroke="${c}" stroke-width="2" stroke-linecap="round"/><line x1="75" y1="25" x2="66" y2="34" stroke="${c}" stroke-width="2" stroke-linecap="round"/><line x1="34" y1="66" x2="25" y2="75" stroke="${c}" stroke-width="2" stroke-linecap="round"/></svg>`,
    pulse: `<svg viewBox="0 0 100 100" fill="none"><polyline points="5,50 20,50 28,20 38,80 48,35 58,65 68,30 78,55 95,50" stroke="${c}" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="50" cy="50" r="40" stroke="${c}" stroke-width="2" stroke-dasharray="6 4" fill="none"/></svg>`,
    orbit: `<svg viewBox="0 0 100 100" fill="none"><ellipse cx="50" cy="50" rx="40" ry="15" stroke="${c}" stroke-width="2.5" transform="rotate(0 50 50)"/><ellipse cx="50" cy="50" rx="40" ry="15" stroke="${c}" stroke-width="2.5" transform="rotate(60 50 50)"/><ellipse cx="50" cy="50" rx="40" ry="15" stroke="${c}" stroke-width="2.5" transform="rotate(120 50 50)"/><circle cx="50" cy="50" r="6" fill="${c}"/></svg>`,
    quantum: `<svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="6" fill="${c}"/><circle cx="50" cy="50" r="20" stroke="${c}" stroke-width="2" fill="none"/><circle cx="50" cy="50" r="35" stroke="${c}" stroke-width="1.5" fill="none" stroke-dasharray="4 3"/><circle cx="70" cy="35" r="4" fill="${c}"/><circle cx="30" cy="65" r="4" fill="${c}"/><circle cx="50" cy="15" r="4" fill="${c}"/><path d="M50 50 L70 35 L30 65 Z" stroke="${c}" stroke-width="1.5" fill="none"/></svg>`,
    cipher: `<svg viewBox="0 0 100 100" fill="none"><rect x="20" y="40" width="60" height="40" rx="8" stroke="${c}" stroke-width="3" fill="${c}11"/><circle cx="38" cy="58" r="6" stroke="${c}" stroke-width="2.5"/><line x1="38" y1="64" x2="38" y2="74" stroke="${c}" stroke-width="3" stroke-linecap="round"/><path d="M55 55 L65 55 L65 68 L55 68 Z" stroke="${c}" stroke-width="2" fill="none"/><circle cx="60" cy="61" r="2" fill="${c}"/><rect x="35" y="22" width="30" height="18" rx="4" stroke="${c}" stroke-width="3" fill="${c}11"/><line x1="50" y1="22" x2="50" y2="15" stroke="${c}" stroke-width="2"/></svg>`,
    flux: `<svg viewBox="0 0 100 100" fill="none"><path d="M20 80 C20 40 40 20 80 20" stroke="${c}" stroke-width="4" fill="none" stroke-linecap="round"/><path d="M20 60 C20 35 35 20 60 20" stroke="${c}" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M20 40 C20 28 28 20 40 20" stroke="${c}" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="80" cy="20" r="5" fill="${c}"/><circle cx="60" cy="20" r="4" fill="${c}"/><circle cx="40" cy="20" r="3" fill="${c}"/></svg>`,
    vertex: `<svg viewBox="0 0 100 100" fill="none"><polygon points="50,10 85,35 85,70 50,90 15,70 15,35" stroke="${c}" stroke-width="3" fill="${c}11"/><polygon points="50,25 70,38 70,62 50,75 30,62 30,38" stroke="${c}" stroke-width="2"/><circle cx="50" cy="50" r="5" fill="${c}"/></svg>`,
    sentinel: `<svg viewBox="0 0 100 100" fill="none"><path d="M50 8 L85 25 V55 C85 75 68 92 50 95 C32 92 15 75 15 55 V25 Z" stroke="${c}" stroke-width="4" fill="${c}11"/><path d="M50 28 L50 62 M35 45 L65 45 M35 60 L65 60" stroke="${c}" stroke-width="2.5" stroke-linecap="round"/><circle cx="50" cy="45" r="12" stroke="${c}" stroke-width="2"/><circle cx="50" cy="45" r="3" fill="${c}"/></svg>`,
    titan: `<svg viewBox="0 0 100 100" fill="none"><rect x="15" y="30" width="70" height="50" rx="5" stroke="${c}" stroke-width="4" fill="${c}11"/><line x1="15" y1="45" x2="85" y2="45" stroke="${c}" stroke-width="2.5"/><text x="50" y="72" fill="${c}" font-size="22" font-weight="900" text-anchor="middle" font-family="Inter,sans-serif">T</text><rect x="35" y="15" width="30" height="18" rx="3" stroke="${c}" stroke-width="2.5" fill="${c}15"/><line x1="42" y1="20" x2="58" y2="20" stroke="${c}" stroke-width="2"/><line x1="42" y1="25" x2="52" y2="25" stroke="${c}" stroke-width="1.5"/></svg>`,
    steelcraft: `<svg viewBox="0 0 100 100" fill="none"><rect x="10" y="10" width="35" height="35" rx="3" stroke="${c}" stroke-width="3" fill="${c}15"/><rect x="55" y="10" width="35" height="35" rx="3" stroke="${c}" stroke-width="3" fill="${c}15"/><rect x="10" y="55" width="35" height="35" rx="3" stroke="${c}" stroke-width="3" fill="${c}15"/><rect x="55" y="55" width="35" height="35" rx="3" stroke="${c}" stroke-width="3" fill="${c}15"/><path d="M27 10 L27 45 M10 27 L45 27" stroke="${c}" stroke-width="2"/><path d="M72 10 L72 45 M55 27 L90 27" stroke="${c}" stroke-width="2"/><path d="M27 55 L27 90 M10 72 L45 72" stroke="${c}" stroke-width="2"/><path d="M72 55 L72 90 M55 72 L90 72" stroke="${c}" stroke-width="2"/></svg>`,
    monarch: `<svg viewBox="0 0 100 100" fill="none"><path d="M15 65 L15 35 L30 48 L50 20 L70 48 L85 35 L85 65 Z" stroke="${c}" stroke-width="3" fill="${c}15"/><path d="M20 65 L80 65" stroke="${c}" stroke-width="3"/><circle cx="30" cy="35" r="3.5" fill="${c}"/><circle cx="50" cy="20" r="3.5" fill="${c}"/><circle cx="70" cy="35" r="3.5" fill="${c}"/><path d="M30 75 L50 90 L70 75" stroke="${c}" stroke-width="2" fill="${c}11"/><text x="50" y="84" fill="${c}" font-size="12" font-weight="900" text-anchor="middle" font-family="Inter,sans-serif">M</text></svg>`,
    legacy: `<svg viewBox="0 0 100 100" fill="none"><path d="M25 20 L25 80 M25 20 L75 20 M25 40 L60 40" stroke="${c}" stroke-width="4" stroke-linecap="round"/><path d="M60 40 L75 20 L75 80 L60 80 M60 60 L75 60" stroke="${c}" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`,
    zenith: `<svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="40" stroke="${c}" stroke-width="3"/><path d="M15 55 Q32 25 50 20 Q68 25 85 55" stroke="${c}" stroke-width="3" fill="${c}11"/><line x1="50" y1="15" x2="50" y2="30" stroke="${c}" stroke-width="2.5"/><line x1="50" y1="50" x2="50" y2="85" stroke="${c}" stroke-width="2"/><line x1="20" y1="50" x2="80" y2="50" stroke="${c}" stroke-width="1.5" stroke-dasharray="4 3"/></svg>`,
    crescent: `<svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="38" stroke="${c}" stroke-width="3"/><circle cx="65" cy="42" r="28" stroke="${c}" stroke-width="3" fill="#fff"/><circle cx="35" cy="22" r="4" fill="${c}"/><circle cx="25" cy="45" r="3" fill="${c}"/><circle cx="30" cy="68" r="2.5" fill="${c}"/></svg>`,
    starlight: `<svg viewBox="0 0 100 100" fill="none"><polygon points="50,8 58,38 90,38 64,56 73,88 50,68 27,88 36,56 10,38 42,38" stroke="${c}" stroke-width="3" fill="${c}11"/><circle cx="50" cy="50" r="12" stroke="${c}" stroke-width="2"/><circle cx="50" cy="50" r="3" fill="${c}"/></svg>`,
    meridian: `<svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="40" stroke="${c}" stroke-width="3"/><ellipse cx="50" cy="50" rx="20" ry="40" stroke="${c}" stroke-width="2"/><ellipse cx="50" cy="50" rx="40" ry="20" stroke="${c}" stroke-width="2"/><circle cx="50" cy="50" r="4" fill="${c}"/></svg>`,
    rocket: `<svg viewBox="0 0 100 100" fill="none"><path d="M50 8 C50 8 70 25 70 55 L60 70 L50 65 L40 70 L30 55 C30 25 50 8 50 8 Z" stroke="${c}" stroke-width="3" fill="${c}11"/><circle cx="50" cy="38" r="6" stroke="${c}" stroke-width="2"/><circle cx="50" cy="38" r="2" fill="${c}"/><path d="M30 55 L18 65 L28 60" stroke="${c}" stroke-width="2" fill="${c}22"/><path d="M70 55 L82 65 L72 60" stroke="${c}" stroke-width="2" fill="${c}22"/><path d="M42 70 L40 88 L50 82 L60 88 L58 70" stroke="${c}" stroke-width="2" fill="${c}22"/></svg>`,
    satellite: `<svg viewBox="0 0 100 100" fill="none"><rect x="35" y="35" width="30" height="30" rx="4" stroke="${c}" stroke-width="3" fill="${c}11" transform="rotate(45 50 50)"/><circle cx="50" cy="50" r="8" fill="${c}"/><line x1="22" y1="22" x2="38" y2="38" stroke="${c}" stroke-width="2.5"/><line x1="78" y1="22" x2="62" y2="38" stroke="${c}" stroke-width="2.5"/><line x1="22" y1="78" x2="38" y2="62" stroke="${c}" stroke-width="2.5"/><line x1="78" y1="78" x2="62" y2="62" stroke="${c}" stroke-width="2.5"/><rect x="12" y="12" width="14" height="14" rx="2" fill="${c}"/><rect x="74" y="12" width="14" height="14" rx="2" fill="${c}"/><rect x="12" y="74" width="14" height="14" rx="2" fill="${c}"/><rect x="74" y="74" width="14" height="14" rx="2" fill="${c}"/></svg>`,
    stratos: `<svg viewBox="0 0 100 100" fill="none"><path d="M50 12 L80 50 L70 52 L85 75 L65 70 L50 88 L35 70 L15 75 L30 52 L20 50 Z" stroke="${c}" stroke-width="3" fill="${c}11"/><line x1="50" y1="35" x2="50" y2="75" stroke="${c}" stroke-width="1.5" stroke-dasharray="3 3"/><line x1="35" y1="55" x2="65" y2="55" stroke="${c}" stroke-width="1.5" stroke-dasharray="3 3"/><circle cx="50" cy="50" r="5" fill="${c}"/></svg>`,
    gear: `<svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="18" stroke="${c}" stroke-width="3" fill="${c}11"/><circle cx="50" cy="50" r="8" fill="${c}"/><path d="M50 12 L54 20 L46 20 Z M50 88 L54 80 L46 80 Z M12 50 L20 54 L20 46 Z M88 50 L80 54 L80 46 Z M23 23 L29 28 L26 31 Z M77 23 L71 28 L74 31 Z M23 77 L29 72 L26 69 Z M77 77 L71 72 L74 69 Z" fill="${c}"/><circle cx="50" cy="50" r="32" stroke="${c}" stroke-width="3" fill="none"/></svg>`,
    piston: `<svg viewBox="0 0 100 100" fill="none"><rect x="20" y="25" width="60" height="50" rx="6" stroke="${c}" stroke-width="3" fill="${c}11"/><rect x="30" y="35" width="40" height="30" rx="3" stroke="${c}" stroke-width="2"/><circle cx="50" cy="50" r="10" stroke="${c}" stroke-width="2.5"/><circle cx="50" cy="50" r="3" fill="${c}"/><line x1="50" y1="25" x2="50" y2="15" stroke="${c}" stroke-width="3" stroke-linecap="round"/><circle cx="50" cy="12" r="4" stroke="${c}" stroke-width="2" fill="${c}22"/><line x1="20" y1="50" x2="10" y2="50" stroke="${c}" stroke-width="2.5" stroke-linecap="round"/><line x1="80" y1="50" x2="90" y2="50" stroke="${c}" stroke-width="2.5" stroke-linecap="round"/></svg>`,
    torque: `<svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="35" stroke="${c}" stroke-width="3" fill="none"/><path d="M50 15 A35 35 0 0 1 85 50" stroke="${c}" stroke-width="6" stroke-linecap="round"/><path d="M85 50 L78 42 M85 50 L78 58" stroke="${c}" stroke-width="3" stroke-linecap="round"/><circle cx="50" cy="50" r="12" stroke="${c}" stroke-width="2"/><circle cx="50" cy="50" r="4" fill="${c}"/><line x1="38" y1="50" x2="15" y2="50" stroke="${c}" stroke-width="2" stroke-dasharray="4 3"/></svg>`,
    harvest: `<svg viewBox="0 0 100 100" fill="none"><path d="M50 80 L50 30" stroke="${c}" stroke-width="3"/><path d="M50 30 C35 18 20 25 15 18" stroke="${c}" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M50 30 C65 18 80 25 85 18" stroke="${c}" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M50 40 C38 30 25 36 20 30" stroke="${c}" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M50 40 C62 30 75 36 80 30" stroke="${c}" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M50 50 C40 42 30 47 25 42" stroke="${c}" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M50 50 C60 42 70 47 75 42" stroke="${c}" stroke-width="2" fill="none" stroke-linecap="round"/><ellipse cx="50" cy="25" rx="8" ry="12" fill="${c}"/><path d="M30 80 Q50 90 70 80" stroke="${c}" stroke-width="3" fill="none"/></svg>`,
    sprout: `<svg viewBox="0 0 100 100" fill="none"><path d="M50 85 L50 45" stroke="${c}" stroke-width="3"/><path d="M50 45 C30 30 15 40 10 25 C25 25 40 30 50 45" stroke="${c}" stroke-width="2.5" fill="${c}22"/><path d="M50 45 C70 30 85 40 90 25 C75 25 60 30 50 45" stroke="${c}" stroke-width="2.5" fill="${c}22"/><path d="M50 55 C38 45 25 52 20 42" stroke="${c}" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M50 55 C62 45 75 52 80 42" stroke="${c}" stroke-width="2" fill="none" stroke-linecap="round"/><ellipse cx="50" cy="40" rx="4" ry="6" fill="${c}"/><circle cx="50" cy="38" r="2" fill="white"/></svg>`,
    fields: `<svg viewBox="0 0 100 100" fill="none"><path d="M10 60 L50 40 L90 60" stroke="${c}" stroke-width="3" fill="none"/><path d="M10 60 L50 80 L90 60" stroke="${c}" stroke-width="2" fill="${c}11"/><path d="M10 60 L10 85 L50 95 L90 85 L90 60" stroke="${c}" stroke-width="2" fill="${c}08"/><line x1="50" y1="40" x2="50" y2="30" stroke="${c}" stroke-width="2"/><circle cx="50" cy="26" r="5" fill="${c}"/><line x1="25" y1="50" x2="25" y2="42" stroke="${c}" stroke-width="1.5"/><circle cx="25" cy="39" r="3" fill="${c}"/><line x1="75" y1="50" x2="75" y2="42" stroke="${c}" stroke-width="1.5"/><circle cx="75" cy="39" r="3" fill="${c}"/></svg>`,
    bolt: `<svg viewBox="0 0 100 100" fill="none"><polygon points="55,5 25,50 45,50 38,95 75,42 52,42" stroke="${c}" stroke-width="3" fill="${c}22"/><line x1="30" y1="5" x2="30" y2="15" stroke="${c}" stroke-width="2" stroke-linecap="round"/><line x1="20" y1="10" x2="20" y2="18" stroke="${c}" stroke-width="2" stroke-linecap="round"/><line x1="40" y1="8" x2="40" y2="14" stroke="${c}" stroke-width="2" stroke-linecap="round"/><line x1="65" y1="82" x2="65" y2="92" stroke="${c}" stroke-width="2" stroke-linecap="round"/><line x1="75" y1="86" x2="75" y2="94" stroke="${c}" stroke-width="2" stroke-linecap="round"/></svg>`,
    solar: `<svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="16" fill="${c}"/><circle cx="50" cy="50" r="22" stroke="${c}" stroke-width="2" fill="none"/><line x1="50" y1="8" x2="50" y2="22" stroke="${c}" stroke-width="3" stroke-linecap="round"/><line x1="50" y1="78" x2="50" y2="92" stroke="${c}" stroke-width="3" stroke-linecap="round"/><line x1="8" y1="50" x2="22" y2="50" stroke="${c}" stroke-width="3" stroke-linecap="round"/><line x1="78" y1="50" x2="92" y2="50" stroke="${c}" stroke-width="3" stroke-linecap="round"/><line x1="20" y1="20" x2="30" y2="30" stroke="${c}" stroke-width="2.5" stroke-linecap="round"/><line x1="70" y1="70" x2="80" y2="80" stroke="${c}" stroke-width="2.5" stroke-linecap="round"/><line x1="80" y1="20" x2="70" y2="30" stroke="${c}" stroke-width="2.5" stroke-linecap="round"/><line x1="30" y1="70" x2="20" y2="80" stroke="${c}" stroke-width="2.5" stroke-linecap="round"/></svg>`,
    turbine: `<svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="38" stroke="${c}" stroke-width="3" fill="none"/><path d="M50 50 C50 30 65 18 50 10" stroke="${c}" stroke-width="3" fill="none"/><path d="M50 50 C68 58 82 45 90 50" stroke="${c}" stroke-width="3" fill="none"/><path d="M50 50 C42 68 55 82 50 90" stroke="${c}" stroke-width="3" fill="none"/><circle cx="50" cy="50" r="6" fill="${c}"/><circle cx="50" cy="50" r="3" fill="white"/></svg>`,
    pulsehealth: `<svg viewBox="0 0 100 100" fill="none"><rect x="20" y="20" width="60" height="60" rx="10" stroke="${c}" stroke-width="3" fill="${c}11"/><line x1="50" y1="35" x2="50" y2="65" stroke="${c}" stroke-width="5" stroke-linecap="round"/><line x1="35" y1="50" x2="65" y2="50" stroke="${c}" stroke-width="5" stroke-linecap="round"/><circle cx="50" cy="50" r="25" stroke="${c}" stroke-width="1.5" fill="none" stroke-dasharray="4 3"/></svg>`,
    medica: `<svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="38" stroke="${c}" stroke-width="3" fill="${c}11"/><path d="M35 35 Q35 25 50 25 Q65 25 65 35 L65 42 L35 42 Z" stroke="${c}" stroke-width="2.5" fill="none"/><line x1="50" y1="42" x2="50" y2="60" stroke="${c}" stroke-width="3"/><line x1="40" y1="50" x2="60" y2="50" stroke="${c}" stroke-width="3"/><line x1="35" y1="68" x2="65" y2="68" stroke="${c}" stroke-width="2"/><line x1="40" y1="75" x2="60" y2="75" stroke="${c}" stroke-width="2"/></svg>`,
    vita: `<svg viewBox="0 0 100 100" fill="none"><path d="M50 80 C50 80 15 55 15 35 C15 20 30 12 42 18 C46 20 50 25 50 25 C50 25 54 20 58 18 C70 12 85 20 85 35 C85 55 50 80 50 80 Z" stroke="${c}" stroke-width="3" fill="${c}22"/><path d="M30 45 L42 55 L70 35" stroke="${c}" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    scales: `<svg viewBox="0 0 100 100" fill="none"><line x1="50" y1="10" x2="50" y2="80" stroke="${c}" stroke-width="3"/><line x1="20" y1="30" x2="80" y2="30" stroke="${c}" stroke-width="3"/><path d="M20 30 L15 55 L35 55 Z" stroke="${c}" stroke-width="2" fill="${c}15"/><path d="M80 30 L65 55 L85 55 Z" stroke="${c}" stroke-width="2" fill="${c}15"/><line x1="35" y1="80" x2="65" y2="80" stroke="${c}" stroke-width="4" stroke-linecap="round"/><circle cx="50" cy="10" r="5" fill="${c}"/></svg>`,
    gavel: `<svg viewBox="0 0 100 100" fill="none"><rect x="20" y="55" width="60" height="8" rx="2" fill="${c}" transform="rotate(-30 50 59)"/><line x1="58" y1="42" x2="75" y2="75" stroke="${c}" stroke-width="4" stroke-linecap="round"/><rect x="15" y="72" width="70" height="12" rx="3" stroke="${c}" stroke-width="2.5" fill="${c}11"/><path d="M50 15 L50 50" stroke="${c}" stroke-width="2.5"/><circle cx="50" cy="12" r="4" fill="${c}"/></svg>`,
    pillar: `<svg viewBox="0 0 100 100" fill="none"><rect x="25" y="20" width="50" height="65" rx="2" stroke="${c}" stroke-width="3" fill="${c}11"/><rect x="20" y="15" width="60" height="10" rx="2" stroke="${c}" stroke-width="2.5" fill="${c}22"/><rect x="20" y="80" width="60" height="10" rx="2" stroke="${c}" stroke-width="2.5" fill="${c}22"/><line x1="38" y1="20" x2="38" y2="80" stroke="${c}" stroke-width="2"/><line x1="50" y1="20" x2="50" y2="80" stroke="${c}" stroke-width="2"/><line x1="62" y1="20" x2="62" y2="80" stroke="${c}" stroke-width="2"/></svg>`,
    pixel: `<svg viewBox="0 0 100 100" fill="none"><rect x="10" y="10" width="25" height="25" fill="${c}"/><rect x="40" y="10" width="25" height="25" fill="${c}" opacity="0.7"/><rect x="70" y="10" width="20" height="25" fill="${c}" opacity="0.4"/><rect x="10" y="40" width="25" height="25" fill="${c}" opacity="0.6"/><rect x="40" y="40" width="25" height="25" fill="${c}"/><rect x="70" y="40" width="20" height="25" fill="${c}" opacity="0.5"/><rect x="10" y="70" width="25" height="20" fill="${c}" opacity="0.3"/><rect x="40" y="70" width="25" height="20" fill="${c}" opacity="0.8"/><rect x="70" y="70" width="20" height="20" fill="${c}"/></svg>`,
    lens: `<svg viewBox="0 0 100 100" fill="none"><circle cx="42" cy="50" r="28" stroke="${c}" stroke-width="3" fill="${c}11"/><circle cx="42" cy="50" r="18" stroke="${c}" stroke-width="2"/><circle cx="42" cy="50" r="8" fill="${c}"/><line x1="62" y1="70" x2="85" y2="90" stroke="${c}" stroke-width="4" stroke-linecap="round"/></svg>`,
    canvas: `<svg viewBox="0 0 100 100" fill="none"><rect x="15" y="15" width="70" height="70" rx="4" stroke="${c}" stroke-width="3" fill="${c}11"/><circle cx="35" cy="40" r="10" fill="${c}" opacity="0.3"/><rect x="50" y="30" width="25" height="40" rx="2" fill="${c}" opacity="0.2"/><path d="M20 70 L35 50 L50 60 L65 40 L80 55" stroke="${c}" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>`,
    spice: `<svg viewBox="0 0 100 100" fill="none"><ellipse cx="50" cy="65" rx="25" ry="18" stroke="${c}" stroke-width="3" fill="${c}11"/><path d="M50 47 L50 15" stroke="${c}" stroke-width="3"/><circle cx="50" cy="12" r="5" fill="${c}"/><path d="M38 20 C30 22 28 32 30 35" stroke="${c}" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M62 20 C70 22 72 32 70 35" stroke="${c}" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M42 15 C36 12 32 18 33 22" stroke="${c}" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M58 15 C64 12 68 18 67 22" stroke="${c}" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`,
    brew: `<svg viewBox="0 0 100 100" fill="none"><rect x="25" y="30" width="40" height="55" rx="4" stroke="${c}" stroke-width="3" fill="${c}11"/><path d="M65 40 L75 40 C80 40 82 45 82 50 L82 60 C82 65 80 70 75 70 L65 70" stroke="${c}" stroke-width="2.5" fill="none"/><path d="M25 45 L15 45 C12 45 10 48 10 52 L10 62 C10 66 12 68 15 68 L25 68" stroke="${c}" stroke-width="2.5" fill="none"/><path d="M32 25 C32 18 38 15 45 15 C52 15 58 18 58 25" stroke="${c}" stroke-width="2" fill="none"/><path d="M35 22 C38 18 48 18 50 22" stroke="${c}" stroke-width="1.5" fill="none"/></svg>`,
    flame: `<svg viewBox="0 0 100 100" fill="none"><path d="M50 8 C50 8 75 30 75 55 C75 72 64 85 50 85 C36 85 25 72 25 55 C25 30 50 8 50 8 Z" stroke="${c}" stroke-width="3" fill="${c}15"/><path d="M50 35 C50 35 62 45 62 58 C62 68 56 75 50 75 C44 75 38 68 38 58 C38 45 50 35 50 35 Z" stroke="${c}" stroke-width="2" fill="${c}22"/></svg>`,
    palace: `<svg viewBox="0 0 100 100" fill="none"><rect x="15" y="40" width="70" height="45" rx="2" stroke="${c}" stroke-width="3" fill="${c}11"/><rect x="25" y="55" width="12" height="15" rx="1" fill="${c}"/><rect x="44" y="55" width="12" height="30" rx="2" fill="${c}"/><rect x="63" y="55" width="12" height="15" rx="1" fill="${c}"/><path d="M15 40 L50 15 L85 40" stroke="${c}" stroke-width="3" fill="none"/><rect x="42" y="20" width="16" height="20" rx="2" stroke="${c}" stroke-width="2"/><circle cx="50" cy="28" r="4" fill="${c}"/><line x1="25" y1="48" x2="33" y2="48" stroke="${c}" stroke-width="1.5"/><line x1="67" y1="48" x2="75" y2="48" stroke="${c}" stroke-width="1.5"/></svg>`,
    oar: `<svg viewBox="0 0 100 100" fill="none"><line x1="15" y1="85" x2="85" y2="15" stroke="${c}" stroke-width="4" stroke-linecap="round"/><path d="M75 20 C80 12 95 10 90 25 L85 35 L70 30 Z" stroke="${c}" stroke-width="2" fill="${c}22"/><circle cx="18" cy="82" r="4" fill="${c}"/><path d="M30 70 Q50 50 70 30" stroke="${c}" stroke-width="1.5" fill="none" stroke-dasharray="4 3"/></svg>`,
    inn: `<svg viewBox="0 0 100 100" fill="none"><rect x="15" y="30" width="70" height="55" rx="3" stroke="${c}" stroke-width="3" fill="${c}11"/><path d="M10 30 L50 10 L90 30" stroke="${c}" stroke-width="3" fill="${c}08"/><rect x="25" y="45" width="15" height="12" rx="1" fill="${c}"/><rect x="60" y="45" width="15" height="12" rx="1" fill="${c}"/><rect x="40" y="55" width="20" height="30" rx="3" stroke="${c}" stroke-width="2" fill="none"/><circle cx="55" cy="70" r="2" fill="${c}"/><rect x="25" y="65" width="15" height="12" rx="1" fill="${c}"/><rect x="60" y="65" width="15" height="12" rx="1" fill="${c}"/></svg>`,
    scroll: `<svg viewBox="0 0 100 100" fill="none"><path d="M30 15 C18 15 18 30 18 30 L18 80 C18 80 25 75 30 75 L75 75 C85 75 85 65 85 65 L85 20 C85 12 78 15 75 15 Z" stroke="${c}" stroke-width="3" fill="${c}11"/><line x1="30" y1="30" x2="65" y2="30" stroke="${c}" stroke-width="2"/><line x1="30" y1="40" x2="65" y2="40" stroke="${c}" stroke-width="2"/><line x1="30" y1="50" x2="55" y2="50" stroke="${c}" stroke-width="2"/><line x1="30" y1="60" x2="50" y2="60" stroke="${c}" stroke-width="1.5"/></svg>`,
    torch: `<svg viewBox="0 0 100 100" fill="none"><rect x="42" y="35" width="16" height="50" rx="3" stroke="${c}" stroke-width="3" fill="${c}11"/><path d="M50 35 C35 25 30 15 35 8 C40 2 48 5 50 12 C52 5 60 2 65 8 C70 15 65 25 50 35 Z" stroke="${c}" stroke-width="2.5" fill="${c}22"/><line x1="42" y1="45" x2="58" y2="45" stroke="${c}" stroke-width="1.5"/><line x1="42" y1="52" x2="58" y2="52" stroke="${c}" stroke-width="1.5"/><line x1="42" y1="59" x2="58" y2="59" stroke="${c}" stroke-width="1.5"/></svg>`,
    brain: `<svg viewBox="0 0 100 100" fill="none"><path d="M50 85 L50 50" stroke="${c}" stroke-width="3"/><path d="M50 50 C30 50 18 38 18 28 C18 15 30 10 38 15 C40 8 48 5 50 5 C52 5 60 8 62 15 C70 10 82 15 82 28 C82 38 70 50 50 50" stroke="${c}" stroke-width="3" fill="${c}11"/><path d="M50 50 C40 55 32 62 28 72" stroke="${c}" stroke-width="2" fill="none"/><path d="M50 50 C60 55 68 62 72 72" stroke="${c}" stroke-width="2" fill="none"/><path d="M50 55 C45 58 38 60 32 60" stroke="${c}" stroke-width="1.5" fill="none" stroke-dasharray="3 2"/><path d="M50 55 C55 58 62 60 68 60" stroke="${c}" stroke-width="1.5" fill="none" stroke-dasharray="3 2"/></svg>`,
    haven: `<svg viewBox="0 0 100 100" fill="none"><path d="M50 15 L15 45 L15 85 L85 85 L85 45 Z" stroke="${c}" stroke-width="3" fill="${c}11"/><rect x="38" y="55" width="24" height="30" rx="2" stroke="${c}" stroke-width="2"/><line x1="50" y1="55" x2="50" y2="85" stroke="${c}" stroke-width="1.5"/><rect x="22" y="50" width="12" height="12" rx="1" fill="${c}"/><rect x="66" y="50" width="12" height="12" rx="1" fill="${c}"/><rect x="22" y="68" width="12" height="12" rx="1" fill="${c}"/><rect x="66" y="68" width="12" height="12" rx="1" fill="${c}"/></svg>`,
    cornerstone: `<svg viewBox="0 0 100 100" fill="none"><rect x="15" y="15" width="35" height="35" stroke="${c}" stroke-width="3" fill="${c}22"/><rect x="55" y="15" width="30" height="35" stroke="${c}" stroke-width="3" fill="${c}15"/><rect x="15" y="55" width="30" height="30" stroke="${c}" stroke-width="3" fill="${c}15"/><rect x="55" y="55" width="30" height="30" stroke="${c}" stroke-width="3" fill="${c}22"/><text x="32" y="38" fill="${c}" font-size="14" font-weight="900" text-anchor="middle" font-family="Inter,sans-serif">C</text></svg>`,
    elevate: `<svg viewBox="0 0 100 100" fill="none"><path d="M50 15 L15 85 L85 85 Z" stroke="${c}" stroke-width="3" fill="${c}08"/><rect x="35" y="50" width="30" height="35" stroke="${c}" stroke-width="2.5" fill="${c}11"/><rect x="42" y="60" width="16" height="25" rx="2" fill="${c}"/><polygon points="50,20 40,35 60,35" fill="${c}"/><line x1="50" y1="35" x2="50" y2="15" stroke="${c}" stroke-width="2" stroke-linecap="round"/><line x1="42" y1="25" x2="58" y2="25" stroke="${c}" stroke-width="2" stroke-linecap="round"/></svg>`,
    victory: `<svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="38" stroke="${c}" stroke-width="3" fill="${c}11"/><path d="M30 55 L45 40 L55 50 L75 28" stroke="${c}" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M70 28 L78 28 L78 36" stroke="${c}" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    arena: `<svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="38" stroke="${c}" stroke-width="3" fill="${c}11"/><circle cx="50" cy="50" r="28" stroke="${c}" stroke-width="2"/><circle cx="50" cy="50" r="15" stroke="${c}" stroke-width="2"/><circle cx="50" cy="50" r="4" fill="${c}"/><line x1="50" y1="12" x2="50" y2="88" stroke="${c}" stroke-width="1.5" stroke-dasharray="3 3"/><line x1="12" y1="50" x2="88" y2="50" stroke="${c}" stroke-width="1.5" stroke-dasharray="3 3"/></svg>`,
    sprint: `<svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="38" stroke="${c}" stroke-width="3" fill="${c}11"/><path d="M35 65 L45 45 L55 55 L75 30" stroke="${c}" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="75" cy="28" r="4" fill="${c}"/><path d="M30 72 L42 72" stroke="${c}" stroke-width="3" stroke-linecap="round"/><path d="M25 78 L40 78" stroke="${c}" stroke-width="2" stroke-linecap="round"/></svg>`,
    stitch: `<svg viewBox="0 0 100 100" fill="none"><path d="M25 20 L25 80" stroke="${c}" stroke-width="3"/><path d="M25 20 L75 20 L75 35" stroke="${c}" stroke-width="3" fill="none"/><path d="M25 35 L60 35" stroke="${c}" stroke-width="2"/><path d="M35 20 L35 35" stroke="${c}" stroke-width="1.5"/><path d="M48 20 L48 35" stroke="${c}" stroke-width="1.5"/><path d="M60 20 L60 35" stroke="${c}" stroke-width="1.5"/><circle cx="35" cy="48" r="10" stroke="${c}" stroke-width="2" fill="${c}15"/><path d="M35 42 L35 54 M29 48 L41 48" stroke="${c}" stroke-width="2"/><line x1="25" y1="65" x2="75" y2="65" stroke="${c}" stroke-width="2" stroke-dasharray="5 3"/><line x1="25" y1="72" x2="65" y2="72" stroke="${c}" stroke-width="1.5" stroke-dasharray="5 3"/></svg>`,
    thread: `<svg viewBox="0 0 100 100" fill="none"><ellipse cx="50" cy="50" rx="35" ry="38" stroke="${c}" stroke-width="3" fill="${c}11"/><path d="M35 20 C35 20 65 20 65 20" stroke="${c}" stroke-width="2"/><path d="M30 30 Q50 40 70 30" stroke="${c}" stroke-width="2" fill="none"/><path d="M28 45 Q50 55 72 45" stroke="${c}" stroke-width="1.5" fill="none" stroke-dasharray="4 3"/><path d="M30 60 Q50 70 70 60" stroke="${c}" stroke-width="1.5" fill="none"/><path d="M35 75 Q50 82 65 75" stroke="${c}" stroke-width="1" fill="none"/></svg>`,
    velvet: `<svg viewBox="0 0 100 100" fill="none"><path d="M50 10 C20 10 10 35 10 50 C10 75 30 90 50 90 C70 90 90 75 90 50 C90 35 80 10 50 10 Z" stroke="${c}" stroke-width="3" fill="${c}11"/><path d="M50 25 C35 25 25 38 25 50 C25 65 35 75 50 75 C65 75 75 65 75 50 C75 38 65 25 50 25 Z" stroke="${c}" stroke-width="2"/><text x="50" y="55" fill="${c}" font-size="20" font-weight="900" text-anchor="middle" font-family="serif" font-style="italic">V</text></svg>`,
    route: `<svg viewBox="0 0 100 100" fill="none"><path d="M15 75 L15 50 L40 50 L40 25 L65 25 L65 50 L85 50 L85 25" stroke="${c}" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="15" cy="75" r="5" fill="${c}"/><circle cx="85" cy="25" r="5" fill="${c}"/><circle cx="40" cy="50" r="3" fill="${c}"/><circle cx="65" cy="25" r="3" fill="${c}"/></svg>`,
    cargo: `<svg viewBox="0 0 100 100" fill="none"><rect x="10" y="30" width="55" height="40" rx="3" stroke="${c}" stroke-width="3" fill="${c}11"/><path d="M65 45 L85 45 L90 55 L90 70 L65 70" stroke="${c}" stroke-width="3" fill="${c}15"/><circle cx="25" cy="75" r="7" stroke="${c}" stroke-width="2.5"/><circle cx="25" cy="75" r="2.5" fill="${c}"/><circle cx="75" cy="75" r="7" stroke="${c}" stroke-width="2.5"/><circle cx="75" cy="75" r="2.5" fill="${c}"/><rect x="18" y="38" width="12" height="10" rx="1" fill="${c}"/><rect x="35" y="38" width="12" height="10" rx="1" fill="${c}"/></svg>`,
    swift: `<svg viewBox="0 0 100 100" fill="none"><path d="M75 15 L25 50 L55 50 L30 85 L80 45 L50 45 Z" stroke="${c}" stroke-width="3" fill="${c}15"/></svg>`,
    column: `<svg viewBox="0 0 100 100" fill="none"><rect x="20" y="25" width="60" height="55" rx="2" stroke="${c}" stroke-width="3" fill="${c}11"/><rect x="15" y="18" width="70" height="12" rx="3" stroke="${c}" stroke-width="2.5" fill="${c}22"/><rect x="15" y="78" width="70" height="10" rx="3" stroke="${c}" stroke-width="2.5" fill="${c}22"/><path d="M30 30 L30 75 M40 30 L40 75 M50 30 L50 75 M60 30 L60 75 M70 30 L70 75" stroke="${c}" stroke-width="1.5" opacity="0.5"/></svg>`,
    beam: `<svg viewBox="0 0 100 100" fill="none"><path d="M10 85 L50 15 L90 85" stroke="${c}" stroke-width="4" fill="none"/><line x1="30" y1="50" x2="70" y2="50" stroke="${c}" stroke-width="2.5"/><line x1="40" y1="68" x2="60" y2="68" stroke="${c}" stroke-width="2"/><line x1="50" y1="15" x2="50" y2="35" stroke="${c}" stroke-width="2" stroke-dasharray="3 3"/><circle cx="50" cy="15" r="3" fill="${c}"/></svg>`,
    arc: `<svg viewBox="0 0 100 100" fill="none"><path d="M15 80 L15 35 C15 15 50 5 50 5 C50 5 85 15 85 35 L85 80" stroke="${c}" stroke-width="4" fill="${c}11"/><line x1="15" y1="80" x2="85" y2="80" stroke="${c}" stroke-width="3"/><line x1="15" y1="55" x2="85" y2="55" stroke="${c}" stroke-width="2"/><line x1="35" y1="30" x2="35" y2="55" stroke="${c}" stroke-width="2"/><line x1="65" y1="30" x2="65" y2="55" stroke="${c}" stroke-width="2"/><circle cx="50" cy="20" r="4" fill="${c}"/></svg>`,
    ledger: `<svg viewBox="0 0 100 100" fill="none"><rect x="15" y="12" width="70" height="76" rx="4" stroke="${c}" stroke-width="3" fill="${c}11"/><line x1="30" y1="12" x2="30" y2="88" stroke="${c}" stroke-width="2"/><line x1="35" y1="30" x2="75" y2="30" stroke="${c}" stroke-width="1.5"/><line x1="35" y1="42" x2="75" y2="42" stroke="${c}" stroke-width="1.5"/><line x1="35" y1="54" x2="75" y2="54" stroke="${c}" stroke-width="1.5"/><line x1="35" y1="66" x2="65" y2="66" stroke="${c}" stroke-width="1.5"/><text x="22" y="35" fill="${c}" font-size="8" font-weight="700" text-anchor="middle">1</text><text x="22" y="47" fill="${c}" font-size="8" font-weight="700" text-anchor="middle">2</text><text x="22" y="59" fill="${c}" font-size="8" font-weight="700" text-anchor="middle">3</text></svg>`,
    bloom: `<svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="40" r="12" fill="${c}"/><ellipse cx="50" cy="20" rx="10" ry="14" stroke="${c}" stroke-width="2" fill="${c}15"/><ellipse cx="32" cy="30" rx="10" ry="14" transform="rotate(-30 32 30)" stroke="${c}" stroke-width="2" fill="${c}15"/><ellipse cx="68" cy="30" rx="10" ry="14" transform="rotate(30 68 30)" stroke="${c}" stroke-width="2" fill="${c}15"/><ellipse cx="35" cy="50" rx="10" ry="14" transform="rotate(-60 35 50)" stroke="${c}" stroke-width="2" fill="${c}15"/><ellipse cx="65" cy="50" rx="10" ry="14" transform="rotate(60 65 50)" stroke="${c}" stroke-width="2" fill="${c}15"/><path d="M50 52 L50 88" stroke="${c}" stroke-width="3"/><path d="M50 65 C40 58 32 62 28 58" stroke="${c}" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M50 72 C60 65 68 69 72 65" stroke="${c}" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`,
    chisel: `<svg viewBox="0 0 100 100" fill="none"><path d="M20 80 L50 15 L80 80" stroke="${c}" stroke-width="3" fill="${c}08"/><line x1="32" y1="60" x2="68" y2="60" stroke="${c}" stroke-width="2"/><line x1="38" y1="48" x2="62" y2="48" stroke="${c}" stroke-width="1.5"/><rect x="42" y="70" width="16" height="12" rx="2" fill="${c}"/><circle cx="50" cy="30" r="6" stroke="${c}" stroke-width="2" fill="${c}15"/></svg>`,
    marble: `<svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="40" stroke="${c}" stroke-width="3" fill="${c}08"/><circle cx="50" cy="50" r="30" stroke="${c}" stroke-width="1.5"/><path d="M50 10 Q70 30 50 50 Q30 70 50 90" stroke="${c}" stroke-width="2" fill="none"/><path d="M10 50 Q30 30 50 50 Q70 70 90 50" stroke="${c}" stroke-width="2" fill="none"/><circle cx="50" cy="50" r="8" fill="${c}"/></svg>`,
    radar: `<svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="38" stroke="${c}" stroke-width="2.5"/><circle cx="50" cy="50" r="28" stroke="${c}" stroke-width="1.5"/><circle cx="50" cy="50" r="18" stroke="${c}" stroke-width="1"/><circle cx="50" cy="50" r="4" fill="${c}"/><path d="M50 50 L50 12" stroke="${c}" stroke-width="2.5"/><path d="M50 50 L82 30" stroke="${c}" stroke-width="2" stroke-dasharray="4 3"/><circle cx="65" cy="35" r="3" fill="${c}"/></svg>`,
  };
  return thumbs[id] || `<svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="35" stroke="${c}" stroke-width="3"/><text x="50" y="56" fill="${c}" font-size="18" font-weight="900" text-anchor="middle">?</text></svg>`;
}

// ========== LOGO PICKER ==========
let logoPickerOpen = false;

function initLogoPicker() {
  renderLogoPickerGrid();
}

function renderLogoPickerGrid() {
  const grid = document.getElementById('logoPickerGrid');
  if (!grid) return;
  const color = editedNoc ? editedNoc.logoColor : '#0f172a';
  const current = editedNoc ? editedNoc.logoType : '';

  let html = '';
  const categories = {};
  LOGO_CATALOG.forEach(logo => {
    if (!categories[logo.category]) categories[logo.category] = [];
    categories[logo.category].push(logo);
  });

  Object.keys(categories).forEach(cat => {
    categories[cat].forEach(logo => {
      const isActive = logo.id === current;
      html += `<button class="logo-picker-item${isActive ? ' active' : ''}" onclick="selectLogo('${logo.id}')" title="${escHtml(logo.name)}">
        <div class="logo-thumb">${getLogoSvgThumb(logo.id, isActive ? '#2563eb' : color)}</div>
        <span class="logo-item-label">${escHtml(logo.name)}</span>
      </button>`;
    });
  });

  grid.innerHTML = html;
  const countEl = document.getElementById('logoPickerCount');
  if (countEl) countEl.textContent = LOGO_CATALOG.length + ' logos';
}

function toggleLogoPicker() {
  logoPickerOpen = !logoPickerOpen;
  const panel = document.getElementById('logoPickerPanel');
  if (!panel) return;
  panel.style.display = logoPickerOpen ? 'flex' : 'none';
  if (logoPickerOpen) renderLogoPickerGrid();
}

function selectLogo(id) {
  if (editedNoc) {
    editedNoc.logoType = id;
    stampDragX = 0;
    stampDragY = 0;
    updatePreview();
    renderLogoPickerGrid();
  }
}
