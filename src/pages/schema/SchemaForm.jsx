import React, { useCallback, useEffect, useState } from 'react';
import PageTitle from '../../components/page_title/PageTitle';
import FormInput from '../../components/form/FormInput';
import FormInputWithUnit from '../../components/form/FormInputWithUnit';
import FormInputWithSelect from '../../components/form/FormInputWithSelect';
import FormInputRange from '../../components/form/FormInputRange';
import Switch from '../../components/form/Switch';
import LoaderOverlay from '../../components/LoaderOverlay';
import { useParams } from 'react-router';

const CURRENCY_UNIT = "INR";

const fields = [
  { label: "Schema Name", name: "schema_name", inputType: "text", type: "text" },
  { label: "Schema Badge", name: "schema_badge", inputType: "text", type: "text" },

  // Toggle: Fixed = true, Range = false
  { label: "Schema Type", name: "schema_type", type: "toggle", labels: ["Fixed", "Range"] },

  // Only show when schema_type is Fixed (true)
  { label: "Amount", name: "amount", inputType: "number", unit: CURRENCY_UNIT, type: "unit", conditionalOn: { field: "schema_type", value: true } },
  { label: "Range", name: "amount_range", type: "range", min: 0, max: 0,  conditionalOn: { field: "schema_type", value: false } },

  // Only show when schema_type is Range (false)
  // { label: "Min Amount", name: "min_amount", inputType: "number", unit: CURRENCY_UNIT, type: "unit", conditionalOn: { field: "schema_type", value: false } },
  // { label: "Max Amount", name: "max_amount", inputType: "number", unit: CURRENCY_UNIT, type: "unit", conditionalOn: { field: "schema_type", value: false } },

  { label: "Return Of Interest", name: "return_interest", inputType: "number", type: "number_with_select" },
  {
    label: "Return Period", name: "return_period", type: "select", options: [
      { value: "1", label: "Hour" },
      { value: "2", label: "Daily" },
      { value: "3", label: "Weekly" },
      { value: "4", label: "Month" },
      { value: "5", label: "2 Week" }
    ]
  },

  // Toggle: Period = true, Lifetime = false
  { label: "Return Type", name: "return_type", type: "toggle", labels: ["Period", "Lifetime"] },

  // Only show if return_type is Period (true)
  { label: "Number of Period", name: "number_of_period", inputType: "number", unit: "Times", type: "unit", conditionalOn: { field: "return_type", value: true } },

  { label: "Capital Back", name: "capital_back", type: "toggle", labels: ["Yes", "No"] },
  { label: "Featured", name: "featured", type: "toggle", labels: ["Yes", "No"] },

  // Toggle: Yes = true
  { label: "Schema Cancel", name: "schema_cancel", type: "toggle", labels: ["Yes", "No"] },

  // Only show if schema_cancel is Yes (true)
  { label: "Cancel Expiry (Minutes)", name: "expiry_minute", inputType: "number", type: "number", conditionalOn: { field: "schema_cancel", value: true } },

  { label: "Schema Trending", name: "is_trending", type: "toggle", labels: ["Yes", "No"] },
  { label: "Status", name: "status", type: "toggle", labels: ["Active", "Deactivate"] },
];

const interestTypeOptions = [
  { value: 'percentage', label: '%' },
  { value: 'fixed', label: '₹' },
];

const SchemaForm = () => {
  const { schemaId } = useParams();
  const isEditMode = !!schemaId;

  const defaultFormState = {
    schema_type: true, // false = Range, true = Fixed
    return_type: false,  // true = Period, false = Lifetime
    capital_back: true,
    featured: true,
    schema_cancel: false,
    is_trending: true,
    status: true, // Active

    schema_name: '',
    schema_badge: '',
    schema_desc: '',
    min_amount: '0',
    max_amount: '0',
    return_interest: '20',
    number_of_period: '0',    
    expiry_minute: '',
    interest_type: 'percentage',
    return_period: '1',
    off_days: [],
    schema_img: null,
  };

  const [formData, setFormData] = useState({ ...defaultFormState });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (!isEditMode) return;

    const fetchSchema = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/schema/${schemaId}`);
        if (!response.ok) throw new Error('Failed to fetch schema');
        const data = await response.json();
        setFormData({ ...data, schema_img: null });

        // Normalize data if needed, e.g. boolean/string toggles
        setFormData({
          ...defaultFormState,
          ...data,
          return_type: data.return_type === '1' ? 'Period' : 'Lifetime',
          capital_back: data.capital_back === '1' ? 'Yes' : 'No',
          featured: data.featured === '1' ? 'Yes' : 'No',
          schema_cancel: data.schema_cancel === '1' ? 'Yes' : 'No',
          is_trending: data.is_trending === '1' ? 'Yes' : 'No',
          status: data.status === '1' ? 'Active' : 'Deactivate',
          schema_img: null,
        });
      } catch (error) {
        setMessage({ type: 'error', text: error.message });
      } finally {
        setLoading(false);
      }
    };

    fetchSchema();
  }, [isEditMode, schemaId]);

  // Generic change handler
  const handleChange = useCallback((e) => {
    const { name, value, type, files, options } = e.target;

    if (type === 'file') {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    } else if (type === 'select-multiple') {
      const selected = Array.from(options).filter(o => o.selected).map(o => o.value);
      setFormData(prev => ({ ...prev, [name]: selected }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  }, []);

  // Toggle handler for switches
  const handleToggle = useCallback((name, enabled, labels) => {
    // Map enabled boolean to Yes/No or Active/Deactivate strings
    // const mapToggle = (fieldName, isEnabled) => {
    //   if (fieldName === 'return_type') return isEnabled ? 'Period' : 'Lifetime';
    //   if (['capital_back', 'featured', 'schema_cancel', 'is_trending'].includes(fieldName))
    //     return isEnabled ? 'Yes' : 'No';
    //   if (fieldName === 'status') return isEnabled ? 'Active' : 'Deactivate';
    //   return isEnabled ? '1' : '0'; // fallback
    // };

    // const value = labels ? (enabled ? labels[0] : labels[1]) : (enabled ? '1' : '0');

    setFormData(prev => ({
      ...prev,
      [name]: enabled,
    }));
  }, []);

  // Special handlers for number_with_select field
  const handleReturnInterestChange = useCallback((val) => {
    setFormData(prev => ({ ...prev, return_interest: val }));
  }, []);
  const handleInterestTypeChange = useCallback((val) => {
    setFormData(prev => ({ ...prev, interest_type: val }));
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const payload = new FormData();
      for (const key in formData) {
        if (formData[key] !== null) {
          if (Array.isArray(formData[key])) {
            payload.append(key, JSON.stringify(formData[key]));
          } else {
            payload.append(key, formData[key]);
          }
        }
      }

      const endpoint = isEditMode ? `/api/schema/${schemaId}` : `/api/schema`;
      const method = isEditMode ? 'PUT' : 'POST';

      // Mock API call example
      // await fetch(endpoint, { method, body: payload });

      setMessage({ type: 'success', text: isEditMode ? 'Schema updated!' : 'Schema created!' });
    } catch (error) {
      setMessage({ type: 'error', text: error.message || 'Submission failed' });
    } finally {
      setLoading(false);
    }
  };

 const renderField = useCallback(
    (field) => {
      // Handle conditional fields
      if (field.conditionalOn) {
        const dependentValue = formData[field.conditionalOn.field];
        if (dependentValue !== field.conditionalOn.value) {
          return null;
        }
      }

      const commonProps = {
        key: field.name,
        label: field.label,
        name: field.name,
        value: formData[field.name] || '',
        onChange: handleChange,
        disabled: field.disabled || false,
      };

      switch (field.type) {
        case 'unit':
          return (
            <div className="col-xl-6" key={field.name}>
              <FormInputWithUnit {...commonProps} type={field.inputType || 'text'} unit={field.unit} />
            </div>
          );
        case 'textarea':
          return (
            <div className="col-xl-12" key={field.name}>
              <label className="box-input-label" htmlFor={field.name}>
                {field.label}
              </label>
              <textarea
                name={field.name}
                className={`form-textarea ${field.name}`}
                value={formData[field.name] || ''}
                onChange={handleChange}
              />
            </div>
          );
        case 'select':
          return (
            <div className="col-xl-6" key={field.name}>
              <label className="box-input-label" htmlFor={field.name}>
                {field.label}
              </label>
              <select
                className="form-select"
                name={field.name}
                id={field.name}
                value={formData[field.name]}
                onChange={handleChange}
              >
                {field.options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          );
        case 'radio':
          return (
            <div className="col-xl-6" key={field.name}>
              <label className="box-input-label">{field.label}</label>
              <div className="switch-field same-type">
                {field.options.map((opt) => (
                  <React.Fragment key={opt.value}>
                    <input
                      type="radio"
                      id={`${field.name}-${opt.value}`}
                      name={field.name}
                      value={opt.value}
                      checked={formData[field.name] === opt.value}
                      onChange={handleChange}
                    />
                    <label htmlFor={`${field.name}-${opt.value}`}>{opt.label}</label>
                  </React.Fragment>
                ))}
              </div>
            </div>
          );
        case 'multiselect':
          return (
            <div className="col-xl-12" key={field.name}>
              <label className="box-input-label" htmlFor={field.name}>
                {field.label}
              </label>
              <select
                multiple
                name={field.name}
                id={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                className="form-select"
                size={field.options.length}
              >
                {field.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          );
        case 'toggle':
          return (
            <div className="col-xl-6" key={field.name}>
              <label className="box-input-label">{field.label}</label>
              <Switch
                name={field.name}
                enabled={!!formData[field.name]} // Coerce to boolean
                labels={field.labels}
                style={{ padding: '13px 16px' }}
                onToggle={(name, value) => handleToggle(name, value)}
              />
            </div>
          );
        case 'number_with_select':
          return (
            <div className="col-xl-6" key={field.name}>
              <FormInputWithSelect
                label={field.label}
                inputName="return_interest"
                inputValue={formData.return_interest || ''}
                onInputChange={handleReturnInterestChange}
                inputPlaceholder=""
                selectName="interest_type"
                selectValue={formData.interest_type || 'percentage'}
                onSelectChange={handleInterestTypeChange}
                selectOptions={interestTypeOptions}
              />
            </div>
          );
        case 'number':
          return (
            <div className="col-xl-6" key={field.name}>
              <FormInput
                {...commonProps}
                type={field.inputType || 'number'}
                min={0}
                max={field.max || undefined}
              />
            </div>
          );
        case 'range':
          return (
            <div className="col-xl-6 row">
            <FormInputRange
              minValue={field.min}
              maxValue={field.max}
              onChange={() => {}}
            />
            </div>
          );
        default:
          return (
            <div className="col-xl-6" key={field.name}>
              <FormInput {...commonProps} type={field.inputType || 'text'} />
            </div>
          );
      }
    },
    [formData, handleChange, handleToggle, handleInterestTypeChange, handleReturnInterestChange]
  );

  return (
    <div className="main-content">
      <PageTitle title={isEditMode ? 'Edit Schema' : 'Add New Schema'} />
      {loading && <LoaderOverlay />}

      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-12 col-md-12">
            <div className="site-card">
              <div className="site-card-body">
                <div className="col-xl-12 mb-4">
                  <div className="row">
                    <div className="col-xl-3">
                      <div className="site-input-groups">
                        <label className="box-input-label" htmlFor="schema-icon">
                          Upload Icon:
                        </label>
                        <div className="wrap-custom-file">
                          <input
                            type="file"
                            name="icon"
                            id="schema-icon"
                            accept=".gif, .jpg, .png"
                            onChange={handleChange}
                          />
                          <label className="file-ok" htmlFor="schema-icon">
                            <img
                              className="upload-icon"
                              src="https://81habibi.com/assets/global/materials/upload.svg"
                              alt="Upload Icon"
                            />
                            <span>Update Avatar</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="row">
                  <div className="row mb-4">{fields.map(renderField)}</div>

                  {message && (
                    <div className={`alert ${message.type === 'error' ? 'alert-danger' : 'alert-success'}`}>
                      {message.text}
                    </div>
                  )}

                  <button type="submit" className="site-btn-sm primary-btn w-100" disabled={loading}>
                    {loading ? (isEditMode ? 'Updating...' : 'Saving...') : isEditMode ? 'Update Schema' : 'Create Schema'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchemaForm;


// below component is working fine, how to make amount will be visible only if schema_type is fixed, if schema_type is ange then min_amount and max_amount will show, for schematype fixed min_amount and max_amount will not visible. 

// similarly if return_type is period then only number_of_period field will show. similarly if schema_cancel is selected then only expiry_minute will show