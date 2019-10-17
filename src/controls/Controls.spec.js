import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react"
import Controls from "./Controls";

// Controls Component
//     provide buttons to toggle the closed and locked states.
//     buttons' text changes to reflect the state the door will be in if clicked
//     the closed toggle button is disabled if the gate is locked
//     the locked toggle button is disabled if the gate is open

function FindInComponent(component, searchText, tagType) {
    var aTags = component.getElementsByTagName(tagType);
    var found;

    for (var i = 0; i < aTags.length; i++) {
        if (aTags[i].textContent == searchText) {
            found = aTags[i];
            break;
        }
    }

    return found;
}

describe('<Controls />', () => {

    it("is expected to provide buttons to toggle the closed and locked states.", () => {

        const controls = rtl.render(<Controls />);
        expect(controls).toBeTruthy()

    });


    it("is expected that the closed toggle button is disabled if the gate is locked", () => {

        const { queryByText } = rtl.render(<Controls closed={true} locked={true} />);

        expect(queryByText("Open Gate").disabled).toBe(true);

    });


    it("is expected that the locked toggle button is disabled if the gate is open", () => {

        const { queryByText } = rtl.render(<Controls closed={false} locked={false} />);

        expect(queryByText("Lock Gate").disabled).toBe(true);

    });



});