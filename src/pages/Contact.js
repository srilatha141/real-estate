// import { useState } from "react";

// export default function Contact() {
//     const [content, setContent] = useState({
//         tagline: "FOR COMPANIES WITH RECURRING REVENUE",
//         heading: `Grow on your own terms.\nGet paid by the year,\ncharge by the month`,
//         highlight:
//             "APM Reality - Premium Real Estate transforms recurring revenue into upfront capital for growth without debt or dilution.",
//         formTitle: "Let's get started",
//     });

//     const handleChange = (key, value) => {
//         setContent({ ...content, [key]: value });
//     };

//     return (
//         <main class="pt-5 mt-4">
//             <section class="pipe-contact-section">
//                 <div class="container-fluid h-100">
//                     <div class="row h-100 g-0">
//                         <div class="col-lg-8 content-area d-flex align-items-center">
//                             <div class="content-wrapper">
//                                 <div class="tagline">FOR COMPANIES WITH RECURRING REVENUE</div>

//                                 <h1 class="main-heading">
//                                     Grow on your own terms.
//                                         Get paid by the year,
//                                             charge by the month
//                                         </h1>

//                                         <div class="highlight-box">
//                                             <div class="highlight-arrow"></div>
//                                             <p>APM Reality - Premium Real Estate transforms recurring revenue into upfront capital for growth without debt or dilution.</p>
//                                         </div>
//                                     </div>
//                             </div>

//                             <div class="col-lg-4 form-area">
//                                 <div class="form-container" style={{opacity: 1, transform: 'translateY(0px)', transition: '0.8s'}}>
//                                     <h2 class="form-title">Let's get started</h2>

//                                     <form id="contactForm" class="pipe-contact-form">
//                                         <input type="hidden" name="csrfmiddlewaretoken" value="Do8ezagSJPYjpQs87toL6aXwLsVdQwsI5dwpt4ZQZQ3abOCv7VPalWnszeodzEFb" />

//                                             <div class="row g-3">
//                                                 <div class="col-6">
//                                                     <input type="text" class="form-control pipe-input" name="firstName" placeholder="First name*" required=""/>
//                                                 </div>
//                                                 <div class="col-6">
//                                                     <input type="text" class="form-control pipe-input" name="lastName" placeholder="Last name*" required=""/>
//                                                 </div>
//                                             </div>

//                                             <div class="row g-3">
//                                                 <div class="col-6">
//                                                     <select class="form-select pipe-select" name="country">
//                                                         <option value="">Country*</option>
//                                                         <option value="US">United States</option>
//                                                         <option value="CA">Canada</option>
//                                                         <option value="UK">United Kingdom</option>
//                                                         <option value="AU">Australia</option>
//                                                         <option value="DE">Germany</option>
//                                                         <option value="FR">France</option>
//                                                         <option value="IN">India</option>
//                                                         <option value="JP">Japan</option>
//                                                         <option value="SG">Singapore</option>
//                                                         <option value="NL">Netherlands</option>
//                                                         <option value="other">Other</option>
//                                                     </select>
//                                                 </div>
//                                                 <div class="col-6">
//                                                     <select class="form-select pipe-select" name="industry">
//                                                         <option value="">Industry*</option>
//                                                         <option value="technology">Technology</option>
//                                                         <option value="healthcare">Healthcare</option>
//                                                         <option value="finance">Finance</option>
//                                                         <option value="education">Education</option>
//                                                         <option value="retail">Retail</option>
//                                                         <option value="manufacturing">Manufacturing</option>
//                                                         <option value="consulting">Consulting</option>
//                                                         <option value="real-estate">Real Estate</option>
//                                                         <option value="media">Media &amp; Entertainment</option>
//                                                         <option value="other">Other</option>
//                                                     </select>
//                                                 </div>
//                                             </div>

//                                             <input type="text" class="form-control pipe-input" name="company" placeholder="Company*" required="" />

//                                                 <select class="form-select pipe-select" name="annualRevenue">
//                                                     <option value="">Estimated annual recurring revenue*</option>
//                                                     <option value="under-1m">Under $1M</option>
//                                                     <option value="1m-10m">$1M - $10M</option>
//                                                     <option value="10m-50m">$10M - $50M</option>
//                                                     <option value="50m-100m">$50M - $100M</option>
//                                                     <option value="100m-500m">$100M - $500M</option>
//                                                     <option value="500m-1b">$500M - $1B</option>
//                                                     <option value="over-1b">Over $1B</option>
//                                                 </select>

//                                                 <input type="email" class="form-control pipe-input" name="email" placeholder="Email*" required=""/>

//                                                     <input type="tel" class="form-control pipe-input" name="phone" placeholder="Phone number"/>

//                                                         <button type="submit" class="btn pipe-submit-btn">
//                                                             <span class="btn-text">Get Started</span>
//                                                             <span class="btn-loading d-none">
//                                                                 <span class="spinner-border spinner-border-sm me-2"></span>
//                                                                 Sending...
//                                                             </span>
//                                                         </button>

//                                                         <div class="form-footer">
//                                                             <small>By pressing continue you agree to the APM Reality - Premium Real Estate
//                                                                 <a href="#" class="pipe-link">terms of service</a> and
//                                                                 <a href="#" class="pipe-link">privacy policy</a>
//                                                             </small>
//                                                         </div>
//                                                     </form>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                 </div>
//                             </section>

//                             <div class="modal fade" id="successModal" tabindex="-1" aria-hidden="true">
//                                 <div class="modal-dialog modal-dialog-centered">
//                                     <div class="modal-content pipe-modal">
//                                         <div class="modal-body text-center p-5">
//                                             <div class="success-icon">
//                                                 <i class="fas fa-check"></i>
//                                             </div>
//                                             <h4 class="success-title">Message Sent Successfully!</h4>
//                                             <p class="success-text">Thank you for reaching out. We'll get back to you within 24 hours.</p>
//                                             <button type="button" class="btn pipe-modal-btn" data-bs-dismiss="modal">Close</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </main>
//                         );
// }


import { useEffect, useRef, useState } from "react";

export default function Contact() {
    const formRef = useRef(null);
    const formContainerRef = useRef(null);

    const [loading, setLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [errors, setErrors] = useState([]);

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        country: "",
        industry: "",
        annualRevenue: "",
    });

    /* -------------------- Helpers -------------------- */

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const errs = [];

        if (!form.firstName.trim()) errs.push("First name is required");
        if (!form.lastName.trim()) errs.push("Last name is required");
        if (!form.company.trim()) errs.push("Company is required");
        if (!form.country) errs.push("Country is required");
        if (!form.industry) errs.push("Industry is required");
        if (!form.annualRevenue) errs.push("Annual revenue is required");

        if (!form.email.trim()) {
            errs.push("Email is required");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            errs.push("Invalid email address");
        }

        return errs;
    };

    /* -------------------- Submit -------------------- */

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validateForm();
        setErrors(validationErrors);

        if (validationErrors.length) return;

        setLoading(true);

        try {
            const payload = {
                name: `${form.firstName} ${form.lastName}`,
                email: form.email,
                phone: form.phone,
                inquiry_message: `
Company: ${form.company}
Industry: ${form.industry}
Country: ${form.country}
Annual Revenue: ${form.annualRevenue}
        `,
                lead_source: "Contact Form - Website",
                lead_status: "New",
            };

            const res = await fetch("/crm/lead_add?api=true", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": document.querySelector(
                        '[name="csrfmiddlewaretoken"]'
                    )?.value,
                },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!data.status) throw new Error("Submission failed");

            setShowSuccess(true);
            setForm({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                company: "",
                country: "",
                industry: "",
                annualRevenue: "",
            });
        } catch (err) {
            setErrors(["Something went wrong. Please try again."]);
        } finally {
            setLoading(false);
        }
    };

    /* -------------------- Animation -------------------- */

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = "translateY(0)";
                }
            },
            { threshold: 0.1 }
        );

        if (formContainerRef.current) {
            observer.observe(formContainerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    /* -------------------- Render -------------------- */

    return (
        <main className="pt-5 mt-4" style={{ backgroundColor: '#1a1a1a' }}>
            <section className="pipe-contact-section" style={{ padding: '100px 0px' }}>
                <div className="container-fluid h-100">
                    <div className="row h-100 g-0" style={{ height: '100%' }}>

                        {/* LEFT CONTENT */}
                        <div className="col-lg-8 content-area d-flex align-items-center" style={{ padding: '80px 60px' }}>
                            <div className="content-wrapper">
                                <div className="tagline" style={{ color: '#00d4aa', marginBottom: '30px' }}>
                                    FOR COMPANIES WITH RECURRING REVENUE
                                </div>

                                <h1 className="main-heading" style={{ color: '#ffffff', fontWeight: 300 }}>
                                    Grow on your own terms.<br />
                                    Get paid by the year,<br />
                                    charge by the month
                                </h1>

                                <div className="highlight-box" style={{
                                    background: 'transparent',
                                    border: '2px solid #00d4aa', color: '#ffffff', padding: '1rem', borderRadius: '8px', marginTop: '25px'
                                }}>
                                    <div className="highlight-arrow" />
                                    <p>
                                        APM Reality - Premium Real Estate transforms recurring revenue
                                        into upfront capital for growth without debt or dilution.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* FORM */}
                        <div className="col-lg-4 form-area" style={{ backgroundColor: '#2a2a2a' }}>
                            <div
                                ref={formContainerRef}
                                className="form-container"
                                style={{ opacity: 0, transform: "translateY(30px)", padding: '30px 20px', color: 'white' }}
                            >
                                <h2 className="form-title" style={{ fontWeight: 400 }}>Let's get started</h2>

                                {errors.length > 0 && (
                                    <div className="alert alert-danger">
                                        {errors.map((e, i) => (
                                            <div key={i}>{e}</div>
                                        ))}
                                    </div>
                                )}

                                <form ref={formRef} onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-6">
                                            <input
                                                name="firstName"
                                                className="form-control pipe-input"
                                                style={{ backgroundColor: '#3a3a3a', border: '1px solid #4a4a4a', borderRadius: '6px', color: '#ffffff', fontSize: '16px' }}
                                                placeholder="First name*"
                                                value={form.firstName}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <input
                                                name="lastName"
                                                className="form-control pipe-input"
                                                style={{ backgroundColor: '#3a3a3a', border: '1px solid #4a4a4a', borderRadius: '6px', color: '#ffffff', fontSize: '16px' }}
                                                placeholder="Last name*"
                                                value={form.lastName}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div class="row g-3 mt-1">
                                        <div class="col-6">
                                            <select class="form-select pipe-select"
                                                style={{ backgroundColor: '#3a3a3a', border: '1px solid #4a4a4a', borderRadius: '6px', color: '#ffffff', fontSize: '16px' }}
                                                name="country">
                                                <option value="">Country*</option>
                                                <option value="US">United States</option>
                                                <option value="CA">Canada</option>
                                                <option value="UK">United Kingdom</option>
                                                <option value="AU">Australia</option>
                                                <option value="DE">Germany</option>
                                                <option value="FR">France</option>
                                                <option value="IN">India</option>
                                                <option value="JP">Japan</option>
                                                <option value="SG">Singapore</option>
                                                <option value="NL">Netherlands</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div class="col-6">
                                            <select class="form-select pipe-select"
                                                style={{ backgroundColor: '#3a3a3a', border: '1px solid #4a4a4a', borderRadius: '6px', color: '#ffffff', fontSize: '16px' }}
                                                name="industry">
                                                <option value="">Industry*</option>
                                                <option value="technology">Technology</option>
                                                <option value="healthcare">Healthcare</option>
                                                <option value="finance">Finance</option>
                                                <option value="education">Education</option>
                                                <option value="retail">Retail</option>
                                                <option value="manufacturing">Manufacturing</option>
                                                <option value="consulting">Consulting</option>
                                                <option value="real-estate">Real Estate</option>
                                                <option value="media">Media &amp; Entertainment</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <input
                                        name="company"
                                        className="form-control pipe-input mt-3"
                                        style={{ backgroundColor: '#3a3a3a', border: '1px solid #4a4a4a', borderRadius: '6px', color: '#ffffff', fontSize: '16px' }}
                                        placeholder="Company*"
                                        value={form.company}
                                        onChange={handleChange}
                                    />

                                    <select class="form-select pipe-select mt-3"
                                        style={{ backgroundColor: '#3a3a3a', border: '1px solid #4a4a4a', borderRadius: '6px', color: '#ffffff', fontSize: '16px' }}
                                        name="annualRevenue">
                                        <option value="">Estimated annual recurring revenue*</option>
                                        <option value="under-1m">Under $1M</option>
                                        <option value="1m-10m">$1M - $10M</option>
                                        <option value="10m-50m">$10M - $50M</option>
                                        <option value="50m-100m">$50M - $100M</option>
                                        <option value="100m-500m">$100M - $500M</option>
                                        <option value="500m-1b">$500M - $1B</option>
                                        <option value="over-1b">Over $1B</option>
                                    </select>

                                    <input
                                        name="email"
                                        className="form-control pipe-input mt-3"
                                        style={{ backgroundColor: '#3a3a3a', border: '1px solid #4a4a4a', borderRadius: '6px', color: '#ffffff', fontSize: '16px' }}
                                        placeholder="Email*"
                                        value={form.email}
                                        onChange={handleChange}
                                    />

                                    <input
                                        name="phone"
                                        className="form-control pipe-input mt-3"
                                        style={{ backgroundColor: '#3a3a3a', border: '1px solid #4a4a4a', borderRadius: '6px', color: '#ffffff', fontSize: '16px' }}
                                        placeholder="Phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                    />

                                    <button
                                        className="btn pipe-submit-btn mt-4"
                                        style={{
                                            background: '#00d4aa',
                                            border: 'none',
                                            borderRadius: '6px',
                                            color: '#1a1a1a',
                                            fontSize: '16px',
                                            fontWeight: 600,
                                            padding: '16px 32px',
                                            width: '100%',
                                            margin: '20px 0',
                                            transition: 'all 0.3s ease',
                                            textTransform: 'none'
                                        }}
                                        disabled={loading}
                                    >
                                        {!loading ? "Get Started" : "Sending..."}
                                    </button>
                                    <div class="form-footer" style={{
                                        marginTop: '20px',
                                        color: '#999999',
                                        fontSize: '12px',
                                        lineHeight: '1.4'
                                    }}>
                                        <small>By pressing continue you agree to the APM Reality - Premium Real Estate
                                            <a href="#" style={{
                                                color: '#00d4aa',
                                                textDecoration: 'none'
                                            }} class="pipe-link"> terms of service</a>  and
                                            <a href="#"
                                                style={{
                                                    color: '#00d4aa',
                                                    textDecoration: 'none'
                                                }}
                                                class="pipe-link"> privacy policy</a>
                                        </small>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* SUCCESS MODAL */}
            {
                showSuccess && (
                    <div className="modal fade show d-block" tabIndex="-1">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content pipe-modal">
                                <div className="modal-body text-center p-5">
                                    <div className="success-icon">
                                        <i className="fas fa-check" />
                                    </div>
                                    <h4 className="success-title">
                                        Message Sent Successfully!
                                    </h4>
                                    <p className="success-text">
                                        We'll get back to you within 24 hours.
                                    </p>
                                    <button
                                        className="btn pipe-modal-btn"
                                        onClick={() => setShowSuccess(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </main >
    );
}
