import React from 'react'

import { cn } from '../lib/css'

const NorthMacedoniaFlag: React.FC<Icon> = ({ className }) => {
    return (
        <svg
            className={cn(className)}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
        >
            <rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#c8342d"></rect>
            <path
                d="M11.847,17.909L1,23.424v.576c0,.835,.257,1.609,.695,2.251l10.676-7.484c-.203-.266-.382-.55-.524-.857Z"
                fill="#f4e959"
            ></path>
            <path
                d="M11.417,16c0-.155,.031-.302,.046-.454L1,14.5v3l10.463-1.046c-.015-.151-.046-.298-.046-.454Z"
                fill="#f4e959"
            ></path>
            <path
                d="M16,11.417c.171,0,.333,.032,.499,.05l1.901-7.467h-4.8l1.901,7.467c.166-.018,.328-.05,.499-.05Z"
                fill="#f4e959"
            ></path>
            <circle cx="16" cy="16" r="3.75" fill="#f4e959"></circle>
            <path
                d="M12.371,13.233L1.695,5.749c-.438,.641-.695,1.416-.695,2.251v.576l10.847,5.515c.142-.307,.32-.591,.524-.857Z"
                fill="#f4e959"
            ></path>
            <path
                d="M20.583,16c0,.155-.031,.302-.046,.454l10.463,1.046v-3l-10.463,1.046c.015,.151,.046,.298,.046,.454Z"
                fill="#f4e959"
            ></path>
            <path
                d="M30.305,5.749l-10.676,7.484c.203,.266,.382,.55,.524,.857l10.847-5.515v-.576c0-.835-.257-1.609-.695-2.251Z"
                fill="#f4e959"
            ></path>
            <path
                d="M16,20.583c-.171,0-.333-.032-.499-.05l-1.901,7.467h4.8l-1.901-7.467c-.166,.018-.328,.05-.499,.05Z"
                fill="#f4e959"
            ></path>
            <path
                d="M19.629,18.767l10.676,7.484c.438-.641,.695-1.416,.695-2.251v-.576l-10.847-5.515c-.142,.307-.32,.591-.524,.857Z"
                fill="#f4e959"
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
        </svg>
    )
}

export default NorthMacedoniaFlag
