import universalAbstractionImage from './assets/img/universal-abstraction.png';
import developerFriendlyImage from './assets/img/developer-friendly.png';
import nativeInteroperabilityImage from './assets/img/native-interoperability.png';
import highPerformanceImage from './assets/img/high-performance.png';

export interface IFeature {
  title: string;
  description: string;
  image: string;
}

const features: IFeature[] = [
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
    title: 'high Performance',
    description:
      'Axon‘s optimized Byzantine Fault Tolerance algorithm enables over 3000 TPS (tested 1000+ TPS on Uniswap V3) with fast transaction finality.',
    image: highPerformanceImage,
  },
];

export default features;
