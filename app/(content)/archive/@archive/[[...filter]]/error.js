"use client";
export default function ErrorFilter({ error }) {
  return (
    <div id="error">
      <h2>An Error occured!</h2>
      <p>{error.message}.</p>
    </div>
  );
}
