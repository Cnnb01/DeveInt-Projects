import axios from "axios";
import { useState } from "react";
// import env from "dotenv";

const Adminpage = () => {
    // const API_BASE_URL = "http://localhost:8000";
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URLL || "http://localhost:8000";

    const [selectedFile, setselectedFile] = useState(null)
    const [frameSize, setframeSize] = useState("A-5")
    const [frameColor, setframeColor] = useState("Black")
    const [framePrice, setframePrice] = useState("1000")

    const handleFileChange = (event) => {
        if (event.target.files.length > 0) {
            console.log("File selected:", event.target.files[0]);
            setselectedFile(event.target.files[0]);
        }
      };
    const uploadFrame = async(e)=>{
        e.preventDefault()
        const formData = new FormData()
        formData.append("frame_image", selectedFile); // Assuming you have a file input and state
        formData.append("frame_size", frameSize);
        formData.append("color", frameColor);
        formData.append("price", framePrice);
        console.log("THE FORM DATA CONTENT IS=>",formData)
        try {
            const resp = await axios.post(`${API_BASE_URL}/admin`, formData, {headers: { "Content-Type": "multipart/form-data","Accept": "application/json" }});
            console.log("THEE REESSPONSEEE==>>",resp)
            if(resp.data === "frame uploaded successfully"){
                alert("Frame successfully uploaded")
            }else{
                alert("An error occured while uploading")
            }
        } catch (error) {
            console.error("CAUGHT AN ERROR WHILE TRYING TO UPLOAD FE=>",error)
        }
    }

    return(
        <>
        {/* <body className="adminpage jomolhari-regular"> */}
        <div className="container mt-5 adminpage jomolhari-regular">
        <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
                <div className="custom-form-container">
                    <form onSubmit={uploadFrame} encType="multipart/form-data" method="post" action="/admin">
                        <div className="mb-3">
                            <label htmlFor="frameSize" className="form-label">Frame Size</label>
                            <select value={frameSize} onChange={(e)=>setframeSize(e.target.value)} className="form-control" id="frameSize" name="frame_size" required>
                                <option value="A-5">A-5</option>
                                <option value="A-4">A-4</option>
                                <option value="A-3">A-3</option>
                                <option value="A-2">A-2</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="frameColor" className="form-label">Color</label>
                            <select value={frameColor} onChange={(e)=>setframeColor(e.target.value)} className="form-control" id="frameColor" name="color" required>
                                <option value="Black">Black</option>
                                <option value="White">White</option>
                                <option value="Light wooden wash">Light wooden wash</option>
                                <option value="Dark wooden wash">Dark wooden wash</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="framePrice" className="form-label">Price (KES)</label>
                            <select value={framePrice} onChange={(e)=>setframePrice(e.target.value)} className="form-control" id="framePrice" name="price" required>
                                <option value="1000">1000</option>
                                <option value="1200">1200</option>
                                <option value="1800">1800</option>
                                <option value="3300">3300</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">Upload Frame Image</label>
                            <input onChange={handleFileChange} className="form-control" type="file" id="formFile" name="frame_image" accept="image/*" required />
                        </div>
                        <button type="submit" className="btn btn-outline-light w-100">Upload Frame</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    {/* </body> */}
        </>
    )
}

export default Adminpage;