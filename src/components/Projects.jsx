import resumeImage from "../assets/images/ai-resume.png";
import goliveImage from "../assets/images/golive.png";

function Projects() {
  const projects = [
    {
      title: "Resume Builder",
      description: "An AI-powered resume builder, PDF export,",
      tech: ["React", "Node.js", "Material UI", "Gemin AI"],
      image: resumeImage,
      link: "https://ai-resume-dev.onrender.com/",
      github: "https://github.com/burhanWeb/ai-resume",
    },
    {
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce app with Razorpay payments, filtering, cart, and order management.",
      tech: ["React", "Redux Toolkit", "Node.js", "MongoDB", "Razorpay"],
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      link: "#",
      github: "https://github.com/burhanWeb/e-commerce-platform",
    },
    {
      title: "Video Transcoder",
      description:
        "Docker-based video transcoding pipeline with AWS S3, SQS, FFmpeg, and PostgreSQL.",
      tech: ["Node.js", "React", "AWS", "Docker", "FFmpeg", "PostgreSQL"],
      image:
        "https://images.unsplash.com/photo-1581092795360-7a4c4ab6c52b?auto=format&fit=crop&w=800&q=80",
      link: "#",
      github: "https://github.com/burhanWeb/Vidtrans",
    },
    {
      title: "Golive",
      description:
        "A scalable live streaming app using Node.js, React, AWS, Docker, FFmpeg, and NGINX. It supports RTMP streaming with NGINX handling reverse proxy and load balancing for smooth, reliable broadcasts ",
      tech: ["Node.js", "React", "AWS", "Docker", "FFmpeg"],
      image: goliveImage,
      link: "https://golive.strangled.net/",
      github: "https://github.com/burhanWeb/golive",
    },
  ];

  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl font-semibold">Projects</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-2xl border border-neutral-700 overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="mb-3 text-neutral-300">{project.description}</p>
              <p className="mb-3 text-sm text-neutral-400">
                {project.tech.join(" • ")}
              </p>
              <div className="flex gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
