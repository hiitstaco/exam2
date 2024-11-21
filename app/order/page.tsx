import { Metadata } from 'next';
import MainHeading from '../components/MainHeading';
import SubHeading from '../components/SubHeading';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Order',
};

export default function Page() {
  return (
    <>
      <main className="flex flex-col items-center justify-center h-screen">
        <MainHeading> Place Orders Here : </MainHeading>
                
        <br/>

        <label
          className="input input-bordered flex items-center gap-2"
          style={{ width: '500px', display: 'flex', alignItems: 'center' }}
        >
          Name
          <input type="text" className="grow" placeholder="Your Name" />
        </label>
                
        <br/>

        <label
          className="input input-bordered flex items-center gap-2"
          style={{ width: '500px', display: 'flex', alignItems: 'center' }}
        >
          Email
          <input type="text" className="grow" placeholder="email@site.com" />
        </label>
                
        <br/>

        <label
          className="input input-bordered flex items-center gap-2"
          style={{ width: '500px', display: 'flex', alignItems: 'center' }}
        >
          Phone Number
          <input type="text" className="grow" placeholder="Phone Number" />
        </label>
                
        <br/>

        <textarea
          className="textarea textarea-bordered flex items-center gap-2"
          placeholder="Order Description..."
          style={{ width: '500px', display: 'flex', alignItems: 'center' }}
        >
        </textarea>
        
        <br/>
        <Link href='/' passHref>
        <button className="btn btn-primary p">Place Order</button>
        </Link>
        <br />

        
        
        <div className="divider divider-primary"></div>

      </main>
    </>
  );
}
