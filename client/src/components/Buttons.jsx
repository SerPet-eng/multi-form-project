import { pages } from '../content/Content';
import { useWindowSize } from '../store/WindowContext';
import { useFormStore } from '../store/formStore';

export default function Buttons() {
  const { windowSizeChecker } = useWindowSize();
  const { handlePrev, handleNext, currentStep } = useFormStore();

  // style={{ display: windowSizeChecker ? 'flex' : 'none' }}

  return (
    <div className="form-button-group">
      <div>
        {currentStep === 0 ? (
          ''
        ) : (
          <button className="prev-button" onClick={handlePrev}>
            Go back
          </button>
        )}

        {currentStep === pages?.length - 1 ? (
          <button className="next-button" type="submit">
            Confirm
          </button>
        ) : (
          <button className="next-button" onClick={handleNext}>
            Next step
          </button>
        )}
      </div>
    </div>
  );
}
