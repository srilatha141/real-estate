// export default function PremiumServices ({ styles, header, items }) {
//   return (
//     <section
//       className={`${styles.padding} ${styles.backgroundClass}`}
//     >
//       <div className="container">
//         {/* Header */}
//         <div className="row justify-content-center text-center mb-5">
//           <div className={header.width}>
//             <h2
//               className={header.title.class}
//               data-aos={header.animation}
//             >
//               {header.title.text}
//             </h2>

//             <h3
//               className={header.subtitle.class}
//               data-aos={header.animation}
//               data-aos-delay={header.subtitle.delay}
//             >
//               {header.subtitle.text}
//             </h3>

//             <p
//               className={header.description.class}
//               data-aos={header.animation}
//               data-aos-delay={header.description.delay}
//             >
//               {header.description.text}
//             </p>
//           </div>
//         </div>

//         {/* Services List */}
//         <div className={items.grid}>
//           {items.list.map((item, idx) => (
//             <ServiceItem
//               key={idx}
//               item={item}
//               config={items}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };


// const ServiceItem = ({ item, config }) => (
//   <div
//     className={config.column}
//     data-aos={config.animation}
//     data-aos-delay={item.delay}
//   >
//     <div className="d-flex align-items-start">
//       <div className="me-3 mt-1">
//         <i className={`fas fa-${config.icon.name} ${config.icon.class}`}></i>
//       </div>

//       <div>
//         <h5 className="fw-bold mb-2 text-dark">{item.title}</h5>
//         <p className="text-muted mb-0">{item.description}</p>
//       </div>
//     </div>
//   </div>
// );

import { useState } from "react";

export default function PremiumServices({
  styles,
  header,
  items,
  onChange
}) {
  const [isEditing, setEditing] = useState(false);

  const [editableHeader, setEditableHeader] = useState(header);
  const [editableItems, setEditableItems] = useState(items);
  const [editableStyles, setEditableStyles] = useState(styles);

  /* ---------------- Header Updates ---------------- */
  const updateHeader = (field, value) => {
    setEditableHeader((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        text: value
      }
    }));
  };

  /* ---------------- Service Item Updates ---------------- */
  const updateItem = (index, field, value) => {
    const updated = [...editableItems.list];
    updated[index] = { ...updated[index], [field]: value };

    setEditableItems((prev) => ({
      ...prev,
      list: updated
    }));
  };

  /* ---------------- Save ---------------- */
  // const handleSave = () => {
  //   setEditing(false);
  //   onSave?.({
  //     header: editableHeader,
  //     items: editableItems
  //   });
  // };

  return (
    <section className={`${editableStyles.padding} ${editableStyles.backgroundClass}`}>
      {/* Edit / Save Button */}
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
            onClick={() => {
              onChange({
                header: editableHeader,
                items: editableItems
              });
              setEditing(false)
            }}
            title="Save"
          />}
      </div>

      <div className="container">
        {isEditing &&
          <input
            type="text"
            placeholder="Enter background color"
            value={editableStyles.backgroundClass}
            onChange={(e) => {
              setEditableStyles(prev => ({
                ...prev,
                backgroundClass: e.target.value
              }));
            }}
            style={{ width: "40%", maginBottom: "20px" }}
          />}
        {/* Header */}
        <div className="row justify-content-center text-center mb-5">
          <div className={editableHeader.width}>
            {/* Title */}
            {isEditing ? (
              <input
                className="form-control mb-2 text-center"
                value={editableHeader.title.text}
                onChange={(e) =>
                  updateHeader("title", e.target.value)
                }
              />
            ) : (
              <h2
                className={editableHeader.title.class}
                data-aos={editableHeader.animation}
              >
                {editableHeader.title.text}
              </h2>
            )}

            {/* Subtitle */}
            {isEditing ? (
              <input
                className="form-control mb-3 text-center"
                value={editableHeader.subtitle.text}
                onChange={(e) =>
                  updateHeader("subtitle", e.target.value)
                }
              />
            ) : (
              <h3
                className={editableHeader.subtitle.class}
                data-aos={editableHeader.animation}
                data-aos-delay={editableHeader.subtitle.delay}
              >
                {editableHeader.subtitle.text}
              </h3>
            )}

            {/* Description */}
            {isEditing ? (
              <textarea
                className="form-control text-center"
                rows={2}
                value={editableHeader.description.text}
                onChange={(e) =>
                  updateHeader("description", e.target.value)
                }
              />
            ) : (
              <p
                className={editableHeader.description.class}
                data-aos={editableHeader.animation}
                data-aos-delay={editableHeader.description.delay}
              >
                {editableHeader.description.text}
              </p>
            )}
          </div>
        </div>

        {/* Services */}
        <div className={editableItems.grid}>
          {editableItems.list.map((item, idx) => (
            <EditableServiceItem
              key={idx}
              item={item}
              index={idx}
              config={editableItems}
              isEditing={isEditing}
              onChange={updateItem}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= Service Item ================= */

const EditableServiceItem = ({
  item,
  index,
  config,
  isEditing,
  onChange
}) => (
  <div
    className={config.column}
    data-aos={config.animation}
    data-aos-delay={item.delay}
  >
    <div className="d-flex align-items-start">
      <div className="me-3 mt-1">
        <i
          className={`fas fa-${config.icon.name} ${config.icon.class}`}
        ></i>
      </div>

      <div className="w-100">
        {/* Title */}
        {isEditing ? (
          <input
            className="form-control mb-2"
            value={item.title}
            onChange={(e) =>
              onChange(index, "title", e.target.value)
            }
          />
        ) : (
          <h5 className="fw-bold mb-2 text-dark">{item.title}</h5>
        )}

        {/* Description */}
        {isEditing ? (
          <textarea
            className="form-control"
            rows={2}
            value={item.description}
            onChange={(e) =>
              onChange(index, "description", e.target.value)
            }
          />
        ) : (
          <p className="text-muted mb-0">{item.description}</p>
        )}
      </div>
    </div>
  </div>
);
