let username = 'fsdfsdfjsd';
let password = '12345';

let userCheck = function (un, pws) {
    if (un.includes('123') && pws.length >= 6) {
        return true;
    }
    return false;
}

console.log(userCheck(username, password))