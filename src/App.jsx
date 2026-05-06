import React, { useState, useEffect } from 'react';
import heroBgImage from '../public/images/Gemini_Generated_Image_b4g7ub4g7ub4g7ub.png';

const dict = {
  en: {
    navClassics: "Classics",
    navMalt: "Malt Series",
    navBoom: "The Lineup",
    navStory: "Story",
    navContact: "Contact",
    heroTag: "Call of the wild",
    heroTitle1: "AWAKEN THE",
    heroTitle2: "BISON",
    heroTitle3: "WITHIN",
    heroDesc: "Tear into a can of the meanest energy drink on the planet. Uncompromising flavor, pure adrenaline.",
    heroBtn: "EXPLORE THE ARSENAL",
    
    classicsTitle: "The Classics",
    classicsSub: "The original formulas that started it all.",
    maltTitle: "Malt Series",
    maltSub: "Refreshing power, unmatched taste.",
    boomTitle: "The Boom Lineup",
    boomSub: "Explosive flavors for maximum performance.",
    
    storyTag: "Since 2016",
    storyTitle: "Born To Dominate.",
    storyP1: "Mayar Bison wasn't created to just be another drink on the shelf. It was forged for those who refuse to settle. Present in over 20 countries worldwide, our uncompromising formula delivers exactly what you need, exactly when you need it.",
    storyP2: "No crashes. No jitters. Just pure, unadulterated performance backed by premium ingredients.",
    
    contactTitle: "Contact Us",
    contactSub: "Reach out to the beast directly.",
    contactInfoTitle: "Contact Information",
    addressLabel: "Address",
    phoneLabel: "Phone",
    emailLabel: "Email",
    
    footerDesc: "The meanest energy drink on the planet. Forged for those who refuse to settle. Present in over 20 countries.",
    footerExplore: "Explore",
    footerConnect: "Connect",
    footerContact: "Contact",
    footerRights: "MAYAR BISON ENERGY. ALL RIGHTS RESERVED.",
    devTag: "Developed by Fanari Labs - Click to Contact",
    
    productNames: {
      original: "Original Blend",
      icecoffee: "Iced Coffee",
      v2: "Bison V2",
      bluemalt: "Blue Malt",
      greenapple: "Green Apple",
      strawberry: "Strawberry",
      pineapple: "Pineapple",
      boomOrig: "Boom Original",
      boomMango: "Boom Mango",
      boomMojito: "Boom Mojito",
      boomPine: "Boom Pineapple",
      gorilla: "Gorilla"
    },
    products: {
      original: "Raw energy, pure focus.",
      icecoffee: "Smooth roast, aggressive kick.",
      v2: "Double the power.",
      bluemalt: "Crisp and invigorating.",
      greenapple: "Sour impact, sweet finish.",
      strawberry: "Fruity energy burst.",
      pineapple: "Tropical dominance.",
      boomOrig: "The classic boom.",
      boomMango: "Sweet, tropical energy.",
      boomMojito: "Minty fresh power.",
      boomPine: "Golden rush.",
      gorilla: "Unleash the beast."
    }
  },
  tr: {
    navClassics: "Klasikler",
    navMalt: "Malt Serisi",
    navBoom: "Ürün Serisi",
    navStory: "Hikayemiz",
    navContact: "İletişim",
    heroTag: "Vahşi Doğanın Çağrısı",
    heroTitle1: "İÇİNDEKİ",
    heroTitle2: "BİZON'U",
    heroTitle3: "UYANDIR",
    heroDesc: "Gezegendeki en vahşi enerji içeceğini deneyimle. Tavizsiz lezzet, saf adrenalin.",
    heroBtn: "CEPHANELİĞİ KEŞFET",
    
    classicsTitle: "Klasikler",
    classicsSub: "Her şeyi başlatan orijinal formüller.",
    maltTitle: "Malt Serisi",
    maltSub: "Ferahlatıcı güç, eşsiz tat.",
    boomTitle: "Boom Serisi",
    boomSub: "Maksimum performans için patlayıcı tatlar.",
    
    storyTag: "2016'dan Beri",
    storyTitle: "Hükmetmek İçin Doğdu.",
    storyP1: "Mayar Bison, raftaki sıradan bir içecek olmak için yaratılmadı. Yetinmeyi reddedenler için dövüldü. Dünya çapında 20'den fazla ülkede bulunan tavizsiz formülümüz, tam olarak ihtiyacınız olanı, tam ihtiyacınız olduğu anda sunar.",
    storyP2: "Düşüş yok. Titreme yok. Sadece birinci sınıf içeriklerle desteklenen saf, katıksız performans.",
    
    contactTitle: "İletişim",
    contactSub: "Bizimle doğrudan iletişime geçin.",
    contactInfoTitle: "İletişim Bilgileri",
    addressLabel: "Adres",
    phoneLabel: "Telefon",
    emailLabel: "E-posta",

    footerDesc: "Gezegendeki en vahşi enerji içeceği. Yetinmeyi reddedenler için dövüldü. 20'den fazla ülkede.",
    footerExplore: "Keşfet",
    footerConnect: "Bağlan",
    footerContact: "İletişim",
    footerRights: "MAYAR BISON ENERGY. TÜM HAKLARI SAKLIDIR.",
    devTag: "Fanari Labs Tarafından Geliştirildi - İletişim İçin Tıklayın",
    
    productNames: {
      original: "Orijinal Karışım",
      icecoffee: "Buzlu Kahve",
      v2: "Bizon V2",
      bluemalt: "Mavi Malt",
      greenapple: "Yeşil Elma",
      strawberry: "Çilek",
      pineapple: "Ananas",
      boomOrig: "Boom Orijinal",
      boomMango: "Boom Mango",
      boomMojito: "Boom Mojito",
      boomPine: "Boom Ananas",
      gorilla: "Gorilla"
    },
    products: {
      original: "Saf enerji, tam odaklanma.",
      icecoffee: "Pürüzsüz kavurma, agresif vuruş.",
      v2: "Gücü ikiye katla.",
      bluemalt: "Gevrek ve canlandırıcı.",
      greenapple: "Ekşi etki, tatlı bitiş.",
      strawberry: "Meyveli enerji patlaması.",
      pineapple: "Tropikal hakimiyet.",
      boomOrig: "Klasik patlama.",
      boomMango: "Tatlı, tropikal enerji.",
      boomMojito: "Nane ferahlığında güç.",
      boomPine: "Altın hücum.",
      gorilla: "İçindeki canavarı serbest bırak."
    }
  },
  ar: {
    navClassics: "الكلاسيكيات",
    navMalt: "سلسلة الشعير",
    navBoom: "مجموعة بوم",
    navStory: "قصتنا",
    navContact: "اتصل بنا",
    heroTag: "نداء الطبيعة",
    heroTitle1: "أيقظ",
    heroTitle2: "البيسون",
    heroTitle3: "بداخلك",
    heroDesc: "تذوق مشروب الطاقة الأشرس على وجه الأرض. نكهة لا تقبل المساومة، أدرينالين نقي.",
    heroBtn: "استكشف الترسانة",
    
    classicsTitle: "الكلاسيكيات",
    classicsSub: "الصيغ الأصلية التي بدأت كل شيء.",
    maltTitle: "سلسلة الشعير",
    maltSub: "قوة منعشة، طعم لا يضاهى.",
    boomTitle: "مجموعة بوم",
    boomSub: "نكهات متفجرة لأقصى أداء.",
    
    storyTag: "منذ 2016",
    storyTitle: "ولد ليهيمن.",
    storyP1: "لم يُصنع مايار بيسون ليكون مجرد مشروب آخر على الرف. لقد صُنع لأولئك الذين يرفضون الاستسلام. متواجدون في أكثر من 20 دولة حول العالم، تركيبتنا التي لا تقبل المساومة تقدم لك ما تحتاجه بالضبط، في الوقت الذي تحتاجه فيه.",
    storyP2: "لا انهيار. لا توتر. فقط أداء نقي وخالص مدعوم بمكونات ممتازة.",
    
    contactTitle: "تواصل معنا",
    contactSub: "تواصل مع الوحش مباشرة.",
    contactInfoTitle: "معلومات الاتصال",
    addressLabel: "العنوان",
    phoneLabel: "الهاتف",
    emailLabel: "البريد الإلكتروني",

    footerDesc: "مشروب الطاقة الأشرس على وجه الأرض. صُنع لأولئك الذين يرفضون الاستسلام. متواجدون في أكثر من 20 دولة.",
    footerExplore: "استكشف",
    footerConnect: "تواصل",
    footerContact: "اتصل بنا",
    footerRights: "مايار بيسون للطاقة. جميع الحقوق محفوظة.",
    devTag: "تم التطوير بواسطة Fanari Labs - انقر للتواصل",
    
    productNames: {
      original: "المزيج الأصلي",
      icecoffee: "قهوة مثلجة",
      v2: "بيسون V2",
      bluemalt: "شعير أزرق",
      greenapple: "تفاح أخضر",
      strawberry: "فراولة",
      pineapple: "أناناس",
      boomOrig: "بوم الأصلي",
      boomMango: "بوم مانجو",
      boomMojito: "بوم موهيتو",
      boomPine: "بوم أناناس",
      gorilla: "غوريلا"
    },
    products: {
      original: "طاقة خام، تركيز نقي.",
      icecoffee: "تحميص سلس، دفعة قوية.",
      v2: "ضاعف القوة.",
      bluemalt: "منعش ومنشط.",
      greenapple: "تأثير حامض، نهاية حلوة.",
      strawberry: "انفجار طاقة الفواكه.",
      pineapple: "الهيمنة الاستوائية.",
      boomOrig: "الانفجار الكلاسيكي.",
      boomMango: "طاقة استوائية حلوة.",
      boomMojito: "قوة النعناع المنعشة.",
      boomPine: "الاندفاع الذهبي.",
      gorilla: "أطلق العنان للوحش."
    }
  }
};

function App() {
  const [showDevModal, setShowDevModal] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState('en');
  const t = dict[lang];

  const langFlags = {
    en: { label: 'EN', src: 'https://flagcdn.com/w20/us.png' },
    tr: { label: 'TR', src: 'https://flagcdn.com/w20/tr.png' },
    ar: { label: 'AR', src: 'https://flagcdn.com/w20/sa.png' }
  };

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const handleClickOutside = () => setShowLangMenu(false);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
        <a href="#" className="nav-logo">
          <img src="/images/mayarbison_logo-removebg-preview (1).png" alt="Mayar Bison Logo" />
        </a>

        <div className="nav-actions-mobile">
          <div className="lang-selector-wrap">
            <button className="lang-btn" onClick={(e) => { e.stopPropagation(); setShowLangMenu(!showLangMenu); }}>
              <img src={langFlags[lang].src} alt={lang} style={{ width: '20px', borderRadius: '2px' }} />
              {langFlags[lang].label} <span className="arrow">▼</span>
            </button>
            {showLangMenu && (
              <div className="lang-dropdown">
                 <button onClick={() => { setLang('en'); setShowLangMenu(false); setIsMenuOpen(false); }}>
                   <img src="https://flagcdn.com/w20/us.png" alt="EN" /> EN
                 </button>
                 <button onClick={() => { setLang('tr'); setShowLangMenu(false); setIsMenuOpen(false); }}>
                   <img src="https://flagcdn.com/w20/tr.png" alt="TR" /> TR
                 </button>
                 <button onClick={() => { setLang('ar'); setShowLangMenu(false); setIsMenuOpen(false); }}>
                   <img src="https://flagcdn.com/w20/sa.png" alt="AR" /> AR
                 </button>
              </div>
            )}
          </div>
          
          <button className="menu-toggle" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>
        </div>

        <div className={`nav-controls ${isMenuOpen ? 'active' : ''}`}>
          <div className="nav-links">
            <a href="#classics" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t.navClassics}</a>
            <a href="#malt" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t.navMalt}</a>
            <a href="#boom" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t.navBoom}</a>
            <a href="#story" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t.navStory}</a>
            <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>{t.navContact}</a>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section className="hero">
          <img src={heroBgImage} alt="Awaken the Bison" className="hero-bg-img" />
          <div className="hero-gradient"></div>
          <div className="hero-content">
            <span className="hero-tag">{t.heroTag}</span>
            <h1 className="hero-title">
              {t.heroTitle1}<br/>
              <span>{t.heroTitle2}</span><br/>
              {t.heroTitle3}
            </h1>
            <p className="hero-desc">{t.heroDesc}</p>
            <a href="#classics" className="btn-primary">{t.heroBtn}</a>
          </div>
        </section>

        {/* CLASSICS */}
        <section id="classics" className="section section-classics">
          <div className="section-header">
            <h2 className="section-title">{t.classicsTitle}</h2>
            <p className="section-subtitle">{t.classicsSub}</p>
          </div>
          <div className="product-grid" style={{ direction: 'ltr' }}>
            {[
              { name: t.productNames.original, desc: t.products.original, img: '/images/bison-drink1.png' },
              { name: t.productNames.icecoffee, desc: t.products.icecoffee, img: '/images/bison-icecoffe.png' },
              { name: t.productNames.v2, desc: t.products.v2, img: '/images/bison-v2.png' }
            ].map((item, i) => (
              <div className="product-item" key={i}>
                <div className="product-img-wrap"><img src={item.img} alt={item.name} className="product-can" /></div>
                <h3 className="product-name">{item.name}</h3>
                <p className="product-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MALT */}
        <section id="malt" className="section section-malt">
          <div className="section-header">
            <h2 className="section-title">{t.maltTitle}</h2>
            <p className="section-subtitle">{t.maltSub}</p>
          </div>
          <div className="product-grid" style={{ direction: 'ltr' }}>
            {[
              { name: t.productNames.bluemalt, desc: t.products.bluemalt, img: '/images/malt-bluewhite.png' },
              { name: t.productNames.greenapple, desc: t.products.greenapple, img: '/images/malt-greenapple.png' },
              { name: t.productNames.strawberry, desc: t.products.strawberry, img: '/images/malt-strawberry.png' },
              { name: t.productNames.pineapple, desc: t.products.pineapple, img: '/images/malt-pineapple.png' }
            ].map((item, i) => (
              <div className="product-item" key={i}>
                <div className="product-img-wrap"><img src={item.img} alt={item.name} className="product-can" /></div>
                <h3 className="product-name">{item.name}</h3>
                <p className="product-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BOOM */}
        <section id="boom" className="section section-boom">
          <div className="section-header">
            <h2 className="section-title">{t.boomTitle}</h2>
            <p className="section-subtitle">{t.boomSub}</p>
          </div>
          <div className="product-grid" style={{ direction: 'ltr' }}>
            {[
              { name: t.productNames.boomOrig, desc: t.products.boomOrig, img: '/images/boomoriginal.png' },
              { name: t.productNames.boomMango, desc: t.products.boomMango, img: '/images/boommango.png' },
              { name: t.productNames.boomMojito, desc: t.products.boomMojito, img: '/images/boommojito.png' },
              { name: t.productNames.boomPine, desc: t.products.boomPine, img: '/images/boompineapple.png' },
              { name: t.productNames.gorilla, desc: t.products.gorilla, img: '/images/gorilla1.png' }
            ].map((item, i) => (
              <div className="product-item" key={i}>
                <div className="product-img-wrap"><img src={item.img} alt={item.name} className="product-can" /></div>
                <h3 className="product-name">{item.name}</h3>
                <p className="product-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* STORY */}
        <section id="story" className="section section-story">
          <div className="story-wrapper">
            <div className="story-content">
              <span className="hero-tag">{t.storyTag}</span>
              <div className="claw-quote">""</div>
              <h2 className="story-title" dangerouslySetInnerHTML={{ __html: t.storyTitle.replace('To', 'To<br/>') }}></h2>
              <p className="story-text">{t.storyP1}</p>
              <p className="story-text">{t.storyP2}</p>
            </div>
            <div className="story-media">
              <div className="video-container">
                <video autoPlay muted loop playsInline>
                  <source src="/images/MAYAR BISON ENERGY DRINK.mp4" type="video/mp4" />
                </video>
                <div className="video-overlay"></div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section section-contact">
          <div className="section-header">
            <h2 className="section-title">{t.contactTitle}</h2>
            <p className="section-subtitle">{t.contactSub}</p>
          </div>
          <div className="contact-full-dashboard">
            <div className="contact-info-grid">
              <div className="info-card">
                <span className="info-icon">📍</span>
                <h3>{t.addressLabel}</h3>
                <p>MAYAR BISON</p>
              </div>
              <div className="info-card">
                <span className="info-icon">📞</span>
                <h3>{t.phoneLabel}</h3>
                <p dir="ltr">+90 532 512 83 35</p>
                <p dir="ltr">+90 532 440 20 77</p>
              </div>
              <div className="info-card">
                <span className="info-icon">✉️</span>
                <h3>{t.emailLabel}</h3>
                <p>info@mayar-bison.com</p>
              </div>
            </div>
            <div className="map-full-width">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.721363476272!2d34.536709699999996!3d36.753258699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15278bd42b71fe67%3A0xb78666e8bf33578!2sMAYAR%20BISON!5e0!3m2!1str!2str!4v1778054455586!5m2!1str!2str" width="100%" height="450" style={{ border: 0, borderRadius: '12px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="contact-social-footer">
              <a href="https://instagram.com/mayarbison/" target="_blank" rel="noreferrer" className="social-pill">Instagram</a>
              <a href="https://tiktok.com/@mayarbison" target="_blank" rel="noreferrer" className="social-pill">TikTok</a>
              <a href="#" className="social-pill">YouTube</a>
              <a href="#" className="social-pill">LinkedIn</a>
              <a href="#" className="social-pill">X (Twitter)</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-top">
          <div className="footer-col">
            <img src="/images/mayarbison_logo-removebg-preview (1).png" alt="Mayar Bison" className="footer-logo-main" />
            <p className="footer-desc">{t.footerDesc}</p>
          </div>
          <div className="footer-col">
            <h4>{t.footerExplore}</h4>
            <a href="#classics">{t.navClassics}</a>
            <a href="#malt">{t.navMalt}</a>
            <a href="#boom">{t.navBoom}</a>
          </div>
          <div className="footer-col">
            <h4>{t.footerConnect}</h4>
            <a href="https://instagram.com/mayarbison/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://tiktok.com/@mayarbison" target="_blank" rel="noreferrer">TikTok</a>
            <a href="#">Facebook</a>
          </div>
          <div className="footer-col">
            <h4>{t.footerContact}</h4>
            <p>info@mayar-bison.com</p>
            <p dir="ltr">+90 532 512 83 35</p>
            <p dir="ltr">+90 532 440 20 77</p>
          </div>
        </div>
        <div className="footer-bottom">
          <h1 className="footer-huge-text">MAYAR BISON</h1>
          <div className="footer-bottom-flex">
            <p>&copy; {new Date().getFullYear()} {t.footerRights}</p>
            <p className="dev-tag" onClick={() => setShowDevModal(true)}>{t.devTag}</p>
          </div>
        </div>
      </footer>

      {/* DEV MODAL */}
      <div className={`dev-modal-overlay ${showDevModal ? 'active' : ''}`} onClick={() => setShowDevModal(false)}>
        <div className="dev-modal" onClick={e => e.stopPropagation()}>
          <h2>Fanari Labs</h2>
          <div className="dev-contact-info">
            <p className="dev-contact-phone"><a href="tel:+905379295163">+90 537 929 51 63</a></p>
            <p className="dev-contact-text">
              <a href="https://fanarilabs.com" target="_blank" rel="noreferrer">fanarilabs.com</a>
              <a href="mailto:fanarilabs@gmail.com">fanarilabs@gmail.com</a>
            </p>
          </div>
          <button onClick={() => setShowDevModal(false)}>Close</button>
        </div>
      </div>
    </>
  );
}

export default App;
