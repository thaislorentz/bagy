import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { errorToast } from '../../utils/toast'; import logo from "../../resources/logo.png";
import { FaUserCircle } from 'react-icons/fa'
import { FiMenu, FiMapPin } from 'react-icons/fi'
import { IoIosLogOut } from 'react-icons/io'
import { AiTwotoneEdit, AiOutlineUser, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import Menu from '../Menu'
import api from '../../utils/api';
import { useAutenticacaoContext } from '../../contexts/AutorizacaoContext';
import { ErrorMessage, Field, Form, Formik } from 'formik'

import "./style.scss";

const Header = ({ onClose, drawerUser }) => {
  const [menu, setMenu] = useState(false)
  const [changePassword, setChangePassword] = useState(false)
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  })
  const [editUser, setEditUser] = useState(false)
  const { autorizado, token, fazerLogout } = useAutenticacaoContext();
  const [userEditDrawer, setUserEditDrawer] = useState(false)

  const history = useHistory()
  const id = "userEditDrawer"

  const getUser = async () => {
    try {
      await api.get('/user', {
        headers: {
          'x-access-token': token
        }
      }).then((response) => {
        setUser(response.data)
      })
    } catch (err) {
      fazerLogout()
			history.push('/')
      errorToast('Tente novamente!');
    }
  }

  const logout = () => {
    fazerLogout()
    history.push('/')
  }

  const handleFormSubmit = async (values, newPassword = false) => {
    let regex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%*()_+^&}{:;?.])(?:([0-9a-zA-Z!@#$%;*(){}_+^&])(?!\1)){6,}$/;
    if (regex.test(values.last_password)) {

      if (newPassword && values.last_password === values.password) {
        await api.post('user/update', values, {
          headers: {
            'x-access-token': token
          }
        }).then(() => {
          getUser()
          setChangePassword(!changePassword)
        })
      } else {
        try {
        await api.post('user/update', values, {
          headers: {
            'x-access-token': token
          }
        }).then(() => {
          getUser()
          setEditUser(!editUser)
        })
      } catch (err) {
        errorToast('Email ou senha incorretos. Tente novamente!');
      }}
    } else {
      errorToast('Email ou senha incorretos. Tente novamente!');
    }
  }

  useEffect(() => {
    if (!autorizado) {
      history.push('/');
    } else {
      getUser()
    }
    // eslint-disable-next-line
  }, [])

  const handleOutSideClick = (e) => {
    if (e.target.id === id) {
      onClose()
      setEditUser(!editUser)
    }
  }

  return (
    <>
      <div className="header">
        <div className="header-logo">
          <div className="header-menu" onClick={() => setMenu(!menu)}>
            <FiMenu size={23} className="header-user-icon" />
          </div>
          <img
            src={logo}
            className="header-image"
            alt="neoSilence"
          />
        </div>
        <div className="header-user" onClick={() => onClose()}>
          <FaUserCircle size={23} className="header-user-icon" />
          <span className="header-user-name">{user.name}</span>
        </div>
      </div>
      {drawerUser && <div className="user" id={id} onClick={handleOutSideClick}>
        <div className="user-container">
          <div className="user-container-informations">
            <FaUserCircle size={50} className="user-conta-icon" />

            <div className="user-container-informations-campos">
              <div className={editUser ? "user-container-informations-display none" : "user-container-informations-display"} >
                <span className="user-dados nome"><AiOutlineUser size={20} className="header-user-icon" />{user.name}</span>
                <span className="user-dados"><AiOutlineMail size={20} className="header-user-icon" />{user.email}</span>
                <span className="user-dados"><AiOutlinePhone size={20} className="header-user-icon" />{user.phone}</span>
                <span className="user-dados"><FiMapPin size={20} className="header-user-icon" />{user.address}</span>
              </div>
              <Formik
                initialValues={{
                  name: user.name,
                  email: user.email,
                  phone: user.phone,
                  address: user.address,
                  last_password: ''
                }}
                onSubmit={(values) => handleFormSubmit(values)}
              >
                {({ errors, touched }) => (
                  <Form className={editUser ? "user-form-campos" : "user-form-campos none"}>
                    <strong>Editar dados</strong>
                    <label htmlFor="name" className="user-label">
                      Nome
                      <Field name="name" className={`${(errors.email && touched.email) ? 'is-invalid input' : ''} `} />
                      <ErrorMessage name="name" className="is-invalid" component="span" />
                    </label>
                    <label htmlFor="email" className="user-label">
                      Email
                      <Field name="email" type="email" className={`${(errors.email && touched.email) ? 'is-invalid input' : ''} `} />
                      <ErrorMessage name="email" className="is-invalid" component="span" />
                    </label>
                    <label htmlFor="phone" className="user-label">
                      Telefone
                      <Field name="phone" type="number" className={`${(errors.password && touched.password) ? 'is-invalid input' : ''} `} />
                      <ErrorMessage name="phone" className="is-invalid" component="span" />
                    </label>
                    <label htmlFor="address" className="user-label">
                      Endereço
                      <Field name="address" className={`${(errors.password && touched.password) ? 'is-invalid input' : ''} `} />
                      <ErrorMessage name="address" className="is-invalid" component="span" />
                    </label>
                    <label htmlFor="password" className="user-label">
                      Senha
                      <span className="user-lembrete">* Obrigatorio para editar qualquer informação</span>
                      <Field name="last_password" type="password" className={`${(errors.password && touched.password) ? 'is-invalid input' : ''} `} />
                      <ErrorMessage name="last_password" className="is-invalid" component="span" />
                    </label>
                    <button type="submit" className="user-submit">Editar</button>
                  </Form>
                )}
              </Formik>
              <AiTwotoneEdit size={23} onClick={() => setEditUser(!editUser)} className="user-container-informations-campos-icone" />
            </div>
          </div>
          <div className="user-linha" />
          <div className="user-conta" onClick={() => setChangePassword(!changePassword)}>
            Trocar a senha?
          </div>
          {changePassword && <Formik
                initialValues={{
                  password: '',
                  password1: '',
                  last_password: ''
                }}
                onSubmit={(values) => handleFormSubmit(values)}
              >
                {({ errors, touched }) => (
                  <Form className="user-form-campos">
                    <label htmlFor="password" className="user-label">
                      Nova senha
                      <Field name="password" type="password"className={`${(errors.email && touched.email) ? 'is-invalid input' : ''} `} />
                      <ErrorMessage name="password" className="is-invalid" component="span" />
                    </label>
                    <label htmlFor="password" className="user-label">
                      Confirmar nova senha
                      <Field name="password1" type="password"className={`${(errors.email && touched.email) ? 'is-invalid input' : ''} `} />
                      <ErrorMessage name="password1" className="is-invalid" component="span" />
                    </label>
                    <label htmlFor="last_password" className="user-label">
                      Senha antiga
                      <Field name="last_password" type="password" className={`${(errors.email && touched.email) ? 'is-invalid input' : ''} `} />
                      <ErrorMessage name="last_password" className="is-invalid" component="span" />
                    </label>
                    <button type="submit" className="user-submit">Editar</button>
                  </Form>
                )}
              </Formik>}
          <div className="user-conta">
            <div className="user-conta-logout" onClick={() => logout()}>
              <IoIosLogOut size={23} />
              Sair
            </div>
          </div>
        </div>
      </div>}
      <Menu showMenu={menu} onClose={() => { setMenu(!menu); }} />
    </>
  );
};

export default Header;
