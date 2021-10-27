export default function toggleListItem(username) {
    const listElements = document.querySelectorAll('a > li');
    listElements.forEach(item => {
        item.classList.remove('active');
    })

    let li;
    const path = window.location.pathname;
    if (path === '/' || path.includes('blog')) {
        li = document.querySelector('li.feed');
    } else if (path.includes(`profile/${username}`)) {
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