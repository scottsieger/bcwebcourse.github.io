import Project from './Projects.js';

export default function ProjectPage(data) {
    
    document.querySelector(".project-list").innerHTML = `
        <a href=".">Go Back</a><br><br>
        <h1>Projects</h1>
            ${Project(data)}
        <div>
            ${data.authors}
        </div><br><br>
        <div>
            ${data.source}
        </div><br><br>
        <div>
            ${data.tags}
        </div><br><br>
        <div>
            ${data.materials}
        </div>
    `;
}