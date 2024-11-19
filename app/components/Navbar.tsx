import Link from 'next/link';
import ThemeController from './ThemeController';
import defaultValues from '@/app/configs/defaults';

const companyName = defaultValues.companyName;
const companyNameURL = '/';
const menu = {
  item1: 'About',
  item1URL: '/about',
  item2: 'Contact',
  item2URL: '/contact',
  itemParent1: 'Services',
  itemParent1URL: '/services',
  itemChild1: 'Bakery',
  itemChild1URL: '/services/#bakery',
  itemChild2: 'Drinks',
  itemChild2URL: '/services/#drinks',
  itemButton1: 'Order Here',
  itemButton1URL: '/order'

};

export default function Navbar() {
  return (
    <>
      <nav className="sticky top-0">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link href={menu.item1URL}>{menu.item1}</Link>
                </li>
                <li>
                  <Link href={menu.itemParent1URL}>{menu.itemParent1}</Link>
                  <ul className="p-2">
                    <li>
                      <Link href={menu.itemChild1URL}>{menu.itemChild1}</Link>
                    </li>
                    <li>
                      <Link href={menu.itemChild2URL}>{menu.itemChild2}</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href={menu.item2URL}>{menu.item2}</Link>
                </li>
              </ul>
            </div>
            <Link href={companyNameURL} className="btn btn-ghost text-xl">{companyName}</Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href={menu.item1URL}>{menu.item1}</Link>
              </li>
              <li>
                <details>
                  <summary>
                    <Link href={menu.itemParent1URL}>{menu.itemParent1}</Link>
                  </summary>
                  <ul className="p-2">
                    <li>
                      <Link href={menu.itemChild1URL}>{menu.itemChild1}</Link>
                    </li>
                    <li>
                      <Link href={menu.itemChild2URL}>{menu.itemChild2}</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href={menu.item2URL}>{menu.item2}</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <Link className="btn btn-primary mr-3 " href={menu.itemButton1URL}>
              {menu.itemButton1}
            </Link>
            <ThemeController />
          </div>
        </div>
      </nav>
    </>
  );
}