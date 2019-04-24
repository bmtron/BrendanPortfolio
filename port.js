

function handleQuizClick() {
    $('.project-links').on('click', '.js-p-link', event => {
        if ($('.one').is(":visible")) {
            jQuery.noop();
        }
        else {
        let currentSelection = $(event.currentTarget);
        checkForQuiz(currentSelection);
        }
    });
}

function handleBioClick() {
    $('.project-links').on('click', '.js-p-link', event => {
        if ($('.bio').is(":visible")) {
            jQuery.noop();
        }
        else {
        let currentSelection = $(event.currentTarget);
        checkForBio(currentSelection);
        }
    });
}
function handleUpcomingClick() {
    $('.project-links').on('click', '.js-p-link', event => {
        if ($('.two').is(":visible")){
            jQuery.noop();
        }
        else {
        let currentSelection = $(event.currentTarget);
        checkForUpcoming(currentSelection);
        
        }
    });
}
function checkForBio(input) {
    if (input.hasClass('me')) {
        $('.project-container').hide();
        $('.bio').fadeIn();
    }
    else {
        jQuery.noop();
    }
}
function checkForQuiz(input) {
    if (input.hasClass('quiz')) {
        $('.bio').hide();
        $('.project-container').fadeIn();
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
        $('.project-container').fadeIn();
        $('.js-project').hide();
        $('.js-description').hide();
        $('.description-two').fadeIn();
        $('.two').fadeIn();
    }
    else {
        jQuery.noop();
    }
}

$(handleBioClick);
$(handleQuizClick);
$(handleUpcomingClick);

