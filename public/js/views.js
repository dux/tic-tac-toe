// single view-controler
var IndexPage = {
  controller: function() {},
  view: function() {
    return m('.row', [
      m('.col-1', [
        m('h2', 'Game, player on a move: '+App['player_'+Ttt.current]()),
        m('br'),
        m('br'),
        m('.tic-tac-toe', 
          (function(){
            var ret=[], i;
            for (i=0; i<3; i++) { 
              ret.push(m('.row', [
                m('.col-1#ttt-'+i+'-0', { onclick:Ttt.move }, '.'),
                m('.col-1#ttt-'+i+'-1', { onclick:Ttt.move }, '.'),
                m('.col-1#ttt-'+i+'-2', { onclick:Ttt.move }, '.'),
              ]));
            }
            return ret;
          })()
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
  }
}

var LeaderboardPage = {
  controller: function() {},
  view: function() {

  }
}

// mount the app
m.mount(document.getElementById('app'), IndexPage);

// init app
Ttt.init();

