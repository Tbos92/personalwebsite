import Container from "react-bootstrap/Container";

const Resume = () => {
  return (
    <Container>
      <header className="text-center mb-4">
        <h2>Tyler Bos</h2>
        <h3 className="text-muted">Software Engineer</h3>
      </header>

      <section className="experience">
        <h4 className="mb-3">Relevant Work &amp; Project Experience</h4>
        <div className="job">
          <div className="d-flex align-items-center">
            <h5 className="me-3">Career Services Developer</h5>
            <h6 className=" ms-auto date-range">11/24 - Present</h6>
          </div>
          <h6>Ross Education - Hybrid Grand Rapids, MI</h6>
          <ul className="text-justify">
            <li>
              Collaborated with Lead Developer to architect and build a custom
              internal CRM system, significantly enhancing operational workflows
              in graduate tracking, employer outreach, and compliance reporting.
            </li>
            <li>
              Designed SQL database schema and developed secure backend logic in
              PHP for role-based access and data integrity.
            </li>
            <li>
              Create responsive front-end features using HTML, CSS, JavaScript,
              and jQuery for a streamlined user experience.
            </li>
            <li>
              Automate outreach campaigns and job board aggregation to boost
              engagement and communication efficiency.
            </li>
            <li>
              Provide technical support for career services initiatives,
              leveraging CRM insights to maintain high graduate employment
              outcomes.
            </li>
            <li>
              Cultivate and maintain strategic partnerships with employers to
              drive placement pipelines and support continued success.
            </li>
          </ul>
        </div>
        <div className="project">
          <h5 className="me-3">Project 1 Name</h5>
          <h6>List of Techstack goes here maybe?</h6>
          <ul className="text-justify">
            <li>
              A brief description of the project goes here. Not sure I want this
              to be a ul. Probably better just as a p tag.
            </li>
          </ul>
        </div>
        <div className="project">
          <h5 className="me-3">Project 2 Name</h5>
          <h6>List of Techstack goes here maybe?</h6>
          <ul className="text-justify">
            <li>
              A brief description of the project goes here. Not sure I want this
              to be a ul. Probably better just as a p tag.
            </li>
          </ul>
        </div>
        <div className="job">
          <div className="d-flex align-items-center">
            <h5 className="me-3">Technical Content Editor</h5>
            <h6 className=" ms-auto date-range">11/2018 - 1/2020-</h6>
          </div>
          <h6>Kodeco - Remote Chicago, IL</h6>
          <ul className="text-justify">
            <li>
              Edited and refined technical tutorials focused on mobile app
              development, ensuring clarity, accuracy, and alignment with
              developer audiences and brand standards.
            </li>
            <li>
              Collaborated cross-functionally with engineers, writers, and
              editors to produce high-quality content on iOS, Android, and
              cross-platform technologies.
            </li>
            <li>
              Applied Agile methodologies to manage editorial workflows, iterate
              quickly based on feedback, and meet fast-paced publication
              deadlines.
            </li>
            <li>
              Developed a strong understanding of mobile development concepts
              and frameworks while facilitating the communication of complex
              topics to diverse audiences.
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-4">
        <h4 className="mb-3">Education</h4>
        <div className="d-flex align-items-center">
          <h5 className="me-3">Fullstack Academy Web Development Bootcamp</h5>
          <h6 className="ms-auto date-range">2025</h6>
        </div>
        <div className="d-flex align-items-center">
          <h5 className="me-3">Northwestern University</h5>
          <h6 className="ms-auto date-range">2021</h6>
        </div>
        <div className="d-flex align-items-center">
          <h5 className="me-3">University of Chicago</h5>
          <h6 className="ms-auto date-range">2016</h6>
        </div>
      </section>
    </Container>
  );
};

export default Resume;
