const HomePage = () => {
    return(
        <>
        <div id="carouselExampleDark"  className="centerround carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img id="pic1" src="pic11.jpg" className="d-block " alt="frame picture" />
            <div className="carousel-caption d-none d-md-block">
              <h1 style={{color: "white"}} className="jomolhari-regular">Decorate your walls, elevate your space. </h1>
              <p style={{color: "white"}} className="jomolhari-regular roboto-condensed-normalText2">Frame your moments, frame your style.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img id="pic1" src="pic55.jpg" className="d-block" alt="frame picture" />
            <div className="carousel-caption d-none d-md-block">
              <h1 style={{color: "white"}} className="jomolhari-regular" >Frame your memories beautifully.</h1>
              <p style={{color: "white"}} className="jomolhari-regular roboto-condensed-normalText2">Transform your space with our designs.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img id="pic1" src="pic66.jpg" className="d-block" alt="frame picture" />
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
        <div className="aboutpara"><p className="jomolhari-regular">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
    </div>
    </div>

    <div id="products" className="centerround">
        <div className="aboutheader"><p className="jomolhari-headers ">Available Products</p></div>
        <div className="prodpara">
            {/* <div className="productsbox ">
              { frames.map((frame)=>(
                <div key={frame.frame_id} className="card col jomolhari-regular" style="width: 18rem;">
                    <img src={`data:image/jpeg;base64, ${frame.image_data.toString('base64')}`} className="productframes"  alt="frame picture" />
                    <div className="card-body">
                      <p className="card-text">
                        Details<br />
                        Size: {frame.frame_size}<br/>
                        Color: {frame.color}<br/>
                        Price:{frame.price}<br/>
                      </p>
                      <p><a className="btn btn-outline-secondary" href={`/pay/${frame.frame_id}`}>Add to cart</a></p>
                    </div>
                </div>
                ))}
            </div> */}
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
            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="email@gmail.com"/>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Frame details</label>
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