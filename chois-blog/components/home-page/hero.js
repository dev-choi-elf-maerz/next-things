import Image from 'next/image';

import classes from './hero.module.css';

export default function Hero() {
    return (
        <>
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/max.png" alt="An image showing Choi" width={300} height={300} />
            </div>
            <h1>
                Hallo, Ich Bin Choi
            </h1>
            <p>
            Ich blogge über Webentwicklung – insbesondere Frontend-Frameworks wie Angular oder React.
            </p>
        </section>
        </>
    );
}