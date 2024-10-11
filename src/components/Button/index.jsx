import PropTypes from 'prop-types'
import { ConteinerButton } from './styles';


export function Button({ children,...props}) {
  console.log(children);
  return <ConteinerButton {...props}> {children}</ConteinerButton>;
}

Button.propTypes = {
  children: PropTypes.string,
};