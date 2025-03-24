import { useEffect, useState } from 'react';
import { useFormStore } from '../../store/formStore';

export default function Summary() {
  const { formData, isMonthly } = useFormStore();
  const [totalSum, setTotalSum] = useState(0);

  const plans = formData?.selectedPlan;
  const addOns = formData?.selectedAddOns || []; // Default to an empty array if undefined
  const pricePlan = plans?.price || 0; // Default to 0 if undefined

  // console.log(addOns);

  useEffect(() => {
    // Calculate total price whenever the plan or add-ons change
    const priceAddOns = addOns.reduce((total, item) => total + item.price, 0);
    setTotalSum(pricePlan + priceAddOns);
  }, [pricePlan, addOns]);

  return (
    <div className="form-summary">
      <h2 className="form-title">Finish up</h2>
      <p className="form-sub-title">
        Double-check everything looks OK before confirming.
      </p>

      <div className="form-summary-container">
        <div className="summary-container">
          <div className="summary-content">
            <p className="summary-title">{plans?.title}</p>
            <a className="summary-anchor">Change</a>
          </div>
          <p className="summary-price">
            ${plans?.price || 0}/{plans?.date}
          </p>
        </div>
        <hr />

        {addOns.map((item, index) => (
          <div key={index} className="summary-container">
            <p className="summary-title-other">{item.title}</p>
            <p className="summary-price-other">
              +${item.price || 0}/{item.date}
            </p>
          </div>
        ))}
      </div>

      <div className="form-summary-total">
        <p className="form-summary-total-title">
          Total &#40;per {isMonthly ? 'month' : 'year'}&#41;
        </p>
        <p className="form-summary-total-price">
          ${totalSum}/{!isMonthly ? 'mo' : 'yr'}
        </p>
      </div>
    </div>
  );
}
