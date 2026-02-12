export const createAboutPage = (contentElement) => {
    const container = document.createElement('div')
    container.className = 'about-container'

    // create mission section
    const mission = document.createElement('div')
    mission.className = 'mission'
    const missionHead = document.createElement('h2')
    missionHead.textContent = 'MISSION'
    mission.appendChild(missionHead)
    const missionText = document.createElement('p')
    missionText.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, cupiditate.'
    mission.appendChild(missionText)

    // create vision section
    const vision = document.createElement('div')
    vision.className = 'vision'
    const visionHead = document.createElement('h2')
    visionHead.textContent = 'VISION'
    vision.appendChild(visionHead)
    const visionText = document.createElement('p')
    visionText.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia illo culpa, inventore enim cumque asperiores!.'
    vision.appendChild(visionText)


    // create contact section
    const contact = document.createElement('div')
    const contactHead = document.createElement('h2')
    contactHead.textContent = 'CONTACT US'
    contact.appendChild(contactHead)

    const contactInfo = document.createElement('div')
    const address = document.createElement('p')
    address.innerHTML = '<strong>Address:</strong> 124 Mangrove Crossing, Nowh ere.'
    contactInfo.appendChild(address)

    const phone = document.createElement('p')
    phone.innerHTML = '<strong>Phone:</strong> 555-493-call-me-by-my-taste'
    contactInfo.appendChild(phone)

    const email = document.createElement('p')
    email.innerHTML = '<strong>Email:</strong> Amaterasu_sushi@gfdmail.com'
    contactInfo.appendChild(email)
    
    contact.appendChild(contactInfo)

    container.appendChild(mission)
    container.appendChild(vision)
    container.appendChild(contact)

    contentElement.appendChild(container)

    return container
}