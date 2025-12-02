'use client';

import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface AvatarContentProps {
  src?: string;
  initials?: string;
  alt?: string;
}

function AvatarContent({ src, initials, alt }: AvatarContentProps) {
  const [imageError, setImageError] = React.useState(false);
  const hasImage = src && !imageError;

  if (hasImage) {
    return <Image src={src} alt={alt || 'Avatar'} fill className="object-cover" onError={() => setImageError(true)} />;
  }

  if (initials) {
    return <span className="text-foreground text-sm font-semibold">{initials}</span>;
  }

  return <span className="text-muted-foreground text-sm font-semibold">?</span>;
}

interface AvatarProps extends React.ComponentProps<'span'> {
  src?: string;
  square?: boolean;
  initials?: string;
  size?: number;
  alt?: string;
}

const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  ({ src, square = false, initials, size, alt, className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'bg-muted-background dark:bg-muted relative flex items-center justify-center overflow-hidden border',
          square ? 'rounded-md' : 'rounded-full',
          className
        )}
        style={size ? { width: size, height: size } : undefined}
        {...props}
      >
        <AvatarContent src={src} initials={initials} alt={alt} />
      </span>
    );
  }
);
Avatar.displayName = 'Avatar';

export { Avatar };
