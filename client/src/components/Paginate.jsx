import { pages } from '../content/Content';
import { useFormStore } from '../store/formStore';
import { useWindowSize } from '../store/WindowContext';
import BackgroundMobile from '../../assets/images/bg-sidebar-mobile.svg';
import BackgroundDesktop from '../../assets/images/bg-sidebar-desktop.svg';

export default function Paginate() {
  const { windowSizeChecker } = useWindowSize();
  const { currentStep } = useFormStore();
  return (
    <div
      className="paginate"
      style={{
        backgroundImage: `url("${
          windowSizeChecker ? BackgroundMobile : BackgroundDesktop
        }")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {pages.map((page, index) => {
        return (
          <button key={index} className="paginate-button">
            <div className="paginate-button-text-group">
              <span
                className={`paginate-number ${
                  currentStep === index ? 'active' : ''
                }`}
              >
                {index + 1}
              </span>
              {windowSizeChecker ? (
                ''
              ) : (
                <div className="paginate-button-details">
                  <p className="details-steps">Step {index + 1}</p>
                  <p className="details-title">{page.title}</p>
                </div>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}
