import '../css/style.css'

class carte {
    constructor(tailwindClasses, titleText) {
        this.tailwindClasses = tailwindClasses;
        this.titleText = titleText;
    }

    toHtml() {
        const div = document.createElement('div');
        const spanTitle = document.createElement('span');

        div.className = this.tailwindClasses;
        spanTitle.textContent = this.titleText;

        div.appendChild(spanTitle);

        return div;
    }
}

const twclasses = "carte bg-black text-white rounded-md flex flex-col justify-center items-center w-[200px] h-[200px] sm:w-[200px] sm:h-[200px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] xl:w-[300px] xl:h-[300px]";

const cartes = [
    new carte(twclasses, "1"),
    new carte(twclasses, "2"),
    new carte(twclasses, "3"),
    new carte(twclasses, "4"),
    new carte(twclasses, "5"),
    new carte(twclasses, "6"),
    new carte(twclasses, "7"),
    new carte(twclasses, "8"),
    new carte(twclasses, "9")
];

const container = document.querySelector('.container');

cartes.forEach(carte => {
    container.appendChild(carte.toHtml());
});


const btn = document.querySelector('.btn');
const cartesHTML = document.querySelectorAll('.carte');

btn.addEventListener('click', () => {
    cartesHTML.forEach(carte => {
        carte.classList.toggle('bg-black');
        carte.classList.toggle('bg-red-300');
    });
        btn.classList.toggle('bg-black');
        btn.classList.toggle('bg-red-300');

        document.body.classList.toggle('bg-blue-400');
        document.body.classList.toggle('bg-black');
})