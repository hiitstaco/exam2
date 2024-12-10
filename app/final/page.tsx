import SubHeading from "../components/SubHeading";

export default function Page() {
  return (
    <>
      <div className="divider divider-primary"></div>
        <h1 className="text-4xl p-2 py-1 mb-3 text-center bg-primary">Place Final Order </h1>
          <form>
            <label className="m-2" htmlFor="name">Name</label>
            <input type="text" name="name" id="name" className="bg-secondary m-1"/>
                
            <br />
                
            <label className="m-2" htmlFor="email">Email Address</label>
            <input type="text" id="email" name="email" className="bg-secondary m-1"/>
             
            <br />

            <label className="m-2" htmlFor="description">Order Details</label>
            <input type="text" name="description" id="description" className="bg-secondary m-1"/>
              
            <br />
              
            <button type="submit" className="btn btn-secondary p">Place Order</button>
          </form>
          <br />
          <SubHeading> Rate Our Service! </SubHeading>
            <div className="rating gap-1 ml-5">
              <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" defaultChecked />
              <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" />
              <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
              <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
              <input type="radio" name="rating-3" className="mask mask-heart bg-teal-400" />
            </div>
          <br />
        <div className="divider divider-secondary"></div>
    </>
  );
}
