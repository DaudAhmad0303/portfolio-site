document.addEventListener("alpine:init", () => {
    Alpine.store("theme", {
        dark: localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches),

        toggle() {
            this.dark = !this.dark
            localStorage.theme = this.dark ? "dark" : "light"
            document.documentElement.classList.toggle("dark", this.dark)
        }
    });

    document.documentElement.classList.toggle(
        "dark",
        Alpine.store("theme").dark
    )
})
