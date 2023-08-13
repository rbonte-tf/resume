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
                card.style.opacity = "1";          // New line: For Fade-In effect
                card.style.transform = "scale(1)";  // New line: Reset to original size
                card.style.display = "block";
            } else {
                card.style.opacity = "0";                      // New line: For Fade-Out effect
                card.style.transform = "scale(0.95)";          // New line: Slightly reduces size
                setTimeout(() => {                             // New block: Delay hiding the card
                    if (card.style.opacity === "0") {
                        card.style.display = "none"; 
                    }
                }, 500); // This delay should match your transition duration
            }
        });
        filterMessage.innerHTML = `Currently showing <strong>${skill}</strong> projects | <span id="resetFilter" style="cursor: pointer; font-weight: bold; color: #007bff;">Click here to reset.</span>`;
        filterMessage.style.display = "block";
    
        // Update resetFilter since the innerHTML changed.
        resetFilter = document.getElementById("resetFilter");  // Add this line.
        resetFilter.addEventListener("click", function() {
            projectCards.forEach(card => {
                card.style.opacity = "0";              // New line: Start Fade-Out effect before revealing all cards
            });
        
            setTimeout(() => {                         // New block: Delay revealing the card
                projectCards.forEach(card => {
                    card.style.opacity = "1";          // Fade-In effect
                    card.style.transform = "scale(1)";  // Reset to original size
                    card.style.display = "block";
                });
            }, 500); // This delay should match your transition duration
        
            filterMessage.style.display = "none";
        });        
    }    
});
