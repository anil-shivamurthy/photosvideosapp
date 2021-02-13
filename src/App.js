import React, { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/banner";
import Photocontent from "./components/photocontent";
import Navbar from "./components/navbar";
import axios from "axios";
import { createClient } from "pexels";

function App() {
  const [photos, setPhotos] = useState();

  useEffect(() => {
    const client = createClient(
      "563492ad6f91700001000001ee1c1fc96f2645368d9b225576427657"
    );
    // client.photos.curated({ per_page: 1 }).then(photos => {...});
    const url = "https://api.pexels.com/v1/curated";
    const access_token =
      "563492ad6f917000010000014060d806c66c47b88b9b4d7f8c487692";
    axios
      .get(url, {
        headers: {
          Authorization: `${access_token}`,
        },
      })
      .then((data) => {
        console.log(data);
        setPhotos(data.data.photos);
      });
  }, []);

  return (
    <div className="App">
      <Banner photos={photos} />
      <Navbar photos={photos} />
    </div>
  );
}

export default App;
