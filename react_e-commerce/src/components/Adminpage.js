const Adminpage = () => {
    return(
        <>
        <body className="adminpage jomolhari-regular">
        <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
                <div className="custom-form-container">
                    <form action="/admin" method="POST" enctype="multipart/form-data">
                        <div className="mb-3">
                            <label htmlFor="frameSize" className="form-label">Frame Size</label>
                            <select className="form-control" id="frameSize" name="frame_size" required>
                                <option value="A-5">A-5</option>
                                <option value="A-4">A-4</option>
                                <option value="A-3">A-3</option>
                                <option value="A-2">A-2</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="frameColor" className="form-label">Color</label>
                            <select className="form-control" id="frameColor" name="color" required>
                                <option value="Black">Black</option>
                                <option value="White">White</option>
                                <option value="Light wooden wash">Light wooden wash</option>
                                <option value="Dark wooden wash">Dark wooden wash</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="framePrice" className="form-label">Price (KES)</label>
                            <select className="form-control" id="framePrice" name="price" required>
                                <option value="1000">1000</option>
                                <option value="1200">1200</option>
                                <option value="1800">1800</option>
                                <option value="3300">3300</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">Upload Frame Image</label>
                            <input className="form-control" type="file" id="formFile" name="frame_image" accept="image/*" required />
                        </div>
                        <button type="submit" className="btn btn-outline-light w-100">Upload Frame</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </body>
        </>
    )
}

export default Adminpage;