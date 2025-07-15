var projects = [
    {visible: true, name: "On the Bubble", description: "A custom engine based game inspired by the game \"Super Monkey Ball\" with a big focus on user generated content.", language: "C++", duration: "32 weeks",  type: "Custom engine", teamSize: "13", platforms: "Windows/PS5", teamRole: "Generalist programmer", developmentYear: "2023-2024", imageURL: "OnTheBubbleThumbnail.png", project: "OnTheBubble"},
    {visible: true, name: "Wombat combat engine", description: "A custom FPS engine that uses TrechBroom as its level editor.", language: "C++", duration: "16 weeks", type: "Custom engine", teamSize: "7", platforms: "Windows/PS5", teamRole: "Engine programmer", developmentYear: "2022-2023", imageURL: "WombatCombatThumbnail.png", project: "FPSEngine"},
    {visible: true, name: "Camp champ", description: "A 2 vs 2 game of capture the flag made using Unreal engine 5.", language: "Unreal blueprints", duration: "12 weeks", type: "Game", teamSize: "14", platforms: "Windows", teamRole: "Tech lead", imageURL: "CampChampThumbnail.png", developmentYear: "2023", project: "CampChamp"},
    {visible: true, name: "Astrohaunt", description: "A spiritual successor to \"Paradroid\" developed using Unreal engine 5.", language: "Unreal blueprints", duration: "8 weeks", type: "Game", teamSize: "13", platforms: "Windows", teamRole: "Gameplay programmer", developmentYear: "2022", imageURL: "AstrohauntThumbnail.png", project: "Astrohaunt"},
];

$("#projectList").ready(function () {
    setTimeout(() => {
        $("#loading").remove();

        projects.forEach(function (item) {
            if (item.visible){
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
                    "               <p class=\"sameLine\">Team size: <b>" + item.teamSize + " people</b></p>" +
                    "               <p class=\"sameLine\">Platforms: <b>" + item.platforms + "</b></p>" +
                    "               <p class=\"sameLine\">Team role: <b>" + item.teamRole + "</b></p>" +
                    "           </div>" +
                    "       </div>" +
                    "   </div>" +
                    "</a>"
                );
            }
        });
    }, 250);
});