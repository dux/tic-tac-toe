# master API class
class MasterApi
  def initialize(params)
    @params = params
  end

  def call_api_method(name)
    data = send name
    { data:data }
  end
end

# save and load last 5 games 
class GameApi < MasterApi
  
  # /api/game/save?moves=[["x","x","x"],[null,"o","o"],[]]
  def save
    moves = URI.unescape @params[:moves]
    ap moves
    Game.create moves:moves
    'Created'
  end

  # /api/game/load
  def load
    count = @params[:count] ? @params[:count].to_i : 5

    # load last x games
    Game.all( order:[:id.desc], limit:count ).map(&:moves)
  end
end
