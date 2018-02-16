angular.module('services', []).factory('memo', function () {
    var playboard = this;
    /*this.sumNumbers = function (a, b) {
        return a + b;
    }*/
    return playboard;
});


angular.module('memo', [])
    .controller('memoCtrl', function ($scope, $http) {
        $http.get("data/champions.json").then(function (response) {
            $scope.champions = Object.values(response.data.data);
            console.log($scope.champions);
            console.log(this);
            console.log($(".playboard"))
            $scope.cards = []
            for (let i = 0; i < 3; i++) {
                var id = Math.floor(Math.random() * ($scope.champions.length - 1));
                //console.log($scope.champions[id].name);
                $scope.cards.push($scope.champions[id].name)

                //WHY DOESNT THIS WORK ;(
                //$(".playboard").append("<card name='"+$scope.champions[id].name+"'></card>");

            }
            for(let i = 0; i < 2; i++){
                for(let j = 0; j < 3; j++){
                    generateCard($scope.cards[j],i)
                    console.log($scope.cards);

                }
                $scope.cards = shuffle($scope.cards);
            }
                
            console.log($scope.cards);
            //var URL = "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/{{$scope.cards}}_0.jpg';
        });

        //console.log($scope.champions);
    });

function generateCard(name,num){
    $(".playboard").append('<div class="col-lg-3 col-md-4 col-xs-6 card"><figure class="thumbnail" href="#"><img class="img-responsive" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/'+name+'_'+num+'.jpg" alt=""><div class="champName">'+ name+'</div></figure></div>');
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

/*angular.module("memo").component("card", {
    bindings: {
        name: "@"
    },
    replace: true,
    controller: function generateCards() {
        
    }
    ,
    template:
        '<div class="col-lg-3 col-md-4 col-xs-6 card"><figure class="thumbnail" href="#"><img class="img-responsive" src="{{card.text}}" alt=""><div class="champName">{{card.text}}</div></figure></div>'
}); //DOESNT FUCKIN WORK JEEZ
*/