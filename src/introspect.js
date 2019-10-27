/*
Implementation of "better" introspection functions
Just as an excercise, 
some of them may be useful in real life as well
*/
module.exports = {
  allOwnKeys,
  allOwnValues,
  allOwnEntries,
  getProtoChain,
  allKeys,
  forIn,
  shallowClone,
  hasInheritedProperty,
  hasOverridenProperty
};
// Object.keys supporting Symbols and non-enumerables 
function allOwnKeys(o) {
	return Object.getOwnPropertyNames(o).concat(Object.getOwnPropertySymbols(o))

}
// Object.values supporting Symbols and non-enumerables 
function allOwnValues(o) {
  return allOwnKeys(o).map(e => o[e])
}
// Object.entries supporting Symbols and non-enumerables 
function allOwnEntries(o) {
  return allOwnKeys(o).map(e => [e, o[e]])
}
// [obj,...protos] array of objects in proto chain
// starting with obj itself and up-the chain
function getProtoChain(obj) {
  
}
// Object.keys including, inherited, not-enumeble, symbols  
function allKeys(obj) {
  let arr = [];
  while (Object.getPrototypeOf(obj) !== Object) {
    //arr.push(Object.getOwnPropertyNames(obj));
    arr.push(Object.getOwnPropertySymbols(obj).map(x=>x.toString()));
    // arr.push(allOwnKeys(obj));
    obj = Object.getPrototypeOf(obj);
  }
  return arr;
}

// for..in loop supporting Symbols and non-enumerable
// for own and inherited properties
function forIn(obj, callback) {
  return allKeys(obj)
}
// create copy of object 
// with same propereties, 
// including symbols, 
// same values 
// and same property ownership 
function shallowClone(obj) {
  
}

// if the property exists only in proto chain
// not on object
function hasInheritedProperty(obj, prop) {
  
}

function hasOverridenProperty(obj, prop) {
  

}