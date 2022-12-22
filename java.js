const openPopup = document.querySelector('.newCard-btn')
const overlay= document.getElementById('overlay') 
let cardContainer = document.querySelector('.card-container')
let submitBtn= document.querySelector('.submit-btn')
let authorName= document.querySelector('.authorName')
let titleName= document.querySelector('.titleName')
let pages= document.querySelector('.pages')
let checkbox= document.querySelector('.checkbox')
let form= document.querySelector('.form')
let warning= document.querySelector('.warning')

// enable and disable popup
openPopup.addEventListener('click', ()=> {
    const popup = document.querySelector('.popup')
    popup.classList.add('active')
    overlay.classList.add('active')
} )


overlay.addEventListener('click', removePopup)

function removePopup(){
    popup.classList.remove('active');
    overlay.classList.remove('active');
    warning.classList.remove('active')
    form.reset();
}


// objects

let library= [];

//constructor
function book(title, author, page, isRead){
    this.title = title;
    this.author= author;
    this.page= page;
    this.isRead= isRead;
}
//make new card
function makeNewCard(book){

    let card= document.createElement('div');
    card.classList.add('card');
    let title= document.createElement('div');
    title.classList.add('title', 'content');
    let author= document.createElement('div');
    author.classList.add('author','content');
    let page = document.createElement('div');
    page.classList.add('page', 'content');
    let readStatus= document.createElement('button');
    readStatus.classList.add('read-status', 'card-btn');
    let removeCard= document.createElement('button');
    removeCard.classList.add('remove', 'card-btn')
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(page);
    card.appendChild(readStatus);
    card.appendChild(removeCard);
    cardContainer.appendChild(card);

    title.textContent=book.title;
    author.textContent=book.author;
    page.textContent= book.page + ' pages';
    if(book.isRead){
        readStatus.textContent='read'
    } else{
        readStatus.textContent='not read'
        readStatus.classList.add('red-background')
    }
    readStatus.onclick= ()=>{
        for(let i=0; i<library.length;i++){
            if(title.textContent === library[i].title){
                if(library[i].isRead=== true){
                    library[i].isRead= false
                }else library[i].isRead= true
                readStatus.textContent='read'
            readStatus.classList.toggle('red-background')
            if(readStatus.classList.contains('red-background')){
                readStatus.textContent='not read'
            }
            }
    }

    }

    removeCard.textContent= 'Remove';
    removeCard.onclick=()=>{
        for(let i=0; i<library.length;i++){
            if(title.textContent === library[i].title){
                library.splice(i,1)
                cardContainer.removeChild(cardContainer.children[i])
            }
        }

    }

}

// press button to display the card
submitBtn.addEventListener('click', (e) =>{     
    e.preventDefault()
    if(titleName.value==='' || authorName.value==='' || pages.value=== '' ){
        return
    }
    let books= new book(titleName.value ,authorName.value, pages.value, checkbox.checked )
    for(let i=0; i<library.length; i++){
        if(books.title===library[i].title && books.author===library[i].author){
            return
        }else{
            
        }

    }
    if(pages.value>1){
        library.push(books)
    makeNewCard(books)
    removePopup()
    }else{
        warning.classList.add('active')
        warning.textContent='book must have more than 1 page'
        return
    }

})









