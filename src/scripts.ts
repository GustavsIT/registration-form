import axios from "axios";

const form = document.querySelector<HTMLFormElement>('.js-form')
const posts = document.querySelector('.js-posts')
const submitButton = document.querySelector<HTMLButtonElement>('.button-container')

type Post = {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    gender: string;
    selectcountry: string;
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    submitButton.disabled=true;

    const formData = new FormData(form);

    const finalData : {[key :string ]:unknown}={};

    for(var pair of formData.entries()){
        finalData[pair[0]]=pair[1];
    }
    console.log(finalData)

    axios.post('http://localhost:3004/posts',finalData).then((res) => {

       const post :Post = res.data;
            
        const postHTML = `<div>
        <h1>${post.firstname}</h1>
        <p>${post.lastname}</p>
        <p>${post.email}</p>
        <p>${post.password}</p>
        <p>${post.gender}</p>
        <p>${post.selectcountry}</p>
        </div><br><br>`;

        posts.innerHTML += postHTML;
        form.reset;
        submitButton.disabled=false;
    });
    


});







