import { useState } from "react";

export default function Feedback({ backgroundColor, textColor, title, subtitle, description, testimonials, onChange }) {

  const [isEditing, setEditing] = useState(false);
  const [initialValue, setInitialValue] = useState({
    backgroundColor, textColor, title, subtitle, description, testimonials
  });

  const updateField = (key, value) => {
    setInitialValue(prev => ({ ...prev, [key]: value }));
  };

  const updateTestimonial = (index, key, value) => {
    const updated = [...initialValue.testimonials];
    updated[index][key] = value;
    setInitialValue(prev => ({ ...prev, testimonials: updated }));
  };

  const updateAuthor = (index, key, value) => {
    const updated = [...initialValue.testimonials];
    updated[index].author = {
      ...updated[index].author,
      [key]: value
    };
    setInitialValue(prev => ({ ...prev, testimonials: updated }));
  };

  return (
    <>
      {!isEditing ?
        <button className='btn btn-primary' onClick={() => setEditing(true)}>Edit</button>
        : <button onClick={() => { onChange(initialValue); setEditing(false) }} className='btn btn-primary'>Save</button>}
      <section
        className="testimonials-section cms-section py-5"
        style={{ backgroundColor: initialValue.backgroundColor, color: initialValue.textColor }}
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
                  <h2 className="heading-title">{initialValue.title}</h2>
                  <p className="lead">{initialValue.subtitle}</p>
                  <p>{initialValue.description}</p>
                </>
              )}
            </div>
          </div>

          {/* TESTIMONIALS */}
          <div className="row g-4">
            {initialValue.testimonials.map((t, idx) => (
              <div key={idx} className="col-lg-4 col-md-6">
                <div className="testimonial-card text-center p-4 h-100 shadow-sm">

                  {/* RATING */}
                  {isEditing ? (
                    <input
                      type="number"
                      min="1"
                      max="5"
                      className="form-control mb-3"
                      value={t.rating}
                      onChange={(e) =>
                        updateTestimonial(idx, "rating", Number(e.target.value))
                      }
                    />
                  ) : (
                    <div className="rating mb-3">
                      {[...Array(t.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star text-warning"></i>
                      ))}
                    </div>
                  )}

                  {/* QUOTE */}
                  {isEditing ? (
                    <textarea
                      className="form-control mb-3"
                      value={t.quote}
                      onChange={(e) =>
                        updateTestimonial(idx, "quote", e.target.value)
                      }
                    />
                  ) : (
                    <div className="testimonial-content mb-3">
                      <p className="fst-italic">"{t.quote}"</p>
                    </div>
                  )}

                  {/* AUTHOR */}
                  <div className="testimonial-author">
                    {isEditing ? (
                      <>
                        <input
                          className="form-control mb-2"
                          value={t.author.image}
                          onChange={(e) =>
                            updateAuthor(idx, "image", e.target.value)
                          }
                          placeholder="Author Image URL"
                        />
                        <input
                          className="form-control mb-2"
                          value={t.author.name}
                          onChange={(e) =>
                            updateAuthor(idx, "name", e.target.value)
                          }
                          placeholder="Author Name"
                        />
                        <input
                          className="form-control mb-2"
                          value={t.author.role}
                          onChange={(e) =>
                            updateAuthor(idx, "role", e.target.value)
                          }
                          placeholder="Author Role"
                        />
                        <input
                          className="form-control"
                          value={t.author.tagline}
                          onChange={(e) =>
                            updateAuthor(idx, "tagline", e.target.value)
                          }
                          placeholder="Author Tagline"
                        />
                      </>
                    ) : (
                      <>
                        <img
                          src={t.author.image}
                          alt={t.author.name}
                          className="rounded-circle mb-2"
                          style={{ width: 60, height: 60, objectFit: "cover" }}
                        />
                        <h6 className="mb-1">{t.author.name}</h6>
                        <p className="text-muted small mb-1">
                          {t.author.role}
                        </p>
                        <p className="text-muted small">
                          {t.author.tagline}
                        </p>
                      </>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
