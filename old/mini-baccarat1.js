let playerCard = [0, 0]
let bankerCard = [0, 0]

const card = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0, 0]

// random kartu, mathfloor.mathrandom ngasih 0-12
playerCard[0] = card[Math.floor(Math.random() * card.length)]
playerCard[1] = card[Math.floor(Math.random() * card.length)]
bankerCard[0] = card[Math.floor(Math.random() * card.length)]
bankerCard[1] = card[Math.floor(Math.random() * card.length)]

// hasil
console.log(playerCard, bankerCard)

// total
let playerTotal = playerCard[0] + playerCard[1]
let bankerTotal = bankerCard[0] + bankerCard[1]

// ngambil digit kedua
if (playerTotal > 9) playerTotal = playerTotal - 10
if (bankerTotal > 9) bankerTotal = bankerTotal - 10

let outcome = ''

// natural, klo total 8 atau 9
if (playerTotal >= 8 && playerTotal > bankerTotal) outcome = 'player win natural'
else if (bankerTotal >= 8 && bankerTotal > playerTotal) outcome = 'banker win natural'
else if (playerTotal == bankerTotal && bankerTotal >= 8 && playerTotal >= 8) outcome = 'JACKPOT'

if (outcome) {
  // nampilin hasil natural
  console.log('Hasil kartu adalah: ')
  console.log('Kartu player: ', playerCard, 'total poin player: ', playerTotal)
  console.log('Kartu banker: ', bankerCard, 'total poin banker: ', bankerTotal)
  console.log('Outcome: ', outcome)
} else {
  console.log('-- Lanjut 3rd card --')
  // player 3rd card, kondisi 0-5
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

    // outcome 3rd card
    if (playerCard[2] !== undefined) playerTotal += playerCard[2]
    if (bankerCard[2] !== undefined) bankerTotal += bankerCard[2]


  }
  // ngambil digit kedua
  if (playerTotal > 9) playerTotal = playerTotal - 10
  if (bankerTotal > 9) bankerTotal = bankerTotal - 10

  // final outcome
  if (playerTotal == bankerTotal) outcome = 'JACKPOT'
  else if (playerTotal > bankerTotal) outcome = 'player win'
  else if (playerTotal < bankerTotal) outcome = 'banker win'

  // nampilin hasil 3rd card
  console.log('Hasil kartu adalah: ')
  console.log('Kartu player: ', playerCard, 'total poin player: ', playerTotal)
  console.log('Kartu banker: ', bankerCard, 'total poin banker: ', bankerTotal)
  console.log('Outcome: ', outcome)
}

