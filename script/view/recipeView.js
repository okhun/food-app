class recipeView {
    _errorShow(error){
        document.querySelector('.ingredient').innerHTML='';
        let pe = document.querySelector('.ingredient');
       pe.insertAdjacentHTML('afterbegin', this._createError(error));
    }
    _createError(err){
        return `<div class="recipe_error"><h1>We couldnt find any data with this ID: <span class="error-span">${err}</span></h1></div>`;
    }
    _createIngMarkUp(data){
        const result = data.recipe.ingredients.forEach((element)=>{
            console.log(element);
            return `<div>
            <img src="./image/icons/check.svg" alt="" > 
            <p>${element} </p>
        </div>`;
        });
        
    }
    _createMarkUp(data){
      const like1 = 'like.svg';
      const like2 = 'like2.svg';
    //   console.log(data.bookmarked);
        return ` <div class="inner_ing">
                    <div class="img-ing-index">
                        <img src="${data.recipe.image_url}" alt="" width="100%" height="380px">
                        <p>${data.recipe.title} </p>
                    </div>
                    <div class="like-index">
                        <button class="svg-btn"><img src="./image/icons/${data.bookmarked?'like2.svg':'like.svg'}" alt="" class="svg-image"></button>
                    </div>
                    <div class="bg-recipe">
                        <h2 class="ing-h2"> RECIPE INGREDIENT</h2>
                        <div class="grid-ing-div">
                        ${data.recipe.ingredients.map((el)=> {
                           return `<div>
                            <img src="./image/icons/check.svg" alt="" > 
                            <p>${el} </p>
                        </div>`
                        }).join('')} 
                        </div>
                    </div>
                    <div class="direction">
                        <div>
                            <h2 class="direction-index">DO YOU WANT TO KNOW HOW TO COOK</h2>
                            <P class="dir-p">You can get full information from their wesite</P>
                        </div>
                        <a href="${data.recipe.source_url}" target="_blank" class="dir-btn">Direction</a>
                    </div>   
                </div>`; 
    }
    _getMarkUp(data){
        document.querySelector('.ingredient').innerHTML='';
       let parentElement = document.querySelector('.ingredient');
       parentElement.insertAdjacentHTML('afterbegin', this._createMarkUp(data));
    }
    _createSpiner(){
        return `<div class="loader"></div>`;
    }
    _spinner(){
       let pe = document.querySelector('.ingredient');
       pe.insertAdjacentHTML('afterbegin', this._createSpiner());
    }
}

export default new recipeView();