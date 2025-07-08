import React from "react";

function About() {
  return (
    <section id="about" className="pb-24 text-center md:text-left">
      <h2 className="my-10 text-4xl font-semibold">About Me</h2>
      <div className="max-w-3xl mx-auto text-neutral-400 text-base lg:text-lg font-light leading-relaxed">
        <p>
          I'm a self-taught{" "}
          <span className="text-white font-medium">Backend Developer</span>{" "}
          specializing in{" "}
          <span className="text-cyan-400">
            Node.js, PostgreSQL, Docker, and AWS
          </span>
          . I've built production-grade systems like video transcoders,
          real-time streaming platforms, and AI-powered resume tools that
          showcase my ability to architect, scale, and secure backend
          infrastructure.
        </p>
        <br />
        <p>
          I’m passionate about writing clean, maintainable code and solving
          real-world problems with cloud-native technologies. I enjoy building
          systems involving background workers, media pipelines, and API-first
          design. I'm currently seeking a backend role where I can contribute to
          impactful products and grow in a collaborative team environment.
        </p>
      </div>
    </section>
  );
}

export default About;
