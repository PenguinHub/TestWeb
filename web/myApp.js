(function ()
{
	var app=angular.module('myApp',[]);
	app.controller('myController', function()
	{
		this.items=things;
	});

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
//dev
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
var things=[
	{
		name:"itemOne",
		cost: 2,
		description: "itemOne description",
		specs:"itemOne specs",
		reviews:
		[{
			stars:5,
			body:"I love this product!",
			author:"person@thomas.com"
		},
		{
			stars:1,
			body:"This product sucks!",
			author:"time@thomas.com"
		}
		]

	},
	{
		name:"item2",
		cost:3,
		description: "item2 description",
		specs:"item2 specs",
		reviews:
		[{
			stars:5,
			body:"I love this product!",
			author:"person@thomas.com"
		},
		{
			stars:1,
			body:"This product sucks!",
			author:"tifffme@thomas.com"
		}
		]
	}
	];
})();