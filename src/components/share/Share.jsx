import './share.css'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {AttachFileOutlined } from "@mui/icons-material"
import { red } from '@mui/material/colors';

export default function Share() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className='modalbuttonRed' onClick={handleShow}>
        Publicar
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='modalheader'>
          <Modal.Title className='modaltitle'>Nueva Publicación</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modalbody'>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInputText">
              <Form.Label>Asunto</Form.Label>
              <Form.Control
                type="text"
                placeholder="Escribe el asunto de la publicación"
                className='forminput'
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea"
            >
              <Form.Label>Contenido</Form.Label>
              <Form.Control 
                as="textarea" rows={3} 
                placeholder="Escribe el contenido de la publicación "
                className='forminput'
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInputFile">
            <AttachFileOutlined sx={{ color: red[500] }} />
              <Form.Label className='formlabelfile'>Adjuntar Archivo</Form.Label>
              <Form.Control
                type="file"
                className='forminputfile'
              >
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className='modalfooter'>
          <button className='modalbuttonGrey' onClick={handleClose}>
            Cancelar
          </button>
          <button className='modalbuttonRedSmall' onClick={handleClose}>
            Publicar
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

