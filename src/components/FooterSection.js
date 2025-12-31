// import React from 'react';

// export default function FooterSection({ backgroundColor,
//     textColor,
//     brand,
//     contact,
//     quickLinks,
//     services,
//     newsletter,
//     social,
//     copyright }) {

//   return (
//     <footer
//       className="footer-section cms-section py-5"
//       style={{ backgroundColor, color: textColor }}
//     >
//       <div className="container">
//         <div className="row g-4">
//           <div className="col-lg-4 col-md-6">
//             <img src={brand.logo} alt={brand.alt} className="mb-3" style={{ maxHeight: '60px' }} />
//             <h5 className="mb-3">{brand.name}</h5>
//             <p className="mb-3">{brand.description}</p>
//             <div className="contact-info">
//               <p className="mb-2"><i className="fas fa-map-marker-alt me-2"></i>{contact.address}</p>
//               <p className="mb-2"><i className="fas fa-phone me-2"></i>{contact.phone}</p>
//               <p className="mb-2"><i className="fas fa-envelope me-2"></i>{contact.email}</p>
//             </div>
//           </div>

//           <div className="col-lg-2 col-md-6">
//             <h5 className="mb-3">Quick Links</h5>
//             <ul className="list-unstyled">
//               {quickLinks.map((link, idx) => (
//                 <li key={idx} className="mb-2">
//                   <a href={link.url} className="text-light text-decoration-none">{link.label}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="col-lg-2 col-md-6">
//             <h5 className="mb-3">Services</h5>
//             <ul className="list-unstyled">
//               {services.map((item, idx) => (
//                 <li key={idx} className="mb-2">
//                   <a href={item.url} className="text-light text-decoration-none">{item.label}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="col-lg-4 col-md-6">
//             <h5 className="mb-3">{newsletter.title}</h5>
//             <p className="mb-3">{newsletter.description}</p>
//             <form className="newsletter-form">
//               <div className="input-group">
//                 <input
//                   type="email"
//                   className="form-control"
//                   placeholder={newsletter.placeholder}
//                   required
//                 />
//                 <button className="btn btn-primary" type="submit">
//                   {newsletter.buttonLabel}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>

//         <hr className="my-4" />

//         <div className="row align-items-center">
//           <div className="col-md-6">
//             <p className="mb-0">{copyright}</p>
//           </div>
//           <div className="col-md-6 text-md-end">
//             <div className="social-links">
//               {social.map((s, idx) => (
//                 <a key={idx} href={s.url} className="text-light me-3">
//                   <i className={`fab fa-${s.icon}`}></i>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import { useState } from "react";

export default function FooterSection({ backgroundColor,
  textColor,
  brand,
  contact,
  quickLinks,
  services,
  newsletter,
  social,
  copyright, onChange }) {
  const [isEditing, setEditing] = useState(false);
  const [initialValue, setInitialValue] = useState({
    backgroundColor,
    textColor,
    brand,
    contact,
    quickLinks,
    services,
    newsletter,
    social,
    copyright
  });

  const updateField = (key, value) => {
    setInitialValue(prev => ({ ...prev, [key]: value }));
  };

  const updateNested = (parent, key, value) => {
    setInitialValue(prev => ({
      ...prev,
      [parent]: { ...prev[parent], [key]: value }
    }));
  };

  const updateListItem = (listKey, index, key, value) => {
    const updated = [...initialValue[listKey]];
    updated[index][key] = value;
    setInitialValue(prev => ({ ...prev, [listKey]: updated }));
  };

  return (
    <>
      {!isEditing ?
        <button className='btn btn-primary' onClick={() => setEditing(true)}>Edit</button>
        : <button onClick={() => { onChange(initialValue); setEditing(false) }} className='btn btn-primary'>Save</button>}
      <footer
        className="footer-section cms-section py-5"
        style={{ backgroundColor: initialValue.backgroundColor, color: initialValue.textColor }}
      >
        <div className="container">
          <div className="row g-4">

            {/* BRAND + CONTACT */}
            <div className="col-lg-4 col-md-6">
              {isEditing ? (
                <>
                  <input
                    className="form-control mb-2"
                    value={initialValue.brand.logo}
                    onChange={(e) => updateNested("brand", "logo", e.target.value)}
                    placeholder="Logo URL"
                  />
                  <input
                    className="form-control mb-2"
                    value={initialValue.brand.name}
                    onChange={(e) => updateNested("brand", "name", e.target.value)}
                    placeholder="Brand Name"
                  />
                  <textarea
                    className="form-control mb-3"
                    value={initialValue.brand.description}
                    onChange={(e) =>
                      updateNested("brand", "description", e.target.value)
                    }
                    placeholder="Brand Description"
                  />
                </>
              ) : (
                <>
                  <img
                    src={initialValue.brand.logo}
                    alt={initialValue.brand.alt}
                    className="mb-3"
                    style={{ maxHeight: 60 }}
                  />
                  <h5 className="mb-3">{initialValue.brand.name}</h5>
                  <p className="mb-3">{initialValue.brand.description}</p>
                </>
              )}

              {/* CONTACT */}
              {isEditing ? (
                <>
                  <input
                    className="form-control mb-2"
                    value={initialValue.contact.address}
                    onChange={(e) =>
                      updateNested("contact", "address", e.target.value)
                    }
                    placeholder="Address"
                  />
                  <input
                    className="form-control mb-2"
                    value={initialValue.contact.phone}
                    onChange={(e) =>
                      updateNested("contact", "phone", e.target.value)
                    }
                    placeholder="Phone"
                  />
                  <input
                    className="form-control"
                    value={initialValue.contact.email}
                    onChange={(e) =>
                      updateNested("contact", "email", e.target.value)
                    }
                    placeholder="Email"
                  />
                </>
              ) : (
                <div className="contact-info">
                  <p><i className="fas fa-map-marker-alt me-2"></i>{initialValue.contact.address}</p>
                  <p><i className="fas fa-phone me-2"></i>{initialValue.contact.phone}</p>
                  <p><i className="fas fa-envelope me-2"></i>{initialValue.contact.email}</p>
                </div>
              )}
            </div>

            {/* QUICK LINKS */}
            <div className="col-lg-2 col-md-6">
              <h5 className="mb-3">Quick Links</h5>
              <ul className="list-unstyled">
                {initialValue.quickLinks.map((link, idx) => (
                  <li key={idx} className="mb-2">
                    {isEditing ? (
                      <>
                        <input
                          className="form-control mb-1"
                          value={link.label}
                          onChange={(e) =>
                            updateListItem("quickLinks", idx, "label", e.target.value)
                          }
                          placeholder="Label"
                        />
                        <input
                          className="form-control"
                          value={link.url}
                          onChange={(e) =>
                            updateListItem("quickLinks", idx, "url", e.target.value)
                          }
                          placeholder="URL"
                        />
                      </>
                    ) : (
                      <a href={link.url} className="text-light text-decoration-none">
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* SERVICES */}
            <div className="col-lg-2 col-md-6">
              <h5 className="mb-3">Services</h5>
              <ul className="list-unstyled">
                {initialValue.services.map((item, idx) => (
                  <li key={idx} className="mb-2">
                    {isEditing ? (
                      <>
                        <input
                          className="form-control mb-1"
                          value={item.label}
                          onChange={(e) =>
                            updateListItem("services", idx, "label", e.target.value)
                          }
                          placeholder="Label"
                        />
                        <input
                          className="form-control"
                          value={item.url}
                          onChange={(e) =>
                            updateListItem("services", idx, "url", e.target.value)
                          }
                          placeholder="URL"
                        />
                      </>
                    ) : (
                      <a href={item.url} className="text-light text-decoration-none">
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* NEWSLETTER */}
            <div className="col-lg-4 col-md-6">
              {isEditing ? (
                <>
                  <input
                    className="form-control mb-2"
                    value={initialValue.newsletter.title}
                    onChange={(e) =>
                      updateNested("newsletter", "title", e.target.value)
                    }
                    placeholder="Newsletter Title"
                  />
                  <textarea
                    className="form-control mb-2"
                    value={initialValue.newsletter.description}
                    onChange={(e) =>
                      updateNested("newsletter", "description", e.target.value)
                    }
                    placeholder="Newsletter Description"
                  />
                  <input
                    className="form-control mb-2"
                    value={initialValue.newsletter.placeholder}
                    onChange={(e) =>
                      updateNested("newsletter", "placeholder", e.target.value)
                    }
                    placeholder="Email Placeholder"
                  />
                  <input
                    className="form-control"
                    value={initialValue.newsletter.buttonLabel}
                    onChange={(e) =>
                      updateNested("newsletter", "buttonLabel", e.target.value)
                    }
                    placeholder="Button Label"
                  />
                </>
              ) : (
                <>
                  <h5 className="mb-3">{initialValue.newsletter.title}</h5>
                  <p className="mb-3">{initialValue.newsletter.description}</p>
                  <form className="newsletter-form">
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder={initialValue.newsletter.placeholder}
                      />
                      <button className="btn btn-primary">
                        {initialValue.newsletter.buttonLabel}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>

          <hr className="my-4" />

          {/* BOTTOM */}
          <div className="row align-items-center">
            <div className="col-md-6">
              {isEditing ? (
                <input
                  className="form-control"
                  value={initialValue.copyright}
                  onChange={(e) => updateField("copyright", e.target.value)}
                />
              ) : (
                <p className="mb-0">{initialValue.copyright}</p>
              )}
            </div>

            <div className="col-md-6 text-md-end">
              <div className="social-links">
                {initialValue.social.map((s, idx) => (
                  <span key={idx} className="me-3">
                    {isEditing ? (
                      <>
                        <input
                          className="form-control mb-1"
                          value={s.icon}
                          onChange={(e) =>
                            updateListItem("social", idx, "icon", e.target.value)
                          }
                          placeholder="Icon"
                        />
                        <input
                          className="form-control"
                          value={s.url}
                          onChange={(e) =>
                            updateListItem("social", idx, "url", e.target.value)
                          }
                          placeholder="URL"
                        />
                      </>
                    ) : (
                      <a href={s.url} className="text-light">
                        <i className={`fab fa-${s.icon}`}></i>
                      </a>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
