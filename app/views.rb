# before filter for all requests
before do

  # preapre path array, not used for now
  @path = request.path.split('/')
  @path.shift
end

# simple api class, generic
# * converts calls to API methods
# * ensures that unified JSON is allways retured
# 
# now mapped to GET for easy debuging, usually mapped only to POST
get '/api/:_klass/:_method' do
  begin
    api = "#{params[:_klass].to_s.singularize}_api".classify.constantize.new(params)
  rescue Exception => e
    
    # we have to return JSON in case of error
    status 500
    return %Q'{"error":"ERROR: API ERROR #{$!.message}"}'
  end
  
  if api.respond_to?(params[:_method])
    # wrapper so we can capture and prettify data
    data = api.call_api_method(params[:_method])
    
    # add IP info
    data[:ip] = request.ip
    
    # set response type to JSON
    content_type 'application/json'
    
    # retrun string
    return JSON.generate data
  else
    status 404
    return '{"error":"ERROR: API METHOD FOUND"}'
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