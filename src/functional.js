
function _filter(collection, predicate) {
    var result = [];
    
    for(var i = 0; i < collection.length; i++) {
        if(predicate(collection[i])) {
            result.push(collection[i]);
        }
    }

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
}