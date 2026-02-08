type Slide = {
  id: string;
  title: string;
  focus: string;
  keyIdeas: string[];
  designPrompt: string;
  script: string;
  palette: string[];
  imagePrompt: string;
  timing: string;
};

type StrategyRow = {
  phase: string;
  strategy: string;
  function: string;
  grouping: string;
  monitoring: string;
};

type LessonPhase = {
  label: string;
  duration: string;
  description: string;
  tools: string[];
  inclusiveActions: string[];
  expectedProduct: string;
  monitoring: string;
};

type RubricLevel = {
  level: string;
  descriptors: string[];
};

const slides: Slide[] = [
  {
    id: "01",
    title: "Titolo & Scenario: Missione Igiene",
    focus: "Aggancio emotivo e direzione progettuale",
    keyIdeas: [
      "Presentare il progetto didattico centrato sulla prevenzione delle Infezioni Correlate all'Assistenza (ICA)",
      "Evidenziare l'approccio interdisciplinare e laboratoriale",
      "Collegare il tema al concorso A015 e al curricolo verticale dell'indirizzo sanitario",
    ],
    designPrompt:
      "Crea una slide d'apertura con titolo 'Missione Igiene: Prevenire le Infezioni Correlate all'Assistenza'. Usa layout diagonale dinamico, icone medicali sottili e un badge che richiami il concorso A015. Inserisci una frase d'impatto e spazio per tre bullet sintetici.",
    script:
      "Benvenuti nel laboratorio progettuale dedicato alla prevenzione delle infezioni correlate all'assistenza. Ho scelto il taglio Missione Igiene perché orienta la classe verso una responsabilità professionale concreta e interdisciplinare, coerente con l'indirizzo Sanità e Biotecnologie. Fin da subito dichiaro l'approccio laboratoriale e inclusivo che caratterizza tutto il percorso, in linea con i requisiti del concorso A015.",
    palette: [
      "#0B3C49 – Verde petrolio professionale",
      "#88BDBC – Verde acqua rassicurante",
      "#F1F1F1 – Neutro chiaro di sfondo",
      "#F2A541 – Accento ambra per elementi chiave",
    ],
    imagePrompt:
      "Illustrazione isometrica di laboratorio sanitario moderno con studenti in camice, luce fredda, grafici digitali traslucidi, atmosfera motivante",
    timing: "2 minuti",
  },
  {
    id: "02",
    title: "Analisi del Contesto e Traccia",
    focus: "Contestualizzazione situata",
    keyIdeas: [
      "Classe quarta di 24 studenti, clima collaborativo, 1 PDP (dislessia), 1 PEI (disabilità intellettiva lieve)",
      "Esperienza di PCTO in RSA come leva motivazionale",
      "Connessione con priorità del PTOF su sicurezza e benessere",
    ],
    designPrompt:
      "Progetta una slide con mappa della classe, icone per BES, e box riassuntivi di clima, risorse e bisogni. Usa infografica pulita con badge 'Contestualizzazione'.",
    script:
      "La classe quarta è composta da 24 studenti equilibrati per genere, con buon clima relazionale e cultura laboratoriale consolidata. Due casi richiedono attenzione mirata: Marco con dislessia e PDP attivo, Aisha con PEI per disabilità intellettiva lieve. La traccia assegnata punta sulla progettazione di una lezione di igiene: aggancio alla recente esperienza di PCTO in RSA e alle priorità PTOF 'salute e sicurezza'. Questo inquadramento rende le scelte metodologiche coerenti e funzionali ai bisogni rilevati.",
    palette: [
      "#12355B – Blu istituzionale",
      "#89A6FB – Azzurro inclusivo",
      "#FFEFD3 – Beige caldo per box",
      "#EE6352 – Corallo per evidenziare bisogni",
    ],
    imagePrompt:
      "Diagramma vettoriale della composizione classe con icone inclusive e elementi sanitari, stile flat professionale",
    timing: "3 minuti",
  },
  {
    id: "03",
    title: "Riferimenti Ordinamentali Essenziali",
    focus: "Inquadramento normativo mirato",
    keyIdeas: [
      "Indicazioni Nazionali e Linee Guida per gli Istituti Tecnici (MIUR 2010, aggiorn. 2014)",
      "DPR 88/2010 per l'indirizzo e DLgs 66/2017 sull'inclusione",
      "Competenze chiave europee 2018: cittadinanza, personale-sociale, STEM",
    ],
    designPrompt:
      "Realizza una slide normativa con timeline orizzontale di tre riferimenti, icone istituzionali sottili e callout su competenze chiave 2018.",
    script:
      "Rendo esplicito il quadro normativo strettamente necessario alla lezione: DPR 88/2010 e Linee Guida 2010-2014 per l'Istituto Tecnico Sanitario, Indicazioni nazionali declinate sul curricolo verticale, e la cornice inclusiva del DLgs 66/2017 con Linee Guida 2022. Integro le Competenze Chiave europee 2018, focalizzandomi su cittadinanza, personale-sociale e competenze STEM per giustificare la scelta didattica orientata alla prevenzione sanitaria.",
    palette: [
      "#1F2041 – Blu profondo istituzionale",
      "#4B3F72 – Viola autorevole",
      "#FFC857 – Oro per evidenziare norme",
      "#FFFFFF – Sfondo pulito",
    ],
    imagePrompt:
      "Timeline minimale con simboli normativi e certificazioni europee, stile infografica corporate",
    timing: "2 minuti",
  },
  {
    id: "04",
    title: "Obiettivi di Apprendimento",
    focus: "Sapere, Saper fare, Competenze",
    keyIdeas: [
      "Distinzione chiara tra conoscenze, abilità operative e competenze trasversali",
      "Allineamento con Didattica per competenze e Curricolo verticale",
      "Orientamento alla pratica professionale sanitaria",
    ],
    designPrompt:
      "Progetta una slide con tre colonne dedicate a Sapere, Saper fare, Competenza con icone lineari e colore distintivo per ciascuna colonna.",
    script:
      "Articolo gli obiettivi: sul piano delle conoscenze, anatomia della cute, microbiologia di base e normativa igienico-sanitaria; sul piano delle abilità, applicazione della tecnica corretta di igiene delle mani, analisi del rischio e comunicazione in équipe; come competenze, sviluppo di pensiero critico in scenari sanitari, gestione responsabile dei protocolli e comunicazione efficace in ottica di apprendimento significativo e didattica per competenze.",
    palette: [
      "#0D1B2A – Blu petrolio per Sapere",
      "#1B263B – Blu acciaio per Saper fare",
      "#415A77 – Blu medio per Competenze",
      "#E0E1DD – Grigio chiarissimo di sfondo",
    ],
    imagePrompt:
      "Tabella a tre colonne con icone medicali lineari e testo sintetico, stile grafico pulito",
    timing: "3 minuti",
  },
  {
    id: "05",
    title: "Prerequisiti e Brainstorming Attivante",
    focus: "Attivazione conoscenze pregresse",
    keyIdeas: [
      "Richiamo a fisiologia della cute e concetto di catena infettiva",
      "Uso di tecnica Think-Pair-Share su Padlet",
      "Domande stimolo per apprendimento significativo",
    ],
    designPrompt:
      "Disegna una slide con sezione checklist dei prerequisiti e box per domande di brainstorming, includendo icone di lampadine e rete collaborativa.",
    script:
      "Prima di entrare nel vivo, verifico i prerequisiti: struttura anatomica della cute, catena del contagio, precauzioni standard e terminologia di base in inglese tecnico. Avvio un breve brainstorming su Padlet con la tecnica Think-Pair-Share, dando tempo aggiuntivo e sintesi vocale a Marco e schemi guidati ad Aisha per assicurare un coinvolgimento inclusivo e funzionale agli obiettivi.",
    palette: [
      "#264653 – Blu petrolio morbido",
      "#2A9D8F – Verde acqua brillante",
      "#E9C46A – Giallo sabbia per le domande",
      "#F4F1DE – Avorio di sfondo",
    ],
    imagePrompt:
      "Illustrazione di studenti che collaborano su lavagna digitale con post-it colorati, atmosfera calda",
    timing: "2 minuti",
  },
  {
    id: "06",
    title: "Metodologie Attive e Ambienti di Apprendimento",
    focus: "Scelte metodologiche coerenti",
    keyIdeas: [
      "Problem Based Learning su caso clinico reale",
      "Cooperative Learning con ruoli assegnati",
      "Uso di TIC: Genially, Padlet, Canva, simulatori OMS",
    ],
    designPrompt:
      "Crea una slide-tabella con righe per metodologie e colonne per funzione, raggruppamenti, monitoraggio. Inserisci icone di strumenti digitali.",
    script:
      "Utilizzo un mix di Problem Based Learning e Cooperative Learning strutturato in piccoli gruppi eterogenei. Ogni gruppo lavora su Genially per costruire una mappa dinamica, mentre sfruttiamo il simulatore OMS del lavaggio mani. Io monitoro con checklist digitali su Google Workspace, garantendo supporto operativo soprattutto a Marco con mappe concettuali semplificate e ad Aisha con tutoring del pari e schede visive. Questa scelta mantiene coerenza con il bisogno di apprendimento significativo e interdisciplinarità.",
    palette: [
      "#1A659E – Blu brillante",
      "#6BA368 – Verde menta educativo",
      "#F7C548 – Giallo accento",
      "#F2F2F2 – Grigio chiarissimo",
    ],
    imagePrompt:
      "Tabella infografica con icone digitali e studenti in laboratorio che utilizzano tablet e simulatori",
    timing: "4 minuti",
  },
  {
    id: "07",
    title: "Articolazione Fase Engage",
    focus: "Stimolo iniziale e problem setting",
    keyIdeas: [
      "Video OMS su infezioni nosocomiali come trigger",
      "Domanda sfidante: ridurre le ICA in reparto post-operatorio",
      "Registro emozionale per coinvolgere la classe",
    ],
    designPrompt:
      "Imposta una slide con grande frame video e callout della domanda sfidante. Inserisci timeline di 5 minuti e note per supporti inclusivi.",
    script:
      "Apro con un breve video OMS che mostra l'impatto delle infezioni nosocomiali. Pongo la domanda sfidante: come ridurre le ICA in un reparto post-operatorio. Fornisco anticipatamente a Marco la trascrizione del video e attivo sottotitoli semplificati per Aisha. Registro le reazioni con una routine See-Think-Wonder per attivare apprendimento significativo.",
    palette: [
      "#0B132B – Blu notte per contrasto",
      "#1C2541 – Blu profondo",
      "#3A506B – Blu neutro per testi",
      "#5BC0BE – Verde acqua accento",
    ],
    imagePrompt:
      "Frame video con icona play e grafico di riduzione infezioni, stile moderno e coinvolgente",
    timing: "5 minuti",
  },
  {
    id: "08",
    title: "Articolazione Fase Explore",
    focus: "Laboratorio e produzione artefatti",
    keyIdeas: [
      "Rotazione in tre stazioni: simulatore OMS, microscopia virtuale, canvas rischio-beneficio",
      "Ruoli definiti: analista, reporter, quality checker",
      "Evidence based practice con schede supporto",
    ],
    designPrompt:
      "Crea una slide con layout a tre colonne per le stazioni di laboratorio, includendo icone degli strumenti digitali e badge per i ruoli degli studenti.",
    script:
      "Organizzo tre stazioni rotanti da 12 minuti ciascuna: simulatore OMS per la procedura, laboratorio virtuale di microbiologia per vedere colonie batteriche, canvas rischio-beneficio su Canva. I gruppi sono eterogenei, ruoli chiari per garantire responsabilità individuale. Fornisco a Marco mappe concettuali digitali con sintesi vocale, ad Aisha schede visive semplificate e tutor di gruppo. Monitoro con una checklist su tablet annotando progressi e criticità.",
    palette: [
      "#1D3557 – Blu accademico",
      "#457B9D – Azzurro professionale",
      "#A8DADC – Azzurro pallido per sfondi",
      "#F1FAEE – Bianco caldo",
    ],
    imagePrompt:
      "Illustrazione di tre stazioni laboratorio con studenti che usano tablet, microscopio virtuale e canvas digitale",
    timing: "36 minuti",
  },
  {
    id: "09",
    title: "Articolazione Fase Explain & Elaborate",
    focus: "Restituzione e consolidamento",
    keyIdeas: [
      "Debrief con routine 'Claim-Evidence-Reasoning'",
      "Sintesi docente con mappa concettuale su Genially condivisa",
      "Connessioni al curricolo verticale e interdisciplinarità (chimica, inglese tecnico)",
    ],
    designPrompt:
      "Progetta una slide con schema triangolare Claim-Evidence-Reasoning e sezione per mappa concettuale condivisa.",
    script:
      "Nella fase di spiegazione, ogni gruppo presenta claim, evidenze e ragionamento. Io visualizzo in tempo reale una mappa concettuale su Genially, evidenziando connessioni con microbiologia, chimica delle superfici e comunicazione sanitaria in inglese. Commento le strategie efficaci individuate dagli studenti, rafforzando la visione di curricolo verticale e interdisciplinarità.",
    palette: [
      "#14213D – Blu notte elegante",
      "#FCA311 – Arancio energia per i claim",
      "#E5E5E5 – Grigio chiaro",
      "#FFFFFF – Bianco per testi",
    ],
    imagePrompt:
      "Triangolo Claim-Evidence-Reasoning con icone e mappa concettuale digitale su sfondo scuro raffinato",
    timing: "15 minuti",
  },
  {
    id: "10",
    title: "Articolazione Fase Evaluate & Metacognizione",
    focus: "Valutazione e riflessione",
    keyIdeas: [
      "Rubrica valutativa su Google Moduli",
      "Checklist di autovalutazione studenti",
      "Exit ticket metacognitivo e feedback docente",
    ],
    designPrompt:
      "Imposta una slide con rubrica a quattro livelli, grafico radar per check metacognitiva e note per strumenti digitali.",
    script:
      "Per la valutazione formativa, uso una rubrica condivisa su Google Moduli: osservazione della procedura, accuratezza del protocollo e qualità della comunicazione. Gli studenti compilano una checklist di autovalutazione digitale, io registro feedback sulla piattaforma Classroom. Marco consegna un audio-risposta, Aisha utilizza simboli visivi. Concludo con un exit ticket metacognitivo per monitorare consapevolezza e regolare la progettazione futura.",
    palette: [
      "#052F5F – Blu profondo per autorevolezza",
      "#005377 – Blu medio",
      "#06A77D – Verde valutazione",
      "#F1F7ED – Verde chiarissimo",
    ],
    imagePrompt:
      "Rubrica a quattro livelli con grafico radar e icone di checklist digitali, stile professionale",
    timing: "10 minuti",
  },
  {
    id: "11",
    title: "Inclusione, Follow-up e Domande Commissione",
    focus: "Sostenibilità e dialogo",
    keyIdeas: [
      "Sintesi misure PDP e PEI, tutoring tra pari e strumenti compensativi",
      "Follow-up su curricolo verticale e PCTO",
      "Esempi di possibili domande della commissione in italiano e inglese",
    ],
    designPrompt:
      "Crea una slide conclusiva con tre blocchi: inclusione, estensione progettuale, Q&A bilingue. Inserisci icone di supporto personalizzato.",
    script:
      "Chiudo valorizzando le misure inclusive adottate: mappe concettuali audio per Marco, schede visive strutturate e compiti ridotti ma autentici per Aisha, tutoring tra pari e co-teaching. Propongo follow-up con audit interno e progetto PCTO in RSA per consolidare il curricolo verticale. Anticipo possibili domande della commissione, anche in inglese, per mostrare padronanza riflessiva della progettazione.",
    palette: [
      "#2F3E46 – Verde blu scuro",
      "#354F52 – Verde salvia profondo",
      "#52796F – Verde medio rassicurante",
      "#CAD2C5 – Verde nebbia per sfondo",
    ],
    imagePrompt:
      "Layout tripartito con icone di inclusione, frecce di follow-up e fumetti Q&A bilingue, stile sobrio",
    timing: "6 minuti",
  },
];

const strategies: StrategyRow[] = [
  {
    phase: "Engage",
    strategy: "Storytelling epidemiologico + routine See-Think-Wonder",
    function:
      "Accendere motivazione e attivare connessioni pregresse per apprendimento significativo.",
    grouping: "Classe intera, momenti individuali scritti su Padlet, con pairing guidato.",
    monitoring:
      "Checklist osservativa digitale; supporto immediato a studenti BES con whisper-coaching.",
  },
  {
    phase: "Explore",
    strategy: "Problem Based Learning e Cooperative Learning strutturato (Jigsaw light)",
    function:
      "Sviluppare competenze professionali tramite compito autentico interdisciplinare.",
    grouping:
      "Gruppi da 4 eterogenei con ruoli rotanti (analista, reporter, quality checker, facilitatore).",
    monitoring:
      "Giro di laboratorio ogni 5 minuti, annotazioni su tablet, micro-feedback durante le attività.",
  },
  {
    phase: "Explain/Elaborate",
    strategy: "Debriefing dialogico + Mappa concettuale collaborativa su Genially",
    function:
      "Consolidare e rielaborare conoscenze collegandole al curricolo verticale e alla pratica.",
    grouping:
      "Plenum con portavoce di gruppo; registrazione visiva condivisa in tempo reale.",
    monitoring:
      "Domande guida graduate, evidenze raccolte nelle schede digitali, sintesi condivisa nel drive.",
  },
  {
    phase: "Evaluate",
    strategy: "Rubrica criteriale + checklist metacognitiva + feedback narrativo",
    function:
      "Valutare prodotti e processi, promuovere metacognizione e autoregolazione.",
    grouping:
      "Valutazione individuale con confronto di gruppo; restituzione orale e scritta.",
    monitoring:
      "Uso di Google Moduli per raccolta dati, analisi in tempo reale, adattamento dell'intervento successivo.",
  },
];

const lessonPhases: LessonPhase[] = [
  {
    label: "Engage",
    duration: "10 minuti",
    description:
      "Visione breve video OMS e discussione guidata sulla catena del contagio con problem setting.",
    tools: ["Video OMS sottotitolato", "Padlet", "Routine See-Think-Wonder"],
    inclusiveActions: [
      "Trascrizione anticipata e sintesi vocale per studente con PDP",
      "Schede visive semplificate e supporto compagno tutor per PEI",
    ],
    expectedProduct: "Mappa delle ipotesi iniziali e domanda guida condivisa.",
    monitoring: "Checklist osservativa e sondaggi rapidi su Mentimeter.",
  },
  {
    label: "Explore",
    duration: "36 minuti",
    description:
      "Rotazione in tre stazioni laboratoriali per sperimentare procedure e analizzare casi reali.",
    tools: [
      "Simulatore OMS igiene mani",
      "Microscopia virtuale",
      "Canva canvas rischio-beneficio",
    ],
    inclusiveActions: [
      "Mappe concettuali audio e tempi dilatati per PDP",
      "Schede a pittogrammi, tutoraggio pari e materiale manipolativo per PEI",
    ],
    expectedProduct:
      "Poster digitale collaborativo con protocollo operativo e raccomandazioni.",
    monitoring: "Feedback immediati, raccolta evidenze fotografiche, note disciplinari condivise.",
  },
  {
    label: "Explain/Elaborate",
    duration: "15 minuti",
    description:
      "Restituzione dei lavori con struttura Claim-Evidence-Reasoning e costruzione mappa concettuale.",
    tools: ["Genially", "Google Meet per registrazione", "Lavagna interattiva"],
    inclusiveActions: [
      "Sintesi parlata e scritta, evidenziazione parole chiave per PDP",
      "Uso di immagini e frasi brevi per PEI, modellamento del docente",
    ],
    expectedProduct: "Mappa concettuale finale e protocollo condiviso.",
    monitoring: "Domande mirate, analisi mappa, feedback parziale.",
  },
  {
    label: "Evaluate",
    duration: "10 minuti",
    description:
      "Compilazione rubrica, checklist di autovalutazione e exit ticket metacognitivo.",
    tools: ["Google Moduli", "Moduli audio per BES", "Rubrica condivisa"],
    inclusiveActions: [
      "Possibilità di risposta audio o con simboli per PEI",
      "Tempo aggiuntivo e reader digitale per PDP",
    ],
    expectedProduct: "Report valutativo individuale e piano di miglioramento personale.",
    monitoring: "Analisi dati e riflessione docente su raggiungimento obiettivi.",
  },
];

const rubric: RubricLevel[] = [
  {
    level: "Avanzato (10-9)",
    descriptors: [
      "Applica in autonomia completa il protocollo OMS, motivando ogni passaggio.",
      "Integra evidenze scientifiche e norme vigenti in modo critico.",
      "Comunica con linguaggio tecnico preciso e propone miglioramenti realistici.",
    ],
  },
  {
    level: "Intermedio (8-7)",
    descriptors: [
      "Esegue il protocollo con lievi sollecitazioni e giustificazioni adeguate.",
      "Collega dati e norme con esempi pertinenti.",
      "Comunica in modo chiaro, con limitate imprecisioni terminologiche.",
    ],
  },
  {
    level: "Base (6)",
    descriptors: [
      "Esegue il protocollo con guida passo-passo e comprende i concetti principali.",
      "Richiama le normative essenziali con supporto.",
      "Comunica in modo comprensibile, ma con vocabolario semplice.",
    ],
  },
  {
    level: "In via di prima acquisizione (<6)",
    descriptors: [
      "Non completa il protocollo neppure con guida o compie errori critici.",
      "Non collega norme e pratica, necessita di ulteriori esempi.",
      "Comunicazione frammentaria; richiede strategie compensative aggiuntive.",
    ],
  },
];

const studentChecklist = [
  "Ho collegato il caso clinico ai prerequisiti e alle esperienze di PCTO.",
  "Ho rispettato la sequenza della procedura di igiene e spiegato il perché di ogni passo.",
  "Ho contribuito al prodotto di gruppo assumendo il mio ruolo e ascoltando gli altri.",
  "Ho utilizzato in modo critico le fonti digitali fornite.",
  "So indicare almeno due miglioramenti per la pratica di reparto osservata.",
];

const teacherReflection = [
  "Gli obiettivi di conoscenza, abilità e competenza sono stati raggiunti? Con quali evidenze?",
  "Le strategie inclusive adottate hanno garantito partecipazione attiva di Marco e Aisha?",
  "Quali momenti hanno generato apprendimento significativo e perché?",
  "Come integrare il prodotto nel curricolo verticale e nel PTOF?",
  "Quali adattamenti attuare nella prossima lezione per rafforzare la didattica per competenze?",
];

const commissionQuestionsIt = [
  "In che modo questa progettazione dialoga con il curricolo verticale dell'indirizzo e con l'offerta PCTO di istituto?",
  "Quali evidenze concrete raccoglie per dimostrare l'efficacia delle strategie inclusive applicate al PDP e al PEI?",
  "Se il laboratorio non fosse disponibile, quali alternative manterrebbero intatto l'approccio di apprendimento significativo?",
  "Come valuta l'impatto di questa lezione sulla cultura di sicurezza di reparto e quali indicatori monitorerebbe?",
];

const commissionQuestionsEn = [
  "How does the proposed lesson foster interdisciplinary learning between anatomy, microbiology, and health legislation?",
  "Which digital tools would you prioritize to ensure accessibility for students with dyslexia and intellectual disabilities?",
  "How would you adapt the assessment rubric if the activity became part of a work-based learning module?",
  "What evidence would you present to demonstrate long-term competence development in infection prevention?",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 pb-24 text-slate-100">
      <section className="bg-gradient-to-br from-slate-900 via-slate-950 to-cyan-950 px-6 py-16 md:px-16">
        <div className="mx-auto max-w-5xl space-y-6">
          <span className="inline-flex rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-200">
            Progetto didattico – A015 Discipline sanitarie
          </span>
          <h1 className="text-3xl font-semibold uppercase tracking-tight text-white md:text-4xl">
            Missione Igiene: prevenire le infezioni correlate all&apos;assistenza
          </h1>
          <p className="max-w-3xl text-base text-slate-200 md:text-lg">
            Lezione simulata per classe quarta dell&apos;Istituto Tecnico Settore
            Tecnologico – indirizzo Chimica, Materiali e Biotecnologie,
            articolazione Sanità e Biotecnologie. Progettazione centrata su
            apprendimento significativo, didattica per competenze e inclusione
            personalizzata.
          </p>
        </div>
      </section>

      <section className="px-6 py-10 md:px-16">
        <div className="mx-auto max-w-5xl space-y-6">
          <h2 className="text-xl font-semibold text-white">
            Analisi del contesto
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-base font-semibold text-cyan-200">
                Profilo classe e clima
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                <li>24 studenti (12 F, 12 M), frequenza regolare, clima cooperativo.</li>
                <li>Esperienze PCTO presso RSA e laboratorio analisi territoriale.</li>
                <li>Interesse alto per simulazioni e casi reali, buona tenuta attentiva.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-base font-semibold text-cyan-200">Inclusione</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                <li>
                  Marco – DSA con PDP: lettura dilatata, mappe concettuali audio,
                  utilizzo di sintesi vocale, valutazioni con prove equipollenti.
                </li>
                <li>
                  Aisha – PEI per disabilità intellettiva lieve: schede
                  semplificate, linguaggio facilitato, tutoraggio tra pari,
                  obiettivi minimi legati a competenze funzionali.
                </li>
                <li>
                  Presenza di sportello ascolto e team BES attivo per monitoraggio
                  continuo.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 md:px-16">
        <div className="mx-auto max-w-5xl space-y-6">
          <h2 className="text-xl font-semibold text-white">
            Riferimenti normativi essenziali
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-200 backdrop-blur">
              <h3 className="text-base font-semibold text-cyan-200">Quadro</h3>
              <p>
                DPR 88/2010 e Linee Guida per gli Istituti Tecnici (MIUR 2010,
                2014) – indirizzo Sanità e Biotecnologie, con focus su prevenzione
                e sicurezza.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-200 backdrop-blur">
              <h3 className="text-base font-semibold text-cyan-200">
                Inclusione
              </h3>
              <p>
                DLgs 66/2017 e Linee Guida 2022 per l&apos;inclusione scolastica;
                Linee guida BES (MIUR 2013) per PDP e PEI coerenti con il progetto.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-slate-200 backdrop-blur">
              <h3 className="text-base font-semibold text-cyan-200">
                Competenze chiave UE 2018
              </h3>
              <p>
                Competenza personale, sociale e capacità di imparare a imparare;
                competenza in materia di cittadinanza; competenza matematica e in
                scienze, tecnologia e ingegneria.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 md:px-16">
        <div className="mx-auto max-w-5xl space-y-6">
          <h2 className="text-xl font-semibold text-white">
            Obiettivi di apprendimento
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200 backdrop-blur">
              <h3 className="text-base font-semibold text-cyan-200">Sapere</h3>
              <ul className="mt-3 space-y-2">
                <li>Struttura anatomica della cute e barriere immunitarie.</li>
                <li>Catena del contagio e agenti patogeni più comuni in reparto.</li>
                <li>
                  Linee guida OMS e protocolli sanitari nazionali sull&apos;igiene
                  delle mani.
                </li>
                <li>
                  Normativa italiana su sicurezza, prevenzione e gestione rischio
                  clinico.
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200 backdrop-blur">
              <h3 className="text-base font-semibold text-cyan-200">Saper fare</h3>
              <ul className="mt-3 space-y-2">
                <li>
                  Applicare correttamente la procedura OMS di igiene delle mani con
                  simulatore.
                </li>
                <li>
                  Analizzare criticamente un caso clinico di ICA e proporre
                  contromisure.
                </li>
                <li>
                  Elaborare protocollo operativo condiviso con strumenti digitali.
                </li>
                <li>
                  Comunicare in linguaggio tecnico e inglese sanitario essenziale.
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200 backdrop-blur">
              <h3 className="text-base font-semibold text-cyan-200">Competenze</h3>
              <ul className="mt-3 space-y-2">
                <li>
                  Orientarsi in scenari sanitari complessi, assumendo decisioni
                  responsabili.
                </li>
                <li>
                  Lavorare in team interdisciplinare, gestendo ruoli e conflitti.
                </li>
                <li>
                  Riflettere criticamente sul proprio operato e adottare approccio
                  evidence-based.
                </li>
                <li>
                  Integrare pratiche di prevenzione nel curricolo verticale di
                  istituto.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 md:px-16">
        <div className="mx-auto max-w-5xl space-y-6">
          <h2 className="text-xl font-semibold text-white">Prerequisiti</h2>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <ul className="space-y-2 text-sm text-slate-200">
              <li>
                Anatomia di base della cute, principali patogeni e concetto di
                catena infettiva.
              </li>
              <li>
                Conoscenza delle precauzioni standard e delle norme igienico
                sanitarie basilari.
              </li>
              <li>
                Familiarità con strumenti digitali di base (Padlet, Google
                Workspace) e inglese tecnico elementare.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 md:px-16">
        <div className="mx-auto max-w-5xl space-y-6">
          <h2 className="text-xl font-semibold text-white">
            Strategie didattiche e funzione nelle fasi
          </h2>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
            <table className="min-w-full divide-y divide-white/10 text-left text-sm text-slate-100">
              <thead className="bg-white/10 text-xs uppercase tracking-wider text-cyan-100">
                <tr>
                  <th className="px-4 py-3">Fase</th>
                  <th className="px-4 py-3">Strategia</th>
                  <th className="px-4 py-3">Funzione</th>
                  <th className="px-4 py-3">Organizzazione gruppi</th>
                  <th className="px-4 py-3">Monitoraggio & supporto</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {strategies.map((row) => (
                  <tr key={row.phase} className="bg-white/5">
                    <td className="px-4 py-4 font-semibold text-cyan-100">
                      {row.phase}
                    </td>
                    <td className="px-4 py-4">{row.strategy}</td>
                    <td className="px-4 py-4">{row.function}</td>
                    <td className="px-4 py-4">{row.grouping}</td>
                    <td className="px-4 py-4">{row.monitoring}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 md:px-16">
        <div className="mx-auto max-w-5xl space-y-6">
          <h2 className="text-xl font-semibold text-white">
            Articolazione della lezione
          </h2>
          <div className="space-y-6">
            {lessonPhases.map((phase) => (
              <div
                key={phase.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200 backdrop-blur"
              >
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                  <div className="space-y-3 md:w-2/3">
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-200">
                        {phase.label}
                      </span>
                      <span className="text-xs uppercase tracking-wide text-slate-300">
                        {phase.duration}
                      </span>
                    </div>
                    <p>{phase.description}</p>
                    <div>
                      <h3 className="text-sm font-semibold text-cyan-200">
                        Strumenti TIC
                      </h3>
                      <ul className="mt-2 grid gap-2 text-slate-200 md:grid-cols-2">
                        {phase.tools.map((tool) => (
                          <li key={tool}>• {tool}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-4 md:w-1/3">
                    <div>
                      <h3 className="text-sm font-semibold text-cyan-200">
                        Inclusione mirata
                      </h3>
                      <ul className="mt-2 space-y-2">
                        {phase.inclusiveActions.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-cyan-200">
                        Prodotto atteso
                      </h3>
                      <p className="mt-2">{phase.expectedProduct}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-cyan-200">
                        Monitoraggio
                      </h3>
                      <p className="mt-2">{phase.monitoring}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-10 md:px-16">
        <div className="mx-auto max-w-5xl space-y-6">
          <h2 className="text-xl font-semibold text-white">
            Valutazione formativa e sommativa
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200 backdrop-blur">
              <h3 className="text-base font-semibold text-cyan-200">
                Valutazione formativa
              </h3>
              <ul className="mt-3 space-y-2">
                <li>
                  Osservazione sistematica con checklist digitale durante le
                  stazioni.
                </li>
                <li>Feedback immediati e micro-rinforzi sulle procedure.</li>
                <li>
                  Mentimeter per sondare comprensione rapida e regolare il ritmo.
                </li>
                <li>
                  Diario di bordo docente per tracciare progressi e criticità,
                  utile alla progettazione successiva.
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200 backdrop-blur">
              <h3 className="text-base font-semibold text-cyan-200">
                Valutazione sommativa (rubrica)
              </h3>
              <ul className="mt-3 space-y-4">
                {rubric.map((row) => (
                  <li key={row.level}>
                    <p className="font-semibold text-slate-100">{row.level}</p>
                    <ul className="mt-2 space-y-1 list-disc pl-4 text-slate-200">
                      {row.descriptors.map((descriptor) => (
                        <li key={descriptor}>{descriptor}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 md:px-16">
        <div className="mx-auto max-w-5xl space-y-6">
          <h2 className="text-xl font-semibold text-white">
            Autovalutazione e riflessione
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200 backdrop-blur">
              <h3 className="text-base font-semibold text-cyan-200">
                Checklist studenti
              </h3>
              <ul className="mt-3 space-y-2">
                {studentChecklist.map((item) => (
                  <li key={item}>☐ {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200 backdrop-blur">
              <h3 className="text-base font-semibold text-cyan-200">
                Autovalutazione docente
              </h3>
              <ul className="mt-3 space-y-2">
                {teacherReflection.map((item) => (
                  <li key={item}>☐ {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-10 md:px-16">
        <div className="mx-auto max-w-5xl space-y-6">
          <h2 className="text-xl font-semibold text-white">
            Prompt per le slide della presentazione (10/11)
          </h2>
          <p className="text-sm text-slate-300">
            Ogni prompt integra palette cromatiche e suggerimenti iconografici per
            generare slide su Canva, Genially o strumenti analoghi, garantendo
            coerenza estetica e comunicativa con la lezione progettata.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {slides.map((slide) => (
              <article
                key={slide.id}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200 backdrop-blur"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wide text-cyan-200">
                      Slide {slide.id}
                    </span>
                    <span className="text-xs text-slate-300">{slide.timing}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {slide.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wide text-slate-300">
                    Focus: {slide.focus}
                  </p>
                  <ul className="space-y-1 text-slate-200">
                    {slide.keyIdeas.map((idea) => (
                      <li key={idea}>• {idea}</li>
                    ))}
                  </ul>
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-200">
                      Prompt grafico
                    </h4>
                    <p className="mt-2 text-slate-200">{slide.designPrompt}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-200">
                      Palette consigliata
                    </h4>
                    <ul className="mt-2 space-y-1">
                      {slide.palette.map((color) => (
                        <li key={color}>{color}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-200">
                      Immagine suggerita
                    </h4>
                    <p className="mt-2 text-slate-200">{slide.imagePrompt}</p>
                  </div>
                </div>
                <div className="mt-6 rounded-xl border border-white/10 bg-slate-900/60 p-4">
                  <h4 className="text-sm font-semibold text-cyan-200">
                    Script orale
                  </h4>
                  <p className="mt-2 text-slate-100">{slide.script}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-10 md:px-16">
        <div className="mx-auto max-w-5xl space-y-6">
          <h2 className="text-xl font-semibold text-white">Domande attese</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200 backdrop-blur">
              <h3 className="text-base font-semibold text-cyan-200">
                Commissione – Italiano
              </h3>
              <ul className="mt-3 space-y-2">
                {commissionQuestionsIt.map((question) => (
                  <li key={question}>• {question}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200 backdrop-blur">
              <h3 className="text-base font-semibold text-cyan-200">
                Commissione – English
              </h3>
              <ul className="mt-3 space-y-2">
                {commissionQuestionsEn.map((question) => (
                  <li key={question}>• {question}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
