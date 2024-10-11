import { ElementType, MouseEventHandler, ReactNode } from 'react';
import PropTypes from 'prop-types';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  as?: 'button' | 'Link';
  color?: string;
  full?: boolean;
  variant?: 'primary' | 'secondary' | 'dark';
  disabled?: boolean;
  loading?: boolean;
  icon?: ElementType;
  children?: ReactNode;
  id?: string;
  onClick?: MouseEventHandler;
  className: string;
  outline?: 'black';
}

export default function Button({
  type = 'button',
  variant = 'primary',
  full,
  children = null,
  className = '',
  outline = 'black',
  onClick,
  ...restProps
}: ButtonProps) {
  return (
    <button
      {...restProps}
      type={type}
      className={`
        ${className}
        btn-container
        ${full ? 'btn-full' : ''}
        ${variant === 'primary' ? 'btn-primary' : variant === 'secondary' ? 'btn-secondary' : 'btn-dark'}
        ${outline === 'black' ? 'black-outline' : ''}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.string,
  outline: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.string,
  size: PropTypes.string,
};
