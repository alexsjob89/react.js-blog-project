import {useState} from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import About from "./About";
import './App.css';
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";

function App() {
const [posts, setPosts] = useState([
  {
    id: 1,
    title: "My First Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  },
  {
    id: 2,
    title: "My 2nd Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  },
  {
    id: 3,
    title: "My 3rd Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  },
  {
    id: 4,
    title: "My Fourth Post",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"
  }
])
const [search, setSearch] = useState("")
const [searchResult, setSearchResult] = useState([])
const handleDelete = (id) => {

}

  return (
<div className="App">
<Router>
<Header title="React js blog"/>
<Nav search={search} setSearch={setSearch}/>
<Routes>
<Route exact path="/" element={<Home posts={searchResult}/>}/>
<Route path="/post" element={<NewPost/>}/>
<Route path="/post:id" element={<PostPage posts={posts} handleDelete={handleDelete}/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/*" element={<Missing/>}/>
</Routes>
<Footer/>
</Router>
</div>
  );
}

export default App;
