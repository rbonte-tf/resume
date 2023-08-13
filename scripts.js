document.getElementById("About").style.display = "block";
document.getElementById("defaultOpen").click();

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function() {
    let projectCards = document.querySelectorAll(".project-card");
    let skills = document.querySelectorAll(".skill");
    let filterMessage = document.getElementById("filterMessage");
    let resetFilter = document.getElementById("resetFilter");

    skills.forEach(skill => {
        skill.addEventListener("click", function() {
            let selectedSkill = this.textContent;
            filterProjectsBySkill(selectedSkill);
        });
    });

    function filterProjectsBySkill(skill) {
        projectCards.forEach(card => {
            let cardSkills = card.querySelectorAll(".skill");
            let hasSkill = Array.from(cardSkills).some(s => s.textContent === skill);
            if (hasSkill) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
        filterMessage.innerHTML = `Currently showing <strong>${skill}</strong> projects | <span id="resetFilter" style="cursor: pointer; font-weight: bold; color: #007bff;">Click here to reset.</span>`;
        filterMessage.style.display = "block";
    
        document.getElementById("resetFilter").addEventListener("click", function() {
            projectCards.forEach(card => card.style.display = "block");
            filterMessage.style.display = "none";
        });
    }    
});
