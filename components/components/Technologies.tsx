'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Technologies.module.css';
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaNpm,
  FaAndroid, FaApple, FaRainbow
} from 'react-icons/fa';
import {
  SiTypescript, SiNextdotjs, SiExpress, SiMongodb, SiTailwindcss,
  SiRedux, SiGraphql, SiDocker, SiJest, SiReactrouter, SiVuedotjs,
  SiAngular, SiBootstrap, SiSass, SiLess, SiWebpack,
  SiVite, SiEslint, SiPrettier, SiPostman, SiFigma,
  SiJquery, SiAstro, SiRemix, SiExpo, SiIonic, SiApachecordova, SiCapacitor,
  SiSolidity, SiEthereum, SiChainlink, SiPolygon, SiOpenzeppelin, SiIpfs,
  SiVercel, SiNetlify, SiHeroku, SiCypress, SiBabel, SiGatsby, SiCloudflare
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';
import { GiSpiderWeb } from 'react-icons/gi';
import { BiSolidHardHat } from 'react-icons/bi';
import { SiFlutter } from "react-icons/si";

interface TechItem {
  id: number;
  name: string;
  icon: React.ReactNode;
  category: 'frontend' | 'backend' | 'tools' | 'mobile' | 'smartcontract' | 'all';
  color?: string;
}

type CategoryType = TechItem['category'];

const Technologies = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');

  const getTechColor = (name: string) => {
    const colorMap: Record<string, string> = {
      'HTML5': '#E34F26',
      'CSS3': '#1572B6',
      'JavaScript': '#F7DF1E',
      'TypeScript': '#3178C6',
      'React': '#61DAFB',
      'Next.js': '#000000',
      'Vue.js': '#42b883',
      'Angular': '#dd1b16',
      'Redux': '#764ABC',
      'Tailwind CSS': '#06B6D4',
      'React Router': '#CA4245',
      'Bootstrap': '#7952B3',
      'SASS': '#CC6699',
      'LESS': '#1D365D',
      'Node.js': '#339933',
      'Express': '#000000',
      'GraphQL': '#E10098',
      'MongoDB': '#47A248',
      'React Native': '#61DAFB',
      'Git': '#F05032',
      'GitHub': '#181717',
      'Docker': '#2496ED',
      'Jest': '#C21325',
      'npm': '#CB3837',
      'Vite': '#646CFF',
      'Webpack': '#8DD6F9',
      'ESLint': '#4B32C3',
      'Prettier': '#F7B93E',
      'Postman': '#FF6C37',
      'Figma': '#F24E1E',
      'jQuery': '#0769AD',
      'Astro': '#FF5D01',
      'Remix': '#000000',
      'Expo': '#000020',
      'Android': '#3DDC84',
      'Apple': '#999999',
      'Ionic': '#3880FF',
      'Cordova': '#EE4C40',
      'Capacitor': '#3B3B3B',
      'Flutter': '#02569B',
      'Solidity': '#363636',
      'Ethereum': '#3C3C3D',
      'Chainlink': '#2A5ADA',
      'Polygon': '#8247E5',
      'Hardhat': '#F6851B',
      'Ethers.js': '#e6c926ff',
      'Wagmi': '#22123dff',
      'OpenZeppelin': '#1a181cff',
      'IPFS': '#269365e9',
      'RainbowKit': '#2b821d8a',
      'Vercel': '#000000',
      'Netlify': '#00C7B7',
      'Heroku': '#430098',
      'Cypress': '#17202C',
      'Babel': '#F9DC3E',
      'Gatsby': '#663399',
      'Cloudflare': '#F38020'
    };
    return colorMap[name] || '#4B5563';
  };

  const techStack: TechItem[] = [
    // Frontend
    { id: 1, name: "HTML5", icon: <FaHtml5 />, category: 'frontend', color: getTechColor("HTML5") },
    { id: 2, name: "CSS3", icon: <FaCss3Alt />, category: 'frontend', color: getTechColor("CSS3") },
    { id: 3, name: "JavaScript", icon: <FaJs />, category: 'frontend', color: getTechColor("JavaScript") },
    { id: 4, name: "TypeScript", icon: <SiTypescript />, category: 'frontend', color: getTechColor("TypeScript") },
    { id: 5, name: "React", icon: <FaReact />, category: 'frontend', color: getTechColor("React") },
    { id: 6, name: "Next.js", icon: <SiNextdotjs />, category: 'frontend', color: getTechColor("Next.js") },
    { id: 7, name: "Vue.js", icon: <SiVuedotjs />, category: 'frontend', color: getTechColor("Vue.js") },
    { id: 8, name: "Angular", icon: <SiAngular />, category: 'frontend', color: getTechColor("Angular") },
    { id: 9, name: "Redux", icon: <SiRedux />, category: 'frontend', color: getTechColor("Redux") },
    { id: 10, name: "Tailwind CSS", icon: <SiTailwindcss />, category: 'frontend', color: getTechColor("Tailwind CSS") },
    { id: 11, name: "React Router", icon: <SiReactrouter />, category: 'frontend', color: getTechColor("React Router") },
    { id: 12, name: "Bootstrap", icon: <SiBootstrap />, category: 'frontend', color: getTechColor("Bootstrap") },
    { id: 13, name: "SASS", icon: <SiSass />, category: 'frontend', color: getTechColor("SASS") },
    { id: 14, name: "LESS", icon: <SiLess />, category: 'frontend', color: getTechColor("LESS") },
    { id: 16, name: "jQuery", icon: <SiJquery />, category: 'frontend', color: getTechColor("jQuery") },
    { id: 17, name: "Astro", icon: <SiAstro />, category: 'frontend', color: getTechColor("Astro") },
    { id: 18, name: "Remix", icon: <SiRemix />, category: 'frontend', color: getTechColor("Remix") },
    
    // Backend
    { id: 19, name: "Node.js", icon: <FaNodeJs />, category: 'backend', color: getTechColor("Node.js") },
    { id: 20, name: "Express", icon: <SiExpress />, category: 'backend', color: getTechColor("Express") },
    { id: 21, name: "GraphQL", icon: <SiGraphql />, category: 'backend', color: getTechColor("GraphQL") },
    { id: 22, name: "MongoDB", icon: <SiMongodb />, category: 'backend', color: getTechColor("MongoDB") },
    
    // Tools
    { id: 23, name: "Git", icon: <FaGitAlt />, category: 'tools', color: getTechColor("Git") },
    { id: 24, name: "GitHub", icon: <FaGithub />, category: 'tools', color: getTechColor("GitHub") },
    { id: 25, name: "Docker", icon: <SiDocker />, category: 'tools', color: getTechColor("Docker") },
    { id: 26, name: "Jest", icon: <SiJest />, category: 'tools', color: getTechColor("Jest") },
    { id: 27, name: "npm", icon: <FaNpm />, category: 'tools', color: getTechColor("npm") },
    { id: 28, name: "Vite", icon: <SiVite />, category: 'tools', color: getTechColor("Vite") },
    { id: 29, name: "Webpack", icon: <SiWebpack />, category: 'tools', color: getTechColor("Webpack") },
    { id: 30, name: "ESLint", icon: <SiEslint />, category: 'tools', color: getTechColor("ESLint") },
    { id: 31, name: "Prettier", icon: <SiPrettier />, category: 'tools', color: getTechColor("Prettier") },
    { id: 32, name: "Postman", icon: <SiPostman />, category: 'tools', color: getTechColor("Postman") },
    { id: 33, name: "Figma", icon: <SiFigma />, category: 'tools', color: getTechColor("Figma") },
    { id: 34, name: "Vercel", icon: <SiVercel />, category: 'tools', color: getTechColor("Vercel") },
    { id: 35, name: "Netlify", icon: <SiNetlify />, category: 'tools', color: getTechColor("Netlify") },
    { id: 36, name: "Heroku", icon: <SiHeroku />, category: 'tools', color: getTechColor("Heroku") },
    { id: 37, name: "Cypress", icon: <SiCypress />, category: 'tools', color: getTechColor("Cypress") },
    { id: 38, name: "Babel", icon: <SiBabel />, category: 'tools', color: getTechColor("Babel") },
    { id: 39, name: "Gatsby", icon: <SiGatsby />, category: 'tools', color: getTechColor("Gatsby") },
    { id: 40, name: "Cloudflare", icon: <SiCloudflare />, category: 'tools', color: getTechColor("Cloudflare") },
    
    // Mobile
    { id: 41, name: 'Expo', icon: <SiExpo />, category: 'mobile', color: getTechColor('Expo') },
    { id: 42, name: 'Android', icon: <FaAndroid />, category: 'mobile', color: getTechColor('Android') },
    { id: 15, name: "React Native", icon: <TbBrandReactNative />, category: 'mobile', color: getTechColor("React Native") },
    { id: 43, name: 'Apple', icon: <FaApple />, category: 'mobile', color: getTechColor('Apple') },
    { id: 44, name: 'Ionic', icon: <SiIonic />, category: 'mobile', color: getTechColor('Ionic') },
    { id: 45, name: 'Cordova', icon: <SiApachecordova />, category: 'mobile', color: getTechColor('Cordova') },
    { id: 46, name: 'Capacitor', icon: <SiCapacitor />, category: 'mobile', color: getTechColor('Capacitor') },
    { id: 47, name: "Flutter", icon: <SiFlutter />, category: "mobile", color: getTechColor("Flutter") },

    // Smartcontract
    { id: 48, name: 'Solidity', icon: <SiSolidity />, category: 'smartcontract', color: getTechColor('Solidity') },
    { id: 49, name: 'Ethereum', icon: <SiEthereum />, category: 'smartcontract', color: getTechColor('Ethereum') },
    { id: 50, name: 'Chainlink', icon: <SiChainlink />, category: 'smartcontract', color: getTechColor('Chainlink') },
    { id: 51, name: 'Polygon', icon: <SiPolygon />, category: 'smartcontract', color: getTechColor('Polygon') },
    { id: 52, name: 'Hardhat', icon: <BiSolidHardHat />, category: 'smartcontract', color: getTechColor('Hardhat') },
    { id: 53, name: 'Ethers.js', icon: <SiEthereum />, category: 'smartcontract', color: getTechColor('Ethers.js') },
    { id: 54, name: 'Wagmi', icon: <GiSpiderWeb />, category: 'smartcontract', color: getTechColor('Wagmi') },
    { id: 55, name: 'OpenZeppelin', icon: <SiOpenzeppelin />, category: 'smartcontract', color: getTechColor('OpenZeppelin') },
    { id: 56, name: 'IPFS', icon: <SiIpfs />, category: 'smartcontract', color: getTechColor('IPFS') },
    { id: 57, name: 'RainbowKit', icon: <FaRainbow />, category: 'smartcontract', color: getTechColor('RainbowKit') },
  ];

  const categories = [
    { id: 1, name: 'all', title: 'All' },
    { id: 2, name: 'frontend', title: 'Frontend' },
    { id: 3, name: 'backend', title: 'Backend' },
    { id: 4, name: 'mobile', title: 'Mobile' },
    { id: 5, name: 'smartcontract', title: 'Smartcontract' },
    { id: 6, name: 'tools', title: 'Tools' },
  ];

  const filteredTech = activeCategory === 'all'
    ? techStack
    : techStack.filter((tech) => tech.category === activeCategory);

  return (
    <section className={styles.section} id="technologies">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.title}>Technologies</h2>

        <div className={styles.tabs}>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`${styles.tab} ${activeCategory === category.name ? styles.activeTab : ''}`}
              onClick={() => setActiveCategory(category.name as CategoryType)}
            >
              {category.title}
            </button>
          ))}
        </div>

        <motion.div className={styles.container}>
          <motion.div className={styles.techGrid}>
            <AnimatePresence mode="wait">
              {filteredTech.map((tech) => (
                <motion.div
                  key={tech.id}
                  className={styles.techItem}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={styles.techIcon} style={{ color: tech.color }}>
                    {tech.icon}
                  </div>
                  <span className={styles.techName}>{tech.name}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Technologies;
