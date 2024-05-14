import React from 'react';

function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: '#FFFDF9' }}>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4">
            <h5 className="mb-3" style={{ letterSpacing: '2px', color: '#6F4E37' }}>Elizabeth Flower & Co.</h5>
            <p style={{color: '#6F4E37'}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
              molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
              voluptatem veniam, est atque cumque eum delectus sint!
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="mb-3" style={{ letterSpacing: '2px', color: '#6F4E37' }}>links</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-1">
                <a href="#!" style={{ color: '#6F4E37' }}>Frequently Asked Questions</a>
              </li>
              <li className="mb-1">
                <a href="#!" style={{ color: '#6F4E37' }}>Delivery</a>
              </li>
              <li className="mb-1">
                <a href="#!" style={{ color: '#6F4E37' }}>Pricing</a>
              </li>
              <li>
                <a href="#!" style={{ color: '#6F4E37' }}>Where we deliver?</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="mb-1" style={{ letterSpacing: '2px', color: '#6F4E37' }}>opening hours</h5>
            <table className="table" style={{ color: '#FFFDF9', borderColor: '#FFFDF9' }}>
              <tbody>
                <tr>
                  <td style={{ color: '#6F4E37' }}>Mon - Fri:</td>
                  <td style={{ color: '#6F4E37' }}>8am - 9pm</td>
                </tr>
                <tr>
                  <td style={{ color: '#6F4E37' }}>Sat - Sun:</td>
                  <td style={{ color: '#6F4E37' }}>8am - 1am</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: '#FFFDF9', color: '#6F4E37' }}>
        © {new Date().getFullYear()} Copyright:
        <a className="text-dark" style={{ color: '#6F4E37' }} href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
      {/* Copyright */}
    </footer>
  );
}

export default Footer;
