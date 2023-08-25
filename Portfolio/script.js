const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

const elem = document.querySelector("#repoNumber");


async function getCoderData(){
  var response = await fetch("http://api.github.com/users/calebjones1234");
  var coderData = await response.json();
  const repoTotal = coderData.public_repos;
  elem.innerText = repoTotal;
} 

getCoderData();
