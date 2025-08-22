import "./Srandom.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Srandom() {
  const [gif, setGif] = useState("");
  const[tag,setTag]=useState('dog');
  const Api_Key = process.env.REACT_APP_GIPHY_API_KEY;

  async function fetchData() {
    try {
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${Api_Key}&tag=${tag}`;
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
  }

  function generateHandler() {
    fetchData(); 
  }
  function tagHandler(event)
  {
    setTag(event.target.value);
    console.log(tag);
  }

  useEffect(() => {
    fetchData(); 
  }, []);

  return (
    <div className="Srandom">
      <h3 className='Sheading'>A Random Gif</h3>
      <div>
        {gif && <img key={gif} src={gif} alt="Gif image" />}
      </div>
      <div className="searchBar">
         <label  className ="search" htmlFor="text">Search</label>
         <input className="text"  id="text" type="text"  value ={tag} onChange={tagHandler}></input>
      </div>
     
      <button className="Sgenerate" onClick={generateHandler}>Generate</button>
    </div>
  );
}

export default Srandom;
