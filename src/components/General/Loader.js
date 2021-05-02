import React from "react";

export default function Loader({ page }) {
  return (
    <>
      {page === "thread" ? (
        <div className="white-backdrop"></div>
      ) : (
        <>
          <div className="backdrop"></div>
          <div class="container">
            <div class="loader">
              <div class="ball"></div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
