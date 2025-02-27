function sortMetrics(metrics) {
  var sorted_metrics = [];
  const positions = ['TOP', 'JUNGLE', 'MIDDLE', 'BOTTOM', 'UTILITY'];
  for (l = 0; l < positions.length; l++) {
    for (m = 0; m < metrics.length; m++) {
      if (metrics[m][0] == positions[l]) {
        sorted_metrics.push(metrics[m]);
      }
    }
  }
  return sorted_metrics;
}
