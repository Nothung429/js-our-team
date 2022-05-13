//------ FUNCTIONS ------//



//------ MAIN ------//
// 1. creo un array che contenga come oggetto i componeti del team
// 2. rimuovo dall'html la card contenente il primo componente del team
// 3. faccio ciclare (con un ciclo for per gli array) i componenti del team aggiunti tramite js
// 4. sostituisco il markup html con quello javascript tramite il template literal
// BONUS: rendere funzionante il form presente in pagina

const teamMembers = [
    newDude = {
        profilePic: "img/wayne-barnett-founder-ceo.jpg",
        fullName: "Wayne Barnett",
        memberRole: "Founder & CEO"
    },
    newDude = {
        profilePic: "img/angela-caroll-chief-editor.jpg",
        fullName: "Angela Caroll",
        memberRole: "Chief Editor"
    },

];
console.log()

const card = document.querySelector(".team-container");

for (let i = 0 ; i < teamMembers.length ; i++) {
    const member = `
        <div class="team-card">
            <div class="card-image">
                <img src="${teamMembers[i].profilePic}" alt="Wayne Barnett"/>
            </div>
            <div class="card-text">
                <h3>${teamMembers[i].fullName}</h3>
                <p>${teamMembers[i].memberRole}</p>
            </div>
        </div>    
    `;
    card.innerHTML += member;
}

const newFullName = document.querySelector("#name");
const newRole = document.querySelector("#role");
const newImage = document.querySelector("#image");
const addMember = document.querySelector("#addMemberButton");
addMember.addEventListener("click",
    function () {
        const newDude = Object.create(teamMembers);
        newDude.fullName = (newFullName.value);
        newDude.memberRole = (newRole.value);
        newDude.profilePic = (newImage.value);
        console.log(newDude);
        // newFullName.value = "";
        // newRole.value = "";
        // newImage.value = "";
        // console.log(teamMembers);
    }
);
console.log(newDude);