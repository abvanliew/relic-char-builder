interface CheckboxProps {
  id: number
  label: string
  value: boolean
  toggleHandler: ( key: number, value: boolean ) => void
}

function Checkbox( { ...props }: CheckboxProps ): JSX.Element {
  function onChange() {
    props.toggleHandler( props.id, !props.value )
  }

  return (
    <label>
      <input 
        type="checkbox" 
        checked={ props.value }
        onChange={ onChange }
      />
      { props.label }
    </label>
  )
}

export default Checkbox;