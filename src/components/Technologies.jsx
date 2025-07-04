import { RiReactjsLine } from "react-icons/ri";
import { FaAws } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiExpress } from "react-icons/si";

function Technologies() {
  return (
    <div className="border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl font-semibold">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg">
          <RiReactjsLine className="text-7xl text-blue-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg">
          <FaAws className="text-7xl text-yellow-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg">
          <SiMongodb className="text-7xl text-green-500" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg">
          <FaNodeJs className="text-7xl text-green-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg">
          <BiLogoPostgresql className="text-7xl text-indigo-500" />
        </div>
      </div>
    </div>
  );
}

export default Technologies;
