export default function toggleListItem(e) {
    const listElements = document.querySelectorAll('li');
    listElements.forEach(item => {
        item.classList.remove('active');
    })
    e.target.classList.add('active');
}