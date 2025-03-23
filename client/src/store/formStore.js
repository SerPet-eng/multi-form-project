import { create } from 'zustand';
import { pages } from '../content/Content';

export const useFormStore = create((set) => ({
  currentStep: 0,
  isMonthly: false,
  formData: {},
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
}));
