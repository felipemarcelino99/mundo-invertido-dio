
import { subscribeToMundoInvertido } from './data/mundo-invertido.js'

(function main() {
    const txtName = document.getElementById('txtName')
    const txtEmail = document.getElementById('txtEmail')
    const txtLevel = document.getElementById('txtLevel')
    const txtCharacter = document.getElementById('txtCharacter')

    document.getElementById('btnSubscribe').addEventListener('click', async () => {

        let name = txtName.value;
        let email = txtEmail.value;
        let level = txtLevel.value;
        let character = txtCharacter.value;

        let text;

        if (name == "" || email == "" || level == "" || character == "") {
            text = "Campo obrigatório"
        } else {
            text = ""
            const subscribe = {
                name: txtName.value,
                email: txtEmail.value,
                level: txtLevel.value,
                character: txtCharacter.value
            }

            const id = await subscribeToMundoInvertido(subscribe)
            alert(`Inscrição ${id} adicionada com sucesso!`)

            txtName.value = ''
            txtEmail.value = ''
            txtLevel.value = ''
            txtCharacter.value = ''
        }
        document.getElementById("requiredName").innerHTML = text;
        document.getElementById("requiredEmail").innerHTML = text;
        document.getElementById("requiredLevel").innerHTML = text;
        document.getElementById("requiredCharacter").innerHTML = text;
    })
})()
