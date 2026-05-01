// ============================================================
// DAILY CONTENT
// ============================================================

const PLAN = document.body.getAttribute("data-plan") || "Foundation";

const DAILY = {
  date: "1 de maio, 2026",
  text: "Paulo is a wedding photographer. He works with couples on their big day. He has unlimited time and photos for his clients. He takes around 7 to 8 thousand photos at a wedding. He sends all the good photos in around 15 days. He only accepts 4 weddings per month, so he needs to check his schedule before confirming.",
  questions: [
    {
      question: "What does Paulo do?",
      options: [
        { letter: "a", text: "He is a chef" },
        { letter: "b", text: "He is a wedding photographer" },
        { letter: "c", text: "He is a musician" },
        { letter: "d", text: "He is a florist" },
        { letter: "e", text: "He is a driver" }
      ],
      answer: "b"
    },
    {
      question: "How many photos does Paulo take at a wedding?",
      options: [
        { letter: "a", text: "Around 100" },
        { letter: "b", text: "Around 1,000" },
        { letter: "c", text: "Around 7-8 thousand" },
        { letter: "d", text: "Around 500" },
        { letter: "e", text: "Around 50" }
      ],
      answer: "c"
    },
    {
      question: "How long does it take Paulo to send the photos?",
      options: [
        { letter: "a", text: "Around 5 days" },
        { letter: "b", text: "Around 30 days" },
        { letter: "c", text: "Around 15 days" },
        { letter: "d", text: "Around 1 day" },
        { letter: "e", text: "Around 60 days" }
      ],
      answer: "c"
    },
    {
      question: "How many weddings does Paulo accept per month?",
      options: [
        { letter: "a", text: "10" },
        { letter: "b", text: "2" },
        { letter: "c", text: "4" },
        { letter: "d", text: "8" },
        { letter: "e", text: "1" }
      ],
      answer: "c"
    },
    {
      question: "Does Paulo have a time limit for his clients?",
      options: [
        { letter: "a", text: "Yes, 4 hours" },
        { letter: "b", text: "Yes, 8 hours" },
        { letter: "c", text: "No, he has unlimited time" },
        { letter: "d", text: "Yes, 2 hours" },
        { letter: "e", text: "Yes, 12 hours" }
      ],
      answer: "c"
    }
  ]
};

// ============================================================
// SEMANAS
// ============================================================

const WEEKS = [
  {
    number: 1,
    title: "To Be + Introducing Yourself",
    focus: "Apresentar-se como fotógrafo e usar o verbo To Be para descrever pessoas e situações no trabalho.",
    pdfs: [],
    exercises: [
      "Escreva 5 frases se apresentando: nome, profissão, idade, cidade e uma curiosidade",
      "Transforme em perguntas: 'She is the bride.' / 'He is the groom.' / 'They are a couple.'",
      "Complete: I ___ a photographer. She ___ the bride. We ___ ready. They ___ here."
    ],
    audios: [{ label: "Pronuncia — enviado pelo WhatsApp", url: "" }],
    links: [],
    videos: [],
    notes: [
      "TO BE → I am | You are | He/She/It is | We are | They are",
      "Negativa → I am not | He is not (isn't) | They are not (aren't)",
      "Pergunta → Am I? | Is she? | Are they?",
      "Couple = casal | Bride = noiva | Groom = noivo | Wedding = casamento",
      "I am Paulo, Alice's dad and Marina's husband.",
      "She is five. — idade com To Be, sem 'years old' obrigatório"
    ],
    classwork: [
      {
        title: "Atividade — Complete as frases",
        instruction: "Complete com a forma correta do To Be.",
        items: [
          { q: "___ you a photographer?",                    a: "Are you a photographer?" },
          { q: "I ___ amazed to be part of this moment.",   a: "I am amazed to be part of this moment." },
          { q: "She ___ the bride.",                        a: "She is the bride." },
          { q: "They ___ a couple.",                        a: "They are a couple." },
          { q: "He ___ grateful.",                          a: "He is grateful." }
        ]
      }
    ],
    vocabulary: [
      { word: "wedding",      translation: "casamento",          phonetic: "/weding/" },
      { word: "couple",       translation: "casal",              phonetic: "/capel/" },
      { word: "bride",        translation: "noiva",              phonetic: "/braid/" },
      { word: "groom",        translation: "noivo",              phonetic: "/grum/" },
      { word: "photographer", translation: "fotografo",          phonetic: "/fotografer/" },
      { word: "grateful",     translation: "grato / agradecido", phonetic: "/greitful/" },
      { word: "amazed",       translation: "impressionado",      phonetic: "/ameizd/" },
      { word: "proud",        translation: "orgulhoso",          phonetic: "/praud/" },
      { word: "schedule",     translation: "agenda / agendar",   phonetic: "/skejul/" },
      { word: "honored",      translation: "honrado",            phonetic: "/onerd/" }
    ]
  },

  {
    number: 2,
    title: "Will + Going to + Business English",
    focus: "Falar sobre eventos futuros e usar linguagem profissional com clientes.",
    pdfs: [],
    exercises: [
      "Escreva 3 frases com WILL e 3 com GOING TO sobre seu trabalho",
      "Transforme: 'The wedding starts at 7 pm.' → pergunta com Will",
      "Traduza: 'Vou enviar as fotos em 15 dias.' / 'O casamento vai começar às 7.'"
    ],
    audios: [{ label: "Pronuncia — enviado pelo WhatsApp", url: "" }],
    links: [],
    videos: [],
    notes: [
      "WILL → certeza / promessa → I will send you the photos in 15 days.",
      "GOING TO → plano / intenção → I am going to take 4 weddings this month.",
      "Pergunta com WILL → Will they arrive at 4? / When will the wedding start?",
      "WOULD → sugestão educada → The light would be better here.",
      "COULD → possibilidade educada → Could you rest your hand on your chin?",
      "I require a 20% deposit to schedule your date.",
      "I only accept 4 weddings per month, so I need to check my schedule."
    ],
    classwork: [
      {
        title: "Atividade — Will ou Going to?",
        instruction: "Complete com Will ou Going to de acordo com o contexto.",
        items: [
          { q: "I ___ send you all the photos in 15 days. (promessa)",          a: "I will send you all the photos in 15 days." },
          { q: "The dancing ___ start at 9 pm. (certeza)",                       a: "The dancing will start at 9 pm." },
          { q: "Are you ___ dance now? (plano/intenção)",                        a: "Are you going to dance now?" },
          { q: "I ___ be at the mall. (certeza)",                                a: "I will be at the mall." },
          { q: "When ___ the first dance be? (pergunta com will)",               a: "When will the first dance be?" }
        ]
      },
      {
        title: "Atividade — Frases de negocio",
        instruction: "Traduza as frases profissionais para o ingles.",
        items: [
          { q: "Preciso agendar uma reuniao com o casal.",         a: "I need to schedule a meeting with the couple." },
          { q: "Eu exijo um deposito de 20% para confirmar a data.", a: "I require a 20% deposit to secure the date." },
          { q: "Ofeco cobertura completa.",                        a: "I offer full coverage." },
          { q: "Voce precisa agendar apos o sinal de pagamento.",  a: "You need to schedule after a payment signal." }
        ]
      }
    ],
    vocabulary: [
      { word: "will",        translation: "auxiliar de futuro — certeza/promessa", phonetic: "/wil/" },
      { word: "going to",    translation: "plano / intencao futura",               phonetic: "/going tu/" },
      { word: "would",       translation: "...ria — sugestao educada",             phonetic: "/wud/" },
      { word: "could",       translation: "poderia — possibilidade educada",       phonetic: "/kud/" },
      { word: "deposit",     translation: "deposito / sinal",                      phonetic: "/dipozit/" },
      { word: "require",     translation: "exigir / requerer",                     phonetic: "/rikuair/" },
      { word: "coverage",    translation: "cobertura",                             phonetic: "/caveredj/" },
      { word: "schedule",    translation: "agenda / agendar",                      phonetic: "/skejul/" },
      { word: "confirm",     translation: "confirmar",                             phonetic: "/konferm/" },
      { word: "somewhere",   translation: "algum lugar",                           phonetic: "/samwher/" },
      { word: "else",        translation: "outro / adicional",                     phonetic: "/els/" }
    ]
  },

  {
    number: 3,
    title: "Pronouns + Possessives",
    focus: "Usar pronomes e possessivos corretamente ao guiar casais durante o ensaio fotográfico.",
    pdfs: [],
    exercises: [
      "Complete: This camera is ___ (mine/my). That doll is ___ (hers/her). The decision is ___ (ours/our).",
      "Transforme: 'It is my camera.' → 'The camera is ___.'",
      "Escreva 3 instrucoes de posicao para um casal usando: his, her, your, their"
    ],
    audios: [{ label: "Pronuncia — enviado pelo WhatsApp", url: "" }],
    links: [],
    videos: [],
    notes: [
      "ADJETIVO POSSESSIVO → antes do substantivo: my, your, his, her, its, our, their",
      "PRONOME POSSESSIVO → substitui o substantivo: mine, yours, his, hers, its, ours, theirs",
      "Ex: This is my camera. → This camera is mine.",
      "Ex: That is Alice's doll. → That doll is hers.",
      "I - my - mine | You - your - yours | He - his - his | She - her - hers",
      "It - its - its | We - our - ours | They - their - theirs",
      "INSTRUCOES: Take his hand. / Wrap your arms around her. / Rest her hand on his chin."
    ],
    classwork: [
      {
        title: "Atividade — Adjetivo ou Pronome Possessivo?",
        instruction: "Escolha a opcao correta.",
        items: [
          { q: "This is ___ camera. (my / mine)",                  a: "This is my camera. (adjetivo — antes do substantivo)" },
          { q: "This camera is ___. (my / mine)",                  a: "This camera is mine. (pronome — substitui o substantivo)" },
          { q: "That is Alice's doll. The doll is ___. (her / hers)", a: "The doll is hers." },
          { q: "___ wedding is beautiful. (Their / Theirs)",        a: "Their wedding is beautiful." },
          { q: "The Ferrari is amazing. ___ motor is the best. (Its / It's)", a: "Its motor is the best." }
        ]
      },
      {
        title: "Atividade — Instrucoes de posicao",
        instruction: "Complete as instrucoes com o verbo correto: Turn, Bring, Stand, Hold, Rest, Wrap, Touch.",
        items: [
          { q: "Could you ___ your face a little to the left?",      a: "Could you turn your face a little to the left?" },
          { q: "Please, ___ your hand to your chin.",                 a: "Please, bring your hand to your chin." },
          { q: "I need you to ___ behind her for this shot.",         a: "I need you to stand behind her for this shot." },
          { q: "Can you ___ her from behind?",                        a: "Can you wrap her from behind?" },
          { q: "___ your hand on his shoulder.",                      a: "Rest your hand on his shoulder." }
        ]
      }
    ],
    vocabulary: [
      { word: "mine",         translation: "meu / minha — pronome",      phonetic: "/main/" },
      { word: "yours",        translation: "seu / sua — pronome",         phonetic: "/iorz/" },
      { word: "hers",         translation: "dela — pronome",              phonetic: "/herz/" },
      { word: "his",          translation: "dele — pronome/adjetivo",     phonetic: "/hiz/" },
      { word: "ours",         translation: "nosso/nossa — pronome",       phonetic: "/aurz/" },
      { word: "theirs",       translation: "deles/delas — pronome",       phonetic: "/dherz/" },
      { word: "wrap",         translation: "envolver / abracar",          phonetic: "/rap/" },
      { word: "hold",         translation: "segurar",                     phonetic: "/hold/" },
      { word: "rest",         translation: "apoiar / descansar",          phonetic: "/rest/" },
      { word: "chin",         translation: "queixo",                      phonetic: "/tchin/" },
      { word: "shoulder",     translation: "ombro",                       phonetic: "/shoulder/" },
      { word: "forehead",     translation: "testa",                       phonetic: "/forhed/" },
      { word: "cheek",        translation: "bochecha",                    phonetic: "/tchik/" }
    ]
  },

  {
    number: 4,
    title: "Do/Does + Have/Has + Present Perfect",
    focus: "Fazer perguntas profissionais, descrever o que tem/oferece e usar o Present Perfect para experiencias.",
    pdfs: [],
    exercises: [
      "Escreva 3 perguntas com DO/DOES sobre seu trabalho como fotografo",
      "Complete: He ___ (have/has) unlimited time. She ___ (like/likes) natural photos.",
      "Traduza: 'Eu nao bebo ha 10 dias.' / 'Ela e minha amiga desde a infancia.'"
    ],
    audios: [{ label: "Pronuncia — enviado pelo WhatsApp", url: "" }],
    links: [],
    videos: [],
    notes: [
      "DO/DOES → auxiliar para perguntas e negativas com verbos de acao",
      "DO → I, You, We, They | DOES → He, She, It",
      "Do you like natural photos? / Does he eat sushi? / She doesn't work today.",
      "HAVE/HAS → I have, You have, He HAS, She HAS, It HAS, We have, They have",
      "PRESENT PERFECT → experiencia ou acao que continua → have/has + verbo no participio",
      "I have studied English for years.",
      "I haven't drunk for 10 days.",
      "She has been my friend since kindergarten.",
      "SINCE → desde um momento especifico | FOR → durante um periodo de tempo"
    ],
    classwork: [
      {
        title: "Atividade — Do, Does, Have ou Has?",
        instruction: "Complete com a forma correta.",
        items: [
          { q: "___ you like natural or posed photos?",            a: "Do you like natural or posed photos?" },
          { q: "___ he take many photos at a wedding?",            a: "Does he take many photos at a wedding?" },
          { q: "I ___ unlimited time for my clients.",             a: "I have unlimited time for my clients." },
          { q: "She ___ been my friend since kindergarten.",       a: "She has been my friend since kindergarten." },
          { q: "I haven't ___ since my daughter was born. (drink)", a: "I haven't drunk since my daughter was born." }
        ]
      },
      {
        title: "Atividade — Present Perfect",
        instruction: "Traduza usando o Present Perfect.",
        items: [
          { q: "Eu estou ha 10 dias sem beber.",                   a: "I haven't drunk for 10 days." },
          { q: "Eu estudo ingles ha anos.",                        a: "I have studied English for years." },
          { q: "Ela e minha amiga desde o jardim de infancia.",    a: "She has been my friend since kindergarten." }
        ]
      }
    ],
    vocabulary: [
      { word: "do / does",    translation: "auxiliar de acao — perguntas/negativas", phonetic: "/du / daz/" },
      { word: "have / has",   translation: "ter — I have / He has",                  phonetic: "/hav / haz/" },
      { word: "since",        translation: "desde — momento especifico",              phonetic: "/sins/" },
      { word: "for",          translation: "ha — periodo de tempo",                   phonetic: "/for/" },
      { word: "yet",          translation: "ainda — negativas/perguntas",             phonetic: "/iet/" },
      { word: "already",      translation: "ja — afirmativas",                        phonetic: "/olredi/" },
      { word: "how many",     translation: "quantos/quantas — contaveis",             phonetic: "/hau meni/" },
      { word: "how much",     translation: "quanto/quanta — incontaveis",             phonetic: "/hau match/" },
      { word: "how often",    translation: "com que frequencia",                      phonetic: "/hau ofen/" },
      { word: "as long as",   translation: "desde que / contanto que",                phonetic: "/az long az/" },
      { word: "overwhelmed",  translation: "sobrecarregado / tomado",                 phonetic: "/overwhelmd/" },
      { word: "available",    translation: "disponivel",                              phonetic: "/aveilebl/" }
    ]
  }
];

// ============================================================
// CLASSWORK ANSWERS
// ============================================================
var CW_ANSWERS = {};

// ============================================================
// DAILY CONTENT FUNCTIONS
// ============================================================

function openDaily() {
  var overlay = document.getElementById("dailyOverlay");
  var body    = document.getElementById("dailyBody");
  var dateEl  = document.getElementById("dailyDate");
  dateEl.textContent = DAILY.date;

  if (PLAN !== "Fluency") {
    body.innerHTML = '<div class="daily-locked">'
      + '<span class="daily-lock-icon">🔒</span>'
      + '<h3>Conteudo Fluency</h3>'
      + '<p>O Daily Content e exclusivo para alunas do plano <strong>Fluency</strong>.</p>'
      + '<p>Fale com a Yas para fazer o upgrade! ✦</p>'
      + '</div>';
  } else {
    var html = '<div class="daily-text-wrap">'
      + '<h3 class="res-title">Texto de hoje</h3>'
      + '<div class="daily-text">' + DAILY.text + '</div>'
      + '</div>'
      + '<div class="daily-questions-wrap">'
      + '<h3 class="res-title" style="margin-top:24px">Exercicios</h3>'
      + '<div class="daily-questions">';

    DAILY.questions.forEach(function(q, qi) {
      html += '<div class="daily-q" id="q' + qi + '">'
        + '<p class="daily-q-text"><strong>' + (qi+1) + '.</strong> ' + q.question + '</p>'
        + '<div class="daily-options">';
      q.options.forEach(function(opt) {
        html += '<button class="daily-opt" id="q' + qi + '-' + opt.letter + '"'
          + ' onclick="checkAnswer(' + qi + ',\'' + opt.letter + '\',\'' + q.answer + '\')">'
          + '<span class="opt-letter">' + opt.letter + '</span>'
          + '<span class="opt-text">' + opt.text + '</span>'
          + '</button>';
      });
      html += '</div><p class="daily-feedback" id="feedback' + qi + '"></p></div>';
    });

    html += '</div><div class="daily-action-btns"><button class="daily-reset-btn" onclick="openDaily()">Recomecar ↺</button><button class="daily-back-btn" onclick="closeDaily()">Voltar ao menu ←</button></div></div>';
    body.innerHTML = html;
  }

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function checkAnswer(qi, chosen, correct) {
  var opts = document.querySelectorAll("#q" + qi + " .daily-opt");
  opts.forEach(function(btn) { btn.disabled = true; });
  var chosenBtn  = document.getElementById("q" + qi + "-" + chosen);
  var correctBtn = document.getElementById("q" + qi + "-" + correct);
  var feedback   = document.getElementById("feedback" + qi);
  if (chosen === correct) {
    chosenBtn.classList.add("correct");
    feedback.textContent = "✦ Correct!";
    feedback.className = "daily-feedback feedback-correct";
  } else {
    chosenBtn.classList.add("wrong");
    correctBtn.classList.add("correct");
    feedback.textContent = "The correct answer is " + correct.toUpperCase() + ".";
    feedback.className = "daily-feedback feedback-wrong";
  }
}

function closeDaily() {
  document.getElementById("dailyOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

document.getElementById("dailyOverlay").addEventListener("click", function(e) {
  if (e.target === this) closeDaily();
});

// ============================================================
// MAIN FUNCTIONS
// ============================================================

function speakWord(word, btn) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  var u = new SpeechSynthesisUtterance(word);
  u.lang = "en-US";
  u.rate = 0.85;
  if (btn) {
    btn.classList.add("speaking");
    u.onend  = function() { btn.classList.remove("speaking"); };
    u.onerror = function() { btn.classList.remove("speaking"); };
  }
  window.speechSynthesis.speak(u);
}

function hasContent(arr) {
  return Array.isArray(arr) && arr.filter(function(i) { return i && i.label; }).length > 0;
}

function renderGrid() {
  var grid = document.getElementById("weeksGrid");
  var html = "";
  WEEKS.forEach(function(w, i) {
    var icons = "";
    if (hasContent(w.pdfs))        icons += '<span class="ricon ricon-pdf"      title="PDF">P</span>';
    if (hasContent(w.audios))      icons += '<span class="ricon ricon-audio"    title="Audio">A</span>';
    if (hasContent(w.exercises))   icons += '<span class="ricon ricon-exercise" title="Exercicios">E</span>';
    if (hasContent(w.links))       icons += '<span class="ricon ricon-link"     title="Links">L</span>';
    if (hasContent(w.videos))      icons += '<span class="ricon ricon-video"    title="Videos">V</span>';
    if (w.vocabulary && w.vocabulary.length) icons += '<span class="ricon ricon-vocab" title="Vocabulario">W</span>';
    html += '<article class="week-card" onclick="openModal(' + i + ')" tabindex="0">'
      + '<div class="card-head">'
      + '<p class="card-number">Semana ' + w.number + '</p>'
      + '<h2 class="card-title">' + w.title + '</h2>'
      + '</div>'
      + '<div class="card-body">'
      + '<div class="card-icons">' + icons + '</div>'
      + '<div class="card-cta"><span>Ver material</span><span class="card-cta-arrow">→</span></div>'
      + '</div>'
      + '</article>';
  });
  grid.innerHTML = html;
}

function openModal(index) {
  var w = WEEKS[index];
  document.getElementById("modalWeekLabel").textContent = "Semana " + w.number;
  document.getElementById("modalTitle").textContent     = w.title;
  document.getElementById("modalFocus").textContent     = w.focus || "";
  document.getElementById("modalBody").innerHTML =
    renderPdfs(w.pdfs) +
    renderExercises(w.exercises) +
    renderAudios(w.audios) +
    renderLinks(w.links) +
    renderVideos(w.videos) +
    renderNotes(w.notes) +
    renderClasswork(w.classwork) +
    renderVocabulary(w.vocabulary) +
    '<div class="yas-tip"><strong>Dica da YV</strong>Pratique todos os dias um pouco. Consistencia e o que te leva a fluencia. ✦</div>';
  document.getElementById("overlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  document.getElementById("overlay").classList.remove("open");
  document.body.style.overflow = "";
}

function renderPdfs(pdfs) {
  var items = (pdfs || []).filter(function(p) { return p.label; });
  if (!items.length) return "";
  var html = '<div class="resource-section"><h3 class="res-title">PDFs</h3><div class="res-list">';
  items.forEach(function(p) {
    html += '<div class="res-item"><span class="res-item-label">' + p.label + '</span>'
      + '<div class="res-actions">'
      + '<a href="' + p.url + '" target="_blank" class="btn-open">Abrir ↗</a>'
      + '<a href="' + p.url + '" download class="btn-download">Baixar</a>'
      + '</div></div>';
  });
  return html + '</div></div>';
}

function renderExercises(exercises) {
  var items = (exercises || []).filter(Boolean);
  if (!items.length) return "";
  var html = '<div class="resource-section"><h3 class="res-title">Exercicios</h3><ul class="exercise-list">';
  items.forEach(function(e) { html += '<li>' + e + '</li>'; });
  return html + '</ul></div>';
}

function renderAudios(audios) {
  var items = (audios || []).filter(function(a) { return a.label; });
  if (!items.length) return "";
  var html = '<div class="resource-section"><h3 class="res-title">Audios</h3><div class="res-list">';
  items.forEach(function(a) {
    if (a.url) {
      html += '<div class="res-item audio-item"><span class="res-item-label">' + a.label + '</span>'
        + '<audio controls preload="none"><source src="' + a.url + '"></audio></div>';
    } else {
      html += '<div class="res-item"><span class="res-item-label">' + a.label + '</span>'
        + '<span class="via-whatsapp">via WhatsApp</span></div>';
    }
  });
  return html + '</div></div>';
}

function renderLinks(links) {
  var items = (links || []).filter(function(l) { return l.label; });
  if (!items.length) return "";
  var html = '<div class="resource-section"><h3 class="res-title">Links</h3><div class="res-list">';
  items.forEach(function(l) {
    html += '<div class="res-item"><span class="res-item-label">' + l.label + '</span>'
      + '<div class="res-actions"><a href="' + l.url + '" target="_blank" class="btn-open">Abrir ↗</a></div></div>';
  });
  return html + '</div></div>';
}

function renderVideos(videos) {
  var items = (videos || []).filter(function(v) { return v.label; });
  if (!items.length) return "";
  var html = '<div class="resource-section"><h3 class="res-title">Videos</h3><div class="res-list">';
  items.forEach(function(v) {
    html += '<div class="res-item"><span class="res-item-label">' + v.label + '</span>'
      + '<div class="res-actions"><a href="' + v.url + '" target="_blank" class="btn-open">Assistir ↗</a></div></div>';
  });
  return html + '</div></div>';
}

function renderNotes(notes) {
  var items = (notes || []).filter(Boolean);
  if (!items.length) return "";
  var html = '<div class="resource-section"><h3 class="res-title">Notas da Aula</h3><ul class="notes-list">';
  items.forEach(function(n) { html += '<li>' + n + '</li>'; });
  return html + '</ul></div>';
}

function renderClasswork(classwork) {
  var sections = (classwork || []).filter(function(s) { return s.title; });
  if (!sections.length) return "";
  var html = "";
  sections.forEach(function(section, si) {
    html += '<div class="resource-section">'
      + '<h3 class="res-title">' + section.title + '</h3>'
      + '<p class="classwork-instruction">' + section.instruction + '</p>'
      + '<div class="classwork-list">';
    section.items.forEach(function(item, ii) {
      var key = "cw_" + si + "_" + ii;
      CW_ANSWERS[key] = item.a;
      html += '<div class="classwork-item">'
        + '<p class="classwork-q"><strong>' + (ii+1) + '.</strong> ' + item.q + '</p>'
        + '<button class="classwork-reveal-btn" onclick="revealAnswer(this,\'' + key + '\')">Ver resposta</button>'
        + '<p class="classwork-answer" id="' + key + '" style="display:none"></p>'
        + '</div>';
    });
    html += '</div></div>';
  });
  return html;
}

function revealAnswer(btn, key) {
  var el = document.getElementById(key);
  if (el) { el.textContent = CW_ANSWERS[key] || ""; el.style.display = "block"; }
  btn.style.display = "none";
}

function renderVocabulary(vocabulary) {
  var items = (vocabulary || []).filter(function(v) { return v.word; });
  if (!items.length) return "";
  var html = '<div class="resource-section"><h3 class="res-title">Vocabulario</h3><div class="vocab-grid">';
  items.forEach(function(v, i) {
    window._vocabWords = window._vocabWords || [];
    window._vocabWords[i] = v.word;
    html += '<div class="vocab-card" tabindex="0" onclick="this.classList.toggle(\'flipped\')">'
      + '<div class="vocab-front">'
      + '<button class="vocab-speak-btn" onclick="event.stopPropagation();speakVocab(' + i + ',this)" title="Ouvir">🔊</button>'
      + '<div class="vocab-front-inner">'
      + '<span class="vocab-word">' + v.word + '</span>'
      + (v.phonetic ? '<span class="vocab-phonetic">' + v.phonetic + '</span>' : '')
      + '</div>'
      + '<span class="vocab-hint">toque para ver</span>'
      + '</div>'
      + '<div class="vocab-back"><span class="vocab-translation">' + v.translation + '</span></div>'
      + '</div>';
  });
  return html + '</div></div>';
}

function speakVocab(i, btn) {
  if (window._vocabWords && window._vocabWords[i]) speakWord(window._vocabWords[i], btn);
}

function buildGlossaryHTML() {
  var all = [];
  WEEKS.forEach(function(w) {
    (w.vocabulary || []).filter(function(v) { return v.word; }).forEach(function(v) {
      all.push({ word: v.word, translation: v.translation, phonetic: v.phonetic, week: w.number });
    });
  });
  if (!all.length) return '<p class="glossary-empty">O glossario vai aparecer aqui conforme as semanas forem avancando. ✦</p>';
  window._glossWords = [];
  var html = "";
  all.forEach(function(v, i) {
    window._glossWords[i] = v.word;
    html += '<div class="glossary-row">'
      + '<span class="glos-word">' + v.word + '</span>'
      + '<span class="glos-trans">' + v.translation
      + (v.phonetic ? ' <span class="glos-phonetic">' + v.phonetic + '</span>' : '')
      + '</span>'
      + '<button class="glos-speak" onclick="speakGloss(' + i + ',this)" title="Ouvir">🔊</button>'
      + '<span class="glos-week-badge">Sem. ' + v.week + '</span>'
      + '</div>';
  });
  return html;
}

function speakGloss(i, btn) {
  if (window._glossWords && window._glossWords[i]) speakWord(window._glossWords[i], btn);
}

var glossaryOpen = false;
function toggleGlossary() {
  var section = document.getElementById("glossarySection");
  var cta     = document.getElementById("glossaryBtnCta");
  if (!section) return;
  glossaryOpen = !glossaryOpen;
  if (glossaryOpen) {
    if (!section.innerHTML.trim()) section.innerHTML = buildGlossaryHTML();
    section.style.display = "block";
    if (cta) cta.textContent = "Fechar ↑";
    setTimeout(function() { section.scrollIntoView({ behavior: "smooth", block: "start" }); }, 80);
  } else {
    section.style.display = "none";
    if (cta) cta.textContent = "Ver palavras →";
  }
}

function renderGlossary() {}

document.getElementById("overlay").addEventListener("click", function(e) {
  if (e.target === this) closeModal();
});
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") closeModal();
});

var touchStartY = 0;
document.addEventListener("touchstart", function(e) {
  touchStartY = e.touches[0].clientY;
}, { passive: true });
document.addEventListener("touchmove", function(e) {
  if (document.getElementById("overlay").classList.contains("open")) {
    if (e.touches[0].clientY - touchStartY > 100) closeModal();
  }
}, { passive: true });

renderGrid();
renderGlossary();
