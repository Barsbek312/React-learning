const ADD_MESSAGE = "network/message/ADD_MESSAGE";

let initialState = {
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
]};

const messageReducer = (state = initialState, action) => {
    
    switch(action.type){

        case ADD_MESSAGE: {
            let newMessage = {
                id: 5,
                message: action.newMessageBody,
            }
            return {
                ...state,
                messagesData: [ ...state.messagesData, newMessage],
            }
        }

        default:
            return {...state};

    }

}

export const addMessageActionCreater = (newMessageBody) => {
    return (
        {
            type: ADD_MESSAGE,
            newMessageBody
        }
    )
}

export default messageReducer;