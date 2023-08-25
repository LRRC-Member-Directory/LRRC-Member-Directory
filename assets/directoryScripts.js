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
if (replaceMap) {
  const bannerImage = document.querySelector("#bannerImage")
  console.log(bannerImage);
}
