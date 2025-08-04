import React from "react";

function About() {
  return (
    <section id="about" className="pb-24 text-center md:text-left">
      <h2 className="my-10 text-4xl font-semibold">About Me</h2>
      <div className="max-w-3xl mx-auto text-neutral-400 text-base lg:text-lg font-light leading-relaxed">
        <p>
          I’m a self-taught{" "}
          <span className="text-white font-medium">Full Stack Developer</span>{" "}
          specializing in{" "}
          <span className="text-cyan-400">
            Node.js, Express.js, PostgreSQL, MongoDB, Docker, AWS, and React
          </span>
          . I’ve architected RESTful APIs, real-time streaming platforms, and
          AI-powered applications, leveraging secure, scalable, cloud-native
          infrastructure.
        </p>
        <br />
        <p>
          Passionate about writing clean, maintainable code and solving
          real-world problems, I implement robust DevOps practices and enjoy
          building systems with background workers, media pipelines, and an
          API-first approach. I’m looking for a backend-focused role where I can
          have an impact and continue to grow within a collaborative engineering
          team.
        </p>
      </div>
    </section>
  );
}

export default About;
