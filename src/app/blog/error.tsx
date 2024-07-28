"use client";

const ErrorWrapper = ({ error }: { error: Error }) => {
  return <div>{error.message}</div>;
};

export default ErrorWrapper;
