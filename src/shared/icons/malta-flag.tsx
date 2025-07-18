import React from 'react'

import { cn } from '../lib/css'

const MaltaFlag: React.FC<Icon> = ({ className }) => {
    return (
        <svg
            className={cn(className)}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
        >
            <path
                d="M19,4h12V28h-12c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                transform="rotate(180 23 16)"
                fill="#bf2c30"
            ></path>
            <path
                d="M5,4h11V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z"
                fill="#fff"
            ></path>
            <path
                d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                opacity=".15"
            ></path>
            <path
                d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                fill="#fff"
                opacity=".2"
            ></path>
            <path
                d="M8.367,9.068c-.001-.009-.003-.018-.004-.026-.047-.241-.254-.431-.488-.465v-1.576h-1.861v1.576c-.009,.001-.018,.003-.026,.004-.241,.047-.431,.254-.465,.488h-1.576v1.861h1.576c.001,.009,.003,.018,.004,.026,.047,.241,.254,.431,.488,.465v1.576h1.861v-1.576c.009-.001,.018-.003,.026-.004,.241-.047,.431-.254,.465-.488h1.576v-1.861h-1.576Z"
                fill="#fff"
            ></path>
            <path
                d="M8.125,13.247h-2.361v-1.641c-.188-.085-.342-.238-.427-.427h-1.641v-2.361h1.642c.084-.188,.237-.342,.426-.427v-1.641h2.361v1.641c.188,.085,.342,.238,.427,.427h1.641v2.361h-1.641c-.084,.188-.238,.343-.427,.427v1.641Zm-1.861-.5h1.361v-1.538l.209-.035c.152-.029,.267-.149,.286-.282l.031-.214h1.541v-1.361h-1.549l-.024-.218c-.029-.144-.148-.257-.281-.277l-.213-.031v-1.542h-1.361v1.538l-.209,.035c-.151,.029-.266,.149-.285,.282l-.031,.214h-1.542v1.361h1.525l.044,.196c.032,.165,.151,.279,.285,.299l.213,.031v1.542Z"
                fill="#bf2c30"
            ></path>
        </svg>
    )
}

export default MaltaFlag
