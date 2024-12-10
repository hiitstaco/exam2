import { Metadata } from 'next';
import MainHeading from '../components/MainHeading';
import SubHeading from '../components/SubHeading';
export const metadata: Metadata = {
  title: 'Contact'
};

export default function Page() {
  return (
    <>
      <main>
       <MainHeading> Contact Us </MainHeading>
       <p>Call Us:</p>
       <p> Need immediate assistance? Give us a call at (123) 456-7890.</p>
       <br />
       <p>Email Us:</p>
       <p>For direct inquiries, you can also reach us at support@bakerybyaamira.com.</p>
       <br />
       <p>Visit Us:</p>
       <p>Our office is located at:</p>
       <p>1234 Main St,</p>
       <p>New York, NY 10001</p>
       <br />
       <p>Follow Us on Social Media:</p>
       <p>Stay connected!</p>
       <br />
       <p>FAQs:</p>
       <p>Before reaching out, check out our Services Tab for answers as to what we serve.</p>
       <br />
       <p>Response Time:</p>
       <p>We typically respond within 24-48 hours. Thank you for your patience!</p>
       <br />
       <p>We look forward to connecting with you!</p>
       <br />
       <div className="divider divider-primary"></div>
      </main>
    </>
  );
}
