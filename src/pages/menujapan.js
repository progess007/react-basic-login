import React, {useState, Fragment} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { nanoid } from "nanoid";
import { Menu } from "../index"
import { Footer } from "../index";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import data from "./menu-data.json"
import ReadOnlyRow from "../components/ReadOnlyRow";
import EditableRow from "../components/EditableRow";



export default function MenuJapan() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    menuName: "",
    menuPrice: ""
  });

  const [editFormData, setEditFormData] = useState({
    menuName: "",
    menuPrice: ""
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      id: contact.id,  
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

    return(
        <>
            <Menu />

                <Container className="p-3 my-3">
                    <Row>
                        <Col className="text-center">
                            <h3 className="text--line">เมนูอาหารญี่ปุ่น</h3>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="mt-5">
                            
                            <form onSubmit={handleEditFormSubmit}>
                                <table>
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>ชื่อเมนู</th>
                                    <th>ราคา</th>
                                    <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {contacts.map((contact) => (
                                    <Fragment>
                                        {editContactId === contact.id ? (
                                        <EditableRow
                                            editFormData={editFormData}
                                            handleEditFormChange={handleEditFormChange}
                                            handleCancelClick={handleCancelClick}
                                        />
                                        ) : (
                                        <ReadOnlyRow
                                            contact={contact}
                                            handleEditClick={handleEditClick}
                                            handleDeleteClick={handleDeleteClick}
                                        />
                                        )}
                                    </Fragment>
                                    ))}
                                </tbody>
                                </table>
                            </form>
                        </Col>
                    </Row>

                    <Row className="mt-5">

                        <Col className="col-12">
                            <form onSubmit={handleAddFormSubmit}>
                                <label className="px-2"> ชื่อเมนู </label>
                                <input 
                                    type="text"
                                    name="menuName"
                                    className="form-control d-inline"
                                    style={{width: "20%", margin: "0 10px"}} 
                                    required="required"
                                />
                                <label> ราคา </label>
                                <input 
                                    type="text"
                                    name="menuPrice"
                                    className="form-control d-inline"
                                    style={{width: "20%", margin: "0 10px"}}
                                    required="required"
                                />
                                <Button type="submit"> add </Button>
                            </form>
                            
                        </Col>
                    </Row>
                </Container>

            <Footer />
        </>
    )
}