addEventListener("DOMContentLoaded", async()=>{
    let data = {
        a: parseInt(prompt(`Ingrese el numero de la variable a:\n Opciones disponibles:\n 0. 'False'\n 1. 'True'`)),
        b:  parseInt(prompt(`Ingrese el numero de la variable b:\n Opciones disponibles:\n 0. 'False'\n 1. 'True'`)),
    };
    let peticion = await fetch("https://pruebacofenalco.000webhostapp.com/Operadores_logicos_29_10_2021/api.php", {method: "POST", body: JSON.stringify(data)});
    let json = await peticion.json();
    console.log(json);
    alert(JSON.stringify(json, undefined, 12));

    let miRespuestaPHPAND = document.querySelector("#miRespuestaPHPAND");
    let miRespuestaPHPOR = document.querySelector("#miRespuestaPHPOR");
    let miRespuestaPHPXORA = document.querySelector("#miRespuestaPHPXORA");
    let miRespuestaPHPXORB = document.querySelector("#miRespuestaPHPXORB");
    document.querySelector("#NombreServidor").insertAdjacentHTML("beforeend", json.Servidor);
    miRespuestaPHPAND.insertAdjacentHTML("beforeend", `
        <td>
            ${json.AND.A}<span></span>${json.AND.B}
        </td>
        <td>
            ${json.AND["A AND B"]}
        </td>
    `);
    miRespuestaPHPOR.insertAdjacentHTML("beforeend", `
        <td>
            ${json.OR.A}<span></span>${json.OR.B}
        </td>
        <td>
            ${json.OR["A OR B"]}
        </td>
    `);
    miRespuestaPHPXORA.insertAdjacentHTML("beforeend", `
        <td>
            ${json.XOR.A}
        </td>
        <td>
            ${json.XOR["NOT A"]}
        </td>
    `);
    miRespuestaPHPXORB.insertAdjacentHTML("beforeend", `
        <td>
            ${json.XOR.B}
        </td>
        <td>
            ${json.XOR["NOT B"]}
        </td>
    `);
})