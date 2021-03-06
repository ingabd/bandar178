let saldo = 0
let saldoHtml = document.querySelector('#balance')
saldoHtml.innerHTML = saldo

let output = startPlay()
let updateSaldoJS = updateSaldo()

// const stat = {
//     play: 0,
//     win: 0,
//     lose: 0
// }
// stat.play += 1
// if (output.prize == 0) stat.lose += 1
// else if (output.prize == betPrice) stat.win += 1
// else if (output.prize > betPrice) stat.win += 1

// =================================== FUNCTIONS ===================================

// INPUT here, bet price and bet position

function startPlay() {

    // player - banker - tie, input dari html
    // document.getElementById('#banker3').style.backgroundImage = ""
    // // document.getElementById('#banker3').style.color = "grey"
    // document.getElementById('#player3').style.backgroundImage = ""
    // // document.getElementById('#player3').style.color = "grey"
    let bet = document.querySelector('input[name="bet"]:checked').value
    if (bet !== 'tie' && bet !=='banker' && bet!=='player') alert('Pick your winner first')
    let betPrice = document.getElementById('betPrice').value
    let showBet = document.querySelector('#showBet')
    showBet.innerHTML = betPrice
    let prize = 0
    if (bet === 'tie') bet = 'JACKPOT' // direname ke JACKPOT samain dgn outcome

    saldo -= betPrice
    if (saldo >= 0) {
        // memanggil fungsi miniBaccarat
        let output = miniBaccarat(bet, betPrice, prize)
        // revisi saldo oleh prize
        output.saldo = saldo + output.prize
        let saldoHtml = document.querySelector('#balance')
        saldoHtml.innerHTML = output.saldo
        let playerTotalHTML = document.querySelector('#playerTotal')
        let bankerTotalHTML = document.querySelector('#bankerTotal')
        playerTotalHTML.innerHTML = output.playerTotal
        bankerTotalHTML.innerHTML = output.bankerTotal
        showBet.innerHTML = output.hasil
        // console log untuk monitor kerja JS di browser
        console.log(saldo, betPrice, bet)
        console.log('Hasil kartu adalah: ')
        console.log('Kartu player: ', output.playerCard, 'total poin player: ', output.playerTotal)
        console.log('Kartu banker: ', output.bankerCard, 'total poin banker: ', output.bankerTotal)
        console.log('Outcome: ', output.outcome)
        console.log('Natural: ', output.natural)
        console.log('Your bet: ', output.bet)
        console.log('Hasil taruhan: ', output.hasil)
        console.log('Hadiah yang diterima: ', output.prize)
        console.log('Saldo akhir: ', output.saldo)
        saldo = output.saldo

        return output
    } else {
        alert('Insufficient balance. Please reduce your bet amount or DEPOSIT MORE MONEY!!')
        return 'Insufficient balance. Please reduce your bet amount or DEPOSIT MORE MONEY!!'
    }
}

function miniBaccarat(bet, betPrice, prize) {
    const output = {}

    // card deck
    let playerCard = [0, 0]
    let bankerCard = [0, 0]

    // card database i = 0-12
    const card = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0, 0]

    // random kartu, mathfloor.mathrandom ngasih 0-12
    playerCard[0] = card[Math.floor(Math.random() * card.length)]
    playerCard[1] = card[Math.floor(Math.random() * card.length)]
    bankerCard[0] = card[Math.floor(Math.random() * card.length)]
    bankerCard[1] = card[Math.floor(Math.random() * card.length)]

    // URL kartu player
    const urlPlayer = ['', '']
    const urlBanker = ['', '']
    for (let i = 0; i < playerCard.length; i++) {
        urlPlayer[i] = urlKartu(playerCard[i])
    }
    for (let i = 0; i < bankerCard.length; i++) {
        urlBanker[i] = urlKartu(bankerCard[i])
    }

    // ganti kartu di HTML
    let player1 = document.querySelector('#player1')
    player1.style.backgroundImage = urlPlayer[0]
    let player2 = document.querySelector('#player2')
    player2.style.backgroundImage = urlPlayer[1]
    let banker1 = document.querySelector('#banker1')
    banker1.style.backgroundImage = urlBanker[0]
    let banker2 = document.querySelector('#banker2')
    banker2.style.backgroundImage = urlBanker[1]

    // hasil
    console.log('Hasil pembagian: ')
    console.log(playerCard, bankerCard)

    // total
    let playerTotal = playerCard[0] + playerCard[1]
    let bankerTotal = bankerCard[0] + bankerCard[1]

    // ngambil digit kedua
    if (playerTotal > 9) playerTotal = playerTotal - 10
    if (bankerTotal > 9) bankerTotal = bankerTotal - 10

    let outcome = ''
    let natural = true

    // natural, klo total 8 atau 9
    if (playerTotal >= 8 && playerTotal > bankerTotal) outcome = 'player'
    else if (bankerTotal >= 8 && bankerTotal > playerTotal) outcome = 'banker'
    else if (playerTotal == bankerTotal && bankerTotal >= 8 && playerTotal >= 8) outcome = 'JACKPOT'

    if (!outcome) {
        console.log('-- Lanjut 3rd card --')

        // player 3rd card, kondisi 0-5
        natural = false
        let newCard = 0
        if (playerTotal < 6) {
            newCard = card[Math.floor(Math.random() * card.length)]
            playerCard.push(newCard)
        }

        // banker 3rd card, kondisi 2 card player, 0-5
        if (playerCard.length == 2 && bankerTotal < 6) {
            newCard = card[Math.floor(Math.random() * card.length)]
            bankerCard.push(newCard)
        } else if (playerCard.length == 3 && bankerCard.length < 3) {
            if (bankerTotal <= 2) {
                newCard = card[Math.floor(Math.random() * card.length)]
                bankerCard.push(newCard)
            } else if (bankerTotal == 3 && playerCard[2] != 8) {
                newCard = card[Math.floor(Math.random() * card.length)]
                bankerCard.push(newCard)
            } else if (bankerTotal == 4 && playerCard[2] >= 2 && playerCard[2] <= 7) {
                newCard = card[Math.floor(Math.random() * card.length)]
                bankerCard.push(newCard)
            } else if (bankerTotal == 5 && playerCard[2] >= 4 && playerCard[2] <= 7) {
                newCard = card[Math.floor(Math.random() * card.length)]
                bankerCard.push(newCard)
            } else if (bankerTotal == 6 && playerCard[2] >= 6 && playerCard[2] <= 7) {
                newCard = card[Math.floor(Math.random() * card.length)]
                bankerCard.push(newCard)
            }
        }

        // outcome 3rd card
        if (playerCard[2]) {
            playerTotal += playerCard[2]
            urlPlayer.push(urlKartu(playerCard[2]))
            let player3 = document.querySelector('#player3')
            player3.style.backgroundImage = urlPlayer[2]
        }
        if (bankerCard[2]) {
            bankerTotal += bankerCard[2]
            urlBanker.push(urlKartu(bankerCard[2]))
            let banker3 = document.querySelector('#banker3')
            banker3.style.backgroundImage = urlBanker[2]
        }

        // ngambil digit kedua
        if (playerTotal > 9) playerTotal = playerTotal - 10
        if (bankerTotal > 9) bankerTotal = bankerTotal - 10

        // final outcome
        if (playerTotal == bankerTotal) outcome = 'JACKPOT'
        else if (playerTotal > bankerTotal) outcome = 'player'
        else if (playerTotal < bankerTotal) outcome = 'banker'
    }

    // hasil bet
    let hasil = ''
    if (bet === outcome && outcome === 'JACKPOT') {
        hasil = 'Wow, You Won?!'
        prize = 8 * betPrice
    } else if (bet === outcome) {
        hasil = 'Wow, You Won?!'
        prize = 2 * betPrice
    } else hasil = 'LOL. You LOST!!'

    output.playerCard = playerCard
    output.bankerCard = bankerCard
    output.playerTotal = playerTotal
    output.bankerTotal = bankerTotal
    output.outcome = outcome
    output.natural = natural
    output.bet = bet
    output.hasil = hasil
    output.prize = prize

    return output
}

function urlKartu(card) {
    // database
    const form = ['hearts', 'clubs', 'diamonds', 'spades']
    const zeroes = ['10', 'jack', 'queen', 'king']

    // ganti nama depan
    let num = ''
    if (card === 1) num = 'ace'
    else if (card === 0) num = zeroes[Math.ceil(Math.random() * 4) - 1]
    else num += card
    let kartu = ''
    kartu = num + '_of_' + form[Math.ceil(Math.random() * 4) - 1]
    let url = `url("../background/card/${kartu}.png")`
    return url
}

function updateSaldo() {
    let update = Number(document.querySelector('input[name="withdraw"]').value)
    saldo += update
    let saldoHtml = document.querySelector('#balance')
    saldoHtml.innerHTML = saldo
    return saldo
}




