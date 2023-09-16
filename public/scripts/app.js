"use strict";

console.log("App.js is Running!!");
var app = {
  title: "Indecision App",
  subTitle: "Put your decisions in the hand of the computer",
  options: []
};
var onRemoveAll = function onRemoveAll() {
  app.options = [];
  render();
};
var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};
var onMakeDesicion = function onMakeDesicion() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
};
var appRoot = document.getElementById('root');
var render = function render() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), app.subTitle && /*#__PURE__*/React.createElement("p", null, app.subTitle), /*#__PURE__*/React.createElement("p", null, app.options.length > 0 ? "Here are your options" : "No options"), /*#__PURE__*/React.createElement("button", {
    disabled: app.options.length == 0,
    onClick: onMakeDesicion
  }, "What should i do?"), /*#__PURE__*/React.createElement("button", {
    onClick: onRemoveAll
  }, "Remove All"), /*#__PURE__*/React.createElement("ol", null, app.options.map(function (o) {
    return /*#__PURE__*/React.createElement("li", {
      key: o
    }, o);
  })), /*#__PURE__*/React.createElement("form", {
    onSubmit: onFormSubmit
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "option"
  }), /*#__PURE__*/React.createElement("button", null, "Add Option")));
  ReactDOM.render(template, appRoot);
};
render();
