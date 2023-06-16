// Old Way

// fetch("https://www.breakingbadapi.com/api/")
//   .then(function (response) {
//     console.log(response);
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   })

// New Way
const api = "https://www.breakingbadapi.com/api/characters";
async function getAPI() {
  try {
    const response = await fetch(api);
    const data = await response.json();
    // console.log(data);
    printData(data);
  } catch (e) {
    console.log(e.message);
  }
}

function printData(data) {
  const header = document.querySelector("#header"),
    content = document.querySelector("#content");
  header.innerHTML += `
    <select class="form-control" onchange="getActor(this.value)">
      <option>Please Select</option>
      ${data.map((actor) => `<option>${actor.name}</option>`)}
    </select>
    `;
}

async function getActor(name) {
  // console.log(name);
  if (name != "Please Select") {
    const response = await fetch(`${api}?name=${name}`);
    const data = await response.json();
    console.log(data);
    content.innerHTML = `
    <h2>${data[0].name} (${data[0].nickname})</h2>
    <h4>${data[0].portrayed}</h4>
    <img src="${data[0].img} width="250">
  `;
  } else {
    alert("wrong");
  }
}

getAPI();
