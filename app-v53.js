const A=window.EP_ASSETS||{};

const groupCards=[
 {title:'TUITION',img:'identity-tuition.webp',desc:'Intelligent, personalised tuition built around each learner.',path:'/tuition'},
 {title:'DIGITAL',img:'identity-digital.webp',desc:'Intelligent education technology & digital learning systems.',path:'/digital'},
 {title:'HOMESCHOOL',img:'identity-homeschool.webp',desc:'Less planning for you. More purposeful progress for them.',path:'/homeschool'},
 {title:'SUPPLY STAFF',img:'identity-supply.webp',desc:'Smarter, app-led staffing — built around schools.',path:'/supply'},
 {title:'CATHOLIC<br>SUPPLY STAFF',img:'identity-catholic.webp',desc:'Smarter, app-led staffing with a real understanding of Catholic school life.',path:'/catholic-supply'},
 {title:'INTERNATIONAL<br>TUITION',img:'identity-international.webp',desc:'Expert tuition. Worldwide. Wherever your child is learning.',path:'/international-tuition'}
];

/* v53: final Tuition-card family. The visitor is already inside Education Plus Tuition,
   so the subsidiary name is deliberately NOT repeated on the cards. */
const services=[
 {slug:'11-plus',title:'11 PLUS',img:'roundel-11.webp',desc:'Preparation, assessment and targeted 11+ progress.',path:'/tuition/11/',live:true},
 {slug:'primary',title:'PRIMARY',img:'roundel-primary.webp',desc:'Confident foundations, purposeful progress and challenge.'},
 {slug:'secondary',title:'SECONDARY',img:'roundel-secondary.webp',desc:'Focused support and challenge through secondary learning.'},
 {slug:'independent-school-prep',title:'INDEPENDENT<br>SCHOOL PREP',img:'roundel-independent.webp',desc:'Tailored preparation for selective and independent entry.'},
 {slug:'key-stage-1-sats',title:'KEY STAGE 1 SATS',img:'roundel-ks1.webp',desc:'Calm, confidence-building preparation for early assessment.'},
 {slug:'key-stage-2-sats',title:'KEY STAGE 2 SATS',img:'roundel-ks2.webp',desc:'Targeted support, confidence and strong SATs preparation.'},
 {slug:'maths',title:'MATHS',img:'roundel-maths.webp',desc:'From recovery and confidence to mastery and challenge.'},
 {slug:'english',title:'ENGLISH',img:'roundel-english.webp',desc:'Reading, writing and language developed with purpose.'},
 {slug:'computing-coding',title:'COMPUTING &amp; CODING',img:'roundel-computing.webp',desc:'Digital confidence, coding and future-ready skills.'},
 {slug:'sen-support',title:'SEN SUPPORT',img:'roundel-sen.webp',desc:'Responsive tuition shaped around the individual learner.'},
 {slug:'key-stage-3',title:'KEY STAGE 3',img:'roundel-ks3.webp',desc:'Secure foundations, deeper understanding and readiness for what comes next.'},
 {slug:'key-stage-4-gcse',title:'KEY STAGE 4 &amp; GCSE',img:'roundel-ks4.webp',desc:'Focused subject support, exam readiness and ambitious next steps.'}
];

const info={
 difference:{title:'Why We’re Different',body:`<p><strong>We progress with the child.</strong> Education Plus Tuition is not built around a fixed worksheet sequence or a one-size-fits-all programme. We use what a learner shows us — in assessment, in lessons, in their working, their confidence and their independence — to decide what should happen next.</p><p><strong>We don't begin with assumptions. We begin with the learner.</strong> That might mean rebuilding a foundation, securing an important skill, deepening understanding or providing the greater challenge a pupil is ready for.</p><p><strong>The right support. The right challenge. The right next step.</strong></p>`},
 precision:{title:'The EP Precision Progress System',body:`<p><strong>Assess. Understand. Target. Teach. Adapt. Progress.</strong></p><p>The EP Precision Progress System is the method behind how we understand a learner, plan tuition and adapt that plan as new evidence appears. A baseline helps establish the starting point; diagnosis identifies strengths, gaps, misconceptions and readiness for greater challenge; a Progress Roadmap then guides targeted teaching.</p><p>We keep reviewing accuracy, independence, confidence, support needed and recurring errors. A child's learning needs do not stand still. Their learning plan shouldn't either.</p>`},
 works:{title:'How Tuition Works',body:`<p>Families can access tuition through <strong>one-to-one, small-group and online</strong> routes according to the service and the learner. These are delivery choices rather than separate subjects: a parent choosing 11 Plus, Maths or English can then select the way of learning that best fits.</p><p><strong>Working together, where appropriate.</strong> With a parent’s permission, and where a school is willing and able to engage, Education Plus Tuition can collaborate with teachers or school staff. This may include sharing relevant information, discussing learning priorities or helping tuition complement work taking place in school.</p><p>This is always optional. We never contact a school without parental agreement, and collaboration depends on the school being willing to participate.</p>`},
 experience:{title:'Built from Real Educational Experience',body:`<p>Education Plus Tuition is shaped by practical experience across school leadership, subject leadership, safeguarding, intervention, assessment and tuition.</p><p>We start from how children learn — not from a software package, worksheet library or fixed commercial programme. Technology can help us capture evidence, communicate clearly and adapt intelligently, but the core remains good teaching, professional judgement, strong relationships and high expectations.</p><p><strong>We find the gaps. We map the route. We measure the progress.</strong></p>`}
};

function nav(path){history.pushState({},'',path);render();window.scrollTo({top:0,behavior:'instant'})}
window.addEventListener('popstate',render);

function masthead(type='group'){
 const file=type==='tuition'?'tuition-masthead-dark.webp':'group-masthead-dark.webp';
 return `<div class="masthead ${type==='tuition'?'tuition-masthead':'group-masthead'}"><img src="${A[file]}" alt="${type==='tuition'?'Education Plus Tuition':'Education Plus'}"></div>`
}
function footer(type='group'){
 const file=type==='tuition'?'tuition-masthead-white.webp':'group-masthead-white.webp';
 return `<footer class="footer-brand"><img src="${A[file]}" alt="${type==='tuition'?'Education Plus Tuition':'Education Plus'}"></footer>`
}

/* Approved v47 Group homepage — intentionally unchanged. */
function groupHome(){
 return `<section>${masthead('group')}<div class="select-band">SELECT</div><div class="page-shell"><div class="group-grid">${groupCards.map(c=>`<article class="group-card"><div class="group-title">${c.title}</div><img class="group-identity" src="${A[c.img]}" alt="${c.title.replace(/<br>/g,' ')}"><button class="enter-btn" onclick="nav('${c.path}')">ENTER <span>→</span></button><div class="group-desc">${c.desc}</div></article>`).join('')}</div><div class="group-utils"><button class="utility-btn" onclick="nav('/about-us')">ABOUT EDUCATION PLUS</button><button class="utility-btn" onclick="nav('/contact')">CONTACT</button></div></div>${footer('group')}</section>`
}

function tuitionHome(){
 return `<section class="tuition-bg">${masthead('tuition')}<nav class="tuition-nav"><button onclick="nav('/')">← Group Home</button><button onclick="nav('/tuition/about')">About Tuition</button><button onclick="openInfo('precision')">EP Precision Progress</button><button onclick="nav('/contact?team=tuition')">Contact</button></nav><div class="tuition-intro"><h1 class="tuition-lead">Tuition that knows what to teach next.</h1><p class="tuition-kicker">Intelligent, personalised tuition built around each learner — supporting recovery, progress, mastery and challenge from wherever they begin.</p><div class="info-strip"><button class="info-card" onclick="openInfo('difference')"><strong>Why We’re Different</strong><small>We progress with the child.</small></button><button class="info-card" onclick="openInfo('precision')"><strong>EP Precision Progress</strong><small>Assess. Understand. Target. Teach. Adapt. Progress.</small></button><button class="info-card" onclick="openInfo('works')"><strong>How Tuition Works</strong><small>Flexible routes. Optional collaboration.</small></button><button class="info-card" onclick="openInfo('experience')"><strong>Built from Experience</strong><small>Education-led from the start.</small></button></div><div class="read-about"><button class="text-link" onclick="nav('/tuition/about')">Read the full Education Plus Tuition About page →</button></div></div><div class="tuition-select-band">SELECT YOUR TUITION ROUTE</div><main class="services-wrap"><div class="service-grid">${services.map(s=>`<article class="service-card" style="--motif:url('${A[s.img]}')"><div class="service-title">${s.title}</div><img class="service-roundel" src="${A[s.img]}" alt="${s.title.replace(/<br>/g,' ')}"><div class="service-desc">${s.desc}</div><button class="service-action" onclick="${s.live?`window.location.href='${s.path}'`:`nav('/tuition/${s.slug}')`}">ENTER <span class="card-arrow" aria-hidden="true">→</span></button></article>`).join('')}</div></main>${footer('tuition')}</section>`
}

function innerHeader(type='group'){
 return `<div class="inner-top"><img src="${A[type==='tuition'?'tuition-masthead-dark.webp':'group-masthead-dark.webp']}" alt="${type==='tuition'?'Education Plus Tuition':'Education Plus'}"><div class="inner-actions"><button onclick="history.length>1?history.back():nav('${type==='tuition'?'/tuition':'/'}')">← Back</button><button onclick="nav('${type==='tuition'?'/tuition':'/'}')">⌂ Home</button></div></div>`
}

function groupAbout(){return `<section class="inner">${innerHeader('group')}<main class="inner-content"><div class="eyebrow">About Education Plus</div><h1>Education experience. Intelligent thinking. Better solutions.</h1><p>Education Plus grew from practical education experience across school leadership, safeguarding, subject leadership, curriculum, tuition, intervention, assessment, recruitment and educational development.</p><div class="quote">Understand the need first. Build the solution around it.</div><h2>Built from Real Experience</h2><p>Our work is grounded in the realities of education: what pupils need, what families need, and what schools need from the people and systems around them.</p><h2>Our Approach</h2><p>Our approach is not to replace good education with technology. It is to use intelligent systems to make good education even better.</p><h2>One Education Plus. Six Specialist Areas.</h2><p>Education Plus Tuition, Digital, Homeschool, Supply, Catholic Supply and International Tuition each have a distinct purpose while sharing one coherent standard of quality, care and intelligent design.</p><h2>Tradition Where It Matters. Innovation Where It Helps.</h2><p>We protect the human elements that matter — relationships, judgement, trust and expertise — while looking for better ways to organise, personalise and connect education.</p><div class="quote">Stronger Together. Greater Impact.</div><h2>Looking Ahead</h2><p>We keep asking a simple question: <strong>Is there a better way to do this?</strong> Experienced in education. Progressive in thinking. Focused on what comes next.</p></main>${footer('group')}</section>`}

function tuitionAbout(){return `<section class="inner">${innerHeader('tuition')}<main class="inner-content"><div class="eyebrow">About Education Plus Tuition</div><h1>Tuition that knows what to teach next.</h1><p>Education Plus Tuition is built around the individual learner. We do not simply deliver a lesson or worksheet and hope progress follows. We assess, understand, target, teach, review and adapt.</p><div class="quote">Intelligent, personalised tuition built around each learner.</div><h2>A different kind of tuition</h2><p><strong>We progress with the child.</strong> Learning needs are not fixed. Confidence changes, misconceptions appear, skills become secure and new opportunities for challenge emerge. We use lesson evidence, assessment, working, accuracy, confidence and independence to decide what comes next.</p><p><strong>We don't begin with assumptions. We begin with the learner.</strong> For one child, the right next step may be rebuilding a foundation. For another, it may be deepening understanding, accelerating progress or providing greater challenge.</p><div class="quote">The right support. The right challenge. The right next step.</div><h2>The EP Precision Progress System</h2><p>The system gives structure to the way we understand a learner and adapt tuition as evidence develops.</p><div class="six-cycle"><div class="cycle"><strong>1. Baseline</strong>Starting point, confidence and security.</div><div class="cycle"><strong>2. Diagnose</strong>Strengths, gaps, misconceptions and readiness.</div><div class="cycle"><strong>3. Roadmap</strong>A Progress Roadmap around the learner.</div><div class="cycle"><strong>4. Targeted Teaching</strong>Material selected for the next step.</div><div class="cycle"><strong>5. Review Evidence</strong>Accuracy, independence, support and confidence.</div><div class="cycle"><strong>6. Adapt</strong>The route changes as the learner develops.</div></div><h2>More than a lesson. More than a worksheet.</h2><p>We find out before we decide. We teach what matters next. We notice how an answer was reached, not just whether it was correct. We adapt when progress happens and keep parents informed.</p><h2>One-to-one, small group and online tuition</h2><p>Delivery can flex around the learner and the service. These are ways of learning, not separate subjects — the educational route comes first.</p><h2>Working together, where appropriate</h2><p>With a parent’s permission, and where a school is willing to engage, Education Plus Tuition can work collaboratively with teachers or school staff. This may include sharing relevant information, discussing priorities or helping tuition complement work in school. It is always optional; we never contact a school without parental agreement.</p><h2>We look beyond the final score</h2><p>Accuracy matters, but so do independence, misconceptions, confidence, the level of support required and whether a skill transfers into unfamiliar questions.</p><h2>Built from real educational experience</h2><p>Our approach is shaped by practical experience in school leadership, subject leadership, safeguarding, intervention, assessment and tuition. Technology supports the work; good teaching, professional judgement, relationships and high expectations remain at its heart.</p><div class="quote">We find the gaps. We map the route. We measure the progress.</div><p><button class="utility-btn" onclick="nav('/contact?team=tuition')">Contact Education Plus Tuition</button></p></main>${footer('tuition')}</section>`}

function holding(slug){
 const map={
  digital:['Education Plus Digital','Intelligent education technology & digital learning systems.'],
  homeschool:['Education Plus Homeschool','Supporting families. Inspiring confidence.'],
  supply:['Education Plus Supply','Right people. Stronger schools.'],
  'catholic-supply':['Education Plus Catholic Supply','Faith-led staffing. Trusted in Catholic schools.'],
  'international-tuition':['Education Plus International Tuition','Expert tuition. Worldwide. Wherever your child is learning.']
 };
 const [name,desc]=map[slug]||['Education Plus',''];
 return `<section class="inner">${innerHeader('group')}<main class="inner-content holding"><div class="eyebrow">${name}</div><h1>${desc}</h1><div class="coming">COMING SOON</div></main>${footer('group')}</section>`
}

function tuitionServiceHolding(slug){
 const service=services.find(s=>s.slug===slug);
 if(!service)return tuitionHome();
 return `<section class="inner">${innerHeader('tuition')}<main class="inner-content holding"><img src="${A[service.img]}" alt="" style="width:116px;height:116px;margin:0 auto 14px;border-radius:50%"><div class="eyebrow">Education Plus Tuition</div><h1>${service.title.replace(/<br>/g,' ')}</h1><p style="max-width:650px;margin:0 auto 24px">${service.desc}</p><div class="coming">COMING SOON</div><p style="margin-top:22px"><button class="utility-btn" onclick="nav('/tuition')">← Back to Tuition routes</button></p></main>${footer('tuition')}</section>`
}

function contact(){
 const qp=new URLSearchParams(location.search),team=qp.get('team');
 return `<section class="inner">${innerHeader('group')}<main class="inner-content"><div class="eyebrow">Contact Education Plus</div><h1>One group. Six specialist teams.</h1><p>Tell us which part of Education Plus you need and we will route your enquiry appropriately.</p><div class="contact-box"><h2>${team==='tuition'?'Education Plus Tuition':'Education Plus Group'}</h2><p>Email: <a href="mailto:info@educationplusgroup.co.uk">info@educationplusgroup.co.uk</a></p><p>${team==='tuition'?'For tuition enquiries, include your child’s year group, subject or service of interest and whether you are considering one-to-one, small-group or online tuition.':'You can also tell us whether your enquiry relates to Tuition, Digital, Homeschool, Supply, Catholic Supply or International Tuition.'}</p></div></main>${footer('group')}</section>`
}

function openInfo(key){const x=info[key];if(!x)return;document.getElementById('modalTitle').textContent=x.title;document.getElementById('modalBody').innerHTML=x.body;document.getElementById('modal').classList.remove('hidden');document.body.style.overflow='hidden'}
function closeModal(){document.getElementById('modal').classList.add('hidden');document.body.style.overflow=''}
document.getElementById('modal').addEventListener('click',e=>{if(e.target.id==='modal')closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

function render(){
 closeModal();
 const qa=new URLSearchParams(location.search).get('qa');
 const p=qa||location.pathname.replace(/\/+$/,'')||'/';
 let html;
 if(p==='/')html=groupHome();
 else if(p==='/tuition')html=tuitionHome();
 else if(p==='/tuition/about')html=tuitionAbout();
 else if(p==='/about-us')html=groupAbout();
 else if(p==='/contact')html=contact();
 else if(['/digital','/homeschool','/supply','/catholic-supply','/international-tuition'].includes(p))html=holding(p.slice(1));
 else if(p.startsWith('/tuition/'))html=tuitionServiceHolding(p.slice('/tuition/'.length));
 else html=groupHome();
 document.getElementById('app').innerHTML=html;
 document.title=p==='/tuition'?'Education Plus Tuition':p.startsWith('/tuition/')?'Education Plus Tuition':'Education Plus';
}
render();
