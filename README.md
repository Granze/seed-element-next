#Polymer Element ES2015
> A minimal custom element starter-kit that let you write your elements using [ES2015](http://www.ecma-international.org/ecma-262/6.0/). 

:warning: This is just an experiment right now.

Install dependencies:
```bash 
npm i
```

Start the server and watch the files (you need [Polyserve](https://github.com/PolymerLabs/polyserve) installed).
```bash 
npm start
```

Build your element
```bash 
npm build
```

If you want to change the name of the created files, open ```package.json``` and modify the ```name``` property inside the ```config```:

```json
"config": {
  "name": "my-element"
}
```

## Inspirations
* [Polymer Boilerplate](https://github.com/webcomponents/polymer-boilerplate)
* Paul Lewis great article about his [guitar tuner](https://aerotwist.com/blog/guitar-tuner/)


## License

[MIT License](http://opensource.org/licenses/MIT)
