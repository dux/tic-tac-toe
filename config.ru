# allways use C ver of JSON
# require 'json/ext'
# JSON.freeze

require 'rubygems'
require 'bundler'

require 'active_support/inflector'
require 'sinatra/reloader'

Bundler.require

set :run, false

# micro meta loader
[:models, :api, :views].map { |el| require "./app/#{el}" }

run Sinatra::Application
