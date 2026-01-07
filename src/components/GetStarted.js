// import { useState } from "react";

// const GetStarted = ({ styles, heading, width, description, features }) => {
//     const [isEditing, setEditing] = useState(false);
//       const [initialValue, setInitialValue] = useState({
//         styles, heading, width, description, features
//       });

//     return (
//     <section
//       className={styles.padding}
//       style={{
//         backgroundColor: styles.backgroundColor,
//         color: styles.textColor
//       }}
//     >
//       <div className="container">
//         <div className="row justify-content-center text-center">
//           <div className={width}>
//             <h2
//               className={heading.class}
//               data-aos={heading.animation}
//             >
//               {heading.text}
//             </h2>

//             <p
//               className={description.class}
//               data-aos={description.animation}
//               data-aos-delay={description.delay}
//             >
//               {description.text}
//             </p>

//             <FeatureGrid data={features} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GetStarted

// const FeatureGrid = ({ data }) => (
//   <div className={data.grid}>
//     {data.list.map((item, idx) => (
//       <div
//         key={idx}
//         className={data.column}
//         data-aos={data.animation}
//         data-aos-delay={item.delay}
//       >
//         <div className="text-center">
//           <i className={`fas fa-${item.icon} text-primary fs-2 mb-3`}></i>
//           <h6 className="text-white">{item.text}</h6>
//         </div>
//       </div>
//     ))}
//   </div>
// );

import { useState } from "react";

const GetStarted = ({
  styles,
  heading,
  width,
  description,
  features,
  onChange
}) => {
  const [isEditing, setEditing] = useState(false);

  const [draft, setDraft] = useState({
    styles,
    heading,
    description,
    features
  });

  return (
    <section
      className={`${draft.styles.padding} position-relative`}
      style={{
        backgroundColor: draft.styles.backgroundColor,
        color: draft.styles.textColor
      }}
    >
      {/* Edit / Save */}
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
            onClick={() => { onChange(draft); setEditing(false) }}
            title="Save"
          />}
      </div>

      <div className="container">
        <div className="row justify-content-center text-center">
          <div className={width}>
            {/* Heading */}
            {isEditing ? (
              <input
                className="form-control mb-3"
                value={draft.heading.text}
                onChange={(e) =>
                  setDraft({
                    ...draft,
                    heading: { ...draft.heading, text: e.target.value }
                  })
                }
              />
            ) : (
              <h2
                className={heading.class}
                data-aos={heading.animation}
              >
                {draft.heading.text}
              </h2>
            )}

            {/* Description */}
            {isEditing ? (
              <textarea
                className="form-control mb-4"
                rows={3}
                value={draft.description.text}
                onChange={(e) =>
                  setDraft({
                    ...draft,
                    description: {
                      ...draft.description,
                      text: e.target.value
                    }
                  })
                }
              />
            ) : (
              <p
                className={description.class}
                data-aos={description.animation}
                data-aos-delay={description.delay}
              >
                {draft.description.text}
              </p>
            )}

            {/* Features */}
            <FeatureGrid
              data={draft.features}
              isEditing={isEditing}
              onChange={(features) =>
                setDraft({ ...draft, features })
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;

const FeatureGrid = ({ data, isEditing, onChange }) => {
  const updateItem = (index, value) => {
    const updated = data.list.map((item, i) =>
      i === index ? { ...item, text: value } : item
    );

    onChange({ ...data, list: updated });
  };

  return (
    <div className={data.grid}>
      {data.list.map((item, idx) => (
        <div
          key={idx}
          className={data.column}
          data-aos={data.animation}
          data-aos-delay={item.delay}
        >
          <div className="text-center">
            <i className={`fas fa-${item.icon} text-primary fs-2 mb-3`} />

            {isEditing ? (
              <input
                className="form-control text-center"
                value={item.text}
                onChange={(e) =>
                  updateItem(idx, e.target.value)
                }
              />
            ) : (
              <h6 className="text-white">{item.text}</h6>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

