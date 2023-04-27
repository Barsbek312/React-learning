import React from "react";
import { create } from "react-test-renderer"; 
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus Component", () => {
    test("status from props should be in state", () => {
        const component = create(<ProfileStatus status="Iuuuuuuuuuuu"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Iuuuuuuuuuuu");
    })

    test("after creation <span> should be displayed with correct status", () => {
        const component = create(<ProfileStatus status="Iuuuuuuuuuuu"/>);
        const root = component.root;
        let span = root.findAllByType("span");
        expect(span.length).toBe(1);
    })

    test("after creation <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="Iuuuuuuuuuuu"/>);
        const root = component.root;
        let input = root.findAllByType("input");
        expect(input.length).toBe(0);
    })

    test("after creation <span> should contains the correct status", () => {
        const component = create(<ProfileStatus status="Iuuuuuuuuuuu"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe('Iuuuuuuuuuuu');
    })

    test("input should be displayed in edit mode", () => {
        const component = create(<ProfileStatus status="Iuuuuuuuuuuu"/>);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        expect(root.findByType('input').props.value).toBe('Iuuuuuuuuuuu');
    })

    test("call back should be called", () => {
        const mockCallBack = jest.fn();
        const component = create(<ProfileStatus status="Iuuuuuuuuuuu" updateStatus={mockCallBack}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode()
        expect(mockCallBack.mock.calls.length).toBe(1);
    })
})