import "./index.css";

const skills = [
    { name: "Python", icon: "🐍" },
    { name: "JavaScript", icon: "JS" },
    { name: "TypeScript", icon: "TS" },
    { name: "Angular", icon: "A" },
    { name: "RxJS", icon: "Rx" },
    { name: "NgRx", icon: "Ng" },
    { name: "React JS", icon: "⚛" },
    { name: "HTML", icon: "HTML" },
    { name: "CSS", icon: "CSS" },
    { name: "Tailwind CSS", icon: "TW" },
    { name: "SQL", icon: "SQL" },
    { name: "Pandas", icon: "PD" },
    { name: "NumPy", icon: "NP" },
    { name: "Scikit-learn", icon: "SK" },
    { name: "Git", icon: "Git" },
    { name: "GitHub", icon: "GH" },
];

const tools = [
    { name: "VS Code", icon: "VS" },
    { name: "Jupyter Notebook", icon: "JN" },
    { name: "Google Colab", icon: "GC" },
    { name: "Git", icon: "Git" },
    { name: "GitHub", icon: "GH" },
    { name: "SQL Server", icon: "SS" },
    { name: "Power BI", icon: "BI" },
    { name: "Postman", icon: "PM" },
    { name: "MySQL Workbench", icon: "MW" },
];


const Skills = () => {
    return (
        <section className="skills" id="skills">
            <div className="skills-heading">
                <span>Professional</span>
                <strong>Skillset</strong>
            </div>


            <div className="skills-list">

                {skills.map((skill, index) => (
                    <div
                        className="skill-pill"
                        key={index}
                    >
                        <span className="skill-icon">
                            {skill.icon}
                        </span>

                        <span className="skill-name">
                            {skill.name}
                        </span>
                    </div>
                ))}

            </div>
            <div className="tools-heading">
                <strong>Tools</strong>
                <span>I use</span>
            </div>


            <div className="tools-list">

                {tools.map((tool, index) => (
                    <div
                        className="skill-pill tool-pill"
                        key={index}
                    >
                        <span className="skill-icon">
                            {tool.icon}
                        </span>

                        <span className="skill-name">
                            {tool.name}
                        </span>
                    </div>
                ))}

            </div>

        </section>
    );
};

export default Skills;
