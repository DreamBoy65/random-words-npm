const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function randomWord(no) {
  if(!no) {
      no = 5
  }

    let word = ""

    for(let i = 0; i < no; i++) {
        word += characters.charAt(Math.floor(Math.random() * characters.length))
    }

    return word;
}

module.exports = randomWord 