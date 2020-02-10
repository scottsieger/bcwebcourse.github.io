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
});