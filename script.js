

const showRecipe = async function(){
    try{
        const res = await fetch('https://forkify-api.herokuapp.com/api/get?rId=47746');
        const data = await res.json();

        if(!res.ok){
            throw new Error (`${data.message} (${res.status})`);
        }
        let recipe;
        console.log(data);
        recipe={
            id: recipe
        }
        


    }catch(err){
        console.log(err);
    }
}

showRecipe();