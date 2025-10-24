import { useState } from "react";

export default function Projects() {
  const allProjects = [
    { id:1, name:"Portfolio", desc:"React Portfolio", stack:["React","CSS"], featured:true },
    { id:2, name:"Todo App", desc:"Task manager", stack:["JS","HTML"], featured:false }
  ];
  const [filter, setFilter] = useState("All");
  const projects = filter==="All" ? allProjects : allProjects.filter(p => p.stack.includes(filter));

  return (
    <section id="projects" style={{ padding: "2rem" }}>
      <h2>Projects</h2>
      <div>
        {["All","React","CSS","JS","HTML"].map(cat => (
          <button key={cat} onClick={() => setFilter(cat)}>{cat}</button>
        ))}
      </div>

      <div>
        {projects.map(p => (
          <div key={p.id} style={{ border:"1px solid #ddd", margin:"1rem", padding:"1rem" }}>
            <h3>{p.name} {p.featured && "🌟"}</h3>
            <p>{p.desc}</p>
            <p>{p.stack.join(", ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
