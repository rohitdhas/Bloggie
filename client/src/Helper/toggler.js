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