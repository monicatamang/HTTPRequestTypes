// ---------- POST REQUEST ----------

// Creating a function that will be called when the user clicks on the send post button
function createBlogPost(e) {

    // Starting an AJAX request
    let ajax = new XMLHttpRequest();

    // Creating a function that must be called when the network request is done and no errors have occurred
    ajax.onreadystatechange = function() {

        // If the request is done and there are no errors, print a success message to the user
        if(this.readyState === 4 && this.status === 201) {
            let sendPostStatus = document.getElementById(`sendPostStatus`);
            sendPostStatus.innerText = `The post was uploaded successfully.`;
        } 
        
        // If the request is not done, print a loading message to the user
        else if (this.readyState !== 4) {
            let sendPostStatus = document.getElementById(`sendPostStatus`);
            sendPostStatus.innerText = `Please wait... The post is being uploaded.`;
        } 
        
        // If the request is done but has errored, print an error message to the user
        else if(this.readyState === 4 && this.status !== 201) {
            let sendPostStatus = document.getElementById(`sendPostStatus`);
            sendPostStatus.innerText = `Sorry, something went wrong. Failed to upload post.`;
        }
    }

    // Configuring the request with the type and URL
    ajax.open(`POST`, `https://jsonplaceholder.typicode.com/posts`, true);

    // Defining that the data type being sent to the server is JSON
    ajax.setRequestHeader(`Content-Type`, `application/json`);

    // Creating a JavaScript Object with the post title, body and userId
    let postTitle = document.getElementById(`postTitle`).value;
    let postBody = document.getElementById(`postBody`).value;
    let postObject = {
        title: postTitle,
        body: postBody,
        userId: 1
    };
    
    // Converting the JavaScript object into a JSON format
    let postJSON = JSON.stringify(postObject);

    // Sending the request
    ajax.send(postJSON);
}

// Adding a click event to the send post button and calling the function to send the user's data to the server
let sendPostButton = document.getElementById(`sendPostButton`);
sendPostButton.addEventListener(`click`, createBlogPost);

// ---------- PATCH REQUEST ----------

// Creating a function that will be called when the user clicks on the update post button
function updateBlogPost(e) {

    // Starting an AJAX request
    let ajax = new XMLHttpRequest();

    // Creating a function that must be called when the network request is done and no errors have occurred
    ajax.onreadystatechange = function() {

        // If the request is done and there are no errors, console log the returned data to the console and print a success message to the user
        if(this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
            let updatePostStatus = document.getElementById(`updatePostStatus`);
            updatePostStatus.innerText = `The post was successfully updated.`;
        }

        // If the request is not done, print a loading message to the user
        else if (this.readyState !== 4) {
            let updatePostStatus = document.getElementById(`updatePostStatus`);
            updatePostStatus.innerText = `Please wait... The post is being updated.`;
        } 
        
        // If the request is done but has errored, print an error message to the user
        else if(this.readyState === 4 && this.status !== 200) {
            let updatePostStatus = document.getElementById(`updatePostStatus`);
            updatePostStatus.innerText = `Sorry, something went wrong. Failed to update post.`;
        }
    }

    // Configuring the request with the type and URL
    ajax.open(`PATCH`, `https://jsonplaceholder.typicode.com/posts/1`, true);

    // Defining that the data type being sent to the server is JSON
    ajax.setRequestHeader(`Content-Type`, `application/json`);

    // Creating a JavaScript object with the updated post title
    let updatePostTitle = document.getElementById(`updatePostTitle`).value;
    let updatePostObject = {
        title: updatePostTitle
    };
    
    // Converting the JavaScript Object into a JSON format
    let updatePostJSON = JSON.stringify(updatePostObject);

    // Sending the request
    ajax.send(updatePostJSON);
}

// Adding a click event to the update post button and calling the function to update the user's data to the server
let updatePostButton = document.getElementById(`updatePostButton`);
updatePostButton.addEventListener(`click`, updateBlogPost);

// ---------- DELETE REQUEST ----------

// Creating a function that will be called when the user clicks on the delete post button
function deleteBlogPost(e) {

    // Starting an AJAX request
    let ajax = new XMLHttpRequest();

    // Creating a function that must be called when the network request is done and no errors have occurred
    ajax.onreadystatechange = function() {

        // If the request is done and there are no errors, console log the returned data to the console and print a success message to the user
        if(this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
            let deletePostStatus = document.getElementById(`deletePostStatus`);
            deletePostStatus.innerText = `The post was successfully deleted.`
        }

        // If the request is not done, print a loading message to the user
        else if (this.readyState !== 4) {
            let deletePostStatus = document.getElementById(`deletePostStatus`);
            deletePostStatus.innerText = `Please wait... The post is being deleted.`;
        } 
        
        // If the request is done but has errored, print an error message to the user
        else if(this.readyState === 4 && this.status !== 200) {
            let deletePostStatus = document.getElementById(`deletePostStatus`);
            deletePostStatus.innerText = `Sorry, something went wrong. Failed to delete post.`;
        }
    }

    // Configuring the request with the type and URL
    ajax.open(`DELETE`, `https://jsonplaceholder.typicode.com/posts/1`, true);

    // Sending the request
    ajax.send();
}

// Adding a click event to the delete post button and calling the function to delete the user's data in the server
let deletePostButton = document.getElementById(`deletePostButton`);
deletePostButton.addEventListener(`click`, deleteBlogPost);

// ---------- GET REQUEST ----------

// Creating a function that will be called as soon as the page is loaded
function getBlogPosts(e) {

    // Starting an AJAX request
    let ajax = new XMLHttpRequest();

    // Creating a function that must be called when the network request is done and no errors have occurred
    ajax.onreadystatechange = function() {

        // If the request is done and there are no errors, execute the following code
        if(this.readyState === 4 && this.status === 200) {

            // Converting the returned JSON formatted data into a JavaScript (JS) object
            let postObject = JSON.parse(this.responseText);

            // Storing each value from the JS object into a variable
            for (let i = 0; i < postObject.length; i++) {
                let postId = `<p>Id: ${postObject[i].id}</p>`;
                let postUserId = `<p>UserId: ${postObject[i].userId}</p>`;
                let postTitle = `<p>Title: ${postObject[i].title}</p>`;
                let postBody = `<p>Body: ${postObject[i].body}</p>`;

                // Creating a container to store all posts and sub-containers to group each post, adding a class to each sub-container, printing posts to the page
                let allPostsContainer = document.getElementById(`allPostsContainer`);
                let eachPostContainer = document.createElement(`div`);
                eachPostContainer.classList.add(`post`);
                eachPostContainer.innerHTML += postId;
                eachPostContainer.innerHTML += postUserId;
                eachPostContainer.innerHTML += postTitle;
                eachPostContainer.innerHTML += postBody;
                allPostsContainer.appendChild(eachPostContainer);

                // Spacing out each sub-container on the page
                eachPostContainer.style.margin = `5vh 0vh`;
            }

            // If the request was successful, don't print any message to the user
            let getPostStatus = document.getElementById(`getPostStatus`);
            getPostStatus.innerText = ``;
        }

        // If the request is not done, print a loading message to the user
        else if (this.readyState !== 4) {
            let getPostStatus = document.getElementById(`getPostStatus`);
            getPostStatus.innerText = `Loading...`;
        } 
        
        // If the request is done but has errored, print an error message to the user
        else if(this.readyState === 4 && this.status !== 200) {
            let getPostStatus = document.getElementById(`getPostStatus`);
            getPostStatus.innerText = `Sorry, something went wrong. Failed to retrieve all posts.`;
        }
    }

    // Configuring the request with the type and URL
    ajax.open(`GET`, `https://jsonplaceholder.typicode.com/posts`, true);

    // Sending the request
    ajax.send();
}

// Adding a load event to the window and calling the function to print all posts on the page
// Note to Alex: I could just take the code out of the function so it can render on the page automatically but I decided to add an event listener to the window instead because in the notes, it says not to make ajax a global variable and that it's always better to make it a local variable
window.addEventListener(`load`, getBlogPosts);


// ---------- BONUS: COMMENTS ----------

// Creating a function that will be called as soon as the page is loaded
function getPostComments() {

    // Starting an AJAX request
    let ajax = new XMLHttpRequest();

    // Creating a function that must be called when the network request is done and no errors have occurred
    ajax.onreadystatechange = function() {

        // If the request is done and there are no errors, execute the following code
        if(this.readyState === 4 && this.status === 200) {
            
            // Converting the returned JSON formatted data into a JS object
            let commentsObject = JSON.parse(this.responseText);

            // Getting the all post sub-containers
            let post = document.getElementsByClassName(`post`);

            // Since the comments array length is greater than post array length, the conditional will only run when the counter is less than the post array length. This ensures that the same number of comments and posts are being printed to the user. It will error if the comment array length is used.
            for (let i = 0; i < post.length; i++) {

                // Storing each value from the JS object into a variable
                let commentsPostId = `<p>PostId: ${commentsObject[i].postId}</p>`;
                let commentsId = `<p>Id: ${commentsObject[i].id}</p>`;
                let commentsName = `<p>Name: ${commentsObject[i].name}</p>`;
                let commentsEmail = `<p>Email: ${commentsObject[i].email}</p>`;
                let commentsBody = `<p>Body: ${commentsObject[i].body}</p>`;

                // Creating sub-containers to group each comment, adding a class to each comment sub-container
                let eachCommentContainer = document.createElement(`div`);
                eachCommentContainer.classList.add(`comment`);
                eachCommentContainer.innerHTML += commentsPostId;
                eachCommentContainer.innerHTML += commentsId;
                eachCommentContainer.innerHTML += commentsName;
                eachCommentContainer.innerHTML += commentsEmail;
                eachCommentContainer.innerHTML += commentsBody;

                // Spacing out the comments on the page and adding a border to see the grouping of posts & comments more clearly
                eachCommentContainer.style.padding = `5vh 0vh`;
                eachCommentContainer.style.borderBottom = `1px solid black`;

                // Printing comments corresponding to each post to the page
                post[i].append(eachCommentContainer);
            }

            // If the request was successful, don't print any message to the user
            let getPostStatus = document.getElementById(`getPostStatus`);
            getPostStatus.innerText = ``;
        }

        // If the request is not done, print a loading message to the user
        else if (this.readyState !== 4) {
            let getPostStatus = document.getElementById(`getPostStatus`);
            getPostStatus.innerText = `Loading...`;
        } 
        
        // If the request is done but has errored, print an error message to the user
        else if(this.readyState === 4 && this.status !== 200) {
            let getPostStatus = document.getElementById(`getPostStatus`);
            getPostStatus.innerText = `Sorry, something went wrong. Failed to retrieve all comments.`;
        }
    }

    // Configuring the request with the type and URL
    ajax.open(`GET`, `https://jsonplaceholder.typicode.com/comments`, true);

    // Sending the request
    ajax.send();
}

// Adding a load event to the window and calling the function to print comments corresponding to each post
window.addEventListener(`load`, getPostComments);