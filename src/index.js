console.log('%c HI', 'color: firebrick')

function addDogImg(dog){
    const dogDiv = document.querySelector("#dog-image-container");
    let newImg =document.createElement('img');
    newImg.src = dog;
    newImg.style = 'max-width: 400px'
    dogDiv.appendChild(newImg)
}

function addToList(breed){
    const breedList = document.querySelector('#dog-breeds');
    let newLi = document.createElement('li');
    newLi.innerText = breed;
    newLi.addEventListener('click', ()=>newLi.style = 'color: blue')
    breedList.appendChild(newLi);
}

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
fetch(imgUrl)
.then(resp => resp.json())
.then(object => object.message.forEach(addDogImg))
.catch(()=>console.log("error"))

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
fetch(breedUrl)
.then(resp => resp.json())
.then(object => {
    let breedObject = object.message;
    console.log(breedObject);
    for (const key in breedObject){
        addToList(key)
        }
    })
.catch(()=>console.log("error"))

const dropDown = document.querySelector('#breed-dropdown');
dropDown.addEventListener('click', filterBreeds)

function filterBreeds(){
    const breedList = document.querySelector('#dog-breeds');
    breedList.innerHTML = ''
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(object => {
        let breedObject = object['message'];
        for (key in breedObject){
            if (key[0] === dropDown.value){
                addToList(key)
            }
        }
    })
}
