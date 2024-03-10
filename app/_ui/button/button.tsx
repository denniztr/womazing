'use client';

import { Button } from '@material-tailwind/react';

interface PrimaryButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'filled' | 'outlined' | 'gradient' | 'text';
  size?: 'sm' | 'md' | 'lg';
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  variant,
  size,
  className,
}) => {
  return (
    <Button className={className} variant={variant} size={size}>
      {children}
    </Button>
  );
};

export default PrimaryButton;
