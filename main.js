document.addEventListener("DOMContentLoaded", function(e){
  var g = new JustGage({
    id: "gauge",
    value: 7,
    min: 0,
    max: 10,
    title: "Visitors"
  });

  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2019-05-14T05:00:00Z', '2019-05-14T05:10:00Z', '2019-05-14T05:20:00Z', '2019-05-14T05:30:00Z', '2019-05-14T05:40:00Z', '2019-05-14T06:50:00Z'],
      datasets: [{
        label: '# of Votes',
        data: [
          {t:new Date('2019-05-14T05:00:00Z'),y:12},
          {t:new Date('2019-05-14T05:10:00Z'),y:19},
          {t:new Date('2019-05-14T05:20:00Z'),y:3},
          {t:new Date('2019-05-14T05:30:00Z'),y:5},
          {t:new Date('2019-05-14T05:40:00Z'),y:2},
          {t:new Date('2019-05-14T05:50:00Z'),y:3}
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
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

  let addButton = document.getElementById("addButton");
  addButton.addEventListener("click", function (e) {
    var rand = Math.random() * 200 -100 | 0;
    rand = rand / 10;
    console.log("データ追加:" + rand)
  })
})