const APIURL = "https://api.github.com/users/";
const main = document.querySelector("#main");
const getUser = async(username) => {
    const response = await fetch(APIURL + username);
    const data = await response.json()
    const card = `
    <div class="card">
        <div>
         <img class="avatar" src="${data.avatar_url}" alt="Florin Pop">
        </div>
        <div class="user-info">
            <h2>${data.name}</h2>
            <p>${data.bio}</p>

            <ul class="info">
                <li>${data.followers}<strong>Followers</strong></li>
                <li>${data.following}<strong>Following</strong></li>
                <li>${data.public_repos}<strong>Repos</strong></li>
            </ul>

            <div id="repos">
            
            </div>
        </div>
    </div>
    `
    main.innerHTML = card;
    getRepos(username)
} 

getUser("saadulhassanweb")



const getRepos = async (username) => {
    const repos = doc.querySelector("#repos")
    const response = await fetch(APIURL + username + "/repos")
    const data = response.json();
    data.forEach(
        (item) => {
            const elem = document.createElement("a")
            elem.classList.add("repos")
            elem.href = item.html_url
            elem.innerText = item.name
            elem.target = "_blank"
            repos.appendChild(elem)
        }
    )
}


const formSubmit = () => {
    const searchBox = document.querySelector("#search")
    if (searchBox.value != "") {
        getUser(searchBox.value);
    }
    return false;
}


searchBox.addEventListener(
    "focusout",
    function() {
        formSubmit();
    }
)
/*
            <a class="repo" href="#" target="_blank">Repo 1</a>
            <a class="repo" href="#" target="_blank">Repo 2</a>
            <a class="repo" href="#" target="_blank">Repo 3</a>
*/ 
