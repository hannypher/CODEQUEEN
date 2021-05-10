//select the form and review feed
const reviewForm = document.querySelector('.review-form');
const reviewFeed = document.querySelector('.review-feed');
let email, fullName, message;
console.log(reviewForm);

//process form submit
reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    email= reviewForm.email.value;
    fullName = reviewForm.fullName.value;
    message = reviewForm.message.value;

    if(email && fullName && message) {
        //add to review feed
        const reviewCard = document.createElement('div');
        reviewCard.classList= 'review card'
        const cardContent = document.createElement('div');
    }