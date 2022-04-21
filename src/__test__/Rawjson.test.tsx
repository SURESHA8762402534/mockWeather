import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";
import PostTable from "../component/PostTable";
import Rawjson from "../component/Rawjson";

it('snap of table',()=>{
    const tree = render(
        <BrowserRouter>
        <Rawjson navigate={()=>{}}/>
        </BrowserRouter>
    )
    expect(tree).toMatchSnapshot()
    screen.debug()
    expect(screen.getByRole('button')).toBeInTheDocument()
})

it('snap of table',()=>{
    const mock = jest.fn()
    render(
        <BrowserRouter>
        <Rawjson navigate={mock}/>
        </BrowserRouter>
    )
    fireEvent.click(screen.getByRole('button'))
    expect(mock).toHaveBeenCalled()
  
})