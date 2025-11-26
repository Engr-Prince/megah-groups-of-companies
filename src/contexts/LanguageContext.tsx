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
  },
};
