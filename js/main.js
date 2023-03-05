// fired when page reloaded -> to reload project data
function initProjectData(data) {
    // after page reload -> reload all project data from js data file
    data.forEach(function(project, index) {
        var techStack

        // artifact for button view -> now not using button but just click the body
        // <button class="button-brown" onclick="openModalProject('` + index + `')"><i class="bi bi-justify-left"></i>  View Details </button>

        const template = `<div class="col project-card ` + project.techStack + `">
            <div class="card h-100 card-focus" onclick="openModalProject('` + index + `')">
                <div class="card-body">
                    <h5 class="card-title"> ` + project.title + ` (` + project.year + `) 
                    </h5>
                    <center><img src="` + project.thumbnail + `" alt="" loading="lazy"></center>
                    <p class="card-text">` + project.overview + `</p>
                </div>
            </div>
        </div>`
        $("#listProject").append(template)
    });
}

// show modal project detail by spesific data
function openModalProject(index) {
    var project = data[index]
    $("#modalProject-projectTitle").html(project.title + " (" + project.year + ")")
    $("#modalProject-projectOverview").html(project.overview)
    $("#modalProject-projectTech").html(project.tech)
    $("#modalProject-projectRole").html(project.roles)
    $("#modalProject-projectSneakPeak").html(project.sneakPeak)
    $("#modalProject-projectImage").empty()
    project.image.forEach(function(image, index) {
        var isActive = (index === 0) ? "active" : "";
        const imageTemplate = `<div class="carousel-item ` +
            isActive + `"> <img class="img-project" src="` + image + `" class="d-block w-100" alt="..." onclick="zoomImage('` + image + `')"> </div>`
        $("#modalProject-projectImage").append(imageTemplate)
    });
    if (project.image.length === 1) {
        $(".carousel-control-prev").addClass("d-none");
        $(".carousel-control-next").addClass("d-none");
    } else {
        $(".carousel-control-prev").removeClass("d-none");
        $(".carousel-control-next").removeClass("d-none");
    }
    $('#modalProject').modal('show');
}

// when modal project detail opened -> zoom image redirect to file path location
function zoomImage(url) {
    window.open(url, '_blank').focus();
}



// show spesific project type
function filterProjectType(projectStack) {
    container = $(".project-card")
    if (projectStack === "all") {
        container.show()
    } else {
        container.hide()
        container.filter('.' + projectStack).show()
    }
    $(".button-tech-stack").removeClass("active")
    $(".button-group-tech-stack .button-" + projectStack).addClass("active")

}

// parsing project id on url hash (#) to open modal by it's index
function getProjectIndexById(projectId) {
    var index = 0
    for (var i = 0; i < data.length; i++) {
        // Check if the child value matches the search value
        if (data[i].projectId === projectId) {
            // If a match is found, return the index of the element
            index = i
            break;
        }
    }
    return index
}

// scroll screen to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}