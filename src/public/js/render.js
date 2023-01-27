  new Chart(process.env.ID_STRING, {
      type: process.env.TYPE_CHART,
        data: {
          labels: process.env.ARRAY_LABELS,
              datasets: [{
                 label: process.env.STRING_LABEL,
                 data: process.env.ARRAY_DATA,
                 borderWidth: process.env.BORDER_WIDTH_NUMBER
           }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: process.env.BEGIN_AT_ZERO
            }
        }
      }
  });