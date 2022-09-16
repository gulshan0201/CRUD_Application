import React from 'react'

const Note = ({e, data, setData, seteditdata}) => {
  
  const editHandler =(id) => {
    seteditdata(id)
    data.filter((element) => {
      if(element.id === id){
        document.getElementById("edittitle").value=element.title
        document.getElementById("edittagline").value=element.tagline
        document.getElementById("editbody").value=element.body
      }
    })
  }

  const removeHandler = (id) => {
   const newData = data.filter((element) => {
      if(element.id !== id){
        return element
      }
    })
   setData(newData)
   
  }
  return (
    <>
    <div className='container mt-5 col-5 mb-3'>
      <div className="card bg-dark text-light">
        <div className="card-header"> <h5>{e.title}</h5>  </div>
        <div className="card-body">
          <h6 className="card-title">{e.tagline}</h6>
          <p className="card-text">{e.body}</p>
          <button type="button" className="btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {
            editHandler(e.id)
          }}>
           Edit
          </button>
          <button className='btn btn-danger' onClick={() => {
              removeHandler(e.id)
          }}>Delete</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Note
