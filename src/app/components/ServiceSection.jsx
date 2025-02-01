import styles from './ServiceSection.module.css';

const ServiceSection = () => {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className={styles.serviceCards}>
        <div className={styles.serviceCard}>Service 1</div>
        <div className={styles.serviceCard}>Service 2</div>
        <div className={styles.serviceCard}>Service 3</div>
      </div>
    </section>
  );
};

export default ServiceSection;
