console.log(data);

// WRITE YOUR CODE BELOW!

function createDogButton(data){
    const liEl = document.createElement('li')
    liEl.setAttribute('class','dogs-list__button')
    
    liEl.textContent = data.name
    const ulEl = document.querySelector('.dogs-list')
    ulEl.append(liEl)

    liEl.addEventListener('click', function () {
        createDogTemplate(data)
    })
}

function createAllButtons(){
    for(const element of data){
        createDogButton(element)
    }
}
createAllButtons()


function createDogTemplate(data){
    const h2El = document.createElement('h2')
    h2El.textContent = data.name
    const main_dogSection = document.querySelector(`.main__dog-section`)
    main_dogSection.innerHTML = ''

    const imgEl = document.createElement('img')
    imgEl.setAttribute('src', data.image)
    imgEl.setAttribute('alt','')

    const divEl = document.createElement('div')
    divEl.setAttribute(`class`,`main__dog-section__desc`)

    const anotherDivEl = document.createElement('div')
    anotherDivEl.setAttribute('class','main__dog-section__btn')

    const h3El = document.createElement('h3')
    h3El.textContent = 'Bio'
    const pInsideDiv = document.createElement('p')
    pInsideDiv.textContent = data.bio

    const pEl = document.createElement('p')
    pEl.textContent = ` yes!`

    const emEl = document.createElement('em')
    emEl.textContent = `Is naughty?`
    const btEl = document.createElement('button')

    let defaultValue = data.isGoodDog
    btEl.addEventListener('click', function () {
        pEl.textContent = ` no!`
        defaultValue = !defaultValue
    })
    if(defaultValue){
        btEl.textContent = 'Good Dog'
     }else{
        btEl.textContent = 'Bad Dog'
    }
    
    main_dogSection.append(h2El,imgEl,divEl,anotherDivEl)
    divEl.append(h3El,pInsideDiv)
    anotherDivEl.append(pEl,btEl)
    pEl.prepend(emEl)
}
// createDogTemplate(data)