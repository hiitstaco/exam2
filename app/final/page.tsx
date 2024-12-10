
export default function Page() {
  return (
    <>
        <div className="divider divider-secondary"></div>
        <h1 className="text-4xl p-2 py-1 mb-3 text-center bg-secondary">Place Final Order </h1>
            <form>
                <label className="m-2" htmlFor="name">Name</label>
                <input type="text" name="name" id="name" className="bg-secondary m-1"/>
                
                <br />
                
                <label className="m-2" htmlFor="phone">Phone Number</label>
                <input type="tel" name="phone" id="phone" className="bg-secondary m-1"/>
                
                <br />

                <label className="m-2" htmlFor="description">Order Details</label>
                <input type="text" name="name" id="name" className="bg-secondary m-1"/>
              
                <br />
              
                <button type="submit" className="btn btn-secondary p">Place Order</button>
            </form>
        <div className="divider divider-secondary"></div>
    </>
  );
}
