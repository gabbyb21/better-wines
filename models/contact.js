const Contact = {
  name: 'Better Wines',
  address: '357 Your Street, you Know, RightHere',
  phoneNumber: '123-456-7899',
  socialMedia: {
    instagram: {
      link: 'https://www.instagram.com/betterwines',
      photo: 'images/instagram.jpg'
    },
    linkedin: {
      link: 'https://www.linkedin.com/betterwines',
      photo: 'images/linkedin.jpg'
    },
    twitter: {
      link: 'https://www.twitter.com/betterwines',
      photo: 'images/twitter.jpg'
    }
  }
};

module.exports = {
  getContact
};

function getContact() {
  return Contact;
}
