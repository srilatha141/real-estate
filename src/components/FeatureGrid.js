import { useState } from "react";

export default function FeatureGrid({ backgroundColor,
  textColor,
  title,
  subtitle,
  description,
  features,
  cta,
  image, onChange }) {

  const [isEditing, setEditing] = useState(false);
  const [initialValue, setInitialValue] = useState({
    backgroundColor,
    textColor,
    title,
    subtitle,
    description,
    features,
    cta,
    image
  });

  const updateField = (key, value) => {
    setInitialValue(prev => ({ ...prev, [key]: value }));
  };

  const updateFeature = (index, key, value) => {
    const updated = [...initialValue.features];
    updated[index][key] = value;
    setInitialValue(prev => ({ ...prev, features: updated }));
  };

  return (
    <>
      {!isEditing ?
        <button className='btn btn-primary' onClick={() => setEditing(true)}>Edit</button>
        : <button onClick={() => { onChange(initialValue); setEditing(false) }} className='btn btn-primary'>Save</button>}
      <section
        className="about-section cms-section py-5"
        style={{ backgroundColor: initialValue.backgroundColor, color: initialValue.textColor }}
      >
        <div className="container">
          <div className="row align-items-center">

            {/* LEFT */}
            <div className="col-lg-6 pe-lg-5">
              {/* Title */}
              {isEditing ? (
                <input
                  className="form-control mb-3"
                  value={initialValue.title}
                  onChange={(e) => updateField("title", e.target.value)}
                />
              ) : (
                <h2 className="heading-title mb-4">{initialValue.title}</h2>
              )}

              {/* Subtitle */}
              {isEditing ? (
                <textarea
                  className="form-control mb-3"
                  value={initialValue.subtitle}
                  onChange={(e) => updateField("subtitle", e.target.value)}
                />
              ) : (
                <p className="lead mb-4">{initialValue.subtitle}</p>
              )}

              {/* Description */}
              {isEditing ? (
                <textarea
                  className="form-control mb-4"
                  value={initialValue.description}
                  onChange={(e) => updateField("description", e.target.value)}
                />
              ) : (
                <div className="mb-4">{initialValue.description}</div>
              )}

              {/* Features */}
              <div className="row g-4 mb-4">
                {initialValue.features.map((feature, idx) => (
                  <div key={idx} className={`col-md-${idx === 2 ? "12" : "6"}`}>
                    <div className="feature-item text-center">
                      <i className={`fas fa-${feature.icon} fa-3x mb-3`} />

                      {isEditing ? (
                        <textarea
                          className="form-control"
                          value={feature.description}
                          onChange={(e) =>
                            updateFeature(idx, "description", e.target.value)
                          }
                        />
                      ) : (
                        <p className="small">{feature.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              {isEditing ? (
                <>
                  <input
                    className="form-control mb-2"
                    value={initialValue.cta.label}
                    onChange={(e) =>
                      setInitialValue(prev => ({
                        ...prev,
                        cta: { ...prev.cta, label: e.target.value }
                      }))
                    }
                  />
                  <input
                    className="form-control mb-3"
                    value={initialValue.cta.url}
                    onChange={(e) =>
                      setInitialValue(prev => ({
                        ...prev,
                        cta: { ...prev.cta, url: e.target.value }
                      }))
                    }
                  />
                </>
              ) : (
                <a href={initialValue.cta.url} className="btn btn-primary btn-lg">
                  {initialValue.cta.label}
                  <i className={`fas fa-${initialValue.cta.icon} ms-2`} />
                </a>
              )}
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-lg-6">
              {isEditing ? (
                <input
                  className="form-control"
                  value={initialValue.image.src}
                  onChange={(e) =>
                    setInitialValue(prev => ({
                      ...prev,
                      image: { ...prev.image, src: e.target.value }
                    }))
                  }
                  placeholder="Image URL"
                />
              ) : (
                <img
                  src={initialValue.image.src}
                  alt={initialValue.image.alt}
                  className="img-fluid rounded-3 shadow"
                />
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
