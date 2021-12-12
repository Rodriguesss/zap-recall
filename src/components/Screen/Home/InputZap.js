export default function InputZap({ setValue }) {
  return (
    <input type="number" placeholder="Sua meta de zaps"
      onChange={(e) => { setValue(e.target.value) }} />
  )
}