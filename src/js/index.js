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


var chart1 = c3.generate({
    bindto: '#chart1',   
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

var chart2 = c3.generate({
    bindto: '#chart2',   
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
        },
        onmouseout: function (d, i) { 
            chart1.load(ingredientNutrition.Overall);
        }
    },
    donut: {
        title: ""
    }
});

var chart = c3.generate({
    bindto: '#chart3',   
    data: {
        columns: [
            ['Soy Meal X', 30],
            ['Fish Meal Y', 120],
            ['Amino Acid Mix A', 120]
        ],
        type : 'donut',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
        title: "Iris Petal Width"
    }
});
