import { RiReactjsLine } from "react-icons/ri";
import { FaAws } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiExpress } from "react-icons/si";

function Technologies() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <div className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg">
        <FaNodeJs className="text-7xl text-green-600" aria-label="Node.js" />
        <span className="mt-2 text-sm text-neutral-400">Node.js</span>
      </div>
      <div className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg">
        <SiExpress className="text-7xl text-gray-300" aria-label="Express.js" />
        <span className="mt-2 text-sm text-neutral-400">Express.js</span>
      </div>
      <div className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg">
        <BiLogoPostgresql
          className="text-7xl text-indigo-500"
          aria-label="PostgreSQL"
        />
        <span className="mt-2 text-sm text-neutral-400">PostgreSQL</span>
      </div>
      <div className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg">
        <SiMongodb className="text-7xl text-green-500" aria-label="MongoDB" />
        <span className="mt-2 text-sm text-neutral-400">MongoDB</span>
      </div>

      <div className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg">
        <FaAws className="text-7xl text-yellow-500" aria-label="AWS" />
        <span className="mt-2 text-sm text-neutral-400">AWS</span>
      </div>
      <div className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg">
        <RiReactjsLine className="text-7xl text-blue-400" aria-label="React" />
        <span className="mt-2 text-sm text-neutral-400">React</span>
      </div>
    </div>
  );
}

export default Technologies;
