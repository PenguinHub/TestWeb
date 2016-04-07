(function ()
{
	var app=angular.module('myApp',[]);
	app.controller('myController', ['$http', function($http )//depdency injeiton, specifying the type of service needed
	{
		//this.items=???;
		var store=this;
		//$http({method: 'GET',url:'/products.json'});
		$http.get('/products.json').success(function(data)
		{
			store.products=data;

		});

	}]);

	app.controller('PanelController',function()
	{
		this.tab=1;

		this.isSelected =function(tab)
		{
			return this.tab==tab;
		}

		this.setTab = function(tab)
		{
			this.tab=tab;
		}

	});

	app.controller('ReviewController',function()
	{

		this.review={};
		this.addReview=function(product)
		{
			product.reviews.push(this.review);
			this.review={};
		}
	});
	app.directive('productTitle', function()
	{	
		return
		{

			// returns configuration defning how the directive will work
			restrict:'E', //type of directive, e for element, usedfor UI
			templateUrl;'product-title.html'
		};

	});
	app.directive('productPanels', function()
	{
		return
		{
			restrict:'E',
			templateUrl:'product-panels'
		};
	});
})();