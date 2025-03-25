import { useFormStore } from '../../store/formStore';
import { useFormError } from '../../store/formError';

export default function PersonalForm() {
  const { formData, updateFormData } = useFormStore();
  const { errorMessage } = useFormError();

  const handleChange = (e) => {
    const { name, value } = e.target;

    updateFormData(name, value);
  };

  return (
    <form className="form-personal-info">
      <h2 className="form-title">Personal Info</h2>
      <p className="form-sub-title">
        Please provide your name, email address, and phone number.
      </p>

      <div className="input-group">
        <div className="input-container">
          <label>
            Name
            {errorMessage.error_name && (
              <span className="error-message">{errorMessage.error_name}</span>
            )}
          </label>
          <input
            className={errorMessage.error_name ? 'error-name' : ''}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Stephen King"
          />
        </div>

        <div className="input-container">
          <label>
            Email Address
            {errorMessage.error_email && (
              <span className="error-message">{errorMessage.error_email}</span>
            )}
          </label>
          <input
            className={errorMessage.error_email ? 'error-email' : ''}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>

        <div className="input-container">
          <label>
            Phone Number{' '}
            {errorMessage.error_phone && (
              <span className="error-message">{errorMessage.error_phone}</span>
            )}
          </label>
          <input
            className={errorMessage.error_phone ? 'error-phone' : ''}
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. 1 234 567 890"
          />
        </div>
      </div>
    </form>
  );
}
