import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold text-white mb-4">Page Not Found</h1>
      <p className="text-gray-400 max-w-xl mb-6">
        The Legion Remix guide you were looking for has been repocketed by the Bronze Dragons. Double-check
        the URL or jump back to the hub to continue your Timerunner prep.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors"
      >
        Return to Legion Remix Guide Hub
      </Link>
    </div>
  );
}
