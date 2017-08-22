import React from 'react';

class ScrollToTop extends React.Component {
  componentDidMount(prevProps) {
    window.scrollTo(0, 0);
  }
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) window.scrollTo(0, 0);
  }
  render() {
    return this.props.children
  }
}

export default ScrollToTop;
