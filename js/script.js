var findButton = document.body.querySelector(".find-hotel");
var searchForm = document.body.querySelector(".search-form");
var arriveDate = searchForm.querySelector("[name=arrive-date]");
var departureDate = searchForm.querySelector("[name=departure-date]");
var adults = searchForm.querySelector("[name=adult]");
var children = searchForm.querySelector("[name=children]");

 findButton.addEventListener("click",function(evt){
     evt.preventDefault();
     searchForm.classList.toggle("search-form-show");
     arriveDate.focus();
 });

searchForm.addEventListener("submit", function(evt){ 
    if (!arriveDate.value || !departureDate.value || !adults.value || !children.value) {
        evt.preventDefault();
        searchForm.classList.remove("search-form-error");
        setTimeout(function (){
            searchForm.classList.add("search-form-error");
        },4);
    } else {
        searchForm.classList.remove("search-form-error");
    }
    
});

