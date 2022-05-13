//------ FUNCTIONS ------//



//------ MAIN ------//
// 1. creo un array che contenga come oggetto i componeti del team
// 2. rimuovo dall'html la card contenente il primo componente del team
// 3. faccio ciclare (con un ciclo for per gli array) i componenti del team aggiunti tramite js
// 4. sostituisco il markup html con quello javascript tramite il template literal
// BONUS: rendere funzionante il form presente in pagina

const teamMembers = [
    {
        profilePic: "img/wayne-barnett-founder-ceo.jpg",
        fullName: "Wayne Barnett",
        memberRole: "Founder & CEO"
    },
];

for (let i = 0 ; i < teamMembers.length ; i++) {
    console.log(teamMembers[i]);
}