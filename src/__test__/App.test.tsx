import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";



it('snap of app',()=>{
    const tree = render(
        <BrowserRouter>
        <App/>
        </BrowserRouter>
    )
    expect(tree).toMatchSnapshot()
    screen.debug()
})

describe('app fetch', ()=>{
    jest.setTimeout(20000);
    it('fetch test',async()=>{
        render(
            <BrowserRouter>
            <App/>
            </BrowserRouter>
        );
        await new Promise((r)=>setTimeout(r, 5000));
    })
})