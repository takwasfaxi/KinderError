'use client'

export default function Home() {
  return (
    <>
   
      <header>
        <div className="logo">Admin Kinder</div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero" id="home">
        <div>
          <h1>Manage Your Daycare Efficiently</h1>
          <p>Create, Organize, and Optimize your Kindergarten or Daycare</p>
        </div>
      </section>


      <section className="features" id="features">
        <h2>Features for Each Role</h2>
        <div className="feature-container">
          <div className="feature-box">
            <h3>Admin</h3>
            <ul>
              <li>Manage users and roles</li>
              <li>View analytics and reports</li>
              <li>Set pricing and packages</li>
            </ul>
            <a href="#admin-dashboard" className="btn">Admin Dashboard</a>
          </div>

          <div className="feature-box">
            <h3>Teacher</h3>
            <ul>
              <li>Create lesson plans</li>
              <li>Manage classroom activities</li>
              <li>Communicate with parents</li>
            </ul>
            <a href="#teacher-dashboard" className="btn">Teacher Dashboard</a>
          </div>

          <div className="feature-box">
            <h3>Parent</h3>
            <ul>
              <li>View child's progress</li>
              <li>Communicate with teachers</li>
              <li>Manage payments and schedules</li>
            </ul>
            <a href="#parent-dashboard" className="btn">Parent Dashboard</a>
          </div>
        </div>
      </section>

  
      <section className="services" id="services">
        <h2>Our Services</h2>
        <div className="service-container">
          <div className="service-box">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQztgh5zdyNw-EtWWNlXaE0CJieIuHgMyELGw&s" alt="Study & Game" />
            <h3>Study & Game</h3>
            <p>Develop programs that engage and educate children.</p>
            <a href="#more" className="btn">Read More</a>
          </div>

          <div className="service-box">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQztgh5zdyNw-EtWWNlXaE0CJieIuHgMyELGw&s" alt="Programs" />
            <h3>A to Z Programs</h3>
            <p>Offer comprehensive programs from early learning to advanced education.</p>
            <a href="#more" className="btn">Read More</a>
          </div>

          <div className="service-box">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQztgh5zdyNw-EtWWNlXaE0CJieIuHgMyELGw&s" alt="Expert Teacher" />
            <h3>Expert Teachers</h3>
            <p>Hire and manage the best childcare experts.</p>
            <a href="#more" className="btn">Read More</a>
          </div>

          <div className="service-box">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQztgh5zdyNw-EtWWNlXaE0CJieIuHgMyELGw&s" alt="Mental Health" />
            <h3>Mental Health</h3>
            <p>Ensure mental well-being with our care and support systems.</p>
            <a href="#more" className="btn">Read More</a>
          </div>
        </div>
      </section>

    
      <section className="testimonials" id="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-container">
          <div className="testimonial-box">
            <p>"Admin Kinder has transformed our daycare experience! The programs are engaging and educational for the kids."</p>
            <h4>- Sarah J., Daycare Owner</h4>
          </div>
          <div className="testimonial-box">
            <p>"The expert teachers provided by Admin Kinder are truly exceptional. Our children are thriving!"</p>
            <h4>- Michael T., Parent</h4>
          </div>
        </div>
      </section>

 
      <section className="pricing" id="pricing">
        <h2>Pricing Plans</h2>
        <div className="pricing-container">
          <div className="pricing-box">
            <h3>Basic Plan</h3>
            <p>Ideal for small daycare centers.</p>
            <p className="price">$100/month</p>
            <a href="#signup" className="btn">Sign Up</a>
          </div>
          <div className="pricing-box">
            <h3>Standard Plan</h3>
            <p>Perfect for medium-sized centers.</p>
            <p className="price">$200/month</p>
            <a href="#signup" className="btn">Sign Up</a>
          </div>
          <div className="pricing-box">
            <h3>Premium Plan</h3>
            <p>For larger institutions with advanced needs.</p>
            <p className="price">$300/month</p>
            <a href="#signup" className="btn">Sign Up</a>
          </div>
        </div>
      </section>

  
      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </section>

 
      <footer>
        <p>&copy; 2024 Admin Kinder. All Rights Reserved.</p>
      </footer>


      <style jsx>{`
        body {
          font-family: 'Arial', sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f9f9f9;
        }


        header {
          background-color: #f59bb7;
          padding: 20px;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        header .logo {
          font-size: 24px;
          font-weight: bold;
        }

        header nav ul {
          list-style: none;
          display: flex;
        }

        header nav ul li {
          margin-left: 20px;
        }

        header nav ul li a {
          color: white;
          text-decoration: none;
          font-weight: bold;
        }

        .hero {
          background: url('https://t3.ftcdn.net/jpg/03/20/81/98/360_F_320819860_ScgqmR8DaFQLGCcg4Gq638ZorwgEpcX8.jpg') no-repeat center center/cover;
          height: 60vh;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          text-align: center;
        }

        .hero h1 {
          font-size: 48px;
        }

        .hero p {
          font-size: 24px;
        }

        .features {
          padding: 40px 20px;
          background-color: #f0f0f0;
          text-align: center;
        }

        .features h2 {
          font-size: 36px;
          color: #ff5678;
        }

        .feature-container {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
        }

        .feature-box {
          background-color: white;
          border-radius: 10px;
          padding: 20px;
          width: 250px;
          margin: 20px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .feature-box h3 {
          font-size: 24px;
          color: #ff5678;
        }

        .feature-box ul {
          list-style-type: none;
          padding: 0;
        }

        .feature-box .btn {
          background-color: #ff5678;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          text-decoration: none;
          display: inline-block;
          margin-top: 10px;
        }

 
        .services {
          padding: 40px 20px;
            background-color: #f59bb7;

        }

        .service-container {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
        }

        .service-box {
          background-color: white;
          border-radius: 10px;
          padding: 20px;
          width: 220px;
          margin: 20px;
          text-align: center;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .service-box img {
          width: 100%;
          border-radius: 10px;
        }


        .testimonials {
          background-color: #f0f0f0;
          padding: 40px 20px;
          text-align: center;
        }

        .testimonial-container {
        
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }

        .testimonial-box {
      
          width: 300px;
          margin: 20px;
          background-color: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .pricing {
            background-color: #f59bb7;
          padding: 40px 20px;
        }

        .pricing-container {
       
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
        }

        .pricing-box {
          background-color: white;
          border-radius: 10px;
          padding: 20px;
          width: 220px;
          margin: 20px;
          text-align: center;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .pricing-box .price {
          font-size: 24px;
          color: #ff5678;
        }

     
        .contact {
          padding: 40px 20px;
          background-color: #f0f0f0;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .contact-form input,
        .contact-form textarea {
          width: 300px;
          padding: 10px;
          margin: 10px 0;
          border-radius: 5px;
          border: 1px solid #ccc;
        }

        .contact-form .btn {
          background-color: #ff5678;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
        }

        footer {
          text-align: center;
          padding: 20px;
          background-color: #f59bb7;
          color: white;
        }
      `}</style>
    </>
  );
}
