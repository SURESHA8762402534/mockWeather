import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import Weather from "../components/Weather";

it('snap for weather',()=>{
    const tree = render(
        <BrowserRouter>
        <Weather/>
        </BrowserRouter>
    );
    expect(tree).toMatchSnapshot()
})

it('weather component test',()=>{
    render(
        <BrowserRouter>
        <Weather/>
        </BrowserRouter>
    );
   screen.debug()
})

test('for app component',()=>{
    const tree = render(
        <BrowserRouter>
       <App/>
        </BrowserRouter>
    );

    screen.debug()
    expect(tree).toMatchSnapshot()
})