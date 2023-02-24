import PropTypes from 'prop-types';
import { NotificationInfo } from './Notification.styled';

export const Notification = ({ message }) => {
  return (
    <NotificationInfo>{message}</NotificationInfo>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
