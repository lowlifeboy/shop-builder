import {useState} from "react";

interface UseThemeResult {
  opened: boolean;
  toggle: () => void;
}
export function useToggle(): UseThemeResult {
  const [opened, setOpened] = useState<boolean>(false);

  function toggle() {
    setOpened(!opened);
  }

  return {opened, toggle};
}
