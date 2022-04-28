import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

describe('tets for app component',()=>{
    test('take snap of app',()=>{
        const tree = render(
            <BrowserRouter><App/></BrowserRouter>
        );
        expect(tree).toMatchSnapshot();
        screen.debug()
    })
})