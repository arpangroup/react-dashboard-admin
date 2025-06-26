import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/page_title/PageTitle';
import FormInput from '../../components/form/FormInput';
import FormInputWithUnit from '../../components/form/FormInputWithUnit';
import Switch from '../../components/form/Switch';
import LoaderOverlay from '../../components/LoaderOverlay';
import { useParams } from 'react-router';

const CURRENCY_UNIT = "INR";

const fields = [
  { label: "Schema Name", name: "schema_name", inputType: "text", type: "text" },
  { label: "Schema Description", name: "schema_desc", type: "textarea" },
  { label: "Min Amount", name: "min_amount", inputType: "number", unit: CURRENCY_UNIT, type: "unit" },
  { label: "Max Amount", name: "max_amount", inputType: "number", unit: CURRENCY_UNIT, type: "unit" },
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
  {
    label: "Return Type", name: "return_type", type: "radio", options: [
      { value: "period", label: "Period" },
      { value: "lifetime", label: "Lifetime" }
    ]
  },
  { label: "Number of Period", name: "number_of_period", inputType: "number", unit: "Times", type: "unit" },
  {
    label: "Profit Return Holiday", name: "off_days", type: "multiselect", options: [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ]
  },
  { label: "Capital Back", name: "capital_back", type: "toggle" },
  { label: "Featured", name: "featured", type: "toggle" },
  { label: "Schema Cancel", name: "schema_cancel", type: "toggle" },
  { label: "Cancel Expiry (Minutes)", name: "expiry_minute", inputType: "number", type: "number", conditionalOn: { field: "schema_cancel", value: "1" } },
  { label: "Schema Trending", name: "is_trending", type: "toggle" },
  { label: "Status", name: "status", type: "toggle" },
];

const SchemaForm = () => {
  const { schemaId } = useParams();
  const isEditMode = !!schemaId;

  const defaultFormState = {
    schema_name: '',
    schema_desc: '',
    min_amount: '0',
    max_amount: '0',
    return_interest: '',
    interest_type: 'percentage',
    return_period: '1',
    return_type: 'period',
    number_of_period: '0',
    off_days: [],
    capital_back: '1',
    featured: '0',
    schema_cancel: '0',
    expiry_minute: '',
    is_trending: '0',
    status: '1',
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
      } catch (error) {
        setMessage({ type: 'error', text: error.message });
      } finally {
        setLoading(false);
      }
    };

    fetchSchema();
  }, [isEditMode, schemaId]);

  const handleChange = (e) => {
    const { name, value, type, files, multiple, options } = e.target;

    if (type === 'file') {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
    } else if (type === 'select-multiple') {
      const selectedOptions = Array.from(options).filter(o => o.selected).map(o => o.value);
      setFormData(prev => ({ ...prev, [name]: selectedOptions }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleToggle = (name, val) => {
    setFormData(prev => ({ ...prev, [name]: val ? '1' : '0' }));
  };

  const handleInterestTypeChange = (e) => {
    setFormData(prev => ({ ...prev, interest_type: e.target.value }));
  };

  const handleReturnInterestChange = (e) => {
    setFormData(prev => ({ ...prev, return_interest: e.target.value }));
  };

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

  const renderField = (field) => {
    // Handle conditional fields
    if (field.conditionalOn) {
      if (formData[field.conditionalOn.field] !== field.conditionalOn.value) {
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
            <FormInputWithUnit
              {...commonProps}
              type={field.inputType || 'text'}
              unit={field.unit}
            />
          </div>
        );
      case 'textarea':
        return (
          <div className="col-xl-12" key={field.name}>
            <label className="box-input-label" htmlFor={field.name}>{field.label}</label>
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
            <label className="box-input-label" htmlFor={field.name}>{field.label}</label>
            <select
              className="form-select"
              name={field.name}
              id={field.name}
              value={formData[field.name]}
              onChange={handleChange}
            >
              {field.options.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        );
      case 'radio':
        return (
          <div className="col-xl-6" key={field.name}>
            <label className="box-input-label">{field.label}</label>
            <div className="switch-field same-type">
              {field.options.map(opt => (
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
            <label className="box-input-label" htmlFor={field.name}>{field.label}</label>
            <select
              multiple
              name={field.name}
              id={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="form-select"
              size={field.options.length}
            >
              {field.options.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
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
              enabled={formData[field.name] === '1'}
              onToggle={(val) => handleToggle(field.name, val)}
            />
          </div>
        );
      case 'number_with_select':
        // Special case for Return Of Interest + Interest Type select
        return (
          <div className="col-xl-6" key={field.name}>
            <label className="box-input-label">{field.label}</label>
            <div className="position-relative">
              <input
                type="number"
                name={field.name}
                id={field.name}
                value={formData.return_interest}
                onChange={handleReturnInterestChange}
                className="box-input"
                placeholder="Number"
                min="0"
                step="any"
                required
              />
              <div className="prcntcurr">
                <select
                  name="interest_type"
                  value={formData.interest_type}
                  onChange={handleInterestTypeChange}
                  className="form-select"
                >
                  <option value="percentage">%</option>
                  <option value="fixed">₹</option>
                </select>
              </div>
            </div>
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
      default:
        return (
          <div className="col-xl-6" key={field.name}>
            <FormInput {...commonProps} type={field.inputType || 'text'} />
          </div>
        );
    }
  };


  return (
    <div className="main-content">
       <PageTitle title={isEditMode ? "Edit Schema" : "Add New Schema"} />



      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-12 col-md-12">
            <div className="site-card">
              <div className="site-card-body">
                <form action="https://81habibi.com/admin/schema/1" method="post" enctype="multipart/form-data" className="row">
                  <div className="col-xl-12">
                    <div className="row">
                      <div className="col-xl-3">
                        <div className="site-input-groups">
                          <label className="box-input-label" for="">Upload Icon:</label>
                          <div className="wrap-custom-file">
                            <input
                              type="file"
                              name="icon"
                              id="schema-icon"
                              accept=".gif, .jpg, .png"
                            />
                            <label className="file-ok">
                              <img
                                className="upload-icon"
                                src="https://81habibi.com/assets/global/materials/upload.svg"
                                alt=""
                              />
                              <span>Update Avatar</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  
                  <div className="schema-name  col-xl-6 ">
                    <div className="site-input-groups">
                      <label className="box-input-label" for="">Schema Name:</label>
                      <input
                        type="text"
                        name="name"
                        value="Crypto investment"
                        className="box-input"
                        placeholder="Investment Plan name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 schema-badge ">
                    <div className="site-input-groups">
                      <label className="box-input-label" for="">Schema Badge:</label>
                      <input
                        type="text"
                        className="box-input"
                        placeholder="Schema Badge"
                        name="badge"
                        value="Crypto"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="site-input-groups">
                      <label className="box-input-label" for="">Schema Type:</label>
                      <div className="switch-field same-type">
                        <input
                          type="radio"
                          id="fixed-type"
                          name="type"
                          value="fixed"
                        />
                        <label for="fixed-type">Fixed</label>
                        <input
                          type="radio"
                          id="range-type"
                          name="type"
                          value="range"
                          checked />
                        <label for="range-type">Range</label>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="site-input-groups row">


                      <div className="col-xl-6 min-amount ">
                        <label className="box-input-label" for="">Min Amount:</label>
                        <div className="input-group joint-input">
                          <input type="text" name="min_amount" value="500"
                            // oninput="this.value = validateDouble(this.value)"
                            className="form-control" required />
                          <span
                            className="input-group-text">INR</span>
                        </div>
                      </div>
                      <div className="col-xl-6 max-amount ">
                        <label className="box-input-label" for="">Max Amount:</label>
                        <div className="input-group joint-input">
                          <input type="text" name="max_amount" value="25000"
                            // oninput="this.value = validateDouble(this.value)"
                            className="form-control" required />
                          <span
                            className="input-group-text">INR</span>
                        </div>
                      </div>

                      {/* <div className="col-xl-12 fixed-amount  hidden ">
                        <label className="box-input-label" for="">Amount:</label>
                        <div className="input-group joint-input">
                          <input type="text" name="fixed_amount"
                            value="0"
                            // oninput="this.value = validateDouble(this.value)"
                            className="form-control" />
                          <span
                            className="input-group-text">INR</span>
                        </div>
                      </div> */}

                    </div>
                  </div>

                  <div className="col-xl-6">
                    <div className="site-input-groups">
                      <label className="box-input-label" for="">Return Of Interest:</label>
                      <div className="position-relative">
                        <input
                          type="text"
                          className="box-input"
                          placeholder="Number"
                          name="return_interest"
                          value="20"
                          // oninput="this.value = validateDouble(this.value)"
                          required
                        />
                        <div className="prcntcurr">
                          <select name="interest_type" className="form-select" id="">
                            <option value="percentage"
                              selected >%</option>
                            <option value="fixed"
                            >₹</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="site-input-groups">
                      <label className="box-input-label" for="">Return Period:</label>
                      <select name="return_period" className="form-select" id="">
                        <option value="1"
                        >Hour</option>
                        <option value="2"
                          selected >Daily</option>
                        <option value="3"
                        >Weekly</option>
                        <option value="4"
                        >Month</option>
                        <option value="5"
                        >2 Week</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="site-input-groups">
                      <label className="box-input-label" for="">Return Type:</label>
                      <div className="switch-field same-type">
                        <input
                          type="radio"
                          id="return-type-period"
                          name="return_type"
                          value="period"
                          checked />
                        <label for="return-type-period">Period</label>
                        <input
                          type="radio"
                          id="return-type-lifetime"
                          name="return_type"
                          value="lifetime"
                        />
                        <label for="return-type-lifetime">Lifetime</label>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 number-period ">
                    <div className="site-input-groups">
                      <label className="box-input-label" for="">Number of Period:</label>
                      <div className="input-group joint-input">
                        <input
                          type="text"
                          name="number_of_period"
                          value="30"
                          onkeypress="return validateNumber(event)"
                          className="form-control"
                          placeholder="Total Repeat Time"
                          required
                        />
                        <span className="input-group-text">Times</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <div className="site-input-groups">
                      <label className="box-input-label" for="">Profit Return Holiday (If you put any day here, user will never get the profit on that day):</label>
                      <select id="choices-multiple-remove-button" name="off_days[]" placeholder="Manage Days" multiple>
                        <option value="Sunday" selected>Sunday</option>
                        <option value="Monday" selected>Monday</option>
                        <option value="Tuesday" selected>Tuesday</option>
                        <option value="Wednesday" selected>Wednesday</option>
                        <option value="Thursday" selected>Thursday</option>
                        <option value="Friday" selected>Friday</option>
                        <option value="Saturday" selected>Saturday</option>

                      </select>
                    </div>

                  </div>
                  <div className="col-xl-12">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="site-input-groups">
                          <label className="box-input-label" for="">Capital Back:</label>
                          <div className="switch-field same-type">
                            <input
                              type="radio"
                              id="radio-seven"
                              name="capital_back"
                              value="1"
                              checked />
                            <label for="radio-seven">Yes</label>
                            <input
                              type="radio"
                              id="radio-eight"
                              name="capital_back"
                              value="0"
                            />
                            <label for="radio-eight">No</label>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="site-input-groups">
                          <label className="box-input-label" for="">Featured:</label>
                          <div className="switch-field same-type">
                            <input
                              type="radio"
                              id="featured-yes"
                              name="featured"
                              value="1"
                              checked />
                            <label for="featured-yes">Yes</label>
                            <input
                              type="radio"
                              id="featured-no"
                              name="featured"
                              value="0"
                            />
                            <label for="featured-no">No</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="col-xl-6 schema-cancel">
                    <div className="site-input-groups">
                      <label className="box-input-label" for="">Schema Cancel:</label>
                      <div className="switch-field same-type">
                        <input
                          type="radio"
                          id="schema-cancel-yes"
                          name="schema_cancel"
                          value="1"

                        />
                        <label for="schema-cancel-yes">Yes</label>
                        <input
                          type="radio"
                          id="schema-cancel-no"
                          name="schema_cancel"
                          value="0"
                          checked />
                        <label for="schema-cancel-no">No</label>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 cancel-expiry   hidden ">
                    <div className="site-input-groups">
                      <label className="box-input-label" for="">Cancel Expiry (Max 59 Minutes):</label>
                      <div className="input-group joint-input">
                        <input type="text" name="expiry_minute"
                          onkeypress="return validateNumber(event)"
                          value="59"
                          className="form-control" />
                        <span
                          className="input-group-text">Minute</span>
                      </div>
                    </div>

                  </div>

                  <div className="col-xl-6">
                    <div className="site-input-groups">
                      <label className="box-input-label" for="">Schema Trending:</label>
                      <div className="switch-field same-type">
                        <input
                          type="radio"
                          id="schema-trending-yes"
                          name="is_trending"
                          value="1"
                        />
                        <label for="schema-trending-yes">Yes</label>
                        <input
                          type="radio"
                          id="schema-trending-no"
                          name="is_trending"
                          checked value="0"
                        />
                        <label for="schema-trending-no">No</label>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="site-input-groups">
                      <label className="box-input-label" for="">Status:</label>
                      <div className="switch-field same-type">
                        <input
                          type="radio"
                          id="radio-five"
                          name="status"
                          checked="1"
                          value="1" />
                        <label for="radio-five">Active</label>
                        <input
                          type="radio"
                          id="radio-six"
                          name="status"
                          value="0"
                        />
                        <label for="radio-six">Deactivate</label>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12">
                    <button type="submit" className="site-btn-sm primary-btn w-100">
                      Update Schema
                    </button>
                  </div>
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
