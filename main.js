import { inject } from '@vercel/analytics';
inject();

// Sticky Navbar
const navbar = document.getElementById('navbar');

const handleScroll = () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
};

const revealOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

revealElements.forEach(el => {
  revealObserver.observe(el);
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  
  question.addEventListener('click', () => {
    // Close other items
    faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });
    
    // Toggle current item
    item.classList.toggle('active');
  });
});

// Contact Form Handler
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const business = document.getElementById('business').value;
    const phone = document.getElementById('phone').value;
    const req = document.getElementById('req').value;
    
    // Construct WhatsApp message
    const message = `Hello Arise Agency! I would like to request a Free Demo.\n\n*Name:* ${name}\n*Business Type:* ${business}\n*Phone:* ${phone}\n*Requirement:* ${req}`;
    
    // WhatsApp number
    const whatsappNumber = '919025488266';
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Open in new tab
    window.open(whatsappUrl, '_blank');
    
    // Optional: reset form
    // contactForm.reset();
  });
}
