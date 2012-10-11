var module = ({
  hello: function() {
    console.log('DEBUG', 'hello');
  },
  init: function() {
    console.log('DEBUG', 'init');
    return this;
  }
}.init());

module.hello();
