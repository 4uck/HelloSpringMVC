import $ from 'jquery';

export var UIHelper = {
    getBgColor: function(parent, callbackfn) {
        callbackfn($('#elm').css('background-color'), parent);
    },
    setBgColor: function() {
        console.log("Hello world");
        $('.table-component').css('background-color', 'green');
        // $('.toast').toast('show');
    }
};