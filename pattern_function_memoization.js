(function () {

    Function.prototype.memorize = function() {
        var self = this,
            cache = {};

        return function(arg) {
            if (arg in cache) {
                console.log('DEBUG', 'cache hit: ' + arg);
                return cache[arg];
            } else {
                console.log('DEBUG', 'cache miss: ' + arg);
                cache[arg] = self(arg);
                return cache[arg];
            }
        };
    };

    function fooBar(a) {
        return a;    
    }

    var fooBarMemorize = fooBar.memorize();
    console.log(fooBarMemorize(1));
    console.log(fooBarMemorize(1));
    
    console.log(fooBarMemorize(2));

}());
