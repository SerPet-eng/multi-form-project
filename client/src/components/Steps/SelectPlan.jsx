import ArcadeIcon from '../../../assets/images/icon-arcade.svg';
import AdvancedIcon from '../../../assets/images/icon-advanced.svg';
import ProIcon from '../../../assets/images/icon-pro.svg';
import { useFormStore } from '../../store/formStore';
import { useFormError } from '../../store/formError';

export default function SelectPlan() {
  const { togglePlan, isMonthly, setSelectedPlan } = useFormStore();
  const { errorMessage } = useFormError();
  const plans = [
    {
      img: ArcadeIcon,
      title: 'Arcade',
      price: !isMonthly ? 9 : 90,
      date: !isMonthly ? 'mo' : 'yr',
    },
    {
      img: AdvancedIcon,
      title: 'Advanced',
      price: !isMonthly ? 12 : 120,
      date: !isMonthly ? 'mo' : 'yr',
    },
    {
      img: ProIcon,
      title: 'Pro',
      price: !isMonthly ? 15 : 150,
      date: !isMonthly ? 'mo' : 'yr',
    },
  ];

  return (
    <div className="form-select-plan">
      <h2 className="form-title">Select your plan</h2>
      <p className="form-sub-title">
        You have the option of monthly or yearly billing.
      </p>

      <div className="form-control-group">
        {plans.map((plan, index) => (
          <label
            key={index}
            className={`form-control ${
              errorMessage.error_plan ? 'error-plan' : ''
            } `}
          >
            <input
              type="radio"
              name="selectedPlan"
              onChange={() =>
                setSelectedPlan(plan.title, plan.price, plan.date)
              }
            />
            <span className="checkmark"></span>
            <img src={plan.img} alt={`Image of ${plan.title}`} />
            <div className="form-control-text-container">
              <p className="form-control-title">{plan.title}</p>
              <p className="form-control-sub-title">
                ${plan.price}/{plan.date}
              </p>
            </div>
          </label>
        ))}

        {errorMessage.error_plan && (
          <p className="error-message">{errorMessage.error_plan}</p>
        )}

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
    </div>
  );
}
