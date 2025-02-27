function getPlayerData(riotId, position, data) {
  player_puuids = getPuuids(riotId, data);
  player_igns = getIGNs(puuids, data);
  /*retrieve data associated with that puuids*/
  player_data = [];
  for (j = 1; j < data.length; j++) {
    if (player_puuids.includes(data[j][0]) && data[j][2] == position) {
      player_data.push(data[j].slice(2, 6));
    }
  }
  player_data = sortMetrics(player_data);
  return player_data
}
