import MainPage from './components/MainPage.js';
import ProjectPage from './components/ProjectPage.js';


fetch("./assets/data.json")
  .then(resp => resp.json())
  .then(data => {
    let params = new URLSearchParams(window.location.search);
    console.log(data);
    MainPage(data)
    ProjectPage(data)
    
  });
