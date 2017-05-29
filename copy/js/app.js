( function( ){
'use strict';
   var app = angular.module( "loginForm", [] );

        app.config(function($routeProvider){
            $routeProvider
                .when("/main",{
                    templateUrl: "main.html",
                    controller: "mainCtrl"
                })
        });
    
    app.controller( "mainController", mainController );

    app.controller( "loginController", loginController );
    function loginController ( ){

        var self = this;
        self.name = "admin";
        self.password = "123";

        self.click = click;
        function click ( ){

            if( self.name === "admin" ){
                alert( "YES" );
            } else {
                alert( " NO " );
            }

        };

    };
        
    
  } )( );


    

