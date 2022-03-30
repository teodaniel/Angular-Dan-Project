export interface People {
  _id: string;
  index: number;
  isActive: boolean;
  balance: string;
  picture: string;
  age: number;
  name: string;
  gender: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  about: string;
  latitude: number;
  longitude: number;
  friends: { id: number; name: string }[];
  greeting: string;
}

export const people = [
  {
    _id: '6241610832ddfa3123e29e8d',
    index: 0,
    isActive: true,    
    balance: '$3,414.15',
    picture: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    age: 35,
    name: 'Bates Sosa',
    gender: 'male',
    company: 'CEDWARD',
    email: 'batessosa@cedward.com',
    phone: '+1 (952) 489-2314',
    address: '565 Albemarle Road, Thomasville, Nevada, 7170',
    about:
      'Nostrud duis quis ea pariatur eu dolore aliqua nostrud velit cillum ut ullamco. Eu enim id enim amet deserunt. Culpa quis ipsum id minim consequat exercitation enim qui enim ea cillum. Consequat eiusmod dolore qui voluptate ex culpa et. Laboris sit qui id sit ea sit. Voluptate officia esse reprehenderit officia nostrud veniam anim incididunt velit consequat dolore ipsum aliquip esse. Aliquip commodo elit enim tempor laborum qui.\r\n',
    latitude: -4.427315,
    longitude: 13.644338,
    friends: [
      {
        id: 0,
        name: 'Page Mercer',
      },
      {
        id: 1,
        name: 'Coleman Watts',
      },
      {
        id: 2,
        name: 'Porter Patel',
      },
    ],
    greeting: 'Hello, Bates Sosa! You have 9 unread messages.',
  },
  {
    _id: '624161089d0764888da405d7',
    index: 1,
    isActive: false,
    balance: '$3,669.06',
    picture: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=717&q=80',
    age: 22,
    name: 'Jeanie Barker',
    gender: 'female',
    company: 'ORBIXTAR',
    email: 'jeaniebarker@orbixtar.com',
    phone: '+1 (892) 478-2801',
    address: '434 Bergen Place, Gardiner, South Carolina, 9809',
    about:
      'Excepteur qui qui quis ea consequat officia. Incididunt minim exercitation amet commodo enim duis nulla cupidatat anim ad esse dolor. Quis culpa excepteur ullamco ipsum. Exercitation in cupidatat ipsum quis labore irure tempor consequat sit magna irure consectetur Lorem. Est reprehenderit fugiat incididunt duis reprehenderit tempor non ullamco pariatur qui. Ea fugiat anim pariatur anim ea reprehenderit in magna ut consectetur officia amet Lorem.\r\n',
    latitude: -46.838458,
    longitude: 31.385588,
    friends: [
      {
        id: 0,
        name: 'Josefina Winters',
      },
      {
        id: 1,
        name: 'Patton Rodriquez',
      },
      {
        id: 2,
        name: 'Lowery Andrews',
      },
    ],
    greeting: 'Hello, Jeanie Barker! You have 1 unread messages.',
  },
  {
    _id: '62416108344d2d4aea03b529',
    index: 2,
    isActive: true,
    balance: '$3,977.43',
    picture: 'https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    age: 40,
    name: 'Sears Klein',
    gender: 'male',
    company: 'RODEOCEAN',
    email: 'searsklein@rodeocean.com',
    phone: '+1 (974) 502-3793',
    address: '743 Hutchinson Court, Morgandale, Tennessee, 7293',
    about:
      'Proident sit velit eu qui. Exercitation qui in ad magna cillum pariatur non do ipsum fugiat elit enim do. Non exercitation sit culpa minim magna do commodo ea. Sit magna cillum aliquip aute consequat non irure. In nulla ad pariatur exercitation ullamco adipisicing non deserunt. Aute do pariatur magna consequat occaecat culpa duis commodo ullamco enim quis est enim.\r\n',
    latitude: -81.807589,
    longitude: -150.269906,
    friends: [
      {
        id: 0,
        name: 'House Merritt',
      },
      {
        id: 1,
        name: 'Davidson Patterson',
      },
      {
        id: 2,
        name: 'Murray Richmond',
      },
    ],
    greeting: 'Hello, Sears Klein! You have 10 unread messages.',
  },
  {
    _id: '62416108ed911e79fa77f5ad',
    index: 3,
    isActive: true,
    balance: '$2,671.00',
    picture: 'https://images.unsplash.com/photo-1561131989-b8112bafbd43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    age: 26,
    name: 'Sonja Stevenson',
    gender: 'female',
    company: 'ZOSIS',
    email: 'sonjastevenson@zosis.com',
    phone: '+1 (811) 569-3822',
    address: '325 Beach Place, Chamberino, South Dakota, 6603',
    about:
      'Adipisicing dolore consequat culpa nisi elit magna adipisicing dolor esse ullamco id nisi mollit. Laboris veniam et culpa id officia id. Dolore veniam Lorem non amet pariatur laboris in voluptate ex. Sit nisi occaecat proident sunt aliquip. Adipisicing consectetur amet duis consectetur do aliquip id eu qui nulla ut culpa.\r\n',
    latitude: 38.35416,
    longitude: 91.641012,
    friends: [
      {
        id: 0,
        name: 'Angelina Johns',
      },
      {
        id: 1,
        name: 'Deborah Dickerson',
      },
      {
        id: 2,
        name: 'Cortez Mcdonald',
      },
    ],
    greeting: 'Hello, Sonja Stevenson! You have 10 unread messages.',
  },
  {
    _id: '62416108066a6831b54cc780',
    index: 4,
    isActive: false,
    balance: '$1,735.05',
    picture: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80',
    age: 39,
    name: 'Blackwell Mayer',
    gender: 'male',
    company: 'NIPAZ',
    email: 'blackwellmayer@nipaz.com',
    phone: '+1 (973) 517-2377',
    address: '357 Bedell Lane, Norfolk, West Virginia, 7660',
    about:
      'Est tempor pariatur occaecat pariatur proident fugiat ex aliquip culpa reprehenderit in aliquip tempor. Duis tempor esse proident labore ad laborum eiusmod proident laboris incididunt pariatur. Incididunt eiusmod ex qui aute magna magna deserunt ipsum laborum mollit magna non magna. Ad enim aute eu velit non voluptate aute. Nisi amet sint elit tempor nulla elit ex reprehenderit ea. Ut ipsum aute magna culpa ipsum nostrud nisi aliqua nulla nisi pariatur voluptate voluptate.\r\n',
    latitude: 83.538515,
    longitude: -10.415063,
    friends: [
      {
        id: 0,
        name: 'Pamela Rowland',
      },
      {
        id: 1,
        name: 'Flynn Harvey',
      },
      {
        id: 2,
        name: 'Bailey Monroe',
      },
    ],
    greeting: 'Hello, Blackwell Mayer! You have 9 unread messages.',
  },
];
