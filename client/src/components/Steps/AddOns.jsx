import { useFormStore } from '../../store/formStore';
import { useWindowSize } from '../../store/WindowContext';

export default function AddOns() {
  const { handlePrev, handleNext } = useFormStore();
  const { windowSizeChecker } = useWindowSize();

  return (
    <form className="form-add-ons">
      <h2 className="form-add-ons-title">Pick add-ons</h2>
      <p className="form-add-ons-sub-title">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="form-control-group">
        <label className="form-control">
          <input type="checkbox" name="checkbox" />
          <span className="checkmark"></span>
          <div className="form-control-text-container">
            <p className="form-control-title">Online Service</p>
            <p className="form-control-sub-title">Access to multiplayer</p>
          </div>
          <p className="form-control-price">$1/mo</p>
        </label>

        <label className="form-control">
          <input type="checkbox" name="checkbox" />
          <span className="checkmark"></span>
          <div className="form-control-text-container">
            <p className="form-control-title">Large Storage</p>
            <p className="form-control-sub-title">Extra 1TB of cloud save</p>
          </div>
          <p className="form-control-price">$2/mo</p>
        </label>

        <label className="form-control">
          <input type="checkbox" name="checkbox" />
          <span className="checkmark"></span>
          <div className="form-control-text-container">
            <p className="form-control-title">Customizable Profile</p>
            <p className="form-control-sub-title">
              Custom theme on your profile
            </p>
          </div>
          <p className="form-control-price">$2/mo</p>
        </label>
      </div>
    </form>
  );
}
