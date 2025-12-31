import { useState } from "react";

export default function FeaturedPropertiesSection({
  title, subtitle, properties, cta, onChange
}) {
  const [isEditing, setEditing] = useState(false);
  const [initialValue, setInitialValue] = useState({
    title, subtitle, properties, cta
  })

  const updateField = (key, value) => {
    setInitialValue(prev => ({ ...prev, [key]: value }));
  };

  const updateProperty = (index, key, value) => {
    const updated = [...initialValue.properties];
    updated[index][key] = value;
    setInitialValue(prev => ({ ...prev, properties: updated }));
  };

  return (
    <>
      {!isEditing ?
        <button className='btn btn-primary' onClick={() => setEditing(true)}>Edit</button>
        : <button onClick={() => { onChange(initialValue); setEditing(false) }} className='btn btn-primary'>Save</button>}
      <section className="properties-section cms-section cms-section-alt py-5">
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
                  <h2 className="heading-title text-dark">{initialValue.title}</h2>
                  <p className="lead text-dark mb-4">{initialValue.subtitle}</p>
                </>
              )}
            </div>
          </div>

          {/* PROPERTIES */}
          <div className="row g-4">
            {initialValue.properties.map((property, idx) => (
              <div key={idx} className="col-lg-4 col-md-6">
                <div className="property-card h-100 shadow-sm">

                  {/* IMAGE */}
                  <div className="img-box">
                    {isEditing ? (
                      <input
                        className="form-control"
                        value={property.image}
                        onChange={(e) =>
                          updateProperty(idx, "image", e.target.value)
                        }
                        placeholder="Image URL"
                      />
                    ) : (
                      <img
                        src={property.image}
                        className="w-100"
                        alt={property.title || "Property"}
                      />
                    )}
                  </div>

                  {/* DETAILS */}
                  <div className="property-details p-4">
                    {isEditing ? (
                      <>
                        <input
                          className="form-control mb-2"
                          value={property.price}
                          onChange={(e) =>
                            updateProperty(idx, "price", e.target.value)
                          }
                          placeholder="Price"
                        />

                        <input
                          className="form-control mb-2"
                          value={property.location}
                          onChange={(e) =>
                            updateProperty(idx, "location", e.target.value)
                          }
                          placeholder="Location"
                        />

                        <input
                          className="form-control mb-2"
                          value={property.title}
                          onChange={(e) =>
                            updateProperty(idx, "title", e.target.value)
                          }
                          placeholder="Property Title"
                        />

                        <input
                          className="form-control mb-2"
                          value={property.bedrooms || ""}
                          onChange={(e) =>
                            updateProperty(idx, "bedrooms", e.target.value)
                          }
                          placeholder="Bedrooms"
                        />

                        <input
                          className="form-control mb-2"
                          value={property.area || ""}
                          onChange={(e) =>
                            updateProperty(idx, "area", e.target.value)
                          }
                          placeholder="Area"
                        />

                        <input
                          className="form-control"
                          value={property.url}
                          onChange={(e) =>
                            updateProperty(idx, "url", e.target.value)
                          }
                          placeholder="Details URL"
                        />
                      </>
                    ) : (
                      <>
                        <h4 className="property-price">{property.price}</h4>
                        <p className="property-location mb-2">
                          <i className="fas fa-map-marker-alt me-2"></i>
                          {property.location}
                        </p>
                        <h5 className="property-title">{property.title}</h5>

                        <div className="property-var">
                          {property.bedrooms && (
                            <span className="badge me-3">
                              <i className="fas fa-bed me-2"></i>
                              {property.bedrooms}
                            </span>
                          )}
                          {property.area && (
                            <span className="badge">
                              <i className="fas fa-ruler me-2"></i>
                              {property.area}
                            </span>
                          )}
                        </div>

                        <a href={property.url} className="btn btn-primary mt-3">
                          View Details
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          {initialValue.cta && (
            <div className="text-center mt-4">
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
                    className="form-control"
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
          )}

        </div>
      </section>
    </>
  );
}
