import React from 'react';
import './Pricing.css';

function Pricing() {
  const plans = [
    {
      name: 'Basic Move',
      price: '₹2,999',
      features: ['1 BHK moving', 'Basic packing', 'Local shift'],
      popular: false,
    },
    {
      name: 'Standard Move',
      price: '₹5,499',
      features: ['2 BHK moving', 'Secure packing', 'Within city', 'Live tracking'],
      popular: true,
    },
    {
      name: 'Premium Move',
      price: '₹9,999',
      features: ['3+ BHK moving', 'Full packing/unpacking', 'Insurance included', 'Intercity support'],
      popular: false,
    },
  ];

  return (
    <section className="pricing-section py-5 mt-5" id="pricing  ">
      <div className="container text-center">
        <h2 className="fw-bold mb-3" data-aos="fade-up">Our Pricing Plans</h2>
        <p className="text-muted mb-5" data-aos="fade-up" data-aos-delay="100">Flexible and transparent pricing to suit every move.</p>

        <div className="row justify-content-center g-4">
          {plans.map((plan, idx) => (
            <div className="col-md-6 col-lg-4" key={idx} data-aos="zoom-in" data-aos-delay={idx * 100}>
              <div className={`card pricing-card shadow-sm h-100 ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                <div className="card-body">
                  <h5 className="card-title fw-bold">{plan.name}</h5>
                  <h3 className="card-price">{plan.price}</h3>
                  <ul className="list-unstyled my-3">
                    {plan.features.map((f, i) => (
                      <li key={i} className="text-muted mb-2">✓ {f}</li>
                    ))}
                  </ul>
                  <a href="#" className="btn btn-primary w-100">Choose Plan</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
