import "./Button.css"

const Button = ({ children }) => {
  return (
    <>
      <button className="round">{children}</button>
    </>
  )
}

export default Button
