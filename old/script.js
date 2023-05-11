var data = {
  labels: ['Delayed'],
  datasets: [
    {
      data: [0.3, 0.7],
      backgroundColor: ['#E63329', '#FFFFFF']
    }
  ]
};

var options = {
  cutoutPercentage: 50,
  tooltips: {
    enabled: false
  },
  legend: {
    display: false
  },
  elements: {
    arc: {
      borderWidth: 0
    }
  }
};

var ctx = document.getElementById('chart1').getContext('2d');
var chart = new Chart(ctx, {
  type: 'doughnut',
  data: data,
  options: options
});
