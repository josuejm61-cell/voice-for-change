// Filterable Photo Gallery

const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        galleryItems.forEach(item => {

            if (filter === "all" || item.classList.contains(filter)) {
                item.classList.remove("hide");
            } else {
                item.classList.add("hide");
            }

        });
    });
});


// Color Scheme Toggle

const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
    });
}
// English / Spanish Language Toggle

const languageToggle = document.getElementById("language-toggle");

function changeLanguage(language) {

    const translatedElements =
        document.querySelectorAll("[data-en][data-es]");

    translatedElements.forEach(element => {

        if (language === "es") {
            element.textContent = element.getAttribute("data-es");
        } else {
            element.textContent = element.getAttribute("data-en");
        }

    });

    if (languageToggle) {

        if (language === "es") {
            languageToggle.textContent = "English";
        } else {
            languageToggle.textContent = "Español";
        }

    }

    document.documentElement.lang = language;

    localStorage.setItem("siteLanguage", language);
}


// Remember language between pages

const savedLanguage =
    localStorage.getItem("siteLanguage") || "en";

changeLanguage(savedLanguage);


// Switch language when button is clicked

if (languageToggle) {

    languageToggle.addEventListener("click", () => {

        const currentLanguage =
            localStorage.getItem("siteLanguage") || "en";

        if (currentLanguage === "en") {
            changeLanguage("es");
        } else {
            changeLanguage("en");
        }

    });

}