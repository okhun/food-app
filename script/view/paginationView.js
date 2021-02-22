class pagination {
    
    addBtnToMarkUp(data){
        document.querySelector('.pagination').innerHTML = '';
        const parentElement = document.querySelector('.pagination');
        parentElement.insertAdjacentHTML('afterbegin', this._generateMarkUp(data))
    }
    _generateMarkUp(data){
        let numPages;
        try{
             numPages = Math.ceil(data.results.length/data.resultPerPage);
            }catch(err){
            
             throw err;
        }
       
    //    console.log(numPages);
       if(data.page===1&&numPages>1){
        return `<button data-goto="${data.page+1}" class="next-btn btn"><p class="p__index">${data.page+1}</p><img src="./image/icons/next.svg" alt=""></button>`;
          
       }

       if(data.page===numPages&&numPages>1){
        return ` <button data-goto="${data.page-1}" class="prev-btn btn"><img src="./image/icons/prev.svg" alt="" ><p class="p__index">${data.page-1}</p></button>`
       }

       if(data.page<numPages){
          return `<button data-goto="${data.page-1}" class="prev-btn btn"><img src="./image/icons/prev.svg" alt="" ><p class="p__index">${data.page-1}</p></button>
          <button data-goto="${data.page+1}" class="next-btn btn"><p class="p__index">${data.page+1}</p><img src="./image/icons/next.svg" alt=""></button>`;
       }

       return ''
    }  
}

export default new pagination();