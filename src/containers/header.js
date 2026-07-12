import React, {useState} from 'react';
import { Header } from '../components';
import logo from '../images/home/logo.jpeg';

export function HeaderContainer() {
    const [open, setOpen] = useState(false);

    return (
        <Header>
            <Header.InnerContainer>
                <Header.LogoBox to="/">
                    <Header.Logo src={logo} alt="" width="40"/>
                    <Header.HomeLink>ETERNAL POSSIBILITIES</Header.HomeLink>
                </Header.LogoBox>
                <Header.LinkContainer>
                    <Header.StyledLink to="/blog">Archive</Header.StyledLink>
                    <Header.StyledLink to="/podcast">Podcast</Header.StyledLink>
                </Header.LinkContainer>
                <Header.StyledBurgerContainer onClick={() => setOpen(!open)}>
                    <Header.StyledBurger open={open}>
                      <div />
                      <div />
                      <div />
                    </Header.StyledBurger>
                </Header.StyledBurgerContainer>
            </Header.InnerContainer>

            <Header.DropdownMenuContainer open={open}>
                <Header.DropdownMenuText open={open}>
                    <Header.DropdownLink to="/blog">Archive</Header.DropdownLink>
                </Header.DropdownMenuText>
                <Header.DropdownMenuText open={open}>
                    <Header.DropdownLink to="/podcast">Podcast</Header.DropdownLink>
                </Header.DropdownMenuText>
            </Header.DropdownMenuContainer>
        </Header>
    )
}
