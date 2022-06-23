
const SuccessResponse = async (res, message, data, statusCode) => {
    return res.status(statusCode).json({
        success:true, 
        message: message,
        data: data
    }); 
};
export default SuccessResponse;



