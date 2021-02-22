class searchView {
    getQuery (){
        const query = document.querySelector('.search-input').value;
        this.clearInput();
        return query;
    }

    clearInput(){
        document.querySelector('.search-input').value='';
    }
}

export default new searchView();