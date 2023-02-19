import React, { useState, useEffect } from "react";
import Likes from "./Likes";

function App() {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    fetch(
      "https://jsonplaceholder.typicode.com/posts?_page=$%7Bpage%7D&_limit=20"
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);
  console.log(data);

  return (
    <div className="App">
      {data.map((user) => (<>
        <div className="card" key={user.id}>
          <p className="p1">User Id : {user.id}</p>
          <p className="p2">Title : {user.title}</p>
         <Likes/>
          
        </div>
      </>
      ))}
      {/* <Post/> */}
    </div>
  );
}

export default App;
