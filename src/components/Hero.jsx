import React from "react";
import { Route, Routes } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen mt-20"
      style={{
        backgroundImage:
          "url(https://firebasestorage.googleapis.com/v0/b/alumni-f8d5a.appspot.com/o/hero.jpg?alt=media&token=feaef9bb-4ba2-4a26-a354-a544345cb7ab)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        {
          <Routes>
            <Route
              path="/"
              element={
                <h1 className="mb-5 text-5xl font-bold">
                  Selamat Datang di Aplikasi Jejaring Alumni
                </h1>
              }
            />
            <Route
              path="/alumni"
              element={
                <h1 className="mb-5 text-5xl font-bold">Daftar Alumni</h1>
              }
            />
            <Route
              path="/gallery"
              element={<h1 className="mb-5 text-5xl font-bold">Galeri</h1>}
            />
            <Route
              path="/about"
              element={
                <>
                  <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                      <h1 className="mb-5 text-5xl font-bold">Tentang Kami</h1>
                      <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                      </p>
                    </div>
                  </div>
                </>
              }
            />
          </Routes>
        }
      </div>
    </div>
  );
};

export default Hero;
