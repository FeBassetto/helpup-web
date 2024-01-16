import { InputHTMLAttributes, useEffect, useRef, useState } from "react";
import {
  Container,
  PasswordIcon,
  PasswordSlashIcon,
  PlaceHolder,
  StyledInput,
} from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  isPassword: boolean;
  onTextChange?: (value: string) => void;
}

export function Input({
  isPassword,
  placeholder,
  onTextChange,
  ...rest
}: InputProps) {
  const [textInput, setTextInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setTextInput(newValue);
    if (onTextChange) {
      onTextChange(newValue);
    }
  };

  useEffect(() => {
    if (isFocus) {
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isFocus]);

  return (
    <Container>
      <PlaceHolder onClick={() => setIsFocus(true)} isFocus={isFocus}>
        {placeholder}
      </PlaceHolder>
      <StyledInput
        {...rest}
        ref={inputRef}
        onBlur={() => !textInput && setIsFocus(false)}
        value={textInput}
        onChange={handleInputChange}
        type={showPassword ? "text" : "password"}
      />
      {isPassword &&
        (showPassword ? (
          <PasswordSlashIcon size={32} onClick={() => setShowPassword(false)} />
        ) : (
          <PasswordIcon size={32} onClick={() => setShowPassword(true)} />
        ))}
    </Container>
  );
}
