import React, { useState } from 'react';

function InputDataPage({ data, setData, onBack }) {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [editId,setEditId]=useState(null);

  const handleAddOrUpdate = () => {
    if (!title || !image || !description) return alert("All fields required");
    if(editId!==null)
    {
      const updated=data.map(item=>
        item.id===editId?{id:editId,title,image,description}:item
      );
      setData(updated);
      setEditId(null);
    }
    else{
    const newItem = { id: Date.now(),title,image, description };
    setData([...data, newItem]);
    }
    setTitle('');
    setImage(''); 
      setDescription('');
  };

  const handleDelete = (id) => {
    const updated = data.filter(item => item.id !== id);
    setData(updated);
    if(id===editId)
    {
      setEditId(null);
      setTitle('');
      setImage(''); 
      setDescription('');
    }
  };

  const handleEdit=(item)=>{
    setTitle(item.title);
    setImage(item.image);
    setDescription(item.description);
    setEditId(item.id);
  };

  return (
    <div className="page">
      <h2>{editId!==null?'Update data':'Add data'}</h2>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <input value={image} onChange={e => setImage(e.target.value)} placeholder="Image URL" />
      <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
      <button onClick={handleAddOrUpdate}>{editId!==null?'Update':'Add'}</button>

      <div className="card-container">
        {data.map(item => (
          <div key={item.id} className="card">
            <h4>{item.title}</h4>
            <button onClick={() => handleEdit(item)}>Edit</button>
            <br/>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        ))}
      </div>
      <button onClick={onBack}>Back</button>
    </div>
  );
}

export default InputDataPage;