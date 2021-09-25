export function searchFor(query, setState) {
    fetch(`http://localhost:8080/search?term=${query}`, {
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