const names = ['MarkusMonkey#EUW', 'FoxTroop#EUW', 'alexrp 14#BTS14',
  'Daja5#ZERI', 'Geonoid#EUW', 'Kaysem#EUW',
  'TheFurryBeast#WOW', 'JavierSpain#EUW', 'NEVER FF GRRR#Ivy',
  'HyKei#HyKei', 'Tris#Miso'];
const positions = ['JUNGLE', 'TOP', 'JUNGLE',
  'BOTTOM', 'UTILITY', 'JUNGLE',
  'UTILITY', 'JUNGLE', 'TOP',
  'TOP', 'BOTTOM'];
const folder_name = 'Això és un test';
const responses_file_name = 'Responses';
const data_base_url = 'https://docs.google.com/spreadsheets/d/1amoZqSNms_ZVa42x6XSD-plgAzgfg0UAJJ0xsWPKLyk/edit?gid=92550684#gid=92550684';

function main() {
  const number_players = names.length;
  const folder = DriveApp.createFolder(folder_name);
  const responses = SpreadsheetApp.create(responses_file_name);
  var current_id = responses.getId();
  var current_file = DriveApp.getFileById(current_id);
  current_file.moveTo(folder);
  const data_base = SpreadsheetApp.openByUrl(data_base_url);
  const data = getData(data_base);
  var form_list = [];
  for (i = 0; i < number_players; i++) {
    metrics = getMetrics(positions[i]);
    player_data = getPlayerData(names[i], positions[i], data);

    createPlayerForm(form_list, responses, names[i], player_data);
    current_id = form_list[i].getId();
    current_file = DriveApp.getFileById(current_id);
    current_file.moveTo(folder);
  }
}
