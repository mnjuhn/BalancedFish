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
        title: ""
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
            chart1.load(ingredientNutrition[d.id]);
            $('#composition-header').text("Nutrutional Composition: " + d.id);
        },
        onmouseout: function (d, i) { 
            chart1.load(ingredientNutrition.Overall);
            $('#composition-header').text("Nutrutional Composition: Overall");
        }
    },
    donut: {
        title: ""
    }
});

var costs = c3.generate({
    bindto: '#price-yield',
    data: {
        x:'x',
        columns: [
            ['x', '400', '600', '800', '1000', '1200', '1400', '1600'],
            ['price vs yield', 200, 400, 900, 1300, 1500, 1550, 1575]
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