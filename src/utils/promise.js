const customFetch = (time, task) => {
    return new Promise((res) =>{
        setTimeout(() =>{
            res(task)
            }, time) 
    })
};

export default customFetch;

