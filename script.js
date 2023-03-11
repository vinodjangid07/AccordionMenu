
const faqsQestions = document.querySelectorAll('.all-faqs-container .faqs-question');


faqsQestions.forEach((question) =>{
    question.addEventListener("click",() =>{
        question.nextElementSibling.classList.toggle('active');
        const Open = question.querySelector('.open');
        const Close = question.querySelector('.close');
        Open.classList.toggle('openSign');
        Close.classList.toggle('closeSign');

    });
})