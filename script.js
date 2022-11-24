const JSONlink = "http://localhost:3000";



async function getJSON(link) {
    const rawdata = await fetch(link);
    const data = await rawdata.json();
    console.log(data);
    return data
}


document.addEventListener("DOMContentLoaded", async ()=> {
    let data = await getJSON(JSONlink);


    data.forEach(element => {
        document.getElementById("info").innerHTML += 
        `
        <div class="mb-2 fw-bold bg-light" style="color: black;">
        ID: ${element.id} <br>
        Nombre: ${element.first_name} <br>
        Apellido: ${element.last_name} <br>
        Género: ${element.gender} <br>
        Email: ${element.email} <br>
        </div>
        `
    });
})

const btnSearch = document.getElementById("btnSearch")

btnSearch.addEventListener("click", async () => {
    const input = document.getElementById("id").value
})
