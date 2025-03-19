import React from "react";

export default function Projects() {
  // Dummy projects data.
  const projects = [
    { id: 1, name: "Project Alpha", progress: 70, team: ["Alice", "Bob"] },
    { id: 2, name: "Project Beta", progress: 45, team: ["Charlie", "David"] },
  ];

  return (
    <div className="p-6 bg-[#F5F5F5] min-h-screen">
      <h1 className="text-2xl font-bold text-[#333333] mb-4">Projects</h1>
      <button className="mb-6 py-2 px-4 bg-[#6C9BCF] text-white rounded hover:bg-blue-500">
        Create Project
      </button>
      <div className="grid grid-cols-1 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold text-[#333333]">
              {project.name}
            </h2>
            <div className="mt-2">
              <div className="w-full bg-[#F5F5F5] rounded h-4">
                <div
                  className="h-4 rounded"
                  style={{
                    width: `${project.progress}%`,
                    backgroundColor: "#6C9BCF",
                  }}
                ></div>
              </div>
              <p className="text-sm text-[#666666] mt-1">
                Team: {project.team.join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
