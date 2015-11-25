// Externs file for using Knockout with Closure Compiler
// Based on https://raw.github.com/gist/3346275/knockout_externs.js

/** @const - type defs for Knockout options */
var kox = {};

/**
 * Object literal with component element and childNodes.
 * @typedef {{element: (Element), templateNodes: (Array.<Element>|undefined) }}
 */
kox.componentInfo;

/**
 * Object literal defining options for config param of ko.components.register
 * @typedef {{viewModel: (function():?|Object), template: (string|Object), synchronous: (?boolean|undefined) }}
 */
kox.componentRegisterConfig;

/** @const - Knockout namespace */
var ko = {};

/**
 * @constructor
 * @param {?} initialValue
 * @return {ko.observable}
 */
ko.observable = function(initialValue) {};

/**
 * @param {?} initialValue
 */
ko.observable.prototype.subscribe = function(initialValue) {};

/**
 * @return {?}
 */
ko.observable.prototype.get = function() {};

/**
 * @param {?} newValue
 */
ko.observable.prototype.set = function(newValue) {};

/**
* @constructor
 * @param  {Object|function():?} evaluatorFunctionOrOptions
 *         * Single-parameter syntax - everything is on this "options" param OR
 *         * Multi-parameter syntax - first param is read function
 * @param  {function():?=} evaluatorFunctionTarget    [description]
 * @param  {Object=} options                    [description]
 * @return {ko.observable}                            [description]
 */
ko.dependentObservable = function (evaluatorFunctionOrOptions, evaluatorFunctionTarget, options) {};

ko.computed = ko.dependentObservable;

ko.observableArray = function (initialValues) {};
ko.applyBindings = function (viewModel, rootNode) {};

ko.isObservable = function(instance) {};
ko.setTemplateEngine = function(templateEngine) {};

/** @constructor */
ko.nativeTemplateEngine = function() {};
/** @param {Object=} templateDocument */
ko.nativeTemplateEngine.prototype.makeTemplateSource = function(template, templateDocument){};

ko.bindingHandlers = {};
ko.bindingHandlers.init = function(element, valueAccessor, allBindings, viewModel, bindingContext) {};
ko.bindingHandlers.update = function(element, valueAccessor, allBindings, viewModel, bindingContext) {};

/** @const - Knockout components namespace */
ko.components = {};

ko.components.defaultLoader = {};
ko.components.loaders = {};

/**
 * Register a component
 * @param  {string} componentName
 * @param  {kox.componentRegisterConfig} config
 */
ko.components.register = function(componentName, config) {};

ko.components.isRegistered = function(componentName) {};
ko.components.unregister = function(componentName) {};
ko.components.get = function(name, callback) {};
ko.components.clearCachedDefinition = function(name) {};
ko.components.defaultLoader.getConfig = function(name, callback) {};
ko.components.defaultLoader.loadComponent = function(name, componentConfig, callback) {};
ko.components.defaultLoader.loadTemplate = function(name, templateConfig, callback) {};
ko.components.defaultLoader.loadViewModel = function(name, templateConfig, callback) {};
ko.components.loaders.push = function(myLowPriorityLoader) {};
ko.components.loaders.unshift = function(myHighPriorityLoader) {};

ko.utils = {};
ko.utils.domNodeDisposal = {};

ko.utils.isIe6 = {};
ko.utils.isIe7 = {};
ko.utils.ieVersion = {};

ko.utils.register = function(componentName, config) {};
ko.utils.arrayForEach = function (array, action) {};
ko.utils.arrayIndexOf = function (array, item) {};
ko.utils.arrayFirst = function (array, predicate, predicateOwner) {};
ko.utils.arrayRemoveItem = function (array, itemToRemove) {};
ko.utils.arrayGetDistinctValues = function (array) {};
ko.utils.arrayMap = function (array, mapping) {};
ko.utils.arrayFilter = function (array, predicate) {};
ko.utils.arrayPushAll = function (array, valuesToPush) {};
ko.utils.extend = function (target, source) {};
ko.utils.emptyDomNode = function (domNode) {};
ko.utils.moveCleanedNodesToContainerElement = function(nodes) {};
ko.utils.setDomNodeChildren = function (domNode, childNodes) {};
ko.utils.replaceDomNodes = function (nodeToReplaceOrNodeArray, newNodesArray) {};
ko.utils.setOptionNodeSelectionState = function (optionNode, isSelected) {};
ko.utils.stringTrim = function (string) {};
ko.utils.stringTokenize = function (string, delimiter) {};
ko.utils.stringStartsWith = function (string, startsWith) {};
ko.utils.buildEvalWithinScopeFunction = function (expression, scopeLevels) {};
ko.utils.domNodeIsContainedBy = function (node, containedByNode) {};
ko.utils.domNodeIsAttachedToDocument = function (node) {};
ko.utils.tagNameLower = function(element) {};
ko.utils.registerEventHandler = function (element, eventType, handler) {};
ko.utils.triggerEvent = function (element, eventType) {};
ko.utils.unwrapObservable = function (value) {};
ko.utils.toggleDomNodeCssClass = function (node, className, shouldHaveClass) {};
ko.utils.setTextContent = function(element, textContent) {};
ko.utils.ensureSelectElementIsRenderedCorrectly = function(selectElement) {};
ko.utils.range = function (min, max) {};
ko.utils.makeArray = function(arrayLikeObject) {};
ko.utils.getFormFields = function(form, fieldName) {};
ko.utils.parseJson = function (jsonString) {};
ko.utils.stringifyJson = function (data, replacer, space) {};
ko.utils.postJson = function (urlOrForm, data, options) {};

ko.utils.domNodeDisposal.addDisposeCallback = function (element, callback) {};
ko.utils.domNodeDisposal.cleanExternalData = function (node) {};
