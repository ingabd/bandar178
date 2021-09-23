let db_games = [
    { username: 'abdulrachman', password: 'abdul123', id: 'Abdulrachman Hasan' },
    { username: 'andhika', password: 'andhika123', id: 'Andhika Mietra' },
    { username: 'farhad', password: 'farhad123', id: 'Farhad Yanuar' },
    { username: 'rizkyajie', password: 'rizky123', id: 'Rizky Ajie Kurniawan' },
    { username: 'rizkyrahardi', password: 'rizky123', id: 'Rizky Rahardi Pramono' }
]
function validasiData(array) {
    let validUser = false;
    let validPass = false;
    let id = ''
    for (const e of array) {
        let username = e.name;
        let password = e.kataSandi;
        for (const i of db_games) {
            if (username === i.username && password === i.password) {           //pengecekan jika username dan password
                validUser = true;
                validPass = true;
                id = i.id;
            } else if (username !== i.username && password === i.password) {    //Pengecekan jika username salah
                validUser = false
                validPass = true;
            } else if (username === i.username && password !== i.password) { //Pengecekan jika password salah
                validUser = true;
                validPass = false;;
            }
        }
    }
    if (validUser && validPass){
        return `Selamat datang ${id}, Selamat berjudi`
    } else if (!validUser && validPass){
        return `Username anda salah`
    } else if (validUser && !validPass){
        return `Password anda salah`
    } else {
        return `registrasi akun untuk berjudi`
    }
}

// console.log(validasiData([{ name: 'farhad', kataSandi: 'farhad123' }]))

let data = ['bidin', 'bidin123', 'bidintanjidin']

function register(arrString){
    if (arrString.length != 3){
        return `data yang dibutuhkan kurang`;
    } else {
        let db = {username: arrString[0], password: arrString[1], id: arrString[2]}
        db_games.push(db);
    }
    return db_games
}
// console.log(register(data));