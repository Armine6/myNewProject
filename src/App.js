import { useState } from 'react';
import './App.css';
import PostList from './contants/PostList';
import MyButton from './contants/UI/button/MyButton';
import MyInput from './contants/UI/input/MyInput';

function App() {
  const [data, setData] = useState([
    { id: 1, title: "JavaScript", descript: "Lorem de lorin dugh" },
    { id: 2, title: "JavaScript1", descript: "Lorem de dug lorin dugh" },
    { id: 3, title: "JavaScript2", descript: "Lorem de dugh" }
  ])
  const [value, setValue] = useState(
    { id: data.length + 1, title: '', descript: '' }
  )
   const dataChange = (e) => {
    e.preventDefault()
    setData([...data, value])
    setValue({ ...value, title: '', descript: '' })
  }
  const deleteItem=(id)=>{
   setData(data.filter(item => item.id !== id))
  }
  return (
    <div className="App">
      <form className='createPosts'>

        <MyInput type="text" placeholder='Enter Title' value={value.title} onChange={e => setValue({ ...value, title: e.target.value })} />
        <MyInput type="text" placeholder='Enter Description' value={value.descript} onChange={e => setValue({ ...value, descript: e.target.value })} />
        <MyButton onClick={dataChange}>Create post</MyButton>
      </form>
      <PostList title="My project's Posts" posts={data} deleteItem = {deleteItem}/>

    </div>
  );
}

export default App;
