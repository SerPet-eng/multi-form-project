import { create } from 'zustand';
import { pages } from '../content/Content';

export const useFormStore = create((set) => ({
  currentStep: 0,
  isMonthly: false,
  formData: {
    name: '',
    email: '',
    phone: '',
    selectedPlan: { title: '', price: 0, date: '' },
    selectedAddOns: [],
  },
  setSelectedPlan: (title, price, date) => {
    set((state) => ({
      formData: {
        ...state.formData,
        selectedPlan: { title, price, date },
      },
    }));
  },
  setSelectedAddOns: (addOn, checked) => {
    set((state) => ({
      formData: {
        ...state.formData,
        selectedAddOns: checked
          ? [...state.formData.selectedAddOns, addOn]
          : state.formData.selectedAddOns.filter(
              (item) => item.title !== addOn.title,
            ),
      },
    }));
  },
  togglePlan: () => {
    set((state) => ({
      isMonthly: !state.isMonthly,
    }));
  },
  handleNext: () =>
    set((state) => ({
      currentStep: (state.currentStep + 1) % pages.length, // Wrap around to the start
    })),
  handlePrev: () =>
    set((state) => ({
      currentStep: (state.currentStep - 1 + pages.length) % pages.length, // Handle negative indices
    })),
  updateFormData: (key, value) =>
    set((state) => ({
      formData: {
        ...state.formData,
        [key]: value,
      },
    })),
  handleSubmit: (name, email, phone, plan, add_ons) => {
    set((state) => ({
      formData: {
        ...state.formData,
        name: name,
        email: email,
        phone: phone,
        plan: plan,
        add_ons: add_ons, // This should be an array of selected add-ons
      },
    }));
  },
}));
