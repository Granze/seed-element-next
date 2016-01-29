'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SeedElement = function () {
  function SeedElement() {
    _classCallCheck(this, SeedElement);
  }

  _createClass(SeedElement, [{
    key: 'beforeRegister',
    value: function beforeRegister() {
      this.is = 'seed-element';

      this.properties = {
        /**
         * `fancy` indicates that the element should don a monocle and tophat,
         * while checking its pocket watch.
         */
        fancy: Boolean,

        /**
         * Describes the author of the element, but is really just an excuse to
         * show off JSDoc annotations.
         *
         * @type {{name: string, image: string}}
         */
        author: {
          type: Object,
          // Use `value` to provide a default value for a property, by setting it
          // on your element's prototype.
          //
          // If you provide a function, as we do here, Polymer will call that
          // _per element instance_.
          //
          // We do that to ensure that each element gets its own copy of the
          // value, rather than having it shared across all instances (via the
          // prototype).
          value: function value() {
            return {
              name: 'Dimitri Glazkov',
              image: 'http://addyosmani.com/blog/wp-content/uploads/2013/04/unicorn.jpg'
            };
          }
        }
      };
    }

    // Element Lifecycle

  }, {
    key: 'ready',
    value: function ready() {
      // `ready` is called after all elements have been configured, but
      // propagates bottom-up. This element's children are ready, but parents
      // are not.
      //
      // This is the point where you should make modifications to the DOM (when
      // necessary), or kick off any processes the element wants to perform.
    }
  }, {
    key: 'attached',
    value: function attached() {
      // `attached` fires once the element and its parents have been inserted
      // into a document.
      //
      // This is a good place to perform any work related to your element's
      // visual state or active behavior (measuring sizes, beginning animations,
      // loading resources, etc).
    }
  }, {
    key: 'detached',
    value: function detached() {}
    // The analog to `attached`, `detached` fires when the element has been
    // removed from a document.
    //
    // Use this to clean up anything you did in `attached`.

    // Element Behavior

    /**
     * Sometimes it's just nice to say hi.
     *
     * @param {string} greeting A positive greeting.
     * @return {string} The full greeting.
     */

  }, {
    key: 'sayHello',
    value: function sayHello() {
      var greeting = arguments.length <= 0 || arguments[0] === undefined ? 'Hello World!' : arguments[0];

      return 'seed-element says,  ' + greeting;
    }

    /**
     * The `seed-element-lasers` event is fired whenever `fireLasers` is called.
     *
     * @event seed-element-lasers
     * @detail {{sound: String}}
     */

    /**
     * Attempt to destroy this element's enemies with a beam of light!
     *
     * Or, at least, dispatch an event in the vain hope that someone else will
     * do the zapping.
     */

  }, {
    key: 'fireLasers',
    value: function fireLasers() {
      this.fire('seed-element-lasers', { sound: 'Pew pew!' });
    }
  }]);

  return SeedElement;
}();

Polymer(SeedElement);
