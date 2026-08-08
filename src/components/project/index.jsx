import "./index.css";
import diverImage from "../../assets/diver.jpg";
import sudokuImage from "../../assets/sudoko.png";
import salesImage from "../../assets/sales.png";
import hrImage from "../../assets/hr.png";
import emploImage from "../../assets/emplo.jpg";
import expenseImage from "../../assets/expence.jpg";

const projects = [
    {
        id: 1,
        title: "Drive Retention Analysis",
        description:
            "Analyzed driver-level data to study performance and predict driver retention using data cleaning, exploratory analysis, and machine learning.",
        technologies: ["Python", "Pandas", "Scikit-learn"],
        image: diverImage,
        github: "https://github.com/yourusername/drive-retention-analysis",
        live: "#",
    },

    {
        id: 2,
        title: "Sudoku Game",
        description:
            "A web-based Sudoku game built with HTML, CSS, and JavaScript. Includes a 9x9 grid, dynamic puzzle generation, and validation.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: sudokuImage,
        github: "https://github.com/yourusername/sudoku-game",
        live: "#",
    },

    {
        id: 3,
        title: "Sales Dashboard",
        description:
            "Analyzed 9,000+ sales records to identify trends and product performance. Cleaned data using Python and created an interactive Power BI dashboard.",
        technologies: ["Python", "Pandas", "Power BI"],
        image: salesImage,
        github: "https://github.com/yourusername/sales-dashboard",
        live: "#",
    },

    {
        id: 4,
        title: "HR Attrition",
        description:
            "Analyzed employee data to study attrition trends across departments, experience levels, and salary bands using SQL and data analysis.",
        technologies: ["SQL", "Python", "Data Analysis"],
        image: hrImage,
        github: "https://github.com/yourusername/HR-Attrition",
        live: "#",
    },

    {
        id: 5,
        title: "Expense Tracker System",
        description:
            "Developed a personal expense tracking application to simplify daily expense recording and improve spending awareness.",
        technologies: ["Python", "JavaScript", "JSON"],
        image: expenseImage,
        github: "https://github.com/yourusername/Expense-Tracker-System",
        live: "#",
    },

    {   
        id: 6,
        title: "Attrition Prediction System",
        description:
            "Built a machine learning web application for predicting employee attrition using HR data with Random Forest and Gradient Boosting models.",
        technologies: ["Python", "Flask", "Machine Learning"],
        image: emploImage,
        github: "https://github.com/yourusername/Attrition-prediction-system-ml",
        live: "#",
    },
];


const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="projects-heading">
                <span>My Projects</span>
            </div>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <div className="project-image">

                            {project.image ? (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                />
                            ) : (
                                <div className="image-placeholder">
                                    {project.title.charAt(0)}
                                </div>
                            )}

                        </div>
                        <div className="project-content">

                            <h2>
                                {project.title}
                            </h2>

                            <p>
                                {project.description}
                            </p>
                            <div className="project-tech">

                                {project.technologies.map((tech, index) => (
                                    <span key={index}>
                                        {tech}
                                    </span>
                                ))}

                            </div>

                        </div>
                        <div className="project-buttons">

                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="github-btn"
                            >
                                GitHub
                            </a>

                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="live-btn"
                            >
                                Live Preview
                            </a>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
};

export default Projects;