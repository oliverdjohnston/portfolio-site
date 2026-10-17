'use client';

import * as React from 'react';

import Image from 'next/image';

import { cn } from '@/lib/utils';

interface AvatarContentProps {
  src?: string;
  initials?: string;
  alt?: string;
  preload?: boolean;
}

function AvatarContent({ src, initials, alt, preload }: AvatarContentProps) {
  const [imageError, setImageError] = React.useState(false);
  const hasImage = src && !imageError;

  if (hasImage) {
    return (
      <Image
        src={src}
        alt={alt || 'Avatar'}
        fill
        preload={preload}
        sizes="112px"
        className="object-cover"
        onError={() => setImageError(true)}
      />
    );
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
  preload?: boolean;
}

const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  ({ src, square = false, initials, size, alt, preload, className, ...props }, ref) => {
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
        <AvatarContent src={src} initials={initials} alt={alt} preload={preload} />
      </span>
    );
  }
);
Avatar.displayName = 'Avatar';

export { Avatar };
