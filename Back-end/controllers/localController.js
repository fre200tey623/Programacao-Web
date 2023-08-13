const Local = require("./../models/localModel");
const catchAsync = require("./../utils/catchAsync");

exports.getLocais = catchAsync( async(req, res, next) => {
    const allLocais = await Local.aggregate([
        {
          $group: {
            _id: "$estado",
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id:0,
            estado: "$_id",
            count: "$count"
          }
        }
      ]);
    res.status(200).json({
        status: 'success',
        data: {
            local: allLocais,
        }
    });
})