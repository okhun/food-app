class likeView {
    
    _trancStr =(str, num)=>{
       
        if (str.length > num) {
            return str.slice(0, num) + "...";
          } else {
            return str;
          }
     }
    _createMarkUp(element){
       
        return `
        <a href="#${element.recipe.recipe_id}" class="a-index">
                <div class="food-list">
                    <img src="${element.recipe.image_url}" alt="">
                    <div>
                        <h2 class="h2-index">${this._trancStr(element.recipe.publisher,15  )} </h2>
                        <h3 class="h3-index">${this._trancStr(element.recipe.title, 20)}</h3>
                    </div>
                </div>
            </a>
        `;
      }
      _getMarkUp(data){
       
        document.querySelector('.bookmark-index').innerHTML = '';
        const parentElement = document.querySelector('.bookmark-index');
        data&&data.map((element)=>{
            parentElement.insertAdjacentHTML('afterbegin', this._createMarkUp(element) );
        }).join('');
      }

}
export default new likeView();