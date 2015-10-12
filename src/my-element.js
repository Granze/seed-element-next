(function() {
  'use strict';

  class MyElement {
    beforeRegistrer() {
      this.is = 'my-element';

      this.properties = {
        who: {
          value: 'ES2015!',
          type: String
        }
      }
    }

    ready() {
      console.log('element ready');
    };

  }

  Polymer(MyElement);

})();

