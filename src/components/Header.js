import React from 'react';
import { Link, NavLink } from "react-router-dom";
import Search from "../pages/Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import "./Header.css";

function Header() {
    return (
        <div className="header">
                <Link to="/">
                    <img
                        className="header__logo"
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                        alt="logo"
                    />
                </Link>
                <div className="header__body">
                    <Search hideButton />

                    <div className="header__options">
                        <div className="header__optionsLeft">
                            <div className="header__option">
                                <SearchIcon />
                                <NavLink to="/search" activeClassName="active"> All </NavLink>
                            </div>
                            <div className="header__option">
                                <DescriptionIcon />
                                <NavLink to="/news" activeClassName="active"> News </NavLink>
                            </div>
                            <div className="header__option">
                                <ImageIcon />
                                <NavLink to="/images" activeClassName="active"> Images </NavLink>
                            </div>
                            <div className="header__option">
                                <LocalOfferIcon />
                                <NavLink to="/shopping" activeClassName="active"> Shopping </NavLink>
                            </div>
                            <div className="header__option">
                                <RoomIcon />
                                <NavLink to="/maps" activeClassName="active"> Maps </NavLink>
                            </div>
                            <div className="header__option">
                                <MoreVertIcon />
                                <NavLink to="/more" activeClassName="active"> More </NavLink>
                            </div>
                        </div>
                        <div className="header__optionsRight">
                            <Link to="/settings"> Settings </Link>
                            <Link to="/tools"> Tools </Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Header;
