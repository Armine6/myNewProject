import { useState } from 'react';
import './App.css';
import { PostList } from './contants/PostList';
<<<<<<< HEAD
import MyButton from './contants/UI/MyButton';
=======
import MyButton from './contants/UI.jsx/MyButton';
>>>>>>> 965b5ce5f3dda7c4c395a2d2d14fa1ab8f96ba1e

function App() {
  const [data, setData] = useState([
    { id: 1, title: "JavaScript", descript: "Lorem de lorin dugh" },
    { id: 2, title: "JavaScript1", descript: "Lorem de dug lorin dugh" },
    { id: 3, title: "JavaScript2", descript: "Lorem de dugh" }

  ])
  const [value, setValue] = useState(
    { id: data.length + 1, title: '', descript: '' }
  )

  const dataChenge = (e) => {
    e.preventDefault()
    // console.log(value);
    setData([...data, value])
    setValue({ ...value, title: '', descript: '' })
  }

  return (
    <div className="App">
      <form className='createPosts'>
        <input type="text" placeholder='Enter Title' value={value.title} onChange={e => setValue({ ...value, title: e.target.value })} />
        <input type="text" placeholder='Enter Description' value={value.descript} onChange={e => setValue({ ...value, descript: e.target.value })} />
        <MyButton onClick={dataChenge}>Create post</MyButton>
      </form>
      <PostList title="My project's Posts" posts={data} />

    </div>
  );
}

export default App;
