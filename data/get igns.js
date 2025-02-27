function getIGNs(puuids, data) {
  player_igns = [];
  /*get the puuids associated with that player's current riotId*/
  for (j = 1; j < data.length; j++) {
    if (puuids.includes(data[j][0])) {
      if (!player_igns.includes(data[j][1])) {
        player_igns.push(data[j][1]);
      }
    }
  }
  /*player not found in database*/
  if (player_igns == []) {
    console.log("PLAYER NOT FOUND IN DATA BASE");
    return [];
  }
  return player_igns;
}
