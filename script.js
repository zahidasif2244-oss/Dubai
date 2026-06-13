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
    default: return '';
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
});
