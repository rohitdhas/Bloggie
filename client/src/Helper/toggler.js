export function addActiveClass(classnameArr) {
    classnameArr.forEach(name => {
        document.querySelector(`.${name}`).classList.add('active')
    })
}

export function removeActiveClass(classnameArr) {
    classnameArr.forEach(name => {
        document.querySelector(`.${name}`).classList.remove('active')
    })
}

export function openRemoverCard(overlayClass, cardId) {
    document.querySelector(`.${overlayClass}`).classList.add('active')
    document.getElementById(cardId).classList.add('active')
}

export function closeRemoverCard(overlayClass, cardId) {
    document.querySelector(`.${overlayClass}`).classList.remove('active')
    document.getElementById(cardId).classList.remove('active')
}