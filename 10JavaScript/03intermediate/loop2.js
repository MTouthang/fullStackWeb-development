var movie = ["thor", "superman", "spiderman", "ronman"];

for (const n of movie) {
  console.log(n);
}

const symbol = {
  yt: "youtube",
  fb: "facebook",
  ig: "instagram",
  lco: "learncodeonline",
};

for (const n in symbol) {
  console.log(`key: ${n} values: ${symbol[n]}`);
}
