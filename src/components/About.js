import { useState } from "react";

export default function About({ styles, layout, onChange }) {
    const [isEditing, setEditing] = useState(false);
    const [editableLayout, setEditableLayout] = useState(layout);
    const [editableStyles, setEditableStyles] = useState(styles);

    const updateText = (colIdx, field, value, pIdx = null) => {
        const updated = { ...editableLayout };
        if (pIdx !== null) {
            updated.columns[colIdx].paragraphs[pIdx] = value;
        } else {
            updated.columns[colIdx].heading[field] = value;
        }
        setEditableLayout(updated);
    };

    return (
        <section
            className={editableStyles.padding}
            style={{
                backgroundColor: editableStyles.backgroundColor,
                color: editableStyles.textColor
            }}
        >
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
                        onClick={() => { onChange(editableStyles); onChange(editableLayout); setEditing(false) }}
                        title="Save"
                    />}
            </div>
            

            <div className="container">
                {isEditing &&
                <input
                    type="text"
                    placeholder="Enter background color"
                    value={editableStyles.backgroundColor}
                    onChange={(e) => {
                        setEditableStyles(prev => ({
                            ...prev,
                            backgroundColor: e.target.value
                        }));
                    }}
                    style={{ width: "40%", maginBottom: "20px" }}
                />}
                <div className={`row ${editableLayout.row}`}>
                    {editableLayout.columns.map((col, colIdx) => {
                        if (col.type === "content") {
                            return (
                                <div
                                    key={colIdx}
                                    className={`${col.width} ${col.padding} mb-4 mb-lg-0`}
                                >
                                    {/* Title */}
                                    {isEditing ? (
                                        <input
                                            className="form-control mb-2"
                                            value={col.heading.title}
                                            onChange={(e) =>
                                                updateText(colIdx, "title", e.target.value)
                                            }
                                        />
                                    ) : (
                                        <h2 className={col.heading.titleClass}>
                                            {col.heading.title}
                                        </h2>
                                    )}

                                    {/* Subtitle */}
                                    {isEditing ? (
                                        <input
                                            className="form-control mb-3"
                                            value={col.heading.subtitle}
                                            onChange={(e) =>
                                                updateText(colIdx, "subtitle", e.target.value)
                                            }
                                        />
                                    ) : (
                                        <h3 className={col.heading.subtitleClass}>
                                            {col.heading.subtitle}
                                        </h3>
                                    )}

                                    {/* Paragraphs */}
                                    <div className="fs-5 lh-relaxed">
                                        {col.paragraphs.map((text, pIdx) =>
                                            isEditing ? (
                                                <textarea
                                                    key={pIdx}
                                                    className="form-control mb-2"
                                                    value={text}
                                                    rows={2}
                                                    onChange={(e) =>
                                                        updateText(colIdx, null, e.target.value, pIdx)
                                                    }
                                                />
                                            ) : (
                                                <p key={pIdx}>{text}</p>
                                            )
                                        )}
                                    </div>
                                </div>
                            );
                        }

                        if (col.type === "carousel") {
                            return (
                                <div key={colIdx} className={`${col.width} ps-lg-5`}>
                                    <div
                                        id={col.carouselId}
                                        className="carousel slide rounded-3 overflow-hidden shadow-lg"
                                        data-bs-ride="carousel"
                                    >
                                        <div className="carousel-inner">
                                            {col.images.map((img, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`carousel-item ${idx === 0 ? "active" : ""}`}
                                                >
                                                    <img
                                                        src={img.src}
                                                        alt={img.alt}
                                                        className="d-block w-100"
                                                        style={{
                                                            height: col.height,
                                                            objectFit: "cover"
                                                        }}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        </section>
    );
}
