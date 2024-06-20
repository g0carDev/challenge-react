import React from "react"

interface Props {
    image: React.ReactNode
    message: string
}

export const ImageMessage = ({ image, message }: Props) => {
    return (
        <section style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', justifyContent: "center", gap: '24px', background: 'white', borderRadius: '10px', padding: '50px'
        }}>
            {image}
            <p style={{ color: '#8A8A8A', textAlign: 'center' }}>{message}</p>
        </section>
    )
}
