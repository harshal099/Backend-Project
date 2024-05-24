/*************function using promise ************/
const asyncHandler = (reqHandler) => {
    return (req,res,next)=>{
        Promise.resolve(reqHandler(req,res,next))
        .catch((err)=> next(err))
    };
};

export { asynchHandler }

/*const asyncHandler = () => {}
const asyncHandler = (func) = () =>{}
const asyncHandler = (func) = {async() => {}}
*/

/*************function using async await *****/
/*const asyncHandler = (fn) => async (req,res,next) => {
    try{
        await fn(req,res,next)
    }
    catch(error){
        res.send(err.code || 500)
        .json{
            success: false,
            message: err.message,
        }
    }
}
*/
