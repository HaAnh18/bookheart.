/* 
    RMIT University Vietnam
    Course: COSC2430 Web Programming
    Semester: 2023A
    Assessment: Assignment 1
    Author: Nguyen Tran Ha Anh
    ID: s3938490
    Acknowledgement:
*/

/* Takes in the input of the mouse movement which is named e.
  Whenever e moves somewhere, the value gets multiply with the data-value divided by 250.
  The image of the book will move to that value 
  Creating a move away effect in the page
*/
document.addEventListener('mousemove' , (e) => (
    document.querySelectorAll('.book-bg').forEach(function(item) {
      const moving_value = item.getAttribute('data-value');
      const x = e.clientX * moving_value/250;
      const y = e.clientY * moving_value /250;
  
      item.style.transform = `translate(${x}px, ${y}px)`
    })
))

/* If the cursor clicks on the user cart logo again the cart will dissapear after opening it. */
function dropCart() {
    document.querySelector("#user-cart").classList.toggle("show");
}

/*
  If you click on the arrow, it will toggle the menu show class.
  Shows the category menu.
*/
let arrow = document.querySelectorAll(".arrow");
arrow[0].addEventListener("click", (e) => {
  console.log(e);
  let arrowParent = e.target.parentElement.parentElement;
  console.log(arrowParent);
  arrowParent.classList.toggle("showMenu");
})

/*
Toggles the hamburger icon when clicked on
removes the close tag so that the hamburger icon can appear 
*/
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".fa-bars");
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
})

/*
  Changes the entire page color.
  A few element color will be inverted to be like the dark mode
*/
var icon = document.querySelector("#icon");

icon.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.classList = "fa-solid fa-sun";
  } else {
    icon.classList = "fa-solid fa-moon";
  }
})

  

  
