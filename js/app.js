// ---------- POST REQUEST ----------

function createBlogPost(e) {
    // Starting an AJAX request
    let ajax = new XMLHttpRequest();

    // Creating a function that must be called when the network request is done and no errors have occurred
    ajax.onreadystatechange = function() {

        // If the request is done and an error has not occurred, it will print a success message to the user
        if(this.readyState === 4 && this.status === 201) {
            let statusMessage = document.getElementById(`statusUpdate`);
            statusMessage.innerText = `The blog post was uploaded successfully.`;
        }
    }

    // Configuring the request with the type and URL
    ajax.open(`POST`, `https://jsonplaceholder.typicode.com/posts`, true);

    // Defining that the data type being sent to the server is JSON
    ajax.setRequestHeader(`Content-Type`, `application/json`);

    // Creating a JavaScript Object with the post title, body and Id
    let postTitle = document.getElementById(`postTitle`).value;
    let postBody = document.getElementById(`postBody`).value;
    let postObject = {
        title: postTitle,
        body: postBody,
        userId: 1
    };
    
    // Converting the JavaScript Object into JSON
    let postJSON = JSON.stringify(postObject);

    // Sending the request
    ajax.send(postJSON);
}

// Adding a click event to the Blog Post button and calling the function to send user data to the server
let sendPostButton = document.getElementById(`sendPostButton`);
sendPostButton.addEventListener(`click`, createBlogPost);

// ---------- PATCH REQUEST ----------

function updateBlogPost(e) {

    // Starting an AJAX request
    let ajax = new XMLHttpRequest();

    // Creating a function that must be called when the network request is done and no errors have occurred
    ajax.onreadystatechange = function() {

        // If the request is done and an error has not occurred, it will print a success message to the user
        if(this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
        }
    }

    // Configuring the request with the type and URL
    ajax.open(`PATCH`, `https://jsonplaceholder.typicode.com/posts/1`, true);

    // Defining that the data type being sent to the server is JSON
    ajax.setRequestHeader(`Content-Type`, `application/json`);

    // Creating a JavaScript Object with the updated post title
    let updatePostTitle = document.getElementById(`updatePostTitle`).value;
    let updatePostBody = document.getElementById(`updatePostBody`).value;
    let updatePostObject = {
        title: updatePostTitle,
        body: updatePostBody
    };
    
    // Converting the JavaScript Object into JSON
    let updatePostJSON = JSON.stringify(updatePostObject);

    // Sending the request
    ajax.send(updatePostJSON);
}

// Adding a click event to the update post button and calling the function to update user data to the server
let updatePostButton = document.getElementById(`updatePostButton`);
updatePostButton.addEventListener(`click`, updateBlogPost);

// ---------- DELETE REQUEST ----------

function deleteBlogPost(e) {

    // Starting an AJAX request
    let ajax = new XMLHttpRequest();

    // Creating a function that must be called when the network request is done and no errors have occurred
    ajax.onreadystatechange = function() {

        // If the request is done and an error has not occurred, it will print a success message to the user
        if(this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
        }
    }

    // Configuring the request with the type and URL
    ajax.open(`DELETE`, `https://jsonplaceholder.typicode.com/posts/1`, true);

    // Defining that the data type being sent to the server is JSON
    // ajax.setRequestHeader(`Content-Type`, `application/json`);

    // Creating a JavaScript Object with the updated post title
    // let deletePostTitle = document.getElementById(`deletePostTitle`).value;
    // let deletePostBody = document.getElementById(`deletePostBody`).value;
    // let deletePostObject = {
    //     title: deletePostTitle,
    //     body: deletePostBody
    // };
    
    // Converting the JavaScript Object into JSON
    // let deletePostJSON = JSON.stringify(deletePostObject);

    // Sending the request
    // ajax.send(deletePostJSON);
    ajax.send();
}

// Adding a click event to the delete post button and calling the function to delete the user's data in the server
let deletePostButton = document.getElementById(`deletePostButton`);
deletePostButton.addEventListener(`click`, deleteBlogPost);

// ---------- GET REQUEST ----------

function getBlogPosts(e) {

    // Starting an AJAX request
    let ajax = new XMLHttpRequest();

    // Creating a function that must be called when the network request is done and no errors have occurred
    ajax.onreadystatechange = function() {

        // If the request is done and an error has not occurred, it will print all blog posts on the page
        if(this.readyState === 4 && this.status === 200) {
            let postObject = JSON.parse(this.responseText);
            for (let i = 0; i < postObject.length; i++) {
                let postId = `<p>Id: ${postObject[i].id}</p>`;
                let postUserId = `<p>UserId: ${postObject[i].userId}</p>`;
                let postTitle = `<p>Title: ${postObject[i].title}</p>`;
                let postBody = `<p> Post: ${postObject[i].body}</p>`;

                let postContainer = document.getElementById(`postContainer`);
                postContainer.innerHTML += postId;
                postContainer.innerHTML += postUserId;
                postContainer.innerHTML += postTitle;
                postContainer.innerHTML += postBody;
            }
        }
    }

    // Configuring the request with the type and URL
    ajax.open(`GET`, `https://jsonplaceholder.typicode.com/posts`, true);

    // Defining that the data type being sent to the server is JSON
    ajax.setRequestHeader(`Content-Type`, `application/json`);

    // Sending the request
    ajax.send();
}

// Adding a load event to the window and calling the function to update user data to the server
window.addEventListener(`load`, getBlogPosts);