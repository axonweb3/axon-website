import universalAbstractionImage from './assets/img/webp/universal-abstraction.webp';
import developerFriendlyImage from './assets/img/webp/developer-friendly.webp';
import nativeInteroperabilityImage from './assets/img/webp/native-interoperability.webp';
import highPerformanceImage from './assets/img/webp/high-performance.webp';
// import discordIcon from './assets/img/webp/discord.webp';
import githubIcon from './assets/img/webp/github.webp';
// import mediumIcon from './assets/img/webp/medium.webp';
import twitterIcon from './assets/img/webp/twitter.webp';

export interface IFeature {
  title: string;
  description: string;
  image: string;
}

export const description = "Axon is a Layer 2 framework that unleashes the power of app-chain future.";

export const features: IFeature[] = [
  {
    title: 'Universal Abstraction',
    description:
      'Axon’s abstraction capacity is derived from the universal CKB, which allows for the construction of any account model and virtual machine instruction. Devs on Axon can load and verify cells through a precompiled contract on CKB-VM, which makes the development of multi-chain, contract wallet, and other applications much easier.',
    image: universalAbstractionImage,
  },
  {
    title: 'Developer-Friendly Design',
    description:
      'Axon’s full-fledged toolkit allows web3 developers to build dApps right away. The all-in-one client can be installed in less than 10 minutes.',
    image: developerFriendlyImage,
  },
  {
    title: 'Native Interoperability',
    description:
      'More than 100% EVM compatible, Axon presents a new paradigm with native cross-chain capacity that supports all the encryption algorithms used by mainstream crypto wallets.',
    image: nativeInteroperabilityImage,
  },
  {
    title: 'High Performance',
    description:
      'Axon‘s optimized Byzantine Fault Tolerance algorithm enables over 3000 TPS (tested 1000+ TPS on Uniswap V3) with fast transaction finality.',
    image: highPerformanceImage,
  },
];

export interface ILink {
  name: string;
  link: string;
  icon: string;
}

export const links: ILink[] = [
  // {
  //   name: 'Discord',
  //   link: 'https://discord.com',
  //   icon: discordIcon,
  // },
  {
    name: 'GitHub',
    link: 'https://github.com/axonweb3',
    icon: githubIcon,
  },
  // {
  //   name: 'Medium',
  //   link: 'https://medium.com',
  //   icon: mediumIcon,
  // },
  {
    name: 'Twitter',
    link: 'https://twitter.com/AxonWeb3',
    icon: twitterIcon,
  },
];
