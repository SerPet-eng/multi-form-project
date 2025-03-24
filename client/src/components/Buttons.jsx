import { pages } from '../content/Content';
import { useFormStore } from '../store/formStore';
import { useFormError } from '../store/formError';

export default function Buttons() {
  const { handlePrev, handleNext, currentStep, formData } = useFormStore();
  const {
    setErrorName,
    setErrorEmail,
    setErrorPhone,
    setErrorPlan,
    setErrorAddOns,
    setErrorAll,
  } = useFormError();

  const handleNextInput = () => {
    const isNameEmpty = formData?.name.trim() === '';
    const isEmailEmpty = formData?.email.trim() === '';
    const isPhoneEmpty = formData?.phone.trim() === '';
    const isSelectedPlanEmpty = !formData?.selectedPlan.title;
    const isSelectedAddOnsEmpty = formData?.selectedAddOns.length === 0;

    switch (currentStep) {
      case 0:
        if (isNameEmpty) setErrorName('Name is required');
        else setErrorName(null);

        if (isEmailEmpty) setErrorEmail('Email is required');
        else setErrorEmail(null);

        if (isPhoneEmpty) setErrorPhone('Phone is required');
        else setErrorPhone(null);

        if (isNameEmpty || isEmailEmpty || isPhoneEmpty) {
          setErrorAll('Please complete all personal information fields.');
          return; // Prevent sliding to the next step
        }

        setErrorAll(null); // Clear general error message if validation passes
        break;

      case 1:
        if (isSelectedPlanEmpty) {
          setErrorPlan('Please select a plan.');
          return; // Prevent sliding to the next step
        }

        setErrorPlan(null); // Clear plan error if validation passes
        break;

      case 2:
        if (isSelectedAddOnsEmpty) {
          setErrorAddOns('Please choose at least one add-on.');
          return; // Prevent sliding to the next step
        }

        setErrorAddOns(null); // Clear add-ons error if validation passes
        break;

      default:
        handleNext();
        return;
    }

    setErrorAll(null);
    setErrorName(null);
    setErrorEmail(null);
    setErrorPhone(null);
    setErrorPlan(null);
    setErrorAddOns(null);
    // Proceed to next step if no errors
    handleNext();
  };

  return (
    <div className="form-button-group">
      <div>
        {currentStep === 0 ? null : (
          <button className="prev-button" onClick={handlePrev}>
            Go back
          </button>
        )}

        {currentStep === pages?.length - 1 ? (
          <button className="next-button" type="submit">
            Confirm
          </button>
        ) : (
          <button className="next-button" onClick={handleNextInput}>
            Next step
          </button>
        )}
      </div>
    </div>
  );
}
