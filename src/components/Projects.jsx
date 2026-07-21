function Projects() {
  return (
    <section  id="projects"className="projects">

      <h2>مشاريعي</h2>

      <div className="projects-container">


        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>
            موقع شخصي تم تطويره باستخدام React.
          </p>

          <button>عرض المشروع</button>
        </div>

        <div className="project-card">
          <h3>قريباً...</h3>
          <p>
            سيتم إضافة المزيد من المشاريع قريباً.
          </p>

          <button>Coming Soon</button>
        </div>

      </div>

    </section>
  );
}

export default Projects;