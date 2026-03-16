import { createContext, useState } from 'react';
import { plans } from '../data/data';

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  plan: plans[0],
  duration: "monthly",
  addOns: [],
};

const FormContent = createContext({
  formData: initialFormData,
  updateForm: () => { },
  handlePlans: () => { },
  toggleDuration: () => { },
  toggleAddon: () => { }
});

export const FormContentProvider = ({ children }) => {
  const [formData, setFormData] = useState(initialFormData);

  function updateForm(name, value) {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handlePlans(plan) {
    setFormData((prevData) => ({
      ...prevData,
      plan
    }));
  }

  function toggleDuration() {
    setFormData((prevData) => ({
      ...prevData,
      duration: prevData.duration === 'monthly' ? 'yearly' : 'monthly',
    }));
  }

  function toggleAddon(addon) {
    setFormData((prevData) => {
      const exists = prevData.addOns.some((a) => a.id === addon.id);

      return {
        ...prevData,
        addOns: exists
          ? prevData.addOns.filter((a) => a.id !== addon.id)
          : [...prevData.addOns, addon]
      };
    });
  }

  const values = {
    formData,
    updateForm,
    handlePlans,
    toggleDuration,
    toggleAddon
  };

  return (
    <FormContent.Provider value={values}>
      {children}
    </FormContent.Provider>
  );
};

export default FormContent;
