    var init = function () {
        if (typeof window !== 'undefined' && typeof window.jQuery === 'undefined' || typeof window.kendo === 'undefined') {
            return null;
        }

        var $ = window.jQuery;
        var kendo = window.kendo;
        var extend = $.extend;

        var sitefinityTransport = kendo.data.RemoteTransport.extend({
            init: function (options) {
                this.sitefinity$ = options.dataProvider;
                if (!this.sitefinity$) {
                    throw new Error('An instance of the Sitefinity services sdk must be provided.');
                }

                if (!options.urlName) {
                    throw new Error('A type name must be provided.');
                }
                // TODO: add additional headers
                this.headers = options.headers;

                this.dataOptions = {
                    urlName: options.urlName,
                    providerName: options.providerName,
                    cultureName: options.CultureName
                };
                kendo.data.RemoteTransport.fn.init.call(this, options);
            },
            read: function (options) {
                // add expand filter as argument
                if (this.options.read && this.options.read.data)
                    options.data.expand = this.options.read.data.expand;

                var query = translateKendoQuery(options.data);
                var sitefinityQuery = new window.Sitefinity.Query();
                sitefinityQuery._order = query.$order;
                sitefinityQuery._skip = query.$skip;
                sitefinityQuery._take = query.$take;
                sitefinityQuery._expand = query.$expand;
                sitefinityQuery.expr = query.$where;

                var sfOptions = this._createSfOptions(options);

                var id = options.data.Id;
                if (!id) {
                    sfOptions.query = sitefinityQuery;
                    this._getData().get(sfOptions);
                } else {
                    sfOptions.key = id;
                    this._getData().getSingle(sfOptions);
                }
            },
            update: function (options) {
                var sfOptions = this._createSfOptions(options);
                sfOptions.key = options.data.Id;
                sfOptions.data = options.data;
                this._getData().update(sfOptions);
            },
            create: function (options) {
                // TODO: remove this hack
                delete options.data.Id;
                var sfOptions = this._createSfOptions(options);
                sfOptions.data = options.data;
                this._getData().create(sfOptions);
            },
            destroy: function (options) {
                var sfOptions = this._createSfOptions(options);
                sfOptions.key = options.data.Id;
                this._getData().destroy(sfOptions);
            },
            _getData: function () {
                return this.sitefinity$.data(this.dataOptions);
            },
            _createSfOptions: function (options) {
                var sfOptions = {
                    successCb: function (data) {
                        options.success(data.value)
                    },
                    failureCb: function (data) {
                        options.error(data.value)
                    }
                };
                return sfOptions;
            }
        });

        $.extend(true, kendo.data, {
            transports: {
                sitefinity: sitefinityTransport
            },
            schemas: {
                sitefinity: {
                    type: 'json',
                    total: function (data) {
                        return data.hasOwnProperty('$count') ? data.$count : data.length;
                    },
                    data: function (data) {
                        return data.value || data;
                    },
                    model: {
                        id: "Id"
                    }
                }
            }
        });

        function translateKendoQuery(data) {
            var result = {};
            var query = new window.Sitefinity.Query();
            if (data) {
                if (data.skip) {
                    result.$skip = data.skip;
                    delete data.skip;
                }
                if (data.take) {
                    result.$take = data.take;
                    delete data.take;
                }
                if (data.filter) {
                    //filter:  {field: "Title", operator: "eq", value: "newRecord"} // logic: or// filters: [{},{}]
                    var whereQuery = query.where();
                    filterBuilder.build(whereQuery, data.filter);
                    result.$where = whereQuery;

                    delete data.filter;
                }
                if (data.expand) {
                    result.$expand = [];
                    result.$expand.push(data.expand);
                    delete data.expand;
                }
            }

            return result;
        }

        var filterOperations = ['startswith', 'endswith', 'contains', 'containsor', 'doesnotcontain'];

        var filterBuilder = {
            build: function (query, filter) {
                filterBuilder._build(query, filter);
            },
            _build: function (query, filter) {
                if (filterBuilder._isSimple(filter)) {
                    filterBuilder._simple(query, filter);
                }
                else if (filterBuilder._isAny(filter)) {
                    filterBuilder._any(query, filter);
                }
                else if (filterBuilder._isStringFilter(filter)) {
                    filterBuilder._buildStringFilter(query, filter);
                }
                else if (filterBuilder._isAnd(filter)) {
                    filterBuilder._and(query, filter);
                }
                else if (filterBuilder._isOr(filter)) {
                    filterBuilder._or(query, filter);
                }
            },
            _isSimple: function (filter) {
                return typeof filter.logic === 'undefined' && !filterBuilder._isStringFilter(filter);
            },
            _simple: function (query, filter) {
                var value = filter.value;
                var field = filter.field;
                switch (filter.operator) {
                    case 'eq':
                        query.eq(field, value);
                        break;
                    case 'neq':
                        query.ne(field, value);
                        break;
                    case 'gt':
                        query.gt(field, value);
                        break;
                    case 'lt':
                        query.lt(field, value);
                        break;
                    case 'gte':
                        query.ge(field, value);
                        break;
                    case 'lte':
                        query.le(field, value);
                        break;
                    default:
                        throw new Error("Unknown operator type.");
                }
            },
            _isStringFilter: function (filter) {
                var operator = filter.operator || 'invalid';
                operator = operator.toLowerCase();
                return $.inArray(operator, filterOperations) !== -1;
            },
            _buildStringFilter: function (query, filter) {
                var value = filter.value;
                var field = filter.field;
                var operator = filter.operator.toLowerCase();
                switch (operator) {
                    case 'contains':
                        query.contains(field, value);
                        break;
                    case 'doesnotcontain':
                        query.not().contains(field, value).done();
                        break;
                    case 'startswith':
                        query.startsWith(field, value);
                        break;
                    case 'endswith':
                        query.endsWith(field, value);
                        break;
                    default:
                        throw new Error("Unknown operator type.");
                }
            },
            _isAnd: function (filter) {
                return filter.logic === 'and';
            },
            _and: function (query, filter) {
                this._binaryOperator('and', query, filter);
            },
            _isAny: function (filter) {
                return (filter.operator === 'contains' || filter.operator === 'containsor') && filter.value instanceof Array;
            },
            _any: function (query, filter) {
                var q = query.and().any();
                if (filter.operator === 'containsor')
                    q = query.or().any();

                for (var i = 0; i < filter.value.length; i++) {
                    q.eq(filter.field, filter.value[i]);
                }

                return q.done().done();
            },
            _isOr: function (filter) {
                return filter.logic === 'or';
            },
            _or: function (query, filter) {
                this._binaryOperator('or', query, filter);
            },
            _binaryOperator: function (operator, query, filter) {
                var i, l;
                var operands = filter.filters;
                var binaryQuery = query[operator]();
                for (i = 0, l = operands.length; i < l; i++) {
                    filterBuilder._build(binaryQuery, operands[i]);
                }

                query = binaryQuery.done();
            }
        };
    }

    /* if (init() === null)
        console.log("In order to load Sitefinity data source properly please call first 'Sitefinity.initDataSource();' before data source to be initialized.");*/

    // Invoke init() function.
    init();