import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import TopHeader from "./TopHeader";
import logo from '../../src/assets/images/featured-logo.svg'
import menu from '../../src/assets/images/menu-icon.svg'
import close from '../../src/assets/images/close.png'
import tablephoto from '../../src/assets/images/table-photo.png'
import { Search, User } from "./icon";
import { Youtube, Social, Facebook, Call, Fax, Twitter, Instagram } from "./icon";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

function StandingTable() {


  return (
    <>
       <Table>
            <thead>
              <tr>
                <th>rank</th>
                <th>photo</th>
                <th>name</th>
                <th>points</th>
                <th>country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>04</td>
                <td><img class="user_img" src={tablephoto} /></td>
                <td>Morisi KVITELASHVILI</td>
                <td>3091</td>
                <td>geo</td>
              </tr>
              <tr>
                <td>04</td>
                <td><img class="user_img" src={tablephoto} /></td>
                <td>Morisi KVITELASHVILI</td>
                <td>3091</td>
                <td>geo</td>
              </tr>
              <tr>
                <td>04</td>
                <td><img class="user_img" src={tablephoto} /></td>
                <td>Morisi KVITELASHVILI</td>
                <td>3091</td>
                <td>geo</td>
              </tr>
              <tr>
                <td>04</td>
                <td><img class="user_img" src={tablephoto} /></td>
                <td>Morisi KVITELASHVILI</td>
                <td>3091</td>
                <td>geo</td>
              </tr>
              <tr>
                <td>04</td>
                <td><img class="user_img" src={tablephoto} /></td>
                <td>Morisi KVITELASHVILI</td>
                <td>3091</td>
                <td>geo</td>
              </tr>
             
      </tbody>
    </Table>

    </>
  );
}

export default StandingTable
