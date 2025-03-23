import Form1 from '../components/Steps/PersonalForm';
import Form2 from '../components/Steps/SelectPlan';
import Form3 from '../components/Steps/AddOns';
import Form4 from '../components/Steps/Summary';

export const pages = [
  { component: <Form1 />, title: 'Your Info' },
  { component: <Form2 />, title: 'Select Plan' },
  { component: <Form3 />, title: 'Add-ons' },
  { component: <Form4 />, title: 'Summary' },
];
