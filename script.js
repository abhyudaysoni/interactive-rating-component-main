//selecting all the rating buttons
const ratings = document.querySelectorAll(".rating");

//selecting the submit button
const sub = document.querySelector(".submit-btn");

//selecting rating-page
const ratingPage = document.querySelector(".rating-page");

//selecting thank-you-page
const ThankYouPage = document.querySelector(".thank-you-page");

//saving the rated button
let ratedButton = -1;

//after pressing the submit button
function submitFeedback() {
    //removing the rating page
    ratingPage.style.display = "none";

    //changing the ratings
    const selectedRating = document.querySelector(".selected-rating");

    selectedRating.innerHTML = `You selected ${ratedButton} out of 5`;

    //displaying the thank you page
    ThankYouPage.style.display = "grid";
}

ratings.forEach((element) => {
    element.addEventListener("click", function () {
        ratings.forEach((element2) => {
            element2.classList.remove("active");

            element2.style.backgroundColor = " #2b3240";
        });

        element.classList.add("active");

        element.style.backgroundColor = " #fb7413";

        ratedButton = element.value;

        sub.addEventListener("click", submitFeedback);
    });
});

sub.addEventListener("click", function () {
    if (ratedButton === -1) {
        alert(`Please select a rating`);
    }
});
