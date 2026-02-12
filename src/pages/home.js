import homepage from '../assets/homepage.jpg'

export const createHomePage = (contentElement) => {
    // craete container
    const container = document.createElement('div')
    container.className = 'home-container' 

    // create main image
    const imageHolder = document.createElement('div')
    imageHolder.className = 'home-image'
    const image = document.createElement('img')
    image.src = homepage
    image.alt = 'man slicing fresh meat'
    imageHolder.appendChild(image)

    // create Catch phrase
    const catchPhrase = document.createElement('p')
    catchPhrase.className = 'bold big'
    catchPhrase.textContent = 'Serving Fresh Ingredients Meals since 1994'

    // create supporting text
    const text = document.createElement('p')
    text.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, corrupti vel reprehenderit eveniet a asperiores.'

    // create menu button
    const button = document.createElement('button')
    button.className = 'menu-action'
    button.textContent = 'MENU'

    // append elements
    container.appendChild(imageHolder)
    container.appendChild(catchPhrase)
    container.appendChild(text)
    container.appendChild(button)
    contentElement.appendChild(container)

    return container
}