let projects = [
    {
        "title": "Estate Listing and Description",
        "url": "https://drive.google.com/drive/folders/18hxjDGIseaLzC4zZYP1WY-xhmVclnTDj"
    },
    {
        "title": "RealEstate_Investment Article",
        "url": "https://drive.google.com/drive/folders/1xY8lGFYqDaTazf46n1tPilFIQRL9WUPD"
    },
    {
        "title": "Website Copy",
        "url": "https://drive.google.com/drive/folders/1rofxp3JNq1SwKiCRiAExsDpug6YwRbKp"
    },
    {
        "title": "SmartBudgeting_with_CreditCards",
        "url": "https://drive.google.com/drive/folders/1gR6eRbCI6hPzWdDWCyzrbDZtKOIqFqUd"
    },
    {
        "title": "Understanding_Digital_Banking_Systems",
        "url": "https://drive.google.com/drive/folders/151EBAwigwPvPJ2YeLjINXcBtM2pR_yqK"
    }
]

let articleWrap = document.getElementById("blogList");

for (let i = 1; i < projects.length + 1; i++) {
    console.log(i);
    if (i > 10) {
        document.getElementById('seemore').style.display = "block";
        break;
    }
    else {
        articleWrap.innerHTML += `
    <article class="post fade-in" id = "blog3">
        <div class='topic' style="flex:1">
            <h3 id="blog3Title">${projects[i].title}<h3>
            </div>
                <a class='bloglink pill' id="blog3Link"
                    href="${projects[i].url}">Read →</a>
            </article>`;
    }
    console.log(articleWrap.innerHTML);
}
