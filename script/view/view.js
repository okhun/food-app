class view {
    _generateMarkUp(){

    }
    update(data,num){
     
        const newMarkup = `<div class="inner_ing">
        <div class="img-ing-index">
            <img src="${data.recipe.recipe.image_url}" alt="" width="100%" height="380px">
            <p>${data.recipe.title} </p>
        </div>
        <div class="like-index">
            <button class="svg-btn"><img src="./image/icons/${data.check?'like2.svg':'like.svg'}" alt="" class="svg-image">${data.check?'like2.svg':'like.svg'}</button>
        </div>
        <div class="bg-recipe">
            <h2 class="ing-h2"> RECIPE INGREDIENT</h2>
            <div class="grid-ing-div">
            ${data.recipe.recipe.ingredients.map((el)=> {
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
    
        // var range = document.createRange();
        // // or whatever context the fragment is to be evaluated in.
        // var parseContext = document.body; 
        // range.selectNodeContents(parseContext);
        // var fragment = range.createContextualFragment(html);
        // console.log(fragment);
        // if(!data||Array.isArray(data)&&data.length===0)
        // return 'error';
        const newDOM = document.createRange().createContextualFragment(newMarkup);
        const newElements =Array.from(newDOM.querySelectorAll('.svg-btn'));
        const realElements =Array.from(document.querySelectorAll('.svg-btn'));
        // console.log(newElements[0]);
        // console.log(realElements[0]);
        // console.log(newElements[0].isEqualNode(realElements[0]));
        if(num===0){
            // realElements[0] = newElements[0];
           
            document.querySelector('.like-index').innerHTML =`<button class="svg-btn"><img src="./image/icons/like2.svg" alt="" class="svg-image"></button>`
        }else{
            
            document.querySelector('.like-index').innerHTML =`<button class="svg-btn"><img src="./image/icons/like.svg" alt="" class="svg-image"></button>`
        }
        // console.log(newElements[0].isEqualNode(realElements[0]));

// console.log(typeof realElements[0].innerHTML);



    }
}

export default new view();