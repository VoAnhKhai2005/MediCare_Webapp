import React from 'react';

// Spinner Loader
export const SpinnerLoader = ({ size = 'md', color = '#0067ff' }) => {
  const sizes = {
    sm: '24px',
    md: '40px',
    lg: '60px',
  };

  return (
    <div 
      className="loader-spinner" 
      style={{ 
        width: sizes[size], 
        height: sizes[size],
        display: 'inline-block'
      }}
    >
      <svg viewBox="0 0 50 50" style={{ animation: 'spinnerRotate 1.2s linear infinite' }}>
        <circle cx="25" cy="25" r="20" fill="none" stroke={color} strokeWidth="4" />
      </svg>
    </div>
  );
};

// Dots Loader
export const DotsLoader = ({ color = '#0067ff' }) => {
  return (
    <div className="loader-dots" style={{ color }}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

// Bars Loader
export const BarsLoader = ({ color = '#0067ff' }) => {
  return (
    <div className="loader-bars" style={{ color }}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

// Skeleton Card
export const SkeletonCard = ({ count = 3 }) => {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, idx) => (
        <div key={idx} className="skeleton-card p-4 rounded-lg">
          <div className="skeleton-avatar w-12 h-12 mb-3"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text w-5/6"></div>
          <div className="skeleton-text w-4/6"></div>
        </div>
      ))}
    </div>
  );
};

// Page Loading Screen
export const PageLoadingScreen = ({ message = 'Đang tải...' }) => {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="text-center">
        <SpinnerLoader size="lg" />
        <p className="mt-4 text-gray-600 font-medium text-lg">{message}</p>
      </div>
    </div>
  );
};

// Loading State Component
export const LoadingState = ({ variant = 'spinner', message = 'Đang tải...' }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      {variant === 'spinner' && <SpinnerLoader size="md" />}
      {variant === 'dots' && <DotsLoader />}
      {variant === 'bars' && <BarsLoader />}
      {message && <p className="mt-4 text-gray-600 font-medium">{message}</p>}
    </div>
  );
};

// Default Loading Component
const Loading = () => {
  return <div className='flex items-center justify-center w-full h-full'>
    <SpinnerLoader color='#0067FF' />
  </div>
}

export default Loading;