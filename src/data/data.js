import IconArcade from '../assets/images/icon-arcade.svg';
import IconAdvaced from '../assets/images/icon-advanced.svg';
import IconPro from '../assets/images/icon-pro.svg';

export const plans = [
  {
    id: 'p1',
    name: 'Arcade',
    bill_amt: 9,
    icon: IconArcade,
  },
  {
    id: 'p2',
    name: 'Advanced',
    bill_amt: 12,
    icon: IconAdvaced,
  },
  {
    id: 'p3',
    name: 'Pro',
    bill_amt: 15,
    icon: IconPro,
  }
];

export const addOns = [
  {
    id: 'a1',
    title: 'Online service',
    description: 'Access to multiplayer games',
    price: 1,
  },
  {
    id: 'a2',
    title: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    price: 2,
  },
  {
    id: 'a3',
    title: 'Customizable Profile',
    description: 'Custom theme on your profile',
    price: 2,
  }
];
