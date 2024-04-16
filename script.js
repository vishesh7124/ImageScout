const srchForm = document.getElementById("search-form");
const srchbtn = document.getElementById("search-btn");
const srchBox = document.getElementById("search-box");
const srchResult = document.getElementById("search-result");
const showMore = document.getElementById("show-more-btn");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const pageNum = document.getElementById("page-num");

const key = "xOEgyDv2SkvlF-sj33k11ReOPluzt_glu1ld_6GfjxU";
let keyword = "";
let page = 1;

async function searchImages() {
  keyword = srchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${key}&per_page=${9}`;

  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;
  const res = document.createElement("div");
  res.id ="res";
  res.setAttribute("style", `display:flex; flex-wrap: wrap; justify-content:space-evenly; height:85%;align-content:space=between`);

  console.log(data);
  console.log(results);

  srchResult.innerHTML="";
  srchResult.appendChild(showMore);
  pageNum.innerHTML = page;
    
  results.map((result)=>{
    const image = document.createElement("div");
    image.id = "img";
    image.setAttribute("style",
    `height:18vh; width:18vw;background: url("${result.urls.small}"); background-repeat:no-repeat;background-size:100% 100%;border-radius:10px;`);

    res.appendChild(image);
    srchResult.insertBefore(res,srchResult.firstChild);

  })


}

srchbtn.addEventListener("click", (e) => {
  e.preventDefault();
  page = 1;
  if(srchBox.value !=""){
    searchImages();
    showMore.style.display="flex";
    srchResult.style.display = "flex";

  }
  else{
    alert("Enter keyword to search.");
  }
});

next.addEventListener('click',()=>{
  srchResult.innerHTML = "";
  srchResult.appendChild(showMore);
  page++;
  searchImages();
})
prev.addEventListener('click',()=>{
  srchResult.innerHTML = "";
  srchResult.appendChild(showMore);
  if(page>1){
    page--;
    
  }
  searchImages();
})

