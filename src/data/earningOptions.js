export const earningOptions = [
  {
    id: 'search',
    title: 'Earn Money While Searching (Free)',
    qrImage: process.env.PUBLIC_URL + '/qrsearch.jpeg',
    url: 'https://rewards.bing.com/welcome?rh=704B7330&ref=rafsrchae&form=ML2XE3&OCID=ML2XE3&PUBL=RewardsDO&CREA=ML2XE3',
    video: 'https://youtube.com/watch?v=example-search',
    earningToDate: '1000.00',
    criteria: {
      online: true,
      device: ['laptop', 'smartphone', 'both'],
      search: 'yes'
    }
  },
  {
    id: 'shopping',
    title: 'Earn Cashback From Online Shopping (Including COD) - Lifetime Free',
    qrImage: process.env.PUBLIC_URL + '/qrcashkaro.jpeg',
    url: 'https://cashk.app.link/YtRTMgBAw1b',
    video: 'https://youtube.com/watch?v=example-shopping',
    earningToDate: '2702.56',
    criteria: {
      online: true,
      shopping: 'yes'
    }
  }
];