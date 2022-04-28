import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import PostTable from "./PostTable";

jest.mock("react-router-dom",()=>{
    return{
        useNavigate:()=> jest.fn()
    }
})

describe('tets for posttable component',()=>{
    test('take snap of post table',()=>{
        const tree = render(
            <PostTable/>
        );
        expect(tree).toMatchSnapshot();
        screen.debug()
    })

    jest.setTimeout(10000);

    test('take of post table',async()=>{
        render(
            <PostTable/>
        );
       await new Promise((r:any)=>setTimeout(r, 5000));

       const rowbtn = screen.getByTestId('rowclick-0');

       expect(rowbtn).toBeInTheDocument()

       fireEvent.click(rowbtn);
       fireEvent.scroll(window, {target:{scrollY:100}})
    })

})