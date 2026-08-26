"use client";
// @ts-nocheck
import React from 'react';
import { motion } from 'motion/react';
import { 
  Code2, Cpu, Globe, Layers, Shield, Smartphone, 
  ArrowRight, CheckCircle2, Users, Rocket, 
  Zap, Server, Search, 
  ChevronRight, Terminal, Database, Cloud, Activity
} from 'lucide-react';
import Link from 'next/link';
import AnimatedCounter from '../components/AnimatedCounter';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import BionicOperationsHub from '../components/BionicOperationsHub';
import InteractiveHeroDashboard from '../components/InteractiveHeroDashboard';
import AiSeoSection from '../components/AiSeoSection';

const Home = () => {
  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Software Development",
      desc: "Custom SaaS platforms, web apps, and enterprise software built with React, Next.js, and Node.js.",
      path: "/services/software-development",
      metric: "< 100ms Load Times"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Software Consulting",
      desc: "Strategic technology planning, MVP development, and architecture design for scaling startups.",
      path: "/services/consulting",
      metric: "50% Faster Time-to-Market"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "QA & Automation",
      desc: "Comprehensive manual and automated testing using Playwright, Selenium, and Cypress.",
      path: "/services/qa-automation",
      metric: "99.9% Bug-Free Releases"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Cloud & DevOps",
      desc: "Kubernetes, CI/CD pipelines, and cloud infrastructure management on AWS, GCP, and Azure.",
      path: "/services/devops",
      metric: "99.99% Uptime Achieved"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Digital Marketing",
      desc: "Data-driven SEO, PPC, and lead generation campaigns to grow your digital presence.",
      path: "/services/digital-marketing",
      metric: "+300% Average ROI"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "UI/UX Product Design",
      desc: "User-centric design that combines aesthetics with intuitive functionality for digital products.",
      path: "/services/product-design",
      metric: "4x User Retention"
    }
  ];

  const techStack = [
    { name: 'React', svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.12.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.468zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.468a23.456 23.456 0 0 0-1.364-3.578l-.101-.213.101-.213a23.273 23.273 0 0 0 1.364-3.578l.133-.468.473.12c3.517.889 5.535 2.398 5.535 4.139s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.468C4.948 6.76 5.1 5.338 5.887 4.6c.787-.737 2.209-.586 3.977.413l.418.247-.247.418a23.614 23.614 0 0 0-1.658 3.381l-.101.213-.217-.017a23.751 23.751 0 0 0-2.747-.31zM6.583 4.915c-.306.088-.55.237-.717.396-.584.547-.608 1.787-.07 3.063.829.07 1.71.186 2.595.344a23.232 23.232 0 0 1 1.341-2.817c-1.201-.65-2.306-.986-3.149-.986zm12.143 4.044l-.217.017a23.751 23.751 0 0 0-2.747-.31l-.101-.213a23.484 23.484 0 0 0-1.658-3.381l-.247-.418.418-.247c1.768-.999 3.19-1.15 3.977-.413.787.737.939 2.159.575 3.877l-.133.468-.132.468zm-.615-3.045c-.584-.547-1.663-.505-3.036.09a23.232 23.232 0 0 1 1.341 2.817c.885-.158 1.766-.274 2.595-.344.538-1.276.514-2.516-.07-3.063a1.218 1.218 0 0 0-.83-.5zM10.27 19.055l-.418-.247a23.614 23.614 0 0 0 1.658-3.381l.101-.213.217.017c.896.07 1.812.11 2.747.31l.101.213a23.456 23.456 0 0 0 1.364 3.578l.133.468-.473.12c-3.517.889-5.535 2.398-5.535 4.139s2.018 3.25 5.535 4.139l.473.12-.133.468a23.307 23.307 0 0 0-1.364 3.578l-.101.213-.217.017a23.751 23.751 0 0 0-2.747-.31l-.101-.213a23.614 23.614 0 0 0-1.658-3.381l-.418-.247.247-.418c.999-1.768 1.15-3.19.413-3.977-.737-.787-2.159-.939-3.877-.575l-.468.133-.468.133.12-.473C8.381 22.018 9.89 24 11.631 24s3.25-2.018 4.139-5.536l.12-.473z"/></svg> },
    { name: 'Next.js', svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/></svg> },
    { name: 'TypeScript', svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/></svg> },
    { name: 'Node.js', svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.192-.137-.242l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68c-.084.05-.139.146-.139.243v10.148c0 .097.055.189.137.236l2.409 1.391c1.307.654 2.108-.116 2.108-.891V7.393c0-.143.114-.253.256-.253h1.115c.139 0 .255.11.255.253v10.415c0 1.744-.951 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.922-.943-.922-1.604V6.921c0-.661.352-1.275.922-1.603l8.795-5.082a1.887 1.887 0 0 1 1.847 0l8.795 5.082c.57.329.924.942.924 1.603v10.15c0 .661-.354 1.275-.924 1.604l-8.795 5.077a1.87 1.87 0 0 1-.924.248zm2.718-7.017c-3.851 0-4.657-1.767-4.657-3.252 0-.143.114-.253.256-.253h1.138c.127 0 .233.092.252.217.172 1.161.684 1.747 3.013 1.747 1.854 0 2.642-.419 2.642-1.403 0-.566-.224-.986-3.1-1.268-2.405-.237-3.889-.769-3.889-2.695 0-1.774 1.497-2.831 4.005-2.831 2.817 0 4.214.977 4.388 3.076a.255.255 0 0 1-.065.196.255.255 0 0 1-.192.085h-1.142a.253.253 0 0 1-.248-.211c-.275-1.216-.943-1.606-2.741-1.606-2.02 0-2.254.703-2.254 1.232 0 .64.278.826 3.007 1.187 2.704.358 3.981.866 3.981 2.768-.001 1.917-1.599 3.01-4.393 3.01z"/></svg> },
    { name: 'Python', svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.83l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.23l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.24l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05 1.07.13zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/></svg> },
    { name: 'AWS', svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.030-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.415-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.27-.351 3.384 1.963 7.559 3.152 11.877 3.152 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.385.608zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z"/></svg> },
    { name: 'Kubernetes', svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 0 1-2.075-2.597l2.578-.437.004.005a.44.44 0 0 1 .484.606zm-.833-2.129a.44.44 0 0 1 .173-.756l.002-.011 2.56-.376A5.207 5.207 0 0 1 11.17 8.24l-2.215 1.957a5.248 5.248 0 0 1 .425 2.024zm2.17.011a.44.44 0 0 1 .44-.44c.242 0 .44.197.44.44a.44.44 0 0 1-.44.44.44.44 0 0 1-.44-.44zm.44-6.72a5.208 5.208 0 0 1 3.865 1.721l-2.214 1.96a2.763 2.763 0 0 0-1.65-.56c-.47 0-.917.12-1.302.333L9.918 6.96a5.207 5.207 0 0 1 2.062-.449zm.006 5.07a1.32 1.32 0 0 0-.619.155l-2.213-1.96a3.274 3.274 0 0 1 .609-2.146l1.923 1.702a1.326 1.326 0 0 0-.152.599c0 .33.12.632.316.866l-1.93 1.703a3.272 3.272 0 0 1-.316-.866l2.382-.053zm.006 1.32c.73 0 1.32-.591 1.32-1.32 0-.73-.59-1.32-1.32-1.32-.73 0-1.32.59-1.32 1.32 0 .729.59 1.32 1.32 1.32zm2.08-4.71l-1.923 1.701a1.321 1.321 0 0 1 .158 1.461l2.577.438a5.207 5.207 0 0 0 .043-3.6zm.65 4.83l-2.576-.437a1.32 1.32 0 0 1-1.088.652l-.006.012-.998 2.413a5.207 5.207 0 0 0 4.668-2.64zm-3.32-5.8a6.52 6.52 0 1 0 0 13.04 6.52 6.52 0 0 0 0-13.04zm0 11.96a5.44 5.44 0 1 1 0-10.88 5.44 5.44 0 0 1 0 10.88zM11.987 0C5.366 0 0 5.366 0 11.987 0 18.608 5.366 24 11.987 24 18.608 24 24 18.608 24 11.987 24 5.366 18.608 0 11.987 0z"/></svg> },
    { name: 'Docker', svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186h-2.12a.186.186 0 0 0-.186.185v1.888c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"/></svg> },
    { name: 'PostgreSQL', svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M17.128 0a10.13 10.13 0 0 0-2.755.403l-.063.02A10.922 10.922 0 0 0 12.6.258C11.422.238 10.41.524 9.594 1 8.79.721 7.122.24 5.364.336 4.14.403 2.804.775 1.79 1.82.385 3.272.05 5.6.69 8.763c.446 2.13 1.181 3.938 2.17 5.055a4.85 4.85 0 0 0 1.899 1.396c-.168 1.1-.195 2.992.081 4.783.32 2.04 1.01 3.569 2.075 4.143.376.202.773.267 1.175.233.792-.067 1.453-.436 1.83-.65a8.226 8.226 0 0 0 1.728.33c1.17.093 2.259-.178 3.14-.836.54.35 1.25.732 2.042.816a2.705 2.705 0 0 0 1.253-.194c1.073-.451 1.816-1.625 2.258-3.181.422-1.475.571-3.394.446-5.577a4.85 4.85 0 0 0 1.313-1.164c.988-1.117 1.724-2.925 2.17-5.055.64-3.163.294-5.491-1.111-6.943C20.313.988 18.931.585 17.559.072A10.913 10.913 0 0 0 17.128 0zM12.48 1.2c.307.004.6.04.88.103a4.847 4.847 0 0 0-1.064.748c-1.08.999-1.62 2.337-1.822 3.614-.42.125-.852.3-1.26.484-.7.31-1.313.668-1.796 1.024-.047-.49-.056-.99-.028-1.489C7.586 2.694 9.869 1.16 12.48 1.2zm4.586.056c1.162.001 2.34.31 3.311.948 1.747 1.133 2.286 3.298 1.73 6.288-.407 2.012-1.07 3.644-1.91 4.636a4.012 4.012 0 0 1-.96.859 7.965 7.965 0 0 0-.166-1.14c-.497-2.406-1.71-3.966-3.314-4.76a4.592 4.592 0 0 0-.781-.31 5.93 5.93 0 0 0-.7-1.753c-.51-.855-1.2-1.527-2.016-2.005.232-1.113.74-2.218 1.59-3 .71-.653 1.633-1.02 2.633-1.026a5.03 5.03 0 0 1 .583-.037zM9.037 6.507c.18.01.36.025.536.046.52.059 1.022.17 1.495.341-1.113.654-1.78 1.674-2.056 2.78a5.04 5.04 0 0 0-.167 1.455c-.63.344-1.135.745-1.477 1.166a3.41 3.41 0 0 0-.584 1.375c-.474-.616-.896-1.446-1.2-2.49C4.985 8.51 5.213 6.9 6.19 5.886a3.845 3.845 0 0 1 2.847-1.38zm5.958 1.498c1.26 0 2.397.494 3.108 1.603.707 1.105.95 2.822.638 5.148a5.648 5.648 0 0 1-.088.493c-.61-.32-1.315-.545-2.101-.665a17.08 17.08 0 0 0-3.337-.1 6.32 6.32 0 0 0-.793.113c-.057-.252-.1-.508-.13-.766-.2-1.782.18-3.227 1.024-4.2.596-.69 1.396-1.114 2.277-1.198a3.87 3.87 0 0 1 .402-.028zm-5.44.702c-.064.45-.073.912-.021 1.378.063.57.21 1.123.434 1.608a4.72 4.72 0 0 0-.95.698c-.748.72-1.07 1.726-1.152 2.702-.367-.38-.667-.871-.897-1.455a7.81 7.81 0 0 1-.38-1.31c.241-.61.662-1.18 1.295-1.655.438-.329.985-.639 1.671-.966zm5.61 3.564c.364.001.72.025 1.063.073 1.256.178 2.167.655 2.743 1.418a4.83 4.83 0 0 1 .767 2.234l.025.228c.092 1.21.063 2.284-.083 3.137-1.034.13-2.228.067-3.27-.284-.004-.01-.008-.02-.012-.03a7.32 7.32 0 0 0 .46-2.12c.017-.273.017-.543 0-.81a4.394 4.394 0 0 0-.416-1.596 3.53 3.53 0 0 0-.823-1.118 4.116 4.116 0 0 0-.455-.132zm-5.18.66c.165 1.03.605 1.932 1.3 2.568.647.592 1.469.921 2.354.973.009.121.012.245.01.37-.029 1.025-.296 1.99-.712 2.64-.384.608-.856.927-1.337.958-.395.026-.794-.094-1.148-.36-.765-.574-1.247-1.803-1.47-3.248-.133-.86-.159-1.749-.097-2.546a4.077 4.077 0 0 1 1.1-.355zm2.858.73c.157.06.308.126.451.2.62.33 1.06.858 1.35 1.547.285.683.41 1.52.38 2.448a6.22 6.22 0 0 1-.41 2.015 9.088 9.088 0 0 1-1.73-.335c.117-.47.197-.97.224-1.49.046-.888-.05-1.786-.337-2.5a3.38 3.38 0 0 0-.643-1.092 4.13 4.13 0 0 1 .715-.793zm1.997 6.58a9.34 9.34 0 0 0 1.16.123c.6.026 1.193-.012 1.72-.132-.33.922-.797 1.591-1.391 1.849a1.643 1.643 0 0 1-.755.12c-.464-.044-.944-.283-1.406-.67.25-.358.47-.77.672-1.29z"/></svg> },
    { name: 'Terraform', svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M15.68 0l-5.886 3.387v6.737L15.68 6.737V0zM8.322 3.78L2.434 7.168v6.738l5.888-3.39V3.78zM9.815 11.256l5.897 3.377v6.738l-5.897-3.39v-6.725zM21.566 0l-5.886 3.387v6.737l5.886-3.387V0z"/></svg> },
    { name: 'Playwright', svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M8.5 8.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5S6.172 7 7 7s1.5.672 1.5 1.5zm9 0c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5S15.172 7 16 7s1.5.672 1.5 1.5zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3.5-7a3.5 3.5 0 0 0 7 0h-7z"/></svg> },
    { name: 'GitHub Actions', svg: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.332-1.756-1.332-1.756-1.09-.744.083-.729.083-.729 1.204.085 1.837 1.236 1.837 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.51 11.51 0 0 1 12 5.803c1.02.005 2.047.137 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.216.694.825.576C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z"/></svg> },
  ];

  const stats = [
    { label: "Projects Delivered", value: "250+" },
    { label: "Expert Engineers", value: "50+" },
    { label: "Client Retention", value: "98%" },
    { label: "Years Experience", value: "12+" }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 lg:pt-64 lg:pb-48 grid-bg">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
          <div className="glow-bg top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-orange/20" />
          <div className="glow-bg bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-amber/20" />
        </div>

        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass border-brand-orange/20 text-brand-orange text-sm font-bold mb-8">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-orange"></span>
                </span>
                <span>Engineering the Future of Digital Solutions</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold leading-[1.05] mb-8">
                Engineering Digital Products for the <span className="gradient-text">Future</span>
              </h1>

              <p className="text-xl text-white/60 mb-12 leading-relaxed max-w-xl">
                We build scalable software, automate quality, power cloud infrastructure, and drive growth with digital marketing.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Link href="/contact" className="btn-primary flex items-center justify-center space-x-2">
                  <span>Book Free Consultation</span>
                  <ArrowRight size={20} />
                </Link>
                <Link href="/services" className="btn-outline flex items-center justify-center space-x-2">
                  <span>View Our Services</span>
                  <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full"
            >
              <InteractiveHeroDashboard />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Powered By - Infinite Marquee */}
      <section className="py-6 md:py-10 border-y border-white/5 bg-white/2 overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-deep-space-blue to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-deep-space-blue to-transparent z-10 pointer-events-none"></div>
        <div className="container-custom">
          <p className="text-center text-[10px] md:text-xs font-bold text-white/30 uppercase tracking-[0.3em] mb-6 md:mb-8">Powered by next-gen technologies</p>
        </div>
        
        <div className="flex marquee-container overflow-hidden w-full">
          <div className="flex animate-marquee whitespace-nowrap items-center min-w-max">
            {/* First set of logos */}
            <div className="flex space-x-16 md:space-x-24 px-8 md:px-12 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-300">
              {['REACT', 'NEXT.JS', 'NODE.JS', 'AWS', 'KUBERNETES', 'POSTGRESQL', 'TERRAFORM', 'PLAYWRIGHT'].map((tech) => (
                <span key={`1-${tech}`} className="text-2xl md:text-3xl font-display font-black tracking-tighter hover:text-brand-orange transition-colors cursor-default select-none">{tech}</span>
              ))}
            </div>
            {/* Duplicated set for seamless loop */}
            <div className="flex space-x-16 md:space-x-24 px-8 md:px-12 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-300">
              {['REACT', 'NEXT.JS', 'NODE.JS', 'AWS', 'KUBERNETES', 'POSTGRESQL', 'TERRAFORM', 'PLAYWRIGHT'].map((tech) => (
                <span key={`2-${tech}`} className="text-2xl md:text-3xl font-display font-black tracking-tighter hover:text-brand-orange transition-colors cursor-default select-none">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI SEO Section */}
      <AiSeoSection />

      {/* Global Impact Data Section - Parallax/Scroll Triggers */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-black/40 border-b border-white/5">
         <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-5 z-0"></div>
         <div className="glow-bg top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] z-0"></div>
         <div className="glow-bg top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-brand-orange/20 rounded-full blur-[120px] z-0"></div>
         
         <div className="container-custom relative z-10">
           <div className="text-center mb-16 md:mb-24 px-4">
             <h2 className="text-xs md:text-sm font-bold text-indigo-400 uppercase tracking-[0.3em] mb-4">Scale at the Speed of Light</h2>
             <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white">Metrics that Define Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Global Impact</span></h3>
           </div>
           
           <div className="space-y-20 md:space-y-32">
             {/* Data Row 1 */}
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.8, type: "spring" }}
               className="flex flex-col md:flex-row items-center justify-between text-center md:text-left"
             >
               <div className="md:w-1/2 mb-6 md:mb-0 flex justify-center md:justify-start">
                 <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-3xl bg-gradient-to-br from-brand-orange/20 to-transparent flex items-center justify-center border border-brand-orange/30 shadow-[0_0_50px_rgba(232,66,26,0.2)] backdrop-blur-sm group hover:scale-105 transition-transform duration-500">
                    <Zap className="w-20 h-20 sm:w-28 sm:h-28 text-brand-orange drop-shadow-2xl relative z-10 group-hover:scale-110 transition-transform duration-500" />
                  </div>
               </div>
               <div className="md:w-5/12 px-4 md:px-0">
                 <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">Digital Value Delivered</h4>
                 <p className="text-base md:text-lg text-white/60 leading-relaxed">
                   The products, platforms, and campaigns we've engineered have driven immense business value, helping our clients scale their operations and dominate their markets.
                 </p>
               </div>
             </motion.div>

             {/* Data Row 2 */}
             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.8, type: "spring" }}
               className="flex flex-col md:flex-row items-center justify-between text-center md:text-right"
             >
               <div className="md:w-5/12 order-2 md:order-1 px-4 md:px-0 mt-6 md:mt-0">
                 <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">Daily API Iterations</h4>
                 <p className="text-base md:text-lg text-white/60 leading-relaxed">
                   Our robust microservice architectures handle massive scale natively, processing over 50 million secure requests every single day without a hiccup.
                 </p>
               </div>
               <div className="md:w-1/2 mb-6 md:mb-0 order-1 md:order-2 md:text-right flex justify-center md:justify-end">
                 <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-3xl bg-gradient-to-bl from-indigo-500/20 to-transparent flex items-center justify-center border border-indigo-500/30 shadow-[0_0_50px_rgba(99,102,241,0.2)] backdrop-blur-sm group hover:scale-105 transition-transform duration-500">
                    <Activity className="w-20 h-20 sm:w-28 sm:h-28 text-indigo-400 drop-shadow-2xl relative z-10 group-hover:scale-110 transition-transform duration-500" />
                  </div>
               </div>
             </motion.div>
           </div>
         </div>
      </section>

      <BionicOperationsHub />

      {/* Services Overview */}
      <section className="section-padding relative">
        <div className="container-custom">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-20" direction="up" delay={0}>
            <h2 className="text-sm font-bold text-brand-orange uppercase tracking-[0.3em] mb-4">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl lg:text-6xl font-display font-bold mb-8">Cutting-Edge Tech Solutions</h3>

            <p className="text-lg text-white/60">
              We provide end-to-end services to help you build, scale, and market your digital products with engineering precision.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {services.map((service, index) => (
              <StaggerItem key={index} direction="up">
                <Link
                  href={service.path}
                  className="group glass-card p-10 neon-border overflow-hidden relative h-full flex flex-col"
                >
                  {/* Bionic Glow Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                  
                  <div className="relative z-10 w-16 h-16 bg-brand-orange/10 text-brand-orange rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(0,85,255,0.1)] group-hover:rotate-12 group-hover:scale-110">
                    {service.icon}
                  </div>
                  
                  <h4 className="text-2xl font-bold mb-4 group-hover:text-brand-orange transition-colors relative z-10">{service.title}</h4>
                  <p className="text-white/60 mb-8 leading-relaxed relative z-10">
                    {service.desc}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="inline-flex items-center font-bold text-brand-orange group-hover:translate-x-2 transition-transform relative z-10">
                      <span>Learn More</span>
                      <ChevronRight size={20} className="ml-2" />
                    </div>
                    
                    {/* Bionic Hover Metric Badge */}
                    <div className="absolute bottom-6 right-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 bg-white text-space-blue font-bold text-[10px] uppercase tracking-widest py-2 px-4 rounded-full shadow-2xl z-20">
                      {service.metric}
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="section-padding bg-dark-indigo/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-10"></div>
        <div className="container-custom relative z-10">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-20" direction="up">
            <h2 className="text-sm font-bold text-brand-orange uppercase tracking-[0.3em] mb-4">Tech Stack</h2>
            <h3 className="text-4xl lg:text-6xl font-display font-bold mb-8">Built with Modern Tech</h3>
            <p className="text-white/60">
              We leverage the most powerful and scalable technologies to build products that stand the test of time.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6" staggerDelay={0.07}>
            {techStack.map((tech, i) => (
              <StaggerItem key={i} direction="up">
                <motion.div
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="tech-card group"
                >
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 text-white/60 group-hover:text-brand-orange transition-colors">
                    {tech.svg}
                  </div>
                  <span className="font-bold text-sm tracking-widest uppercase text-white/60 group-hover:text-white transition-colors">{tech.name}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Digital Marketing - Reverse Marquee */}
      <section className="py-12 md:py-16 overflow-hidden relative border-y border-white/5 my-10 bg-transparent">
        <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>
        
        <div className="container-custom mb-8 relative z-20">
          <div className="flex items-center justify-center space-x-4">
            <h2 className="text-center text-[10px] md:text-sm font-bold text-white/40 uppercase tracking-[0.4em]">Digital Marketing Ecosystem</h2>
          </div>
        </div>
        
        <div className="flex marquee-container overflow-hidden w-full">
          {/* Animation direction: reverse for opposite flow */}
          <div className="flex animate-marquee whitespace-nowrap items-center min-w-max" style={{ animationDirection: 'reverse', animationDuration: '40s' }}>
            {/* First Set */}
            <div className="flex space-x-6 md:space-x-10 px-4 items-center">
              {['SEO', 'BRANDING', 'FRAUD DETECTION', 'ORM', 'PAID ADS', 'SOCIAL MEDIA'].map((tool) => (
                <div key={`m1-${tool}`} className="px-4 py-2.5 rounded-xl border border-white/5 bg-white/[0.01] text-white/50 text-xs font-semibold tracking-wide hover:text-white hover:border-white/20 transition-all duration-300 cursor-default font-sans">
                  {tool}
                </div>
              ))}
            </div>
            {/* Second Set */}
            <div className="flex space-x-6 md:space-x-10 px-4 items-center">
              {['SEO', 'BRANDING', 'FRAUD DETECTION', 'ORM', 'PAID ADS', 'SOCIAL MEDIA'].map((tool) => (
                <div key={`m2-${tool}`} className="px-4 py-2.5 rounded-xl border border-white/5 bg-white/[0.01] text-white/50 text-xs font-semibold tracking-wide hover:text-white hover:border-white/20 transition-all duration-300 cursor-default font-sans">
                  {tool}
                </div>
              ))}
            </div>
            {/* Third Set to guarantee no jump on ultrawide monitors */}
            <div className="flex space-x-6 md:space-x-10 px-4 items-center">
              {['SEO', 'BRANDING', 'FRAUD DETECTION', 'ORM', 'PAID ADS', 'SOCIAL MEDIA'].map((tool) => (
                <div key={`m3-${tool}`} className="px-4 py-2.5 rounded-xl border border-white/5 bg-white/[0.01] text-white/50 text-xs font-semibold tracking-wide hover:text-white hover:border-white/20 transition-all duration-300 cursor-default font-sans">
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Code Snippet Style */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-6 border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] cursor-default transition-all duration-300">
                  <span className="text-[10px] uppercase tracking-wider text-brand-orange font-bold font-mono">Performance Core</span>
                  <div className="text-3xl font-bold font-display text-white mt-2">&lt; 100ms</div>
                  <p className="text-xs text-white/50 mt-1">Average server response times.</p>
                </div>
                <div className="glass-card p-6 border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] cursor-default transition-all duration-300">
                  <span className="text-[10px] uppercase tracking-wider text-brand-orange font-bold font-mono">SLA Guarantee</span>
                  <div className="text-3xl font-bold font-display text-white mt-2">99.99%</div>
                  <p className="text-xs text-white/50 mt-1">Guaranteed cloud application uptime.</p>
                </div>
              </div>
              <div className="glass-card p-6 border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] cursor-default transition-all duration-300">
                <span className="text-[10px] uppercase tracking-wider text-brand-orange font-bold font-mono">Security Benchmark</span>
                <div className="flex items-center justify-between mt-2">
                  <div className="text-xl font-bold text-white font-display">SOC2 & ISO Ready</div>
                  <span className="px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[9px] font-bold uppercase rounded-md font-sans">Compliant</span>
                </div>
                <p className="text-xs text-white/50 mt-1.5">Penetration tested, cryptographically secured microservices.</p>
              </div>
            </div>

            <div className="order-1 lg:order-2 px-4">
              <h2 className="text-sm font-bold text-brand-orange uppercase tracking-[0.3em] mb-4">Why Sociodigit</h2>
              <h3 className="text-3xl md:text-4xl lg:text-6xl font-display font-bold mb-8 leading-tight">
                Engineering Excellence Meets <span className="gradient-text">Strategic</span> Growth
              </h3>

              <p className="text-lg text-white/60 mb-12 leading-relaxed">
                We don't just build software; we build businesses. Our integrated approach combines deep technical expertise with growth-focused marketing strategies.
              </p>
              
              <div className="space-y-8">
                {[
                  { title: "Enterprise-Grade Quality", desc: "We apply the same standards used by Fortune 500 companies to every project." },
                  { title: "Agile & Transparent", desc: "Real-time communication and iterative development for maximum velocity." },
                  { title: "Full-Stack Growth", desc: "From the first line of code to the first million users, we've got you covered." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,85,255,0.1)]">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-white/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Social Proof */}
      <section className="section-padding bg-dark-indigo/30 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-5" />
        <div className="container-custom relative z-10">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-20" direction="up" delay={0}>
            <h2 className="text-sm font-bold text-brand-orange uppercase tracking-[0.3em] mb-4">Client Voices</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">Trusted by Builders &amp; Enterprises</h3>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.1}>
            {[
              {
                quote: "Sociodigit completely modernised our infrastructure. The Kubernetes migration reduced our monthly cloud bill by 60% while achieving zero-downtime deployments. Exceptional engineering team.",
                name: "Rahul Verma",
                role: "CTO, StreamLine Cloud Systems",
                category: "Cloud & DevOps"
              },
              {
                quote: "Their QA automation framework cut our regression testing from 18 hours to 8 minutes. We went from monthly releases to weekly, with production bugs down 75%. Transformative.",
                name: "Priya Mehta",
                role: "VP Engineering, ShopMax Retail",
                category: "QA Automation"
              },
              {
                quote: "We were losing direct bookings to fraudulent ads. Sociodigit eliminated the fake listings and rebuilt our local SEO presence in Puri. Direct inquiries increased 45% within 4 months.",
                name: "Suresh Panda",
                role: "General Manager, Hotel Holiday Resort",
                category: "Digital Marketing"
              },
              {
                quote: "The FinTech SaaS platform they built handles 2M+ concurrent transactions at sub-second latency. The architecture decisions made have set us up for the next 5 years of growth.",
                name: "Ananya Singh",
                role: "Product Lead, GlobalPay Solutions",
                category: "Software Development"
              }
            ].map((t, i) => (
              <StaggerItem key={i} direction="up">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="glass p-8 rounded-[2rem] border-white/10 hover:border-brand-orange/30 transition-all duration-300 h-full flex flex-col"
                >
                  {/* Stars */}
                  <div className="flex space-x-1 mb-6">
                    {[...Array(5)].map((_, s) => (
                      <svg key={s} className="w-4 h-4 text-brand-orange" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  {/* Quote */}
                  <blockquote className="text-white/80 leading-relaxed flex-1 mb-6 text-base">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  {/* Author */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div>
                      <p className="font-bold text-white">{t.name}</p>
                      <p className="text-sm text-white/50">{t.role}</p>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange">
                      {t.category}
                    </span>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Results Metrics */}
      <section className="py-24 bg-white/2 relative">
        <div className="container-custom">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-12" staggerDelay={0.12}>
            {stats.map((stat, i) => (
              <StaggerItem key={i} direction="up">
                <Link href="/case-studies" className="text-center group block">
                  <motion.div 
                    whileInView={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="text-5xl lg:text-7xl font-display font-bold gradient-text mb-4"
                  >
                    <AnimatedCounter value={stat.value} />
                  </motion.div>
                  <div className="text-sm font-bold text-white/40 uppercase tracking-widest group-hover:text-brand-orange transition-colors">{stat.label}</div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding relative">
        <div className="container-custom">
          <ScrollReveal className="relative glass p-12 lg:p-24 rounded-[3rem] overflow-hidden text-center border-white/10 neon-border" direction="up" scale>
            <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-10 grid-bg" />
            <div className="glow-bg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-orange/10 blur-[150px]" />
            
            <div className="max-w-3xl mx-auto relative z-10">
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-display font-bold mb-8">Ready to Scale Your Digital Product?</h2>

              <p className="text-xl text-white/60 mb-12">
                Join 200+ companies that trust Sociodigit for their engineering and growth needs. Let's build something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link href="/contact" className="btn-primary">
                  <span>Book Free Consultation</span>
                </Link>
                <Link href="/services" className="btn-outline">
                  <span>Explore Services</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
