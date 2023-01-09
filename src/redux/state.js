let rerenderEntireTree = () => {
    console.log('Rerender changed');
}

let state = {
    messagesPage: {
        dialogsData: [
            {id: 1, name: 'Миррахим'},
            {id: 2, name: 'Байэл'},
            {id: 3, name: 'Эльдияр'},
            {id: 4, name: 'Дастан'},
            {id: 5, name: 'Адиль'}
          ],
        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: "What's up"},
            {id: 3, message: 'Something'}
          ],
    },
    profilePage: {
        newPostText: 'it-Bars.com',
        postsData: [
            { id: 1, postTxt: 'Вся ебля твоя, Джаред', likesCount: 10 },
            { id: 2, postTxt: "Вся ебля твоя, Джаред", likesCount: 10 },
            { id: 3, postTxt: 'Вся ебля твоя, Джаред', likesCount: 10 },
            { id: 4, postTxt: 'Вся ебля твоя, Джаред', likesCount: 10 },
            { id: 5, postTxt: "Вся ебля твоя, Джаред", likesCount: 10 },
            { id: 6, postTxt: 'Вся ебля твоя, Джаред', likesCount: 10 },
            { id: 7, postTxt: 'Вся ебля твоя, Джаред', likesCount: 10 },
            { id: 8, postTxt: "Вся ебля твоя, Джаред", likesCount: 10 },
            { id: 9, postTxt: "Вся ебля твоя, Джаред", likesCount: 10 },
          ]
    },
};

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        postTxt: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const addLetterOnNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;