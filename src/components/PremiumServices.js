export default function PremiumServices ({ styles, header, items }) {
  return (
    <section
      className={`${styles.padding} ${styles.backgroundClass}`}
    >
      <div className="container">
        {/* Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className={header.width}>
            <h2
              className={header.title.class}
              data-aos={header.animation}
            >
              {header.title.text}
            </h2>

            <h3
              className={header.subtitle.class}
              data-aos={header.animation}
              data-aos-delay={header.subtitle.delay}
            >
              {header.subtitle.text}
            </h3>

            <p
              className={header.description.class}
              data-aos={header.animation}
              data-aos-delay={header.description.delay}
            >
              {header.description.text}
            </p>
          </div>
        </div>

        {/* Services List */}
        <div className={items.grid}>
          {items.list.map((item, idx) => (
            <ServiceItem
              key={idx}
              item={item}
              config={items}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


const ServiceItem = ({ item, config }) => (
  <div
    className={config.column}
    data-aos={config.animation}
    data-aos-delay={item.delay}
  >
    <div className="d-flex align-items-start">
      <div className="me-3 mt-1">
        <i className={`fas fa-${config.icon.name} ${config.icon.class}`}></i>
      </div>

      <div>
        <h5 className="fw-bold mb-2 text-dark">{item.title}</h5>
        <p className="text-muted mb-0">{item.description}</p>
      </div>
    </div>
  </div>
);
