import React from 'react';
import { Link } from 'react-router-dom';

import { FiUsers, FiTrash2, FiPower } from 'react-icons/fi';
import { MdSchool } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';


import './profile.css';
import logoimg from '../../assets/logo.png';

export default function Profile() {
    return (
        <div>
            <header>
                <img src={logoimg} alt="Love Job" />
                <span>Bem vindo, Renato</span>

                {/* <Link to="/vagas/new" className="button">Cadastrar nova Vaga</Link> */}
                <button className='button' type="button">
                    <FiPower className="icon" size={18} color="#e02041" />
                </button>

            </header>

            <h1>Todas as Vagas</h1>

            <ul>
                <li>
                    <Link to="/vagas">
                        <strong>AUXILIAR OPERACIONAL FRENTE DE LOJA</strong>

                            <div className="groupSection">
                                <FiUsers className="icon" size={25} color="#2ab3b9" />
                                <div className="section">
                                    <p>Numero de vagas</p>
                                    <span>2</span>
                                </div>
                            </div>

                            <div className="groupSection">
                                <MdSchool className="icon" size={25} color="#2ab3b9" />
                                <div className="section">
                                    <p>Escolaridade</p>
                                    <span>Ensino médio completo</span>
                                </div>
                            </div>

                            <div className="groupSection">
                                <FaMapMarkerAlt className="icon" size={25} color="#2ab3b9" />
                                <div className="section">
                                    <p>Cidade</p>
                                    <span>Leopoldina-MG</span>
                                </div>
                            </div>
                     



                        <button type="button">
                            <FiTrash2 size={20} color="#a8a8b3" style={{ marginLeft: "auto" }} />
                        </button>
                    </Link>
                </li>


                <li>
                    <Link to="/vagas">
                        <strong>AUXILIAR OPERACIONAL FRENTE DE LOJA</strong>
                        <div className="groupSection">
                            <FiUsers className="icon" size={25} color="#2ab3b9" />
                            <div className="section">
                                <p>Numero de vagas</p>
                                <span>2</span>
                            </div>
                        </div>

                        <div className="groupSection">
                            <MdSchool className="icon" size={25} color="#2ab3b9" />
                            <div className="section">
                                <p>Escolaridade</p>
                                <span>Ensino médio completo</span>
                            </div>
                        </div>

                        <div className="groupSection">
                            <FaMapMarkerAlt className="icon" size={25} color="#2ab3b9" />
                            <div className="section">
                                <p>Cidade</p>
                                <span>Leopoldina-MG</span>
                            </div>
                        </div>



                        <button type="button">
                            <FiTrash2 size={20} color="#a8a8b3" style={{ marginLeft: "auto" }} />
                        </button>
                    </Link>
                </li>

                <li>
                    <Link to="/vagas">
                        <strong>AUXILIAR OPERACIONAL FRENTE DE LOJA</strong>
                        <div className="groupSection">
                            <FiUsers className="icon" size={25} color="#2ab3b9" />
                            <div className="section">
                                <p>Numero de vagas</p>
                                <span>2</span>
                            </div>
                        </div>

                        <div className="groupSection">
                            <MdSchool className="icon" size={25} color="#2ab3b9" />
                            <div className="section">
                                <p>Escolaridade</p>
                                <span>Ensino médio completo</span>
                            </div>
                        </div>

                        <div className="groupSection">
                            <FaMapMarkerAlt className="icon" size={25} color="#2ab3b9" />
                            <div className="section">
                                <p>Cidade</p>
                                <span>Leopoldina-MG</span>
                            </div>
                        </div>



                        <button type="button">
                            <FiTrash2 size={20} color="#a8a8b3" style={{ marginLeft: "auto" }} />
                        </button>
                    </Link>
                </li>

                <li>
                    <Link to="/vagas">
                        <strong>AUXILIAR OPERACIONAL FRENTE DE LOJA</strong>
                        <div className="groupSection">
                            <FiUsers className="icon" size={25} color="#2ab3b9" />
                            <div className="section">
                                <p>Numero de vagas</p>
                                <span>2</span>
                            </div>
                        </div>

                        <div className="groupSection">
                            <MdSchool className="icon" size={25} color="#2ab3b9" />
                            <div className="section">
                                <p>Escolaridade</p>
                                <span>Ensino médio completo</span>
                            </div>
                        </div>

                        <div className="groupSection">
                            <FaMapMarkerAlt className="icon" size={25} color="#2ab3b9" />
                            <div className="section">
                                <p>Cidade</p>
                                <span>Leopoldina-MG</span>
                            </div>
                        </div>



                        <button type="button">
                            <FiTrash2 size={20} color="#a8a8b3" style={{ marginLeft: "auto" }} />
                        </button>
                    </Link>
                </li>



            </ul>

        </div>
    )
}
