import styled from 'styled-components'

import { BsListCheck, BsPlusCircle, BsCheckCircle, BsTrash3, BsJournalPlus  } from 'react-icons/bs';

export const Container = styled.div`
    background: #2a2a2a;
    width: 100vw;
    min-height: 100vh;
    padding-bottom: 80px;
`

export const Mask = styled.div`
    background: #000;
    width: 100vw;
    height: 200px;
    position: absolute;
    z-index: 1;
`

export const Main = styled.div`
    width: clamp(375px, 100%, 700px);
    height: auto;
    margin: 0 auto;
    padding: 10px;
    position: relative;
    top: 67px;
    z-index: 2;

    display: flex;;
    flex-direction: column;
    align-items: center;
    justify-items: center;

    ul {
        width: 100%;
        height: auto;
        border: 2px solid #303030;
        border-radius: 5px;
        padding: 5px;
    }
`

export const H1 = styled.h1`
    color: #fff;
    text-align: center;
    letter-spacing: 0.3px;

    span {
        color: #ff0000;
    }
`

export const ListCheck = styled(BsListCheck)`
    color: #fff;
`

export const InButtonBox = styled.div`
    display: flex;
    align-items: baseline;
    width: 100%;
`

export const Input = styled.input`
    background: #262626;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    margin: 53px 0 50px;
    padding-left: 5px;
    outline: none;
    font-size: 14px;
    color: #ffffff;
    letter-spacing: 0.3px;
    display: inline-block;
`

export const Button = styled.button`
    background: #ff0000;
    border: none;
    width: 90px;
    height: 42px;
    border-radius: 5px;
    margin-left: 8px;
    color: #fff;
    letter-spacing: 0.3px;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    &:hover svg {
        opacity: 1;
    }
`

export const BookMark = styled(BsPlusCircle)`
    font-size: 18px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
`

export const IsFinishedBox = styled.div`
    width: 100%;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        font-size: 14px;
        color: #ff0000;
        letter-spacing: 0.3px;

        span {
            border-radius: 20px;
            padding: 2px 8px;
            background: #303030;
            color: #fff;
        }
    }
`

export const List = styled.div`
    background: ${props => props.$isFinished ? '#556B2F' : '#303030'};
    width: 100%;
    height: 60px;
    border-radius: 5px;
    margin: 5px 0;
    padding: 10px;
    list-style: none;
    font-size: 16px;
    letter-spacing: 0.3px;
    color: #fff; 
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
        opacity: ${props => props.$isFinished ? 0.7 : 1};
        text-decoration: ${props => props.$isFinished ? 'line-through 2px red' : 'none'};
    }

    &:hover svg {
        opacity: 1;
    }
`

export const Check = styled(BsCheckCircle)`
    font-size: 20px;
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
`

export const Trash = styled(BsTrash3)`
    font-size: 20px;
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
`

export const ElseBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px;
`

export const AddList = styled(BsJournalPlus)`
    color: #fff;
    font-size: 30px;
    opacity: 0.6;
    margin-bottom: 30px;
`

export const H3 = styled.h3`
    color: #fff;
    font-size: 14px;
    font-weight: 200;
`

export const H4 = styled.h4`
    color: #fff;
    font-size: 14px;
    font-weight: 200;
    opacity: 0.5;
`