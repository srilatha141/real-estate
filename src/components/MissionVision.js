import React, { useState } from 'react';

export default function MissionVisionSection({
  backgroundColor,
  textColor,
  title,
  subtitle,
  cards,
  coreValues,
  onChange
}) {
  const [isEditing, setEditing] = useState(false);
  const [initialValue, setInitialValue] = useState({
    textColor,
    backgroundColor,
    title,
    subtitle,
    cards,
    coreValues
  });

  const handleChange = (path, value) => {
    setInitialValue(prev => ({
      ...prev,
      [path]: value
    }));
  };

  const updateCard = (index, field, value) => {
    const updatedCards = initialValue.cards.map((card, i) =>
      i === index ? { ...card, [field]: value } : card
    );
    setInitialValue(prev => ({
      ...prev,
      cards: updatedCards
    }));
  };

  const updateCoreValues = (field, value) => {
    setInitialValue(prev => ({
      ...prev,
      coreValues: {
        ...prev.coreValues,
        [field]: value
      }
    }));
  };



  return (
    <>
      {!isEditing ?
        <button className='btn btn-primary' onClick={() => setEditing(true)}>Edit</button>
        : <button onClick={() => { onChange(initialValue); setEditing(false) }} className='btn btn-primary'>Save</button>}
      <section
        className="mission-vision-section cms-section py-5"
        style={{ backgroundColor, color: textColor }}
      >
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              {isEditing ? (
                <input
                  type="text"
                  className="form-control mb-3 text-center fw-bold"
                  value={initialValue.title}
                  onChange={(e) => handleChange('title', e.target.value)}
                />
              ) : (
                <h2 className="heading-title mb-4">{title}</h2>
              )}
              {isEditing ? (
                <textarea
                  className="form-control text-center"
                  value={initialValue.subtitle}
                  onChange={(e) => handleChange('subtitle', e.target.value)}
                />
              ) : (
                <p className="lead">{subtitle}</p>
              )}
            </div>
          </div>

          <div className="row g-4">
            {initialValue.cards.map((card, idx) => (
              <div key={idx} className="col-lg-6" data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="text-center p-4 h-100">
                  <i className={`fas fa-${card.icon} fa-4x text-primary mb-4`}></i>
                  {isEditing ? (
                    <>
                      <input
                        type="text"
                        className="form-control fw-bold mb-2 text-center"
                        value={card.title}
                        onChange={(e) => updateCard(idx, `title`, e.target.value)}
                      />
                      <input
                        type="text"
                        className="form-control mb-2 text-muted text-center"
                        value={card.lead}
                        onChange={(e) => updateCard(idx, `lead`, e.target.value)}
                      />
                      <textarea
                        className="form-control"
                        value={card.description}
                        onChange={(e) => updateCard(idx, `description`, e.target.value)}
                      />
                    </>
                  ) : (
                    <>
                      <h3>{card.title}</h3>
                      <p className="lead text-muted">{card.lead}</p>
                      <p>{card.description}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="row mt-5">
            <div className="col-lg-8 mx-auto text-center">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    className="form-control fw-bold mb-2 text-center"
                    value={initialValue.coreValues.title}
                    onChange={(e) => updateCoreValues('title', e.target.value)}
                  />
                  <textarea
                    className="form-control text-center"
                    value={initialValue.coreValues.description}
                    onChange={(e) => updateCoreValues('description', e.target.value)}
                  />
                </>
              ) : (
                <>
                  <h3>{initialValue.coreValues.title}</h3>
                  <p className="lead">{initialValue.coreValues.description}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}