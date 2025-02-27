const form_description = "Este formulario tiene como objetivo evaluar " +
  "la precisión de las predicciones generadas por nuestro modelo. Apreciamos " +
  "tu retroalimentación para mejorar su desempeño. Por favor, revisa las " +
  "predicciones proporcionadas y califica qué tan bien coinciden con los" +
  " resultados reales. ¡Gracias por tu participación! Si tienes cualquier " +
  "duda con respecto a las preguntas, no dudes en contactar al correo dani@omashu.gg.";

function createPlayerForm(form_list, responses, riotId, player_data) {
  var form_name = riotId + "'s Form";
  form_list.push(newForm = FormApp.create(form_name));
  form_list[form_list.length - 1].setDestination(FormApp.DestinationType.SPREADSHEET, responses.getId())
    .setLimitOneResponsePerUser(true)
    .setProgressBar(true)
    .setAllowResponseEdits(false)
    .setDescription(form_description);
  //console.log('Creant el formulari de ' + riotId);
  for (k = 0; k < player_data.length; k++) {
    var item = form_list[form_list.length - 1].addMultipleChoiceItem();
    current_pos = player_data[k][0];
    current_metric = player_data[k][1];
    current_average = getMetrics(current_pos);
    var pregunta = "El promedio de " + translate(current_metric) + " para la posición " + current_pos + " es de " +
      Math.round(current_average["average_array"][current_average["metrics"].indexOf(current_metric)] * 100) / 100 +
      ". Hemos detectado que estás un " + Math.abs(Math.round(player_data[k][3] * 10000) / 100) + "% por ";
    if (player_data[k][3] < 0) {
      pregunta += "debajo "
    } else {
      pregunta += "encima "
    }
    pregunta += "de este valor. ¿Cómo de acuerdo estás con esta afirmación?";
    item.setTitle(pregunta);
    item.setChoices([item.createChoice("De acuerdo"), item.createChoice("Ni de acuerdo ni en desacuerdo"),
    item.createChoice("En desacuerdo")]);
    item.setRequired(true);
  }
}
