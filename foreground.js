//Get Article
var articleContent = document.getElementsByClassName("article__body")[0];
//Clone article
var clonedContent = articleContent.cloneNode(true);
//Hide Original Article
articleContent.setAttribute("style", "display:none");
//Modify cloned content
var hiddenText = clonedContent.querySelectorAll(".ziKrjEJtYlqnC");
  for (let i = 0; i < hiddenText.length; i++){
    hiddenText[i].removeAttribute("style");
    hiddenText[i].classList.add("ellipsis");
    // hiddenText[i].classList.remove("QUnWjUZnT0nf");
    hiddenText[i].classList.remove("ziKrjEJtYlqnC");
  }

var premium = clonedContent.querySelector(".article-offer__inner");
if (premium != null) {
  premium.classList.remove("article-offer__inner");
}
//Create new Div element
var div = document.createElement("div");
//Add cloned node to div element
div.appendChild(clonedContent);
//get exisiting element- add in cloned element
var articleBodyWrapper = document.getElementsByClassName("article__main")[0];
articleBodyWrapper.appendChild(div);