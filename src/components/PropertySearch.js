const PropertySearch = ({ styles, header, form }) => {
  return (
    <section className={styles.sectionClass}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div
              className={styles.cardClass}
              data-aos={styles.animation}
            >
              <h3 className={header.class}>
                {header.title}
              </h3>

              <DynamicSearchForm form={form} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertySearch;

const DynamicSearchForm = ({ form }) => (
  <form method={form.method} action={form.action}>
    <div className={form.basicFilters.grid}>
      {form.basicFilters.fields.map((field, idx) => (
        <FormField key={idx} field={field} />
      ))}

      <div className={form.basicFilters.submit.column}>
        <button type="submit" className={form.basicFilters.submit.class}>
          <i className={`fas fa-${form.basicFilters.submit.icon}`}></i>
        </button>
      </div>
    </div>

    {/* Toggle */}
    <div className="row mt-3">
      <div className="col-12 text-center">
        <button
          type="button"
          className="btn btn-link"
          data-bs-toggle="collapse"
          data-bs-target={`#${form.advancedFilters.id}`}
        >
          <i className="fas fa-filter me-1"></i>
          {form.advancedFilters.toggleText}
        </button>
      </div>
    </div>

    {/* Advanced Filters */}
    <AdvancedFilters data={form.advancedFilters} />
  </form>
);

const FormField = ({ field }) => (
  <div className={field.column}>
    <label className="form-label">
      <i className={`fas fa-${field.icon} me-1 text-primary`}></i>
      {field.label}
    </label>

    {field.type === "select" ? (
      <select name={field.name} className="form-select">
        {field.options.map((opt, idx) => (
          <option key={idx} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    ) : (
      <input
        type={field.type}
        name={field.name}
        className="form-control"
        placeholder={field.placeholder}
      />
    )}
  </div>
);

const AdvancedFilters = ({ data }) => (
  <div className="collapse" id={data.id}>
    <hr className="my-4" />

    <div className="row g-3 align-items-end">
      {data.fields.map((field, idx) => (
        <FormField key={idx} field={field} />
      ))}
    </div>

    <div className="row mt-3">
      <div className="col-12 text-center">
        <button type="submit" className={data.actions.apply.class}>
          <i className={`fas fa-${data.actions.apply.icon} me-1`}></i>
          {data.actions.apply.text}
        </button>

        <a href={data.actions.clear.href} className={data.actions.clear.class}>
          <i className={`fas fa-${data.actions.clear.icon} me-1`}></i>
          {data.actions.clear.text}
        </a>
      </div>
    </div>
  </div>
);
