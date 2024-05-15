const barChart = document.getElementById('bar-chart');
const pieChart = document.getElementById('pie-chart');
const lineChart = document.getElementById('line-chart');

const months = ['January', 'February', 'March', 'April', 'May', 'June'];

new Chart(barChart, {
  type: 'bar',
  data: {
    labels: [
      'Product 1',
      'Product 2',
      'Product 3',
      'Product 4',
      'Product 5',
      'Product 6',
    ],
    datasets: [
      {
        label: '# of Orders',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: '#0D6EFD',
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

new Chart(pieChart, {
  type: 'pie',
  data: {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'Orders',
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#0D6EFD', '#FFCE56'],
        hoverOffset: 4,
      },
    ],
  },
});

new Chart(lineChart, {
  type: 'line',
  data: {
    labels: months,
    datasets: [
      {
        label: 'Orders',
        data: [54, 65, 79, 92, 57, 45, 65],
        fill: false,
        borderColor: '#0D6EFD',
        tension: 0.1,
      },
    ],
  },
});
