//------ FUNCTION ------//
function userInfo (name , role , picture) {
    return `
        <div class="team-card">
            <div class="card-image">
                <img src="${picture}" alt="Wayne Barnett"/>
            </div>
            <div class="card-text">
                <h3>${name}</h3>
                <p>${role}</p>
            </div>
        </div>    
    `;
};

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
    },
    newMember = {
        profilePic: "img/walter-gordon-office-manager.jpg",
        fullName: "Walter Gordon",
        memberRole: "Office Manager"
    },
    newMember = {
        profilePic: "img/angela-lopez-social-media-manager.jpg",
        fullName: "Angela Lopez",
        memberRole: "Social Media Manager"
    },
    newMember = {
        profilePic: "img/scott-estrada-developer.jpg",
        fullName: "Scott Estrada",
        memberRole: "Developer"
    },
    newMember = {
        profilePic: "img/barbara-ramos-graphic-designer.jpg",
        fullName: "Barbara Ramos",
        memberRole: "Graphic Designer"
    }
];
console.log()

const card = document.querySelector(".team-container");

for (let i = 0 ; i < teamMembers.length ; i++) {
    const member =  userInfo(teamMembers[i].fullName,teamMembers[i].memberRole,teamMembers[i].profilePic);
    card.innerHTML += member;
}

const newFullName = document.querySelector("#name");
const newRole = document.querySelector("#role");
const newImage = document.querySelector("#image");

const addMember = document.querySelector("#addMemberButton");
addMember.addEventListener("click",
    function () {
        const newMember = userInfo(newFullName.value,newRole.value,newImage.value);
        card.innerHTML += newMember;
        console.log(card);
        newFullName.value = "";
        newRole.value = "";
        newImage.value = "";
    }
);
console.log(card);