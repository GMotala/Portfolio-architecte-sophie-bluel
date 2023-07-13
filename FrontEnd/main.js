async function main() {
    const response = await fetch('http://localhost:5678/api/works'); // reponse is the response from the server. fetch is the request. re
    const projectList = await response.json();
    console.log(projectList);
    console.log(projectList[0].title);
}

// create new elements
const newFigure = document.createElement('figure'); // creates figure tag
const newImg = document.createElement('img'); // creates img tag
const newFigcaption = document.createElement('figcaption'); // creates figcaption tag

// pass the property to add in the innerHTML
newImg.innerHTML = 'projectList.imageUrl'; // do not want hard-coded value, but I want this property of the object
newFigcaption.innerHTML = 'projectList.title'; // idem 

// 3. add the img and figureCaption to the to the figure element
newFigure.appendChild(newImg.innerHTML);
newFigure.appendChild(newFigcaption.innerHTML);

// 4. allocate and id
newFigure.setAttribute('id', 'item1');

// 5. add to gallery
const gallery = document.querySelector('div'); // div or gallery ?
gallery.appendChild(newFigure);

main();

/* GM NOTES:
1.1create the element with document.createElement(elements to create)
create all the elements/tag variables needed with the createElemen (what does the structure look like ?heading/paragraph etc)
ex: newHeading = document.createElement('h3');
look at html structure for the above 
2. modify the structure of the elements it with innerHTML  /  textContent
newHeading.textContent = 'the text you want'
newHeading.innerHTML = 'the structure you want'

3. append any children with newArticle.appendChild(add whatever child)
4. add CSS with classList.add('the properties we want')
5. setAttribute('id' + 'name of id')
6. add to DOM in whichever selector you want it --> const element = document.querySelector('element')
7. append the item you want to add to the element just created with article.append.child(element) 
pass the name of the tag/class to a constant that i want to change
*/ 