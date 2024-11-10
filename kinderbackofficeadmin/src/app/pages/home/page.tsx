"use client"

export default function home() {
    return (
        <>
         
          <header>
            <div className="logo">Admin Kinder</div>
            <nav>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
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
    
      
          <section className="services" id="services">
            <h2>Our Services</h2>
            <div className="service-container">
              <div className="service-box">
                <img src="/icon-study.png" alt="Study & Game" />
                <h3>Study & Game</h3>
                <p>Develop programs that engage and educate children.</p>
                <a href="#more" className="btn">Read More</a>
              </div>
    
              <div className="service-box">
                <img src="/icon-programs.png" alt="Programs" />
                <h3>A to Z Programs</h3>
                <p>Offer comprehensive programs from early learning to advanced education.</p>
                <a href="#more" className="btn">Read More</a>
              </div>
    
              <div className="service-box">
                <img src="/icon-expert.png" alt="Expert Teacher" />
                <h3>Expert Teachers</h3>
                <p>Hire and manage the best childcare experts.</p>
                <a href="#more" className="btn">Read More</a>
              </div>
    
              <div className="service-box">
                <img src="/icon-health.png" alt="Mental Health" />
                <h3>Mental Health</h3>
                <p>Ensure mental well-being with our care and support systems.</p>
                <a href="#more" className="btn">Read More</a>
              </div>
            </div>
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
              background: url('/daycare-hero.jpg') no-repeat center center/cover;
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
    
         
            .services {
              padding: 40px 20px;
              background-color: #f0f0f0;
              text-align: center;
            }
    
            .services h2 {
              font-size: 36px;
              color: #ff5678;
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
              width: 250px;
              margin: 20px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              transition: transform 0.3s ease;
            }
    
            .service-box:hover {
              transform: translateY(-10px);
            }
    
            .service-box img {
              width: 50px;
              height: 50px;
            }
    
            .service-box h3 {
              font-size: 24px;
              margin: 15px 0;
            }
    
            .service-box p {
              font-size: 16px;
              color: #555;
            }
    
            .service-box .btn {
              display: inline-block;
              padding: 10px 20px;
              background-color: #ff5678;
              color: white;
              border: none;
              border-radius: 5px;
              cursor: pointer;
              text-decoration: none;
            }
    
            .service-box .btn:hover {
              background-color: #ff4166;
            }
    
    
            footer {
              background-color: #f59bb7;
              padding: 20px;
              text-align: center;
              color: white;
            }
          `}</style>
        </>
      );

}