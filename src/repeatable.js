define(function(require, exports, module) {

  var $ = require("jquery");
  var Events = require("events");

  function mix(base, exts){
    if(!base){base = {};}
    if(!exts){return base;}
    for(var k in exts){
      if(!exts.hasOwnProperty(k)){continue;}
      base[k] = exts[k];
    }
    return base;
  }

  var DEFAULT_OPTIONS = {
    min: 1,
    max: Number.MAX_VALUE,
    //template: null,
    //appender: null,
    //moveable: false,
    i18n: {
      append: "添加",
      remove: "删除",
      moveup: "上移",
      movedown: "下移"
    }
  };

  var template_append = '<a class="repeatable-append" href="javascript:void(0);">_MSG_I18N_APPEND</a>';
  var template_remove = '<a class="repeatable-remove" href="javascript:void(0);">_MSG_I18N_REMOVE</a>';
  var template_moveup = '<a class="repeatable-moveup" href="javascript:void(0);">_MSG_I18N_MOVEUP</a>';
  var template_movedown = '<a class="repeatable-moveup" href="javascript:void(0);">_MSG_I18N_MOVEDOWN</a>';

  var Repeatable = function(container, options){
    this._container = $(container);
    this._options = mix(mix({}, DEFAULT_OPTIONS), options);
    this._evt = new Events();
  };
  Repeatable.prototype.init = function(){
    switch(this._container.attr("tagName")){
    case 'OL':
    case 'UL':
      this._list_type = "list";
      break;
    case 'TABLE':
    case 'TBODY':
      this._list_type = "table";
    default:
      break;
    }
    if(!this._options.hasOwnProperty("template")){
      this._options.template = this._container.find(">*:first-child").clone();
    }
  };
  Repeatable.prototype.append = function(){
    this._evt.trigger("append");
  };
  Repeatable.prototype.remove = function(){
    this._evt.trigger("remove");
  };
  //Repeatable.prototype.moveup = function(){
    //this._evt.trigger("move");
  //};
  Repeatable.prototype.on = function(evt, handler){
    this._evt.on(evt, handler);
  };

  module.exports = Repeatable;
});
