class spinnerView {
    _createSpiner(){
        return `<div class="loader"></div>`;
    }
    _spinner(){
       let pe = document.querySelector('.food-list-container');
       pe.insertAdjacentHTML('afterbegin', this._createSpiner());
    }
}

export default new spinnerView();