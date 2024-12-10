import SubHeading from "../components/SubHeading";

export default function Page() {
  return (
    <>
      <div className="divider divider-primary"></div>
        <h1 className="text-4xl p-2 py-1 mb-3 text-center bg-primary">Place Final Order </h1>
          <form>
            <label className="m-1" htmlFor="name">Full Name</label>
            <input type="text" name="name" id="name" className="bg-secondary m-1"/><br />
                
            <label className="m-1" htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" className="bg-secondary m-1"/><br />

            <label htmlFor="flavor" className="mx-1">Choose a Flavor:</label>
            <select name="flavor" id="flavor" className="bg-secondary">
              <option></option>
              <option value="seasonal">Seasonal Flavor</option>
              <option value="vanilla">Vanilla</option>
              <option value="chocolate">Chocolate</option>
              <option value="strawberry">Strawberry</option>
              <option value="mocha">Mocha</option>
              <option value="marshmallow">Marshmallow</option>
              <option value="funfetti">Funfetti</option>
              <option value="peanut_butter">Peanut Butter</option>
              <option value="plain">Plain</option>
            </select><br />

            <label htmlFor="bakery" className="mx-1">Bakery Items:</label>
            <div></div>
            <input type="checkbox" id="bakery1" name="bakery1" value="bread" />
            <label htmlFor="bakery1" className="m-5">Artisan Bread</label><br />

            <input type="checkbox" id="bakery2" name="bakery2" value="pastry" />
            <label htmlFor="bakery2" className="m-5">Flaky Pastry</label><br />

            <input type="checkbox" id="bakery3" name="bakery3" value="cake" />
            <label htmlFor="bakery3" className="m-5">Decadent Cake</label><br />

            <input type="checkbox" id="bakery4" name="bakery4" value="cookie" />
            <label htmlFor="bakery4" className="m-5">Cookie</label><br />

            <label className="m-1" htmlFor="description">Order Details</label>
            <input type="text" name="description" id="description" className="bg-secondary m-1"/><br />
              
            <button type="submit" className="btn btn-secondary p">Place Order</button>
          </form><br />

          <SubHeading> Rate Our Service! </SubHeading>
          <div className="rating gap-1 ml-5">
            <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" defaultChecked />
            <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" />
            <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
            <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
            <input type="radio" name="rating-3" className="mask mask-heart bg-teal-400" />
          </div>

        <div className="divider divider-secondary"></div>
    </>
  );
}
