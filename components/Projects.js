export default function Projects(projects) {
    return projects.map(d=> `
        ${Project(d)}`).join("");
        
}

export function addProjectInteractions(data) {
    let buttons = document.querySelectorAll('.filter input[name="filter"]');
    buttons.forEach(projects=>projects.addEventListener('change', function(event){
        const filtered = data.projects.filter(event.target.value === data.tags.toLowerCase());
        document.querySelector('.project-list').innerHTML = ProjectItems(filtered);
    }))
}

export function Project(d) {
    return `
        <section id="projects">
            <div class="project-list">
                ${ProjectItems(d)}
            </div>
        </section>`;
}

export function ProjectItems(d) {
    return `
            <div class="row">
                <div class="col-7">
                    <div class="title">
                        <a href="?page=${d.id}"><strong>${d.title}</strong></a><br><br>
                    </div>
                    <div class="authors">
                        ${d.authors}
                    </div>
                    <div class="authors">
                        ${d.source}
                    </div>
                    <div class="tags">
                        ${d.tags}
                    </div>
                    
                </div><br><br>
                <div class="col-6">
                    <img src="${d.teaser}" width="100%"
                </div>
            </div>
        `
}
