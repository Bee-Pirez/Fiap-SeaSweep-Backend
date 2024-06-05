import { prisma } from '../src/lib/prisma';

async function seed() {
 
  await prisma.user.createMany({
    data: [
      {
        name: 'Alice Correia',
        email: 'alice@example.com',
        password: 'alicepassword123',
      },
      {
        name: 'João Vilela',
        email: 'joao@example.com',
        password: 'joaopassword123',
      },
    ],
  });

   await prisma.ship.createMany({
    data: [
      {
        shipName: 'HMM Algericas',
        IMO: '9863297',
        flag: 'Korea',
        tonnage: 1200.5,
        originPort: '35.102556, 129.043860',
        originPortName: 'Busan Port',
        destinationPort: '51.950283, 4.145995',
        destinationPortName: 'Porto de Roterdão',
        collectionAmount: 500, //kg
      },
      {
        shipName: 'HMM Copenhagen',
        IMO: '9863302',
        flag: 'Korea',
        tonnage: 1800.7,
        originPort: '55.671666, 12.585526',
        originPortName: 'Port of Copenhagen',
        destinationPort: '40.618400, -74.063758',
        destinationPortName: 'Porto de Nova Iorque',
        collectionAmount: 750,
      },
      {
        shipName: 'MSC VENICE',
        IMO: '9647473',
        flag: 'Liberia',
        tonnage: 2200.9,
        originPort: '35.104345, 129.042830',
        originPortName: 'Busan Port',
        destinationPort: '30.633720, 122.070760',
        destinationPortName: 'Port of Shanghai',
        collectionAmount: 600,
      },
      {
        shipName: 'EVER GOODS',
        IMO: '9810991',
        flag: 'Panama',
        tonnage: 1900.3,
        originPort: '8.937941, -79.555833',
        originPortName: 'Porto de Panama City (Balboa)',
        destinationPort: '25.762069, -80.180946',
        destinationPortName: 'Porto de Miami',
        collectionAmount: 600,
      },
      {
        shipName: 'MONACO MAERSK',
        IMO: '9778832',
        flag: 'Denmark',
        tonnage: 2500.2,
        originPort: '56.170200, 10.232500',
        originPortName: 'Port of Aarhus',
        destinationPort: '57.702417, 11.947585',
        destinationPortName: 'Porto de Gotemburgo',
        collectionAmount: 900,
      },
      {
        shipName: 'COSCO SHIPPING SOLAR',
        IMO: '9795646',
        flag: 'Hong Kong',
        tonnage: 1700.6,
        originPort: '35.45706684934256, 139.65090672024135',
        originPortName: 'Port of Yokohama',
        destinationPort: '-36.839681, 174.778570',
        destinationPortName: 'Ports of Auckland',
        collectionAmount: 550,
      },
      {
        shipName: 'MONTE SARMIENTO',
        IMO: '9283227',
        flag: 'Brazil',
        tonnage: 2100.8,
        originPort: '-23.964844, -46.300737',
        originPortName: 'Porto de Santos',
        destinationPort: '-34.897263827927816, -56.20879399854648',
        destinationPortName: 'Porto de Montevidéu',
        collectionAmount: 700,
      },
    ],
  });
}

seed().then(() => {
  console.log('Database seeded!')
  prisma.$disconnect()
})