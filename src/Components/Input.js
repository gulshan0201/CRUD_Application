import React from 'react'


const Input = ({ title, setTitle, tagline, setTagLine, body, setBody, data, setData }) => {
  const addNotes = (e) => {
    e.preventDefault()
    if (title == "" && tagline == "" && body == "") {
      alert("No notes are added")
    } else {
      setData((data) => {
        return (
          [...data, {
            id: new Date().getTime(),
            title: title,
            tagline: tagline,
            body: body
          }]
        )
      })
    }
    setTitle('');
    setTagLine('');
    setBody('')
  }

  return (
    <>
      <div className='container mt-4 col-6 text-light'>
        <div className="mb-3">
          <label htmlFor="title" className="form-label"> <b>Title</b>  </label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" placeholder="Note Title" />
        </div>
        <div className='mb-3'>
          <label htmlFor="tagline" className="form-label"> <b>Tagline</b> </label>
          <input type="text" value={tagline} onChange={(e) => setTagLine(e.target.value)} className="form-control" id="tagline" placeholder="Note Tagline" />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label"> <b>Body</b> </label>
          <textarea name='body' value={body} onChange={(e) => setBody(e.target.value)} className="form-control" id="body" rows="3" placeholder='enter your notes'></textarea>
        </div>
        <div className="d-grid">
          <button className="btn btn-primary" type="button" onClick={addNotes}>Submit</button>
        </div>
      </div>
    </>
  )
}

export default Input

