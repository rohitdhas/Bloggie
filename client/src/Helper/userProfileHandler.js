import { getAndSet } from "./blogHandler";
import { removeActiveClass } from "./toggler";

export function remove(path, id, setState) {
    fetch(`http://localhost:8080/${path}?id=${id}`, {
        credentials: 'include',
        method: "DELETE",
    })
        .then(res => res.json())
        .then(({ success }) => {
            if (success) {
                getAndSet(`${path}s`, setState);
                if (path === 'draft') {
                    removeActiveClass(["card_overlay", "card"])
                }
            }
        })
}