export function logout(setState) {
    fetch("http://localhost:8080/logout", {
        credentials: "include",
    })
        .then((res) => res.json())
        .then(({ success }) => {
            if (success) {
                setState({});
                window.location = '/'
            }
        });
}