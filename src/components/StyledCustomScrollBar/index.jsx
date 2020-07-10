import React from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';

const StyledCustomScrollBar = ({ children, color, ...props }) => {
  const styledThumb = (style, ...props) => {
    const thumbStyle = {
      width: 4,
      opacity: 0.4,
      borderRadius: 5,
      backgroundColor: color,
    };

    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  return (
    <Scrollbars
      renderThumbVertical={styledThumb}
      autoHide
      autoHideTimeout={1000}
      autoHideDuration={400}
      {...props}
    >
      {children}
    </Scrollbars>
  );
};

StyledCustomScrollBar.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

StyledCustomScrollBar.defaultProps = {
  color: '#3a3a3a',
};

export default StyledCustomScrollBar;
