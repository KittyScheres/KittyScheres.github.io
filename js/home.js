var projects = [
    {visible: true, workExperience: true, name: "Wall Town Wonders", description: "A mixed reality town building game where the player can gain resources through various minigames.", engine: "Unreal engine 5", language: "C++/Blueprints", duration: "September 2024 - June 2025", company: "Cyborn", platforms: "Meta Quest/Pico 4/Steam/Playstation VR 2", teamRole: "Game Programmer", imageURL: "WallTownWondersThumbnail.png", project: "WallTownWonders"},
    {visible: true, workExperience: false, name: "OpenXR fundamentals", description: "A project where I followed a tutorial to get a better understanding of how to implement AR/VR into my own projects.", language: "C++", duration: "2 weeks", type: "Self-study", teamSize: "1 person", platforms: "Windows", teamRole: "Vr programmer", developmentYear: "2024", imageURL: "DefaultThumbnail.png", project: "OpenXrFundamentals"},
    {visible: true, workExperience: false, name: "On the Bubble", description: "A custom engine based game inspired by the game \"Super Monkey Ball\" with a big focus on user generated content.", language: "C++", duration: "32 weeks",  type: "Custom engine", teamSize: "13 people", platforms: "Windows/PS5", teamRole: "Generalist programmer", developmentYear: "2023-2024", imageURL: "OnTheBubbleThumbnail.png", project: "OnTheBubble"},
    {visible: true, workExperience: false, name: "Wombat combat engine", description: "A custom FPS engine that uses TrechBroom as its level editor.", language: "C++", duration: "16 weeks", type: "Custom engine", teamSize: "7 people", platforms: "Windows/PS5", teamRole: "Engine programmer", developmentYear: "2022-2023", imageURL: "WombatCombatThumbnail.png", project: "FPSEngine"},
];

$("#projectList").ready(function () {
    setTimeout(() => {
        $("#loading").remove();

        projects.forEach(function (item) {
            if (item.visible){
                if(item.workExperience){
                    $("#projectList").append(
                        "<a href=\"./index.html?page=workExperience&game=" + item.project + "\">" +
                        "   <div class=\"game\">" +
                        "       <img src=\"./images/thumbnails/" + item.imageURL + "\" />" +
                        "       <div class=\"text\">" +
                        "           <h3>" + item.name + "</h3>" +
                        "           <p>" + item.description + "</p>" +
                        "           <div class=\"tagsContainer\">" +
                        "               <p class=\"sameLine\">Engine: <b>" + item.engine + "</b></p>" +
                        "               <p class=\"sameLine\">Language: <b>" + item.language + "</b></p>" +
                        "               <p class=\"sameLine\">Duration: <b>" + item.duration + "</b></p>" +
                        "               <p class=\"sameLine\">Company: <b>" + item.company + "</b></p>" +
                        "               <p class=\"sameLine\">Platforms: <b>" + item.platforms + "</b></p>" +
                        "               <p class=\"sameLine\">Team role: <b>" + item.teamRole + "</b></p>" +
                        "           </div>" +
                        "       </div>" +
                        "   </div>" +
                        "</a>"
                    );
                } else {
                    $("#projectList").append(
                        "<a href=\"./index.html?page=teamProjects&game=" + item.project + "\">" +
                        "   <div class=\"game\">" +
                        "       <img src=\"./images/thumbnails/" + item.imageURL + "\" />" +
                        "       <div class=\"text\">" +
                        "           <h3>" + item.name + "</h3>" +
                        "           <p>" + item.description + "</p>" +
                        "           <div class=\"tagsContainer\">" + 
                        "               <p class=\"sameLine\">Language: <b>" + item.language + "</b></p>" +
                        "               <p class=\"sameline\">Development year: <b>" + item.developmentYear + "</b></p>" +
                        "               <p class=\"sameLine\">Duration: <b>" + item.duration + "</b></p>" +
                        "               <p class=\"sameLine\">Type: <b>" + item.type + "</b></p>" +
                        "               <p class=\"sameLine\">Team size: <b>" + item.teamSize + "</b></p>" +
                        "               <p class=\"sameLine\">Platforms: <b>" + item.platforms + "</b></p>" +
                        "               <p class=\"sameLine\">Team role: <b>" + item.teamRole + "</b></p>" +
                        "           </div>" +
                        "       </div>" +
                        "   </div>" +
                        "</a>"
                    );
                }
            }
        });
    }, 250);
});