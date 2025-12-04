import { useState } from "react";

function Dog() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadDog = () => {
    setLoading(true);
    setError(null);
    setImage(null);

    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Server returned an error");
        }
        return res.json();
      })
      .then((data) => {
        setImage(data.message);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <div>
      <button onClick={loadDog}>Load Dog</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {image && <img src={image} alt="Random Dog" width="300" />}
    </div>
  );
}

export default Dog;
