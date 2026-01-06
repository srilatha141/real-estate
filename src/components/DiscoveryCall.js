import { useState } from "react";

const DiscoveryCall = ({ styles, layout }) => {
    const [isEditing, setEditing] = useState(false);
    const [initialValue, setInitialValue] = useState({
        styles, layout
    });
    const bg = styles.background;

    return (
        <section
            className={`${styles.padding} ${styles.position}`}
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
                <div className="row">
                    <LeftCtaColumn data={layout.left} />
                    <RightProcessColumn data={layout.right} />
                </div>
            </div>
        </section>
    );
};

export default DiscoveryCall;

const LeftCtaColumn = ({ data }) => (
  <div className={data.width}>
    <div className={data.card.class}>
      <div className="mb-3">
        <span className={data.card.badge.class}>
          {data.card.badge.text}
        </span>
      </div>

      <h2 className={data.card.heading.class}>
        {data.card.heading.text}
      </h2>

      <p className={data.card.description.class}>
        {data.card.description.text}
      </p>
    </div>
  </div>
);

const RightProcessColumn = ({ data }) => (
  <div className={data.width}>
    <div className={data.card.class}>
      <h5 className={data.card.title.class}>
        {data.card.title.text}
      </h5>

      {data.card.steps.list.map((step, idx) => (
        <ProcessStep
          key={idx}
          step={step}
          badge={data.card.steps.badge}
        />
      ))}

      <a
        href={data.card.cta.href}
        className={data.card.cta.class}
      >
        {data.card.cta.text}
      </a>
    </div>
  </div>
);

const ProcessStep = ({ step, badge }) => (
  <div className="mb-3">
    <div className="d-flex align-items-start">
      <span
        className={badge.class}
        style={{
          width: badge.style.width,
          height: badge.style.height,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {step.step}
      </span>

      <div>
        <strong className="text-dark">{step.title}</strong>
        <small className="text-muted d-block">{step.text}</small>
      </div>
    </div>
  </div>
);

