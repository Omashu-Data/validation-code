function getMetrics(position) {
  dict = {
    "TOP": getTopMetrics(),
    "JUNGLE": getJglMetrics(),
    "MIDDLE": getMidMetrics(),
    "BOTTOM": getBotMetrics(),
    "UTILITY": getSupMetrics()
  }
  return dict[position];
}
