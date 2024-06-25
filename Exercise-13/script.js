function createCard(index, thumbnail_url, title, channel, views, duration, age) {
    if (views < 1000) {
        views = views
    } else if (views < 1000000) {
        views = Math.floor(views / 100)/10 + "K"
    } else {
        views = Math.floor(views / 100000)/10 + "M"
    }

    let string_element = `
    <div class="card">
            <div class="card-end card-header">${index}</div>
            <div class="card-body">
                <div class="card-img-box">
                    <img src="${thumbnail_url}" alt="thumbnail">
                    <div class="card-time">${duration}</div>
                </div>
                <div class="card-content">
                    <h2>${title}</h2>
                    <ul>
                        <li>${channel}</li>
                        <li>•</li>
                        <li>${views} views</li>
                        <li>•</li>
                        <li>${age} ago</li>
                    </ul>
                </div>
            </div>
            <div class="card-end card-footer">
                <div>&vellip;</div>
            </div>
        </div>
    `
    let temp_div = document.createElement('div')
    temp_div.innerHTML = string_element
    let card = temp_div.firstElementChild

    let container = document.querySelector('.container')
    container.appendChild(card)
}

function addCardByButton(){
    let container = document.querySelector('.container')
    let index = container.children.length
    createCard(index+1, "img.jpg", "Your First HTML Website | Sigma Web Development Course - Tutorial #2", "CodeWithHarry", 1123041, "8:40", "11 months") 
}

function clearCardsByButton(){
    let container = document.querySelector('.container')
    container.innerHTML = ""
}


