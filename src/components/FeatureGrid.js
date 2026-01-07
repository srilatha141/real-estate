import { useState } from "react";

export default function FeatureGrid({ backgroundColor,
  textColor,
  title,
  subtitle,
  description,
  subDescription,
  features,
  benefits,
  cta,
  image, onChange }) {

  const [isEditing, setEditing] = useState(false);
  const [initialValue, setInitialValue] = useState({
    backgroundColor,
    textColor,
    title,
    subtitle,
    description,
    subDescription,
    features,
    benefits,
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

  const updateItem = (index, field, value) => {
    const updated = [...initialValue.benefits.list];
    updated[index] = { ...updated[index], [field]: value };

    setInitialValue((prev) => ({
      ...prev,
      benefits: {...benefits, list: updated }
    }));
  };

  return (
    <>
      <section
        className="about-section cms-section py-5"
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

              {/*Sub Description */}
              {isEditing ? (
                <textarea
                  className="form-control mb-4"
                  value={initialValue.subDescription}
                  onChange={(e) => updateField("description", e.target.value)}
                />
              ) : (
                <div className="mb-4">{initialValue.subDescription}</div>
              )}

              {/* Features */}
              <div className="row g-4 mb-4">
                {initialValue.features?.map((feature, idx) => (
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
                    value={initialValue.cta?.label}
                    onChange={(e) =>
                      setInitialValue(prev => ({
                        ...prev,
                        cta: { ...prev.cta, label: e.target.value }
                      }))
                    }
                  />
                  <input
                    className="form-control mb-3"
                    value={initialValue.cta?.url}
                    onChange={(e) =>
                      setInitialValue(prev => ({
                        ...prev,
                        cta: { ...prev.cta, url: e.target.value }
                      }))
                    }
                  />
                </>
              ) : (
                initialValue.cta !== undefined &&
                <a href={initialValue.cta?.url} className="btn btn-primary btn-lg">
                  {initialValue.cta?.label}
                  <i className={`fas fa-${initialValue.cta?.icon} ms-2`} />
                </a>
              )}

              {/* Benefits */}
              <div className="row g-3">
                {initialValue.benefits?.list?.map((item, idx) => (
                  <EditableBenefitItem
                    key={idx}
                    item={item}
                    index={idx}
                    icon={benefits.icon}
                    isEditing={isEditing}
                    onChange={updateItem}
                  />
                ))}
              </div>
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

const EditableBenefitItem = ({ item, icon, index, onChange, isEditing }) => (
  <div className="col-12 position-relative">
    <div className="d-flex align-items-start">
      <i className={`fas fa-${icon.name} ${icon.class} me-2`}></i>

      <div className="w-100">
        {/* Title */}
        {isEditing ? (
          <input
            className="form-control mb-1"
            value={item.title}
            onChange={(e) =>
              onChange(index, "title", e.target.value)
            }
          />
        ) : (
          <strong className="text-dark">
            {item.title}
          </strong>
        )}{" "}

        {/* Text */}
        {isEditing ? (
          <input
            className="form-control"
            value={item.text}
            onChange={(e) =>
              onChange(index, "text", e.target.value)
            }
          />
        ) : (
          <span className="text-muted">{item.text}</span>
        )}
      </div>
    </div>
  </div>
);
