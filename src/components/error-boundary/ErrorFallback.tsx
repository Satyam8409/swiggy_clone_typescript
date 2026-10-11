import type { FallbackProps } from "react-error-boundary";

export const ErrorFallback = ({
  error,
  resetErrorBoundary,
}: FallbackProps) => {
  const errMsg =
    error instanceof Error
      ? error.message
      : "An unexpected error occurred.";

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 via-white to-red-50 px-4 py-10">
      <div className="w-full max-w-lg rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-xl sm:p-10">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v4m0 4h.01M10.3 3.86 1.82 18.5A2 2 0 0 0 3.55 21h16.9a2 2 0 0 0 1.73-2.5L13.7 3.86a2 2 0 0 0-3.4 0Z"
            />
          </svg>
        </div>

        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
          Something went wrong
        </p>

        <h1 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Oops! We hit a snag.
        </h1>

        <p className="mx-auto mb-6 max-w-sm text-sm leading-6 text-gray-500">
          Something unexpected happened while loading this page. Please try
          again.
        </p>

        <details className="mb-7 rounded-xl border border-gray-200 bg-gray-50 text-left">
          <summary className="cursor-pointer px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900">
            View error details
          </summary>
          <pre className="overflow-x-auto whitespace-pre-wrap wrap-break-word border-t border-gray-200 px-4 py-3 text-xs leading-5 text-red-600">
            {errMsg}
          </pre>
        </details>

        <button
          onClick={resetErrorBoundary}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 active:translate-y-0 sm:w-auto sm:min-w-48"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 4v5h5M5.5 15a7 7 0 1 0 .5-7L4 9"
            />
          </svg>
          Try again
        </button>

        <p className="mt-6 text-xs text-gray-400">
          If the problem persists, please try again later.
        </p>
      </div>
    </div>
  );
};