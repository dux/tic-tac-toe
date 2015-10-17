// models
var Ttt = {

  moves: [],
  move_count: 0,
  start_player: 'o',
  current: 'x',

  // curernt user takes a move on a board
  play: function(x,y) {
    Ttt.moves[x][y] = Ttt.current;
  },

  // do we have a winner? resolved after each move
  we_have_a_winner: function() {
    var i, j, k, player, players = ['x','o'], t=Ttt.moves;

    while(player = players.shift()) {
      for (i=0; i<3; i++) {
        // horizontal win
        if (t[0][i] == player && t[1][i] == player && t[2][i] == player) {
          return player;
        }

        // vertical win
        if (t[i][0] == player && t[i][1] == player && t[i][2] == player) {
          return player;
        }
      }

      // diagonal wins
      if (t[0][0] == player && t[1][1] == player && t[2][2] == player) {
        return player;
      }
      if (t[0][2] == player && t[1][1] == player && t[2][0] == player) {
        return player;
      }
    }
  },

  // make a move, if able
  move: function(el) {
    var node = $(el.target), winner;
    var position = node.attr('id').split('-').map(function(o) { return parseInt(o); }); position.shift();

    if (Ttt.moves[position[0]][position[1]]) {
      alert('Allready played!');
      return;
    }

    Ttt.play(position[0], position[1])

    if (winner = Ttt.we_have_a_winner()) {
      App['player_'+Ttt.current+'_wins']( App.player_x_wins()+1 );
      Info.ok('Player "'+App['player_'+Ttt.current]()+'" is a winner');
      Ttt.reset();
      return;
    }

    Ttt.move_count++;

    if (Ttt.move_count == 9) {
      Info.ok('no winner, game resets');
      Ttt.reset();
      return;
    }

    node.html(Ttt.current);

    Ttt.current = Ttt.current == 'x' ? 'o' : 'x';
  },

  // reset dinamic variables and a board
  reset: function() {
    var i,j;

    // save history
    if(/[xo]/.test(String(Ttt.moves))) { // :) js
      App.history.unshift(Ttt.moves);
    }

    // reset vars
    this.moves = [[],[],[]];
    this.move_count = 0;

    // start player changes every turn
    this.start_player = this.start_player == 'x' ? 'o' : 'x';
    this.current = this.start_player;

    // reset board. this could easiliy be done with data bindings
    // but this works just fine for a demo
    for (i=0;i<3;i++) {
      for (j=0;j<3;j++) {
        $('#ttt-'+i+'-'+j).html('');
      }
    }
  }
}

// application definition
var App = {
  player_x: m.prop('Player X'),
  player_o: m.prop('Player O'),
  player_x_wins: m.prop(0),
  player_o_wins: m.prop(0),
  history:[
    [['x','o','x'], [], [], ]
  ],

  render_history: function(){
    var data = [], his, i, j, c, val;

    if (App.history.length == 0) {
      return m('p','empty');
    }

    for (his=0; c=App.history[his]; his++) {
      data.push('<table>');
      for (i=0;i<3;i++) {
        data.push('<tr>');

        for (j=0;j<3;j++) {
          val = c[i][j] || 'empty';
          
          data.push('<td><div class="el-'+val+'"></div></td>');
        }

        data.push('</tr>');
      }
      data.push('</table>');
    }

    return m.trust(data.join(''));
  }
}

