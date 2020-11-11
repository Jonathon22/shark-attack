import PropTypes from 'prop-types';

const studentShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  imgUrl: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  isDead: PropTypes.boolean.isRequired,
});

export default studentShape;
