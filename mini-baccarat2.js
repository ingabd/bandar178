// INPUT here, bet price and bet position
let bet = 'player' // player - banker - tie
let betPrice = 10
let prize = 0
if (bet === 'tie') bet = 'JACKPOT' // direname ke JACKPOT samain dgn outcome

let player1 = document.querySelector('#player1')
player1.style.backgroundImage = 'url("../background/card/2_of_clubs.png")'


// let output = miniBaccarat(bet, betPrice)

// manggil kartu
let kartu = ''
const form = ['hearts', 'clubs', 'diamonds', 'spades']
kartu += output.playerCard[0] + '_of_' + form[Math.ceil(Math.random() * 4) - 1]

// console.log('Hasil kartu adalah: ')
// console.log('Kartu player: ', output.playerCard, 'total poin player: ', output.playerTotal)
// console.log('Kartu banker: ', output.bankerCard, 'total poin banker: ', output.bankerTotal)
// console.log('Outcome: ', output.outcome)
// console.log('Natural: ', output.natural)
// console.log('Your bet: ', output.bet)
// console.log('Hasil taruhan: ', output.hasil)
// console.log('Hadiah yang diterima: ', output.prize)

// function miniBaccarat(bet, betPrice) {
//   const output = {}
//   // card deck
//   let playerCard = [0, 0]
//   let bankerCard = [0, 0]

//   // card database i = 0-12
//   const card = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0, 0]

//   // random kartu, mathfloor.mathrandom ngasih 0-12
//   playerCard[0] = card[Math.floor(Math.random() * card.length)]
//   playerCard[1] = card[Math.floor(Math.random() * card.length)]
//   bankerCard[0] = card[Math.floor(Math.random() * card.length)]
//   bankerCard[1] = card[Math.floor(Math.random() * card.length)]

//   // hasil
//   console.log('Hasil pembagian: ')
//   console.log(playerCard, bankerCard)

//   // total
//   let playerTotal = playerCard[0] + playerCard[1]
//   let bankerTotal = bankerCard[0] + bankerCard[1]

//   // ngambil digit kedua
//   if (playerTotal > 9) playerTotal = playerTotal - 10
//   if (bankerTotal > 9) bankerTotal = bankerTotal - 10

//   let outcome = ''
//   let natural = true

//   // natural, klo total 8 atau 9
//   if (playerTotal >= 8 && playerTotal > bankerTotal) outcome = 'player'
//   else if (bankerTotal >= 8 && bankerTotal > playerTotal) outcome = 'banker'
//   else if (playerTotal == bankerTotal && bankerTotal >= 8 && playerTotal >= 8) outcome = 'JACKPOT'

//   if (!outcome) {
//     console.log('-- Lanjut 3rd card --')
//     // player 3rd card, kondisi 0-5
//     natural = false
//     let newCard = 0
//     if (playerTotal < 6) {
//       newCard = card[Math.floor(Math.random() * card.length)]
//       playerCard.push(newCard)
//     }
//     // banker 3rd card, kondisi 2 card player, 0-5
//     if (playerCard.length == 2 && bankerTotal < 6) {
//       newCard = card[Math.floor(Math.random() * card.length)]
//       bankerCard.push(newCard)
//     } else if (playerCard.length == 3 && bankerCard.length < 3) {
//       if (bankerTotal <= 2) {
//         newCard = card[Math.floor(Math.random() * card.length)]
//         bankerCard.push(newCard)
//       } else if (bankerTotal == 3 && playerCard[2] != 8) {
//         newCard = card[Math.floor(Math.random() * card.length)]
//         bankerCard.push(newCard)
//       } else if (bankerTotal == 4 && playerCard[2] >= 2 && playerCard[2] <= 7) {
//         newCard = card[Math.floor(Math.random() * card.length)]
//         bankerCard.push(newCard)
//       } else if (bankerTotal == 5 && playerCard[2] >= 4 && playerCard[2] <= 7) {
//         newCard = card[Math.floor(Math.random() * card.length)]
//         bankerCard.push(newCard)
//       } else if (bankerTotal == 6 && playerCard[2] >= 6 && playerCard[2] <= 7) {
//         newCard = card[Math.floor(Math.random() * card.length)]
//         bankerCard.push(newCard)
//       }
//     }

//     // outcome 3rd card
//     if (playerCard[2] !== undefined) playerTotal += playerCard[2]
//     if (bankerCard[2] !== undefined) bankerTotal += bankerCard[2]

//     // ngambil digit kedua
//     if (playerTotal > 9) playerTotal = playerTotal - 10
//     if (bankerTotal > 9) bankerTotal = bankerTotal - 10

//     // final outcome
//     if (playerTotal == bankerTotal) outcome = 'JACKPOT'
//     else if (playerTotal > bankerTotal) outcome = 'player'
//     else if (playerTotal < bankerTotal) outcome = 'banker'
//   }

//   // hasil bet
//   let hasil = ''
//   if (bet === outcome && outcome === 'JACKPOT') {
//     hasil = 'Selamat, anda menang banyak'
//     prize = 8 * betPrice
//   } else if (bet === outcome) {
//     hasil = 'Selamat, anda menang'
//     prize = betPrice
//   } else hasil = 'Selamat, anda kalah, lol'

//   output.playerCard = playerCard
//   output.bankerCard = bankerCard
//   output.playerTotal = playerTotal
//   output.bankerTotal = bankerTotal
//   output.outcome = outcome
//   output.natural = natural
//   output.bet = bet
//   output.hasil = hasil
//   output.prize = prize

//   return output
// }



