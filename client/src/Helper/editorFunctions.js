import markdownIt from "markdown-it";
import hljs from "highlight.js";
import { notify } from "../Redux/profile";

export function putMarkdown(type, setState) {
    switch (type) {
        case 'heading':
            setState(prev => prev + '\n# Heading')
            break;
        case 'bold':
            setState(prev => prev + '\n**Bold Text**')
            break;
        case 'italic':
            setState(prev => prev + '\n*italic Text*')
            break;
        case 'quote':
            setState(prev => prev + '\n> Quote')
            break;
        case 'code':
            setState(prev => prev + "\n```js\nconsole.log('Hello World');\n```")
            break;
        case 'ol':
            setState(prev => prev + "\n1. ")
            break;
        case 'ul':
            setState(prev => prev + "\n- ")
            break;
        case 'link':
            setState(prev => prev + "\n[Link Text](URL)")
            break;
        case 'image':
            setState(prev => prev + "\n\n![Alt Text for Image](URL)")
            break;
        default:
            setState(prev => prev)
    }
}

export const md = new markdownIt().set({
    html: true,
    linkify: true,
    typographer: true,
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return (
                    '<pre className="hljs"><code>' +
                    hljs.highlight(str, { language: lang, ignoreIllegals: true })
                        .value +
                    "</code></pre>"
                );
            } catch (__) { }
        }

        return (
            '<pre className="hljs"><code>' +
            md.utils.escapeHtml(str) +
            "</code></pre>"
        );
    },
});

export function postBlog(title, snippit, markdown, coverImageUrl, writtenBy, published, dispatcher) {
    const data = { title, snippit, markdown, writtenBy, coverImageUrl, published }
    if (!snippit || !title) {
        dispatcher(notify("Fill the required Fields!"))
        return
    }

    let windowPath, id;
    let path = 'http://localhost:8080/blog';

    if (window.location.pathname.includes('draft')) {
        windowPath = window.location.pathname.split('/');
        id = windowPath[windowPath.length - 1];
    }

    fetch(id ? path + `?id=${id}` : path, {
        credentials: 'include',
        method: id ? 'PUT' : 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(({ message }) => {
            dispatcher(notify(message))
        })
        .catch(err => console.log(err))
}