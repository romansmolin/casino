import React from 'react'

const Logo = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="600"
            height="600"
            viewBox="0 0 600 600"
            className="w-12 h-12 md:w-16 md:h-16">
            <foreignObject width="100%" height="100%" x="0" y="0" externalResourcesRequired="true">
                <div className="bg-transparent w-screen max-w-full aspect-square md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[600px] xl:h-[600px]">
                    <div
                        className="w-full aspect-square overflow-hidden flex justify-center items-center shadow-xl bg-primary"
                        style={{
                            borderRadius: '80px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="400"
                                height="400"
                                viewBox="0 0 24 24"
                                fill="#ffffff"
                                stroke="rgba(255, 255, 255, 1)"
                                strokeWidth="2.3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-spade"
                                style={{
                                    fillOpacity: 0,
                                    verticalAlign: 'middle',
                                    overflow: 'hidden',
                                }}>
                                <path d="M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z" />
                                <path d="M12 18v4" />
                            </svg>
                        </span>
                    </div>
                </div>
            </foreignObject>
        </svg>
    )
}

export default Logo
