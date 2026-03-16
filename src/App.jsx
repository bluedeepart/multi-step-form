import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import PersonalInfo from './components/PersonalInfo';
import SelectPlans from './components/SelectPlans';
import AddOns from './components/AddOns';
import Summary from './components/Summary';
import Thankyou from './components/Thankyou';
import { personalInfoAction } from './components/actions';
import ErrorPage from './components/ErrorPage';
import { FormContentProvider } from './context/FormContent';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: PersonalInfo, action: personalInfoAction },
      { path: 'select-plan', Component: SelectPlans },
      { path: 'add-ons', Component: AddOns },
      { path: 'summary', Component: Summary },
      { path: 'thankyou', Component: Thankyou },
    ],
  },
]);

function App() {
  return (
    <FormContentProvider>
      <RouterProvider router={router} />
    </FormContentProvider>
  );
}

export default App;
