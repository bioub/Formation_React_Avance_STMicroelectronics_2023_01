import { expect } from "chai";
import { sum } from "./sum";

describe('sum function', () => {
  it('should add positive numbers', () => {
    expect(sum(1, 2)).to.equals(3);
  });
  it('should add negative number', () => {
    expect(sum(-1, -2)).to.equals(-3);
  });
})