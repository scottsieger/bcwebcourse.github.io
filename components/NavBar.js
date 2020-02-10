export default function Navbar(page){
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