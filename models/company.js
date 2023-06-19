const company = {
    description: 'We are a wine company bringing you the most tasteful wines with robust flavors that cause excitement in every sip.',
    history: 'Our company has a rich history in the wine industry, spanning several decades. We started as a small family-owned vineyard and have grown into a renowned wine producer with a commitment to quality and excellence.',
    employees: [
      {
        name: 'Prince Akachi',
        jobTitle: 'CEO',
        jobDescription: 'Responsible for overall company strategy and decision-making.',
        email: 'CEO@google.com',
        phoneNumber: '12345678',
        img: 'images/princeakachi.jpg'
      },
      {
        name: 'Jack Finnigan',
        jobTitle: 'Manager',
        jobDescription: 'Reports to Prince.',
        email: 'jack@google.com',
        phoneNumber: '12345678',
        img: 'images/jackfinnigan.jpg'
      },
      {
        name: 'Nick Karvounis',
        jobTitle: 'HR Representative',
        jobDescription: 'Handles customer inquiries.',
        email: 'Nick@google.com',
        phoneNumber: '12345678',
        img: 'images/nickkarvounis.jpg'
      }
    ]
  };
  
  function getCompany() {
    return company;
  }
  
  module.exports = {
    getCompany
  };
  
  

