import { create } from 'zustand';

export const useFormError = create((set) => ({
  errorMessage: {
    error_name: null,
    error_email: null,
    error_phone: null,
    error_plan: null,
    error_addOns: null,
    error_all: null,
  },
  setErrorAll: (error_all) => {
    set((state) => ({
      errorMessage: {
        ...state.errorMessage,
        error_all, // Set only the general error message
      },
    }));
  },
  setErrorName: (error_name) => {
    set((state) => ({
      errorMessage: {
        ...state.errorMessage,
        error_name: error_name,
      },
    }));
  },
  setErrorEmail: (error_email) => {
    set((state) => ({
      errorMessage: {
        ...state.errorMessage,
        error_email: error_email,
      },
    }));
  },
  setErrorPhone: (error_phone) => {
    set((state) => ({
      errorMessage: {
        ...state.errorMessage,
        error_phone: error_phone,
      },
    }));
  },
  setErrorPlan: (error_plan) => {
    set((state) => ({
      errorMessage: {
        ...state.errorMessage,
        error_plan: error_plan,
      },
    }));
  },
  setErrorAddOns: (error_addOns) => {
    set((state) => ({
      errorMessage: {
        ...state.errorMessage,
        error_addOns: error_addOns,
      },
    }));
  },
}));
