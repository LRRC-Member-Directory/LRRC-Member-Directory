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
  const bannerImage = document.querySelector("#bannerImage img");
  bannerImage.setAttribute("style", "width: 100%; max-width: 1000px;");
  replaceMap.outerHTML = bannerContainer.outerHTML;
  replaceMap.setAttribute(
    "style",
    "display: flex; justify-content: center; padding: 10px;"
  );
} else {
  document.querySelector("#bannerImage").remove();
}
