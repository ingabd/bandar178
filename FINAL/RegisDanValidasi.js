let db_games = [
    { username: 'abdulrachman', password: 'abdul123', id: 'Abdulrachman Hasan' },
    { username: 'andhika', password: 'andhika123', id: 'Andhika Mietra' },
    { username: 'farhad', password: 'farhad123', id: 'Farhad Yanuar' },
    { username: 'rizkyajie', password: 'rizky123', id: 'Rizky Ajie Kurniawan' },
    { username: 'rizkyrahardi', password: 'rizky123', id: 'Rizky Rahardi Pramono' }
]
function validasiData(object) {
    let validUser = false;
    let validPass = false;
		let message = ''
    let id = ''
    let {username, password} = object

		for (const i of db_games) {
			if (username === i.username) {//pengecekan jika username dan password
				validUser = true;
				if (password === i.password) {
					validPass = true;
					id = i.id;
				}
			} 
		}

    if (validUser && validPass){
      message = `Selamat datang ${id}, Selamat berjudi`
    } else if (!validUser){
			message = `registrasi akun untuk berjudi`
    } else {
			message = `Username atau Password anda salah`
		}
	return {
		validUser, 
		validPass,
		message
	}
}

// console.log(validasiData({ username: 'farhad', password: 'farhad123' }))

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

function start () {
	let username = document.querySelector('#username')
	let password = document.querySelector('#password')
	let id = document.querySelector('#id')
	let title = document.querySelector('#title')
	let buttonChangeForm = document.querySelector('#changeForm')
	let labelChangeForm = document.querySelector('#labelChangeForm')
	let idInput = document.querySelector('#idInputContainer')
	let buttonSubmit = document.querySelector('#submit')

	idInput.classList.add('hidden')
	buttonChangeForm.addEventListener('click', function () {
		// console.log(title.innerHTML);
		if(title.innerHTML === 'Log In') {
			title.innerHTML = 'Register'
			labelChangeForm.innerHTML = 'Got an account?'
			buttonChangeForm.innerHTML = 'Log In Here'
			idInput.classList.remove('hidden')
		} else {
			title.innerHTML = 'Log In'
			labelChangeForm.innerHTML = 'No Username?'
			buttonChangeForm.innerHTML = 'Register Here'
			idInput.classList.add('hidden')
		}
	})
	buttonSubmit.addEventListener('click', function() {
		let isFormLogin = title.innerHTML === 'Log In'
		let result;

		if (isFormLogin) {
			if (!username.value || !password.value) {
				alert('Lengkapi data yang diperlukan')
				return
			}
			result = validasiData({
				username: username.value,
				password: password.value
			})
			if (result.validUser && result.validPass) {
				window.location.href = './dashboard.html'
			} 
			alert(result.message)
		} else {
			if (!username.value || !password.value || !id.value) {
				alert('Lengkapi data yang diperlukan')
				return
			}
			result = register([username.value, password.value, id.value])
			if (typeof result === 'object') {
				// console.log(result);
				window.location.href = './dashboard.html'
				alert(`Selamat datang ${result[result.length-1].id}, Selamat berjudi`)
			} else {
				alert(result)
			}
		}
		username.value = ''
		password.value = ''
		id.value = ''
	})
}
start()