fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // add more traces to plot same types of things against each other.
        // add more charts in different divs to multiple things. 
        var trace1 = {
            x: [],
            y: [],
            type: 'scatter'
        };

        var trace2 = {
            x: [],
            y: [],
            type: 'scatter'
        };

        var trace3 = {
            x: [],
            y: [],
            type: 'scatter'
        };

        for (let i = 0; i < data.length; i++) {
            trace1.x.push(data[i].time)
            trace2.x.push(data[i].time)
            trace3.x.push(data[i].time)

            trace1.y.push(i+1)
            trace2.y.push(i+100)
            trace3.y.push(i*100)
        }

        var traces1 = [trace1, trace2];
        var traces2 = [trace3]
        Plotly.newPlot('time', traces1);
        Plotly.newPlot('bigindex', traces2);
    })
    .catch(error => console.log(error));

