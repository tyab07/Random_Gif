import "./Random.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner";
function Random() {
  const [gif, setGif] = useState("");
  const Api_Key = process.env.REACT_APP_GIPHY_API_KEY;
 const[loader,setLoader] = useState(false)
  async function fetchData() {
    try {
        setLoader(true);
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${Api_Key}`;
      const { data } = await axios.get(url);

      const imageUrl = data.data.images?.downsized_large?.url;
      if (imageUrl) {
        setGif(imageUrl);
      } else {
        console.warn("No GIF found in response", data);
      }
    } catch (error) {
      console.error("Error fetching GIF:", error);
    }
    setLoader(false);
  }

  function generateHandler() {
    fetchData(); 
  }

  useEffect(() => {
    fetchData(); 
  }, []);

  return (
    <div className="random">
      <h3 className="rheading">A Random Gif</h3>
      <div>
       {loader?(<Spinner/>):(gif && <img key={gif} src={gif} alt="Gif image" />) } 
      </div>
      <button className="rgenerate" onClick={generateHandler}>Generate</button>
    </div>
  );
}

export default Random;
