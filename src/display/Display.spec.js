import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Display from './Display/';
import Controls from "../controls/Controls";

/*
Display Component
    displays if gate is open/closed and if it is locked/unlocked
    displays 'Closed' if the closed prop is true and 'Open' if otherwise
    displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise
    when locked or closed use the red-led class
    when unlocked or open use the green-led class
*/

describe('<Display />', () => {

    it("displays 'Closed' if the closed prop is true", () => {

        let display = rtl.render(<Display closed={true}/>);
        expect(display.queryByText(/Closed/i)).toBeInTheDocument();

    });
    it("displays 'Open' if the closed prop is false", () => {

        let display = rtl.render(<Display closed={false}/>);
        expect(display.queryByText(/Open/i)).toBeInTheDocument();
        
    });
    it("displays 'Locked' if the locked prop is true", () => {

        let display = rtl.render(<Display locked={true}/>);
        expect(display.queryByText(/Locked/i)).toBeInTheDocument();
        
    });
    it("displays 'Unlocked' if the locked prop is false", () => {

        let display = rtl.render(<Display locked={false}/>);
        expect(display.queryByText(/Unlocked/i)).toBeInTheDocument();
        
    });
    it("should have Locked/Closed states use red-led class", () => {

        let display = rtl.render(<Display locked={true} closed={true}/>);
        expect(display.queryByText(/Locked/i)).toHaveClass("red-led");
        expect(display.queryByText(/Closed/i)).toHaveClass("red-led");
    });
    it("should have Unlocked/Open states use green-led class", () => {

        let display = rtl.render(<Display locked={false} closed={false}/>);
        expect(display.queryByText(/Unlocked/i)).toHaveClass("green-led");
        expect(display.queryByText(/Open/i)).toHaveClass("green-led");
    });
    
});