import { useState } from "react";

export default function HeroFlexible({
  title,
  subtitle,
  subtitle1,
  alignment,
  bg_image,
  bg_color,
  buttons,
  onChange
}) {
  const [isEditing, setEditing] = useState(false);
  const [initialValue, setInitialValue] = useState({
    title,
    subtitle,
    subtitle1,
    alignment,
    bg_image,
    bg_color,
    buttons,
  });

  console.log('hfvbhfbv', initialValue)

  const handleFieldChange = (field, value) => {
    setInitialValue(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleButtonChange = (index, field, value) => {
    const updatedButtons = buttons.map((btn, i) =>
      i === index ? { ...btn, [field]: value } : btn
    );
    setInitialValue(prev => ({
      ...prev,
      buttons: updatedButtons
    }));
  };

  return (
    <>
      {!isEditing ?
        <button className='btn btn-primary' onClick={() => setEditing(true)}>Edit</button>
        : <button onClick={() => { onChange(initialValue); setEditing(false) }} className='btn btn-primary'>Save</button>}
      <section
        style={{
          backgroundImage: `url(${initialValue.bg_image})`,
          backgroundColor: initialValue.bg_color,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '600px',
          padding: '60px 20px',
          textAlign: initialValue.alignment,
          color: 'white',
        }}
      >
        {isEditing ? (
          <>
            <input
              type="text"
              placeholder="Enter background image URL"
              value={initialValue.bg_image}
              onChange={(e) => handleFieldChange('bg_image', e.target.value)}
              style={{ width: "100%", marginBottom: "20px" }}
            />
            <input
              className="form-control mb-2"
              value={initialValue.title}
              onChange={(e) => handleFieldChange('title', e.target.value)}
            />
            <input
              className="form-control mb-2"
              value={initialValue.subtitle}
              onChange={(e) => handleFieldChange('subtitle', e.target.value)}
            />
            <input
              className="form-control mb-4"
              value={initialValue.subtitle1}
              onChange={(e) => handleFieldChange('subtitle1', e.target.value)}
            />
            {initialValue.buttons.map((btn, idx) => (
              <div key={idx} className="mb-3">
                <input
                  className="form-control mb-1"
                  value={btn.label}
                  onChange={(e) => handleButtonChange(idx, 'label', e.target.value)}
                />
              </div>
            ))}
          </>
        ) : (
          <>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <p>{subtitle1}</p>
            <div>
              {buttons?.map((btn, idx) => (
                <a key={idx} href={btn.url} className={`btn btn-${btn.variant} m-2`}>
                  {btn.label}
                </a>
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
}