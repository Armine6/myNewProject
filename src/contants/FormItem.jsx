import React, { useState } from 'react'
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';



const FormItem = ({ dataChange }) => {
    const [value, setValue] = useState(
        { title: '', descript: '' }
    )
    const newPost = { id: Date.now(), ...value }

    const clearPost = () => {
        setValue({ title: '', descript: '' })
    }

    return (
        <form className='createPosts'>

            <MyInput type="text" placeholder='Enter Title' value={value.title} onChange={e => setValue({ ...value, title: e.target.value })} />
            <MyInput type="text" placeholder='Enter Description' value={value.descript} onChange={e => setValue({ ...value, descript: e.target.value })} />
            <MyButton onClick={e => dataChange(e, newPost, clearPost)}>Create post</MyButton>
        </form>
    )
}
export default FormItem
