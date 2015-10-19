// single view-controler
var ViewTemplate = {

  mount: function(t, opts) {
    m.mount(document.getElementById('app'), {
      view:ViewTemplate[t],
      controller:function() {
        return opts;
      }
    });
  },

  index: function() {
    return m('.row', [
      m('.col-1', [
        m('h2', 'Game, player on a move: '+App['player_'+Ttt.current]()),
        m('br'),
        m('br'),
        m('.tic-tac-toe', 
          [0,1,2].map(function(i){
            return m('.row', 
              [0,1,2].map(function(j){
                return m('.col-1#ttt-'+i+'-'+j, { onclick:Ttt.move }, '');
              })
            );
          })
        )
      ]),
      m('div.col-200', [
        m('h4', 'Players'),
        m('input', { type:'text', placeholder:App.player_x(), onkeyup: m.withAttr('value', App.player_x) } ),
        m('br'),
        m('input', { type:'text', placeholder:App.player_o(), onkeyup: m.withAttr('value', App.player_o) } ),
        m('h4', 'Wins'),
        m('h5', App.player_x()+': '+App.player_x_wins()),
        m('h5', App.player_o()+': '+App.player_o_wins()),
        m('h4', 'History'),
        m('#history', App.render_history()),
      ])
    ]);
  },
  
  leaderboard: function(opts) {
    return m('div', [
      m('h4.winner', 'Game recap'),
      m('.winner', [
        m('div', opts.name),
        m('button.winner', { onclick:function() { ViewTemplate.mount('index') } }, 'Play another?')
      ])
    ]);
  }

}

// mount the app
ViewTemplate.mount('index');

// init app
Ttt.init();
Info.ok('Game loaded, vars reseted');
