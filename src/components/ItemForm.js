import React, {useState}from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [name, setName]=useState('food')
  const [category, setCategory]= useState('Produce')

  function handleNameChange(event){
    setName(event.target.value)
  }

  function handleCategoruChange(event){
    setCategory(event.target.value)
  }
  function handleSubmit(event){
    event.preventDefault()
    onItemFormSubmit({
      id: uuid(), // the `uuid` library can be used to generate a unique id
     name: name,
     category: category
    })
  } 


  return (
    <form className="NewItem" onSubmit = {handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNameChange}/>
      </label>

      <label>
        Category:
        <select onChange ={handleCategoruChange} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
