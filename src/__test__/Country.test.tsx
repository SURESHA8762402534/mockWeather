import { screen, render, getByText } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Country from "../components/Country";

test('country snap',()=>{
    const tree = render(
        <BrowserRouter>
        <Country/>
        </BrowserRouter>
    )
    expect(tree).toMatchSnapshot()
})
test(' test for country details', ()=>{
    render(
        <BrowserRouter>
        <Country/>
        </BrowserRouter>
    );
    expect(screen.getByText('Country Deatails')).toBeInTheDocument()
    screen.debug()
})