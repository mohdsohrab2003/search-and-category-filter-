let movieData = [
    {
        id: 1,
        title: "Aadujeevitham – The Goat Life (2024) WEB-DL Multi Audio [Hindi ORG. + Tamil + Telugu + Malayalam ... <span> + Kannada] Full Movie 480p [850MB] | 720p [1.7GB] | 1080p [3.4GB]</span>",
        genre: "Action",
        link:"https://movies4u.loan/",
        img: "Asset/movie1.webp",
    },
    {
        id: 2,
        title: "Allahr Vres (2024) WEB-DL Punjabi Full Movie 480p [400MB] | 720p [1.2GB] | 1080p [2.6GB]",
        genre: "Romance",
        link:"https://movies4u.loan/",
        img: "Asset/movie2 Allahr-Vres.webp",
    },
    {
        id: 3,
        title: "Arcadian (2024) WEB-DL Multi Audio [Hindi ORG. + English + Tamil + Telugu] Full Movie 480p... <span>[800MB] | 720p [1.2GB] | 1080p [2GB] | 2160p 4K [10GB]</span>",
        genre: "Action",
        link:"https://movies4u.loan/",
        img: "Asset/movie3 arcadian.webp",
    },
    {
        id: 4,
        title: "Bad Cop (2024) Season 1 [Ep 01-06 Added] [Hindi + Multi Audio] WEB Series 480p | 720p | 1080p WEB-DL",
        genre: "Action",
        link:"https://movies4u.loan/",
        img: "Asset/movie4 bad-cop.webp",
    },
    {
        id: 5,
        title: "Bairagee (2022) WEB-DL Dual Audio [Hindi ORG. + Kannada] Full Movie 480p [450MB] | 720p... <span> [1.2GB] | 1080p [2.7GB]</span>",
        genre: "Action",
        link:"https://movies4u.loan/",
        img: "Asset/movie5 Bairagee.webp",
    },
    {
        id: 6,
        title: "Barbarians (Season 1 – 2) Dual Audio [Hindi ORG + English] Netflix Original WEB Series 480p...<span> | 720p | 1080p WEB-DL</span>",
        genre: "Hindi Dubbed",
        img: "Asset/movie6 Barbarians-S01-02.jpg",
    },
    {
        id: 7,
        title: "Betty la Fea: The Story Continues (2024) Season 1 [S01E02 Added] Multi Audio {Hindi-English- ... <span>Spanish}...  Amazon Prime 1080p | 720p WEB-DL</span>",
        genre: "Romance",
        img: "Asset/movie7 Betty-la-Fea-The-Story-Continues.webp",
    },
    {
        id: 8,
        title: "Bigg Boss OTT Season 3 [S03Ep01-29 – 19th July Added] Hindi Reality Show 480p | 720p | ...<span> 1080p WEB-DL</span>",
        genre: "Action",
        img: "Asset/movie8 bigg-boss-ott-season-3.webp",
    },
    {
        id: 9,
        title: "Cobra Kai – Netflix Original (2024) Season 6 [Part 1] Dual Audio {Hindi-English}... <span> 480p | 720p | 1080p WEB-DL</span>",
        genre: "Action",
        img: "Asset/movie9 cobra-kai-s6.webp",
    },
    {
        id: 10,
        title: "[18+] De Dana Dan (2024) S01 Part 1 Hindi ULLU Originals Complete WEB Series 720p | 1080p WEB-DL",
        genre: "Action",
        img: "Asset/movie10 De-Dana-Dan.webp",
    },
    {
        id: 11,
        title: "Find Me Falling (2024) WEB-DL Multi Audio [Hindi ORG. + English + Tamil + Telugu] Full Movie 480p... <span> [550MB] | 720p [1GB] | 1080p [2.1GB]</span>",
        genre: "Hindi Dubbed",
        img: "Asset/movie11 find-me-falling.webp",
    },
    {
        id: 12,
        title: "Aadujeevitham – The Goat Life (2024) WEB-DL Multi Audio [Hindi ORG. + Tamil + Telugu + Malayalam ... <span> + Kannada] Full Movie 480p [850MB] | 720p [1.7GB] | 1080p [3.4GB]</span>",
        genre: "Action",
        img: "Asset/movie1.webp",
    },
    {
        id: 13,
        title: "Allahr Vres (2024) WEB-DL Punjabi Full Movie 480p [400MB] | 720p [1.2GB] | 1080p [2.6GB]",
        genre: "Romance",
        img: "Asset/movie2 Allahr-Vres.webp",
    },
    {
        id: 14,
        title: "Arcadian (2024) WEB-DL Multi Audio [Hindi ORG. + English + Tamil + Telugu] Full Movie 480p... <span>[800MB] | 720p [1.2GB] | 1080p [2GB] | 2160p 4K [10GB]</span>",
        genre: "Action",
        img: "Asset/movie3 arcadian.webp",
    },
    {
        id: 15,
        title: "Bad Cop (2024) Season 1 [Ep 01-06 Added] [Hindi + Multi Audio] WEB Series 480p | 720p | 1080p WEB-DL",
        genre: "Action",
        img: "Asset/movie4 bad-cop.webp",
    },
    {
        id: 16,
        title: "Bairagee (2022) WEB-DL Dual Audio [Hindi ORG. + Kannada] Full Movie 480p [450MB] | 720p... <span> [1.2GB] | 1080p [2.7GB]</span>",
        genre: "Action",
        img: "Asset/movie5 Bairagee.webp",
    },
    {
        id: 17,
        title: "Barbarians (Season 1 – 2) Dual Audio [Hindi ORG + English] Netflix Original WEB Series 480p...<span> | 720p | 1080p WEB-DL</span>",
        genre: "Hindi Dubbed",
        img: "Asset/movie6 Barbarians-S01-02.jpg",
    },
    {
        id: 18,
        title: "Betty la Fea: The Story Continues (2024) Season 1 [S01E02 Added] Multi Audio {Hindi-English- ... <span>Spanish}...  Amazon Prime 1080p | 720p WEB-DL</span>",
        genre: "Romance",
        img: "Asset/movie7 Betty-la-Fea-The-Story-Continues.webp",
    },
    {
        id: 19,
        title: "Bigg Boss OTT Season 3 [S03Ep01-29 – 19th July Added] Hindi Reality Show 480p | 720p | ...<span> 1080p WEB-DL</span>",
        genre: "Action",
        img: "Asset/movie8 bigg-boss-ott-season-3.webp",
    },
    {
        id: 20,
        title: "Cobra Kai – Netflix Original (2024) Season 6 [Part 1] Dual Audio {Hindi-English}... <span> 480p | 720p | 1080p WEB-DL</span>",
        genre: "Action",
        img: "Asset/movie9 cobra-kai-s6.webp",
    },
    {
        id: 21,
        title: "[18+] De Dana Dan (2024) S01 Part 1 Hindi ULLU Originals Complete WEB Series 720p | 1080p WEB-DL",
        genre: "Action",
        img: "Asset/movie10 De-Dana-Dan.webp",
    },
    {
        id: 22,
        title: "Find Me Falling (2024) WEB-DL Multi Audio [Hindi ORG. + English + Tamil + Telugu] Full Movie 480p... <span> [550MB] | 720p [1GB] | 1080p [2.1GB]</span>",
        genre: "Hindi Dubbed",
        img: "Asset/movie11 find-me-falling.webp",
    },
    {
        id: 23,
        title: "Aadujeevitham – The Goat Life (2024) WEB-DL Multi Audio [Hindi ORG. + Tamil + Telugu + Malayalam ... <span> + Kannada] Full Movie 480p [850MB] | 720p [1.7GB] | 1080p [3.4GB]</span>",
        genre: "Action",
        img: "Asset/movie1.webp",
    },
    {
        id: 24,
        title: "Allahr Vres (2024) WEB-DL Punjabi Full Movie 480p [400MB] | 720p [1.2GB] | 1080p [2.6GB]",
        genre: "Romance",
        img: "Asset/movie2 Allahr-Vres.webp",
    },
    {
        id: 25,
        title: "Arcadian (2024) WEB-DL Multi Audio [Hindi ORG. + English + Tamil + Telugu] Full Movie 480p... <span>[800MB] | 720p [1.2GB] | 1080p [2GB] | 2160p 4K [10GB]</span>",
        genre: "Action",
        img: "Asset/movie3 arcadian.webp",
    },
    {
        id: 26,
        title: "Bad Cop (2024) Season 1 [Ep 01-06 Added] [Hindi + Multi Audio] WEB Series 480p | 720p | 1080p WEB-DL",
        genre: "Action",
        img: "Asset/movie4 bad-cop.webp",
    },
    {
        id: 27,
        title: "Bairagee (2022) WEB-DL Dual Audio [Hindi ORG. + Kannada] Full Movie 480p [450MB] | 720p... <span> [1.2GB] | 1080p [2.7GB]</span>",
        genre: "Action",
        img: "Asset/movie5 Bairagee.webp",
    },
    {
        id: 28,
        title: "Barbarians (Season 1 – 2) Dual Audio [Hindi ORG + English] Netflix Original WEB Series 480p...<span> | 720p | 1080p WEB-DL</span>",
        genre: "Hindi Dubbed",
        img: "Asset/movie6 Barbarians-S01-02.jpg",
    },
    {
        id: 29,
        title: "Betty la Fea: The Story Continues (2024) Season 1 [S01E02 Added] Multi Audio {Hindi-English- ... <span>Spanish}...  Amazon Prime 1080p | 720p WEB-DL</span>",
        genre: "Romance",
        img: "Asset/movie7 Betty-la-Fea-The-Story-Continues.webp",
    },
    {
        id: 30,
        title: "Bigg Boss OTT Season 3 [S03Ep01-29 – 19th July Added] Hindi Reality Show 480p | 720p | ...<span> 1080p WEB-DL</span>",
        genre: "Action",
        img: "Asset/movie8 bigg-boss-ott-season-3.webp",
    },
    {
        id: 31,
        title: "Cobra Kai – Netflix Original (2024) Season 6 [Part 1] Dual Audio {Hindi-English}... <span> 480p | 720p | 1080p WEB-DL</span>",
        genre: "Action",
        img: "Asset/movie9 cobra-kai-s6.webp",
    },
    {
        id: 32,
        title: "[18+] De Dana Dan (2024) S01 Part 1 Hindi ULLU Originals Complete WEB Series 720p | 1080p WEB-DL",
        genre: "Action",
        img: "Asset/movie10 De-Dana-Dan.webp",
    },
    {
        id: 33,
        title: "Find Me Falling (2024) WEB-DL Multi Audio [Hindi ORG. + English + Tamil + Telugu] Full Movie 480p... <span> [550MB] | 720p [1GB] | 1080p [2.1GB]</span>",
        genre: "Hindi Dubbed",
        img: "Asset/movie11 find-me-falling.webp",
    }
];




// const movie_container = document.querySelector('.movie-wrapper');
// const ulEl = document.querySelector('ul');
// const btnSearch = document.querySelector('.btn-search');
// const inputEl = document.querySelector('.form-control');

// window.addEventListener("DOMContentLoaded", () => {
//     displayMovieData(movieData); // displaying the data in the DOM
    
//     // getting unique genre 
//     const categories = movieData.reduce(
//         function (values, item) {
//             if (!values.includes(item.genre)) {
//                 values.push(item.genre);
//             }
//             return values;
//         },
//         ["All"],
//     );
//     const categoryBtn = categories.map(function (genre) {
//         return `<li><a href="#" data-id="${genre}">${genre}</a></li>`;
//     }).join("");
//     ulEl.innerHTML = categoryBtn;

//     // links for category
//     const linkEl = document.querySelectorAll("li a");
//     linkEl.forEach((links) => {
//         links.addEventListener("click", (e) => {
//             const genre = e.target.dataset.id;
//             const movieGenre = movieData.filter(function(data) {
//                 if (data.genre === genre) {
//                     return data;
//                 }
//             });
    
//             if (genre === "All") {
//                 displayMovieData(movieData);
//             } else {
//                 displayMovieData(movieGenre);
//             }
//             console.log(movieGenre);
//         });
//     });

// });

// // display the movie data
// function displayMovieData(movies) {
//     let displaydata = movies.map(function(cat_item) {
//         return `<article class="movie">
//                 <div class="m-img">
//                     <img src="${cat_item.img}" alt="">
//                 </div>
//                 <div class="content">
//                     <h3 class="title">${cat_item.title}</h3>
//                 </div>
//             </article>`;
//     });
//     displaydata = displaydata.join(" ");
//     movie_container.innerHTML = displaydata;
// }

// // search functionality
// btnSearch.addEventListener("click", (e) => {
//     let searchValue = inputEl.value.trim();
//     // console.log(searchValue);
//     if (searchValue !== "") {
//         let searchCategory = movieData.filter(function(data) {
//             if (data.title.toLowerCase().includes(searchValue.toLowerCase())) {
//                 return data;
//             } else if (data.genre.toLowerCase().includes(searchValue.toLowerCase())) {
//                 return data;
//             }
//         });
//         if (searchCategory) {
//             displayMovieData(searchCategory);
//         }

//         inputEl.value = "";
//     } else {
//         alert("Please enter a search term");
//     }
// });



// // pagination
// function getPageList(totalPages, page, maxLength) {
//     function range(start, end) {
//         return Array.from(Array(end - start + 1), (_, i) => i + start);
//     }

//     var sideWidth = maxLength < 9 ? 1 : 2;
//     var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
//     var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

//     if (totalPages <= maxLength) {
//         return range(1, totalPages);
//     }

//     if (page <= maxLength - sideWidth - 1 - rightWidth) {
//         return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
//     }
//     if (page >= totalPages - sideWidth - 1 - rightWidth) {
//         return range(1, sideWidth).concat(0, range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages));
//     }

//     return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth + 1, totalPages));
// }

// $(function() {
//     var numberOfItems = $(".movie-wrapper .movie").length;
//     var limitPerPage = 5; // How many card items visible per page 
//     var totalPages = Math.ceil(numberOfItems / limitPerPage);
//     var paginationSize = 7;  // How many elements to show in the pagination
//     var currentPage;

//     function showPage(whichPage) {
//         if (whichPage < 1 || whichPage > totalPages) return false;
//         currentPage = whichPage;
//         $(".movie-wrapper .movie").hide().slice((currentPage - 1) * limitPerPage,
//             currentPage * limitPerPage).show();
//         $(".pagination li").slice(1, -1).remove();

//         getPageList(totalPages, currentPage, paginationSize).forEach(item => {
//             $("<li>").addClass("page-item").addClass(item ? "current-page" : "dot-page")
//                      .toggleClass("active", item === currentPage)
//                      .append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).text(item || "..."))
//                      .insertBefore(".next-page");
//         });

//         $(".previous-page").toggleClass("disable", currentPage === 1);
//         $(".next-page").toggleClass("disable", currentPage === totalPages);
//         return true;
//     }

//     $(".pagination").append(
//         $("<li>").addClass("page-item").addClass("previous-page")
//                 .append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).text("Prev")),
//         $("<li>").addClass("page-item").addClass("next-page")
//                 .append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).text("Next"))
//     );

//     $(".movie-wrapper").show();
//     showPage(1);

//     $(document).on("click", ".pagination li.current-page:not(.active)", function() {
//         return showPage(+$(this).text());
//     });

//     $(".next-page").on("click", function() {
//         return showPage(currentPage + 1);
//     });
//     $(".previous-page").on("click", function() {
//         return showPage(currentPage - 1);
//     });
// });



// test

const movie_container = document.querySelector('.movie-wrapper');
const ulEl = document.querySelector('ul');
const btnSearch = document.querySelector('.btn-search');
const inputEl = document.querySelector('.form-control');

window.addEventListener("DOMContentLoaded", () => {
    displayMovieData(movieData); // displaying the data in the DOM
    setupCategoryButtons(movieData);
    setupPagination(movieData);
});

function setupCategoryButtons(movieData) {
    // getting unique genres
    const categories = movieData.reduce((values, item) => {
        if (!values.includes(item.genre)) values.push(item.genre);
        return values;
    }, ["All"]);
    
    const categoryBtn = categories.map(genre => 
        `<li><a href="#" data-id="${genre}">${genre}</a></li>`
    ).join("");
    ulEl.innerHTML = categoryBtn;

    // links for category
    const linkEl = document.querySelectorAll("li a");
    linkEl.forEach(link => {
        link.addEventListener("click", (e) => {
            const genre = e.target.dataset.id;
            const filteredMovies = genre === "All" ? movieData : movieData.filter(movie => movie.genre === genre);
            displayMovieData(filteredMovies);
            setupPagination(filteredMovies);
        });
    });
}

function displayMovieData(movies) {
    let displayData = movies.map(cat_item => 
        `<article class="movie">
            <div class="m-img">
                <img src="${cat_item.img}" alt="">
            </div>
            <div class="content">
                <a href="${cat_item.link}" class="tittle"><h3>${cat_item.title}</span></h3></a>
            </div>
        </article>`
    ).join("");
    movie_container.innerHTML = displayData;
}

btnSearch.addEventListener("click", () => {
    let searchValue = inputEl.value.trim();
    if (searchValue !== "") {
        let searchResults = movieData.filter(data => 
            data.title.toLowerCase().includes(searchValue.toLowerCase()) ||
            data.genre.toLowerCase().includes(searchValue.toLowerCase())
        );
        displayMovieData(searchResults);
        setupPagination(searchResults);
        inputEl.value = "";
    } else {
        alert("Please enter a search term");
    }
});

// pagination
function setupPagination(movies) {
    const paginationContainer = document.querySelector(".pagination");
    paginationContainer.innerHTML = ""; // Clear previous pagination

    function getPageList(totalPages, page, maxLength) {
        function range(start, end) {
            return Array.from(Array(end - start + 1), (_, i) => i + start);
        }

        var sideWidth = maxLength < 9 ? 1 : 2;
        var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
        var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

        if (totalPages <= maxLength) {
            return range(1, totalPages);
        }

        if (page <= maxLength - sideWidth - 1 - rightWidth) {
            return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
        }
        if (page >= totalPages - sideWidth - 1 - rightWidth) {
            return range(1, sideWidth).concat(0, range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages));
        }

        return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth + 1, totalPages));
    }

    $(function() {
        var numberOfItems = movies.length;
        var limitPerPage = 15; // How many card items visible per page 
        var totalPages = Math.ceil(numberOfItems / limitPerPage);
        var paginationSize = 7;  // How many elements to show in the pagination
        var currentPage;

        function showPage(whichPage) {
            if (whichPage < 1 || whichPage > totalPages) return false;
            currentPage = whichPage;
            $(".movie-wrapper .movie").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();
            $(".pagination li").slice(1, -1).remove();

            getPageList(totalPages, currentPage, paginationSize).forEach(item => {
                $("<li>").addClass("page-item").addClass(item ? "current-page" : "dot-page")
                         .toggleClass("active", item === currentPage)
                         .append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).text(item || "..."))
                         .insertBefore(".next-page");
            });

            $(".previous-page").toggleClass("disable", currentPage === 1);
            $(".next-page").toggleClass("disable", currentPage === totalPages);
            return true;
        }

        $(".pagination").append(
            $("<li>").addClass("page-item").addClass("previous-page")
                    .append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).text("Prev")),
            $("<li>").addClass("page-item").addClass("next-page")
                    .append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).text("Next"))
        );

        $(".movie-wrapper").show();
        showPage(1);

        $(document).on("click", ".pagination li.current-page:not(.active)", function() {
            return showPage(+$(this).text());
        });

        $(".next-page").on("click", function() {
            return showPage(currentPage + 1);
        });
        $(".previous-page").on("click", function() {
            return showPage(currentPage - 1);
        });
    });
}
