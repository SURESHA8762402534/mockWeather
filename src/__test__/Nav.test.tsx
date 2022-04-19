import { screen, render, fireEvent, getByRole} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Nav from '../components/Nav';

test('for nav',()=>{
    const tree = render(
        <BrowserRouter>
        <Nav navigate={()=>{}}/>
        </BrowserRouter>
    )

    expect(tree).toMatchSnapshot()
})

test('functiopn', ()=>{
    const match = jest.fn();
    render(
        <BrowserRouter>
        <Nav navigate={match}/>
        </BrowserRouter>
    )
    fireEvent.click(screen.getByRole('button'));
    expect(match).toHaveBeenCalled()

})

test('atribute check',()=>{
    const { getByLabelText } = render(
        <BrowserRouter>
        <Nav navigate={()=>{}}/>
        </BrowserRouter>
    );

    const input = getByLabelText('Country');
    expect(input).toHaveAttribute('type','text')
})

test('atribute check',()=>{
    const { getByLabelText } = render(
        <BrowserRouter>
        <Nav navigate={()=>{}}/>
        </BrowserRouter>
    );

    const input = screen.getByRole('button')
    expect(input).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
})