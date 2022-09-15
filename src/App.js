import { useState } from 'react';
import './App.css';
import FormItem from './contants/FormItem';
import PostList from './contants/PostList';
import SortByInform from './contants/UI/SortByInform';


function App() {
  const [data, setData] = useState([
    { id: 1, title: "JavaScript", descript: "Lorem de lorin dugh" },
    { id: 2, title: "JavaScript1", descript: "Lorem de dug lorin dugh" },
    { id: 3, title: "JavaScript2", descript: "Lorem de dugh" }
  ])
 
   const dataChange = (e,newPost,clearPost) => {
    e.preventDefault()
    setData([...data, newPost])
    clearPost()
  }
  const deleteItem=(id)=>{
   setData(data.filter(item => item.id !== id))
  }
  const setValue = (val) => {

  }
  return (
    <div className="App">
     <FormItem dataChange={dataChange} setValue={setValue}/>
     <SortByInform title="Sort By" options={[
      {title: 'Title', value:"title"},
      {title: 'Desc', value:"descript"}
     ]}/>
      {data.length ? <PostList title="My project's Posts"  posts={data} deleteItem={deleteItem}/>  :  <h2> My project don't has post</h2>}
      

    </div>
  );
}

export default App;
