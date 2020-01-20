const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'] // Cada tecla branca no teclado do computador
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'] // Cada tecla preta no teclado do computador

const keys = document.querySelectorAll('.key')
// Seleciona todas as classes key no html.
const whiteKeys = document.querySelectorAll('.key.white') // Seleciona as classes key e white
const blackKeys = document.querySelectorAll('.key.black') // Seleciona as classes key e black

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})
// Para cada key, quando você clicar a função playNote vai ser executada.

document.addEventListener('keydown', e => {
  if (e.repeat) return // Vai fazer com que a tecla seja tocada uma vez caso seja presionada, ou seja, vai desabilitar a repetição automática da tecla.

  const key = e.key
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  const blackKeyIndex = BLACK_KEYS.indexOf(key)

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
  // Se o index da tecla branca for maior do que -1(retorno dado quando não se encontra nenhum índice), então vai ser tocado o som correspondente àquele index, que está relaciona à tecla.
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note) // Seleciona elementos pelo seu id no html, nos quais cada um deles é ligado a uma nota.
  noteAudio.currentTime = 0 // Toda vez que você apertar a mesma tecla o audio volta ao início.
  noteAudio.play() // Toca o audio.
  key.classList.add('active') // Quando a tecla é pressionada ela muda de classe para mostrar que foi ativada.
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  }) // Assim que o audio termina ele troca de classe novamente para mostrar que n"ao está mais ativo.
}