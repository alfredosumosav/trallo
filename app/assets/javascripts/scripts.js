// document.getElementById("banner").addEventListener("click", function (e) {
//     ga('send', 'event', 'Test Link', 'test-click', 'view resume');
// });

const analyticsClickListener = el => {
    if (el.tagName === 'IMG') {
        ga('send', 'event', 'Image', 'click', `IMG: ${el.alt}`);
    } else if (el.tagName === 'svg') {
        ga('send', 'event', 'SVG/IMG', 'click', `SVG: ${el.textContent.trim()}`);
    } else if (el.tagName === 'A') {
        ga('send', 'event', 'Link', 'click', `A: ${el.href}`);
    } else if (el.tagName === 'I') {
        ga('send', 'event', 'ICON', 'click', `A: ${el.className}`);
    } else {
        ga('send', 'event', 'TEXT', 'click', el.innerHTML);
    }
}

let elements = document.getElementsByTagName("h1");
for (i = 0; i < elements.length; i++) {
    let el = elements[i];
    el.addEventListener("click", () => analyticsClickListener(el));
}

let elementsh2 = document.getElementsByTagName("h1");
for (i = 0; i < elementsh2.length; i++) {
    let el = elementsh2[i];
    el.addEventListener("click", () => analyticsClickListener(el));
}

let elements2 = document.getElementsByTagName("p");
for (i = 0; i < elements2.length; i++) {
    let el = elements2[i];
    el.addEventListener("click", () => analyticsClickListener(el));
}

let elements3 = document.getElementsByTagName("img");
for (i = 0; i < elements3.length; i++) {
    let el = elements3[i];
    el.addEventListener("click", () => analyticsClickListener(el));
}

let elements4 = document.getElementsByTagName("i");
for (i = 0; i < elements4.length; i++) {
    let el = elements4[i];
    el.addEventListener("click", () => analyticsClickListener(el));
}

let elements5 = document.getElementsByTagNameNS('http://www.w3.org/2000/svg', 'svg');
for (i = 0; i < elements5.length; i++) {
    let el = elements5[i];
    el.addEventListener("click", () => analyticsClickListener(el));
}

let elementsanchor = document.getElementsByTagName("a");
for (i = 0; i < elementsanchor.length; i++) {
    let el = elementsanchor[i];
    el.addEventListener("click", () => analyticsClickListener(el));
}