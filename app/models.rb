# only model in app
class Game
  include DataMapper::Resource
  property :id, Serial
  property :moves, Text
end

# init database
DataMapper::setup(:default, "sqlite3://#{Dir.pwd}/tic-tac-toe.sqlite.db")
DataMapper.finalize
Game.auto_upgrade!
