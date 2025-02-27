function getPuuids(riotId, data) {
  puuids = [];
  /*get the puuids associated with that player's current riotId*/
  for (j = 1; j < data.length; j++) {
    if (data[j][1] == riotId) {
      if (!puuids.includes(data[j][0])) {
        puuids.push(data[j][0]);
      }
    }
  }
  /*player not found in database*/
  if (puuids == []) {
    console.log("PLAYER NOT FOUND IN DATA BASE");
    return [];
  }
  return puuids;
}
