import {
  ExternalLink,
  GitBranch,
  Layers,
} from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with user authentication, product management, shopping cart functionality and order management.",
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "PostgreSQL",
    ],
    github: "https://github.com/yourusername/ecommerce",
    live: "https://your-project.vercel.app",
    featured: true,
  },
  {
    title: "Task Management Application",
    description:
      "A full-stack task management application where users can create, update, organize and track their tasks.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
    ],
    github: "https://github.com/yourusername/task-manager",
    live: "https://your-task-manager.vercel.app",
    featured: false,
  },
  {
    title: "Student Management System",
    description:
      "A web application for managing student records with CRUD operations, REST APIs and database integration.",
    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
      "REST API",
    ],
    github: "https://github.com/yourusername/student-management",
    live: "",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-12">
          <p className="font-mono text-sm text-green-400">
            05 / PROJECTS
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Things I’ve built.
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-500">
            A selection of projects where I have applied my development
            skills to solve practical problems.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group flex h-full flex-col rounded-xl border bg-zinc-950 p-6 transition-colors ${
                project.featured
                  ? "border-green-900/60"
                  : "border-zinc-800"
              } hover:border-zinc-700`}
            >
              {/* Project header */}
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
                  <Layers
                    size={20}
                    className="text-green-400"
                  />
                </div>

                {project.featured && (
                  <span className="rounded-full border border-green-900/60 bg-green-950/30 px-3 py-1 font-mono text-xs text-green-400">
                    Featured
                  </span>
                )}
              </div>

              {/* Project information */}
              <div className="mt-6 flex-1">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1.5 font-mono text-xs text-zinc-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project links */}
              <div className="mt-6 flex items-center gap-4 border-t border-zinc-800 pt-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  <GitBranch size={17} />
                  GitHub
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-green-400"
                  >
                    <ExternalLink size={17} />
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}