import { useState } from "react";

export default function ContactSection({
  backgroundColor, textColor, title, subtitle, description, form,
  onChange
}) {

  const [isEditing, setEditing] = useState(false);
  const [initialValue, setInitialValue] = useState({ backgroundColor, textColor, title, subtitle, description, form });

  const updateField = (key, value) => {
    setInitialValue(prev => ({ ...prev, [key]: value }));
  };

  const updateForm = (key, value) => {
    setInitialValue(prev => ({
      ...prev,
      form: { ...prev.form, [key]: value }
    }));
  };

  const updateFormField = (index, key, value) => {
    const updated = [...initialValue.form.fields];
    updated[index][key] = value;
    setInitialValue(prev => ({
      ...prev,
      form: { ...prev.form, fields: updated }
    }));
  };

  return (
    <>
      <section
        className="contact-section cms-section py-5"
        style={{ backgroundColor: initialValue.backgroundColor, color: initialValue.textColor }}
      >
        <div style={{ float: 'right', cursor: 'pointer' }}>
          {!isEditing ?
            <i
              className="fas fa-edit text-primary cursor-pointer"
              onClick={() => setEditing(true)}
              title="Edit"
            />
            :
            <i
              className="fas fa-save text-success cursor-pointer"
              onClick={() => { onChange(initialValue); setEditing(false) }}
              title="Save"
            />}
        </div>
        <div className="container">

          {/* HEADER */}
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              {isEditing ? (
                <>
                  <input
                    className="form-control mb-2"
                    value={initialValue.title}
                    onChange={(e) => updateField("title", e.target.value)}
                  />
                  <input
                    className="form-control mb-2"
                    value={initialValue.subtitle}
                    onChange={(e) => updateField("subtitle", e.target.value)}
                  />
                  <textarea
                    className="form-control"
                    value={initialValue.description}
                    onChange={(e) => updateField("description", e.target.value)}
                  />
                </>
              ) : (
                <>
                  <h2 className="heading-title mb-4">{initialValue.title}</h2>
                  <p className="lead">{initialValue.subtitle}</p>
                  <p>{initialValue.description}</p>
                </>
              )}
            </div>
          </div>

          {/* FORM */}
          <div className="row justify-content-center">
            <div className="col-lg-8">

              <form
                className="contact-form"
                action={initialValue.form.action}
                method={initialValue.form.method}
              >
                <div className="row g-3">

                  {/* FORM FIELDS */}
                  {initialValue.form.fields.map((field, idx) => (
                    <div
                      key={idx}
                      className={`col-${field.type === "textarea" ? "12" : "md-6"}`}
                    >
                      {isEditing ? (
                        <div className="card p-3">
                          <input
                            className="form-control mb-2"
                            value={field.label}
                            onChange={(e) =>
                              updateFormField(idx, "label", e.target.value)
                            }
                            placeholder="Label"
                          />

                          <input
                            className="form-control mb-2"
                            value={field.name}
                            onChange={(e) =>
                              updateFormField(idx, "name", e.target.value)
                            }
                            placeholder="Field Name"
                          />

                          <select
                            className="form-control mb-2"
                            value={field.type}
                            onChange={(e) =>
                              updateFormField(idx, "type", e.target.value)
                            }
                          >
                            <option value="text">Text</option>
                            <option value="email">Email</option>
                            <option value="number">Number</option>
                            <option value="textarea">Textarea</option>
                          </select>

                          {field.type === "textarea" && (
                            <input
                              type="number"
                              className="form-control mb-2"
                              value={field.rows || 4}
                              onChange={(e) =>
                                updateFormField(idx, "rows", e.target.value)
                              }
                              placeholder="Rows"
                            />
                          )}

                          <label className="form-check-label">
                            <input
                              type="checkbox"
                              className="form-check-input me-2"
                              checked={field.required}
                              onChange={(e) =>
                                updateFormField(idx, "required", e.target.checked)
                              }
                            />
                            Required
                          </label>
                        </div>
                      ) : (
                        <>
                          <label className="form-label">
                            {field.label}{field.required && " *"}
                          </label>

                          {field.type === "textarea" ? (
                            <textarea
                              className="form-control"
                              rows={field.rows || 4}
                              required={field.required}
                            />
                          ) : (
                            <input
                              type={field.type}
                              className="form-control"
                              required={field.required}
                            />
                          )}
                        </>
                      )}
                    </div>
                  ))}

                  {/* SUBMIT */}
                  <div className="col-12 text-center">
                    {isEditing ? (
                      <div className="card p-3">
                        <input
                          className="form-control mb-2"
                          value={initialValue.form.submit.label}
                          onChange={(e) =>
                            setInitialValue(prev => ({
                              ...prev,
                              form: {
                                ...prev.form,
                                submit: {
                                  ...prev.form.submit,
                                  label: e.target.value
                                }
                              }
                            }))
                          }
                          placeholder="Submit Label"
                        />
                        <input
                          className="form-control"
                          value={initialValue.form.submit.icon}
                          onChange={(e) =>
                            setInitialValue(prev => ({
                              ...prev,
                              form: {
                                ...prev.form,
                                submit: {
                                  ...prev.form.submit,
                                  icon: e.target.value
                                }
                              }
                            }))
                          }
                          placeholder="Submit Icon"
                        />
                      </div>
                    ) : (
                      <button type="submit" className="btn btn-primary btn-lg">
                        {initialValue.form.submit.label}
                        <i className={`fas fa-${initialValue.form.submit.icon} ms-2`}></i>
                      </button>
                    )}
                  </div>

                </div>
              </form>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
