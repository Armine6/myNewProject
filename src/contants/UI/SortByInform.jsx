import React from 'react'

 const SortByInform = ({options, title}) => {
  return (
    <select name="" id="">
        <option value="">{title}</option>
        {options.map(item => 
            <option value={item.value}>{item.title}</option>
            )}
    </select>
  )
}
SortByInform.propTypes = {

}

SortByInform.defaultTypes = {

}

export default SortByInform
