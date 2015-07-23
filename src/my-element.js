class MyElement {
  constructor () {
    Polymer(MyElement.prototype);
  }

  get is () {
    return 'my-element';
  }

  created() {
    this.properties = {
      who: {
        value: 'ES2015!',
        type: String
      }
    }
  };

  ready() {
    console.log('element ready');
  };

}

new MyElement();
