class MyElement {
  constructor () {
    Polymer(MyElement.prototype);
  }

  get is () {
    return 'my-element';
  }
  
  created() {};

  ready() {};

  attached() {};

  detached() {};

  attributeChanged(name, type) {}
}

new MyElement();
