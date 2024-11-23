let websiteName = document.getElementById("name");
let websiteURL = document.getElementById("url");
let tBody = document.getElementById("tbody");
let websitesArr = [];
let websiteNameRegex = /^[a-z\d ]{1,20}$/i;
let websiteURLRegex = /^(https?):\/\/(www.)?[a-zA-Z]{3,10}.(com|org|info)$/;
if (localStorage.getItem("websitesArr") != null) {
  websitesArr = JSON.parse(localStorage.getItem("websitesArr"));
  displaySites();
}
function addSite() {
  if (
    websiteNameRegex.test(websiteName.value) &&
    websiteURLRegex.test(websiteURL.value)
  ) {
    let site = {
      siteName: websiteName.value,
      siteURL: websiteURL.value,
    };
    websitesArr.push(site);
    localStorage.setItem("websitesArr", JSON.stringify(websitesArr));
    displaySites();
    clearInputs();
  } else {
    Swal.fire({
      title: "Error!",
      text: `Site Name or Url is not valid, Please try again`,
      icon: "error",
      confirmButtonText: "Try again",
    });
  }
}
function clearInputs() {
  websiteName.value = "";
  websiteURL.value = "";
}
function displaySites() {
  tBody.innerHTML = "";
  for (let i = 0; i < websitesArr.length; i++) {
    tBody.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${websitesArr[i].siteName}</td>
                <td><a href="${
                  websitesArr[i].siteURL
                }" target = "_blank" class="btn btn-success"><i class="fa-solid fa-eye"></i> Visit</a></td>
                <td><button onclick="deleteSite(${i})" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
            </tr>
        `;
  }
}
function deleteSite(siteIndex) {
  websitesArr.splice(siteIndex, 1);
  localStorage.setItem("websitesArr", JSON.stringify(websitesArr));
  displaySites();
}
