



function handleQuizClick() {
    $('nav').on('click', '.js-p-link', event => {
       
       if ($('.hero-container').children().hasClass('js-quiz')){
           jQuery.noop();
       }
       else {
            let currentSelection = $(event.currentTarget);
            checkForQuiz(currentSelection);
       }
    });
}

function handleBioClick() {
    $('nav').on('click', '.js-p-link', event => {

        if($('.hero-container').children().hasClass('bigbio')) {
            jQuery.noop();
        }
        else {
            let currentSelection = $(event.currentTarget);
            checkForBio(currentSelection);
        }
    });
}

function renderQuizPage() {
    $('.hero-container').append(`<section class="project one large hidden js-project"></section>
    <section class="description-one large hidden js-description">
        <section class="languages">
                <div class="html-logo"></div>
                <div class="css-logo"></div>
                <div class="js-logo"></div>
                <div class="jq-logo"></div>
        </section>
        <section class="links quiz">
        <a href="https://bmtron.github.io/QuizApp" target="_blank">Live</a>
        <a href="https://github.com/bmtron/QuizApp" target="_blank">Repo</a>
        </section>
        <p>This nifty quiz app utilizes HTML, CSS, JavaScript, and JQuery to test your knowledge of the world's funniest, most eccentric comedy troupe,
        Monty Python!
        </p>
    </section>`);
}

function renderAboutMe() {
    $('.hero-container').append(`<section class="bio large bigbio">
    <h2>Hello, my name is Brendan, and I am a full-stack web developer with a flair for functionality.
    </h2>
    <p>I am currently a student at Thinkful's Full Stack web development program. Ever since       I built my first computer, I have had a growing 
        passion for technology in all its facets, but more specifically with learning how software functions. Solving unique problems in creative 
        ways is what drives me, and the more I explored programming and software development, the more I fell in love with it. The process of 
        turning an idea into code, and watching that code become a useful, hands on solution never ceases to excite me. Through building 
        a multitude of well structured, reusable functions and crafting user friendly, accessible UI, I have taken my passion and put it to use,
        solving problems one web page at a time.</p>
</section>`);
}

function checkForBio(input) {
    if (input.hasClass('me')) {
        $('.js-description').remove();
        $('.js-project').remove();
        renderAboutMe();
    }
    else {
        console.log('woo');
    }
}
function checkForQuiz(input) {
    if (input.hasClass('quiz')) {
        $('.bigbio').remove();
        console.log("quiz display?");
        renderQuizPage();
    }
    else {
        console.log('not selected');
    }
}
$(handleBioClick);
$(handleQuizClick);