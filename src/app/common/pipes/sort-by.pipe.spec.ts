import { SortByPipe } from './sort-by.pipe';

describe('SortByPipe', () => {
  it('create an instance', () => {
    const pipe = new SortByPipe();

    const objects = [
      { id: 8, value: 'ipsum' },
      { id: 2, value: 'amet' },
      { id: 4, value: 'lorem' },
    ];

    pipe.transform(objects, 'cresc', 'id');
    
    expect(pipe).toBeTruthy();
  });
});
