import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import pattern from "../images/pattern.webp";
import team_1 from "../images/team-1.jpeg";
import team_2 from "../images/team-2.jpg";
import team_3 from "../images/team-3.jpeg";
import team_4 from "../images/team-4.jpeg";
import team_5 from "../images/team-5.jpeg";
import project_1 from "../images/project (1).jpeg";
import project_2 from "../images/project (2).jpeg";
import project_3 from "../images/project (3).jpeg";
import project_4 from "../images/project (4).jpeg";
import {
  FaCommentDots,
  FaFacebook,
  FaHome,
  FaInstagramSquare,
  FaTwitter,
} from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { AllContext } from "../context/AllContext";

const Profile = () => {

  let { isMobile } = useContext(AllContext);
  let allTeams = [
    { img: team_1, name: "Sophie B.", text: "Hi! I need more information..." },
    { img: team_2, name: "Alexander", text: "Awesome work, can you..." },
    { img: team_3, name: "Ivanna", text: "About files I can..." },
    { img: team_4, name: "Peterson", text: "Have a great afternoon..." },
    { img: team_5, name: "Bruce Mars", text: "Hi! I need more information..." },
  ];
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(true);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(true);
  const [six, setSix] = useState(false);
  let allProjects = [
    {
      projectImg: project_1,
      name: "Modern",
      desc: "As Uber works through a huge amount of internal management turmoil.",
    },
    {
      projectImg: project_2,
      name: "Scandinavian",
      desc: "Music is something that every person has his or her own specific opinion about.",
    },
    {
      projectImg: project_3,
      name: "Minimalist",
      desc: "Different people have different taste and , and various types of the music.",
    },
    {
      projectImg: project_4,
      name: "Gothic",
      desc: "Why would anyone pick blue over pink? Pink is obviously a better color.",
    },
  ];

  return (
    <section className="flex flex-col gap-5">
      <Navbar title={"Profile"} />
      <img src={pattern} alt="" className="w-full h-72 rounded-lg" />
      <section className="p-5 rounded-lg flex flex-col gap-8 mx-5 bg-white -mt-20 border-2 border-neutral-200">
        <div className={`flex justify-between items-center ${isMobile&&"flex-col gap-3"}`}>
          <div className={`flex items-center gap-5`}>
            <img
              src={team_5}
              alt=""
              className={`w-20 h-20 rounded-lg shadow-lg`}
            />
            <p className="text-neutral-500">
              <h2 className={`text-black font-bold text-xl`}>Richard Davis</h2>
              <p>CEO / Co-Founder</p>
            </p>
          </div>
          <ul className={`p-1 bg-neutral-200 rounded-lg flex gap-1 items-center cursor-pointer`}>
            <li className={`flex items-center gap-2 bg-white rounded-lg py-1 ${isMobile?"px-3":"px-5"}`}>
              <FaHome />
              App
            </li>
            <li className={`flex items-center gap-2  rounded-lg py-1 ${isMobile?"px-3":"px-5"}`}>
              <FaCommentDots />
              Message
            </li>
            <li className={`flex items-center gap-2  rounded-lg py-1 ${isMobile?"px-3":"px-5"}`}>
              <FaGear />
              Settings
            </li>
          </ul>
        </div>

        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ul className="flex flex-col gap-3 text-neutral-500">
            <h1 className="font-semibold text-xl text-black">
              Platform Settings
            </h1>
            <p className="font-semibold">Account</p>
            <li
              className="flex gap-3 items-center cursor-pointer"
              onClick={() => setOne(!one)}
            >
              <input
                type="range"
                className="w-8"
                style={{ accentColor: "black" }}
                value={one ? 1 : 0}
                min={0}
                max={1}
              />
              Email me when someone follows me
            </li>
            <li
              className="flex gap-3 items-center cursor-pointer"
              onClick={() => setTwo(!two)}
            >
              <input
                type="range"
                className="w-8"
                style={{ accentColor: "black" }}
                value={two ? 1 : 0}
                min={0}
                max={1}
              />
              Email me when someone answer on my post
            </li>
            <li
              className="flex gap-3 items-center cursor-pointer"
              onClick={() => setThree(!three)}
            >
              <input
                type="range"
                className="w-8"
                style={{ accentColor: "black" }}
                value={three ? 1 : 0}
                min={0}
                max={1}
              />
              Email me when someone mention me
            </li>
            <p className="mt-3 font-semibold">Application</p>
            <li
              className="flex gap-3 items-center cursor-pointer"
              onClick={() => setFour(!four)}
            >
              <input
                type="range"
                className="w-8"
                style={{ accentColor: "black" }}
                value={four ? 1 : 0}
                min={0}
                max={1}
              />
              New launches and projects
            </li>
            <li
              className="flex gap-3 items-center cursor-pointer"
              onClick={() => setFive(!five)}
            >
              <input
                type="range"
                className="w-8"
                style={{ accentColor: "black" }}
                value={five ? 1 : 0}
                min={0}
                max={1}
              />
              Monthly product updates
            </li>
            <li
              className="flex gap-3 items-center cursor-pointer"
              onClick={() => setSix(!six)}
            >
              <input
                type="range"
                className="w-8"
                style={{ accentColor: "black" }}
                value={six ? 1 : 0}
                min={0}
                max={1}
              />
              Subscribe to new newsletter
            </li>
          </ul>
          <ul className="flex flex-col gap-3 text-neutral-500">
            <h1 className="font-semibold text-xl text-black">
              Profile Information
            </h1>
            <p className="">
              Hi, I'm Alec Thompson, Decisions: If you can't decide, the answer
              is no. If two equally difficult paths, choose the one more painful
              in the short term (pain avoidance is creating an illusion of
              equality).
            </p>
            <hr className="my-3" />
            <li>
              {" "}
              <span className="text-black font-semibold inline-block w-24">
                first name:
              </span>{" "}
              Alec M. Thompson
            </li>
            <li>
              {" "}
              <span className="text-black font-semibold inline-block w-24">
                mobile:
              </span>{" "}
              (44) 123 1234 123
            </li>
            <li>
              {" "}
              <span className="text-black font-semibold inline-block w-24">
                email:
              </span>{" "}
              alecthompson@mail.com
            </li>
            <li>
              {" "}
              <span className="text-black font-semibold inline-block w-24">
                location:
              </span>{" "}
              USA
            </li>
            <li className="flex items-center">
              <span className="text-black font-semibold inline-block w-24">
                social:
              </span>
              <div className="inline-flex items-center gap-3 text-xl">
                <FaFacebook className="text-blue-600 cursor-pointer duration-300 hover:scale-110" />
                <FaTwitter className="text-blue-400 cursor-pointer duration-300 hover:scale-110" />
                <FaInstagramSquare className="text-fuchsia-600 cursor-pointer duration-300 hover:scale-110" />
              </div>
            </li>
          </ul>
          <ul className="flex flex-col gap-3 text-neutral-500">
            <h1 className="font-semibold text-xl text-black">
              Platform Settings
            </h1>
            {allTeams.map((team, index) => (
              <li key={index + 1255} className="flex items-center gap-3">
                <img
                  src={team.img}
                  alt=""
                  className="rounded-lg w-14 h-14 shadow-lg"
                />
                <div className="flex-1 ">
                  <h3 className="text-black text-base font-semibold">
                    {team.name}
                  </h3>
                  <p className="text-sm ">{team.text}</p>
                </div>
                <button className="px-3 py-1 rounded-lg text-base font-semibold duration-300 hover:bg-neutral-200">
                  Reply
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-neutral-500 pb-5">
          <h1 className="font-semibold text-xl text-black">Projects</h1>
          <p className="mt-1 mb-5">Architects design houses</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {allProjects.map((project, index) => (
              <li key={index + 595} className="flex flex-col gap-2">
                <img
                  src={project.projectImg}
                  alt=""
                  className="w-full rounded-lg shadow-lg"
                />
                <p>project #{index + 1}</p>
                <h2 className="font-semibold text-black text-lg">
                  {project.name}
                </h2>
                <p className="">{project.desc}</p>
                <div className="flex justify-between items-center">
                  <button className="border-2 border-neutral-200 rounded-lg px-3 py-1 duration-300 hover:text-black hover:border-black hover:shadow-lg">
                    view project
                  </button>
                  <div className="flex items-center">
                    <img
                      src={team_1}
                      alt=""
                      className="rounded-full w-8 -mx-1 border-2 border-white"
                    />
                    <img
                      src={team_2}
                      alt=""
                      className="rounded-full w-8 -mx-1 border-2 border-white"
                    />
                    <img
                      src={team_3}
                      alt=""
                      className="rounded-full w-8 -mx-1 border-2 border-white"
                    />
                    <img
                      src={team_4}
                      alt=""
                      className="rounded-full w-8 -mx-1 border-2 border-white"
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </section>
  );
};

export default Profile;
