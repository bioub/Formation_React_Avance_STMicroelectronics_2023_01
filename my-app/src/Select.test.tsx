import { fireEvent, render, screen } from "@testing-library/react";
import chai, { expect } from "chai";
import chaiSpies from 'chai-spies';
import Select from "./Select";

chai.use(chaiSpies);

describe('Select Component', () => {
  it('renders', () => {
    const items = ['item 1', 'item 2'];
    const selected = 'item 2';
    const onSelected = () => {};
    render(<Select items={items} selectedValue={selected} onSelected={onSelected} />);
  });

  it('selected shows', () => {
    const items = ['item 1', 'item 2'];
    const selected = 'item 2';
    const onSelected = () => {};
    render(<Select items={items} selectedValue={selected} onSelected={onSelected} />);
    const selectedEl = screen.getByText(/item 2/i);
    expect(selectedEl).not.to.be.null;

    const elementInMenu = screen.queryByText(/item 1/i);
    expect(elementInMenu).to.be.null;
  });

  it('menu should open', () => {
    const items = ['item 1', 'item 2'];
    const selected = 'item 2';
    // let onSelectedCalled = false;
    // const onSelected = () => {
    //   onSelectedCalled = true;
    // };
    const onSelected = chai.spy();
    render(<Select items={items} selectedValue={selected} onSelected={onSelected} />);
    const selectedEl = screen.getByText(/item 2/i);
    
    fireEvent.click(selectedEl);

    const elementInMenu = screen.queryByText(/item 1/i);
    expect(elementInMenu).not.to.be.null;

    fireEvent.click(elementInMenu);

    expect(onSelected).to.have.been.called;
    //expect(onSelectedCalled).to.be.true;
    // toBeInDocument
    // expect(document.contains(selectedEl)).to.be.false;
  });


});