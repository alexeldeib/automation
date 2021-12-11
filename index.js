fetch('data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var trace1 = {
            x: [],
            y: [],
            type: 'scatter'
        };

        for (let i = 0; i < data.length; i++) {
            trace1.x.push(data[i].time)
            trace1.y.push(i+1)
        }
        console.log(trace1)
        var traces = [trace1];
        Plotly.newPlot('myDiv', traces);
    })
    .catch(error => console.log(error));

