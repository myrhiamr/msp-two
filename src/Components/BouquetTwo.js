
import bouquetTwo from '../images/bouquet-two.jpeg'; 

function BouquetTwo() {
  return (
    <div>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
        <h2>Fresh Spring Bouquet</h2>
        <img src={bouquetTwo} alt="Bouquet One" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
        <p>With a wide verity of flowers, our spring boquet makes the perfect gift for a love one</p>
        <button style={{ padding: '10px 20px', backgroundColor: '#6F4E37', color: '#FFFDF9', border: 'none', cursor: 'pointer', marginBottom: '20px' }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default BouquetTwo;
