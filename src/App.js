import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Input from './Components/Input'
import Note from './Components/Note'
import Popup from './Components/Popup'


const App = () => {

  const [title, setTitle] = useState("")
  const [tagline, setTagLine] = useState("")
  const [body, setBody] = useState("")
  const [data, setData] = useState(fetchData)
  const [editdata, seteditdata] = useState("")
  localStorage.setItem("data", JSON.stringify(data))

  return (
    <>
      <Popup editdata={editdata} data={data} setData={setData} />
      <Navbar />
      <Input title={title} setTitle={setTitle} tagline={tagline} setTagLine={setTagLine} body={body} setBody={setBody} data={data} setData={setData} />
      <div className='container mt-4 text-light row row-cols-3 row-cols-md-3 g-4 mx-5'>
        {
          data.length === 0 ?
            <div className='card mb-3 text-light bg-dark'>
              <div className='card-body'>
                <h6 className='card-title'>Empty List</h6>
                <span className='card-text'> No notes</span>
              </div>
            </div> : data.map((e) => {
              return (
                <Note key={e.id} e={e} data={data} setData={setData} seteditdata={seteditdata} />
              )
            })
        }
      </div>
    </>
  )

  function fetchData() {
    const notes = JSON.parse(localStorage.getItem("data"))
    if (notes) {
      return notes
    } else {
      return []
    }
  }
}

export default App