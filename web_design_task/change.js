function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let slideIndex = 0; 

  function changeSlide() {
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
  }
  changeSlide();
  setInterval(changeSlide, 3000); // changeSlide every 3 seconds
}
    
    function changephoto(){
     var avatarImage = document.getElementById("avatarImage");

     avatarImage.addEventListener("click", function() {
        var input = document.createElement("input");
        //Create a file selection box that allows users to select local files.
        input.type = "file";
        //only allow user to choose image files from the image folder
        input.accept = "image/*";
        input.addEventListener("change", function() {
            var file = this.files[0];//get the file user selected
            var reader = new FileReader();
            reader.onload = function(e) {
                avatarImage.src = e.target.result;//Assigns the read file content to the src attribute of the avatarImage element
            };
            reader.readAsDataURL(file);});
        input.click();//make the file selection dialog box open automatically
    });
  }

  function changeText() {
    //get the button through id and add event listener
    var button = document.getElementById('homepageTransformer');
    
    //control the button's position
    var position = 0;
    var intervalId;
  
    button.addEventListener("click", function() {
      clearInterval(intervalId);
      if (position === -200) {
        window.location.href = "index.html";
      } else {
        //set the interval to move the button
        intervalId = setInterval(function() {
          position -= 1;
          button.style.transform = "translateY(" + position + "px)";//move the button up by position px
          if (position <= -200) {
            clearInterval(intervalId);
            // clear the interval when the button reaches the final position
          }
        }, 5);
        //5 is the interval time,means move the button every 5ms
      }
    });
    
    //create a container for the text and set the margin to separate the text from the button
    var ruleList = document.createElement('ul');
    ruleList.style.marginTop = "50px";
  
    var rule1 = document.createElement('li');
    rule1.textContent = "Please respect the opinions of others";
    rule1.classList.add('rule-item'); // add a class name for the text after clicking the button
    ruleList.appendChild(rule1);
    
    var rule2 = document.createElement('li');
    rule2.textContent = "Pay attention to your behaviours and only make your comments in a civilized manner.";
    rule2.classList.add('rule-item'); 
    ruleList.appendChild(rule2);
    
    var rule3 = document.createElement('li');
    rule3.textContent = "Don't forget the rules above.";
    rule3.classList.add('rule-item'); 
    ruleList.appendChild(rule3);
    
    //remove the original text and add the new text
    var middleDiv = document.querySelector('.middle');//get the middle div
    middleDiv.removeChild(middleDiv.querySelector('p'));//remove the original text
    middleDiv.appendChild(ruleList); //add the new text
  }
  
  function submitaction() {
    window.location.href = "Success.html";
  }




  let currentRating = 0; 
  function highlightStars(index) {
    const stars = document.querySelectorAll('.star');
  
    for (let i = 0; i < stars.length; i++) {
      if (i <= index) {
        stars[i].classList.add('active');
      } else {
        stars[i].classList.remove('active');
      }
    }
  }
  
  function resetStars() {
    const stars = document.querySelectorAll('.star');
  
    for (let i = 0; i < stars.length; i++) {
      if (i < currentRating) {
        stars[i].classList.add('active');
      } else {
        stars[i].classList.remove('active');
      }
    }
  }
  
  function toggleStars(index) {
    const stars = document.querySelectorAll('.star');
  

    if (index === currentRating) {
      currentRating = 0;
    } else {
      currentRating = index + 1;
    }

    for (let i = 0; i < stars.length; i++) {
      if (i < currentRating) {
        // If the current index is less than the current index, add the 'active' class name
        stars[i].classList.add('active');
      } else {
        stars[i].classList.remove('active');
      }
    }
  }
  
  
  
  
  
  
  
  
  function player() {
    window.location.href = 'https://www.youtube.com/watch?v=qEVUtrk8_B4';
  }
  
  function joinDiscussion(){
    window.location.href = 'Forum.html';
  }
  function submitaction() {
    document.querySelector('.comment-box form').addEventListener('submit', function(event) {
      event.preventDefault(); // prevent the form from submitting
      
      // get the new comment
      var commentInput = document.querySelector('.comment-box textarea');
      var newComment = commentInput.value;
      
      // clear the input box
      commentInput.value = '';
      
      // create a new comment element
      var newCommentElement = document.createElement('div');
      newCommentElement.classList.add('comment');
      newCommentElement.innerHTML = `
        <img src="image/loginphoto.jpg" alt="User Avatar" class="avatar">
        <div>
          <div class="username">User 3</div>
          <div class="message">${newComment}</div>
        </div>
      `;
      
      // put
      var commentSection = document.querySelector('.comment-section');
      commentSection.appendChild(newCommentElement);
    });
    
  }

  function congratulations(){
    window.location.href = 'Success.html';
  }
  
  function login(){
    window.location.href = 'index.html';
  }