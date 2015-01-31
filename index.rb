require 'imdb'
require 'awesome_print'
require "sinatra/reloader" 
require 'sinatra'

get "/" do
	erb :gmailclone
end

get "/sendmail" do
	erb :sendmail
end


