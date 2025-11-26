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
  },
};
