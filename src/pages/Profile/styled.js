import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    max-width: 1180px;
    padding: 0 30px;
    margin: 32px auto;

    h1 {
        margin-top: 80px;
        margin-bottom: 24px;
    }

    ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 24px;
        list-style: none;
    }

    li {
        background: #fff;
        padding: 24px;
        border-radius: 8px;
        position: relative;

    }

    li button {
        position: absolute;
        right: 18px;
        top: 18px;
        border: 0;
        background: transparent;
    }

   li button:hover {
        opacity: 0.8;
    }

    li strong {
        display: block;
        margin-bottom: 20px;
        color: #41414d;
    }

    /* li p +strong {
        margin-top: 10px;
    } */

    li p {
        color: #737380;
        line-height: 21px;
        font-size: 16px;
    }

    ul li a {
        text-decoration: none;
    }
    li:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    }
    .group {
        display: flex;
        align-items: center;
        margin-bottom: 20px;

        .icon {
            margin-right: 10px;
        }

        p {
            font-weight: bold;

        }
        span {
            color: #222;
        }
    }

`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        font-size: 20px;
        margin-left: 24px;
    }

    img {
        height: 64px;
    }

    a {
        width: 260px;
        margin-left: auto;
        margin-top: 0;
    }

    .icon {
        margin-left: 7px;
       
    }

    button {
        height: 60px;
        width: 60px;
        border-radius: 4px;
        border: 1px solid #dcdce6;
        background: transparent;
        margin-left: 16px;
        transition: border-color 0.2s;
    }


    button:hover {
        border-color: #999;
    }

   

`;

