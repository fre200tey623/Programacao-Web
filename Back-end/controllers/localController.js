const Local = require("./../models/localModel");
const catchAsync = require("./../utils/catchAsync");

exports.getLocaisAgrupado = catchAsync( async(req, res, next) => {
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

exports.getLocais = catchAsync( async(req, res, next) => {
  const allLocais = await Local.find({});
  const quantidade = allLocais.length
  res.status(200).json({
      status: 'success',
      data: {
          local: allLocais,
          quantidade
      }
  });
})