document.getElementById("About").style.display = "block";
document.getElementById("defaultOpen").click();

document.addEventListener("DOMContentLoaded", function () {
    let projectCards = document.querySelectorAll(".project-card");
    let skills = document.querySelectorAll(".skill");
    let filterMessage = document.getElementById("filterMessage");
    let resetFilter = document.getElementById("resetFilter");

    let clickableSkills = document.querySelectorAll(".skill.clickable");

    clickableSkills.forEach(skill => {
        skill.addEventListener("click", function () {
            let selectedSkill = this.textContent;
            filterProjectsBySkill(selectedSkill);
        });
    });


    function filterProjectsBySkill(skill) {
        projectCards.forEach(card => {
            let cardSkills = card.querySelectorAll(".skill");
            let hasSkill = Array.from(cardSkills).some(s => s.textContent === skill);

            if (hasSkill) {
                card.style.opacity = "1";
                card.style.transform = "scale(1)";
                card.style.display = "block";
            } else {
                card.style.opacity = "0";
                card.style.transform = "scale(0.95)";
                setTimeout(() => {
                    if (card.style.opacity === "0") {
                        card.style.display = "none";
                    }
                }, 500);
            }
        });
        filterMessage.innerHTML = `Currently showing <strong>${skill}</strong> projects | <span id="resetFilter" style="cursor: pointer; font-weight: bold; color: #007bff;">Click here to reset.</span>`;
        filterMessage.style.display = "block";

        resetFilter = document.getElementById("resetFilter");
        resetFilter.addEventListener("click", function () {
            projectCards.forEach(card => {
                card.style.opacity = "0";
            });

            setTimeout(() => {
                projectCards.forEach(card => {
                    card.style.opacity = "1";
                    card.style.transform = "scale(1)";
                    card.style.display = "block";
                });
            }, 500);

            filterMessage.style.display = "none";
        });
    }
});
