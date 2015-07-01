class MyElement {
  constructor () {
    Polymer(MyElement.prototype);
  }

  get is () {
    return 'my-element';
  }

  created() {
    console.log('element created!');
  };

  ready() {
    console.log('element ready');
  };

}

new MyElement();
