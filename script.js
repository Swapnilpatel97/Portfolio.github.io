function SendMail()
{
    var params={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        phone : document.getElementById("phone").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_n1f71wn", "template_no29614" , params).then(function(res){
        alert("Success !!");
    })
}


function showProjects(projects) {
    let projectsContainer = document.querySelector(".work .box-container");
    let projectsHTML = "";
    projects.forEach(project => {
        // Appending file extension (.png) to the image filename
        let imagePath = `/assets/images/projects/${project.image}.png`;

        // Constructing the HTML for each project
        projectsHTML += `
            <div class="grid-item ${project.category}">
                <div class="box tilt" style="width: 380px; margin: 1rem">
                    <img draggable="false" src="${imagePath}" alt="${project.name}" />

                    <div class="content">
                        <div class="tag">
                            <h3>${project.name}</h3>
                        </div>
                        <div class="desc">
                            <p>${project.desc}</p>
                            <div class="btns">
                                <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
                                <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>`;
    });
    projectsContainer.innerHTML = projectsHTML;

    // Initialize Isotope
    var $grid = $('.box-container').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        masonry: {
            columnWidth: 200
        }
    });

    // Filter items on button click
    $('.button-group').on('click', 'button', function () {
        $('.button-group').find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
}
getProjects().then(data => {
    showProjects(data);
})
