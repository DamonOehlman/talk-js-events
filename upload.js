var attachmate = require('attachmate'),
    path = require('path');
    
attachmate.upload(
    'http://localhost:5984/presentations/js-events', 
    path.resolve(__dirname, 'output'), 
    function(err) {
        console.log('done, error = ', err);
    }
);