const chunk =  (array, size)=> {
  if (size === void 0) {
    size = 1;
  }
  var result = [];
  var temp_array = [];
  array.forEach(function (element, index) {
    temp_array.push(element);
    if (!((index + 1) % size) || index == array.length - 1) {
      result.push(temp_array);
      temp_array = [];
    }
  });
  return result;
};
module.exports.chunk = chunk;

//compact
const compact = (array)=> {
  //checks if element is in array
  var includes = (array, item)=> {
    var result = false;
    array.forEach(element) {
      if (element === item) {
        result = true;
        break;
      }
    }
    return result;
  };
  var notCompact = [false, null, 0, "", undefined, NaN];
  return array.filter(function (elem) {
    return !includes(notCompact, elem);
  });
};
module.exports.compact=compact;

//defer
const defer=(func, ...args)=> {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function')
  }
  return setTimeout(func, 1, ...args)
}
module.exports.defer= defer;

//drop
const drop =  (array, size)=> {
  if (size === void 0) {
    size = 1;
  }
  size = Math.ceil(size);
  return array.filter((element, index)=> {
    return index + 1 > size;
  });
};
module.exports.drop = drop;

//fill
const  fill = (array, replacement, start, end)=>{
  if (start === void 0) {
    start = 0;
  }
  if (!end) {
    end = array.length;
  }
  return array.map((element, index)=>{
    if (index >= start && index < end) {
      return replacement;
    } else {
      return element;
    }
  });
};
module.exports.fill= fill;

//head
const head=(array)=> {
    return array[0];
}
module.exports.head= head;

//rest
const rest= (what, ...names) => {
  const [last, ...initial] = names.reverse();
  const finalSeparator = (names.length > 1 ? ', &' : '');
  return `${what} ${initial.join(', ')} ${finalSeparator} ${last}`;
};
module.exports.rest= rest;

//some
const some=(array, predicate)=> {
  let index = -1
  const length = array == null ? 0 : array.length

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true
    }
  }
  return false
}
module.exports.some =some;

//tail
const tail=(array)=> {
    return array.slice(1, array.length);
}
module.exports.tail=tail;

//take
const take=(array, n=1)=> {
 if (!(array != null && array.length)) {
   return []
 }
 return array.slice( 0, n < 0 ? 0 : n)
}
module.exports.take = take;

//zip
const zip = (...arrays) => {
    const length = Math.min(...arrays.map(arr => arr.length));
    return Array.from({ length }, (value, index) => arrays.map((array => array[index])));
};
module.exports.zip= zip;
