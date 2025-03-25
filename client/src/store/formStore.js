import { create } from 'zustand';
import { pages } from '../content/Content';

export const useFormStore = create((set) => ({
  currentStep: 0,
  isMonthly: false,
  isSuccess: false,
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
  toggleSuccess: () => {
    set((state) => ({
      isSuccess: !state.isSuccess,
    }));
  },
  handleNext: () =>
    set((state) => ({
      currentStep: (state.currentStep + 1) % pages.length,
    })),
  handlePrev: () =>
    set((state) => ({
      currentStep: (state.currentStep - 1 + pages.length) % pages.length,
    })),
  updateFormData: (key, value) => {
    set((state) => ({
      formData: {
        ...state.formData,
        [key]: value,
      },
    }));
  },
}));
