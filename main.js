fetch('assets/data.json')
.then(response=> {
    return response.json();
})
.then(data => {
    console.log(data);
    const params = new URLSearchParams(window.location.search);
    console.log("project param", params.get("project"));
    renderMainPage(data);

    function renderMainPage(data){
        document.querySelector('.container').innerHTML = `
            ${renderNavbar('main', Object.keys(data))} 
            ${renderAbout(data.about)}
            ${renderNews(data.news)}
            ${renderProjects(data.projects)}
    `;
        
        const queryString = window.location;
        console.log(queryString, 'Main Page');

        if(queryString.search ==="?page=EconomicsProject"){
            console.log(arguments[3])
            document.querySelector('.container').innerHTML = `
            ${renderNavbar('main', Object.keys(data))}
            ${renderIndividualProject(projects)}
            `;
        }

        if(queryString.search ==="?page=PsychologicalDisorders"){
            console.log(arguments[1])
            document.querySelector('.container').innerHTML = `
            ${renderNavbar('main', Object.keys(data))}
            ${renderIndividualProject(projects)}
            `;
        }

        if(queryString.search ==="?page=CongressionalSpending"){
            console.log(arguments[0])
            document.querySelector('.container').innerHTML = `
            ${renderNavbar('main', Object.keys(data))}
            ${renderIndividualProject(projects)}
            `;
        }

        if(queryString.search ==="?page=projects"){
            document.querySelector('.container').innerHTML = `
                ${renderNavbar('main', Object.keys(data))}
                ${renderProjects(data.projects)}
            `;
        }

        if(queryString.search ==="?page=about"){
            document.querySelector('.container').innerHTML = `
                ${renderNavbar('main', Object.keys(data))}
                ${renderAbout(data.about)}
            `;
        }
        
        if(queryString.search ==="?page=news"){
            document.querySelector('.container').innerHTML = `
            ${renderNavbar('main', Object.keys(data))}
            ${renderNews(data.news)}
        
        `;
        }


    
    }
    function renderNavbar(page){
        return `
            <nav>
                <ul>
                    <li>
                        <a href="?page=home">HOME</a>
                    </li>
                    <li>
                        <a href="?page=about">ABOUT</a>
                    </li>
                    <li>
                        <a href="?page=news">NEWS</a>
                    </li>
                    <li>
                        <a href="?page=projects">PROJECTS</a>
                    </li>
                </ul>
            </nav>
    `;
    }
    function renderAbout(about){
        return `
        <section id="about">
            <h1 class="title animated heartBeat">${about.name}</h1>
            <div class="row">
                <div class="col-7">
                    <div>
                        <img src="${about.profileimg}" style="width: 400px" style="border-radius: 5px"/>
                    </div><br>
                    <div>
                        <p>
                            <strong>${about.title}</strong><br>
                            ${about.email}<br>
                            ${about.address}<br>
                            <a href="${about.resume}" target="_blank"><i class="far fa-file-alt"></i> Resume</a> |
                            <a href="${about.github}" target="_blank"><i class="far fa-file-alt"></i> GitHUb</a> |
                            <a href="${about.linkedin}" target="_blank"> <i class="fab fa-linkedin"></i> LinkedIn</a> |
                            <a href="${about.instagram}" target="_blank"><i class="fab fa-instagram"></i> Instagram</a>
                        </p>
                    </div>
                </div>
                <div class="col-6">
                    <p>
                        ${about.desc}
                    </p>
                </div>
        </section>`
    }
    function renderNews(news){
        return `
        <section id="news">
            <h1>News</h1>
            <div class="news-list">
                ${renderNewsItems(news)}
            </div>
        </section>`;
    }
    function renderNewsItems(news){
        return news.map(d=>`
            <div class="row">
                <div class="col-12">
                    ${d.title}
                </div>
                <div class="col-4">
                    ${d.date}
                </div>
            </div>
        `).join('');
    }
    function renderProjects(projects){
        return `
        <section id="projects">
            <h1>Projects</h1>
            <div class="project-list">
                ${renderProjectItems(projects)}
            </div>
        </section>`;
    }
    function renderProjectItems(projects) 
    {
        return projects.map(d=>`
            <div class="row">
                <div class="col-7">
                    <div class="title">
                        <a href="?page=${d.id}"><strong>${d.title}</strong></a>
                    </div>
                    <div class="authors">
                        ${d.authors}<br>
                    </div>
                    <div class="source">
                        ${d.source}<br>
                    </div>
                    <div class="tags">
                        ${d.tags}<br>
                    </div>
                    <div class="materials">
                        <div class="label">
                            ${d.label}
                        </div>
                        <div class="path">
                            ${d.path}
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <img src="${d.teaser}" width="100%"
                </div>
            </div>
        `).join('');
    }

    function renderIndividualProject(projects)
    {

        return `
            <div class="row">
                <div class="col-7">
                    <div class="title">
                        <a href="?page=${projects.id}"><strong>${projects.title}</strong></a>
                    </div>
                    <div class="authors">
                        ${projects.authors}<br>
                    </div>
                    <div class="source">
                        ${projects.source}<br>
                    </div>
                    <div class="tags">
                        ${projects.tags}<br>
                    </div>
                    <div class="materials">
                        <div class="label">
                            ${projects.label}
                        </div>
                        <div class="path">
                            ${projects.path}
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <img src="${projects.teaser}" width="100%"
                </div>
            </div>
        `
    }
   
});
