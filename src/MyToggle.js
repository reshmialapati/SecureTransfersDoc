import { Switch } from '@headlessui/react';
import { GoMoon } from "react-icons/go";
import { CiLight } from "react-icons/ci";
import './MyToggle.css';

const MyToggle=({ state, setState }) =>{
  return (
    <div className='alignToggle'>
      <Switch
        checked={state}
        onChange={setState}
        className={`${state ? 'trueState' : 'falseState'} myToggle`}
      >
        <span
          className={`${state ? `toggleButtonDark` : 'toggleButtonLight'} toggleButton`}
        >
          <span className='icon'>
            {state ? <GoMoon /> : <CiLight />}
          </span>
        </span>
      </Switch>
    </div>
  )
}

export default MyToggle;