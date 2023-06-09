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

/* eslint-disable @next/next/no-img-element */
export default function HeaderHomeOne() {

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const handleCloseMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	const scroll = useScroll();

	return (
		<header
			className={`site-header site-header--menu-right monke-header-section ${scroll ? "sticky-menu" : ""}`}
			id="sticky-menu"
		>
			<div className="container-fluid">
				<nav className="navbar site-navbar">
					<div className="brand-logo">
						<Link href={"/"}>
							<img src="/images/logo/logowhite.png" alt="logo" className="light-version-logo" />
						</Link>
					</div>
					<div className="menu-block-wrapper">
						<div
							className={`menu-overlay ${isMobileMenuOpen ? "active" : ""}`}
							onClick={handleCloseMobileMenu}
						></div>
						<nav className={`menu-block ${isMobileMenuOpen ? "active" : null}`} id="append-menu-header">
							<div className="mobile-menu-head">
								<div className="mobile-menu-close" onClick={handleCloseMobileMenu}>
									&times;
								</div>
							</div>

							<Navbar>
								<Link className="nav-links" href={"/"}>
									Home

								</Link>
								<Link className="nav-links" href={"/blog-dark"}>
									Collection

								</Link>

								{/* <NavItem navItemText="Demo" menuItems={DemoDropdownMenus} />
								<NavItem navItemText="Collection" menuItems={PagesDropdownMenus} />
								<NavItem navItemText="Elements" menuItems={ElementsMegaMenu} megaMenu />
								<NavItem navItemText="Blog" menuItems={BlogDropdownMenus} />
								<NavItem navItemText="Contact Us" menuItems={ContactDropdownMenus} /> */}
							</Navbar>
						</nav>
					</div>
					{/* <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
						<a className="monke-btn monke-header-btn" href="contact.html">
							Get Started
						</a>
					</div> */}
					<div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">


						<a className="monke--btn monke--menu-btn1" href="https://t.me/MonkeysNFT69">
							Join The Jungle
						</a>

						<Link href={"https://twitter.com/_MonkeysNFT"}>
							<img className="twit-icon" src="/images/social2/twitter.svg" alt="" />
						</Link>
					</div>
					<div className="mobile-menu-trigger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
						<span></span>
					</div>
				</nav>
			</div>
		</header>
	);
}
