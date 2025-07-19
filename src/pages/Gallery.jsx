function Gallery() {
  const images = [
    "/public/IMG_5315.PNG",
    "/public/IMG_5576.PNG",
    "/public/IMG_5162.PNG",
    "/public/IMG_4738.PNG",
  ];

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Our Work</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index}`}
            style={{ width: "250px", height: "250px", objectFit: "cover", borderRadius: "8px" }}
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
