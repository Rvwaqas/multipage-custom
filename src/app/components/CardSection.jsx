import a1 from '../image/a1.png';
import b2 from '../image/b2.png';
import c3 from '../image/c3.png';
import Image from 'next/image';
const CardSection = () => {
  return (
    <section className="cards">
      <h2>Our Cards</h2>
      <div className="card-container">
        <div className="card">
        <Image src={b2} alt="Card 3 " width={300} height={200} />
          <h3>Sofa</h3>
          <p>This is comfortable Sofa.</p>
        </div>
        <div className="card">
        <Image src={c3} alt="Card 3 " width={300} height={200} />
          <h3>Table</h3>
          <p>This is comfortable Table.</p>
        </div>
        <div className="card">
          <Image src={a1} alt="Card 3 " width={300} height={200} />
          <h3>Chair</h3>
          <p>This is comfortable Chair.</p>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
