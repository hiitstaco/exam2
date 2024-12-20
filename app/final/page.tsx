import SubHeading from "../components/SubHeading";

const bakeryItems = [
  { id: "bread", label: "Artisan Bread" },
  { id: "pastry", label: "Flaky Pastry" },
  { id: "cake", label: "Decadent Cake" },
  { id: "cookie", label: "Cookie" },
];

const flavors = [
  "Seasonal Flavor",
  "Vanilla",
  "Chocolate",
  "Strawberry",
  "Mocha",
  "Marshmallow",
  "Funfetti",
  "Peanut Butter",
  "Plain",
];

export default function Page() {
  return (
    <>
      <div className="divider divider-primary"></div>
      <h1 className="text-4xl p-2 py-1 mb-3 text-center bg-secondary ">Special Order Form</h1>
      <form>
        <div className="grid grid-cols-3 items-center">
          <label className="m-1 text-right" htmlFor="name">Full Name</label>
          <input type="text" name="name" id="name" className="bg-secondary italic m-1" required /><br />
        </div>

        <div className="grid grid-cols-3 items-center">          
          <label className="m-1 text-right" htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="000-000-0000"className="bg-secondary m-1 italic placeholder-neutral-500" required /><br />
        </div>

        <div className="grid grid-cols-3 items-center">
          <label className="m-1 text-right" htmlFor="email">Email</label>
          <input type="email" id="email" name="email" className="bg-secondary italic placeholder-neutral-500" placeholder="email@domain.com" required /><br />
        </div>

        <div className="grid grid-cols-3 items-center">
          <label className="m-1 text-right" htmlFor="theme">Occasion/Theme</label>
          <input type="text" name="theme" id="theme" className="bg-secondary italic m-1 placeholder-neutral-500" placeholder="Birthday, Retro, etc." required /><br />
        </div>

        <div className="grid grid-cols-3 items-center">
          <label className="m-1 text-right" htmlFor="date">Pick Up Date</label>
          <input type="date" name="date" id="date" className="bg-secondary italic m-1" required /><br />
        </div>
        
        <div className="mt-4">
          <table className="table-auto w-full border-collapse border border-secondary">
            <thead>
              <tr className="bg-primary italic">
                <th className="border border-dotted border-4 border-accent p-2 italic">Bakery Items</th>
                <th className="border border-dotted border-4 border-accent p-2 italic">Flavor</th>
                <th className="border border-dotted border-4 border-accent p-2 italic">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 3 }).map((_, index) => (
                <tr key={index}>
                  
                  <td className="border border-dotted border-4 border-accent p-2 italic text-center">
                    {bakeryItems.map((item) => (
                      <div key={item.id} className="flex items-center italic justify-center">
                        <input type="checkbox" id={`bakery-${index}-${item.id}`} name={`bakery-${index}`} value={item.id} />
                        <label htmlFor={`bakery-${index}-${item.id}`} className="ml-2">{item.label}</label>
                      </div>
                    ))}
                  </td>

                  <td className="border border-dotted border-4 border-accent p-2 italic text-center">
                    <select name={`flavor-${index}`} id={`flavor-${index}`} className="bg-secondary w-full">
                      <option value="">Select a flavor</option>
                      {flavors.map((flavor, i) => (
                        <option key={i} value={flavor}>{flavor}</option>
                      ))}
                    </select>
                  </td>

                  <td className="border border-dotted border-4 border-accent p-2 italic text-center">
                    <input type="number" name={`quantity-${index}`} id={`quantity-${index}`} min="1" max="99" className="bg-secondary w-full text-center" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <label className="p-3" htmlFor="note">Requests</label>
        <input type="text" name="note" id="note" className="bg-secondary m-1 italic w-full placeholder-neutral-500" placeholder="Special Instructions, Allergies, Dietary Ristrictions etc. "/><br />

        <div className="flex justify-center mt-4">
          <button type="submit" className="btn btn-secondary p">Place Order</button>
        </div>

        <SubHeading> Rate Our Service! </SubHeading>
        <div className="rating gap-3 ml-5">
          <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
          <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" />
          <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" defaultChecked />
          <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
          <input type="radio" name="rating-3" className="mask mask-heart bg-teal-400" />
        </div>

        <div className="divider divider-secondary"></div>
      </form>
    </>
  );
}
