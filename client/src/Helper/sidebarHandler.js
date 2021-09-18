export default function toggleListItem() {
    let li;
    const listElements = document.querySelectorAll('li');
    listElements.forEach(item => {
        item.classList.remove('active');
    })

    const path = window.location.pathname;
    if (path === '/' || path.includes('post')) {
        li = document.querySelector('li.feed');
    } else if (path.includes('profile')) {
        li = document.querySelector('li.profile');
    } else if (path.includes('editor')) {
        li = document.querySelector('li.editor');
    } else if (path.includes('bookmarks')) {
        li = document.querySelector('li.bookmarks');
    } else if (path.includes('drafts')) {
        li = document.querySelector('li.drafts');
    }

    if (!li) return
    li.classList.add('active')
}