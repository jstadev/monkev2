/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import {
	BlogDropdownMenus,
	ContactDropdownMenus,
	DemoDropdownMenus,
	ElementsMegaMenu,
	PagesDropdownMenus,
} from "../navbar/menu-data";
import NavItem from "../navbar/nav-item";
import Navbar from "../navbar/navbar";
import useScroll from "./../../../hooks/useScroll";

export default function HeaderHomeThree() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const handleCloseMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	const scroll = useScroll();
	return (
		<header
			className={`site-header site-header--menu-right monke--header-section monke--header-three ${
				scroll ? "sticky-menu" : ""
			}`}
			id="sticky-menu"
		>
			<div className="container-fluid">
				<nav className="navbar site-navbar">
					<div className="brand-logo">
						<Link href={"/"}>
							<img src="/images/logo/logowhite.png" alt="" className="light-version-logo" />
						</Link>
					</div>
					<div className="menu-block-wrapper">
						<div
							className={`menu-overlay ${isMobileMenuOpen ? "active" : null}`}
							onClick={handleCloseMobileMenu}
						></div>
						<nav className={`menu-block ${isMobileMenuOpen ? "active" : null}`} id="append-menu-header">
							<div className="mobile-menu-head">
								<div className="mobile-menu-close" onClick={handleCloseMobileMenu}>
									&times;
								</div>
							</div>

							<Navbar>
								
								<Link href="/index-three">
								<NavItem navItemText="Home" />
									</Link>
								<Link href="/blog-dark">
								<NavItem navItemText="Collection" />
									</Link>
									{/* <Link href="/#story">
								<NavItem navItemText="Story" />
									</Link> */}
									{/* <NavItem navItemText="Demo" menuItems={DemoDropdownMenus} />
								<NavItem navItemText="Pages" menuItems={PagesDropdownMenus}/>
								<NavItem navItemText="Elements" menuItems={ElementsMegaMenu} megaMenu />
								<NavItem navItemText="Blog" menuItems={BlogDropdownMenus} />
								<NavItem navItemText="Contact Us" menuItems={ContactDropdownMenus} /> */}
							</Navbar>
						</nav>
					</div>
					<div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
						<a className="monke--btn monke--menu-btn1" href="contact.html">
							Join The Jungle
						</a>
					</div>
					<div className="mobile-menu-trigger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
						<span></span>
					</div>
				</nav>
			</div>
		</header>
	);
}
