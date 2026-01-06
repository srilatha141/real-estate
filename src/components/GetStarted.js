import { useState } from "react";

const GetStarted = ({ styles, heading, width, description, features }) => {
    const [isEditing, setEditing] = useState(false);
      const [initialValue, setInitialValue] = useState({
        styles, heading, width, description, features
      });

    return (
    <section
      className={styles.padding}
      style={{
        backgroundColor: styles.backgroundColor,
        color: styles.textColor
      }}
    >
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className={width}>
            <h2
              className={heading.class}
              data-aos={heading.animation}
            >
              {heading.text}
            </h2>

            <p
              className={description.class}
              data-aos={description.animation}
              data-aos-delay={description.delay}
            >
              {description.text}
            </p>

            <FeatureGrid data={features} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted

const FeatureGrid = ({ data }) => (
  <div className={data.grid}>
    {data.list.map((item, idx) => (
      <div
        key={idx}
        className={data.column}
        data-aos={data.animation}
        data-aos-delay={item.delay}
      >
        <div className="text-center">
          <i className={`fas fa-${item.icon} text-primary fs-2 mb-3`}></i>
          <h6 className="text-white">{item.text}</h6>
        </div>
      </div>
    ))}
  </div>
);
