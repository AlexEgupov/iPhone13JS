const links = document.querySelectorAll('.header-menu__item a')
const AllСharacteristics = document.querySelector('.card-details__link-characteristics')

const newArray = [...links, AllСharacteristics];

seamless.polyfill();

newArray.forEach((element) => {
    element.addEventListener('click', () => {
        event.preventDefault()

        const id = element.getAttribute('href').substring(1)
        const section = document.getElementById(id)


        if (section) {
            seamless.elementScrollIntoView(section, {
                behavior: "smooth", // плавность
                block: 'start' //начало секции
            })
        } else {
            seamless.elementScrollIntoView(document.querySelector("#characteristics"), {
                behavior: "smooth",
                block: "center",
                inline: "center",
            });
        }
    })
})

