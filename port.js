

function handleQuizClick() {
    $('.project-links').on('click', '.js-p-link', event => {

        let currentSelection = $(event.currentTarget);
        checkForQuiz(currentSelection);
    });
}

function handleBioClick() {
    $('.project-links').on('click', '.js-p-link', event => {

        let currentSelection = $(event.currentTarget);
        checkForBio(currentSelection);
    });
}
function handleUpcomingClick() {
    $('.project-links').on('click', '.js-p-link', event => {

        let currentSelection = $(event.currentTarget);
        checkForUpcoming(currentSelection);
        console.log('clicked');
    });
}
function checkForBio(input) {
    if (input.hasClass('me')) {
        $('.js-description').hide();
        $('.js-project').hide();
        $('.bio').fadeIn();
    }
    else {
        jQuery.noop();
    }
}
function checkForQuiz(input) {
    if (input.hasClass('quiz')) {
        $('.bio').hide();
        $('.js-project').hide();
        $('.js-description').hide();
        $('.one').fadeIn();
        $('.description-one').fadeIn();
    }
    else {
        jQuery.noop();
    }
}
function checkForUpcoming(input) {
    if (input.hasClass('upcoming-one')) {
        $('.bio').hide();
        $('.js-project').hide();
        $('.js-description').hide();
        $('.description-two').fadeIn();
        $('.two').fadeIn();
        console.log('worked');
    }
    else {
        jQuery.noop();
    }
}

$(handleBioClick);
$(handleQuizClick);
$(handleUpcomingClick);

