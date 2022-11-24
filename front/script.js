const JSONlink = "http://localhost:3000";
let data = await getJSON(JSONlink);

async function getJSON(link) {
    const rawdata = await fetch(link);
    console.log(rawdata);
    const data = await rawdata.json();
    console.log(data);
}


document.addEventListener("DOMContentLoaded", async ()=> {

})

const btnSearch = document.getElementById("btnSearch")

btnSearch.addEventListener("click", async () => {
    const input = document.getElementById("id").value
})