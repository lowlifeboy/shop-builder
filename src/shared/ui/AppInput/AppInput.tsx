import cls from './AppInput.module.scss';

import {classNames} from "shared/lib/classNames/classNames";
import {ChangeEvent, useEffect, useState} from "react";
import {useDebounce} from "shared/lib/useDebounce/useDebounce";

interface AppInputProps {
  onChange: (value: string) => void;
  debounceTimeMS?: number;
  className?: string;
}

export default function AppInput({onChange, debounceTimeMS, className}: AppInputProps) {
  const [value, setValue] = useState<string>('');

  const debouncedValue = useDebounce(value, debounceTimeMS || 0);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  useEffect(() => {
    if (value && debouncedValue) {
      onChange(value);
      console.log('Handle change');
    } else {
      onChange('');
      console.log('Handle clear');
    }
  }, [debouncedValue]);

  return (
    <div className={classNames(cls.appInput, {}, [className])}>
      <input value={value} type="text" onChange={handleChange} />
    </div>
  );
}
