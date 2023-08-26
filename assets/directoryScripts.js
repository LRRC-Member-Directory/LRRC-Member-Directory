if (
  document.querySelector(".ListingResults_All") ||
  document.querySelector(".tabber")
) {
  const directory = document.querySelector("#memberDirectory");
  directory.style.display = "block";
}

try {
  const firstChild = document.querySelector("#memberDirectory").firstChild;
  const wrapper = document.createElement("div");
  wrapper.classList.add("headlineWrapper");

  firstChild.parentNode.insertBefore(wrapper, firstChild);

  wrapper.appendChild(firstChild);
} catch (error) {
  console.log(error);
}

const replaceMap = document.querySelector("#wc-directorySearchGoogleMap");

if (replaceMap !== null) {
  const bannerContainer = document.querySelector("#bannerImage");
  const bannerImage = bannerContainer.querySelector("img");

  bannerImage.style.width = "100%";
  bannerImage.style.maxWidth = "1000px";

  replaceMap.innerHTML = bannerContainer.outerHTML;
  replaceMap.classList.add("flex-container", "centered-container");

  const newImage = document.querySelector("#memberDirectory #bannerImage");
  newImage.classList.add("flex-container", "centered-container");
} else {
  const bannerImage = document.querySelector("#bannerImage");
  if (bannerImage) {
    bannerImage.remove();
  }
}
