import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Checkout = () => {
    const { home_id } = useParams();
    const navigate = useNavigate()
    const [paymentMethod, setpaymentMethod] = useState("")
    const [paymentdeats, setPaymentdeats] = useState({
        email: "",
        mpesaNum: "",
        cardNum: "",
    });

    const handleChange = (event) => {
        const {name,value} = event.target
        setPaymentdeats((prev)=>{
            return{
                ...prev,
            [name]: value
            }
        });
    };
    const handlePaymentMethod = (event)=>{
        const {name,value} = event.target
        setpaymentMethod(value)
    }

    const [isModalOpen, setIsModalOpen] = useState(false)
    const handlePayClick = (event)=>{
        event.preventDefault()
        setIsModalOpen(true)
    }
    const closeModal = async() => {
        setIsModalOpen(false);
        try {
            const response = await fetch (`http://localhost:8000/checkout/${home_id}`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            if(!response.ok){
                throw new Error(`HTTP error! Status: ${response.status}`);
            }else{
                setTimeout(()=>{
                    navigate("/home")
                },500)
            }
        }
        catch (error) {
            console.error("Error fetching payment:", error)
        }
        // navigate("/"); // Redirect to home after closing modal
    };
    return (
        <>
            <div className="checkout-container">
                <h1 className="checkout-title">Checkout</h1>
                <div className="price-details">PRICE DETAILS</div>

                <form className="checkout-form">
                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input type="email" name="email" value={paymentdeats.email} onChange={handleChange} placeholder="Enter Email" className="form-input"/>
                    </div>
                    {/* Payment Method Selection */}
                    <label htmlFor="paymentform" className="form-label">Select form of payment</label>
                    <select className="form-select" onChange={handlePaymentMethod} value={paymentMethod}>
                    <option value="" disabled>Select Payment Method</option>
                        <option value="paypal">PayPal</option>
                        <option value="visa">Visa</option>
                        <option value="mpesa">M-Pesa</option>
                    </select>
                    {/* Payment by visa/paypal */}
                    {(paymentMethod === "visa" || paymentMethod === "paypal")&&(
                        <div className="form-group">
                            <label className="form-label">Card / PayPal / Visa</label>
                            <input type="text" name="cardNum" value={paymentdeats.cardNum} onChange={handleChange} placeholder="Enter Card Number" className="form-input"/>
                        </div>
                    )}

                    {/* Payment by M-Pesa */}
                    {paymentMethod === "mpesa" && (
                        <div className="form-group">
                            <label className="form-label">M-Pesa Number</label>
                            <input type="tel" name="mpesaNum" value={paymentdeats.mpesaNum} onChange={handleChange} placeholder="Enter M-Pesa Number" className="form-input"/>
                        </div>
                    )}
                    <button type="submit" className="bnb-checkout-btn" onClick={handlePayClick}>Pay</button>

                </form>
            </div>
            {/* Payment Confirmation Modal */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Thank you for your purchase! 🎉</h2>
                        <p>You will receive a prompt to make your payment 🙂</p>
                        <button onClick={closeModal} className="modal-close-btn">Close</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Checkout;
