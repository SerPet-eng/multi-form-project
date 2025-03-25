import ThankYouIcon from '../../assets/images/icon-thank-you.svg';

export default function Success() {
  return (
    <div className="form-success">
      <img className="icon" src={ThankYouIcon} alt="A thank you icon" />
      <h2 className="form-success-title">Thank you!</h2>
      <p className="form-success-text">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
}
