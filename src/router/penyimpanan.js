// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
  if(!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if(sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}



// ---------- CHARTS ----------

// AREA CHART
var lineChartOptions1 = {
  series: [{
    name: 'Suhu (*C)',
    data: [24, 22, 23, 25, 24, 23, 22]
  }],
  chart: {
    height: 350,
    type: 'line',
    toolbar: {
      show: false,
    },
  },
  colors: ["#4f35a1"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth'
  },
  labels: ["0", "15", "30", "45", "60", "75", "90"],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'Suhu Ruang Penyimpanan (*C)',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  }
};

var lineChart1 = new ApexCharts(document.querySelector("#line-chart1"), lineChartOptions1);
lineChart1.render();

// LINE CHART
var lineChartOptions2 = {
  series: [{
    name: 'Kelembapan (%)',
    data: [50, 60, 62, 70, 65, 68, 58]
  }],
  chart: {
    height: 350,
    type: 'line',
    toolbar: {
      show: false,
    },
  },
  colors: ["#246dec"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth'
  },
  labels: ["0", "15", "30", "45", "60", "75", "90"],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'Kelembapan Penyimpanan (%)',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  }
};

var lineChart2 = new ApexCharts(document.querySelector("#line-chart2"), lineChartOptions2);
lineChart2.render();


// LINE CHART
var lineChartOptions3 = {
  series: [{
    name: 'Inte (%)',
    data: [10, 70, 82, 55, 68, 72, ]
  }],
  chart: {
    height: 350,
    type: 'line',
    toolbar: {
      show: false,
    },
  },
  colors: ["#246dec"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth'
  },
  labels: ["0", "15", "30", "45", "60", "75", "90"],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'Kelembapan Penyimpanan (%)',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  }
};

var lineChart3 = new ApexCharts(document.querySelector("#line-chart3"), lineChartOptions3);
lineChart3.render();


