import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import PostTable from "./PostTable";
import Rawjson from "./Rawjson";

jest.mock("react-router-dom",()=>{
    return{

        useNavigate:()=> jest.fn(),

        useLocation:()=>{
            return{
                state:''
            }
        }
    }
})

describe('tets for rawjson component',()=>{
    test('take snap of rawjson',()=>{
        const tree = render(
            <Rawjson/>
        );
        expect(tree).toMatchSnapshot();
        screen.debug()
    })

    test('take snap of rawjson',()=>{
        render(
            <Rawjson/>
        );
        const btn = screen.getByRole('button');

        expect(btn).toBeInTheDocument();

        fireEvent.click(btn)
       
    })

})