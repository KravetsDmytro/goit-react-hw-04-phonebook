import React from 'react';
import css from './/contactList.module.css';



const ContactList =({contacts, onDeleteContact})=>(


<div className={css.contactCard}>
<ul className={css.contact}>{ contacts.map(({id , name, number})=>(
<li key={id } className={css.item} >
<p className={css.name}>{name}</p>
<p className={css.number}>{number}</p>

<button className={css.button} onClick={()=> onDeleteContact(id) }>delete</button>

</li>
))}</ul>
</div>
)






export default ContactList;
