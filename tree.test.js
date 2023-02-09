const TreeStore = require('./src/tree');

 const items = [
     { id: 1, parent: 'root' },
     { id: 2, parent: 1, type: 'test' },
     { id: 3, parent: 1, type: 'test' },
   
     { id: 4, parent: 2, type: 'test' },
     { id: 5, parent: 2, type: 'test' },
     { id: 6, parent: 2, type: 'test' },
   
     { id: 7, parent: 4, type: null },
     { id: 8, parent: 4, type: null },
     { id: 9, parent: 4, type: null },
    
   ];

    const  tree = new TreeStore(items);
    test('GetAll', () => {
      expect(tree.getAll()).toBe(items);
    });
    describe('GetItem', () => {
      test('success number', () => {
        expect(tree.getItem(5)).toStrictEqual({ id: 5, parent: 2, type: 'test' });
      });
      test('success string', () => {
        expect(tree.getItem('5')).toStrictEqual({ id: 5, parent: 2, type: 'test' });
      });
      test('empty params', () => {
        expect(tree.getItem()).toBe(null);
      });
      
    })
    describe('GetChildren', () => {
      test('success number', () => {
        expect(tree.getChildren(4)).toStrictEqual([ { id: 7, parent: 4, type: null },
          { id: 8, parent: 4, type: null },
          { id: 9, parent: 4, type: null },]);
      });
      test('success string', () => {
        expect(tree.getChildren('4')).toStrictEqual([ { id: 7, parent: 4, type: null },
          { id: 8, parent: 4, type: null },
          { id: 9, parent: 4, type: null },]);
      });
      test('empty params', () => {
        expect(tree.getChildren()).toStrictEqual([]);
      });
      
    })

    describe('GetAllChildren', () => {
      const res =  [  { id: 2, parent: 1, type: 'test' },
      { id: 3, parent: 1, type: 'test' },
    
      { id: 4, parent: 2, type: 'test' },
      { id: 5, parent: 2, type: 'test' },
      { id: 6, parent: 2, type: 'test' },
    
      { id: 7, parent: 4, type: null },
      { id: 8, parent: 4, type: null },
      { id: 9, parent: 4, type: null },]
      test('success number', () => {
        expect(tree.getAllChildren(1)).toStrictEqual(res)});
      test('success string', () => {
        expect(tree.getAllChildren('1')).toStrictEqual(res)
      })
      test('without children', () => {
        expect(tree.getAllChildren(9)).toStrictEqual([]);
      });
      test('empty params', () => {
        expect(tree.getAllChildren()).toStrictEqual([]);
      });
      
    })

    describe('GetAllParents', () => {
      const res =  [{id:4,parent:2,type:"test"},{id:2,parent:1,type:"test"},{id:1,parent:"root"}]
      test('success number', () => {
        expect(tree.getAllParents(7)).toStrictEqual(res)});
      test('success string', () => {
        expect(tree.getAllParents('7')).toStrictEqual(res)
      })
      test('without parents', () => {
        expect(tree.getAllParents(1)).toStrictEqual([]);
      });
      test('empty params', () => {
        expect(tree.getAllParents()).toStrictEqual([]);
      });
    })

