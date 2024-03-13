const hideSidebarButton = document.getElementById('sidebarButton');
const sidebar = document.getElementById('sidebar');

hideSidebarButton.addEventListener('click', function() {
    sidebar.classList.add('hidden');
   });

document.addEventListener("DOMContentLoaded", function () {
    const hideSidebarButton = document.getElementById('sidebarButton');
    const sidebar = document.getElementById('sidebar');
    const butonOpenSideBar=document.getElementById('butonOpenSideBar')

    butonOpenSideBar.addEventListener("click", function () {
      sidebar.classList.toggle("hidden");
    });
  });

