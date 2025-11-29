"use client";
const FALLBACK = "/ken-mwangi.jpeg";

interface ProfileAvatarProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}
export default function ProfileAvatar({
  src,
  alt,
  size,
  className,
}: ProfileAvatarProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`rounded-full object-cover ${className}`}
      onError={(e) => {
        e.currentTarget.src = FALLBACK;
      }}
    />
  );
}
