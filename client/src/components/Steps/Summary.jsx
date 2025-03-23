import { useFormStore } from '../../store/formStore';
import { useWindowSize } from '../../store/WindowContext';

export default function Summary() {
  const { handlePrev } = useFormStore();
  const { windowSizeChecker } = useWindowSize();

  return (
    <div className="form-summary">
      <h2 className="form-title">Finish up</h2>
      <p className="form-sub-title">
        Double-check everything looks OK before confirming.
      </p>

      <div className="form-summary-container">
        <div className="summary-container">
          <div className="summary-content">
            <p className="summary-title">ADD ONS PICKED</p>
            <a className="summary-anchor">Change</a>
          </div>
          <p className="summary-price">PRICE</p>
        </div>
        <hr />
        <div className="summary-container">
          <p className="summary-title-other">Online service</p>
          <p className="summary-price-other">PRICE</p>
        </div>
        <div className="summary-container">
          <p className="summary-title-other">Large storage</p>
          <p className="summary-price-other">PRICE</p>
        </div>
      </div>

      <div className="form-summary-total">
        <p className="form-summary-total-title">Total &#40;per month&#41;</p>
        <p className="form-summary-total-price">PRICE</p>
      </div>
    </div>
  );
}
