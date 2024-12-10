import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <main className="grid min-h-full place-items-center bg-base-100 px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center"></div>
      <p className="text-base font-semibold text-secondary">404</p>
      <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-secondary sm:text-7xl">Page not found</h1>
      <p className="mt-6 text-pretty text-lg font-medium text-secondary sm:text-xl/8">Sorry, we could not find the page you are looking for.</p>
      <div className="mt-10 flex items-center justify-center gap-x-6"></div>
      <a href="/" className="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">Go back home</a>
      </main>
    </div>
  );
}