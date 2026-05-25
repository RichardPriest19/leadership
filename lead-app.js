/* ============================================================
   THE 8 STYLES OF LEADERSHIP  |  lead-app.js
   ============================================================ */

const THEMES = {
  burg:   { main:'#7c1d3e', mid:'#a32555', lt:'#f7e6ec', bg:'#fdf3f6', cat:'cat-burg'   },
  forest: { main:'#1a4d2e', mid:'#236640', lt:'#dff0e6', bg:'#f3fbf6', cat:'cat-forest' },
  navy:   { main:'#0f2d52', mid:'#163d6e', lt:'#dce8f7', bg:'#f1f6fd', cat:'cat-navy'   },
};

const STYLES = [

  // ── SECTION 1: VISION-DRIVEN ────────────────────────────
  {
    id:1, section:'vision', theme:'burg', icon:'★',
    name:'Transformational Leadership',
    question:'How do we inspire people to achieve more than they thought possible?',
    summary:'Transformational leaders motivate followers to transcend their own self-interests for the good of the organisation by creating a compelling vision, building deep trust, and challenging people to continuously grow. Consistently linked to the highest levels of employee performance and engagement in research.',
    tags:['Vision','Inspiration','Change'],
    roles:['CEOs','Senior Leaders','Change Agents','Political Leaders'],
    overview:'Transformational Leadership theory was originally introduced by James MacGregor Burns in his 1978 book "Leadership" and later refined by Bernard Bass, who developed the Full Range Leadership Model (1985). Bass distinguished between Transactional Leadership (exchange-based) and Transformational Leadership (values-based) and identified four components of transformational leadership known as the "Four Is." Decades of research consistently show transformational leadership produces the strongest outcomes on performance, innovation, employee wellbeing, and organisational commitment. It is the most researched leadership style in the world.',
    problem:'In stable, comfortable organisations, people default to the minimum required. Transactional exchanges — pay for performance — produce compliance but not commitment. Transformational leadership solves the engagement gap: it moves people from "I have to" to "I want to" by connecting work to purpose, growth, and collective identity.',
    components:[
      ['Idealised Influence (II)','The leader serves as a role model. Followers identify with and want to emulate the leader. The leader demonstrates high moral standards, takes personal risks for the collective good, and earns deep trust and respect.'],
      ['Inspirational Motivation (IM)','The leader articulates a compelling vision of the future. Uses symbols, stories, and language to inspire enthusiasm and optimism. Makes the vision vivid and emotionally resonant, not just intellectually coherent.'],
      ['Intellectual Stimulation (IS)','The leader challenges followers to question assumptions, think creatively, and approach old problems in new ways. Encourages intellectual risk-taking without publicly criticising mistakes.'],
      ['Individualised Consideration (IC)','The leader pays attention to each follower as an individual — understanding their unique needs, goals, and development stage. Acts as a coach and mentor, not just a task-assigner.'],
    ],
    process:[
      'Develop and articulate a clear, compelling vision that connects daily work to a meaningful purpose',
      'Model the values and behaviours you expect — transformational leadership cannot be faked',
      'Invest in understanding each team member individually: their goals, strengths, and growth edges',
      'Create intellectual challenge: give people problems slightly beyond their comfort zone',
      'Build psychological safety: people must feel safe to take risks and fail without punishment',
      'Recognise and celebrate contributions publicly — connect individual effort to collective progress',
    ],
    when:['Organisational transformation and major strategic change','Post-crisis leadership requiring renewal of purpose and morale','High-performing teams that are capable of more than they currently achieve','Innovation-driven organisations where creativity is a strategic priority','Succession planning: developing the next generation of leaders'],
    pitfalls:['Becoming a cult of personality — transformational leadership must empower others, not create dependency on the leader','Inspiring vision without operational follow-through — vision without execution is delusion','Applying transformational style to a team in survival mode — basic needs must be met before higher-order motivation works','Neglecting short-term performance in pursuit of long-term transformation'],
    software:['Culture Amp (engagement measurement)','Leapsome (OKRs and 1:1s)','Lattice (performance and values)','15Five (check-ins and goals)','Slack / Teams (storytelling and communication)'],
  },

  {
    id:2, section:'vision', theme:'burg', icon:'◎',
    name:'Visionary Leadership',
    question:'How do we mobilise people around a picture of the future that does not yet exist?',
    summary:"Daniel Goleman's research-identified style that scores highest on organisational climate impact. The Visionary leader defines the destination in vivid terms but gives people freedom over how they get there — combining maximum direction with maximum autonomy.",
    tags:['Direction','Autonomy','Long-Term'],
    roles:['Founders','CEOs','Chief Strategy Officers','Innovation Leaders'],
    overview:"Visionary Leadership is one of six leadership styles identified by Daniel Goleman, Richard Boyatzis, and Annie McKee in their research published in 'Primal Leadership' (2002). Goleman's research of 3,871 executives found that each style has a measurable impact on organisational climate — the set of factors that directly drive performance. Visionary Leadership had the strongest positive climate impact of all six styles. It is defined by the leader's ability to articulate a compelling future state and enrol others in its pursuit, while giving individuals significant latitude in how they contribute.",
    problem:"Organisations with unclear direction suffer from misaligned effort, low motivation, and poor decision-making at every level. When people don't know where they are going, every decision is harder and every setback feels more significant. The Visionary leader solves the direction deficit.",
    components:[
      ['Clear Future State','The leader can describe a vivid, specific, inspiring picture of the future. Not vague aspiration but a concrete destination that people can see themselves moving toward.'],
      ['Emotional Resonance','The vision connects to what people care about — their values, identity, and desire for meaningful work. It must be felt, not just understood.'],
      ['Strategic Freedom','The leader defines the destination but does not micromanage the route. People are trusted to find their own best path toward the shared goal.'],
      ['Contextual Application','Most effective when the team needs a new direction, when the current path is failing, or when the organisation is at a strategic inflection point. Less effective with highly experienced experts who resist top-down direction.'],
    ],
    process:[
      'Develop a deeply personal and authentic connection to the vision — people will see through inauthenticity immediately',
      'Translate the vision into specific, vivid language: what will it look, feel, and sound like when we get there?',
      'Connect each team member\'s role explicitly to the vision — show them how their work matters',
      'Communicate the vision repeatedly, in multiple formats, and adjust the language for different audiences',
      'Delegate the "how" — set the destination, then trust the team to navigate',
      'Track and celebrate visible progress toward the vision to maintain momentum',
    ],
    when:['Strategy pivots and organisational reinvention','Start-up and early growth phases where direction is everything','When team morale is low due to lack of purpose or direction','Market disruption: when the old path is no longer viable','Leadership transitions: a new leader must establish direction quickly'],
    pitfalls:['Vision fatigue: announcing a new vision before the last one was achieved','Confusing visionary leadership with charismatic leadership — vision must be grounded in strategic reality, not just rhetoric','Failing to connect vision to day-to-day tasks — abstraction without connection creates frustration','Using visionary style with a team that already has strong direction — they need execution support, not more vision'],
    software:['Notion (strategy documents and vision wikis)','Miro (strategy workshops)','Loom (asynchronous vision communications)','Monday.com / Asana (connecting vision to work)','Canva (visual storytelling)'],
  },

  // ── SECTION 2: PEOPLE-CENTRED ────────────────────────────
  {
    id:3, section:'people', theme:'forest', icon:'◈',
    name:'Servant Leadership',
    question:'How do we lead by serving — putting the needs of the team first?',
    summary:'Robert Greenleaf\'s model inverts the traditional power hierarchy: the leader\'s primary purpose is to serve those they lead — removing obstacles, developing capability, and ensuring the team has everything needed to succeed. Consistently linked to high trust, low turnover, and exceptional long-term performance.',
    tags:['Trust','Service','Empowerment'],
    roles:['People Leaders','HR Directors','Community Leaders','Team Leads'],
    overview:"Robert Greenleaf coined the term 'Servant Leadership' in his 1970 essay 'The Servant as Leader,' later expanded into a book. Greenleaf argued that the great leader is first experienced as a servant — that this is the central issue of leadership. The servant leader asks not 'How can my team help me achieve my goals?' but 'How can I help my team achieve their goals and the organisation's mission?' The model was later extended by Larry Spears who identified ten key characteristics. It has been adopted as the foundational leadership philosophy by organisations including Southwest Airlines, Marriott, and many high-performing military units.",
    problem:'Traditional command-and-control leadership models create compliance but rarely commitment, and they deplete people over time. Servant leadership solves the engagement and retention crisis by making the leader a resource for the team rather than a demand on it — creating an environment where people genuinely want to give their best.',
    components:[
      ['Listening','Deep, active listening to understand people\'s needs, concerns, and ideas. Servant leaders prioritise hearing over telling.'],
      ['Empathy','Genuine understanding of and care for others\' feelings, situations, and perspectives. Assumes good intentions.'],
      ['Healing','The servant leader helps people recover from mistakes, setbacks, and difficult experiences — creating a safe environment for vulnerability.'],
      ['Awareness','High self-awareness and situational awareness. The servant leader understands their own strengths, biases, and impact on others.'],
      ['Persuasion over Authority','Relies on influence, reasoning, and relationship rather than positional authority to create alignment.'],
      ['Foresight','Anticipates future needs and obstacles before they become crises. Protects the team from predictable problems.'],
      ['Stewardship','Holds the team\'s trust, reputation, and resources as a temporary custodian — not for personal gain.'],
      ['Commitment to Growth','Actively invests in the personal and professional development of each team member.'],
      ['Building Community','Creates a sense of belonging and shared purpose within the team and broader organisation.'],
    ],
    process:[
      'Conduct regular 1:1s focused on the team member\'s needs, goals, and obstacles — not just task status',
      'Ask: "What do you need from me to do your best work?" — and then deliver on the answer',
      'Make removing obstacles and securing resources a primary daily activity',
      'Develop each person\'s unique strengths and career goals, even when those goals eventually take them elsewhere',
      'Model vulnerability: admit your own mistakes and uncertainties openly',
      'Measure your effectiveness by your team\'s growth and success, not just output metrics',
    ],
    when:['Building high-trust teams in people-intensive environments','Retaining top talent in competitive labour markets','Long-term team development programmes','Healthcare, education, social care, and mission-driven organisations','When recovering from a low-trust, command-and-control leadership legacy'],
    pitfalls:['Confusing servant leadership with being a pushover — servant leaders set high standards, they just support people to reach them','Neglecting organisational performance in favour of individual needs','Burnout: servant leaders can over-give without replenishing themselves','Not all team members thrive under servant leadership — some need more directive guidance'],
    software:['Culture Amp','15Five (continuous feedback)','Leapsome','Lattice (development plans)','Officevibe (team sentiment)'],
  },

  {
    id:4, section:'people', theme:'forest', icon:'◇',
    name:'Coaching Leadership',
    question:'How do we grow people\'s long-term capability, not just their short-term performance?',
    summary:"One of Goleman's six styles, Coaching Leadership prioritises the long-term development of individuals over short-term task completion. The coach leader helps people identify their strengths and development areas, then creates learning challenges and ongoing feedback loops to accelerate growth.",
    tags:['Development','Feedback','Growth'],
    roles:['Line Managers','Leadership Coaches','HR Business Partners','Performance Leads'],
    overview:"Coaching Leadership is identified by Daniel Goleman as one of the six core leadership styles and is notable because, despite having a strong positive impact on organisational climate, it is the least frequently used style in practice. Goleman's research found that most leaders avoid coaching because they believe they don't have time — yet coaching conversations are often the highest-leverage investment a leader can make, as they build capability that compounds over time. The ICF (International Coaching Federation) and GROW model have further developed the practical application of coaching within leadership.",
    problem:"Most management time is spent on task direction and performance monitoring — telling people what to do and checking whether they did it. This produces task completion but not capability growth. Coaching leadership solves the capability gap: it invests in developing people so they need less direction over time, not more.",
    components:[
      ['The GROW Model','Goal: what does the person want to achieve? Reality: where are they now? Options: what could they do? Will/Way Forward: what will they do and when? The most widely used coaching conversation framework.'],
      ['Powerful Questions','Coaching uses questions rather than answers. "What do you think?" "What options do you see?" "What would success look like?" Questions that open thinking rather than close it.'],
      ['Active Listening','Listening for what is said and unsaid. Noticing patterns, energy, and emotion as well as words.'],
      ['Strengths Focus','Coaching amplifies strengths rather than obsessing over weaknesses. People grow fastest when building on what they already do well.'],
      ['Accountability Without Blame','The coach leader creates clear commitments and follows up consistently — not to punish failure but to maintain momentum.'],
      ['Feedback as Data','Regular, specific, behavioural feedback — not judgement. "When you did X, the impact was Y" rather than "You are Z."'],
    ],
    process:[
      'Move from advice-giving to question-asking in 1:1 conversations',
      'Use the GROW model structure for development conversations',
      'Give feedback within 24 hours of specific observed behaviour — not saved for annual reviews',
      'Create individual development plans with each team member',
      'Assign stretch assignments that build capability, not just productive tasks',
      'Monitor progress not just on task outcomes but on development goals',
    ],
    when:['Developing high-potential talent for future leadership','When team members are capable but underperforming due to lack of direction or confidence','Succession planning and leadership pipeline development','Annual performance review conversations','When building a culture of continuous learning and feedback'],
    pitfalls:['Coaching when the situation needs directing — a new employee in crisis needs answers, not questions','Using coaching as a way of avoiding giving direct feedback','Not following up on coaching commitments — accountability is a core coaching skill','Confusing coaching with therapy — coaching is forward-looking and performance-focused'],
    software:['BetterUp (professional coaching at scale)','Torch','CoachAccountable','Leapsome (1:1 templates)','Notion (development plans)','15Five'],
  },

  {
    id:5, section:'people', theme:'forest', icon:'◆',
    name:'Democratic Leadership',
    question:'How do we harness collective intelligence to make better decisions?',
    summary:'Also called Participative Leadership, the Democratic style builds consensus through active involvement of team members in decision-making. By seeking input, welcoming challenge, and incorporating diverse perspectives, democratic leaders make better decisions and build stronger ownership of outcomes.',
    tags:['Consensus','Inclusion','Collaboration'],
    roles:['Team Leaders','Product Managers','Cross-Functional Leaders','Community Leaders'],
    overview:"Democratic Leadership (also called Participative Leadership) has roots in the research of Kurt Lewin, who identified it as one of three core leadership styles in his landmark 1939 studies with groups of children. Lewin found that democratic groups showed the highest levels of quality output and group morale, though with lower speed than autocratic groups. Daniel Goleman later identified it as one of his six styles, noting its particular value when the leader is uncertain of the best direction and needs to draw on the team's collective intelligence.",
    problem:"Decisions made without input from those who must execute them are frequently wrong, often resisted, and always less owned. Democratic leadership solves the implementation gap: when people are genuinely involved in a decision, they understand it better, own it more deeply, and execute it more effectively.",
    components:[
      ['Genuine Consultation','Seeking input that actually influences the decision — not theatre. People quickly recognise when consultation is fake, and it is more damaging than no consultation at all.'],
      ['Psychological Safety','Creating an environment where people feel safe to share dissenting views, challenge assumptions, and raise concerns without fear of retribution.'],
      ['Structured Debate','Democratic leadership does not mean endless discussion. The leader facilitates focused debate, synthesises input, and makes timely decisions.'],
      ['Transparency','Being clear about what is open to input and what is not. "I want your input on how we achieve this goal" is different from "I want your input on whether we pursue this goal."'],
      ['Decisive Closure','After input is gathered, the leader makes a clear decision and explains how the input influenced it — even when the decision was not what everyone wanted.'],
    ],
    process:[
      'Before any decision, ask: who has relevant knowledge or will be affected by this decision? Seek their input',
      'Create structured forums for input: working groups, surveys, open forums, retrospectives',
      'Be explicit about the decision-making process: who has input, who has a vote, and who decides',
      'Close the loop: tell people how their input did (or did not) influence the final decision and why',
      'Practice active listening during input-gathering — not just waiting for your turn to explain your prior position',
    ],
    when:['Complex decisions requiring diverse expertise','Building team ownership of a new strategy or direction','Cross-functional initiatives where no single leader has all the information','Culture and values definition','When implementing a change that requires high levels of team commitment to succeed'],
    pitfalls:['Decision paralysis: consulting everyone on everything leads to no decisions','Creating false democracy: consulting people and then ignoring input destroys trust faster than not consulting','Using democratic style in a genuine crisis where speed is more important than perfection','Not being clear about the limits of participation — ambiguity breeds frustration'],
    software:['Mentimeter (live polling and input)','Slido','Miro (collaborative decision-making)','Notion (decision logs)','Loomio (structured group decisions)','Microsoft Forms / Google Forms'],
  },

  // ── SECTION 3: ADAPTIVE ──────────────────────────────────
  {
    id:6, section:'adaptive', theme:'navy', icon:'▦',
    name:'Situational Leadership',
    question:'How do we adapt our leadership style to each individual\'s current development level?',
    summary:'Hersey and Blanchard\'s highly practical model argues there is no single best leadership style — the right style depends on the competence and commitment of each individual on each specific task. Leaders must be able to move fluidly between Directing, Coaching, Supporting, and Delegating.',
    tags:['Adaptability','Development Level','Flexibility'],
    roles:['All Line Managers','Team Leaders','Project Managers','HR Business Partners'],
    overview:"Situational Leadership was developed by Paul Hersey and Ken Blanchard and first published in 'Management of Organisational Behaviour' (1969). It has become one of the most widely taught leadership models in the world, used extensively in corporate leadership development programmes. The model's central premise is deceptively simple but profoundly practical: there is no single best way to lead. The right leadership behaviour depends on the development level of the individual being led on the specific task in question.",
    problem:'Most leaders have a default style they apply regardless of who they are leading or what the task is. This mismatch between leader behaviour and follower need is the most common cause of management failure. A capable, experienced professional micromanaged by a directive leader will disengage. A new, anxious employee given full autonomy will flounder. Situational Leadership solves the one-size-fits-all problem.',
    components:[
      ['Development Level 1 (D1): Enthusiastic Beginner','Low competence, high commitment. The person is new to the task, eager but unskilled. Needs: high direction, structured guidance, clear expectations. Best style: Directing (S1) — tell them what, when, and how.'],
      ['Development Level 2 (D2): Disillusioned Learner','Some competence, low commitment. The person has been trying but is struggling. Reality has set in. Needs: high direction AND high support — keep guiding while addressing the emotional slump. Best style: Coaching (S2).'],
      ['Development Level 3 (D3): Capable but Cautious','High competence, variable commitment. The person can do the task but lacks confidence or motivation to do it independently. Needs: low direction but high support — step back from task direction while providing encouragement. Best style: Supporting (S3).'],
      ['Development Level 4 (D4): Self-Reliant Achiever','High competence, high commitment. The person can and will do the task with minimal involvement. Needs: low direction and low support — get out of the way. Best style: Delegating (S4).'],
      ['The Matching Rule','The model\'s core instruction: match your leadership style to the development level. Mismatches in either direction reduce performance and motivation.'],
    ],
    process:[
      'For each team member and each key task, assess their current development level: competence and commitment',
      'Identify the matching leadership style (S1–S4)',
      'Consciously adapt your approach — resist the pull of your default style',
      'Diagnose shifts in development level: a D4 employee given a new challenge reverts to D1 on that specific task',
      'Have development conversations: "What do you need from me on this task?" is the most efficient diagnostic question',
      'Aim to develop people toward D4 over time — the goal is eventually to delegate everything you can',
    ],
    when:['Managing a team with mixed experience levels','Onboarding new team members','Assigning people to new or unfamiliar tasks','Performance management conversations','Leadership development training programmes'],
    pitfalls:['Diagnosing development level once and never updating it — people grow and regress continuously','Applying the same development level to a person across all tasks — it is task-specific, not person-specific','Using Situational Leadership to justify staying in a directive style with capable people','Forgetting that the model requires skill in all four styles — most leaders are only comfortable in one or two'],
    software:['Leapsome (development tracking)','Lattice','Culture Amp (team capability mapping)','Notion (individual development plans)','15Five (weekly check-ins)'],
  },

  {
    id:7, section:'adaptive', theme:'navy', icon:'◉',
    name:'Transactional Leadership',
    question:'How do we maintain performance through clear expectations and consistent consequences?',
    summary:'The foundational exchange-based leadership model: the leader offers rewards for performance and applies corrective action for underperformance. Most effective in structured, stable environments where clear standards and consistent accountability drive the required outcomes.',
    tags:['Performance','Accountability','Standards'],
    roles:['Operations Leaders','Sales Managers','Military Officers','Process Managers'],
    overview:"Transactional Leadership was formally theorised by Max Weber and later developed by Bernard Bass as the contrast to Transformational Leadership in his Full Range Leadership Model (1985). The term 'transactional' reflects the fundamental exchange at the model's core: performance in exchange for reward, or deviation corrected by consequence. It is the most common actual leadership style in organisations — particularly in management rather than leadership roles — and is often dismissed unfairly. Done well, transactional leadership creates the operational discipline and clarity that makes higher-order leadership possible.",
    problem:'Without clear expectations, consistent feedback, and reliable accountability, performance degrades. People need to know what is expected, whether they are meeting it, and what happens if they do not. Transactional leadership creates the performance management foundation that every organisation needs — even those pursuing transformational ambitions.',
    components:[
      ['Contingent Reward','The positive side of the exchange: if you achieve X, you receive Y. Clear, agreed-upon rewards for meeting or exceeding targets. Works best when rewards are valued and the connection between performance and reward is direct and transparent.'],
      ['Management by Exception — Active','The leader monitors performance closely and intervenes before standards are breached. Proactively identifies deviations and corrects them. Best for high-stakes environments where errors have serious consequences.'],
      ['Management by Exception — Passive','The leader waits for deviations to occur before intervening. Less effective in most contexts — problems are addressed after they have already impacted performance.'],
      ['Laissez-Faire (Non-leadership)','Technically the absence of leadership — avoiding decisions and abdicating responsibilities. Included in Bass\'s model as a failure mode, not a style to emulate. Mentioned here for completeness.'],
    ],
    process:[
      'Set clear, specific, measurable performance expectations with each team member',
      'Agree on the rewards for meeting or exceeding expectations — make the connection explicit',
      'Monitor performance consistently using objective data where possible',
      'Intervene proactively (active management by exception) before standards are breached',
      'Apply corrective action consistently and fairly — inconsistent accountability destroys the model\'s effectiveness',
      'Recognise and reward achievement promptly — delayed rewards lose their motivational power',
    ],
    when:['Stable operational environments with well-defined tasks and standards','Sales and revenue-generating roles where targets are clear','Safety-critical environments where compliance with standards is non-negotiable','Short-term performance turnarounds requiring rapid improvement','Alongside transformational approaches — they are complementary, not mutually exclusive'],
    pitfalls:['Relying exclusively on transactional approaches — produces compliance but not commitment or innovation','Inconsistent application of consequences — destroys credibility and fairness perceptions','Setting targets that are gamed rather than achieved genuinely','Failing to shift to a more empowering style as people develop and the situation matures'],
    software:['Salesforce / HubSpot (performance tracking)','BambooHR','Workday','Microsoft Planner','SAP SuccessFactors (performance management)','Tableau (performance dashboards)'],
  },

  {
    id:8, section:'adaptive', theme:'navy', icon:'⬡',
    name:'Pacesetting Leadership',
    question:'How do we drive high performance by modelling exceptional standards ourselves?',
    summary:"Goleman's research identified Pacesetting as the style with the fastest short-term results but the most negative long-term climate impact when overused. The Pacesetter sets extremely high standards, exemplifies them personally, and expects others to follow — powerfully effective in sprints, destructive if sustained.",
    tags:['High Standards','Performance','Pace'],
    roles:['Expert Leaders','Technical Leads','Startup Founders','Elite Team Leaders'],
    overview:"Pacesetting Leadership is one of Daniel Goleman's six styles, identified through research with 3,871 executives published in 'Primal Leadership' (2002). It is the most commonly misused style in practice. Goleman's research found that Pacesetting has an immediately positive impact on results but a strongly negative impact on organisational climate when applied broadly or over extended periods. Leaders who rely primarily on Pacesetting create environments characterised by overwhelm, initiative suppression, and eventual talent exodus — because people feel they can never meet the leader's standards.",
    problem:'High standards are a competitive advantage — but only when people can actually reach them. The Pacesetter\'s challenge is that their own exceptional competence can make them impatient with others\' development curves, leading them to take tasks back rather than developing people to do them. The result is a team that becomes increasingly dependent and increasingly demoralised.',
    components:[
      ['Modelling Excellence','The Pacesetter leads by personal example. They are typically highly skilled, hard-working, and hold themselves to the highest standards. Their credibility comes from their own demonstrated competence.'],
      ['High Standards Setting','The Pacesetter expects excellence from others, sets ambitious targets, and has little tolerance for mediocrity. Standards are explicit, non-negotiable, and consistently applied.'],
      ['Speed and Self-Direction','Works best with highly competent, self-motivated individuals who are already skilled and need little guidance. Counterproductive with people who are still developing.'],
      ['The Climate Trap','Research finding: Pacesetting destroys climate when overused. The leader takes over when others stumble, provides insufficient development support, and leaves people feeling inadequate. Use in short, focused bursts.'],
      ['The Right Context','Most effective: a team of high performers on a critical short-term sprint. Least effective: a diverse team at different development levels on an ongoing basis.'],
    ],
    process:[
      'Use Pacesetting selectively — for time-critical performance sprints with high-competence teams',
      'Be explicit about the sprint nature: "For the next six weeks, we need to push hard" — not as a permanent state',
      'Pair Pacesetting with Coaching: the high standards are the target, the coaching is the support to reach them',
      'Monitor team wellbeing during Pacesetting periods — watch for signs of overwhelm and burnout',
      'After a Pacesetting sprint, deliberately shift to a more restorative style',
      'Regularly ask: am I raising others\' standards or substituting for them?',
    ],
    when:['Critical short-term delivery periods with high-competence, motivated teams','Start-up sprints — first product release, fundraising crunch, critical launch','Expert teams where the leader\'s technical credibility is the primary source of authority','Demonstrating what is possible when standards are genuinely elevated','Competitive environments where speed and quality are both mission-critical'],
    pitfalls:['Using Pacesetting as a default style rather than a situational tool — the research evidence is clear on the long-term damage','Not providing the development support that makes high standards achievable','Applying Pacesetting to team members who are not yet capable of meeting the pace — they will fail and blame themselves','Confusing Pacesetting with Transformational leadership — Pacesetting is about standards, not vision or personal development'],
    software:['Jira / Linear (sprint performance tracking)','Asana','Monday.com','Tableau (real-time performance)','Culture Amp (regular climate monitoring)'],
  },
];

// ── HELPERS ─────────────────────────────────────────────
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

// ── PROGRESS BAR ─────────────────────────────────────────
function initProgress() {
  const bar = $('#readBar');
  const colors = { burg:'#a32555', forest:'#236640', navy:'#163d6e' };
  function update() {
    const h = document.documentElement;
    const pct = (window.scrollY / (h.scrollHeight - h.clientHeight)) * 100;
    bar.style.width = pct + '%';
    // Update bar colour by current section
    let col = colors.burg;
    const people  = $('#sec-people');
    const adaptive = $('#sec-adaptive');
    if (adaptive && window.scrollY >= adaptive.offsetTop - 80) col = colors.navy;
    else if (people && window.scrollY >= people.offsetTop - 80) col = colors.forest;
    bar.style.background = col;
  }
  window.addEventListener('scroll', update, { passive:true });
  update();
}

// ── NAV ──────────────────────────────────────────────────
function initNav() {
  const nav   = $('#nav');
  const upBtn = $('#upBtn');
  const ham   = $('#ham');
  const mob   = $('#mobNav');
  const links = $$('.nl[data-s]');

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    nav.classList.toggle('up', y > 60);
    upBtn.classList.toggle('show', y > 700);
    let cur = '';
    $$('.section[id], #all8').forEach(s => {
      if (s.offsetTop - 100 <= y) cur = s.id;
    });
    links.forEach(l => l.classList.toggle('active', l.dataset.s === cur));
  }, { passive:true });

  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    mob.classList.toggle('open');
  });
  $$('.mn-link').forEach(l => l.addEventListener('click', () => {
    ham.classList.remove('open');
    mob.classList.remove('open');
  }));
}

// ── HERO SIDE LIST ───────────────────────────────────────
function buildSideList() {
  const el = $('#sideList');
  if (!el) return;
  const cols = { vision:'#f5aabf', people:'#82e0aa', adaptive:'#90b8ea' };
  STYLES.forEach(s => {
    const item = document.createElement('div');
    item.className = 'side-item';
    item.innerHTML = `
      <span class="si-n">0${s.id}</span>
      <span class="si-dot" style="background:${cols[s.section]}"></span>
      <span class="si-name">${s.name}</span>
    `;
    item.addEventListener('click', () => openModal(s.id));
    el.appendChild(item);
  });
}

// ── CARDS ────────────────────────────────────────────────
function buildCards() {
  const map = { vision:'cards-vision', people:'cards-people', adaptive:'cards-adaptive' };
  STYLES.forEach((s, i) => {
    const container = $('#' + map[s.section]);
    if (!container) return;
    const t = THEMES[s.theme];
    const card = document.createElement('div');
    card.className = 'ls-card';
    card.style.transition = `opacity .5s ${(i % 3) * 90}ms, transform .5s ${(i % 3) * 90}ms, box-shadow .25s`;
    card.innerHTML = `
      <div class="card-top-bar"></div>
      <div class="card-pad">
        <div class="card-header">
          <span class="card-id">Style 0${s.id}</span>
          <span class="card-badge">${s.icon}</span>
        </div>
        <div class="card-name">${s.name}</div>
        <div class="card-q">${s.question}</div>
        <p class="card-summary">${s.summary}</p>
        <div class="card-tags">${s.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}</div>
        <div class="card-foot">
          <span class="card-roles-text">${s.roles.slice(0,2).join(' · ')}</span>
          <button class="card-open-btn" data-id="${s.id}">Full Breakdown</button>
        </div>
      </div>
    `;
    card.addEventListener('click', () => openModal(s.id));
    container.appendChild(card);
  });
}

// ── INTERSECTION OBSERVER ────────────────────────────────
function initObserver() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  $$('.ls-card').forEach(c => obs.observe(c));
}

// ── ALL 8 TABLE ──────────────────────────────────────────
function buildAll8() {
  const table = $('#a8Table');
  if (!table) return;
  const catLabel = { vision:'Vision-Driven', people:'People-Centred', adaptive:'Adaptive' };
  STYLES.forEach(s => {
    const t = THEMES[s.theme];
    const row = document.createElement('div');
    row.className = 'a8-row';
    row.innerHTML = `
      <div class="a8-n" style="color:${t.main}">${String(s.id).padStart(2,'0')}</div>
      <div class="a8-name">${s.name}</div>
      <div class="a8-q">${s.question}</div>
      <div><span class="a8-cat ${t.cat}">${catLabel[s.section]}</span></div>
    `;
    row.addEventListener('click', () => openModal(s.id));
    table.appendChild(row);
  });
}

// ── MODAL ────────────────────────────────────────────────
function openModal(id) {
  const s = STYLES.find(x => x.id === id);
  if (!s) return;
  const t = THEMES[s.theme];

  $('#modalInner').innerHTML = `
    <div class="mi-bar" style="background:${t.main}"></div>
    <div class="mi-head">
      <div class="mi-tag" style="color:${t.main}">Style 0${s.id} — ${s.section.charAt(0).toUpperCase()+s.section.slice(1)}</div>
      <div class="mi-name">${s.name}</div>
      <div class="mi-q">${s.question}</div>
      <div class="mi-tags">${s.tags.map(tag => `<span class="mi-tag-pill" style="color:${t.main};border-color:${t.main}44;background:${t.main}0d">${tag}</span>`).join('')}</div>
    </div>
    <div>
      <div class="mi-label" style="color:${t.main}">Overview</div>
      <p class="mi-text">${s.overview}</p>

      <div class="mi-label" style="color:${t.main}">The Problem It Solves</div>
      <p class="mi-text">${s.problem}</p>

      <div class="mi-label" style="color:${t.main}">Core Components</div>
      <table class="mi-table">
        <thead><tr>
          <th style="color:${t.main}">Component</th>
          <th style="color:${t.main}">Description</th>
        </tr></thead>
        <tbody>${s.components.map(([k,v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('')}</tbody>
      </table>

      <div class="mi-label" style="color:${t.main}">How to Apply It</div>
      <ul class="mi-list">${s.process.map(p => `<li>${p}</li>`).join('')}</ul>

      <div class="mi-label" style="color:${t.main}">When to Use It</div>
      <ul class="mi-list">${s.when.map(w => `<li>${w}</li>`).join('')}</ul>

      <div class="mi-label" style="color:${t.main}">Common Pitfalls</div>
      <ul class="mi-list">${s.pitfalls.map(p => `<li>${p}</li>`).join('')}</ul>

      <div class="mi-label" style="color:${t.main}">Who Uses This Style</div>
      <div class="mi-pills" style="margin-bottom:1.5rem">${s.roles.map(r => `<span class="mi-pill" style="border-top:2px solid ${t.main}">${r}</span>`).join('')}</div>

      <div class="mi-label" style="color:${t.main}">Recommended Tools</div>
      <div class="mi-pills">${s.software.map(sw => `<span class="mi-pill">${sw}</span>`).join('')}</div>
    </div>
  `;

  $('#modalBg').classList.add('open');
  document.body.style.overflow = 'hidden';
  $('#modalBox').scrollTop = 0;
}

function closeModal() {
  $('#modalBg').classList.remove('open');
  document.body.style.overflow = '';
}

function initModal() {
  $('#modalX').addEventListener('click', closeModal);
  $('#modalBg').addEventListener('click', e => { if (e.target === $('#modalBg')) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

// ── BACK TOP ─────────────────────────────────────────────
function initBackTop() {
  $('#upBtn').addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
}

// ── INIT ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initProgress();
  initNav();
  buildSideList();
  buildCards();
  buildAll8();
  initModal();
  initBackTop();
  requestAnimationFrame(() => requestAnimationFrame(initObserver));
});
