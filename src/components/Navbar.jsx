import React from 'react'
import Badge from '@mui/material/Badge';
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Container = styled.div`
    height: 60px;
    ${mobile({height: "50px"})}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({padding: "10px 0px"})}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;


const Language = styled.div`
    font-size: 16px;
    cursor: pointer;
    margin-left: 25px;
    padding: 5px;
    ${mobile({display: "none"})}
`;

const Input = styled.input`
    border: none;
    ${mobile({width: "50px"})}
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
`;

const Center = styled.div`
    flex: 1;
`;

const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
    ${mobile({fontSize: "16px"})}
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex: 2, justifyContent: "center"})}
`;


const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    color: #000 !important;
    ${mobile({fontSize: "12px", marginLeft: "10px"})}
`;

const Navbar = () => {

    const quantity = useSelector(state => state.cart.quantity);
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder="Search"/>
                    <Search style={{color:"gray", fontSize:16}}/>
                </SearchContainer>
            </Left>

            <Center>
                <Logo>
                    <Link to='/'>Kandy Shop.</Link>
                </Logo>
            </Center>

            <Right>
                <MenuItem><Link to='/register'>REGISTER</Link></MenuItem>
                <MenuItem><Link to="/login">SIGN IN</Link></MenuItem>
                <MenuItem>
                    <Badge badgeContent={quantity} color="primary">
                        <Link to="/cart"><ShoppingCartOutlined/></Link>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar