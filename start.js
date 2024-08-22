function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tab");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove active class from all tab links
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the selected tab and add active class to the clicked tab link
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Default open the Home tab
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("home").style.display = "block";
});
