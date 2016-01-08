# Gulp Project Starter

A starter gulp project that gets you up and running with Jade, CoffeeScript, Browserify and PostCSS in no time.

## Jade

Jade is a template language which makes creating HTML-documents a breeze. 

By default all Jade templates are located in `src/templates/`, but this can be changed in `config.json` if you'd like it to reside somewhere else.

Read more about Jade [on their website](http://jade-lang.com/). 

## CoffeeScript & Browserify

CoffeeScript is a little language that compiles into JavaScript. Underneath that awkward Java-esque patina, JavaScript has always had a gorgeous heart. CoffeeScript is an attempt to expose the good parts of JavaScript in a simple way.

Browserify lets you require modules the same way you would in Node.js. It's fun!

You can include packages from your `node_modules` directory, and include your own files relative to the file you are currently working on.

The files you include do not have to be CoffeeScript. You can include vanilla JavaScript as well.

The source files are located in `src/scripts/` by default, but you can change this in `config.json`. You can even change the output extension if you'd like.

### A simple example

Let's say you have made a plugin (or module if you like), like so (with coffee of course)

```coffee
# plugins/Person.coffee
class Person
	constructor: (@name) ->

	talk: ->
		console.log "My name is #{@name}"

module.exports = Person
```

With browserify it is easy to use that plugin later in your code.

```coffee
# app.coffee
Person = require './plugins/Person'

me = new Person "John Doe"

me.talk()
```

Find more about using CoffeeScript on [their website](http://coffeescript.org/), and on Browserify [here](http://browserify.org/).

### PostCSS

PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.

PostCSS is really awesome. And it's fast. Blazing fast. I've added plugins so you can use a relatively SCSS-y syntax. 

Files as suffixed with `.scss` by default, so your SCSS syntax highlighting will still work.

Bundled you'll also find Lost Grid. Which is an ultra lightweight alternative to the likes of Bootstrap and Foundation. Read more about it [here](https://github.com/peterramsing/lost).