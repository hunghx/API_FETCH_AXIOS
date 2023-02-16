import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [url, setUrl] = useState("posts");
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    // fetch(`https://jsonplaceholder.typicode.com/${url}`)
    //   .then((res) => res.json())
    //   .then((data) => setPhotos(data))
    //   .catch((err) => console.log(err));
    axios
      .get(`https://jsonplaceholder.typicode.com/${url}`)
      .then((respone) => setPhotos(respone.data));
  }, [url]);
  return (
    <div className="App">
      <div>
        <button onClick={() => setUrl("posts")}>Posts</button>
        <button onClick={() => setUrl("comments")}>Comments</button>
        <button onClick={() => setUrl("albums")}>Albums</button>
        <button onClick={() => setUrl("todos")}>Todos</button>
      </div>
      <table border={1}>
        <tbody>
          <tr>
            <td>ID</td>
            <td>TITLE</td>
          </tr>
          {photos.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title || item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
