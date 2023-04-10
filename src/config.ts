import universalAbstractionImage from './assets/img/webp/universal-abstraction.webp';
import developerFriendlyImage from './assets/img/webp/developer-friendly.webp';
import nativeInteroperabilityImage from './assets/img/webp/native-interoperability.webp';
import highPerformanceImage from './assets/img/webp/high-performance.webp';
// import discordIcon from './assets/img/webp/discord.webp';
import githubIcon from './assets/img/webp/github.webp';
import mediumIcon from './assets/img/webp/medium.webp';
import twitterIcon from './assets/img/webp/twitter.webp';

export interface IFeature {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const description = "Axon is a Layer 2 framework that unleashes the power of appchain future.";

export const features: IFeature[] = [
  {
    title: 'Universal Abstraction',
    description:
      'The abstraction capacity of Axon allows for the construction of any account model and virtual machine instructions. Development on Axon can be done through precompiled contracts, which opens up endless possibilities to build appchains, contract wallets, and other applications.',
    icon: universalAbstractionImage,
    color: '#E46C2D',
  },
  {
    title: 'Developer-Friendly Design',
    description:
      'With a full-fledged toolkit built by Axon, Web3 developers can start building right away. By automating off-chain communication, Axon significantly reduces the cost of deployment.',
    icon: developerFriendlyImage,
    color: '#4352D1',
  },
  {
    title: 'Native Interoperability',
    description:
      'As a highly versatile framework, Axon enjoys superb native interoperability. More than 100% EVM compatible, Axon will soon be compatible with Inter-Blockchain Communication Protocol (IBC)—the gateway to the Cosmos ecosystem. Axon will onboard more protocols for seamless integration across various blockchain networks.',
    icon: nativeInteroperabilityImage,
    color: '#F8D254',
  },
  {
    title: 'High Performance',
    description:
      'Axon uses a new Byzantine Fault Tolerance (BFT) based consensus algorithm that supports over 3000 TPS (tested 1000+ TPS on Uniswap V3) across hundreds of nodes with fast transaction finality.',
    icon: highPerformanceImage,
    color: '#ED6F78',
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
  {
    name: 'Medium',
    link: 'https://medium.com/@axon_web3',
    icon: mediumIcon,
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/AxonWeb3',
    icon: twitterIcon,
  },
];
