import { addPostActionCreater } from "./reduce-profile";
import profileReducer from "./reduce-profile";
import { deletePost } from "./reduce-profile";

let state = {
    postsData: [
        { id: 1, postTxt: 'Вся ебля твоя, Джаред', likesCount: 10 },
        { id: 2, postTxt: "Вся ебля твоя, Джаред", likesCount: 10 },
        { id: 3, postTxt: 'Вся ебля твоя, Джаред', likesCount: 10 },
        { id: 4, postTxt: 'Вся ебля твоя, Джаред', likesCount: 10 },
    ],
}

test('length of posts must be increment', () => {
    // 1. start data
    let action = addPostActionCreater('Емаааааа');

    // 2. action
    let newState = profileReducer(state, action);
    
    // 3. expectation
    expect(newState.postsData.length).toBe(5);
})

test("message of new post must be 'Емаааааа' ", () => {
    // 1. start data
    let action = addPostActionCreater('Емаааааа');

    // 2. action
    let newState = profileReducer(state, action);
    
    // 3. expectation
    expect(newState.postsData[4].postTxt).toBe("Емаааааа");
})

test("after deleting length of messages must be decrement ", () => {
    // 1. start data
    let action = deletePost(4);

    // 2. action
    let newState = profileReducer(state, action);
    
    // 3. expectation
    expect(newState.postsData.length).toBe(3);
})

test("after deleting length of messages must be decrement ", () => {
    // 1. start data
    let action = deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action);
    
    // 3. expectation
    expect(newState.postsData.length).toBe(4);
})