const inquirer = require('inquirer');

const playerPrompts = [
  {
    type: 'input',
    name: 'name',
    message: 'Please enter Player 1 name',
    default: ''
  },
  {
    type: 'input',
    name: 'name',
    message: 'Please enter Player 2 name',
    default: ''
  },

]

const movePrompts = [
  {
    type: 'input',
    name: 'move',
    message: 'Please enter Player 1 moves: col, row',
    default: '0, 0'
  }
]


return inquirer.prompt(playerPrompts)
  .then(answers => {
    console.log('Player 1', answers);
  })

const init = function() {
  initializeBoard();
  //playerNamePrompt();
}

const initializeBoard = function () {
  console.log('TIC-TAC-TOE')

  console.log('   1     2    3')
  console.log('  ***************')
  console.log('1*    |     |    ')
  console.log(' *---------------')
  console.log('2*    |     |   ')
  console.log(' *---------------')
  console.log('3*    |     |   ')
}

const playerNamePrompt = function(name) {
  console.log(`player 1 name: ${name}`)
}


init();