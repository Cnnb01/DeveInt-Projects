import { useState } from "react";
import { useParams } from "react-router-dom";

const Checkout = () => {
    const { home_id } = useParams();
    const [paymentdeats, setPaymentdeats] = useState({
        email: "",
        mpesaNum: "",
        cardNum: "",
    });

    const handleChange = (prev) => {
        setPaymentdeats({
            ...prev,
            [name]: value
        });
    };

    return (
        <>
            <div className="checkout-container">
                <h1 className="checkout-title">Checkout</h1>
                <div className="price-details">PRICE DETAILS</div>

                <form className="checkout-form">
                    {/* Payment Method Selection */}
                    <label htmlFor="paymentform" className="form-label">Select form of payment</label>
                    <select className="form-select">
                        <option>PayPal</option>
                        <option>Visa</option>
                        <option>M-Pesa</option>
                    </select>
                    {/* Payment Details */}
                    <div className="form-group">
                        <label className="form-label">Card / PayPal / Visa</label>
                        <input type="text" name="cardNum" value={paymentdeats.cardNum} onChange={handleChange} placeholder="Enter Card Number" className="form-input"/>
                    </div>

                    {/* M-Pesa Input */}
                    <div className="form-group">
                        <label className="form-label">M-Pesa Number</label>
                        <input type="tel" name="mpesaNum" value={paymentdeats.mpesaNum} onChange={handleChange} placeholder="Enter M-Pesa Number" className="form-input"/>
                    </div>
                    <button type="submit" className="bnb-checkout-btn">Pay</button>

                </form>
            </div>
        </>
    );
};

export default Checkout;
