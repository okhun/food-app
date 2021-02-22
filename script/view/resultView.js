 class resultView {
    _showMessage(){
        document.querySelector('.food-list-container').innerHTML = '';
        document.querySelector('.pagination').innerHTML = '';
        const parentElement = document.querySelector('.food-list-container');
        parentElement.insertAdjacentHTML('afterbegin', `<div>Enter exist search query from this list <a href="https://forkify-api.herokuapp.com/phrases.html" target="blank">Search query</a></div>`);
        
    }
    _createMessage(){
        return `<div>Enter exist search query from this list <a href="https://forkify-api.herokuapp.com/phrases.html" target="blank">Search query</a></div>`;
    }

     _trancStr =(str, num)=>{
        if (str.length > num) {
            return str.slice(0, num) + "...";
          } else {
            return str;
          }
     }

    _geerateMarkUp=(element)=>{
        // return `<div class="food-list">
        //     <img src="${element.imageUrl}" alt="">
        //     <div>
        //         <h2 class="h2-index">${this._trancStr(element.publisher,15  )} </h2>
        //         <h3>${this._trancStr(element.title, 20)}</h3>
        //     </div>
        // </div>`;
        return `
        <a href="#${element.recipeId}" class="a-index">
                <div class="food-list">
                    <img src="${element.imageUrl}" alt="">
                    <div>
                        <h2 class="h2-index">${this._trancStr(element.publisher,12  )} </h2>
                        <h3 class="h3-index">${this._trancStr(element.title, 16)}</h3>
                    </div>
                </div>
            </a>
        `;
    }

    _addMarkUp=(data)=>{
        document.querySelector('.food-list-container').innerHTML = '';
        const parentElement = document.querySelector('.food-list-container');
        data&&data.map((element)=>{
            parentElement.insertAdjacentHTML('afterbegin', this._geerateMarkUp(element) );
        }).join('');
        
    }

}
export default new resultView();