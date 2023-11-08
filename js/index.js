console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  const r2Data = await data.results[2].eye_color;
  console.log(r2Data);
}

fetchData();
