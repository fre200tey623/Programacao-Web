const Declaracao = require('./../models/declaracaoModel');

const catchAsync = require('./../utils/catchAsync');


exports.getQuestao1 = catchAsync( async(req, res, next) => {
    const declaracoes = await Declaracao.aggregate([ { $group: { _id: { pais_origem: "$pais_origem", mes: "$mes", }, count: { $sum: 1, }, }, }, { $project: { _id: 0, pais_origem: "$_id.pais_origem", mes: "$_id.mes", count: "$count", }, }, { $sort: { count: -1, }, }, ]);
    res.status(200).json({
        status: 'success',
        data: {
            declaracoes
        }
    });
});

exports.getQuestao2 = catchAsync( async(req, res, next) => {
    const declaracoes = await Declaracao.aggregate( [ { $match: { pais_origem: "ARGENTINA" } }, 
    { $sort: { frete_maximo_dolar_truncado: -1 } }, 
    { $project: {_id:0, pais_origem: "$pais_origem", frete_maximo_dolar_truncado:"$frete_maximo_dolar_truncado", mes: "$mes" } }, 
    { $limit: 1 } ]
    );
    res.status(200).json({
        status: 'success',
        data: {
            declaracoes
        }
    });
});

exports.getQuestao3 = catchAsync( async(req, res, next) => {
    const declaracoes = await Declaracao.aggregate([ { $group: { _id: "$pais_origem", count: { $sum: 1, }, }, }, { $sort: { count: -1 } }, { $limit: 10 } ]
    );
    res.status(200).json({
        status: 'success',
        data: {
            declaracoes
        }
    });
});

exports.getQuestao4 = catchAsync( async(req, res, next) => {
    const declaracoes = await Declaracao.aggregate([ { $group: { _id: "$pais_origem", count: { $sum: 1, }, }, }, ]
    );
    res.status(200).json({
        status: 'success',
        data: {
            declaracoes
        }
    });
});

exports.getQuestao5 = catchAsync( async(req, res, next) => {
    const declaracoes = await Declaracao.aggregate([ { $group: { _id: "$mes", count: { $sum: 1, }, }, }, { $sort: { count: 1 } } ]
    );
    res.status(200).json({
        status: 'success',
        data: {
            declaracoes
        }
    });
});

exports.getQuestao6 = catchAsync( async(req, res, next) => {
    const declaracoes = await Declaracao.aggregate([ { $group: { _id: "$pais_origem", media: { $avg : "$seguro_media_dolar_truncado" } } }, { $project: {_id:0, pais_origem:"$_id", valor_seguro: "$media" } }, { $sort: { valor_seguro: -1 } }, { $limit: 1 } ]
    );
    res.status(200).json({
        status: 'success',
        data: {
            declaracoes
        }
    });
});

exports.getQuestao7 = catchAsync( async(req, res, next) => {
    const declaracoes = await Declaracao.aggregate([
        {
          $match: {
            pais_origem: "CHINA, REPUBLICA POPULAR",
          },
        },
        { $group: { _id: "$mes", count: { $sum: 1 } } },
        {
          $project: {
            _id: 0,
            mes: "$_id",
            count: "$count",
          },
        },
        { $sort: { count: -1 } },
        { $limit: 1 },
      ]
    );
    res.status(200).json({
        status: 'success',
        data: {
            declaracoes
        }
    });
});

exports.getQuestao8 = catchAsync( async(req, res, next) => {
    const declaracoes = await Declaracao.aggregate([
        {
          $group: {
            _id: "$mes",
            media: {
              $avg: "$frete_media_dolar_truncado",
            },
          },
        },
        {
          $project: {
            _id:0,
              mes: "$_id",
            media: "$media"
          }
        }
      ]);
    res.status(200).json({
        status: 'success',
        data: {
            declaracoes
        }
    });
});

exports.getQuestao9 = catchAsync( async(req, res, next) => {
    const declaracoes = await Declaracao.aggregate([
        {
          $group: {
            _id: "$pais_origem",
            media: { $avg: "$peso_liq_soma_truncado" },
          },
        },
        {
          $project: {
            _id:0,
              pais_origem: "$_id",
            media: "$media"
          }
        },
        { $sort: { media: -1 } },
        { $limit: 5 },
      ]
    );
    res.status(200).json({
        status: 'success',
        data: {
            declaracoes
        }
    });
});

exports.getQuestao10 = catchAsync( async(req, res, next) => {
    const declaracoes = await Declaracao.aggregate([
        {
          $group: {
            _id: "$pais_origem",
            media: {
              $avg: "$frete_media_dolar_truncado",
            },
          },
        },
        {
          $project: {
            _id:0,
              pais_origem: "$_id",
            media: "$media"
          }
        },
        { $sort: { media: -1 } },
        { $limit: 5 },
      ]);
    res.status(200).json({
        status: 'success',
        data: {
            declaracoes
        }
    });
});