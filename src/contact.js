const content = document.getElementById('content');

function loadContact() {
  content.innerHTML = '';
  const contactHeader = document.createElement('H2');
  contactHeader.innerHTML = 'CONTACT US';
  const faq = document.createElement('P');
  faq.innerHTML = `For General Inquiries, please review our
    Frequently Asked Questions (FAQ).`;
  const byPhone = document.createElement('P');
  byPhone.innerHTML = `Have a concern, comment or compliment from a
  recent Simple Restaurant experience? We wouldd like to hear from you.
  By phone: +254 123 456
  If you would like to be contacted, email to:simplerestaurant@email.com`;
  content.appendChild(contactHeader)
    .appendChild(faq)
    .appendChild(byPhone);
}
export default loadContact;