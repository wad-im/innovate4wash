import { css } from 'styled-components'

export const Form = () => css`
    padding: 2rem;
    background-color: #137a757d;
    border-radius: 1rem;
    height: fit-content;
    box-shadow: 
        0 0.625rem 0.9375rem -0.1875rem rgba(0, 0, 0, 0.1),
        0 .25rem .375rem -0.125rem rgba(0, 0, 0, 0.05);
    form {
        display: grid;
        grid-row-gap: 1.5rem;
    }
    .input-container {
        display: flex;
        flex-direction: column;
    }
    label {
        font-weight: 700;
        margin-bottom: 0.25rem;
        width: 100%;
    }
    input {
        background: none;
        background-color: none;
        border: none;
        border-bottom: 1px solid #20C9C1;
        font-size: 1rem;
        color: #fff;
        padding: .625rem .625rem .625rem .3125rem;
        &:focus {
            outline: none;
            border: 1px solid #20C9C1;
            border-radius: 0.5rem;
        }
        &::placeholder {
            color: #1AA19B;
            font-weight: 400;
            font-size: 1rem;
        }
    }
    .error-message {
        font-size: 0.75rem;
        align-self: flex-end;
    }
    .submit-button {
        all: unset;
        place-self: end;
        cursor: pointer;
        color: #fff;
        display: inline-flex;
        appearance: none;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        user-select: none;
        white-space: nowrap;
        vertical-align: middle;
        outline: transparent solid 2px;
        outline-offset: 2px;
        width: fit-content;
        min-height: 2rem;
        border-radius: 0.375rem;
        line-height: 1.2;
        padding-inline-start: 0.75rem;
        padding-inline-end: 0.75rem;
        background-color: #1AA19B;
        transition: transform 0.3s ease, border 0.3s ease;
        :active {
            transform: scale(0.98);
        }
        :focus {
            outline: 1px solid #fff;
            outline-offset: -4px;
        }
        :disabled {
            cursor: not-allowed;
        }
    }
    .notice {
        margin-top: 1rem;
        p, a {
            font-size: 0.8rem;
        }
        a {
            color: #1AA19B;
        }
    }
    @media screen and (max-width: 398px){
        padding: 1.5rem;
    }
`

