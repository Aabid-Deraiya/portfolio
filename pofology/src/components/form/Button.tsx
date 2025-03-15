import classNames from 'classnames';
import React from 'react';

interface Props {
  type?: 'button' | 'submit';
  className?: string;
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.FormEvent) => void;
}

const Button: React.FC<Props> = ({ type = 'submit', children, className, href, onClick }) => {
  return href ? (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={classNames(['btn', className])}
      onClick={onClick}
    >
      {children}
    </a>
  ) : (
    <button 
      type={type} 
      className={classNames(['btn', className])} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};


export default Button;