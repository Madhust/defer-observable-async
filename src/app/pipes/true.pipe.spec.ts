import { TruePipe } from './true.pipe';

describe('TruePipe', () => {
  it('create an instance', () => {
    const pipe = new TruePipe();
    expect(pipe).toBeTruthy();
  });
});
