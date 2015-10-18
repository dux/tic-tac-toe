require 'rubygems'
require 'data_mapper'
require 'spec_helper'

require './app/models'
require './app/api'

describe 'App' do
  it 'rspec engine confirmes 1 is 1 :)' do
     1.should eql 1
  end 

  it 'checks if Game model is loaded' do
     Game.respond_to?(:create).should be true
  end 

  it 'checks if Game model has field moves' do
     Game.new.respond_to?(:moves).should be true
  end 

  it 'checks if GameApi.load returns array' do
    GameApi.new({}).load.class.name.should eql 'Array'
  end 
  
end