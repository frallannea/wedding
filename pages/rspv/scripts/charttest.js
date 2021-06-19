var db = database;
var reference = db.ref('rspv');
reference.once('value', function(snapshot) {
    var answers = [0,0];
    snapshot.forEach(function(childSnapshot) {
        var userName = childSnapshot.key;
        var answer = childSnapshot.val().answer;
        console.log(`User ${userName}: ${answer}`);
        if (answer === "yes") {
            answers[0]++;
        } else {
            answers[1]++;
        }
    });
    drawChart(answers);
  });

function drawChart(data){
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Yes', 'No'],
            datasets: [{
                label: '# of Votes',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}
