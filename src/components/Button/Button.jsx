import './Button.css'

const Button = ({ mail, setMail, item }) => {
    return (
        <>
            <button className='round' onClick={() => setMail(item.mail)}>
                mail
            </button>
        </>
    )
}

export default Button
