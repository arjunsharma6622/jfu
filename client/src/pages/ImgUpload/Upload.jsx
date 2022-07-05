import React, {useState} from "react";
import "./upload.scss"
import Navbar from "../../components/Navbar/Navbar"

const Upload = () => {


    const [file, setFile] = useState()

    function handleChange(event) {
        event.preventDefault()
        // setFile(event.target.files[0])
        console.log(event.target)

        // console.log(file)
      }
  return (
    <div className='upload'>
        <Navbar />
        <div className="container">
        <form>
          <h1>Image Upload</h1>
          <input type="file" onChange={handleChange}/>
          <button type="submit">Upload</button>
        </form>
        </div>
    </div>
  )
}

export default Upload