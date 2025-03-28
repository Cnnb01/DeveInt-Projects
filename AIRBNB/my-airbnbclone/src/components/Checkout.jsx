import { useState } from "react";
import { useParams } from "react-router-dom";
const Checkout = () => {
    const {home_id} = useParams()
    const [paymentdeats, setPaymentdeats] = useState({
        email:"",
        mpesaNum:"",
        cardNum:"",
    })
    return(
        <>
            <h1>Checkouttttt</h1>
            <div>PRICE DETAILS</div>
            <form class="max-w-md mx-auto space-y-5 mt-4">
            <div>
                <label class="mb-2 text-sm text-slate-900 font-medium block">Host Name</label>
                <input type="email" name="" value="{}" onChange="{handleChange}" placeholder="Private Villa" class="px-4 py-3 bg-gray-100 focus:bg-transparent w-full text-sm text-slate-900 outline-[#333] rounded-sm transition-all" />
            </div>
            <label for="paymentform" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Select form of payment</label>
            <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>Pay pal</option>
                <option>Visa</option>
                <option>M-Pesa</option>
            </select>
            <div>
                <label class="mb-2 text-sm text-slate-900 font-medium block">Card/paypal/visa</label>
                <input type="name" name="" value="{}" onChange="{handleChange}" placeholder="Private Villa" class="px-4 py-3 bg-gray-100 focus:bg-transparent w-full text-sm text-slate-900 outline-[#333] rounded-sm transition-all" />
            </div>
            <div>
                <label class="mb-2 text-sm text-slate-900 font-medium block">Mpesa</label>
                <input type="name" name="" value="{}" onChange="{handleChange}" placeholder="Private Villa" class="px-4 py-3 bg-gray-100 focus:bg-transparent w-full text-sm text-slate-900 outline-[#333] rounded-sm transition-all" />
            </div>
            </form>

        
        </>
    )
}
export default Checkout;