function createButton(title) {
  let button = document.createElement("a");
  button.text = title;
  return button;
}

function createBackButton() {
  let backButton = createButton("«");
  backButton.addEventListener("click", () => {
    onBackButtonClicked();
  });
  return backButton;
}

function createForwardButton() {
  let forwardButton = createButton("»");
  forwardButton.addEventListener("click", () => {
    onForwardButtonClicked();
  });
  return forwardButton;
}

function parseDigestNumberFromUrl() {
  let pathParts = location.pathname.split("/");
  return Number.parseInt(pathParts.slice(-1));
}

function constructUrl(digestNumber = 1) {
  let pathParts = location.pathname.split("/");
  let newPath = pathParts.slice(0, -1).concat([digestNumber]).join("/");
  return `${location.protocol}//${location.host}${newPath}`;
}

function navigateToDigest(url) {
  window.location = url;
}

function onBackButtonClicked() {
  let digestNumber = parseDigestNumberFromUrl();
  let url = constructUrl(--digestNumber);
  navigateToDigest(url);
}

function onForwardButtonClicked() {
  let digestNumber = parseDigestNumberFromUrl();
  let url = constructUrl(++digestNumber);
  navigateToDigest(url);
}

function addNavigationButtonsToPage() {
  let mainElement = document.querySelector(".main");
  let backButton = createBackButton();
  let forwardButton = createForwardButton();

  let container = document.createElement("div")
  container.classList.add("digest-plus-navigation")
  container.appendChild(backButton);
  container.appendChild(forwardButton);

  mainElement.parentNode.insertBefore(container, mainElement.nextSibling);
}

addNavigationButtonsToPage();
