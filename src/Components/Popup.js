import React from 'react'

const Popup = ({data, editdata, setData}) => {
  const updateHandler=() => {
    const updateData = data.map((element) => {
      if(editdata===element.id){
        return {...element, title:document.getElementById("edittitle").value,
        tagline:document.getElementById("edittagline").value,
        body:document.getElementById("editbody").value,
        }
      }else{
        return element;
      }
    })
    console.log(updateData)
    setData(updateData)
  }
  return (
    <>
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
              <div className="mb-3">
                  <label htmlFor="title" className="form-label"> <b>Title</b>  </label>
                  <input type="text" className="form-control" id="edittitle" placeholder="Note Title" />
                </div>
                <div className='mb-3'>
                  <label htmlFor="tagline" className="form-label"> <b>Tagline</b> </label>
                  <input type="text" className="form-control" id="edittagline" placeholder="Note Tagline" />
                </div>
                <div className="mb-3">
                  <label htmlFor="body" className="form-label"> <b>Body</b> </label>
                  <textarea className="form-control" id="editbody" rows="3"></textarea>
                </div>
                
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" onClick={updateHandler} className="btn btn-primary" data-bs-dismiss="modal">Save</button>
              
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Popup