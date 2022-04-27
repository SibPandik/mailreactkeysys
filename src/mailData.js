import {rerenderEntireTree} from "./render";

let messagesData = [
    {id: 1, theme: 'Theme', mailText: 'All text'},
    {id: 2, theme: 'Theme2', mailText: 'All text2'},
]

export const addMail = (postTheme, postMessage) => {
    let newMail = {
        id: 3,
        theme: postTheme,
        mailText: postMessage
    };

    messagesData.push(newMail);
    rerenderEntireTree(messagesData)
}
export default messagesData;