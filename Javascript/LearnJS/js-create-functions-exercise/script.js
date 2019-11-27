// Tip:
// you may need to use "document.write" to generate IMG tags
// 
// Here are some funny Giphy IDs:
// ------------------------------
// njYrp176NQsHS
// l0MYGb1LuZ3n7dRnO
// NCPcywASJGggw
// Ww2z5AGayCwTSRkBMT
//
// Here is the URL structure that you may want to use:
// ---------------------------------------------------
// https://media.giphy.com/media/{GIPHY_ID}/giphy.gif

function gifDisplay(displayCode) {
  const imgUrl = `https://media.giphy.com/media/${displayCode}/giphy.gif`;
  document.write(`<img src="${imgUrl}" />`);
}


gifDisplay('njYrp176NQsHS');
gifDisplay('l0MYGb1LuZ3n7dRnO');
gifDisplay('NCPcywASJGggw');
gifDisplay('Ww2z5AGayCwTSRkBMT');