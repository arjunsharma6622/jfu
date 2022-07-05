import "./admin.scss"
import { useRef, useState } from "react"
import axios from "axios"
import {CircularProgress} from "@material-ui/core"
import Navbar from "../../components/Navbar/Navbar"

function Admin() {
  const storeName = useRef()
  const landmark = useRef()
  const place = useRef()
  const state_pin = useRef()
  const cn1 = useRef()
  const cn2 = useRef()

  const [isSuccess, setIsSuccess] = useState(false)
  const [isFailure, setIsFailure] = useState(false)
  const [isClicked, setIsClicked] = useState(false)


  const handleClick = async (e) => {
    e.preventDefault()
    const store = {
      "storeName": storeName.current.value,
      "landmark": landmark.current.value,
      "place": place.current.value,
      "city_pin": state_pin.current.value,
      "contact_1": cn1.current.value,
      "contact_2": cn2.current.value
    }


    try {
      await axios.post("https://jfu-storedata.herokuapp.com/api/store/register", store);
      setIsSuccess(true)
    } catch (err) {
      setIsFailure(true)
      console.log(err);
    }

    setTimeout((e) => {
      window.location.reload()
      e.target.reset()
    }, 3000);

  }



  return (
    <div className="Admin">
      <Navbar />

      <h1 className="heading">JFU store Details</h1>

      <div className="message">
        {isSuccess ? (
          <div className="success">
            <h1>Your Details have been saved successfully</h1>        
          </div>
        ) : isFailure ? (
          <div className="failure">
          <h1>Error : Your details have not saved, Please enter your details again and submit</h1>
        </div>
        ) : ("")}
      </div>

      <form onSubmit={handleClick} className="form">

        <p>Store Name</p>
        <input required={true} type="text" placeholder="ex : Patny Center" ref={storeName} />
        <p>Landmark</p>
        <input required={true} type="text" placeholder="ex : Beside/opp : some showroom" ref={landmark} />
        <p>City/Town/Village/Place</p>
        <input required={true} type="text" placeholder="ex : Patny Center" ref={place} />
        <p>District and PinCode</p>
        <input required={true} type="text" placeholder="ex : Hyderabad - 500002" ref={state_pin} />
        <p>Contact Number 1</p>
        <input maxLength={10} required={true} type="text" placeholder="ex : 96*******4" ref={cn1} />
        <p>Contact Number 2</p>
        <input maxLength={10} required={true} type="text" placeholder="ex : 78*******2" ref={cn2} />

        <button type="submit" onClick={() => { setIsClicked(true) }}>
          {isClicked ? <CircularProgress style={{ width : "20px", height : "20px", color: "white"}}/> : "Submit"}
        </button>

      </form>




    </div>
  );
}

export default Admin;
