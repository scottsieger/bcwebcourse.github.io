fetch('assets/data.json')
.then(response=> {
    return response.json();
})
.then(data => {
    console.log(data);
    renderMainPage(data);

    function renderMainPage(data){
        document.querySelector('.container').innerHTML = `
            ${renderNavbar('main', Object.keys(data))} 
            ${renderAbout(data.about)}
            ${renderNews(data.news)}
            ${renderProjects(data.projects)}
            <footer> Copyright © Scott Sieger, 2020</footer>`;
            addNewsInteractions(data); 
            addProjectInteractions(data);
            const params = new URLSearchParams(window.location.search);
    }

    function renderNavbar(page){
        return `
            <nav>
                <ul>
                    <li>
                        <a href="?page=home">HOME</a>
                    </li>
                    <li>
                        <a href=#about>ABOUT</a>
                    </li>
                    <li>
                        <a href=#news>NEWS</a>
                    </li>
                    <li>
                        <a href=#projects>PROJECTS</a>
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
            <div class="search">
                <input type="search" name='news' placeholder="Search News...">
            </div>
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
                </div><br><br>
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
                <div class="filter">
                    <label>
                    <input type="radio" name="filter" value="all" checked>
                    All
                    </label>
                    <label>
                    <input type="radio" name="filter" value="journal">
                    Group
                    </label>
                    <label>
                    <input type="radio" name="filter" value="all" checked>
                    Individual
                    </label>
                    <label>
                        <input type="radio" name="filter" value="all" checked>
                    Research
                    </label>
                    <label>
                    <input type="radio" name="filter" value="all" checked>
                    Project
                    </label>
                </div><br><br>
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
                        <a href="?page=${d.id}"><strong>${d.title}</strong></a><br><br>
                    </div>
                </div><br><br>
                <div class="col-6">
                    <img src="${d.teaser}" width="100%"
                </div>
            </div>
        `).join('');
    }
});

function addNewsInteractions(data) {
    let input = document.querySelector('.search input[name="news"]');
    input.addEventListener('input', (event)=>{
        const filtered = data.news.filter(news=>news.title.toUpperCase().includes(event.target.value.toUpperCase()));
        document.querySelector('.news-list').innerHTML = renderNewsItems(filtered);
    });
}

function addProjectInteractions(data) {
    let buttons = document.querySelector('.filter input[name="filter"]');
    buttons.forEach(projects=>projects.addEventListener('change', function(event){
        const filtered = data.projects.filter(value === tag.toLowerCase());
        document.querySelector('.project-list').innerHTML = ProjectItems(filtered);
    }))
}


