
var ingredientNutrition = { 
    Overall: {
        columns: [
            ['Protein', 30],
            ['NFE (Carbs)', 120],
            ['Fat', 120],
            ['Ash', 120],
            ['Other', 120]
        ]
    },
    Insects: {
        columns: [
            ['Protein', 11],
            ['NFE (Carbs)', 141],
            ['Fat', 120],
            ['Ash', 22],
            ['Other', 33]
        ]
    },
    'Fish Meal': {
        columns: [
            ['Protein', 12],
            ['NFE (Carbs)', 67],
            ['Fat', 77],
            ['Ash', 25],
            ['Other', 10]
        ]
    },
    'Soy Meal': {
        columns: [
            ['Protein', 12],
            ['NFE (Carbs)', 67],
            ['Fat', 77],
            ['Ash', 25],
            ['Other', 10]
        ]
    },
    'Cyclops': {
        columns: [
            ['Protein', 10],
            ['NFE (Carbs)', 67],
            ['Ash', 25],
            ['Other', 10]
        ]
    },
    'Daphnia': {
        columns: [
            ['Protein', 12],
            ['NFE (Carbs)', 67],
            ['Ash', 25],
            ['Other', 10]
        ]
    },
    'Salmon Pellets': {
        columns: [
            ['Protein', 12],
            ['NFE (Carbs)', 47],
            ['Fat', 33],
            ['Ash', 18],
            ['Other', 4]
        ]
    },
    'Carp Pellets': {
        columns: [
            ['Protein', 12],
            ['NFE (Carbs)', 67],
            ['Fat', 77],
            ['Ash', 25],
            ['Other', 10]
        ]
    }
}


var composition = c3.generate({
    bindto: '#composition',   
    data: {
        columns: ingredientNutrition.Overall.columns,
        type : 'donut',
        onclick: function (d, i) { 
            console.log("onclick", d, i); 
            chart2.load(d);
        },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
        title: "Nutrition: Overall"
    }
});

var ingredients = c3.generate({
    bindto: '#ingredients',   
    data: {
        columns: [
            ['Insects', 30],
            ['Fish Meal', 120],
            ['Soy Meal', 120],
            ['Cyclops', 120],
            ['Daphnia', 120],
            ['Salmon Pellets', 120],
            ['Carp Pellets', 120]
        ],
        type : 'donut',
        onclick: function (d, i) {             
        },
        onmouseover: function (d, i) { 
            composition.load({unload: true, columns: ingredientNutrition[d.id].columns});
            d3.select('#composition .c3-chart-arcs-title').node().innerHTML = "Nutrition: " + d.id;
        },
        onmouseout: function (d, i) { 
            composition.load({unload: true, columns: ingredientNutrition.Overall.columns});
            d3.select('#composition .c3-chart-arcs-title').node().innerHTML = "Nutrition: Overall";
        }
    },
    donut: {
        title: "Ingredients"
    }
});

var costs = c3.generate({
    bindto: '#price-yield',
    data: {
        x:'x',
        columns: [
            ['x', '400', '600', '800', '1000', '1200', '1400', '1600'],
            ['price vs yield', 400, 800, 1300, 1600, 1750, 1820, 1850],
            ['expected yield for given price', null, null, 1500]
        ],
        type: 'spline'
    },
    axis: {
        x: {
            label: 'Cost per ton'
        },
        y: {
            label: 'Yield in net kg'
        }
    }
});



// $(document).ready(function() {
//     $('#feed').DataTable( {
//         select: true
//     } );
// } );

$(document).ready(function() {
    var table = $('#feed').DataTable();
 
    $('#feed tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
            

        }
        else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');

            $('#report_title').html("Diet Report: " + $('td:eq(0)', this).html());
            var protein = parseFloat($('td:eq(3)', this).html());
            var ash = parseFloat($('td:eq(4)', this).html());
            var lipids = parseFloat($('td:eq(5)', this).html());
            var fiber = parseFloat($('td:eq(6)', this).html());

            var ingredientRow =  [
                    ['Protein', protein],
                    ['Ash', ash],
                    ['Lipids', lipids],
                    ['Fiber', fiber],
                    ['Other', 100-(protein+ash+lipids+fiber)],
                ];

            composition.load({unload: true, columns: ingredientRow});
        }
    } );
 
    $('#button').click( function () {
        table.row('.selected').remove().draw( false );
    } );
} );

var fishAndSoyMeal = c3.generate({
    bindto: '#price-meal',
    data: {
        x:'x',
        columns: [
            ['x', '10', '20', '30', '40', '50', '60', '70', '80', '90', '100'],
            ['price vs % of fish meal', 499, 618, 737, 856, 975, 1094, 1213, 1332, 1451, 1570],
            ['expected price for given fish meal %', null, null, 737]
        ],
        type: 'spline'
    },
    axis: {
        x: {
            label: '% of fish meal'
        },
        y: {
            label: 'Cost per ton'
        }
    }
});




var foodIngredients = {
    a: {
        columns: [
            ['Insects', 30],
            ['Fish Meal', 120],
            ['Soy Meal', 120],
            ['Cyclops', 120],
            ['Daphnia', 120],
            ['Salmon Pellets', 120],
            ['Carp Pellets', 120]
        ],
    },
    b: {
        columns: [
            ['Insects', 30],
            ['Fish Meal', 120],
            ['Soy Meal', 120],
            ['Cyclops', 120],
            ['Daphnia', 120],
            ['Salmon Pellets', 120],
            ['Carp Pellets', 120]
        ],
    },
    c: {
        columns: [
            ['Insects', 30],
            ['Fish Meal', 120],
            ['Soy Meal', 120],
            ['Cyclops', 120],
            ['Daphnia', 120],
            ['Salmon Pellets', 120],
            ['Carp Pellets', 120]
        ],
    },
    a: {
        columns: [
            ['Insects', 30],
            ['Fish Meal', 120],
            ['Soy Meal', 120],
            ['Cyclops', 120],
            ['Daphnia', 120],
            ['Salmon Pellets', 120],
            ['Carp Pellets', 120]
        ],
    },
    a: {
        columns: [
            ['Insects', 30],
            ['Fish Meal', 120],
            ['Soy Meal', 120],
            ['Cyclops', 120],
            ['Daphnia', 120],
            ['Salmon Pellets', 120],
            ['Carp Pellets', 120]
        ],
    },
    a: {
        columns: [
            ['Insects', 30],
            ['Fish Meal', 120],
            ['Soy Meal', 120],
            ['Cyclops', 120],
            ['Daphnia', 120],
            ['Salmon Pellets', 120],
            ['Carp Pellets', 120]
        ],
    },
    a: {
        columns: [
            ['Insects', 30],
            ['Fish Meal', 120],
            ['Soy Meal', 120],
            ['Cyclops', 120],
            ['Daphnia', 120],
            ['Salmon Pellets', 120],
            ['Carp Pellets', 120]
        ],
    },
    a: {
        columns: [
            ['Insects', 30],
            ['Fish Meal', 120],
            ['Soy Meal', 120],
            ['Cyclops', 120],
            ['Daphnia', 120],
            ['Salmon Pellets', 120],
            ['Carp Pellets', 120]
        ],
    },
    a: {
        columns: [
            ['Insects', 30],
            ['Fish Meal', 120],
            ['Soy Meal', 120],
            ['Cyclops', 120],
            ['Daphnia', 120],
            ['Salmon Pellets', 120],
            ['Carp Pellets', 120]
        ],
    },
    a: {
        columns: [
            ['Insects', 30],
            ['Fish Meal', 120],
            ['Soy Meal', 120],
            ['Cyclops', 120],
            ['Daphnia', 120],
            ['Salmon Pellets', 120],
            ['Carp Pellets', 120]
        ],
    },
    a: {
        columns: [
            ['Insects', 30],
            ['Fish Meal', 120],
            ['Soy Meal', 120],
            ['Cyclops', 120],
            ['Daphnia', 120],
            ['Salmon Pellets', 120],
            ['Carp Pellets', 120]
        ],
    },
    a: {
        columns: [
            ['Insects', 30],
            ['Fish Meal', 120],
            ['Soy Meal', 120],
            ['Cyclops', 120],
            ['Daphnia', 120],
            ['Salmon Pellets', 120],
            ['Carp Pellets', 120]
        ],
    },
    a: {
        columns: [
            ['Insects', 30],
            ['Fish Meal', 120],
            ['Soy Meal', 120],
            ['Cyclops', 120],
            ['Daphnia', 120],
            ['Salmon Pellets', 120],
            ['Carp Pellets', 120]
        ],
    },
    a: {
        columns: [
            ['Insects', 30],
            ['Fish Meal', 120],
            ['Soy Meal', 120],
            ['Cyclops', 120],
            ['Daphnia', 120],
            ['Salmon Pellets', 120],
            ['Carp Pellets', 120]
        ],
    },
}