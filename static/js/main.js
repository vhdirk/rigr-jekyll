function setTheme(mode) {
    localStorage.setItem("theme-storage", mode);
    let htmlElement = document.querySelector("body");

    if (mode === "dark") {
        htmlElement.classList.remove("light")
        htmlElement.classList.add("dark")

        document.getElementById("sun-icon").style.display = "inline-block";
        document.getElementById("moon-icon").style.display = "none";
    } else if (mode === "light") {
        htmlElement.classList.remove("dark")
        htmlElement.classList.add("light")

        document.getElementById("sun-icon").style.display = "none";
        document.getElementById("moon-icon").style.display = "inline-block";
    }
}

function toggleTheme() {
    if (localStorage.getItem("theme-storage") === "light") {
        setTheme("dark");
    } else if (localStorage.getItem("theme-storage") === "dark") {
        setTheme("light");
    }
}

function getSavedTheme() {
    let currentTheme = localStorage.getItem("theme-storage");
    if (!currentTheme) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            currentTheme = "dark";
        } else {
            currentTheme = "light";
        }
    }

    return currentTheme;
}


function enableOutdateCallout() {
    const callout = document.querySelector('#outdate_callout');
    if (!callout) return;
    const publish = document.querySelector('#publish');
    const updated = document.querySelector('#updated');
    const updateDate = new Date(updated ? updated.textContent : publish.textContent);
    const intervalDays = Math.floor((Date.now() - updateDate.getTime()) / (24 * 60 * 60 * 1000));
    const calloutDays = parseInt(callout.dataset.outdateDays);
    if (intervalDays >= calloutDays) {
        const msg = callout.dataset.outdateTextBefore + intervalDays + callout.dataset.outdateTextAfter;
        callout.querySelector('.message').textContent = msg;
        callout.classList.remove('hidden');
    }
}


function main() {

    setTheme(getSavedTheme());
    // enablePrerender();
    // enableNavFold();
    // enableRssMask();
    enableOutdateCallout();

    if (document.body.classList.contains('post')) {
        // enableTocToggle();
        // enableTocIndicate();
        // addBackToTopBtn();
        // enableTocTooltip();
    }
}


document.addEventListener('DOMContentLoaded', function () {
   main()
}, false);



