const select ={
    tbod: document.querySelector('#táblaTESSST')
};

const state = {
    host: 'http://localhost:8000/',
    ships: []
};

const endpoints = {
    ship:'ships'
};

window.addEventListener('load', start);

function start(){
    fetchShips(state.host + endpoints.ship)
};

function fetchShips(url){
    fetch(url)
    .then(response => {
        console.log("'clean respons" + response + "'")
        return response.json()
    })
    .then(result =>{

        state.ships=result;
        console.log(result)
        console.log(state.ships.length)
        renderShips()
    }
    )
};

function renderShips(){
    var rows = ""
    console.log("renderShip started")
    for (let i = 0; i < state.ships.length; i++) {
        var row =`<tr>
                    <td>${state.ships[i].name}</td>
                    <td>${state.ships[i].length}</td>
                    <td>${state.ships[i].price}</td>
                    <td>${state.ships[i].person}</td>
                    <td>${state.ships[i].trailer}</td>
                </tr>`;
                rows += row
    }
    console.log(rows)
    select.tbod.innerHTML = rows
}
