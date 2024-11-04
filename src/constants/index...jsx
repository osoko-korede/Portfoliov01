import ata from '../assets/Africa-Trade-Access.png'
import charger from '../assets/Charger.png'
import chatsy from '../assets/Chatsy.png'
import fitness from '../assets/Fitness.png'
import fp from '../assets/Fokes Property.png'
import fc from '../assets/Fokes-Consult.png'
import stock from '../assets/Stock-Image.png'
import todo from '../assets/To-Do.png'
import weather from '../assets/Weather-App.png'
import evolve01 from '../assets/EvolveAI/01.png'
import hami06 from '../assets/Hami/06.png'
import pledge01 from '../assets/Pledge/01.png'



export const categories = [
    {
      name: "Front-End",
      projects: [
          {  
            name: "Next.js",
            image: fitness,
            alt: "fitness website screenshot",
            stack: [
              "Next.js",
              "Tailwind CSS",
              "React",
            ],
            featured: true,
            comingSoon: false,
            id: 'fitness'
          },
          {
            name: "React Website",
            image: charger,
            alt: "charger website screenshot",
            stack: [
              "React",
              "Vite",
              "Tailwind CSS",
            ],
            featured: true,
            comingSoon: false,
            id: 'charger',
          },
          {
            name: "Todo App",
            image: todo,
            alt: "todo app screenshot",
            stack: [
              "React",
              "Vite",
              "useState",
              "Tailwind CSS",
            ],
            featured: true,
            comingSoon: false,
            id: "todo"
          },
          {
            name: "Weather App",
            image: weather,
            alt: "weather app screenshot",
            stack: [
              "React",
              "Vite",
              "API",
              "Tailwind CSS",
            ],
            featured: false,
            comingSoon: false,
            id: "weather-app"
          },
          {
            name: "Fokes Consult",
            image: fc,
            alt: "Fokes Consult Website screenshot",
            stack: [
              "Wordpress",
              "Elementor",
              "SEO",
            ],
            featured: true,
            comingSoon: false,
            id: "fokes-consult"
          },
          
          {
            name: "Stock Image App",
            image: stock,
            alt: "Stock Image App screenshot",
            stack: [
              "React",
              "Vite",
              "API",
              "Tailwind CSS",
            ],
            featured: false,
            comingSoon: false,
            id: "image-search"
          },
          {
            name: "Chat App",
            image: chatsy,
            alt: "Chat App screenshot",
            stack: [
              "React",
              "Firebase Auth",
              "Firebase Db",
              "Firebase Hosting",
              "Material UI",
            ],
            featured: false,
            comingSoon: false,
            id: "chatsy"
          },
          {
            name: "Africa Trade Access",
            image: ata,
            alt: "Africa Trade Access Website screenshot",
            stack: [
              "Wordpress",
              "Elementor",
              "SEO",
            ],
            featured: false,
            comingSoon: false,
            id: "africa-trade-access"
          },
          {
            name: "Fokes Property",
            image: fp,
            alt: "Fokes Property Website screenshot",
            stack: [
              "Wordpress",
              "Elementor",
              "SEO",
            ],
            featured: false,
            comingSoon: false,
            id: "fokes-property"
          },    
      ]
    },
    
    {
      name: "Graphics Design",
      projects: [
          {  
            name: "EvolveAI",
            image: evolve01,
            alt: "EvolveAI",
            stack: [
              "Branding",
              "Visual Identity",
            ],
            featured: true,
            comingSoon: false,
            id: "evolveai"
          },   
          {  
            name: "Hami",
            image: hami06,
            alt: "Hami",
            stack: [
              "Banner Ad Design",
              "Social Media Post",
            ],
            featured: true,
            comingSoon: false,
            id: "hami"
          },   
      ]
    },
    {
      name: "UI/UX",
      projects: [
          {  
            name: "Pledge",
            image: pledge01,
            alt: "Pledge Case Study",
            stack: [
              "Case Study",
              "UI/UX",
              "Product Design",
            ],
            featured: true,
            comingSoon: false,
            id: "pledge"
          },
      ]
    },
  ];