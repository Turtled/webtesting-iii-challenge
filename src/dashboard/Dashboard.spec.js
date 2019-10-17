import React from "react";
import * as rtl from "@testing-library/react";

import Dashboard from './Dashboard';

// Dashboard
    // shows the controls and display


describe('<Dashboard />', () => {

    it("should match the snapshot", () => {
        const dashboard = rtl.render(<Dashboard />);
        expect(dashboard.baseElement).toMatchSnapshot();
    });
});