import React, { useState , createContext, useContext, useEffect } from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM
import { FaYoutube,FaTwitter, FaLinkedin } from 'react-icons/fa';
import { IconContext  } from "react-icons";
import Select from "react-select";
import './App.css'; // Import your CSS file

import ServicesList from "./ServicesList.js"
import AiAgentsList from "./AIAgentsList.js"
import SolutionsList from "./SolutionsList.js"

import imgAiBClogo from './aibclogo.jpg';
import imgGiftVoucher_ITA from './giftvoucher_ITA.jpg';
import imgGiftVoucher_FRA from './giftvoucher_FRA.jpg';
import imgGiftVoucher_ENG from './giftvoucher_ENG.jpg';
import imgReady2Use_FRA from './Ready2Use_FRA.jpg';
import imgReady2Use_ITA from './Ready2Use_ITA.jpg';
import imgReady2Use_ENG from './Ready2Use_ENG.jpg';

function getInitialLanguage() {
  // 1. Try navigator.language (most reliable)
  if (navigator.language) {
    const userLang = navigator.language.split('-')[0]; // Get the primary language code (e.g., "en")
    return userLang;
  } 
  // 2. Fallback to navigator.userLanguage (older browsers)
  else if (navigator.userLanguage) {
    return navigator.userLanguage.split('-')[0];
  } 
  // 3. Default to English if no language detected
  else {
    return 'en';
  }
}

const LanguageContext = createContext(getInitialLanguage()); // Default language: English

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage());
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// 3. Create a hook to use the context
function useLanguage() {
  return useContext(LanguageContext);
}


const translations = {
  en: {
    services: "Services",
    aiagents: "AI Agents",
    solutions: "Solutions",
    contact: "Contact",

    contactTitle: "Contact",
    contactText: "Let's discuss how I can help you leverage technology to achieve your business goals.",
    followYT: "Contact us on Youtube",
    followX: "Contact us on X/Twitter",
    followLnk: "Contact us on Linkedin",

    heroMsg1: "Our target: save your time and money (30 to 60 %)",
    heroMsg2: "Think an AI agent as a great employee (committed and tireless).",
    heroMsg3: "Custom development tailored to your needs",   

    servicesTitle: "AI Services for your Business",
    agentsTitle: "Ready-to-use AI Agents",
    solutionsTitle: "AI Custom Solutions",

    serv1Title: "Customer Support & Helpdesk Automation",
    serv1Descr: "Advanced AI Chatbots for voices, email and documents.",
    serv2Title: "Lead Generation & Automatic Selling",
    serv2Descr: "AI to gather, qualify and cimtomize the customer care.",
    serv3Title: "Company Doc Analysys & Automatica Text Generation",
    serv3Descr: "Synthetizing docs, generating reports and answers through AI.",
    serv4Title: "Deep AI Analysys on Company's Sata",
    serv4Descr: "AI Dashboard, data monitieing and alerting on anomalies.",
    serv5Title: "Supply Chain & Logistic optimizations",
    serv5Descr: "Anticipanting business demands, ship tracking and costs optimization.",
    serv6Title: "Automating and SyncingSocial Posts",
    serv6Descr: "Dedicated AI to craft high quality, ideal multi-social posts.",

    agent1Title: "SocialAI",
    agent1Descr: "AI agent crafting optimized social posts for your businss.",
    agent2Title: "RestaurAI",
    agent2Descr: "Vocal AI answering customer questions by phone and allowing table booking.",
    agent3Title: "BookingAI",
    agent3Descr: "Vocal AI answering customer questions by phone and allowing single slot booking.",
    agent4Title: "DJ-AI",
    agent4Descr: "Dedicated AI for party animations, handling chat messaging and mobile games.",
    agent5Title: "InstagramAI",
    agent5Descr: "Specific quality posting on Istagram + customer targeting through bulk DM.",
    agent6Title: "Business Coach",
    agent6Descr: "AI learning your business over time and acting as your personal coach and advisor",

    soluz1Title: "Business Deep Dive",
    soluz1Descr: "Consulting hours to analyze to verify and estimate AI all possible cost reductions",
    soluz2Title: "Custom Development",
    soluz2Descr: "Development of custom AI agents tailored to your biz needs.",
    soluz3Title: "Tech View Subscription",
    soluz3Descr: "Periodic tech-view reporting to closely monitor a specific field.",

    giftvoucherTitle: "Enjoy our welcome gift",
    giftvoucherImage: imgGiftVoucher_ENG,
    giftvoucherMsg: "Contact us now",

    imgReady2Use: imgReady2Use_ENG
  },
  fr: {
    services: "Services",
    aiagents: "Agents IA",
    solutions: "Solutions",
    contact: "Contact",

    contactTitle: "Contact",
    contactText: "Discutons de la manière dont l'IA va vous aider à atteindre vos objectifs business.",
    followYT: "Contactez-nous sur Youtube",
    followX: "Contactez-nous sur X/Twitter",
    followLnk: "Contactez-nous sur Linkedin",

    heroMsg1: "Notre objectif: vous faire gagner temps et argent avec l'IA (de 30 à 60 %)",
    heroMsg2: "Pense à un agent IA comme à un employé (engagé et infatigable).",
    heroMsg3: "Développements adapté à vos besoins",   

    servicesTitle: "Services IA pour votre Business",
    agentsTitle: "Agents IA prêts à l'emploi",
    solutionsTitle: "Solutions IA personnalisées",

    serv1Title: "Automation du Support et Assitance  Client",
    serv1Descr: "Chatbot avancés AI pour voix, email et documents entreprise.",
    serv2Title: "Lead Generation & Ventes Automatisés",
    serv2Descr: "AI pour recueillir, qualifier et personnaliser le contact clients.",
    serv3Title: "Analyse de Documents & Generation de Texte",
    serv3Descr: "AI pour syhthétiser dans des reports et donner des réponses.",
    serv4Title: "Monitorage & Analyse de Données Business",
    serv4Descr: "Dashboard AI, analyse data et alerte anomalies.",
    serv5Title: "Optimizzation de la Supply Chain & Logistique",
    serv5Descr: "Anticipation del ademande, tracking des expéditions e optimizzation des couts.",
    serv6Title: "Automation e Synchronisation de Post sur Social",
    serv6Descr: "AI pour générer, programmer e optimiser vos posts social network.",

    agent1Title: "SocialAI",
    agent1Descr: "Agent AI qui rédige social posts optimisé pour ton business.",
    agent2Title: "RestaurAI",
    agent2Descr: "Une voix AI qui répond aux questions des clients et gère les reservations des tables.",
    agent3Title: "BookingAI",
    agent3Descr: "Une voix AI qui répond aux questions des clients et gère les reservations à une personne.",
    agent4Title: "DJ-AI",
    agent4Descr: "IA dédiés qui anime des soirées party avec une messagérie de chat et des jeux ludiques smartphone.",
    agent5Title: "InstagramAI",
    agent5Descr: "IA qui crée des post qualitatifs sur Istagram et permet un de cibles les meilleurs clients via des DM massifs.",
    agent6Title: "Business Coach",
    agent6Descr: "Une IA qui apprend ton business dans le temps et agit comme un conseiller personnel en affaires",

    soluz1Title: "Etude Business Approfondie",
    soluz1Descr: "Des heures de consulting pour analyser et vérifier toutes les possibles réductions de couts.",
    soluz2Title: "Dévelopments ciblés",
    soluz2Descr: "Création d'agents IA coordonnées, spécifiques à vos besoins.",
    soluz3Title: "Abonnement Veille Technologique ",
    soluz3Descr: "Reporting de veille pour monitorer un secteur critique pour votre activité.",

    giftvoucherTitle: "Profitez de notre offre de bienvenue",
    giftvoucherImage: imgGiftVoucher_FRA,
    giftvoucherMsg: "Contactez-nous.",

    imgReady2Use: imgReady2Use_FRA
  },
  it: {
    services: "Servizi",
    aiagents: "Agenti IA",
    solutions: "Soluzioni",
    contact: "Contatti",

    contactTitle: "Contatti",
    contactText: "Discutiamo di come posso aiutarti a sfruttare la tecnologia per raggiungere i tuoi obiettivi",
    followYT: "Contattaci su Youtube",
    followX: "Contattaci su X/Twitter",
    followLnk: "Contattaci su Linkedin",

    heroMsg1: "Il nostro obiettivo: farvi guadagnare tempo et denaro (da 30 a 60 %)",
    heroMsg2: "Pensa a un agente IA come un collaboratore ligio e instancabile",
    heroMsg3: "Sviluppi software adattati alle vostre necessità",   

    servicesTitle: "Servizi IA per il tuo Business",
    agentsTitle: "Agenti IA pronti all'uso",
    solutionsTitle: "Soluzioni IA personnalizzate",

    serv1Title: "Automazione di Customer Support & Helpdesk",
    serv1Descr: "Chatbot avanzati AI per voce, email e documenti aziendali.",
    serv2Title: "Lead Generation & Vendite Automatizzate",
    serv2Descr: "AI per raccogliere, qualificare e personalizzare il contatto con i clienti.",
    serv3Title: "Analisi Documentale & Generazione Automatica di Testi",
    serv3Descr: "AI per riassumere documenti, generare report e risposte email.",
    serv4Title: "Monitoraggio & Analisi Dati Aziendali",
    serv4Descr: "Dashboard AI, analisi dati e alert su anomalie.",
    serv5Title: "Ottimizzazione della Supply Chain & Logistica",
    serv5Descr: "Previsione domanda, tracking spedizioni e ottimizzazione costi.",
    serv6Title: "Automazione e Sincronizzazione dei Post sui Social",
    serv6Descr: "AI per generare, programmare e ottimizzare post sui social.",

    agent1Title: "SocialAI",
    agent1Descr: "Agente AI che redige social posts ottimizzati per il tuo business.",
    agent2Title: "RistorAI",
    agent2Descr: "Una voce IA che risponde alle domande clienti e prenotazioni tavoli per telefono.",
    agent3Title: "PrenotAI",
    agent3Descr: "Una voce IA che risponde alle domande clienti e prenotazioni per una persona via telefono.",
    agent4Title: "DJ-AI",
    agent4Descr: "IA dedicata in grado  di animare serate con messageria chat et giochi in rete su smartphone.",
    agent5Title: "InstagramAI",
    agent5Descr: "IA che crea post di qualità su Istagram e invio messaggi promozionali ai migliori clients via DM simultanei.",
    agent6Title: "Business Coach",
    agent6Descr: "Una IA cha impara il tuo business nel tempo e agisce come il tuo advisor personale in affari",

    soluz1Title: "Studio Business Approfondito",
    soluz1Descr: "Ore di consulting per analizzare e verificare tutte le riduzioni di costo possibili.",
    soluz2Title: "Sviluppi mirati",
    soluz2Descr: "Creazione di agenti IA coordinati che coprono spacificamente le vostre necessità.",
    soluz3Title: "Abbonamento Veglia Technologica ",
    soluz3Descr: "Reporting di veglia per monitorare un settore critico per la vostra attività.",

    giftvoucherTitle: "approfitta della nostra offerta benvenuto",
    giftvoucherImage: imgGiftVoucher_ITA,
    giftvoucherMsg: "Contattaci adesso",

    imgReady2Use: imgReady2Use_ITA
  },
};

const options = [
  { value: "en", label: "English", flag: "https://flagcdn.com/w40/gb.png" },
  { value: "fr", label: "Français", flag: "https://flagcdn.com/w40/fr.png" },
  { value: "it", label: "Italiano", flag: "https://flagcdn.com/w40/it.png" },
];

function App() {

  const { language, setLanguage } = useLanguage();  
  const [serviceLetter, setServiceLetter] = useState(0);


  useEffect(() => {
    document.title = 'AIBC - Tech';
  }, []);


  return (

    <div className="app-container">

      <center>
        <header className="header">      
              <div>
                  <img src={imgAiBClogo} alt="Img with/witout AI"  style={{ width:'78%' }}  />
              </div>
        </header>
      </center>
      <div id='divAI'>

      <center>
        <nav className="nav">
          <a href="#services" className="nav-link">{translations[language].services}</a>
          <a href="#aiagents" className="nav-link">{translations[language].aiagents}</a>
          <a href="#solutions" className="nav-link">{translations[language].solutions}</a>   
          <a href="#contact" className="nav-link">{translations[language].contact}</a>    
          
          <select id="selectLanguage"  style={{background:'#fff', margin: '1em'}}
                  value={language} 
                  onChange={e => setLanguage(e.target.value)}>
                    <option value="en">English</option>
                    <option value="fr">Français</option>
                    <option value="it">Italiano</option>
        </select>              
        </nav> 
        <p></p>
        
      </center> 
     

      <center>
            <section className="hero">
              <div style={{margin:'12px',  fontSize:'1.0em'}}>{translations[language].heroMsg1}</div> 
            </section>      
            <ServicesList langTransl={translations[language]}></ServicesList>
            <section className="hero">
              <div style={{margin:'12px', fontSize:'1.0em'}}>{translations[language].heroMsg2}</div>
            </section>
            <AiAgentsList langTransl={translations[language]}></AiAgentsList>
            <section className="hero2">
                  <img src={translations[language].imgReady2Use} alt="Img with/witout AI"  style={{ width:'78%' }}  />
            </section>
            <section className="hero">
              <div style={{margin:'12px', fontSize:'1.0em'}}>{translations[language].heroMsg3}</div>
            </section>
            <SolutionsList langTransl={translations[language]}></SolutionsList>

            <section className="hero2"> 
    
                <h4 style={{margin:'8px'}}>{translations[language].giftvoucherTitle}</h4> 
                <div>
                  <img src={translations[language].giftvoucherImage} height={'50%'} width={'80%'} alt="Img Gift Voucher" />
                </div>
                  
            </section>

            <section className="hero" style={{background:'#000'}}>
                <h3 >{translations[language].contactTitle}</h3> {/* Use translations here */}
                <h5 >{translations[language].contactText}</h5> {/* Use translations here */}
                <h6 >Tel: +033 6 65285937 (FR)</h6>  
                <h6 >E-mail: contact@aibc-tech.com</h6>                               
                <IconContext.Provider value={{ size: 36}}> 
                  <a style={{color:'#dd8'}} href="https://x.com/blockconseil"  target="_blank">
                    <FaTwitter style={{color:'#888'}}/><div style={{color:'#999'}}>{translations[language].followX}</div>
                  </a>
                  <a style={{color:'#dd8'}} href="https://www.linkedin.com/in/david-teruzzi-8667965/"  target="_blank">
                    <FaLinkedin style={{color:'#0A66C2'}}/><div style={{color:'#999'}}>{translations[language].followLnk}</div>
                  </a>
                </IconContext.Provider>
                <p></p>
              </section>
        </center>

      </div> 


      <footer className="footer">
        <p style={{color:'#eee'}}>&copy; {new Date().getFullYear()} AiBC Tech. All rights reserved.</p>
      </footer>
    </div>

  
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LanguageProvider>  {/* This is essential */}
      <App />
    </LanguageProvider>
  </React.StrictMode>
);

export default App;