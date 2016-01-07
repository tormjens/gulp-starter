Plugin = require './plugins/Person'
jQ     = require 'jquery-browserify'

Person = new Plugin 'Tor Morten'

jQ(document).ready ($) ->
	$('.container').on 'click', '.item', ->
		Person.win()