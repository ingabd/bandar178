let db_games = [
    { username: 'abdulrachman', password: 'abdul123', id: 'Abdulrachman Hasan' },
    { username: 'andhika', password: 'andhika123', id: 'Andhika Mietra' },
    { username: 'farhad', password: 'farhad123', id: 'Farhad Yanuar' },
    { username: 'rizkyajie', password: 'rizky123', id: 'Rizky Ajie Kurniawan' },
    { username: 'rizkyrahardi', password: 'rizky123', id: 'Rizky Rahardi Pramono' }
]

function validasiData() {
    let validUser = false;
    let validPass = false;
    let id = ''

    let username = document.getElementById("exampleInputEmail1").value
    let password = document.getElementById("exampleInputPassword1").value
    for (const i of db_games) {
        if (username === i.username && password === i.password) { //pengecekan jika username dan password
            validUser = true;
            validPass = true;
            id = i.id;
        } else if (username !== i.username && password === i.password) { //Pengecekan jika username salah
            validUser = false
            validPass = true;
        } else if (username === i.username && password !== i.password) { //Pengecekan jika password salah
            validUser = true;
            validPass = false;;
        }
    }

    if (validUser && validPass) {
       alert(`Selamat datang ${id}, Selamat berjudi`)
       window.location = "success.html"; // Redirecting to other page.
    } else if (!validUser && validPass) {
        alert( `Username anda salah`)
    } else if (validUser && !validPass) {
        alert(`Password anda salah`)
    } else {
        alert (`registrasi akun untuk berjudi`)
    }
}

let data = ['bidin', 'bidin123', 'bidintanjidin']

function register(arrString) {
    if (arrString.length != 3) {
        return `data yang dibutuhkan kurang`;
    } else {
        let db = { username: arrString[0], password: arrString[1], id: arrString[2] }
        db_games.push(db);
    }
    return db_games
}
// console.log(register(data));