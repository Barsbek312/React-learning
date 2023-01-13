const ADD_MESSAGE = "ADD_MESSAGE";
const ADD_NEW_MESSAGE_TEXT = "ADD_NEW_MESSAGE_TEXT";

let initialState = {newMessageText: "",
dialogsData: [
    { id: 1, name: 'Миррахим' },
    { id: 2, name: 'Байэл' },
    { id: 3, name: 'Эльдияр' },
    { id: 4, name: 'Дастан' },
    { id: 5, name: 'Адиль' }
],
messagesData: [
    { id: 1, message: 'Hi' },
    { id: 2, message: "What's up" },
    { id: 3, message: 'Something' },
]}

const messageReducer = (state = initialState, action) => {
    
    switch(action.type){

        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText,
            }
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return {...state};
        
        case ADD_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return {...state};

        default:
            return {...state};

    }

}

export const addMessageActionCreater = () => {
    return (
        {
            type: ADD_MESSAGE,
        }
    )
}

export const onMessageChangeActionCreater = (text) => {
    return {
        type: ADD_NEW_MESSAGE_TEXT,
        newMessage: text,
    }
}

export default messageReducer;