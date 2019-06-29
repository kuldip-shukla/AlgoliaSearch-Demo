# AlgoliaSearch-Demo
 To integrate Algolia Search in your project follow the below steps
 
 # Step1: Create an account On algolia.com
 You can create a trial version(15 Days Validity) from https://www.algolia.com/users/sign_up
 
 # Step2: Create an Index
 You can create an index from Indice tab in your algolia.com account
 or
 You can also create an index from your code which is alson in this.
 
 # Step3: Add an Record
 Add record from Select Particular Index -> Add Record - > Select Your Option.
 or 
 Direct Add record in NoSQL or SQL Database and then upload.
 
                    #Demo Record
```javascript
[
{
	"community" : {
		"c_name" : "Toronto",
		"buldings" : [
			{
				"b_name" : "The One",
				"availableFor" : "Buy",
				"type" : "Residential"
			},
			{
				"b_name" : "First Canadian Place",
				"availableFor" : "Rent",
				"type" : "Residential"
			},
			{
				"b_name" : "The St. Regis Toronto",
				"availableFor" : "Buy",
				"type" : "Commercial"
			},
			{
				"b_name" : "Scotia Plaza",
				"availableFor" : "Rent",
				"type" : "Residential"
			},
			{
				"b_name" : "Aura",
				"availableFor" : "Rent",
				"type" : "Commercial"
			}
		]
	}
},
{
	"community" : {
		"c_name" : "Calgary",
		"buldings" : [
			{
				"b_name" : "The Bow",
				"availableFor" : "Buy",
				"type" : "Residential"
			},
			{
				"b_name" : "Telus Sky",
				"availableFor" : "Rent",
				"type" : "Residential"
			},
			{
				"b_name" : "Eighth Avenue Place",
				"availableFor" : "Buy",
				"type" : "Commercial"
			},
			{
				"b_name" : "Suncor Energy Centre",
				"availableFor" : "Rent",
				"type" : "Residential"
			},
			{
				"b_name" : "Bankers Hall - East",
				"availableFor" : "Rent",
				"type" : "Commercial"
			}
		]
	}
},
{
	"community" : {
		"c_name" : "Montreal",
		"buldings" : [
			{
				"b_name" : "1000 de la Gauchetière",
				"availableFor" : "Buy",
				"type" : "Residential"
			},
			{
				"b_name" : "Tour de la Bourse",
				"availableFor" : "Rent",
				"type" : "Residential"
			},
			{
				"b_name" : "Place Ville-Marie",
				"availableFor" : "Buy",
				"type" : "Commercial"
			}
		]
	}
},
{
	"community" : {
		"c_name" : "Vancouver",
		"buldings" : [
			{
				"b_name" : "Trump International Hotel and Tower",
				"availableFor" : "Buy",
				"type" : "Residential"
			}
		]
	}
}
]
```

# Step4: Get Your Keys
```javascript
var client = algoliasearch('Application ID', 'Admin Api Key');
```

# Step5: After Clone Write below Commands
    npm install
    nodemon or node algolia.js
