function _each(collection, iterator) {
    for(var i = 0; i < collection.length; i++) {
        iterator(collection[i]);
    }

    return collection;
}

function _filter(collection, predicate) {
    var result = []; 

    _each(collection, val => {
        if(predicate(val)) {
            result.push(val);
        }
    })

    return result;
}

function _map(collection, mapper) {
    var result = [];

    _each(collection, val => new_list.push(mapper(val)));

    return result;
}




{

    const users = [
        { id: 1, name: 'ID', age: 36 },
        { id: 2, name: 'SH', age: 26 },
        { id: 3, name: 'HR', age: 35 },
        { id: 4, name: 'HG', age: 32 },
        { id: 5, name: 'HY', age: 40 },
        { id: 6, name: 'DW', age: 50 },
        { id: 7, name: 'SG', age: 10 },
        { id: 8, name: 'IK', age: 20 },
    ];

    console.log(_filter(users, user => user.age > 30));
    console.log(_map(users, user => user.name + user.name));
