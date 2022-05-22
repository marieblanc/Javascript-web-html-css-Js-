const commentBox = document.querySelector('.js-comments')

let html = ''
const getComments = async () => {
const data = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
const comments = await data.json()
comments.forEach((comment) => {
     const {name, email, body} = comment

    html = html + `
    <div class="comment">
    <h4 class="name">Vārds: ${name}</h4>
    <span class="email">E-pasts: ${email}</span>
    <p class="text">${body}</p>
    </div>
    `
});

commentBox.innerHTML = html

}

getComments()

const form = document.querySelector('.js-form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

     var name = document.querySelector(' js-form-name').value;
     var email = document.querySelector(' js-form-email').value;
     var body = document.querySelector(' js-form-body').value;

   html = html + `
   <div class="comment">
   <h4 class="name">Vārds: ${name}</h4>
   <span class="email">E-pasts: ${email}</span>
   <p class="text">${body}</p>
   </div>
   `

   
commentBox.innerHTML = html

})




