document.addEventListener('DOMContentLoaded',()=> {
   
    var allpostsButton = document.getElementById('allposts');
    var createpostsButton = document.getElementById('createpost');
    var closeButton = document.getElementById('close-button');
    var createpostmodal = document.getElementById('overlay');
    allpostsButton.addEventListener('click',()=> {
        window.location.href ='html/postslist.html';
    })
    createpostsButton.addEventListener('click',()=> {
        createpostmodal.style.display = "flex";
    })
    closeButton.addEventListener('click',()=> {
        console.log('clicked');
        createpostmodal.style.display = "none";
    })
})