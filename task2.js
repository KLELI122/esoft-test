function deepCopy(obj) {
  if (typeof obj !== 'object' || obj === null) return obj;
  if (Array.isArray(obj) || obj instanceof Date) return new obj.constructor(obj);
  const newObj = Object.create(Object.getPrototypeOf(obj));
  for (let key in obj) {
      if (obj.hasOwnProperty(key)) newObj[key] = deepCopy(obj[key]);
  }
  return newObj;
}

const initialObject = {
  str: 'str',
  number: 52,
  boolean: true,
  nullValue: null,
  undefinedValue: undefined,
  array: ['el1', 'el2'],
  object: {
      key1: 'val1',
      key2: 'val2'
  },
  date: new Date(),
  map: new Map([
      ['mapKey1', 'mapValue1'],
      ['mapKey2', 'mapValue2']
  ]),
  set: new Set(['setVal1', 'setVal2']),
  function: function() {
      return 'example';
  }
};

const copyObject = deepCopy(initialObject);

console.log(initialObject);
console.log(copyObject);