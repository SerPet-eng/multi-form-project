import ArcadeIcon from '../../../assets/images/icon-arcade.svg';
import AdvancedIcon from '../../../assets/images/icon-advanced.svg';
import ProIcon from '../../../assets/images/icon-pro.svg';
import { useWindowSize } from '../../store/WindowContext';
import { useFormStore } from '../../store/formStore';

export default function SelectPlan() {
  const { windowSizeChecker } = useWindowSize();
  const { togglePlan, isMonthly, handleNext, handlePrev } = useFormStore();

  const handleSumbit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form-select-plan" onSubmit={handleSumbit}>
      <h2 className="form-title">Select your plan</h2>
      <p className="form-sub-title">
        You have the option of monthly or yearly billing.
      </p>

      <div className="form-control-group">
        <label className="form-control active">
          <input type="radio" name="radio" />
          <span className="checkmark"></span>
          <img src={ArcadeIcon} alt="Arcade Icon" />
          <div className="form-control-text-container">
            <p className="form-control-title">Arcade</p>
            <p className="form-control-sub-title">PRICE / DATE</p>
          </div>
        </label>

        <label className="form-control">
          <input type="radio" name="radio" />
          <span className="checkmark"></span>
          <img src={AdvancedIcon} alt="Advanced Icon" />

          <div className="form-control-text-container">
            <p className="form-control-title">Advanced</p>
            <p className="form-control-sub-title">PRICE / DATE</p>
          </div>
        </label>

        <label className="form-control">
          <input type="radio" name="radio" />
          <span className="checkmark"></span>
          <img src={ProIcon} alt="Pro Icon" />
          <div className="form-control-text-container">
            <p className="form-control-title">Pro</p>
            <p className="form-control-sub-title">PRICE / DATE</p>
          </div>
        </label>

        <div className="form-switch">
          <p className={`form-switch-text ${isMonthly ? '' : 'active'}`}>
            Monthly
          </p>
          <button
            className={`form-switch-button ${isMonthly ? 'active' : ''}`}
            onClick={togglePlan}
          >
            <div className="circle"></div>
          </button>
          <p className={`form-switch-text ${isMonthly ? 'active' : ''}`}>
            Yearly
          </p>
        </div>
      </div>
    </form>
  );
}
