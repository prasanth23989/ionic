 var options = {
            scales: {
                xAxes: [
                    {
                        id: "bar-x-axis2",
                        stacked: true,
                        categoryPercentage: 0.5,
                        barPercentage: 0.5
                    },
                    {
                        display: true,
                        stacked: true,
                        id: "bar-x-axis1",
                        type: 'category',
                        categoryPercentage: 0.4,
                        barPercentage: 1,
                        gridLines: {
                            offsetGridLines: true
                        }
                    }
                ],

                yAxes: [{
                    id: "bar-y-axis1",
                    stacked: false,
                    ticks: {
                        beginAtZero: true
                    }
                }]

            }
        };

        var ctx = document.getElementById("canvas").getContext("2d");
        var myBarChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
