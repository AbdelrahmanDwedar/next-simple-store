import { NextComponentType, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from "react";
import styles from "/styles/layout/Header.module.scss";

export function Header(props: { title: string }) : ReactElement {
    return (
        <>
            <Head>
                <title>{props.title}</title>
            </Head>
            
            <header className={ styles.header }>
                <h3 className={ styles.title }>Shopier</h3>
                <nav className={ styles.nabar }>
                    <ul className={ styles.nav }>
                        <li className={ styles.navItem }>
                            <Link href={"/"} className={styles.active}>
                                Home
                            </Link>
                        </li>
                        <li className={ styles.navItem }>
                            <Link href={"/about"}>
                                About Us
                            </Link>
                        </li>
                        <li className={ styles.navItem }>
                            <Link href={"/Store"}>
                                Store
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;