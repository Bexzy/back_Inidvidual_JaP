const JSONlink = "https://bexzy.github.io/back_Inidvidual_JaP/database/database.json";
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