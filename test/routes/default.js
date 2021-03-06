var Joi = require('joi');

var t = Joi;

var handler = function (request) {

    request.reply('ok');
};

module.exports = [
    { method: 'GET', path: '/test', config: { handler: handler, validate: { query: { param1: t.string().required() } }, tags: ['admin', 'api'], description: 'Test GET', notes: 'test note' } },
    { method: 'GET', path: '/another/test', config: { handler: handler, validate: { query: { param1: t.string().required() } } } },
    { method: 'GET', path: '/zanother/test', config: { handler: handler, validate: { query: { param1: t.string().required() } } } },
    { method: 'POST', path: '/test', config: { handler: handler, validate: { query: { param2: t.string().valid('first', 'last') } } } },
    { method: 'DELETE', path: '/test', config: { handler: handler, validate: { query: { param2: t.string().valid('first', 'last') } } } },
    { method: 'PUT', path: '/test', config: { handler: handler, validate: { query: { param2: t.string().valid('first', 'last') } } } },
    { method: 'HEAD', path: '/test', config: { handler: handler, validate: { query: { param2: t.string().valid('first', 'last'), param3: t.number().valid(42) } } } },
    { method: 'GET', path: '/notincluded', config: { handler: handler, plugins: { lout: false } } },
    { method: 'GET', path: '/nested', config: { handler: handler, validate: { query: { param1: t.object({ nestedparam1: t.string().required() }) } } } },
    { method: 'GET', path: '/rootobject', config: { handler: handler, validate: { query: t.object({ param1: t.string().required() }) } } },
    { method: 'GET', path: '/rootarray', config: { handler: handler, validate: { query: t.array().includes(t.string(), t.object({ param1: t.number() })).excludes(t.number()).min(2).max(5).length(3) } } },
    { method: 'GET', path: '/path/{pparam}/test', config: { handler: handler, validate: { path: { pparam: t.string().required() } } } },
    { method: 'GET', path: '/emptyobject', config: { handler: handler, validate: { query: { param1: t.object() } } } },
    { method: 'GET', path: '/alternatives', config: { handler: handler, validate: { query: { param1: t.alternatives(t.number().required(), t.string().valid('first', 'last')) }}}},
    { method: 'GET', path: '/novalidation', config: { handler: handler } },
    { method: 'GET', path: '/withresponse', config: { handler: handler, response: { schema: { param1: t.string() } } } }
];
