import { useFormStore } from '../../store/formStore';
import { useFormError } from '../../store/formError';

export default function AddOns() {
  const { isMonthly, setSelectedAddOns } = useFormStore();
  const { errorMessage } = useFormError();

  const addOns = [
    {
      title: 'Online Service',
      subTitle: 'Access to multiplayer',
      price: !isMonthly ? 1 : 10,
      date: !isMonthly ? 'mo' : 'yr',
    },
    {
      title: 'Large Storage',
      subTitle: 'Extra 1TB of cloud save',
      price: !isMonthly ? 2 : 20,
      date: !isMonthly ? 'mo' : 'yr',
    },
    {
      title: 'Customizable Profile',
      subTitle: 'Custom theme on your profile',
      price: !isMonthly ? 2 : 20,
      date: !isMonthly ? 'mo' : 'yr',
    },
  ];

  const handleChange = (e, addOn) => {
    const { checked } = e.target;

    setSelectedAddOns(addOn, checked);
  };

  return (
    <form className="form-add-ons">
      <h2 className="form-add-ons-title">Pick add-ons</h2>
      <p className="form-add-ons-sub-title">
        Add-ons help enhance your gaming experience.
      </p>

      <div className="form-control-group">
        {addOns.map((item, index) => (
          <label
            key={index}
            className={`form-control ${
              errorMessage.error_addOns ? 'error-addOns' : ''
            }`}
          >
            <input
              type="checkbox"
              name="selectedAddOns"
              onChange={(e) => handleChange(e, item)}
            />
            <span className="checkmark"></span>
            <div className="form-control-text-container">
              <p className="form-control-title">{item.title}</p>
              <p className="form-control-sub-title">{item.subTitle}</p>
            </div>
            <p className="form-control-price">
              +${item.price}/{item.date}
            </p>
          </label>
        ))}

        {errorMessage.error_addOns && (
          <p className="error-message">{errorMessage.error_addOns}</p>
        )}
      </div>
    </form>
  );
}
