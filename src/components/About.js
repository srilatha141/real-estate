export default function About({ styles, layout  }) {
    return (
        <section
            className={styles.padding}
            style={{
                backgroundColor: styles.backgroundColor,
                color: styles.textColor
            }}
        >
            <div className="container">
                <div className={`row ${layout.row}`}>
                    {layout.columns.map((col, idx) => {
                        if (col.type === "content") {
                            return (
                                <div
                                    className={`${col.width} ${col.padding} mb-4 mb-lg-0`}
                                    data-aos={col.animation}
                                >
                                    <h2 className={col.heading.titleClass}>{col.heading.title}</h2>
                                    <h3 className={col.heading.subtitleClass}>{col.heading.subtitle}</h3>

                                    <div className="text-light fs-5 lh-relaxed">
                                        {col.paragraphs.map((text, idx) => (
                                            <p key={idx}>{text}</p>
                                        ))}
                                    </div>
                                </div>
                            )
                        }
                        if (col.type === "carousel") {
                            return (
                                <div
                                    className={`${col.width} ps-lg-5`}
                                    data-aos={col.animation}
                                >
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

                                        {/* Controls */}
                                        <button className="carousel-control-prev" type="button" data-bs-target={`#${col.carouselId}`} data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" />
                                        </button>

                                        <button className="carousel-control-next" type="button" data-bs-target={`#${col.carouselId}`} data-bs-slide="next">
                                            <span className="carousel-control-next-icon" />
                                        </button>

                                        {/* Indicators */}
                                        <div className="carousel-indicators">
                                            {col.images.map((_, idx) => (
                                                <button
                                                    key={idx}
                                                    type="button"
                                                    data-bs-target={`#${col.carouselId}`}
                                                    data-bs-slide-to={idx}
                                                    className={idx === 0 ? "active" : ""}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        return null;
                    })}
                </div>
            </div>
        </section>
    );
};
