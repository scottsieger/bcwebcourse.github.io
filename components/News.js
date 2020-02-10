export default function News(news) {
    return `
        <section id="news">
            <h1>News</h1>
            <div class="search">
                <input type="search" name='news' placeholder="Search News...">
            </div>
            <div class="news-list">
                ${NewsItems(news)}
            </div>
        </section>`;
}

export function NewsItems(news) {
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

export function addNewsInteractions(data) {
    let input = document.querySelector('.search input[name="news"]');
    input.addEventListener('input', (event)=>{
        const filtered = data.news.filter(news=>news.title.toUpperCase().includes(event.target.value.toUpperCase()));
        document.querySelector('.news-list').innerHTML = NewsItems(filtered);
    });
}
