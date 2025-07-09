function Contact() {
  return (
    <div className="pb-24 text-center" id="contact">
      <h2 className="my-20 text-4xl font-semibold">Contact Me</h2>
      <p className="text-neutral-300 mb-4 text-lg">
        Feel free to reach out via email
      </p>
      <div className="space-y-2 text-xl text-neutral-200">
        <p>
          <a
            href="mailto:burhanweb11@gmail.com"
            className="text-cyan-400 hover:underline"
          >
            burhanweb111@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
