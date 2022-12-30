import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Select from 'react-select'
import earth from '../../src/assets/images/earth.svg'

import { FileIcon } from "./icon";

function TopHeader() {

  const language = [
    { value: 'EN', label: 'EN' },
    { value: 'FR', label: 'FR' },
    { value: 'DE', label: 'DE' },
    { value: 'RU', label: 'RU' },
  ]

  

  return (
    <>
      <div className="top-header bg-secondary d-flex justify-between align-center is-mobile">
        <div className="top-header-menu ">
          <ul className="top-header-menu d-flex">
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="text-white font-14 font_primary-400"
              >
                <span>FIGURE SKATING</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="text-white font-14 font_primary-400"
              >
               <span> SYNCHRONIZED SKATING</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="text-white font-14 font_primary-400"
              >
               <span> SPEED SKATING</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="text-white font-14 font_primary-400"
              >
                <span>SHORT TRACK</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="top-header-right">
          <div className="top-header-right-flex d-flex align-center">
          <img src={earth} />
        <Select 
        options={language} 
        // menuIsOpen={true}
        defaultValue={language[0]}
        isSearchable={false}
        />
          </div>
        </div>
      </div>
    </>
  );
}

export default TopHeader;
