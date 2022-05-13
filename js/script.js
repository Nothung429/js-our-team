//------ FUNCTIONS ------//



//------ MAIN ------//
// 1. creo un array che contenga come oggetto i componeti del team
// 2. rimuovo dall'html la card contenente il primo componente del team
// 3. faccio ciclare (con un ciclo for per gli array) i componenti del team aggiunti tramite js
// 4. sostituisco il markup html con quello javascript tramite il template literal
// BONUS: rendere funzionante il form presente in pagina

const teamMembers = [
    newMember = {
        profilePic: "img/wayne-barnett-founder-ceo.jpg",
        fullName: "Wayne Barnett",
        memberRole: "Founder & CEO"
    },
    newMember = {
        profilePic: "img/angela-caroll-chief-editor.jpg",
        fullName: "Angela Caroll",
        memberRole: "Chief Editor"
    }
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
        const newMember = `
            <div class="team-card">
                <div class="card-image">
                    <img src="${newImage.value}" alt="Wayne Barnett"/>
                </div>
                <div class="card-text">
                    <h3>${newFullName.value}</h3>
                    <p>${newRole.value}</p>
                </div>
            </div>
        `;
        card.innerHTML += newMember;
        console.log(card);
        newFullName.value = "";
        newRole.value = "";
        newImage.value = "";
    }
);
console.log(card);