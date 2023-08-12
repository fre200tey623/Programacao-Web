const Local = require("./../models/localModel");
const catchAsync = require("./../utils/catchAsync");

exports.getLocais = catchAsync( async(req, res, next) => {
    const allLocais = await Local.find({});
    res.status(200).json({
        status: 'success',
        data: {
            local: allLocais,
        }
    });
})