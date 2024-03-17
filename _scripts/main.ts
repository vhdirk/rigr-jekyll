import * as Lightense from "lightense-images";

function setThemeVariant(mode) {
    localStorage.setItem("theme-variant", mode);
    let htmlElement = document.querySelector("body");

    if (mode === "dark") {
        htmlElement?.classList.remove("light")
        htmlElement?.classList.add("dark")

        document.getElementById("sun-icon")!.style.display = "inline-block";
        document.getElementById("moon-icon")!.style.display = "none";
    } else if (mode === "light") {
        htmlElement?.classList.remove("dark")
        htmlElement?.classList.add("light")

        document.getElementById("sun-icon")!.style.display = "none";
        document.getElementById("moon-icon")!.style.display = "inline-block";
    }

    // setGiscusTheme(theme);

}

function toggleThemeVariant() {
    if (localStorage.getItem("theme-variant") === "light") {
        setThemeVariant("dark");
    } else if (localStorage.getItem("theme-variant") === "dark") {
        setThemeVariant("light");
    }
}

function getSavedThemeVariant() {
    let currentTheme = localStorage.getItem("theme-variant");
    if (!currentTheme) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            currentTheme = "dark";
        } else {
            currentTheme = "light";
        }
    }

    return currentTheme;
}


// function toggleGiscusTheme(theme) {
//     const iframe = document.querySelector('iframe.giscus-frame');
//     if (iframe) iframe.contentWindow.postMessage({ giscus: { setConfig: { theme: `${location.origin}/giscus_${theme}.css` } } }, 'https://giscus.app');
// }

// function initGiscusTheme(evt) {
//     if (evt.origin !== 'https://giscus.app') return;
//     if (!(typeof evt.data === 'object' && evt.data.giscus)) return;
//     toggleGiscusTheme(sessionStorage.getItem("theme-variant") || (preferDark.matches ? "dark" : "light"));
//     window.removeEventListener('message', initGiscusTheme);
// }

function enableThemeVariantToggle() {
    const themeToggle = document.querySelector('#theme-variant-toggle');
    const preferDark = window.matchMedia("(prefers-color-scheme: dark)");

    // window.addEventListener('message', initGiscusTheme);
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleThemeVariant);
    }

    preferDark.addEventListener("change", e => setThemeVariant(e.matches ? "dark" : "light"));

    setThemeVariant(getSavedThemeVariant());
}

function addBackToTopBtn() {
    const backBtn = document.querySelector('#back-to-top');
    if (!backBtn) return;
    const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    const toggle = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 200 && !backBtn.classList.contains('shown')) {
            backBtn.classList.add('shown');
            backBtn.addEventListener('click', toTop);
        } else if (scrollTop <= 200 && backBtn.classList.contains('shown')) {
            backBtn.classList.remove('shown');
            backBtn.removeEventListener('click', toTop);
        }
    };
    window.addEventListener('scroll', toggle);
    toggle();
}


function enableOutdateCallout() {
    const callout = document.querySelector<HTMLElement>('#outdate_callout');
    if (!callout) {
        return;
    }
    const publish = document.querySelector<HTMLElement>('#publish');
    const updated = document.querySelector<HTMLElement>('#updated');
    if (!publish) {
        return;
    }

    const updateDate = new Date(updated?.textContent || publish.textContent!);
    const intervalDays = Math.floor((Date.now() - updateDate.getTime()) / (24 * 60 * 60 * 1000));
    const calloutDays = parseInt(callout.dataset.outdateDays || "-1");
    if (calloutDays >= 0 && intervalDays >= calloutDays) {
        const msg = callout.dataset.outdateTextBefore! + intervalDays + callout.dataset.outdateTextAfter;
        callout.querySelector('.message')!.textContent = msg;
        callout.classList.remove('hidden');
    }
}


function main() {

    if (Lightense) {
        Lightense(".prose img", { background: 'rgba(43, 43, 43, 0.19)' });
    }

    enableThemeVariantToggle();
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

document.addEventListener('DOMContentLoaded', main, false);

