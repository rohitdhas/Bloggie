export function searchFor(query, setState) {
    fetch(`/api/search?term=${query}`, {
        credentials: 'include'
    })
        .then(res => res.json())
        .then(({ data }) => {
            if (data.length) {
                setState(data)
            }
        })
        .catch(err => console.log(err))
}