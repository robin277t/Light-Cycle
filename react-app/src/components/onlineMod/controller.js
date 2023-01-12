class Controller {
  constructor (callback) {
    this.myWs = null;
    this.callback = callback;
  }
  
  wsConnect = () => {
    this.myWs = new WebSocket('ws://lightcycle.eu-4.evennode.com');
    this.myWs.onopen = () => {
      console.log('connected');
      setInterval(() => {
        this.myWs.send(JSON.stringify({action: 'PING'}));
      },30000);
    };
    this.myWs.onmessage = (message) => {
        let parseMessage = JSON.parse(message.data)
        switch (parseMessage.action) {
          case 'GRID':
            let board = []
            const grid = Math.sqrt(parseMessage.data.length);
            for (let i = grid; i <= grid**2 ; i += grid ) {
                board.push(parseMessage.data.slice(i - grid, i).join(' '));
            }
            this.callback({
              action: 'GRID',
              data: board.join('\n')
            })
          break;

          case 'TIMER':
            this.callback({
              action: 'TIMER',
              data: parseMessage.data
            })
          break;

          default:
            this.callback({
              action: 'MESSAGE',
              data: parseMessage.data
            })
          }
    };
  }

  wsEcho = (value) => {
    this.myWs.send(JSON.stringify({action: 'ECHO', data: value.toString()}));
  }

  wsUsers = () => {
    this.myWs.send(JSON.stringify({action: 'USERS'}));
  }

  wsNewGame = (gridSide = 15, trailLength = 7, gameSpeed = 800) => {
    const gameSetup = {
        gridSide,
        trailLength,
        gameSpeed,
    };
    this.myWs.send(JSON.stringify({action: 'NEW_GAME', data: gameSetup}));
  }

  wsConnectGame = (gameId) => {
    this.myWs.send(JSON.stringify({action: 'GAME_CONNECT', data: gameId}))
  }

  wsGameList = () => {
    this.myWs.send(JSON.stringify({action: 'GAME_LIST'}))
  }

  wsGameGrid = () => {
    this.myWs.send(JSON.stringify({action: 'GAME_GRID'}))
  }

  wsLeaveGame = () => {
    this.myWs.send(JSON.stringify({action: 'GAME_LEAVE'}))
  }

  wsNextMove = () => {
    this.myWs.send(JSON.stringify({action: "GAME_MOVE"}))
  }

  wsChangeDirection = (direction) => {
    this.myWs.send(JSON.stringify({action: 'GAME_DIRECTION', data: direction}))
  }

  wsQuickGame = () => {
    this.myWs.send(JSON.stringify({action: 'GAME_QUICK'}))
}

}
export default Controller;