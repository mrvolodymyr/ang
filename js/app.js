( function( ){

   var app = angular.module( "loginForm", [ ] );

        app.controller( "loginController", loginController );
    function loginController ( ){

        var self = this;
        self.name = "admin";
        self.password = "123";

        self.click = click;
        function click ( ){

            if( self.name === "admin" && self.password === "123"){
                // alert( "YES" );

                document.location.href = "template/main.html";
               
                // $routeProvider.otherwise( { redirectTo: "/main" } ) ;

            var route = angular.module( "loginRoute" [ "ngRoute" ] )
                .config( [ "$routeProvider", function config( $routeProvider ){
                $routeProvider
                    when("/main", {
                        templateUrl: "template/main.html",
                        controller: "mainCtrl"
                    })

        }

    ] );
            } else {
                alert( " NO " );
            }


        };
        

    };

    // var route = angular.module( "loginRoute" [ "ngRoute" ] )
    //     .config( [ "$routeProvider", function config( $routeProvider ){
    //         $routeProvider
    //             when("/main", {
    //                 templateUrl: "template/main.html",
    //                 controller: "mainCtrl"
    //             })
    //     }

    // ] )

      
  } )( );


    

