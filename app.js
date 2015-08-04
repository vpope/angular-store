(function () {
    var app = angular.module('store', []);

    app.controller('StoreController', function ($http) {
        //this.products = gems;
        
        var _this = this;
        
        $http.get('data.json').success(function (data) {
            console.log(data);
            _this.products = data;
        });
    });

    var gems = [
        {
            name: 'Dodecahedron',
            price: 52.95,
            description: 'This is a gem that is awesomely awesome and will shine like you would not believe! You have to see it with your eyes and once you do you will want to buy it right away. ',
            canPurchase: true
        },
        {
            name: 'Pentagonal Gem',
            price: 23.11,
            description: 'jowifjoiej woiefj owef oiwejf  efoi eiofw oif jwoi jweoifjow wioef',
            canPurchase: true
        }
    ];

})();