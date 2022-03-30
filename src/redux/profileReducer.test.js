import profileReducer, {addPost, deletePost} from "./profileReducer";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: '15'},
        {id: 2, message: 'Hello, go to cs', likesCount: '20'}
    ]
};

test('after added length of should be increment', () => {
    // testData

    let action = addPost("it-kamasutra.com")
//action
    let newState = profileReducer(state, action)

//expectation
    expect(newState.posts.length).toBe(3)
});

test('message added', () => {
    // testData

    let action = addPost("it-kamasutra.com")
//action
    let newState = profileReducer(state, action)

//expectation
    expect(newState.posts[2].message).toBe("it-kamasutra.com")
});

test('after deleting length of should be decrement', () => {
    // testData

    let action = deletePost(1)
//action
    let newState = profileReducer(state, action)

//expectation
    expect(newState.posts.length).toBe(1)
});

test(`after deleting length of shouldn't be decrement if id is incorrect`, () => {
    // testData

    let action = deletePost(1000)
//action
    let newState = profileReducer(state, action)

//expectation
    expect(newState.posts.length).toBe(2)
});

