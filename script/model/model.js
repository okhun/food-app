 export const state ={
     recipe:{},
     search: {
         query:'',
         page:1,
         results:[],
         resultPerPage:10,
     },
     check:false,
     bookmarks:[],
 }
 export const showRecipe = async function(id){
    try{
        
        const res = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
        const data = await res.json();
        if(!res.ok){
           
            throw new Error (id);
        }
        state.recipe = data;
      
        // recipeView._getMarkUp(data)
        let temp =false;
        for(let i=0;i<state.bookmarks.length;i++){
            
            if(state.bookmarks[i].recipe.recipe_id===id){
                temp= true;
                break;
            }
        }
        if(temp){
            state.recipe.bookmarked = true; 
        }else{
            state.recipe.bookmarked =false;
        }
        // if(state.bookmarks.some((bookmark)=> bookmark.recipe_id ===id)){   
        //     state.recipe.bookmarked = true;
        //     console.log(state.recipe.bookmarked);
        // }else{

        //     state.recipe.bookmarked =false;
        //     // console.log(state.recipe.bookmarked);
        // }
    }catch(err){
       
        throw err;
       
    }
 }

 export const loadSearchResult = async function(query){
    try{
        state.search.query = query;
        const data = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${query}`);
        const resultData = await data.json();
        
        state.search.results = resultData.recipes&&resultData.recipes.map(recipe=>{
            return {
               imageUrl: recipe.image_url,
               publisher:recipe.publisher,
               publisherUrl: recipe.publisher_url,
               recipeId:recipe.recipe_id,
               socialRank:recipe.social_rank,
               sourceUrl: recipe.source_url,
               title: recipe.title,
            }
        });
        // console.log(state.search.results);
        
        
    }catch(error){
        console.error(error);
        throw error;
    }
} 
export const getSearchResultPage = function(page = state.search.page){
    state.search.page = page;
    const start = (page-1)*state.search.resultPerPage;
    const end = page*state.search.resultPerPage;
    return state.search.results&&state.search.results.slice(start, end);
}

// loadSearchResult('pizza');
const persistBookmark=function(){
    localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
}

export const addBookMark = function(recipe){
    // add bookmark
    let temp=true;
    for(let i=0;i<state.bookmarks.length;i++){
        // console.log(state.bookmarks[i].recipe.recipe_id);
        if(state.bookmarks[i].recipe.recipe_id===recipe.recipe.recipe_id){
            temp= false;
            break;
        }
    }

    if(temp){
       
        state.bookmarks.push(recipe);
        // console.log(state.bookmarks);
    }

    // console.log(state.bookmarks);
    if(recipe.recipe.recipe_id ===state.recipe.recipe.recipe_id){
        state.recipe.bookmarked = true;
        state.check = true;
        // console.log(state.check);
    } 
    persistBookmark();
}
export const deleteBookmark = function(id){
    let index;
    // console.log(state.recipe.recipe.recipe_id);
    let temp=false;
    for(let i=0;i<state.bookmarks.length;i++){
        // console.log(state.bookmarks[i].recipe.recipe_id);
        if(state.bookmarks[i].recipe.recipe_id===id){
            index = state.bookmarks.findIndex(el=>el.id=id);
            
            temp= true;
            break;
        }
    }
    if(temp){
        // console.log(index);
        let newArray = state.bookmarks.map((el)=>{
            return el.recipe.recipe_id;
        })
      
        state.bookmarks.splice(newArray.indexOf(id), 1);
    }

if(id ===state.recipe.recipe.recipe_id)
{
    state.recipe.bookmarked = false;
    state.check = false;
    // console.log(state.check);
} 
persistBookmark();
}

const init=function(){
    const storage = localStorage.getItem('bookmarks');
    if(storage) state.bookmarks = JSON.parse(storage);
}
init();
