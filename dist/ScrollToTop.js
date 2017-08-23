import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import React from 'react';

var ScrollToTop = function (_React$Component) {
  _inherits(ScrollToTop, _React$Component);

  function ScrollToTop() {
    _classCallCheck(this, ScrollToTop);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  ScrollToTop.prototype.componentDidMount = function componentDidMount(prevProps) {
    window.scrollTo(0, 0);
  };

  ScrollToTop.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) window.scrollTo(0, 0);
  };

  ScrollToTop.prototype.render = function render() {
    return this.props.children;
  };

  return ScrollToTop;
}(React.Component);

export default ScrollToTop;