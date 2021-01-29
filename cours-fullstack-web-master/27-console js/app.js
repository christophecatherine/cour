// XHR

document.getElementById(`button`).addEventListener(`click`, message)

function message() {
    // Objet XHR
    const xhr = new XMLHttpRequest();

    // OPEN

    xhr.open(`GET`, `user.json`, true)



    xhr.onload = function() {


        if (this.status === 200) {

            const user = JSON.parse(this.responseText);


            document.getElementById('reponse').innerHTML = `
           <ul>
                <li>id : ${user.id}</li>
                <li>Nom : ${user.name}</li>
                <li>Marrié : ${user.married}</li>
           
           </ul>
            `


        }
    }

    xhr.send()


}