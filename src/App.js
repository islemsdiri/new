import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import List from './Component/List'
import NewCard from './Component/NewCard';
/*
import img1 from "./mulan.jpg"
import img2 from "./pocahontas.jpg"
import img3 from "./snowFiction.jpg"
import img4 from "./tarazan.jpg"
import img5 from "./fantazia.jpg"
import img6 from "./enchanted.jpg"
*/
function App() {

  const [Movies,setMovies]=useState[
    
    {index:1,Image:"img1",Title:"Mulan",Text:" Action/Aventure",posterURL:"https://www.google.com", rating:""},
    {index:2,Image:"img2",Title:"Pocahontas",Text:"Action/Aventure",posterURL:"https://www.google.com/", rating:""},
    {index:3,Image:"img3",Title:"Snow Fiction",Text:"Action/Aventure",posterURL:"https://www.google.com/", rating:""},
    {index:4,Image:"img4",Title:"Tarazan",Text:"Action/Aventure",posterURL:"https://www.google.com/", rating:""},
    {index:5,Image:"img5",Title:"Fantasia",Text:"Action/Aventure",posterURL:"https://www.google.com/", rating:""},
    {index:6,Image:"img6",Title:"Enchanted",Text:"Action/Aventure",posterURL:"https://www.google.com/", rating:""}

  ]
  return (
    <div className="App">
      <NewCard Movies={Movies} />
      < List  Movies={Movies.Image,Movies.Title,Movies.Text,Movies.posterURL,Movies.rating}/>
    </div>
  );
}

export default App;
