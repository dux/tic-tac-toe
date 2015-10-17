# allways use C ver of JSON
# require 'json/ext'
# JSON.freeze

require 'rubygems'
require 'bundler'
require 'active_support/inflector'
require "sinatra/reloader"

Bundler.require

set :run, false

require './app.rb'

run Sinatra::Application
