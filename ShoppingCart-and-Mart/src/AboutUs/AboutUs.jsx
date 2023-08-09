import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./AboutUs.module.css";

export default function AboutUs() {
    return (
        <>
        <Header />
        <div className={styles.aboutUsComponent}>
            <div className={styles.introduction}>
                <h1 className={styles.aboutLux}>About Lux</h1>
                <p>Welcome to Lux, the epitome of elegance and style. Since our inception in 2000, Lux has been the hallmark of timeless beauty, crafting a world that transcends ordinary definitions of fashion. We are not just a brand; we are a lifestyle, a statement, a legacy.</p>    
            </div>

            <div className={styles.essence}>
                <h2 className={styles.headingtwo}>Our Essence</h2>
                <p>At Lux, we believe that luxury is not just about the price tag; it&apos;s about the experience, the craftsmanship, and the memories we help create. We specialize in exclusive jewelry and clothing lines that embody the ultimate sophistication. Our collections are a blend of traditional elegance and modern innovation, designed to grace the lives of those who appreciate the finer things.</p>
            </div>
            
            <div className={styles.creation}>
                <h2 className={styles.headingtwo}>Our Creations</h2>
                <div className={styles.wrapperCreation}>
                    <div>
                        <h3>Jewelry:</h3>
                        <p>Our jewelry line is a perfect amalgamation of art, creativity, and opulence. Designed by world-renowned artists, each piece is an exquisite expression of love, passion, and uniqueness. From dazzling diamonds to precious gemstones, our jewelry is a celebration of individuality, crafted to perfection.</p>
                    </div>
                    <div>
                        <h3>Clothing:</h3>
                        <p>Lux&apos;s clothing range reflects a commitment to elegance, style, and perfection. We offer an exclusive range of haute couture, tailor-made to suit your taste. The materials, designs, and attention to detail showcase our dedication to excellence, creating pieces that are not just clothes but art.</p>
                    </div>
                </div>
            </div>

            <div className={styles.ethics}>
                <h2 className={styles.headingtwo}>Sustainability and Ethics</h2>
                <p>Lux is dedicated to responsible sourcing and sustainability. We ensure that all our materials are ethically sourced, and we are committed to supporting responsible mining and manufacturing practices. Our dedication to social and environmental responsibility is not a trend but a reflection of our enduring values.</p>
            </div>

            <div className={styles.stores}>
                <h2 className={styles.headingtwo}>Our Stores</h2>
                <p>With flagship stores in Paris, New York, Milan, and other major cities around the world, Lux offers an unparalleled shopping experience. Our in-store experts are devoted to providing a personalized shopping experience, ensuring that each visit is memorable.</p>
            </div>

            <div className={styles.experience}>
                <h2 className={styles.headingtwo}>Join the Lux Experience</h2>
                <p>At Lux, we invite you to discover a world where luxury meets art. A place where every piece tells a story, every design is a masterpiece, and every purchase is a lifelong memory. Join us in our journey and experience the ultimate sophistication that is uniquely Lux.</p>
            </div>

            <p className={styles.tagline}><strong>Lux – A Legacy of Elegance. A Symphony of Style.</strong></p>
        </div>
        <Footer />
        </>
    )
}
