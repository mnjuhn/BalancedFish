var chart1 = c3.generate({
    bindto: '#chart1',   
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

var chart2 = c3.generate({
    bindto: '#chart2',   
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
