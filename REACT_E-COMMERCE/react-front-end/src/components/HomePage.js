import React, { useState, useEffect } from "react";
const HomePage = () => {
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL
  // console.log("API_IBASE_URL=>",API_BASE_URL)
  const [frames, setFrames] = useState([]);

  useEffect(() => {
    let isMounted = true //to prevent mem leaks
    const getFrames = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/frames`); // Direct API call
        // console.log("FRAMES RESPONSSEEEE=>",response)
        if (!response.ok) {
          throw new Error("Failed to fetch frames");
        }
        const data = await response.json();
        // console.log("FRAMES DATAA=>", data)
        if (isMounted){
          setFrames(data);
        }
      } catch (error) {
        console.error("Failed to fetch frames", error);
      }
    };
    getFrames();
    return()=>{
      isMounted = false;//set isMounted to false only when this component is being cleaned up.
    }
  },[]);
    return(
        <>
        <div id="carouselExampleDark"  className="centerround carousel carousel-dark slide" data-bs-ride="carousel" data-bs-interval="2500">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" >
            <img id="pic1" src="pic11.jpg" className="d-block " alt="frame" />
            <div className="carousel-caption d-none d-md-block">
              <h1 style={{color: "white"}} className="jomolhari-regular">Decorate your walls, elevate your space. </h1>
              <p style={{color: "white"}} className="jomolhari-regular roboto-condensed-normalText2">Frame your moments, frame your style.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img id="pic1" src="pic55.jpg" className="d-block" alt="frame" />
            <div className="carousel-caption d-none d-md-block">
              <h1 style={{color: "white"}} className="jomolhari-regular" >Frame your memories beautifully.</h1>
              <p style={{color: "white"}} className="jomolhari-regular roboto-condensed-normalText2">Transform your space with our designs.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img id="pic1" src="pic66.jpg" className="d-block" alt="frame" />
            <div className="carousel-caption d-none d-md-block">
              <h1 style={{color: "white"}} className="jomolhari-regular" >Your walls deserve some love!</h1>
              <p style={{color: "white"}} className="jomolhari-regular roboto-condensed-normalText2">Frames for every size and style.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
    </div>

    <div id="about" className="centerround">
        <div className="aboutheader"><p className="jomolhari-headers ">About</p></div>
        <div className="aboutpara"><p className="jomolhari-regular">At Framely, we believe a frame isn’t just something that holds your memories — it’s what makes them unforgettable.
        Born from a love of art, photography, and the tiny joys in everyday life, our app was designed to make buying the perfect frame feel like less of a chore and more like a vibe, like a hobby, like a form of relaxation.
        We sell high-quality, stylish, and affordable frames for every kind of memory — whether it's that graduation photo you’ve been meaning to hang for 3 years, a piece of art that shows your personality or the watercolor you bought from that random street artist on vacation (you know the one). Minimalist, boho, classic woodgrain, bold and artsy? We’ve got it all.
        We built a platform that removes the fluff and gives you exactly what you need: beautiful, durable frames that make your space feel like home.</p>
    </div>
    </div>

    <div id="products" className="centerround gallery-section screenshots-section">
        <div className="aboutheader"><p className="jomolhari-headers ">Available Products</p></div>
        <div className="prodpara scrollable-gallery">
            <div className="productsbox gallery-item">
              { frames.map((frame)=>(
                <div key={frame.frame_id} className="card col jomolhari-regular" style={{width: "18rem"}}>
                <img src={`data:image/jpeg;base64,${frame.image_data}`} className="productframes" alt="frame" />
                    <div className="card-body">
                      <p className="card-text">
                        Details<br />
                        Size: {frame.frame_size}<br/>
                        Color: {frame.color}<br/>
                        Price:{frame.price}<br/>
                      </p>
                      <p><a className="btn btn-outline-secondary" href={`/frames/${frame.frame_id}`}>Add to cart</a></p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>

    <div id="contacts" className="centerround">
        <div className="contactheader"><p className="jomolhari-headers ">Contact for customised frames</p></div>
        <div className="contactpara">
        <p className="jomolhari-regular">
            YOUR FIRST PURCHASE WITH 10% OFF<br/>
            Subscribe to our newsletter and get a discunt on your first purchase<br/>
        </p><br/>
        <form className="row g-3">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="email@gmail.com"/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Frame details</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="size and color"></textarea>
          </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-outline-secondary mb-3">Subscribe</button>
            </div>
          </form>
    </div>
    </div>
    </>
    )
}

export default HomePage;