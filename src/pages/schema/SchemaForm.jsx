import React, { useCallback, useEffect, useState } from 'react';
import PageTitle from '../../components/page_title/PageTitle';
import FormInput from '../../components/form/FormInput';
import FormInputWithUnit from '../../components/form/FormInputWithUnit';
import FormInputWithSelect from '../../components/form/FormInputWithSelect';
import FormInputRange from '../../components/form/FormInputRange';
import Switch from '../../components/form/Switch';
import LoaderOverlay from '../../components/LoaderOverlay';
import { useParams } from 'react-router';
import apiClient from '../../api/apiClient';
import { API_ROUTES } from '../../constants/apiRoutes';

const CURRENCY_UNIT = "INR";

const scheduleOptions = [
  {label: 'Hourly', value: '1'}, 
  {label: 'Daily', value: '24'}, 
  {label: 'Weekly', value: '168'}, 
  {label: 'Monthly', value: '720'}
];


const fields = [
  { label: "Schema Name", name: "title", inputType: "text", type: "text" },
  { label: "Schema Badge", name: "schemaBadge", inputType: "text", type: "text" },

  // Toggle: Fixed = true, Range = false
  { label: "Schema Type", name: "schemaType", type: "toggle", labels: ["Fixed", "Range"] },

  // Only show when schema_type is Fixed (true)
  { label: "Amount", name: "minimumInvestmentAmount", inputType: "number", unit: CURRENCY_UNIT, type: "unit", conditionalOn: { field: "schemaType", value: true } },
  { label: "Range", name: "amount_range", type: "range", min: 0, max: 0,  conditionalOn: { field: "schemaType", value: false } },

  // Only show when schema_type is Range (false)
  // { label: "Min Amount", name: "min_amount", inputType: "number", unit: CURRENCY_UNIT, type: "unit", conditionalOn: { field: "schema_type", value: false } },
  // { label: "Max Amount", name: "max_amount", inputType: "number", unit: CURRENCY_UNIT, type: "unit", conditionalOn: { field: "schema_type", value: false } },

  { label: "Return Of Interest", name: "returnRate", inputType: "number", type: "number_with_select" },
  { label: "Return Period", name: "returnSchedule", type: "select", options: scheduleOptions },

  // Toggle: Period = true, Lifetime = false
  { label: "Return Type", name: "returnType", type: "toggle", labels: ["Period", "Lifetime"] },

  // Only show if return_type is Period (true)
  { type: "DIV", conditionalOn: { field: "returnType", value: false } },
  { label: "Number of Period", name: "totalReturnPeriods", inputType: "number", unit: "Times", type: "unit", conditionalOn: { field: "returnType", value: true } },


  { label: "Capital Back", name: "capitalReturned", type: "toggle", labels: ["Yes", "No"] },
  { label: "Featured", name: "featured", type: "toggle", labels: ["Yes", "No"] },

  // Toggle: Yes = true
  { label: "Schema Cancel", name: "cancellable", type: "toggle", labels: ["Yes", "No"] },

  // Only show if schema_cancel is Yes (true)
  { label: "Cancel Expiry (Minutes)", name: "cancellationGracePeriodMinutes", inputType: "number", type: "number", conditionalOn: { field: "cancellable", value: true } },

  { label: "Schema Trending", name: "tradeable", type: "toggle", labels: ["Yes", "No"] },  
  { label: "Currency", name: "currency", type: "toggle", labels: ["USD", "INR"] },
  { label: "Early Exit Penalty", name: "earlyExitPenalty", inputType: "number"},
  { label: "Terms & Condition URL", name: "termsAndConditionsUrl", type: "text" },

  { label: "Description", name: "description", type: "textarea" },
  { label: "Status", name: "status", type: "toggle", labels: ["Active", "Deactivate"] },
];

const interestTypeOptions = [
  { value: 'PERCENTAGE', label: '%' },
  { value: 'FLAT', label: '₹' },
];


  const defaultFormState = {
    title: '',
    schemaBadge: '',
    schemaType: true, // true = Fixed, false = Range,
    minimumInvestmentAmount: '0',
    maximumInvestmentAmount: '0',
    returnRate: '20',
    returnSchedule: scheduleOptions,
    returnType: false,  // true = Period, false = Lifetime
    totalReturnPeriods: '0',
    capitalReturned: true,
    featured: true,
    cancellable: false,
    cancellationGracePeriodMinutes: 0,
    tradeable: true,

    status: true, // Active
    off_days: [],
    schema_img: null,
  };

const SchemaForm = () => {
  const { schemaId } = useParams();
  const isEditMode = !!schemaId;  
  const [formData, setFormData] = useState({ ...defaultFormState });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (!isEditMode) return;

    const fetchSchemaInfo = async () => {
        try {
            const data = await apiClient.get(API_ROUTES.SCHEMA_By_ID(schemaId));
            setFormData({
              ...defaultFormState,
              ...data,
              schemaType: data.schemaType === 'FIXED' ? true : false,
              returnType: data.returnType === 'PERIOD' ? true : false,
              capitalReturned: data.capitalReturned,
              featured: data.featured,
              cancellable: data.cancellable,
              tradeable: data.tradeable,
              status: data.active,
              schema_img: null,
            });
        } catch (err) {
            setMessage({ type: 'error', text: err.message });
            console.error("Error fetching schema info:", err);
        } finally {
          setLoading(false);
        }
    };

    if (schemaId) {
        fetchSchemaInfo();
    }
}, [schemaId]);



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
        case 'DIV':
          return (
            <div className="col-xl-6"></div>
          )
        case 'unit':
          return (
            <div className="col-xl-6" key={field.name}>
              <FormInputWithUnit {...commonProps} type={field.inputType || 'text'} unit={field.unit} />
            </div>
          );
        case 'textarea':
          return (
            <div className="col-xl-12" key={field.name}>
              <div className='site-input-groups'>
                <label className="box-input-label" htmlFor={field.name}>{field.label}</label>
                <textarea
                  name={field.name}
                  className='form-textarea mb-0'
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                />
              </div>
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
                value={field.name === 'returnSchedule' ? formData.returnSchedule.scheduleInHour : formData[field.name]}
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
                inputValue={formData.returnRate || ''}
                onInputChange={handleReturnInterestChange}
                inputPlaceholder=""
                selectName="interestCalculationMethod"
                selectValue={formData.interestCalculationMethod || 'PERCENTAGE'}
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
                value={formData[field.name]}
              />
            </div>
          );
        case 'range':
          return (
            <div className="col-xl-6 row">
            <FormInputRange
              minValue={formData.minimumInvestmentAmount || field.min}
              maxValue={formData.maximumInvestmentAmount || field.max}
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
