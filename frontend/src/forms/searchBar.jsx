import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function SearchBar({ onSubmit }) {
  const defaults = {
    query: "",
    mediaType: "all",
  };

  return (
    <Formik
      initialValues={defaults}
      validate={(values) => {
        const errors = {};
        if (!values.query || !values.query.trim()) {
          errors.query = "Search query is required.";
        }
        if (!values.mediaType) {
          errors.mediaType = "Media type is required.";
        }
        return errors; // <-- important: return the errors object
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);

        // Map form fields to backend query params expected by your controller:
        // backend expects `term` and `media`
        const payload = {
          term: values.query,
          media: values.mediaType,
        };

        try {
          if (typeof onSubmit === "function") {
            onSubmit(payload);
          }
          // optionally clear the form; remove if you prefer keeping the query
          // resetForm();
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="field">
            <label htmlFor="query">Search</label>
            <Field id="query" name="query" placeholder="Search..." />
            <div style={{ color: "red" }}>
              <ErrorMessage name="query" component="div" />
            </div>
          </div>

          <div className="field">
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

          <div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Searching..." : "Search"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}