let toggleModeBtn = document.getElementById('toggleModeBtn');
toggleModeBtn.addEventListener('click', (e) => {
  toggleDarkMode();
});

function toggleDarkMode() {
  if (isDarkModeOn()) {
    localStorage.setItem('darkmode', false);
  } else {
    localStorage.setItem('darkmode', true);
  }
  updatePage();
}

function isDarkModeOn() {
  return localStorage.getItem('darkmode') == 'true';
}
function updatePage() {
  // theme

  let body = document.getElementsByTagName('body')[0];
  console.log('render');
  if (isDarkModeOn()) {
      body.classList.add('bg-dark');
  }else{
      body.classList.remove('bg-dark');
  }

  //username

  let username = document.getElementById('username');
  if(getUsername()!=null){
    username.innerHTML = getUsername();
  }
}

window.addEventListener('DOMContentLoaded', (event) => {
    updatePage();
});

function getUsername(){
  return localStorage.getItem('username');
}