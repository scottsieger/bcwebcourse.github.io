import Navbar from './NavBar.js';
import Projects, {addProjectInteractions} from './Projects.js';
import News, {addNewsInteractions} from './News.js';
import About from './About.js';


export default function MainPage(data) {
  
  document.querySelector('.container').innerHTML = `
    ${Navbar('main', Object.keys(data))} 
    ${About(data.about)}
    ${News(data.news)}
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
    ${Projects(data.projects)}
    <footer> Copyright © Scott Sieger, 2020</footer>
  `
  
  addProjectInteractions(data);
  addNewsInteractions(data);
}