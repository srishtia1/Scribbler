

//========
function openDeletePostModal(id) {
    document.getElementById('deletePostModal').style.display = 'block';
    document.getElementById('deletePostModal').setAttribute('postToDelete', id);
}

function cancelDeletePostModal() {
    document.getElementById('deletePostModal').style.display = 'none';
    event.preventDefault(); // Prevents page from refreshing
}

function redirectToPostPage() {
    window.location.href = "./post.html";
}

function confirmDeletePost(e) {
    event.preventDefault(); // Prevents page from refreshing
    document.getElementById('deletePostModal').style.display = 'none';
    var postIdToDelete = document.getElementById('deletePostModal').getAttribute('postToDelete');
    document.getElementById(postIdToDelete).remove();
}
