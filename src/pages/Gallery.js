import { useState } from "react";

const GALLERY_DATA = [
  {
    id: 1,
    title: "Luxury Living Room",
    description: "Elegant living space with modern furnishings",
    image: "",
    type: "general",
  },
  {
    id: 2,
    title: "Gourmet Kitchen",
    description: "State-of-the-art kitchen with premium appliances",
    image: "",
    type: "facilities",
  },
  {
    id: 3,
    title: "Master Bedroom Suite",
    description: "Spacious master bedroom with walk-in closet",
    image: "",
    type: "portfolio",
  },
  {
    id: 4,
    title: "Office Building Exterior",
    description: "Modern commercial building in downtown",
    image: "",
    type: "services",
  },
  {
    id: 5,
    title: "Property Management Team",
    description: "Our dedicated property management professionals",
    image: "",
    type: "team",
  },
  {
    id: 6,
    title: "Client Success Event",
    description: "Celebrating another successful property transaction",
    image: "",
    type: "events",
  },
];

const FILTERS = [
  "all",
  "general",
  "facilities",
  "team",
  "events",
  "portfolio",
  "products",
  "services",
];

export default function Gallery() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredGallery = GALLERY_DATA.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());

    const matchesType =
      activeFilter === "all" || item.type === activeFilter;

    return matchesSearch && matchesType;
  });

  return (
    <main className="pt-5 mt-4">
      <div className="gallery-container" style={{ backgroundColor: '#060606', padding: '40px 0px', marginTop: '-2px', color: '#fff' }}>
        <div className="container">

          {/* HEADER */}
          <div className="row mb-4">
            <div className="col-12 text-center">
              <h1 className="mb-3">
                <i className="fas fa-images me-2"></i>Gallery
              </h1>
              <p className="text-muted">
                Explore our collection of images and media
              </p>
            </div>
          </div>

          {/* SEARCH + FILTERS */}
          <div className="gallery-filters mb-4" style={{
            background: '#f8f9fa',
            padding: '20px',
            borderRadius: '8px',
            marginBottom: '30px'
          }}>
            <div className="row align-items-center">
              <div className="col-md-6 mb-3 mb-md-0">
                <div className="d-flex">
                  <input
                    className="form-control search-box me-2"
                    placeholder="Search images..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button className="btn btn-primary">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>

              <div className="col-md-6">
                <div className="filter-buttons" style={{
                  display: 'flex',
                  gap: '10px',
                  flexWrap: 'wrap'
                }}>
                  {FILTERS.map((filter) => (
                    <button
                      key={filter}
                      style={{
                        padding: '8px 16px',
                        border: '1px solid #dee2e6',
                        background: 'white',
                        color: '#495057',
                        borderRadius: '20px',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease'
                      }}
                      className={`filter-btn ${activeFilter === filter ? "active" : ""
                        }`}
                      onClick={() => setActiveFilter(filter)}
                    >
                      {filter.charAt(0).toUpperCase() + filter.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* GALLERY GRID */}
          <div className="gallery-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '20px',
            marginBottom: '30px'
          }}>
            {filteredGallery.map((item) => (
              <div
                style={{
                  background: 'white',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                className="gallery-item" key={item.id}>
                {/* <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-image"
                  onClick={() => setSelectedImage(item)}
                /> */}

                <div className="gallery-content" style={{ padding: '15px' }}>
                  <div className="gallery-title" style={{
                    fontSize: '1.1em',
                    fontWeight: 600,
                    marginBottom: '8px',
                    color: '#333'
                  }}>{item.title}</div>
                  <div className="gallery-description" style={{
                    color: '#666',
                    fontSize: '0.9em',
                    lineHeight: '1.4',
                    marginBottom: '10px'
                  }}>
                    {item.description}
                  </div>
                  <div className="gallery-meta" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.8em',
                    color: '#888'
                  }}>
                    <span className="gallery-type" style={{
                      background: '#e9ecef',
                      color: '#495057',
                      padding: '2px 8px',
                      borderRadius: '12px',
                      fontSize: '0.75em'
                    }}>{item.type}</span>
                  </div>
                </div>
              </div>
            ))}

            {filteredGallery.length === 0 && (
              <p className="text-center text-muted mt-4">
                No images found
              </p>
            )}
          </div>
        </div>
      </div>

      {/* IMAGE MODAL */}
      {
        selectedImage && (
          <div className="modal fade show d-block" tabIndex="-1">
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content bg-dark">
                <div className="modal-header bg-dark">
                  <h5 className="modal-title text-white">
                    {selectedImage.title}
                  </h5>
                  <button
                    className="btn-close"
                    onClick={() => setSelectedImage(null)}
                  />
                </div>

                <div className="modal-body text-center">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="img-fluid"
                    style={{ maxHeight: "70vh" }}
                  />
                  <div className="mt-3 text-muted">
                    {selectedImage.description}
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    className="btn btn-secondary"
                    onClick={() => setSelectedImage(null)}
                  >
                    Close
                  </button>
                  <a
                    href={selectedImage.image}
                    download
                    className="btn btn-primary"
                  >
                    <i className="fas fa-download me-2"></i>Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </main >
  );
}
