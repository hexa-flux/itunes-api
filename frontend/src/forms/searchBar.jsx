  import React from "react";
  import { Formik, Form, Field, ErrorMessage } from "formik";

  import "./searchBarFormat.css"

  export default function SearchBar({ initialValues, onSubmit, disabled = false }) {
    const defaults = {
      query: "",
      mediaType: "all",
    };

    // Use provided initialValues (if any), otherwise fall back to defaults
    const formInitialValues = {
      ...defaults,
      ...(initialValues || {}),
    };

    return (
      <Formik
        initialValues={formInitialValues}
        enableReinitialize={true} // Update form after reinitializing
        validate={(values) => {
          const errors = {};
          if (!values.query || !values.query.trim()) {
            errors.query = "Search query is required.";
          }
          if (!values.mediaType) {
            errors.mediaType = "Media type is required.";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          // if disabled due to init, bail out early
          if (disabled) {
            setSubmitting(false);
            return;
          }

          setSubmitting(true);

          // Map form fields to backend query params expected by your controller:
          // backend expects `term` and `media`
          const payload = {
            term: values.query,
            media: values.mediaType,
          };

          try {
            if (typeof onSubmit === "function") {
              await onSubmit(payload);
            }
            // optionally clear the form; remove if you prefer keeping the query
            // resetForm();
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => 
        {
          // button disabled when either Formik is submitting OR global disabled (init)
          const btnDisabled = disabled || isSubmitting;

          return(
          <Form className="form-row">
            <div className="field field--query">
              <label htmlFor="query">Search</label>
              <Field id="query" name="query" placeholder="Search..." />
              <div style={{ color: "red" }}>
                <ErrorMessage name="query" component="div" />
              </div>
            </div>

            <div className="field field--media">
              <label htmlFor="mediaType">Media type</label>
              <Field as="select" id="mediaType" name="mediaType">
                <option value="all">All</option>
                <option value="movie">Movies</option>
                <option value="podcast">Podcasts</option>
                <option value="music">Music</option>
                <option value="musicVideo">Music Videos</option>
                <option value="audiobook">Audiobooks</option>
                <option value="shortFilm">Short Films</option>
                <option value="tvShow">TV Shows</option>
                <option value="software">Software</option>
                <option value="ebook">Ebooks</option>
              </Field>
              <div style={{ color: "red" }}>
                <ErrorMessage name="mediaType" component="div" />
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" disabled={btnDisabled}>
                {/* Prioritise isSubmitting for the button label so "Searching..." shows during submission */}
                {isSubmitting ? "Searching..." : disabled ? "Initializing…" : "Search"}
              </button>
            </div>
          </Form>
        )}}
      </Formik>
    );
  }