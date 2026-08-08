import "./abt.css";
import suitPic from "../../assets/suit-pic.jpeg";

const skills = [
    "Python",
    "JavaScript",
    "Java",
    "HTML",
    "CSS",
    "SQL",
];

export default function About() {
    return (
        <section className="about" id="about">
            <div className="about-container">
                <div className="about-content">
                    <h1>
                        LET ME <span>INTRODUCE</span> MYSELF
                    </h1>
                    <p>
                        I’m a Computer Science Engineering student and
                        aspiring <span className="highlight">
                            Software Engineer and Frontend Developer
                        </span>, with a strong foundation in programming,
                        problem-solving, and software development. I enjoy
                        turning ideas into practical, user-friendly
                        applications.
                    </p>
                    <p>
                        I work with {skills.map((skill, index) => (
                            <span className="highlight" key={skill}>
                                {skill}
                                {index !== skills.length - 1 && ", "}
                            </span>
                        ))}. On the frontend, I use <span className="highlight">
                            React.js
                        </span> to build responsive and interactive web applications.
                    </p>
                    <p>
                        My interests include <span className="highlight">
                            Frontend Development
                        </span>, <span className="highlight">
                            Web Applications
                        </span>, <span className="highlight">
                            Backend Development
                        </span>, and <span className="highlight">
                            Machine Learning
                        </span>. I enjoy working across the stack and understanding
                        how different parts of a software application work
                        together.
                    </p>
                    <p>
                        I have built projects using <span className="highlight">
                            React.js
                        </span>, <span className="highlight">
                            Python
                        </span>, <span className="highlight">
                            Flask
                        </span>, <span className="highlight">
                            FastAPI
                        </span>, and <span className="highlight">
                            Scikit-learn
                        </span>, while using <span className="highlight">
                            Git
                        </span>, <span className="highlight">
                            GitHub
                        </span>, and <span className="highlight">
                            VS Code
                        </span> throughout my development work.
                    </p>
                </div>
                <div className="about-image">
                    <div className="image-wrapper">
                        <img src={suitPic} alt="Sri Ram" />
                    </div>
                </div>
            </div>
        </section>
    );
}
