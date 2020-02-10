
export default function About(about) {
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
