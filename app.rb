require 'sinatra'

# Database models
class Game
  include DataMapper::Resource
  property :id, Serial
  property :moves, Text
end

# API classes
class GameApi
  def save
    'kkk'
  end
end

# init database
DataMapper::setup(:default, "sqlite3://#{Dir.pwd}/tic-tac-toe.sqlite.db")
DataMapper.finalize
Game.auto_upgrade!

# before filter for all requests
before do
  @path = request.path.split('/')
  @path.shift
end

# simple api class, generic
get '/api/:klass/:method' do
  begin
    api = "#{params[:klass]}_api".classify.constantize.new
  rescue Exception => e
    return 'ERROR: API NOT FOUND'    
  end
  
  if api.respond_to?(params[:method])
    api.send(params[:method])
  else
    return 'ERROR: API method not found'
  end
end

# in root we serve the app
get '/' do
  haml :index
end

# all other pages -> not found
get '*' do
  status 404
  'ERROR: Page not found'
end