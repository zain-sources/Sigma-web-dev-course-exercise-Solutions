document.getElementById("generate-btn").addEventListener("click", async function () {
    document.getElementsByClassName("loader")[0].style.display = "block";
    document.body.style.cursor = "wait";
    document.getElementById("main").style.filter = "blur(5px)";
    

    let jsons = await getData();
    let table_body = document.getElementById("data-table");
    table_body.innerHTML = "";
    table_rows = "";
    Array.from(jsons).forEach(employee => {
        table_rows += `<tr>
            <td>${employee.name}</td>
            <td>${employee.age}</td>
            <td>${employee.city}</td>
            <td>$${employee.salary}</td>
            <td>${employee.department}</td>
            <td>${employee.isManager}</td>
        </tr>`;
    })
    table_body.innerHTML = table_rows;

    document.getElementById("main").style.filter = "blur(0px)";
    document.body.style.cursor = "default";
    document.getElementsByClassName("loader")[0].style.display = "none";
});


async function getData() {
    const drul = "http://localhost:3000/deletedata";
    const gurl = "http://localhost:3000/generatedata";

    try {
        const dresponse = await fetch(drul);
        const gresponse = await fetch(gurl);
        if (!gresponse.ok) {
            throw new Error(`Response status: ${gresponse.status}`);
        }

        const json = await gresponse.json();
        return json;
    } catch (error) {
        console.error(error.message);
        alert("An error occurred. Please try again later.")
    }
}

