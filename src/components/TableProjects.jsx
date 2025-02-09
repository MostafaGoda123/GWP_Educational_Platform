import React, { useContext } from "react";
import { AllContext } from "../context/AllContext";
import team_1 from "../images/team-1.jpeg";
import team_2 from "../images/team-2.jpg";
import team_3 from "../images/team-3.jpeg";
import team_4 from "../images/team-4.jpeg";
import team_5 from "../images/team-5.jpeg";
import xd from "../images/logo-xd.svg";
import atlassian from "../images/logo-atlassian.svg";
import slack from "../images/logo-slack.svg";
import spotify from "../images/logo-spotify.svg";
import jira from "../images/logo-jira.svg";
import invision from "../images/logo-invision.svg";
import { IoTime } from "react-icons/io5";

const TableProjects = ({ notDashboard }) => {
  let { isMobile } = useContext(AllContext);
  let allProjects = [
    {
      companiesImage: xd,
      companiesName: "Material XD Version",
      members: [team_1, team_2, team_3, team_4],
      budget: "$14,000",
      completion: 60,
    },
    {
      companiesImage: atlassian,
      companiesName: "Add Progress Track",
      members: [team_2, team_5],
      budget: "$3,000",
      completion: 10,
    },
    {
      companiesImage: slack,
      companiesName: "Fix Platform Errors",
      members: [team_5, team_1],
      budget: "Not set",
      completion: 100,
    },
    {
      companiesImage: spotify,
      companiesName: "Launch our Mobile App",
      members: [team_4, team_3, team_2, team_1],
      budget: "$20,500",
      completion: 100,
    },
    {
      companiesImage: jira,
      companiesName: "Add the New Pricing Page",
      members: [team_5],
      budget: "$500",
      completion: 25,
    },
    {
      companiesImage: invision,
      companiesName: "Redesign New Online Shop",
      members: [team_1, team_4],
      budget: "$2,000",
      completion: 40,
    },
  ];

  return (
    <section
      className={`overflow-x-auto text-nowrap ${notDashboard && "pt-20 shadow-lg"} p-5 ${
        isMobile && "text-sm"
      } bg-white rounded-lg border-2 border-neutral-200 text-neutral-500`}
    >
      {!notDashboard && (
        <>
          <h1 className="font-semibold text-black text-xl">Projects</h1>
          <p className="flex items-center gap-1 mb-5">
            <IoTime />
            30 done this month
          </p>
        </>
      )}
      <table className="w-full">
        <thead>
          <tr className="border-b border-b-neutral-200 font-semibold">
            <td className="pb-4">Companies</td>
            <td>Members</td>
            <td>Budget</td>
            <td>Completion</td>
          </tr>
        </thead>
        <tbody>
          {allProjects.map((project, index) => (
            <tr
              key={index + 652}
              className={`border-b border-b-neutral-200 ${
                allProjects.length === index + 1 && "border-none"
              }`}
            >
              <td>
                <div className={`flex items-center gap-2 text-black font-semibold ${notDashboard?"my-4":"my-2"}`}>
                  <img
                    src={project.companiesImage}
                    alt=""
                    className="w-10 h-10"
                  />
                  <p>{project.companiesName}</p>
                </div>
              </td>
              <td>
                <ul className={`flex ${isMobile && "w-32 ps-10"}`}>
                  {project.members.map((m, index) => (
                    <img
                      key={index + 1212}
                      src={m}
                      alt=""
                      className="w-7 h-7 border-2 -mx-1 border-white rounded-full"
                    />
                  ))}
                </ul>
              </td>
              <td>
                <p className="font-semibold">{project.budget}</p>
              </td>
              <td>
                <div>
                  <p>{project.completion}%</p>
                  <p className={`mt-1 w-28 h-1 rounded-lg bg-neutral-200`}>
                    <span
                      className={`${
                        project.completion === 100
                          ? "bg-green-700"
                          : "bg-neutral-700"
                      } block rounded-lg h-full`}
                      style={{ width: `${project.completion}%` }}
                    ></span>
                  </p>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TableProjects;
