import Link from 'next/link';
import { DOWNLOAD_URL } from '@/lib/site';

interface DownloadButtonProps {
  className?: string;
  size?: 'small' | 'default' | 'large';
  label?: string;
  showIcon?: boolean;
  href?: string;
}

export default function DownloadButton({
  className = '',
  size = 'default',
  label = 'Download Teen Patti Spin',
  showIcon = true,
  href = DOWNLOAD_URL,
}: DownloadButtonProps) {
  const sizeClass =
    size === 'large' ? 'download-btn-lg' : size === 'small' ? 'download-btn-sm' : 'download-btn-md';
  const buttonClass = `download-btn ${sizeClass} group ${className}`;
  const isExternal = href.startsWith('http');

  const content = (
    <>
      <span>{label}</span>
      {showIcon && (
        <div className="download-icon" aria-hidden="true">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </div>
      )}
    </>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={buttonClass}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={buttonClass}>
      {content}
    </Link>
  );
}
