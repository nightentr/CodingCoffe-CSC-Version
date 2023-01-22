const body = document.body;
// selectam span-ul cu id  "mode-toggle"
const darkModeToggler = document.getElementById("mode-toggle")
// selectam containerul de carduri
const cardsContainer = document.querySelectorAll(".cards-list")[0]

const searchForm = document.getElementById('search')

let searchInput;
//  we veriy if searchform exists in our page
if (
  searchForm
)   {
    searchInput = searchForm.querySelector('input');

    searchForm.addEventListener('submit', searchProjects);
}

//  verifica daca valoarea introdusa in input se regaseste si in numele proiectului
function searchProjects(event) {
    //  atasam function ssearchProjects la evenimentele de submit si input
event.preventDefault()
  const searchValue = searchInput.value
    console.log(searchValue)
    console.log(event)

      const found = projects.find(proiect => proiect.name.toLowerCase().includes(searchValue.toLowerCase()));
      console.log(found)

      if (!found || !searchValue){ 
        cardsContainer.innerHTML = "";
      projects.forEach(function(proiect) {
        generateCard(proiect
          )
          
      })
        // projects.forEach(project => generateCard(proiect))
    } else {
      cardsContainer.innerHTML = "";
      generateCard(found);
    }
      
}
 
// Adaugam un event listenter de click la mode-toggle

darkModeToggler.addEventListener("click", function(){
  body.classList.toggle('dark-mode')
  console.log(body)
})
let projects = [];

// generam elementele HTML necesare pentru carduri folosind informatiile din JSON 

function generateCard(project){
  // Generam un list item <li>
  const li = document.createElement('li')
  //generam un div
  const div = document.createElement('div')
  //adaugam clasa 'card' la div
  div.classList.add('card')

  //generam un element <img>
  const cardImg = document.createElement('img')

  //adaugam path ul imagini in atributul src 
  cardImg.src = project.image
  // adaugam namele imaginii in atributul alt
  cardImg.alt = project.name
  div.append(cardImg)
  const cardContent = document.createElement('div')
  // Adaugam clasa card-content la divul generat
  cardContent.classList.add('card-content')
  const title = document.createElement('h3')
  //adaugam namele proiectului in titlu
  title.textContent = project.name
  console.log(project.name)
  console.log(title)
  //adaugam titlul in div-ul cardContent
  cardContent.append(title)

  const description = document.createElement('p')
  description.textContent = project.description
  cardContent.append(description)
  const cardBtn = document.createElement('button')
  cardBtn.textContent = 'Open Project'
  cardBtn.onclick = function(){
    location.href = project.link
  }
  cardContent.append(cardBtn)
    div.append(cardContent)

    li.append(div)
    cardsContainer.append(li)
}

if (
  window.matchMedia('(prefers-color-scheme: dark)').matches && window.matchMedia
){
  body.classList.toggle('dark-mode')
}

