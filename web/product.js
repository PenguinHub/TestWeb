(function()
{
	var app=angular.module('myApp-products',[]);
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
			templateUrl:'product-panels',
			controller:function()
			{

			},
			controllerAs:'panels'
		};
	});
})();