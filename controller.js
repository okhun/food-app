
import * as model from './script/model/model.js';
import searchView from './script/view/searchView.js'
import resultView from './script/view/resultView.js';
import paginationView from './script/view/paginationView.js';
import recipeView from './script/view/recipeView.js'
import spinnerView from './script/view/spinerView.js'
import view from './script/view/view.js';
import likeView from './script/view/likeView.js'


const controlBookmark = function(){
    // console.log(model.state.recipe.bookmarked);
    if(!model.state.recipe.bookmarked){
        
        model.addBookMark(model.state.recipe);
        view.update(model.state,0);

        likeView._getMarkUp(model.state.bookmarks);
        
        // console.log(model.state.bookmarks);
    }
    else{
        
        model.deleteBookmark(model.state.recipe.recipe.recipe_id);
        view.update(model.state,1);
        likeView._getMarkUp(model.state.bookmarks);
        
        // console.log(model.state.bookmarks);
    }
    // recipeView._getMarkUp(model.state.recipe);
    // console.log(model.state.recipe.bookmarked);
    // view.update(model.state);
}

document.querySelector('.ingredient').addEventListener('click', function(e){
    const btn = e.target.closest('.svg-btn');
    if(!btn){
        return;
    }else{
        controlBookmark();
    }
})

const showRecipe = async function(){
    try{
        document.querySelector('.ingredient').innerHTML ='';
        const id = window.location.hash.slice(1);
        if(!id)
        return;
        recipeView._spinner();
        await model.showRecipe(id);
        recipeView._getMarkUp(model.state.recipe); 
        init();
    }catch(error){
        recipeView._errorShow(error);
    }
}



const controlSearchResults = async function(){
    try{
        document.querySelector('.food-list-container').innerHTML = '';
        // spinnerView._spinner();
        const query = searchView.getQuery();
        if(!query) {
            let err = `<div>Enter exist search query from this list <a href="https://forkify-api.herokuapp.com/phrases.html" target="blank">Search query</a></div>`;
            resultView._showMessage();
            return;
        };
       
        spinnerView._spinner();
        await model.loadSearchResult(query);
        // console.log(model.state.search.results);
        model.state.search.page = 1;
        resultView._addMarkUp(model.getSearchResultPage());
        // paginationView._generateMarkUp(model.state.search.results
        // console.log(model.state.search);
       paginationView.addBtnToMarkUp(model.state.search)
       
    }catch(err){
        // console.log(err);
        resultView._showMessage();
        // throw err;
    }
}

document.querySelector('.pagination').addEventListener('click',function(e){
    let pageNum = 1;
    if(e.target instanceof HTMLButtonElement){
        pageNum = +e.target.dataset.goto;
    }else if(e.target instanceof HTMLImageElement){
        pageNum = +e.target.parentElement.dataset.goto;
    }else if(e.target instanceof HTMLParagraphElement){
        pageNum = +e.target.parentElement.dataset.goto;
    }
    resultView._addMarkUp(model.getSearchResultPage(pageNum));
    paginationView.addBtnToMarkUp(model.state.search)
  
   
});

const searchBtnClicked = function(){
    document.querySelector('.btn-search').addEventListener('click', function(){
        controlSearchResults();  
    })
}

document.addEventListener('keydown', function(e){
  
if(e.code ==='Enter'){
    controlSearchResults();
}  
});
searchBtnClicked();
// document.querySelector('.food-list-container').addEventListener('click', showRecipe);
// window.addEventListener('hashchange',showRecipe);
// window.addEventListener('load', showRecipe);

['hashchange', 'load'].forEach((ev)=>window.addEventListener(ev, showRecipe));


document.querySelector('.like_img').addEventListener('click',function(){
    init();
    let display =document.querySelector('.bookmark-index');
    if(display.style.display==='none'||display.style.display===""){
        document.querySelector('.bookmark-index').style.transition = 'all 2s';
       display.style.display='block';
    }else{
        display.style.display='none';
    }

})

const init =function(){
    const storage = localStorage.getItem('bookmarks');
    if(storage) {
        model.state.bookmarks = JSON.parse(storage);
        likeView._getMarkUp(model.state.bookmarks);
    }
}

document.querySelector('.upload_recipe').addEventListener('click',function(){
  ochish();
})
let yopish = function(){
    modal.classList.add('yashirilgan');
    overlay.classList.add('yashirilgan');
}
let ochish = function(){
    modal.classList.remove('yashirilgan');
    overlay.classList.remove('yashirilgan');
}
let modal = document.querySelector('.modal');
let modalYopish = document.querySelector('.modal-yopish');
let overlay = document.querySelector('.overlay');
const showModal = document.querySelectorAll('.modal-index');

modalYopish.addEventListener('click', yopish);
overlay.addEventListener('click', yopish);

document.addEventListener('keydown', function(e){
   if(e.key ==='Escape'&& !modal.classList.contains('yashirilgan')){
            yopish();
    }
})