import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'EN' | 'FR';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('EN');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  EN: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      team: 'Team',
      support: 'Support',
      contact: 'Contact',
    },
    hero: {
      title: 'THINK BIG.',
      subtitle: 'GROW MEGAH',
      description: 'Empowering African innovation through cutting-edge technology solutions. From web development to startup consulting, we\'re building the digital future of Cameroon.',
      exploreServices: 'Explore Services',
      contactUs: 'Contact Us',
    },
    mission: {
      title: 'Our Mission',
      description: 'To revolutionize the African tech landscape by providing world-class technology solutions, fostering innovation, and empowering the next generation of African tech leaders.',
      innovation: 'Innovation',
      innovationDesc: 'Cutting-edge solutions that push the boundaries of what\'s possible in African tech.',
      community: 'Community',
      communityDesc: 'Building a strong network of tech professionals and entrepreneurs across Africa.',
      globalImpact: 'Global Impact',
      globalImpactDesc: 'Connecting African innovation with global markets and opportunities.',
    },
    services: {
      title: 'What We Do',
      description: 'From concept to deployment, we provide comprehensive technology solutions that drive growth and innovation.',
      webDev: 'Web & App Development',
      webDevDesc: 'Modern, scalable applications built with cutting-edge technology.',
      consulting: 'Startup Consulting',
      consultingDesc: 'Strategic guidance to transform your ideas into successful businesses.',
      documents: 'Document Processing',
      documentsDesc: 'Efficient document services for travel and business needs.',
      platform: 'MegaConnect Platform',
      platformDesc: 'Connecting talent with opportunities across Africa.',
      viewAll: 'View All Services',
    },
    cta: {
      title: 'Ready to Grow MEGAH?',
      description: 'Join us in building the future of African technology. Let\'s create something extraordinary together.',
      getStarted: 'Get Started Today',
    },
    about: {
      heroTitle: 'About',
      heroCompany: 'MEGAH GROUP OF COMPANIES',
      heroSubtitle: 'Building the future of African technology, one innovation at a time.',
      storyTitle: 'Our Story',
      storyP1: 'MEGAH Group of Companies was born from a vision to transform Africa\'s technological landscape. Founded in the vibrant city of Douala, Cameroon, we emerged from the understanding that Africa\'s greatest asset is its people and their unlimited potential for innovation.',
      storyP2: 'Our journey began with a simple belief: that with the right tools, mentorship, and opportunities, African entrepreneurs and developers can compete globally while solving local challenges. Today, we stand as a testament to that belief.',
      storyP3: 'From our headquarters in Douala, we\'ve expanded our reach across Cameroon and beyond, empowering startups, training the next generation of tech leaders, and building solutions that matter to our communities.',
      foundedTitle: 'Founded in Cameroon',
      foundedDesc: 'Rooted in African excellence and innovation',
      communityTitle: 'Community First',
      communityDesc: 'Building solutions that empower our people',
      standardsTitle: 'Global Standards',
      standardsDesc: 'World-class solutions with local understanding',
      foundationTitle: 'Our Foundation',
      foundationDesc: 'The principles that guide everything we do',
      mission: 'Mission',
      missionDesc: 'To revolutionize the African tech landscape by providing world-class technology solutions, fostering innovation, and empowering the next generation of African tech leaders.',
      vision: 'Vision',
      visionDesc: 'To become Africa\'s leading technology company, recognized globally for innovation, excellence, and our contribution to the continent\'s digital transformation.',
      values: 'Values',
      valuesInnovation: 'Innovation',
      valuesInnovationDesc: 'Pushing boundaries with creative solutions',
      valuesExcellence: 'Excellence',
      valuesExcellenceDesc: 'Delivering quality in everything we do',
      valuesIntegrity: 'Integrity',
      valuesIntegrityDesc: 'Building trust through transparency',
      valuesCommunity: 'Community',
      valuesCommunityDesc: 'Growing together as one Africa',
      cultureTitle: 'Our Culture',
      cultureDesc: 'Innovation, Legacy, and Energy - the three pillars that define the MEGAH GROUP spirit',
      cultureInnovation: 'Innovation',
      cultureInnovationDesc: 'We constantly push the boundaries of what\'s possible, turning bold ideas into reality through cutting-edge technology and creative problem-solving.',
      cultureLegacy: 'Legacy',
      cultureLegacyDesc: 'Every project we undertake is designed to leave a lasting positive impact on our communities and contribute to Africa\'s technological advancement.',
      cultureEnergy: 'Energy',
      cultureEnergyDesc: 'Our youthful spirit and passion for technology drive us to work with enthusiasm, creativity, and an unwavering commitment to excellence.',
    },
    team: {
      heroTitle: 'Our',
      heroHighlight: 'Team',
      heroSubtitle: 'Meet the passionate innovators driving Africa\'s tech revolution',
      founderRole: 'Founder & CEO',
      ceoBio: 'Visionary leader, Pastor, and passionate servant of God. Founder of MEGAH GROUP OF COMPANIES and BALM GLOBAL Ministry (India). Walking daily with deep conviction to use technology, writing, and pastoral calling to impact lives and bring glory to God. Expert in full-stack development, committed to empowering African tech talent while spreading Christ\'s message through digital innovation. As a developer, designer, writer, and minister, every project carries excellence, creativity, and divine purpose.',
      specialties: 'Specialties:',
      fullStackDev: 'Full-Stack Development',
      digitalInnovation: 'Digital Innovation',
      pastorMinistry: 'Pastor & Ministry',
      writingContent: 'Writing & Content Creation',
      graphicsDesign: 'Graphics Design',
      valuesDriveTitle: 'What Drives Us',
      valuesDriveSubtitle: 'The values and principles that unite our team in building extraordinary solutions',
      innovationFirst: 'Innovation First',
      innovationFirstDesc: 'We constantly push boundaries and embrace new technologies to create groundbreaking solutions.',
      collaboration: 'Collaboration',
      collaborationDesc: 'Our diverse expertise combines to deliver solutions greater than the sum of our parts.',
      excellence: 'Excellence',
      excellenceDesc: 'Every project receives our full attention to detail and commitment to quality.',
      joinTitle: 'Join Our Mission',
      joinSubtitle: 'Ready to be part of Africa\'s tech revolution? We\'re always looking for talented individuals to join our team.',
      viewPositions: 'View Open Positions',
      achievementsTitle: 'Our Achievements & Recognitions',
      achievementsSubtitle: 'Celebrating the milestones and certifications that mark our journey of excellence',
      projectsDelivered: 'Projects Delivered',
      projectsDeliveredDesc: '50+ successful projects delivered across web, mobile, and consulting services',
      certifiedPros: 'Certified Professionals',
      certifiedProsDesc: 'Team members certified in React, Python, Agile/Scrum, and Google Cloud',
      industryRecognition: 'Industry Recognition',
      industryRecognitionDesc: 'Recognized as emerging tech innovators in Cameroon\'s digital ecosystem',
      clientSatisfaction: 'Client Satisfaction',
      clientSatisfactionDesc: '98% client satisfaction rate with long-term partnership focus',
    },
  },
  FR: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      services: 'Services',
      team: 'Équipe',
      support: 'Support',
      contact: 'Contact',
    },
    hero: {
      title: 'PENSEZ GRAND.',
      subtitle: 'GRANDISSEZ MEGAH',
      description: 'Autonomiser l\'innovation africaine grâce à des solutions technologiques de pointe. Du développement web au conseil pour startups, nous construisons l\'avenir numérique du Cameroun.',
      exploreServices: 'Explorer les Services',
      contactUs: 'Contactez-nous',
    },
    mission: {
      title: 'Notre Mission',
      description: 'Révolutionner le paysage technologique africain en fournissant des solutions technologiques de classe mondiale, en favorisant l\'innovation et en responsabilisant la prochaine génération de leaders technologiques africains.',
      innovation: 'Innovation',
      innovationDesc: 'Des solutions de pointe qui repoussent les limites du possible dans la technologie africaine.',
      community: 'Communauté',
      communityDesc: 'Construire un réseau solide de professionnels de la technologie et d\'entrepreneurs à travers l\'Afrique.',
      globalImpact: 'Impact Global',
      globalImpactDesc: 'Connecter l\'innovation africaine avec les marchés et opportunités mondiaux.',
    },
    services: {
      title: 'Ce Que Nous Faisons',
      description: 'Du concept au déploiement, nous fournissons des solutions technologiques complètes qui favorisent la croissance et l\'innovation.',
      webDev: 'Développement Web & Apps',
      webDevDesc: 'Applications modernes et évolutives construites avec une technologie de pointe.',
      consulting: 'Conseil aux Startups',
      consultingDesc: 'Conseils stratégiques pour transformer vos idées en entreprises prospères.',
      documents: 'Traitement de Documents',
      documentsDesc: 'Services de documents efficaces pour les voyages et les besoins professionnels.',
      platform: 'Plateforme MegaConnect',
      platformDesc: 'Connecter les talents avec les opportunités à travers l\'Afrique.',
      viewAll: 'Voir Tous les Services',
    },
    cta: {
      title: 'Prêt à Grandir MEGAH?',
      description: 'Rejoignez-nous pour construire l\'avenir de la technologie africaine. Créons quelque chose d\'extraordinaire ensemble.',
      getStarted: 'Commencer Aujourd\'hui',
    },
    about: {
      heroTitle: 'À propos de',
      heroCompany: 'MEGAH GROUP OF COMPANIES',
      heroSubtitle: 'Construire l\'avenir de la technologie africaine, une innovation à la fois.',
      storyTitle: 'Notre Histoire',
      storyP1: 'MEGAH Group of Companies est né d\'une vision de transformer le paysage technologique africain. Fondé dans la ville dynamique de Douala, au Cameroun, nous avons émergé de la compréhension que le plus grand atout de l\'Afrique est son peuple et son potentiel illimité d\'innovation.',
      storyP2: 'Notre voyage a commencé avec une croyance simple : qu\'avec les bons outils, le mentorat et les opportunités, les entrepreneurs et développeurs africains peuvent rivaliser à l\'échelle mondiale tout en résolvant les défis locaux. Aujourd\'hui, nous sommes un témoignage de cette croyance.',
      storyP3: 'Depuis notre siège à Douala, nous avons étendu notre portée à travers le Cameroun et au-delà, en responsabilisant les startups, en formant la prochaine génération de leaders technologiques et en construisant des solutions qui comptent pour nos communautés.',
      foundedTitle: 'Fondé au Cameroun',
      foundedDesc: 'Enraciné dans l\'excellence et l\'innovation africaines',
      communityTitle: 'Communauté D\'abord',
      communityDesc: 'Construire des solutions qui responsabilisent notre peuple',
      standardsTitle: 'Normes Mondiales',
      standardsDesc: 'Solutions de classe mondiale avec compréhension locale',
      foundationTitle: 'Notre Fondation',
      foundationDesc: 'Les principes qui guident tout ce que nous faisons',
      mission: 'Mission',
      missionDesc: 'Révolutionner le paysage technologique africain en fournissant des solutions technologiques de classe mondiale, en favorisant l\'innovation et en responsabilisant la prochaine génération de leaders technologiques africains.',
      vision: 'Vision',
      visionDesc: 'Devenir l\'entreprise technologique leader de l\'Afrique, reconnue mondialement pour l\'innovation, l\'excellence et notre contribution à la transformation numérique du continent.',
      values: 'Valeurs',
      valuesInnovation: 'Innovation',
      valuesInnovationDesc: 'Repousser les limites avec des solutions créatives',
      valuesExcellence: 'Excellence',
      valuesExcellenceDesc: 'Fournir de la qualité dans tout ce que nous faisons',
      valuesIntegrity: 'Intégrité',
      valuesIntegrityDesc: 'Construire la confiance par la transparence',
      valuesCommunity: 'Communauté',
      valuesCommunityDesc: 'Grandir ensemble comme une seule Afrique',
      cultureTitle: 'Notre Culture',
      cultureDesc: 'Innovation, Héritage et Énergie - les trois piliers qui définissent l\'esprit MEGAH GROUP',
      cultureInnovation: 'Innovation',
      cultureInnovationDesc: 'Nous repoussons constamment les limites du possible, transformant des idées audacieuses en réalité grâce à une technologie de pointe et à la résolution créative de problèmes.',
      cultureLegacy: 'Héritage',
      cultureLegacyDesc: 'Chaque projet que nous entreprenons est conçu pour laisser un impact positif durable sur nos communautés et contribuer à l\'avancement technologique de l\'Afrique.',
      cultureEnergy: 'Énergie',
      cultureEnergyDesc: 'Notre esprit jeune et notre passion pour la technologie nous poussent à travailler avec enthousiasme, créativité et un engagement inébranlable envers l\'excellence.',
    },
    team: {
      heroTitle: 'Notre',
      heroHighlight: 'Équipe',
      heroSubtitle: 'Rencontrez les innovateurs passionnés qui conduisent la révolution technologique africaine',
      founderRole: 'Fondateur & PDG',
      ceoBio: 'Leader visionnaire, Pasteur et serviteur passionné de Dieu. Fondateur de MEGAH GROUP OF COMPANIES et BALM GLOBAL Ministry (Inde). Marchant quotidiennement avec une profonde conviction d\'utiliser la technologie, l\'écriture et la vocation pastorale pour impacter des vies et apporter la gloire à Dieu. Expert en développement full-stack, engagé à responsabiliser les talents technologiques africains tout en diffusant le message du Christ à travers l\'innovation numérique. En tant que développeur, designer, écrivain et ministre, chaque projet porte l\'excellence, la créativité et un objectif divin.',
      specialties: 'Spécialités:',
      fullStackDev: 'Développement Full-Stack',
      digitalInnovation: 'Innovation Numérique',
      pastorMinistry: 'Pasteur & Ministère',
      writingContent: 'Écriture & Création de Contenu',
      graphicsDesign: 'Conception Graphique',
      valuesDriveTitle: 'Ce Qui Nous Motive',
      valuesDriveSubtitle: 'Les valeurs et principes qui unissent notre équipe dans la création de solutions extraordinaires',
      innovationFirst: 'Innovation D\'abord',
      innovationFirstDesc: 'Nous repoussons constamment les limites et adoptons de nouvelles technologies pour créer des solutions révolutionnaires.',
      collaboration: 'Collaboration',
      collaborationDesc: 'Notre expertise diversifiée se combine pour fournir des solutions supérieures à la somme de nos parties.',
      excellence: 'Excellence',
      excellenceDesc: 'Chaque projet reçoit toute notre attention aux détails et notre engagement envers la qualité.',
      joinTitle: 'Rejoignez Notre Mission',
      joinSubtitle: 'Prêt à faire partie de la révolution technologique africaine? Nous recherchons toujours des personnes talentueuses pour rejoindre notre équipe.',
      viewPositions: 'Voir Les Postes Ouverts',
      achievementsTitle: 'Nos Réalisations & Reconnaissances',
      achievementsSubtitle: 'Célébrer les jalons et certifications qui marquent notre parcours d\'excellence',
      projectsDelivered: 'Projets Livrés',
      projectsDeliveredDesc: 'Plus de 50 projets réussis livrés dans le web, le mobile et les services de conseil',
      certifiedPros: 'Professionnels Certifiés',
      certifiedProsDesc: 'Membres de l\'équipe certifiés en React, Python, Agile/Scrum et Google Cloud',
      industryRecognition: 'Reconnaissance Industrielle',
      industryRecognitionDesc: 'Reconnus comme innovateurs technologiques émergents dans l\'écosystème numérique camerounais',
      clientSatisfaction: 'Satisfaction Client',
      clientSatisfactionDesc: 'Taux de satisfaction client de 98% avec un accent sur les partenariats à long terme',
    },
  },
};
