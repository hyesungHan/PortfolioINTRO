const btnToggle = document.querySelectorAll('.btn-toggle');
const toggleContentList = (e) => {
    e.currentTarget.closest('.portfolio-box').classList.toggle('is-closed');
};

btnToggle.forEach(function (e) {
    e.addEventListener('click', toggleContentList);
});

const menuShow = () => {
    document.querySelector('.menu-area').classList.toggle('show');
};