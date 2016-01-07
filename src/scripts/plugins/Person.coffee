class Person 
	constructor: (@name) ->

	talk: ->
		console.log "My name is #{@name}"

	win: ->
		console.log "#{@name} wins!"


module.exports = Person