'use client'

export default function Signup() {
  return (
    <div className="pagesignup"> 
    <div className="container">
      <div className="form-box">
        <h2>Creation compte </h2>
        <form>
          <input type="text" placeholder="Nom" required />
          <input type="text" placeholder="Prénom" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Mot de passe" required />
          <button type="submit" className="btn">S'inscrire</button>
        </form>
        <p>Vous avez déjà un compte? <a href="#login">Connectez-vous</a></p>
      </div>
</div>
      <style jsx>{`
        .pagesignup {
          font-family: 'Comic Sans MS', cursive, sans-serif;
          margin: 0;
          padding: 0;
          background: linear-gradient(135deg, #ff78a0, #78c2ff, #ffdb78);
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .form-box {
          padding: 40px;
          background-color: white;
          border-radius: 20px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          text-align: center;
        }

        h2 {
          color: #ff78a0;
          margin-bottom: 20px;
          font-size: 2em;
        }

        input {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border: 2px solid #ff78a0;
          border-radius: 5px;
          font-size: 1.1em;
        }

        button.btn {
          width: 100%;
          padding: 10px;
          background-color: #ff78a0;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1.1em;
          transition: background-color 0.3s;
        }

        button.btn:hover {
          background-color: #ff4c4c;
        }

        p {
          margin-top: 15px;
        }

        a {
          color: #ff78a0;
          text-decoration: none;
          font-weight: bold;
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
