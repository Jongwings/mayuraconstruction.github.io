document.addEventListener("DOMContentLoaded", function () {
    const portfolioContainer = document.getElementById("portfolio");
    const categories = document.querySelectorAll("nav a");

    // Load all items on page load
    renderItems("all");

    categories.forEach(function (categoryLink) {
        categoryLink.addEventListener("click", function (e) {
            e.preventDefault();

            // Update active class
            categories.forEach(function (link) {
                link.classList.remove("active");
            });
            this.classList.add("active");

            const categoryFilter = this.dataset.category;
            renderItems(categoryFilter);
        });
    });

    function renderItems(categoryFilter) {
        portfolioContainer.innerHTML = ""; // Clear portfolio

        const filteredImages = portfolioData.filter(function (item) {
            return categoryFilter === "all" || item.category === categoryFilter;
        });

        filteredImages.forEach(function (item) {
            const div = document.createElement("div");
            div.classList.add("portfolio-item");
            div.innerHTML = '<img src="' + item.image + '" alt="' + item.title + '">';
            portfolioContainer.appendChild(div);
        });
    }
});


// Sample data for portfolio items
const portfolioData = [
    { category: "building-construction", image: "img/conpaint.jpg", title: "Construction" },
    { category: "building-construction", image: "img/con1.jpg", title: "Construction" },
    { category: "building-construction", image: "img/con2.jpg", title: "Construction" },
    { category: "fixing-support", image: "img/fix.jpg", title: "Fixing Support" },
    { category: "building-construction", image: "img/con3.jpg", title: "Construction" },
    { category: "building-construction", image: "img/con4.jpg", title: "Construction" },
    { category: "architecture-design", image: "img/int1.jpg", title: "Architecture Design" },
    { category: "painting", image: "img/conpaint.jpg", title: "Painting" },
    { category: "house-renovation", image: "img/hr.jpg", title: "House Renovation" },
    { category: "house-renovation", image: "img/hr2.jpg", title: "House Renovation" },
    { category: "house-renovation", image: "img/hr3.jpg", title: "House Renovation" },
    { category: "building-construction", image: "img/con5.jpg", title: "Construction" },
    { category: "architecture-design", image: "img/ad.jpg", title: "Architecture Design" },
    { category: "building-construction", image: "img/cons.jpg", title: "Construction" },
    { category: "building-construction", image: "img/con6.jpg", title: "Construction" },
    { category: "building-construction", image: "img/con7.jpg", title: "Construction" },
    { category: "building-construction", image: "img/con8.jpg", title: "Construction" },
    { category: "architecture-design", image: "img/ad2.jpg", title: "Architecture Design" },
    { category: "building-construction", image: "img/con9.jpg", title: "Construction" },
    { category: "architecture-design", image: "img/ad3.jpg", title: "Architecture Design" },
    { category: "building-construction", image: "img/con10.jpg", title: "Construction" },
    { category: "interior-design", image: "img/id.jpg", title: "Interior Design" },
    { category: "architecture-design", image: "img/ad4.jpg", title: "Architecture Design" },
    { category: "building-construction", image: "img/con11.jpg", title: "Construction" },
    { category: "painting", image: "img/paint1.jpg", title: "Painting" },
    { category: "building-construction", image: "img/con12.jpg", title: "Construction" },
    { category: "architecture-design", image: "img/ad5.jpg", title: "Architecture Design" },
];
