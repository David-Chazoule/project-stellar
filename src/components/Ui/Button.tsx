import React from 'react'

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
};

function Button({ children, onClick , disabled}: ButtonProps) {
  return (
    <button type="button" onClick={onClick} className="ui-button" disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;