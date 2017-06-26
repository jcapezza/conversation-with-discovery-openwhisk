'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _classnames=require('classnames');var _classnames2=_interopRequireDefault(_classnames);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var ButtonsGroup=function(_React$Component){_inherits(ButtonsGroup,_React$Component);function ButtonsGroup(){_classCallCheck(this,ButtonsGroup);return _possibleConstructorReturn(this,(ButtonsGroup.__proto__||Object.getPrototypeOf(ButtonsGroup)).apply(this,arguments));}_createClass(ButtonsGroup,[{key:'render',value:function render(){var _this2=this;var expandedWidths=100/this.props.buttons.length+'%';return _react2.default.createElement('div',{className:'buttons-group'},this.props.buttons.map(function(button,index){return _react2.default.createElement('div',{style:{display:'inline-block',marginTop:'0rem',width:''+(_this2.props.isExpanded?expandedWidths:_this2.props.minWidth)},key:index},_react2.default.createElement('input',{className:'base--radio buttons-group--radio',type:_this2.props.type,id:button.id||_this2.props.name+'-'+button.value,name:_this2.props.name,checked:button.selected,value:button.value,onClick:_this2.props.onClick,onChange:_this2.props.onChange}),_react2.default.createElement('label',{className:(0,_classnames2.default)('base--inline-label','base--button','buttons-group--button',{'buttons-group--button_first':index===0},{'buttons-group--button_last':index===_this2.props.buttons.length-1}),style:{width:'100%'},htmlFor:button.id,title:button.text},button.text));}));}}]);return ButtonsGroup;}(_react2.default.Component);ButtonsGroup.propTypes={type:_react.PropTypes.oneOf(['button','radio','checkbox']),isExpanded:_react.PropTypes.bool,minWidth:_react.PropTypes.string,// will be overrided if isExpanded is true
name:_react.PropTypes.string.isRequired,buttons:_react.PropTypes.arrayOf(_react.PropTypes.shape({value:_react.PropTypes.oneOfType([_react.PropTypes.number,_react.PropTypes.string]),id:_react.PropTypes.string,// text is either an element or string
text:_react.PropTypes.oneOfType([_react.PropTypes.element,_react.PropTypes.arrayOf(_react2.default.PropTypes.node),_react2.default.PropTypes.node,_react.PropTypes.string]).isRequired,selected:_react.PropTypes.bool})).isRequired,onClick:_react.PropTypes.func,onChange:_react.PropTypes.func};ButtonsGroup.defaultProps={type:'button',isExpanded:true,minWidth:'10rem',onClick:function onClick(){},onChange:function onChange(){}};exports.default=ButtonsGroup;module.exports=exports['default'];
//# sourceMappingURL=index.js.map