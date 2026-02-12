export const createMenuPage = (contentElement, menuArr) => {
    // create container
    const container = document.createElement('div')
    container.className = 'menu-container'

    // create cards
    menuArr.forEach(item => {
        const card = document.createElement('div')
        card.className = 'card'

        // create card image
        const imageHolder = document.createElement('div')
        imageHolder.className = 'card-image'
        const image = document.createElement('img')
        image.src = item.image
        imageHolder.appendChild(image)

        // Create card description
        const desc = document.createElement('div')
        desc.className = 'card-desc'
        // -- text
        const text = document.createElement('p')
        text.className = 'text'
        text.textContent = item.name
        desc.appendChild(text)
        // -- price
        const price = document.createElement('p')
        price.className = 'price'
        price.textContent = item.price
        desc.appendChild(price)

        // append card children
        card.appendChild(imageHolder)
        card.appendChild(desc)

        container.appendChild(card)
    }) 

    contentElement.appendChild(container)

    return container
} 