import React from "react";

function Gallery() {
  return (
    <div className="gallery-section">
      <h1>Image Gallery</h1>

      <div className="gallery">
        <img src="https://picsum.photos/300?1" alt="gallery item 1" />
        <img src="https://picsum.photos/300?2" alt="gallery item 2" />
        <img src="https://picsum.photos/300?3" alt="gallery item 3" />
        <img src="https://picsum.photos/300?4" alt="gallery item 4" />
        <img src="https://picsum.photos/300?5" alt="gallery item 5" />
        <img src="https://picsum.photos/300?6" alt="gallery item 6" />
        <img src="https://picsum.photos/300?7" alt="gallery item 7" />
        <img src="https://picsum.photos/300?8" alt="gallery item 8" />
      </div>
    </div>
  );
}

export default Gallery;
