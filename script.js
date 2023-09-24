let copyBtn = document.getElementById('copy')


// Générer le mot de passe
function getPassword() {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzéèùçà/.=+_-°¨£&€§!.@#$%<>^&()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const passwordLenght = 24;
    let password = "";

    for(let i = 0; i < passwordLenght; i++){
        let randomNumber = Math.floor(Math.random() * chars.length)
        
        password += chars.substring(randomNumber, randomNumber + 1)

        // Afficher le mot de passe
        document.getElementById('password').value = password;

        // Changement du style du bouton copier
        copyBtn.style.background = "#6c757d";
        copyBtn.style.color = "#fff"
    }
}

// Copier le mot de passe
function copyMdp(){
    const inputPassword = document.getElementById('password')

    // Vérifier la longueur du mot de passe
    if(inputPassword.value.length === 24){
        inputPassword.select()
        document.execCommand('copy')

        // Changement du style du bouton copier
        copyBtn.style.background = "transparent";
        copyBtn.style.color = "#000"
    }else {
        alert('Veuillez générer un mot de passe')
    }
}

