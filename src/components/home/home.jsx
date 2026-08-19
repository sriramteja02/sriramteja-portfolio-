import "./home.css";
import { Link } from "react-router-dom";
import resume from "../../assets/Sriram_Teja_Resume1.pdf";

const Home = () => {
  return (
    <main className="home">
      <div className="home-grid"></div>

      <section className="hero">
        <div className="hero-content">
          <h1>
            Hello,
            <br />
            This is <span className="pink">SRI RAMTEJA</span>, I'm a
            <br />

            <span className="green">Python</span>
            <span className="green">Developer </span>
            <span className="text-black">and</span>
            <br />

            <span className="green">Frontend</span>
            <span className="green">Developer</span>.
          </h1>

          <div className="hero-buttons">
            <Link to="/contact" className="contact-btn">
              CONTACT ME <span>👤</span>
            </Link>

            <a
              href={resume}
              download="Sriram_Teja_Resume.pdf"
              className="resume-btn"
            >
              GET RESUME <span>↓</span>
            </a>
          </div>
        </div>

        <div>
          <div className="code-window">
            <div className="window-header">
              <span className="window-dot red"></span>
              <span className="window-dot yellow"></span>
              <span className="window-dot green-dot"></span>
            </div>

            <div className="code-content">
              <pre>
                <code>
                  <span className="code-pink">class</span>{" "}
                  <span className="code-green">SriramTeja</span>
                  <span className="code-symbol">:</span>
                  {"\n\n"}

                  {"    "}
                  <span className="code-white">name</span>
                  <span className="code-symbol"> = </span>
                  <span className="code-yellow">"Sriram Teja"</span>
                  {"\n"}

                  {"    "}
                  <span className="code-white">roles</span>
                  <span className="code-symbol"> = [</span>
                  <span className="code-yellow">"Python Developer"</span>
                  <span className="code-symbol">, </span>
                  <span className="code-yellow">"Frontend Developer"</span>
                  <span className="code-symbol">]</span>
                  {"\n"}

                  {"    "}
                  <span className="code-white">frontend</span>
                  <span className="code-symbol"> = [</span>
                  <span className="code-yellow">"JavaScript"</span>
                  <span className="code-symbol">, </span>
                  <span className="code-yellow">"React JS"</span>
                  <span className="code-symbol">, </span>
                  <span className="code-yellow">"HTML5"</span>
                  <span className="code-symbol">, </span>
                  <span className="code-yellow">"CSS"</span>
                  <span className="code-symbol">, </span>
                  <span className="code-yellow">"Tailwind CSS"</span>
                  <span className="code-symbol">]</span>
                  {"\n"}

                  {"    "}
                  <span className="code-white">backend_and_data</span>
                  <span className="code-symbol"> = [</span>
                  <span className="code-yellow">"Python"</span>
                  <span className="code-symbol">, </span>
                  <span className="code-yellow">"SQL"</span>
                  <span className="code-symbol">, </span>
                  <span className="code-yellow">"Pandas"</span>
                  <span className="code-symbol">, </span>
                  <span className="code-yellow">"NumPy"</span>
                  <span className="code-symbol">, </span>
                  <span className="code-yellow">"Scikit-learn"</span>
                  <span className="code-symbol">]</span>
                  {"\n"}

                  {"    "}
                  <span className="code-white">strengths</span>
                  <span className="code-symbol"> = [</span>
                  <span className="code-yellow">"DSA"</span>
                  <span className="code-symbol">, </span>
                  <span className="code-yellow">"OOP"</span>
                  <span className="code-symbol">, </span>
                  <span className="code-yellow">"Problem Solving"</span>
                  <span className="code-symbol">]</span>
                  {"\n"}

                  {"    "}
                  <span className="code-white">tools</span>
                  <span className="code-symbol"> = [</span>
                  <span className="code-yellow">"Git"</span>
                  <span className="code-symbol">, </span>
                  <span className="code-yellow">"GitHub"</span>
                  <span className="code-symbol">, </span>
                  <span className="code-yellow">"Jupyter Notebook"</span>
                  <span className="code-symbol">, </span>
                  <span className="code-yellow">"VS Code"</span>
                  <span className="code-symbol">]</span>
                  {"\n\n"}

                  {"    "}
                  <span className="code-pink">def</span>{" "}
                  <span className="code-green">keep_learning</span>
                  <span className="code-symbol">(self): </span>
                  <span className="code-pink">return</span>{" "}
                  <span className="code-orange">True</span>
                  {"\n"}

                  {"    "}
                  <span className="code-pink">def</span>{" "}
                  <span className="code-green">build_projects</span>
                  <span className="code-symbol">(self): </span>
                  <span className="code-pink">return</span>{" "}
                  <span className="code-orange">True</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
