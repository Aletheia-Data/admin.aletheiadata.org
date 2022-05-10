import styled from 'styled-components';
import PropTypes from 'prop-types';

import Logo from '../../../assets/images/logo.svg';

const Wrapper = styled.div`
  padding-left: 2rem;
  height: ${props => props.theme.main.sizes.leftMenu.height};
  background-color: #fafafb;

  .leftMenuHeaderLink {
    &:hover {
      text-decoration: none;
    }
  }

  .projectName {
    display: block;
    width: 100%;
    height: ${props => props.theme.main.sizes.leftMenu.height};
    font-size: 2rem;
    letter-spacing: 0.2rem;
    color: $white;

    background: url(${Logo});
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 140px;
  }
`;

Wrapper.defaultProps = {
  theme: {
    main: {
      colors: {
        leftMenu: {},
      },
      sizes: {
        header: {},
        leftMenu: {},
      },
    },
  },
};

Wrapper.propTypes = {
  theme: PropTypes.object,
};

export default Wrapper;
