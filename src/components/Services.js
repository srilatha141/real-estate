import { useState } from "react";

export default function ServicesSection({
  background, textColor, title, subtitle, services, whyChooseUs, onChange
}) {
  const [isEditing, setEditing] = useState(false);
  const [initialValue, setInitialValue] = useState({ background, textColor, title, subtitle, services, whyChooseUs });

  const updateField = (key, value) => {
    setInitialValue(prev => ({ ...prev, [key]: value }));
  };

  const updateService = (index, key, value) => {
    const updated = [...initialValue.services];
    updated[index][key] = value;
    setInitialValue(prev => ({ ...prev, services: updated }));
  };

  const updateServiceCTA = (index, key, value) => {
    const updated = [...initialValue.services];
    updated[index].cta = { ...updated[index].cta, [key]: value };
    setInitialValue(prev => ({ ...prev, services: updated }));
  };

  const updateWhyFeature = (index, key, value) => {
    const updated = [...initialValue.whyChooseUs.features];
    updated[index][key] = value;
    setInitialValue(prev => ({
      ...prev,
      whyChooseUs: {
        ...prev.whyChooseUs,
        features: updated
      }
    }));
  };

  return (
    <>
      {!isEditing ?
        <button className='btn btn-primary' onClick={() => setEditing(true)}>Edit</button>
        : <button onClick={() => { onChange(initialValue); setEditing(false) }} className='btn btn-primary'>Save</button>}
      <section
        className="services-section cms-section py-5"
        style={{ background: initialValue.background, color: initialValue.textColor }}
      >
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
                  <textarea
                    className="form-control"
                    value={initialValue.subtitle}
                    onChange={(e) => updateField("subtitle", e.target.value)}
                  />
                </>
              ) : (
                <>
                  <h2 className="heading-title text-white">{initialValue.title}</h2>
                  <p className="lead text-white">{initialValue.subtitle}</p>
                </>
              )}
            </div>
          </div>

          {/* SERVICES */}
          <div className="row g-4">
            {initialValue.services.map((service, idx) => (
              <div key={idx} className="col-lg-4 col-md-6">
                <div className="service-card text-center p-4 h-100">

                  {/* IMAGE */}
                  {isEditing ? (
                    <input
                      className="form-control mb-2"
                      value={service.image}
                      onChange={(e) =>
                        updateService(idx, "image", e.target.value)
                      }
                      placeholder="Service Image URL"
                    />
                  ) : (
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="service-icon mb-3"
                      style={{ width: 80, height: 80, objectFit: "cover" }}
                    />
                  )}

                  {/* TITLE */}
                  {isEditing ? (
                    <input
                      className="form-control mb-2"
                      value={service.title}
                      onChange={(e) =>
                        updateService(idx, "title", e.target.value)
                      }
                      placeholder="Service Title"
                    />
                  ) : (
                    <h4 className="mb-3">{service.title}</h4>
                  )}

                  {/* DESCRIPTION */}
                  {isEditing ? (
                    <textarea
                      className="form-control mb-2"
                      value={service.description}
                      onChange={(e) =>
                        updateService(idx, "description", e.target.value)
                      }
                      placeholder="Service Description"
                    />
                  ) : (
                    <p className="mb-3">{service.description}</p>
                  )}

                  {/* CTA */}
                  {isEditing ? (
                    <>
                      <input
                        className="form-control mb-2"
                        value={service.cta.label}
                        onChange={(e) =>
                          updateServiceCTA(idx, "label", e.target.value)
                        }
                        placeholder="CTA Label"
                      />
                      <input
                        className="form-control"
                        value={service.cta.url}
                        onChange={(e) =>
                          updateServiceCTA(idx, "url", e.target.value)
                        }
                        placeholder="CTA URL"
                      />
                    </>
                  ) : (
                    <a href={service.cta.url} className="btn btn-outline-light">
                      {service.cta.label}
                      <i className="fas fa-arrow-right ms-2"></i>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* WHY CHOOSE US */}
          <div className="row mt-5">
            <div className="col-lg-8 mx-auto text-center">
              <div className="services-info p-4 bg-white bg-opacity-10 rounded-3">

                {/* TITLE */}
                {isEditing ? (
                  <input
                    className="form-control mb-3"
                    value={initialValue.whyChooseUs.title}
                    onChange={(e) =>
                      setInitialValue(prev => ({
                        ...prev,
                        whyChooseUs: {
                          ...prev.whyChooseUs,
                          title: e.target.value
                        }
                      }))
                    }
                  />
                ) : (
                  <h4 className="text-white mb-3">
                    {initialValue.whyChooseUs.title}
                  </h4>
                )}

                {/* FEATURES */}
                <div className="row g-3">
                  {initialValue.whyChooseUs.features.map((feature, idx) => (
                    <div key={idx} className="col-md-4">

                      {isEditing ? (
                        <>
                          <input
                            className="form-control mb-2"
                            value={feature.icon}
                            onChange={(e) =>
                              updateWhyFeature(idx, "icon", e.target.value)
                            }
                            placeholder="Icon name"
                          />
                          <input
                            className="form-control mb-2"
                            value={feature.title}
                            onChange={(e) =>
                              updateWhyFeature(idx, "title", e.target.value)
                            }
                            placeholder="Feature Title"
                          />
                          <textarea
                            className="form-control"
                            value={feature.description}
                            onChange={(e) =>
                              updateWhyFeature(idx, "description", e.target.value)
                            }
                            placeholder="Feature Description"
                          />
                        </>
                      ) : (
                        <>
                          <i
                            className={`fas fa-${feature.icon} fa-2x text-warning mb-2`}
                          ></i>
                          <h6 className="text-white">{feature.title}</h6>
                          <p className="small text-white-50">
                            {feature.description}
                          </p>
                        </>
                      )}
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
