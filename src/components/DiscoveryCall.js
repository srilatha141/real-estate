import { useState } from "react";

const DiscoveryCall = ({ styles, layout, onChange }) => {
  const [isEditing, setEditing] = useState(false);
  const [draftLayout, setDraftLayout] = useState(layout);
  const [editableStyles, setEditableStyles] = useState(styles);

  const bg = editableStyles.background;

  return (
    <section
      className={`${editableStyles.padding} ${editableStyles.position} position-relative`}
      style={{
        backgroundImage: `url(${bg.image})`,
        backgroundSize: bg.size,
        backgroundPosition: bg.position,
        backgroundAttachment: bg.attachment
      }}
    >
      {/* Overlay */}
      <div
        className="position-absolute w-100 h-100"
        style={{ background: bg.overlay.color, top: 0, left: 0 }}
      />

      <div className="container position-relative" style={{ zIndex: 2 }}>
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
              onClick={() => { onChange(draftLayout); setEditing(false) }}
              title="Save"
            />}
        </div>
        <div className="row">
          <LeftCtaColumn
            data={draftLayout.left}
            isEditing={isEditing}
            onChange={(left) =>
              setDraftLayout({ ...draftLayout, left })
            }
          />

          <RightProcessColumn
            data={draftLayout.right}
            isEditing={isEditing}
            onChange={(right) =>
              setDraftLayout({ ...draftLayout, right })
            }
          />
        </div>
      </div>
    </section>
  );
};

export default DiscoveryCall;

const LeftCtaColumn = ({ data, isEditing, onChange }) => {
  const update = (path, value) => {
    onChange({
      ...data,
      card: {
        ...data.card,
        [path]: {
          ...data.card[path],
          text: value
        }
      }
    });
  };

  return (
    <div className={data.width}>
      <div className={data.card.class}>
        {/* Badge */}
        {isEditing ? (
          <input
            className="form-control mb-3"
            value={data.card.badge.text}
            onChange={(e) =>
              onChange({
                ...data,
                card: {
                  ...data.card,
                  badge: { ...data.card.badge, text: e.target.value }
                }
              })
            }
          />
        ) : (
          <span className={data.card.badge.class}>
            {data.card.badge.text}
          </span>
        )}

        {/* Heading */}
        {isEditing ? (
          <input
            className="form-control mb-2"
            value={data.card.heading.text}
            onChange={(e) =>
              update("heading", e.target.value)
            }
          />
        ) : (
          <h2 className={data.card.heading.class}>
            {data.card.heading.text}
          </h2>
        )}

        {/* Description */}
        {isEditing ? (
          <textarea
            className="form-control"
            rows={3}
            value={data.card.description.text}
            onChange={(e) =>
              update("description", e.target.value)
            }
          />
        ) : (
          <p className={data.card.description.class}>
            {data.card.description.text}
          </p>
        )}
      </div>
    </div>
  );
};

const RightProcessColumn = ({ data, isEditing, onChange }) => {
  const updateStep = (index, key, value) => {
    const updatedSteps = data.card.steps.list.map((s, i) =>
      i === index ? { ...s, [key]: value } : s
    );

    onChange({
      ...data,
      card: {
        ...data.card,
        steps: {
          ...data.card.steps,
          list: updatedSteps
        }
      }
    });
  };

  return (
    <div className={data.width}>
      <div className={data.card.class}>
        {/* Title */}
        {isEditing ? (
          <input
            className="form-control mb-3"
            value={data.card.title.text}
            onChange={(e) =>
              onChange({
                ...data,
                card: {
                  ...data.card,
                  title: { ...data.card.title, text: e.target.value }
                }
              })
            }
          />
        ) : (
          <h5 className={data.card.title.class}>
            {data.card.title.text}
          </h5>
        )}

        {/* Steps */}
        {data.card.steps.list.map((step, idx) => (
          <ProcessStep
            key={idx}
            step={step}
            badge={data.card.steps.badge}
            isEditing={isEditing}
            onChange={(key, val) =>
              updateStep(idx, key, val)
            }
          />
        ))}

        {/* CTA */}
        {isEditing ? (
          <input
            className="form-control mt-3"
            value={data.card.cta.text}
            onChange={(e) =>
              onChange({
                ...data,
                card: {
                  ...data.card,
                  cta: { ...data.card.cta, text: e.target.value }
                }
              })
            }
          />
        ) : (
          <a href={data.card.cta.href} className={data.card.cta.class}>
            {data.card.cta.text}
          </a>
        )}
      </div>
    </div>
  );
};

const ProcessStep = ({ step, badge, isEditing, onChange }) => (
  <div className="mb-3">
    <div className="d-flex align-items-start">
      <span
        className={badge.class}
        style={badge.style}
      >
        {step.step}
      </span>

      <div className="ms-2 w-100">
        {isEditing ? (
          <>
            <input
              className="form-control mb-1"
              value={step.title}
              onChange={(e) => onChange("title", e.target.value)}
            />
            <input
              className="form-control"
              value={step.text}
              onChange={(e) => onChange("text", e.target.value)}
            />
          </>
        ) : (
          <>
            <strong className="text-dark">{step.title}</strong>
            <small className="text-muted d-block">{step.text}</small>
          </>
        )}
      </div>
    </div>
  </div>
);
