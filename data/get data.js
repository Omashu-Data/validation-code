function getData(data_base) {
  return data_base.getRange("A2:F" + data_base.getLastRow()).getValues()
}
