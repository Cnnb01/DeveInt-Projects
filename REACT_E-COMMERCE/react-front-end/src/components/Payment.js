import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
const Payment = ({ setFrames }) => {
    const { frame_id } = useParams(); //to extract dynamic ID from URL
    const [paymentMethod, setpaymentMethod] = useState("")
    const [formData, setformData] = useState({
        email:"",
        mpesaNum:"",
        cardNum:"",
        deliveryDets:""
    })

    const handlePaymentMethod = (e) =>{
        setpaymentMethod(e.target.value)
    }
    const handleFormChange = (e) =>{
        setformData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    const clearForm = () => {
        setformData({
            email:"",
            mpesaNum:"",
            cardNum:"",
            deliveryDets:""
        })
        setpaymentMethod("")
    }
    // const [frames, setFrames] = useState([])

    useEffect(() => {
        if (frame_id) {
          fetch(`/pay/${frame_id}`, { method: "GET" })
            .then((response) => {
              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
              return fetch("/frames");
            })
            .then(response => response.json())
            .then(data => setFrames(data))
            .catch((error) => console.error("Error fetching payment:", error));
        }
      });
    return(
        <>
        {/* <body className="jomolhari-regular payments"> */}
        <p><a className="btn btn-outline-secondary" href={`/home`}>Back</a></p>

        <div className="d-flex align-items-center justify-content-center vh-100 jomolhari-regular payments">
        <form className="form-container paymentsform" id="myForm">
            <h4 className="text-center mb-4">Payment Form</h4>
            {/* <p><strong>Frame ID:</strong> {frame_id}</p>  */}
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input onChange={handleFormChange} type="email" className="form-control" name="email" value={formData.email} id="myInputt" required />
            </div>

            <div className="mb-3">
                <label htmlFor="paymentMethod" className="form-label">Payment options</label>
                <select className="form-select" id="paymentMethod" onChange={handlePaymentMethod} value={paymentMethod}>
                    <option selected disabled>Select Payment Method</option>
                    <option value="mpesa">Mpesa</option>
                    <option value="visa">Visa</option>
                    <option value="mastercard">Mastercard</option>
                </select>
            </div>
            {/* rendering for input payment methods*/}
            {paymentMethod === "mpesa" && (
                <div className="mb-3" id="mpesaInput">
                <label htmlFor="mpesaNumber" className="form-label">Mpesa Number</label>
                <input onChange={handleFormChange} name="mpesaNum" value={formData.mpesaNum} type="text" className="form-control" id="myInputt1" placeholder="Enter your Mpesa number" />
            </div>
            )}
            {(paymentMethod === "visa" || paymentMethod === "mastercard")&&(
                <div className="mb-3" id="cardInput" >
                    <label htmlFor="cardNumber" className="form-label">Card Number</label>
                    <input onChange={handleFormChange} name="cardNum" value={formData.cardNum} type="text" className="form-control" id="myInputt2" placeholder="Enter your Card number"/>
                </div>
            )}

            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Delivery details and location</label>
                <textarea onChange={handleFormChange} name="deliveryDets" value={formData.deliveryDets} className="form-control" id="myInputt3" rows="3"></textarea>
            </div>

            <div className="d-flex justify-content-center payment-icons">
            {/* <img id="pic1" src="pic11.jpg" className="d-block " alt="frame picture" /> */}
            {/* <Link id="icons" to="/home">
                <img src="mpesa.png" alt="Home"/>
            </Link> */}
                <img src="mpesa.png" alt="Mpesa" />
                <img src="visa.png" alt="Visa"/>
                <img src="mastercard.png" alt="Mastercard"/>
            </div>

            <div className="text-center mt-3">
                <button type="submit" onClick={clearForm} className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">Pay</button> {/*onclick="document.getElementById('myInputt').value='' "  */}
            </div>

            {/* modal */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" >
                    <div className="modal-content" id="exampleModal1">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Thank you for supporting our business 🎉</h1>
                        </div><hr/>
                        <div className="modal-body">
                            <p>Thank you for your purchase! You will receive a prompt to make your payment 🙂</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" id="closeModal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
    {/* </body> */}
   </>
    )
}

export default Payment;