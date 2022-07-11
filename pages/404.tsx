import { Head } from "next/document";
import styles from "/styles/404.module.scss";

export default function Custom404() {
    return (
        <>
            <Head>
                <title>Error 404</title>
            </Head>

            <main className={ styles.main }>
                <h1 className={ styles.errorMsg }>Error 404 | Not Found</h1>
            </main>
        </>
    );
}