let contacts = [
  {
    id: "1",
    name: "Michael Jordan",
    email: "michael.jordan@gmail.com",
    phone: "706-741-2822",
    thumbnail:
      "https://static01.nyt.com/images/2020/05/16/business/16JORDAN-01sub/16JORDAN-01sub-mediumSquareAt3X.jpg",
  },
];

const addContact = () => {
  const id = document.getElementById('addId').value
  const name = document.getElementById('addName').value
  const email = document.getElementById('addEmail').value
  const phone = document.getElementById('addPhone').value
  const thumbnail = document.getElementById('addThumbnail').value

  const newContact = {
    id,
    name,
    email,
    phone,
    thumbnail
  }

  clearContacts()
  contacts.push(newContact)
  refreshContacts()

  document.getElementById('addId').value = ''
  document.getElementById('addName').value = ''
  document.getElementById('addEmail').value = ''
  document.getElementById('addPhone').value = ''
  document.getElementById('addThumbnail').value = ''
  

};

const editContact = () => {
  const id = document.getElementById('editId').value
  const name = document.getElementById('editName').value
  const email = document.getElementById('editEmail').value
  const phone = document.getElementById('editPhone').value
  const thumbnail = document.getElementById('editThumbnail').value

  const editedContact = {
    id,
    name,
    email,
    phone,
    thumbnail
  }

  for (let index = 0; index < contacts.length; index++) {
    const currentContact = contacts[index];

    if(currentContact.id === editedContact.id){
      contacts[index] = editedContact
    }
  }

  clearContacts()
  refreshContacts()

  document.getElementById('addId').value = ''
  document.getElementById('addName').value = ''
  document.getElementById('addEmail').value = ''
  document.getElementById('addPhone').value = ''
  document.getElementById('addThumbnail').value = ''
};

const refreshContacts = () => {
  clearContacts()

  for (let index = 0; index < contacts.length; index++) {
    const currentContact = contacts[index];

    addDiv(currentContact);
  }
};

const clearContacts = () => {
  const parent = document.getElementById('contacts-container')
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const addDiv = (contact) => {
  const { id, name, email, phone, thumbnail } = contact;
  let containerElement = document.getElementById("contacts-container");

  let contactDiv = document.createElement("div");
  contactDiv.className = "col-3";
  contactDiv.innerHTML = `
  <div class="col-content">
    <div class="card bg-secondary p-2 text-center">
    <img class="card-img-top rounded" src="${thumbnail}" alt="card-image">
    <div class="card-body">
      <div class="card-title text-white mx-auto"><h3>${name}</h3></div>
    </div>
    <ul class="list-group">
    <li class="list-group-item"><h6>ID:</h6> ${id}</li>
    <li class="list-group-item"><h6>Phone:</h6> ${phone}</li>
    <li class="list-group-item"><h6>Email:</h6> ${email}</li>
  </ul>
    </div>
  </div>

  `;

  containerElement.appendChild(contactDiv);
};

refreshContacts();
