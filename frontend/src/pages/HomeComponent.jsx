import { useRef } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const HomeComponent = () => {
  const whyUsRef = useRef(null);

  const scrollToWhyUs = () => {
    whyUsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar />
      <style>{`
        
        body {
          font-family:'Poppins', sans-serif;
          margin: 0;
          padding: 0;
          background-color: #0D1B2E;

        }
        /* ---------------------------------------hero (welcome)section-------------------------------------------*/
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        
        #hero {
          width: 100%;
          height: 100vh;
          background:linear-gradient(rgba(28, 29, 53, 0.7), rgba(28, 29, 53, 0.6))

          , url("src/assets/banner-home.jpg") top center;
          background-size: cover;
          margin-bottom: -125px;
          display: flex;
          justify-content:left;
          align-items: center;
          text-align: left;
          color: #FBFFF1;
          
        }
        
        #hero h1 {
          margin: 0;
          font-size: 30px;
          font-weight: 900;
          line-height: 56px;
          text-transform: uppercase;
          margin-left: 120px; 
        }
        #hero h2 {
          margin: 10px 0 0 0;
          font-size: 24px;
          margin-left: 120px; 
        }
        #hero .btn-get-started {
          font-family: "Raleway", sans-serif;
          text-transform: uppercase;
          font-weight: 500;
          font-size: 14px;
          letter-spacing: 1px;
          display: inline-block;
          padding: 12px 35px;
          margin-top: 30px;
          border-radius: 50px;
          transition: 0.5s;
          color: #fff;
          background:  #1C2735;
          text-decoration: none;
          margin-left: 120px; 
        }
        #hero .btn-get-started:hover {
          background: #B91C1BFC;
        }
      
        /* ---------------------------------------------------Why Us Section ----------------------------------------*/
        /* Main Section */\
        .icon-box {
          border-radius: 10px;
        }
        #main {
          padding: 20px; 
        }
        
        /* Why Us Section */
        #why-us {
          padding: 60px 0;
          background-color:transparent;
          
        
        }
        
        #why-us .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        #why-us h3 {
          font-size: 30px;
          margin-bottom: 20px;
        }
        
        #why-us p {
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 20px;
          color: #ffff;
        }
        
        #why-us .more-btn {
          display: inline-block;
          background: rgba(25, 119, 204, 0.2);
          padding: 10px 25px;
          color:  #2c4964;
          border-radius: 30px;
          transition: all ease-in-out 0.4s;
          text-decoration: none;
        }
        
        #why-us h3{
          color: #ffff;
        }

        #why-us h4{
          color: #1C2735;
        }


        #why-us .more-btn:hover {
          color: #fff;
          background: #1977cc;
        }
        
        #why-us .icon-box {
          marginRight: 100px;
          marginTop: 270px;
          textAlign: center;
          borderRadius: 10px;
          background: #fff;
          boxShadow: 10px 15px 40px rgba(0, 0, 0, 0.1);
          padding: 1rem 1rem;
          outline: 2px solid transparent;
          outlineColor: #1C2735;
          width: 14rem;
          height: 20rem;
          overflow: visible;
        }
        
        
        #why-us .icon-box:hover {
          outline-color: #1C2735; 
          background: #b2c8dd;
          
        }
        
        
        #why-us .icon-box i {
          font-size: 40px;
          color: #1C2735;
          margin-bottom: 20px;
          
        }
        
        #why-us .icon-box h4 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 15px;
        }
        
        #why-us .icon-box p {
          font-size: 16px;
          font-weight:500;
          color: #1C2735;
          line-height: 1.6;
        }
        #why-us .icon-boxes .col-xl-4:not(:last-child) {
          margin-right: 15px; 
        }

        #why-us .row {
          display: flex;
          flex-wrap: nowrap; 
          align-items: flex-start; 
        }
        
        #why-us .col-lg-4,
        #why-us .col-lg-8 {
          flex: 1; 
        }
        
        #why-us .content {
          padding: 20px; 
          margin-right: 20px; 
        }
        
        #why-us .icon-boxes {
          flex: 1;
        }

        /* ---------------------------------------------------Why Us Section ----------------------------------------*/

        #about-us .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        #about-us .row {
          display: flex;
          flex-wrap: wrap; 
        }
        
        #about-us .col-lg-6 {
          flex: 0 0 50%; 
        }
        
        #about-us .col-lg-6 img {
          border-radius: 10px;
          max-width: 90%;
          height: auto;
        }
        
        #about-us .content {
          padding: 20px;
        }
        
        #about-us .content h3 {
          font-size: 35px;
          margin-bottom: 25px;
          color:#ffff;
        }
        
        #about-us .content p {
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 20px;
          color:#ffff
        }
        
        #about-us ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
          color:#ffff;
        }
        
        #about-us ul li {
          margin-bottom: 40px;
          color:#ffff;
          font-size:18px;
        }
        
        #about-us .text-center {
          text-align: center;
        }
        
        #about-us .more-btn {
          display: inline-block;
          background: rgba(25, 119, 204, 0.2);
          padding: 10px 25px;
          color: #1977cc;
          border-radius: 30px;
          transition: all ease-in-out 0.4s;
          text-decoration: none;
        }
        
        #about-us .more-btn:hover {
          color: #fff;
          background: #1977cc;
        }
        
        
        
        `}</style>

      {/* Hero Section */}

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      ></link>

      <section id="hero" className="d-flex align-items-center ">
        <div className="container">
          <h1>Welcome to Eye Site</h1>
          <h2>Where your vision finds calrity and style</h2>
          <button className="btn-get-started" onClick={scrollToWhyUs}>
            Get Started
          </button>
        </div>
      </section>

      <main id="main">
        {/* why us */}

        <section id="why-us" ref={whyUsRef}>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="content mt-10">
                  <h3 className="font-bold">Why Choose Eye-Site?</h3>
                  <p>
                    Eye-Site Opticals for personalized eye care backed by
                    expertise and innovation. With cutting-edge technology and a
                    dedicated team, were committed to enhancing your vision and
                    providing unmatched service. Choose clarity, choose Eye-Site
                    Opticals.
                  </p>
                  <div className="text-center"></div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="icon-boxes">
                  <div className="row">
                    <div className="col-xl-4">
                      <div className="icon-box border border-solid border-grey-800">
                        <i className="fas fa-check-circle"></i>
                        <h4>Commitment to Excellence</h4>
                        <p>
                          We prioritize precision, quality, and continuous
                          improvement to deliver unparalleled service and
                          results.
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="icon-box border border-solid border-grey-800">
                        <i className="fas fa-check-circle"></i>
                        <h4>Professional service</h4>
                        <p>
                          {" "}
                          Our team of experts is dedicated to providing
                          attentive and knowledgeable assistance at your eye
                          care journey.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="icon-box border border-solid border-grey-800">
                        <i className="fas fa-check-circle"></i>
                        <h4>Epitome of Quality</h4>
                        <p>
                          Only the finest materials and advanced technologies to
                          enhances your vision but also reflects your unique
                          style and personality.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* About */}

      <main id="main">
        <section id="about-us">
          <div className="container">
            <div className="row">
              {/* Left Container */}
              <div className="col-lg-6">
                <img
                  src="src/assets/store-front.jpg"
                  alt="Image Description"
                  className="img-fluid mb-10"
                />
              </div>
              {/* Right Container */}
              <div className="col-lg-6">
                <div className="content">
                  <h3>About Us</h3>
                  <p>
                    Empowering vision for a brighter tomorrow, Eye-Site Opticals
                    is your trusted partner in exceptional eye care.
                  </p>
                  {/* List of Points */}
                  <ul>
                    <li>
                      <i className="fas fa-check-circle"></i> Precision-focused
                      eye care solutions tailored to your needs.
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Dedicated team
                      delivering expert care and attention to detail.
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i>Comprehensive
                      services ranging from exams to advanced vision correction.
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Personalized
                      approach prioritizing your eye health and overall
                      well-being
                    </li>
                  </ul>
                  <div className="text-center">\</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <iframe
          title="Eye Site Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21384.473738743014!2d79.86685294171843!3d6.837373978697427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25ae7c4420c03%3A0xdfa66e19dcb89743!2sEye%20Site!5e0!3m2!1sen!2slk!4v1715587136918!5m2!1sen!2slk"
          width="1479"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </main>
      <Footer />
    </div>
  );
};

export default HomeComponent;
