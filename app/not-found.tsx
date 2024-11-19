import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <div className="divider divider-primary"></div>
      <h2>Page Not Found</h2>
      <br />
      <Link className='btn btn-primary' href="/">Click here to Return Home</Link>
      
      <div className="divider divider-primary"></div>
      
    </div>
  );
}