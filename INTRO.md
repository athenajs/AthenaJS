# AthenaJS

![npm](https://img.shields.io/npm/v/athenajs.svg)
![release](https://img.shields.io/github/release/athenajs/athenajs.svg)
![license](http://img.shields.io/npm/l/athenajs.svg)
![maintained](https://img.shields.io/maintenance/yes/2017.svg)

> &copy; 2017, Nicolas Ramz ([@warpdesign](https://www.github.com/warpdesign)). MIT licence.

A simple framework for building 2D games in HTML5 and JavaScript like this one:

[![Gods](https://raw.githubusercontent.com/AthenaJS/athenajs/docs/img/gods.png)](https://athenajs.github.io/athenajs-gods/)

## Features

 Here is a non-exhaustive list of features of AthenaJS:

 - Unlimited number of scenes with an unlimited number of sprites
 - Image-based **Sprites** with any number of **animations**
 - Tiles-based Maps with horizontal & vertical **scrolling**
 - Special scene transition effects like Fades, Mosaic can be added easily
 - Map VS Sprite and Sprite vs Sprite collision detection
 - Map **Triggers** support
 - Sound support with volume and horizontal panning
 - **Keyboard & Joytisck** input event supported (touch support is planned)

## Install

```
npm install athenajs --save
```

## Quick Start

**ES2015**

```javascript
import { Game, Scene, SimpleText } from 'athenajs';

// create a new game
const myGame = new Game({
    name: 'first-game',
    width: 320,
    height: 200
}),
// create a new empty scene
myScene = new class MyScene extends Scene{
    start() {
        const myText = new SimpleText('my text', {
            text: 'This is a test',
            color: 'black'
        });
        // add the object onto the scene
        this.addObject(myText);
    }
};

// play this scene
myGame.setScene(myScene);
```

**ES5**

in your html file:
```html
<script type="text/javascript" src="athenajs.js"></script>
<script type="text/javascript">
    window.onload = function () {
        var Game = AthenaJS.Game,
            Scene = AthenaJS.Scene,
            SimpleText = AthenaJS.SimpleText;

        // create a new game
        var myGame = new Game({
            name: 'first-game',
            width: 320,
            height: 200
        });

        // first extend the scene class which results in lots of code in Es5
        // call Scene constructor from MyScene constructor
        function MyScene() {
            Scene.call(this);
        }

        // inherit from Scene.prototype
        MyScene.prototype = Object.create(Scene.prototype);

        // redefine the start() method
        MyScene.prototype.start = function () {
            var myText = new SimpleText('my text', {
                text: 'This is a test',
                color: 'black'
            });
            // add the object onto the scene
            this.addObject(myText);
        }

        // finally correctly set the constructor to MyScene
        MyScene.prototype.constructor = MyScene;

        var myScene = new MyScene();

        // // play this scene
        myGame.setScene(myScene);
    };
</script>
```

## Apps written using AthenaJS

- [Gods](https://athenajs.github.io/athenajs-gods/)
- [Tetris](https://github.com/AthenaJS/athenajs-samples)

## Contributing

If you are interested in contributing to the AthenaJS code base, simply fork the repository and make a pull-request.

Once you have cloned the repository, simply type:

````bash
npm install && npm link && npm start
````

This will install the prerequisites, add a link to athenajs into your global npm modules directory and build & start watching for changes.

Now to start using athenaJS for testing, simply type the following in the directory of your project using AthenaJS:

````bash
npm link athenajs
````

This will add a link from your project to the global athenajs link that was just created.

## Credits

Athena JS icon by [Icons8](https://icons8.com/). Used under open-source licence.

## License

Copyright (c) Nicolas Ramz.

Licensed under the [MIT](LICENSE) License.
