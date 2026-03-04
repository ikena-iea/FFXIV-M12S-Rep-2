function moveImage(imageID, newX, newY, rotation = 0, mirror = false) {
  var imageToMove = document.getElementById(imageID);
  if (imageToMove) {
    void imageToMove.offsetHeight; // Force reflow (actually read it)

    //Move image to specified location
    imageToMove.style.left = newX + "px";
    imageToMove.style.top = newY + "px";

    //Transform (rotate/mirror)
    var transformValue = `rotate(${rotation}deg)`;
    if (mirror) {
      transformValue += ` scaleX(-1)`;
    } else {
      transformValue += ` scaleX(1)`;
    }
    imageToMove.style.transform = transformValue;
  } else {
    console.error("Could not move image (Not found: " + imageID + ")");
  }
}

function hideImage(imageID) {
  var imageToHide = document.getElementById(imageID);
  if (imageToHide) {
    imageToHide.style.display = "none";
  } else {
    console.error("Could not hide image (Not found: " + imageID + ")");
  }
}

function showImage(imageID) {
  var imageToShow = document.getElementById(imageID);
  if (imageToShow) {
    imageToShow.style.display = "inline";
  } else {
    console.error("Could not display image (Not found: " + imageID + ")");
  }
}

function changeImage(imageID, newImagePath) {
  var imageToChange = document.getElementById(imageID);
  if (imageToChange) {
    imageToChange.src = newImagePath;
  } else {
    console.error("Could not change image (Not found: " + imageID + ")");
  }
}

function reanimate(objID, animationName) {
  var objToAnimate = document.getElementById(objID);
  if (objToAnimate) {
    objToAnimate.classList.remove(animationName);
    objToAnimate.offsetHeight;
    objToAnimate.classList.add(animationName);
  } else {
    console.error("Could not animate (Not found: " + objID + ")");
  }
}

function cancelAnimation(objID, animationName) {
  var objToAnimate = document.getElementById(objID);
  if (objToAnimate) {
    objToAnimate.classList.remove(animationName);
    objToAnimate.offsetHeight;
  } else {
    console.error("Could not animate (Not found: " + objID + ")");
  }
}

//Function for setting the alert box settings (setText, addText
function setText(divID, newMessage) {
  var divToChange = document.getElementById(divID);
  if (divToChange) divToChange.innerHTML = newMessage;
  else console.error("Could not change text (Not Found: " + divID + ")");
}

function addText(divID, newMessage) {
  document.getElementById(divID).innerHTML += newMessage;
}

function setBgAndColor(divID, newBG, newColor) {
  document.getElementById(divID).style.backgroundColor = newBG;
  document.getElementById(divID).style.color = newColor;
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function validNoDuplicateRoleGroups(players4) {
  const s = new Set(players4.map((p) => roleGroup[p]));
  return s.size === players4.length; // all 4 are different role groups
}

function drawLineToElement(lineEl, aEl, bEl, svgEl) {
  const ra = aEl.getBoundingClientRect();
  const rb = bEl.getBoundingClientRect();
  const rs = svgEl.getBoundingClientRect();

  const x1 = ra.left + ra.width / 2 - rs.left;
  const y1 = ra.top + ra.height / 2 - rs.top;
  const x2 = rb.left + rb.width / 2 - rs.left;
  const y2 = rb.top + rb.height / 2 - rs.top;

  lineEl.setAttribute("x1", x1);
  lineEl.setAttribute("y1", y1);
  lineEl.setAttribute("x2", x2);
  lineEl.setAttribute("y2", y2);
}

function findPairIndexByValue(pairs, value) {
  return pairs.findIndex((pair) => pair.includes(value));
}

function randomOffset(amount) {
  return (Math.random() * 2 - 1) * amount;
}

function showNextButton() {
  document.getElementById("nextBtn").classList.remove("hidden");
}

function hideNextButton() {
  document.getElementById("nextBtn").classList.add("hidden");
}

function shiftImage(imageID, dx, dy) {
  const el = document.getElementById(imageID);

  const currentX = parseFloat(el.style.left) || 0;
  const currentY = parseFloat(el.style.top) || 0;

  el.style.left = currentX + dx + "px";
  el.style.top = currentY + dy + "px";
}

function getCenter(el) {
  const r = el.getBoundingClientRect();
  return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
}

function centerX(el) {
  const r = el.getBoundingClientRect();
  return r.left + r.width / 2;
}

function noOverlap(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.every((val) => !set2.has(val));
}
