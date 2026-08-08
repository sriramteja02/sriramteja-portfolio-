import "./index.css";

const Education = () => {
    return (
        <section className="education" id="education">
            <div className="section-title">
                <span>Education</span>
            </div>
            <div className="education-container">
                <div className="education-image">
                    <div className="education-art">
                        <div className="book">📚</div>
                        <div className="cap">🎓</div>
                        <div className="code-box">&lt;/&gt;</div>
                    </div>
                </div>
                <div className="education-list">
                    <div className="education-card">
                        <div className="education-icon">🎓</div>
                        <div className="education-content">
                            <span className="education-year">2022 - 2026</span>
                            <h2>BACHELOR OF TECHNOLOGY</h2>
                            <p>Computer Science and Engineering</p>
                            <p className="college">CMR INSTITUTE OF TECHNOLOGY</p>
                        </div>
                    </div>
                    <div className="education-card">
                        <div className="education-icon">📖</div>
                        <div className="education-content">
                            <span className="education-year">2019 - 2021</span>
                            <h2>INTERMEDIATE</h2>
                            <p>Mathematics, Physics and Chemistry</p>
                            <p className="college">ALPHORES JUNIOR COLLEGE</p>
                        </div>
                    </div>
                    <div className="education-card">
                        <div className="education-icon">🏫</div>
                        <div className="education-content">
                            <span className="education-year">2018 - 2019</span>
                            <h2>SECONDARY SCHOOL</h2>
                            <p>Secondary School Education</p>
                            <p className="college">ALPHORES SCHOOL OF GEN-NEXT</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
