import React from "react";

function About() {
  return (
    <section id="about" className="pb-24 text-center md:text-left">
      <h2 className="my-10 text-4xl font-semibold">About Me</h2>
      <div className="max-w-3xl mx-auto text-neutral-400 text-base lg:text-lg font-light leading-relaxed">
        <p>
          I'm a self-taught{" "}
          <span className="text-white font-medium">Full Stack Developer</span>{" "}
          skilled in{" "}
          <span className="text-cyan-400">React, Node.js, AWS, PostgreSQL</span>
          , and <span className="text-green-400">MongoDB</span>. While I haven’t
          worked professionally yet, I’ve built multiple full-fledged projects
          that demonstrate my ability to design real-world architectures, write
          clean and maintainable code, and optimize for performance and
          scalability.
        </p>
        <br />
        <p>
          I’m a fast learner with a strong passion for web development and cloud
          technologies. I thrive in problem-solving environments and enjoy
          turning complex challenges into elegant solutions. I'm currently
          looking for an opportunity to contribute to a collaborative team,
          continue growing, and help build software that delivers real value and
          impact.
        </p>
      </div>
    </section>
  );
}

export default About;
