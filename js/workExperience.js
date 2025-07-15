var projects = [
    {visible: true, name: "Wall Town Wonders", description: "A mixed reality town building game where the player can gain resources through various minigames.", engine: "Unreal engine 5", language: "C++/Blueprints", duration: "September 2024 - June 2025", company: "Cyborn", platforms: "Meta Quest/Pico 4/Steam/Playstation VR 2", teamRole: "Intern Game Programmer", imageURL: "WallTownWondersThumbnail.png", project: "WallTownWonders"},
];

$("#projectList").ready(function () {
    setTimeout(() => {
        $("#loading").remove();

        projects.forEach(function (item) {
            if (item.visible){
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
            }
        });
    }, 250);
});