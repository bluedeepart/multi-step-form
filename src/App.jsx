import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import PersonalInfo from './components/PersonalInfo';
import SelectPlans from './components/SelectPlans';
import AddOns from './components/AddOns';
import Summary from './components/Summary';
import Thankyou from './components/Thankyou';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: PersonalInfo },
      { path: 'select-plans', Component: SelectPlans },
      { path: 'add-ons', Component: AddOns },
      { path: 'summary', Component: Summary },
      { path: 'thank-you', Component: Thankyou }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
