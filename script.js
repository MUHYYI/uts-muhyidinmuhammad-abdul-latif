const animeContainer = document.getElementById("animeContainer");
const heroBanner = document.getElementById("heroBanner");
const heroTitle = document.getElementById("heroTitle");
const heroSynopsis = document.getElementById("heroSynopsis");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const modal = document.getElementById("animeModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

let currentType = "";

async function fetchAnime(query="naruto", type="") {
    let url = `https://api.jikan.moe/v4/anime?q=${query}&limit=18`;

    if(type){
        url += `&type=${type}`;
    }

    const response = await fetch(url);

    if(!response.ok){
        throw new Error("API Error");
    }

    const data = await response.json();
    return data.data;
}

function setHero(anime){
    heroBanner.style.backgroundImage =
        `url(${anime.images.jpg.large_image_url})`;

    heroTitle.textContent = anime.title;
    heroSynopsis.textContent =
        anime.synopsis?.substring(0,200) + "...";
}

function renderAnime(animes){
    setHero(animes[0]);

    animeContainer.innerHTML = animes.map(anime=>`
        <div class="card" onclick='showDetail(${JSON.stringify(anime).replace(/'/g,"&apos;")})'>
            <img src="${anime.images.jpg.large_image_url}">
            <div class="card-content">
                <h3>${anime.title}</h3>
                <p class="score">⭐ ${anime.score || "N/A"}</p>
                <p>${anime.type}</p>
                <p>${anime.year || "-"}</p>
            </div>
        </div>
    `).join("");
}

function showDetail(anime){
    modal.style.display="block";
    modalBody.innerHTML=`
        <h2>${anime.title}</h2>
        <img src="${anime.images.jpg.large_image_url}" style="width:250px">
        <p><strong>Score:</strong> ${anime.score}</p>
        <p><strong>Episodes:</strong> ${anime.episodes}</p>
        <p>${anime.synopsis}</p>
    `;
}

closeModal.onclick=()=>modal.style.display="none";

async function loadAnime(){
    try{
        const query = searchInput.value || "naruto";
        const animes = await fetchAnime(query,currentType);
        renderAnime(animes);
    }catch{
        animeContainer.innerHTML="<p>Gagal memuat data</p>";
    }
}

searchBtn.addEventListener("click",loadAnime);

document.querySelectorAll(".nav-btn").forEach(btn=>{
    btn.addEventListener("click",()=>{
        currentType=btn.dataset.type;
        loadAnime();
    });
});

loadAnime();