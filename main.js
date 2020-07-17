let main = document.createElement('main')
let image = document.createElement('img');
image.src = "image.jpg"
image.classList.add('image')
let link = document.createElement('a');
link.href = "https://lokeshdhakar.com/projects/lightbox2/"
link.classList.add('link')
link.append('Link')
document.body.append(main)
main.append(image, link)
let button = document.createElement('button')
button.append('Remove')
document.body.append(button)
button.addEventListener('click', function () {
    main.remove()
})