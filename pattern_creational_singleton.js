var Singleton = (function() {

    var instance;

    function init() {
        return {
            publicMethod: function() {
                console.log( "public_method" );
            },
            publicProperty: "public_property" 
        }
    }

    return {
        getInstance: function() {
            if ( !instance ) {
                instance = init();
            }        
            return instance;
        }
    };

}());

var object = Singleton.getInstance();
object.publicMethod()
console.log( object.publicProperty );
