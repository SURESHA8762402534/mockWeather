import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import PostTable from "../component/PostTable";

it('snap of table',()=>{
    const tree = render(
        <BrowserRouter>
        <PostTable data={()=>{}} setPage={()=>{}}/>
        </BrowserRouter>
    )
    expect(tree).toMatchSnapshot()
    screen.debug()
    expect(screen.getByTitle('table')).toBeInTheDocument()
})

describe('post table fetch', ()=>{
    jest.setTimeout(20000);
    it('fetch test',async()=>{
        render(
            <BrowserRouter>
            <PostTable data={()=>{}} setPage={()=>{}}/>
            </BrowserRouter>
        );
        await new Promise((r)=>setTimeout(r, 5000));
    })
})